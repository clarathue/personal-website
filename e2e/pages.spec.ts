import { expect, test, type Page } from "@playwright/test";

// Schicht 6: alle Seiten, die Navigation und die Formular-Validierung – nur lesend, nie absenden.
test.beforeEach(async ({ page }) => {
  await page.route("**/api.emailjs.com/**", (route) => route.abort());
});

const HOME = /Prozessautomatisierung & Systemintegration/;
const ROUTES: { path: string; h1: RegExp }[] = [
  { path: "/", h1: HOME },
  // Aliase der Startseite (Anker-Navigation)
  { path: "/hero", h1: HOME },
  { path: "/about", h1: HOME },
  { path: "/services", h1: HOME },
  { path: "/usecases", h1: HOME },
  { path: "/contact", h1: /^Kontakt$/ },
  { path: "/impressum", h1: /^Impressum$/ },
  { path: "/datenschutz", h1: /^Datenschutzerklärung$/ },
  { path: "/ai-chatbots", h1: /KI-gestützte Lösungen/ },
  { path: "/system-integration", h1: /Prozessautomatisierung & Integration/ },
  { path: "/hr/", h1: /HR-Systeme/ },
];

function konsolenfehler(page: Page) {
  const fehler: string[] = [];
  page.on("console", (m) => { if (m.type() === "error") fehler.push(m.text()); });
  page.on("pageerror", (e) => fehler.push(e.message));
  return fehler;
}

for (const { path, h1 } of ROUTES) {
  test(`${path} zeigt ihre Überschrift ohne Konsolenfehler`, async ({ page }) => {
    const fehler = konsolenfehler(page);
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(h1);
    await page.waitForLoadState("networkidle");
    expect(fehler).toEqual([]);
  });
}

test("Datenschutzerklärung enthält keine Platzhalteranschrift für EmailJS", async ({ page }) => {
  await page.goto("/datenschutz");
  const text = page.locator("body");
  await expect(text).toContainText("EmailJS Pte. Ltd.");
  await expect(text).not.toContainText("1234 Main St");
  await expect(text).not.toContainText("EmailJS Inc.");
  await expect(page.locator('a[href="https://www.emailjs.com/legal/data-protection-agreement/"]')).toBeVisible();
  await expect(page.locator('a[href="https://www.emailjs.com/legal/privacy-policy/"]')).toBeVisible();
});

// Jede Unterseite nennt sich selbst als canonical (nicht die Startseite), og:url zieht mit.
for (const path of ["/ai-chatbots", "/system-integration"]) {
  test(`${path} setzt canonical und og:url auf die eigene Adresse`, async ({ page }) => {
    await page.goto(path);
    const erwartet = `https://thuemecke.net${path}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", erwartet);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", erwartet);
  });
}

// Die Organisation im JSON-LD bleibt die Firma: ihre url ist die Startseite, nie die Unterseite.
for (const path of ["/ai-chatbots", "/system-integration"]) {
  test(`${path} nennt im JSON-LD die Startseite als Organisation`, async ({ page }) => {
    await page.goto(path);
    const json = await page.locator('script[type="application/ld+json"]').textContent();
    expect(JSON.parse(json ?? "{}").url).toBe("https://thuemecke.net");
  });
}

test.describe("Navigation", () => {
  const ZIELE = [
    { link: "AI-Chatbots", url: "/ai-chatbots", h1: /KI-gestützte Lösungen/ },
    { link: "Prozessautomatisierung", url: "/system-integration", h1: /Prozessautomatisierung & Integration/ },
    { link: "Kontakt", url: "/contact", h1: /^Kontakt$/ },
  ];

  for (const { link, url, h1 } of ZIELE) {
    test(`Navbar-Link „${link}“ führt nach ${url}`, async ({ page }) => {
      await page.goto("/impressum");
      await page.getByRole("navigation").getByRole("link", { name: link, exact: true }).click();
      await expect(page).toHaveURL(url);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(h1);
    });
  }

  test("Navbar-Link „Startseite“ führt zurück nach /", async ({ page }) => {
    await page.goto("/impressum");
    await page.getByRole("navigation").getByRole("link", { name: "Startseite", exact: true }).click();
    await expect(page).toHaveURL("/");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(HOME);
  });

  for (const { name, url, h1 } of [
    { name: "Impressum", url: "/impressum", h1: /^Impressum$/ },
    { name: "Datenschutz", url: "/datenschutz", h1: /^Datenschutzerklärung$/ },
  ]) {
    test(`Footer „${name}“ führt nach ${url}`, async ({ page }) => {
      await page.goto("/");
      await page.getByRole("contentinfo").getByRole("button", { name, exact: true }).click();
      await expect(page).toHaveURL(url);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText(h1);
    });
  }
});

test.describe("Formular-Validierung (ohne Absenden)", () => {
  async function anfragenZaehlen(page: Page) {
    const anfragen: string[] = [];
    page.on("request", (r) => { if (r.url().includes("api.emailjs.com")) anfragen.push(r.url()); });
    return anfragen;
  }

  test("leeres Formular wird nicht abgeschickt", async ({ page }) => {
    const anfragen = await anfragenZaehlen(page);
    await page.goto("/contact");
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    const name = page.getByLabel("Name");
    expect(await name.evaluate((el: HTMLInputElement) => el.validity.valueMissing)).toBe(true);
    await expect(page.getByRole("button", { name: "Nachricht senden" })).toBeEnabled();
    expect(anfragen).toEqual([]);
  });

  test("ungültige E-Mail-Adresse wird nicht abgeschickt", async ({ page }) => {
    const anfragen = await anfragenZaehlen(page);
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Test Person");
    await page.getByLabel("E-Mail").fill("keine-adresse");
    await page.getByLabel("Nachricht").fill("TEST- Validierung");
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    const email = page.getByLabel("E-Mail");
    expect(await email.evaluate((el: HTMLInputElement) => el.validity.typeMismatch)).toBe(true);
    expect(anfragen).toEqual([]);
  });

  test("fehlende Nachricht wird nicht abgeschickt", async ({ page }) => {
    const anfragen = await anfragenZaehlen(page);
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Test Person");
    await page.getByLabel("E-Mail").fill("test@example.invalid");
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    const nachricht = page.getByLabel("Nachricht");
    expect(await nachricht.evaluate((el: HTMLTextAreaElement) => el.validity.valueMissing)).toBe(true);
    expect(anfragen).toEqual([]);
  });

  test("Name nur aus Leerzeichen wird nicht abgeschickt", async ({ page }) => {
    const anfragen = await anfragenZaehlen(page);
    await page.goto("/contact");
    await page.getByLabel("Name").fill("   ");
    await page.getByLabel("E-Mail").fill("test@example.invalid");
    await page.getByLabel("Nachricht").fill("TEST- Validierung");
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    const name = page.getByLabel("Name");
    expect(await name.evaluate((el: HTMLInputElement) => el.validity.customError)).toBe(true);
    expect(anfragen).toEqual([]);
  });

  test("Nachricht nur aus Leerzeichen und Zeilenumbrüchen wird nicht abgeschickt", async ({ page }) => {
    const anfragen = await anfragenZaehlen(page);
    await page.goto("/contact");
    await page.getByLabel("Name").fill("Test Person");
    await page.getByLabel("E-Mail").fill("test@example.invalid");
    await page.getByLabel("Nachricht").fill("  \n\t \n");
    await page.getByRole("button", { name: "Nachricht senden" }).click();

    const nachricht = page.getByLabel("Nachricht");
    expect(await nachricht.evaluate((el: HTMLTextAreaElement) => el.validity.customError)).toBe(true);
    expect(anfragen).toEqual([]);
  });

  test("nach dem Korrigieren geht das Formular wieder durch", async ({ page }) => {
    await page.goto("/contact");
    const name = page.getByLabel("Name");
    await name.fill("   ");
    expect(await name.evaluate((el: HTMLInputElement) => el.validity.valid)).toBe(false);
    await name.fill(" Test Person ");
    expect(await name.evaluate((el: HTMLInputElement) => el.validity.valid)).toBe(true);
  });
});
