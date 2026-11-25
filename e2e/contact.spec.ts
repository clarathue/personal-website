import { expect, test, type Page, type Route } from "@playwright/test";
import { EMAILJS_TESTWERTE } from "./emailjs-testwerte";

// Schicht 4a: Kontaktformular gegen eine Attrappe von EmailJS.
// Jede Anfrage an api.emailjs.com beantwortet der Test selbst – keine Mail verlässt den Rechner.
// Nie gegen Prod: dort liefe ein echter Versand, falls die Attrappe einmal nicht greift.
test.skip(!!process.env.BASE_URL, "Formular-Tests laufen nur gegen den lokalen Build");

const SEND_URL = "https://api.emailjs.com/api/v1.0/email/send";
const ERFOLG = "Nachricht erfolgreich gesendet!";
const FEHLER = /Fehler beim Senden der Nachricht/;

type Antwort = (route: Route) => Promise<void>;

async function attrappe(page: Page, antwort: Antwort) {
  const anfragen: Record<string, unknown>[] = [];
  await page.route("**/api.emailjs.com/**", async (route) => {
    anfragen.push(route.request().postDataJSON());
    await antwort(route);
  });
  return anfragen;
}

// Protokolliert jede Meldung (sonner-Toast), die je eingeblendet wird. So fällt auch
// eine Erfolgsmeldung auf, die einen Frame nach der Fehlermeldung erscheint.
async function meldungenProtokollieren(page: Page) {
  await page.addInitScript(() => {
    const w = window as unknown as { __meldungen: string[] };
    w.__meldungen = [];
    new MutationObserver(() => {
      for (const el of document.querySelectorAll("[data-sonner-toast]")) {
        const text = (el as HTMLElement).innerText;
        if (text && !w.__meldungen.includes(text)) w.__meldungen.push(text);
      }
    }).observe(document, { childList: true, subtree: true, characterData: true });
  });
}

async function alleMeldungen(page: Page): Promise<string[]> {
  // zwei Frames abwarten, damit gleichzeitig ausgelöste Meldungen gerendert sind
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  return page.evaluate(() => (window as unknown as { __meldungen: string[] }).__meldungen);
}

// Attrappe für das Google-Skript: kein Aufruf erreicht Google. Sie zählt die Anfragen, rendert
// eine Checkbox-Attrappe, die ein Token liefert, und zählt reset().
const RECAPTCHA_ATTRAPPE = `
window.grecaptcha = {
  zaehler: 0,
  resets: 0,
  ready(cb) { cb(); },
  render(el, o) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = "Ich bin kein Roboter";
    b.onclick = () => o.callback("test-token-" + ++window.grecaptcha.zaehler);
    el.appendChild(b);
    return 7;
  },
  reset() { window.grecaptcha.resets++; },
};`;

async function recaptchaAttrappe(page: Page) {
  const anfragen: string[] = [];
  await page.route("**/www.google.com/recaptcha/**", async (route) => {
    anfragen.push(route.request().url());
    await route.fulfill({ status: 200, contentType: "text/javascript", body: RECAPTCHA_ATTRAPPE });
  });
  return anfragen;
}

async function felderAusfuellen(page: Page) {
  await page.getByLabel("Name").fill("Test Person");
  await page.getByLabel("E-Mail").fill("test@example.invalid");
  await page.getByLabel("Nachricht").fill("TEST- Nachricht aus dem Formular-Test");
}

// Einwilligen (Skript laden) und die Checkbox lösen.
async function spamschutzLoesen(page: Page) {
  await page.getByRole("button", { name: "Spamschutz laden" }).click();
  await page.getByRole("button", { name: "Ich bin kein Roboter" }).click();
}

async function ausfuellenUndSenden(page: Page) {
  await recaptchaAttrappe(page);
  await page.goto("/contact");
  await felderAusfuellen(page);
  await spamschutzLoesen(page);
  await page.getByRole("button", { name: "Nachricht senden" }).click();
}

test("erfolgreicher Versand zeigt die Bestätigung und leert das Formular", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));
  await meldungenProtokollieren(page);

  await ausfuellenUndSenden(page);

  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect((await alleMeldungen(page)).filter((m) => FEHLER.test(m))).toEqual([]);
  await expect(page.getByLabel("Name")).toHaveValue("");
  await expect(page.getByLabel("E-Mail")).toHaveValue("");
  await expect(page.getByLabel("Nachricht")).toHaveValue("");

  expect(anfragen).toHaveLength(1);
  expect(anfragen[0]).toMatchObject({
    service_id: EMAILJS_TESTWERTE.VITE_EMAILJS_SERVICE_ID,
    template_id: EMAILJS_TESTWERTE.VITE_EMAILJS_TEMPLATE_ID,
    user_id: EMAILJS_TESTWERTE.VITE_EMAILJS_PUBLIC_KEY,
    template_params: {
      from_name: "Test Person",
      from_email: "test@example.invalid",
      reply_to: "test@example.invalid",
      message: "TEST- Nachricht aus dem Formular-Test",
    },
  });
  // Der Empfänger steht nur im EmailJS-Template, nie im Browser-Payload.
  expect(anfragen[0].template_params).not.toHaveProperty("to_email");
  expect(JSON.stringify(anfragen[0])).not.toContain("clara@thuemecke.net");
});

test("Fehlerantwort von EmailJS zeigt die Fehlermeldung und behält die Eingaben", async ({ page }) => {
  await attrappe(page, (route) => route.fulfill({ status: 400, body: "The template ID is invalid" }));
  await meldungenProtokollieren(page);

  await ausfuellenUndSenden(page);

  await expect(page.getByText(FEHLER)).toBeVisible();
  expect(await alleMeldungen(page)).not.toContain(ERFOLG);
  await expect(page.getByLabel("Name")).toHaveValue("Test Person");
  await expect(page.getByLabel("Nachricht")).toHaveValue("TEST- Nachricht aus dem Formular-Test");
  await expect(page.getByRole("button", { name: "Nachricht senden" })).toBeEnabled();
});

test("Netzwerkfehler zeigt die Fehlermeldung", async ({ page }) => {
  await attrappe(page, (route) => route.abort("internetdisconnected"));
  await meldungenProtokollieren(page);

  await ausfuellenUndSenden(page);

  await expect(page.getByText(FEHLER)).toBeVisible();
  expect(await alleMeldungen(page)).not.toContain(ERFOLG);
  await expect(page.getByRole("button", { name: "Nachricht senden" })).toBeEnabled();
});

test("während des Sendens ist der Knopf gesperrt", async ({ page }) => {
  let freigeben!: () => void;
  const gesperrt = new Promise<void>((resolve) => (freigeben = resolve));
  await attrappe(page, async (route) => {
    await gesperrt;
    await route.fulfill({ status: 200, body: "OK" });
  });

  await ausfuellenUndSenden(page);

  await expect(page.getByRole("button", { name: "Wird gesendet..." })).toBeDisabled();
  freigeben();
  await expect(page.getByText(ERFOLG)).toBeVisible();
});

test("die Attrappe greift für den echten Endpunkt", async ({ page }) => {
  const urls: string[] = [];
  page.on("request", (r) => { if (r.url().includes("emailjs")) urls.push(r.url()); });
  await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));

  await ausfuellenUndSenden(page);

  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect(urls).toEqual([SEND_URL]);
});

test("Leerzeichen am Rand werden vor dem Versand entfernt", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));

  await recaptchaAttrappe(page);
  await page.goto("/contact");
  await spamschutzLoesen(page);
  await page.getByLabel("Name").fill("  Test Person ");
  await page.getByLabel("E-Mail").fill("test@example.invalid");
  await page.getByLabel("Nachricht").fill("\n TEST- Nachricht mit Rand \n");
  await page.getByRole("button", { name: "Nachricht senden" }).click();

  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect(anfragen[0]).toMatchObject({
    template_params: { from_name: "Test Person", message: "TEST- Nachricht mit Rand" },
  });
});

test("das Google-Skript wird erst nach dem Klick auf Spamschutz laden geholt", async ({ page }) => {
  const google = await recaptchaAttrappe(page);
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");
  expect(google).toEqual([]);
  await expect(page.getByRole("link", { name: "Datenschutzerklärung" })).toHaveAttribute("href", "/datenschutz");

  await page.getByRole("button", { name: "Spamschutz laden" }).click();
  await expect(page.getByRole("button", { name: "Ich bin kein Roboter" })).toBeVisible();
  expect(google).toHaveLength(1);
  expect(google[0]).toContain("https://www.google.com/recaptcha/api.js");
});

test("ohne gelösten Spamschutz geht nichts an EmailJS", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));
  await meldungenProtokollieren(page);
  await recaptchaAttrappe(page);
  await page.goto("/contact");
  await felderAusfuellen(page);

  // Skript nicht geladen
  await page.getByRole("button", { name: "Nachricht senden" }).click();
  await expect(page.getByText(/Bitte laden Sie den Spamschutz/)).toBeVisible();
  // Skript geladen, Checkbox nicht gelöst
  await page.getByRole("button", { name: "Spamschutz laden" }).click();
  await expect(page.getByRole("button", { name: "Ich bin kein Roboter" })).toBeVisible();
  await page.getByRole("button", { name: "Nachricht senden" }).click();

  expect(await alleMeldungen(page)).not.toContain(ERFOLG);
  expect(anfragen).toHaveLength(0);
  await expect(page.getByLabel("Name")).toHaveValue("Test Person");
});

test("das Token geht als g-recaptcha-response mit, und das Widget startet danach neu", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));
  await ausfuellenUndSenden(page);
  await expect(page.getByText(ERFOLG)).toBeVisible();

  expect(anfragen).toHaveLength(1);
  expect(anfragen[0]).toMatchObject({ template_params: { "g-recaptcha-response": "test-token-1" } });
  expect(await page.evaluate(() => (window as unknown as { grecaptcha: { resets: number } }).grecaptcha.resets)).toBe(1);

  // Das Token war einmalig: ein zweiter Versand ohne neues Lösen geht nicht raus.
  await felderAusfuellen(page);
  await page.getByRole("button", { name: "Nachricht senden" }).click();
  await expect(page.getByText(/Bitte laden Sie den Spamschutz/)).toBeVisible();
  expect(anfragen).toHaveLength(1);
});

test("Skript nicht ladbar: sichtbarer Fehler, kein Versand", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));
  await page.route("**/www.google.com/recaptcha/**", (route) => route.abort("blockedbyclient"));
  await page.goto("/contact");
  await felderAusfuellen(page);
  await page.getByRole("button", { name: "Spamschutz laden" }).click();
  await expect(page.getByText(/Der Spamschutz konnte nicht geladen werden/)).toBeVisible();
  await page.getByRole("button", { name: "Nachricht senden" }).click();
  expect(anfragen).toHaveLength(0);
});

test("hängt die Google-Bibliothek, endet das Laden mit einem Fehler statt mit ewigem Warten", async ({ page }) => {
  await page.clock.install();
  await page.route("**/www.google.com/recaptcha/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "text/javascript",
      // api.js lädt, aber ready() ruft nie zurück (gstatic gesperrt)
      body: "window.grecaptcha = { ready() {}, render() { return 1; }, reset() {} };",
    }),
  );
  await page.goto("/contact");
  await page.getByRole("button", { name: "Spamschutz laden" }).click();
  await page.clock.fastForward(11_000);
  await expect(page.getByText(/Der Spamschutz konnte nicht geladen werden/)).toBeVisible();
});

test("Wiederholen nach einem Fehler stapelt keine Skript-Tags", async ({ page }) => {
  await page.route("**/www.google.com/recaptcha/**", (route) => route.abort("blockedbyclient"));
  await page.goto("/contact");
  for (let i = 0; i < 2; i++) {
    await page.getByRole("button", { name: "Spamschutz laden" }).click();
    await expect(page.getByText(/Der Spamschutz konnte nicht geladen werden/)).toBeVisible();
    await expect(page.getByRole("button", { name: "Spamschutz laden" })).toBeEnabled();
  }
  await expect(page.locator('script[src*="recaptcha"]')).toHaveCount(0);
});

test("Honeypot gefüllt: stille Erfolgsmeldung, keine Anfrage an EmailJS", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));

  await page.goto("/contact");
  await page.getByLabel("Name").fill("Test Person");
  await page.getByLabel("E-Mail").fill("test@example.invalid");
  await page.getByLabel("Nachricht").fill("TEST- Spam");
  // Menschen erreichen das Feld nicht, ein Bot füllt es direkt.
  await page.locator("#kontakt-zusatzfeld").evaluate((el: HTMLInputElement) => {
    el.value = "http://spam.example.invalid";
  });
  await page.getByRole("button", { name: "Nachricht senden" }).click();

  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect(anfragen).toHaveLength(0);
});

test("Honeypot ist für Menschen und Hilfstechnik unsichtbar und nicht fokussierbar", async ({ page }) => {
  await page.goto("/contact");
  const feld = page.locator("#kontakt-zusatzfeld");

  await expect(feld).toHaveAttribute("tabindex", "-1");
  await expect(feld).toHaveAttribute("autocomplete", "off");
  await expect(page.locator("[aria-hidden=true]:has(#kontakt-zusatzfeld)")).toHaveCount(1);
  // Nur Name, E-Mail und Nachricht sind für Hilfstechnik sichtbar.
  await expect(page.getByRole("textbox")).toHaveCount(3);
  const box = await feld.boundingBox();
  // Bots müssen das Feld finden (kein display:none), Menschen sehen es nicht (außerhalb des Bildes).
  expect(box).not.toBeNull();
  expect(box!.x + box!.width).toBeLessThan(0);
});

test("leerer Honeypot: Versand läuft normal", async ({ page }) => {
  const anfragen = await attrappe(page, (route) => route.fulfill({ status: 200, body: "OK" }));
  await ausfuellenUndSenden(page);
  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect(anfragen).toHaveLength(1);
  expect(anfragen[0].template_params).not.toHaveProperty("kontakt-zusatzfeld");
});
