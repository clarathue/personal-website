import { expect, test } from "@playwright/test";

// Nur lesend: Seiten aufrufen und ansehen, nie absenden.
// Jede Anfrage an EmailJS wird abgefangen, damit auch ein fehlerhafter Spec keine Mail auslöst.
test.beforeEach(async ({ page }) => {
  await page.route("**/api.emailjs.com/**", (route) => route.abort());
});

// GitHub Pages liefert Unterseiten über die 404.html aus (Status 404).
// Geprüft wird deshalb der Inhalt, nicht der HTTP-Status.
const PAGES = [
  { path: "/", h1: /Prozessautomatisierung & Systemintegration/ },
  { path: "/impressum", h1: /^Impressum$/ },
  { path: "/datenschutz", h1: /^Datenschutzerklärung$/ },
  { path: "/ai-chatbots", h1: /KI-gestützte Lösungen/ },
  { path: "/system-integration", h1: /Prozessautomatisierung & Integration/ },
  { path: "/hr/", h1: /HR-Systeme/ },
];

for (const { path, h1 } of PAGES) {
  test(`${path} zeigt ihre Überschrift @smoke`, async ({ page }) => {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(h1);
  });
}

test("/contact zeigt das Formular mit allen Feldern @smoke", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(/^Kontakt$/);
  await expect(page.getByLabel("Name")).toBeVisible();
  await expect(page.getByLabel("E-Mail")).toBeVisible();
  await expect(page.getByLabel("Nachricht")).toBeVisible();
  await expect(page.getByRole("button", { name: "Nachricht senden" })).toBeEnabled();
});

test("unbekannte Adresse zeigt die 404-Seite der App @smoke", async ({ page }) => {
  await page.goto("/diese-seite-gibt-es-nicht");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("404");
});
