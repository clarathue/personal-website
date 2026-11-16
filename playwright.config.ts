import { defineConfig, devices } from "@playwright/test";

// BASE_URL gesetzt → gegen diese Adresse (Monitor, Smoke nach Deploy).
// Sonst gegen den lokalen Produktions-Build, den Playwright selbst startet.
const LOCAL_URL = "http://localhost:4173";
const baseURL = process.env.BASE_URL || LOCAL_URL;
const isLocal = baseURL === LOCAL_URL;

export default defineConfig({
  testDir: "./e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  ...(isLocal && {
    webServer: {
      // serve verhält sich wie GitHub Pages: /contact aus contact.html, sonst 404.html mit Status 404.
      command: "npm run build && npx serve dist --listen 4173 --no-clipboard",
      url: LOCAL_URL,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  }),
});
