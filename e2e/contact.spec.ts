import { expect, test, type Page, type Route } from "@playwright/test";

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

async function ausfuellenUndSenden(page: Page) {
  await page.goto("/contact");
  await page.getByLabel("Name").fill("Test Person");
  await page.getByLabel("E-Mail").fill("test@example.invalid");
  await page.getByLabel("Nachricht").fill("TEST- Nachricht aus dem Formular-Test");
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
    service_id: "service_kd6vrxk",
    template_id: "template_4spc8nj",
    template_params: {
      to_email: "clara@thuemecke.net",
      from_name: "Test Person",
      from_email: "test@example.invalid",
      reply_to: "test@example.invalid",
      message: "TEST- Nachricht aus dem Formular-Test",
    },
  });
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

  await page.goto("/contact");
  await page.getByLabel("Name").fill("  Test Person ");
  await page.getByLabel("E-Mail").fill("test@example.invalid");
  await page.getByLabel("Nachricht").fill("\n TEST- Nachricht mit Rand \n");
  await page.getByRole("button", { name: "Nachricht senden" }).click();

  await expect(page.getByText(ERFOLG)).toBeVisible();
  expect(anfragen[0]).toMatchObject({
    template_params: { from_name: "Test Person", message: "TEST- Nachricht mit Rand" },
  });
});
