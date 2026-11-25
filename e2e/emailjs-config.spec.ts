import { spawnSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { FORMULAR_VARIABLEN, fehlendeFormularVariablen } from "../src/lib/emailjs-config";
import { EMAILJS_TESTWERTE } from "./emailjs-testwerte";

// Ohne EmailJS-Kennungen darf kein Build entstehen, sonst ginge ein Formular live,
// das nichts sendet. Läuft nur lokal, braucht keinen Browser.
test.skip(!!process.env.BASE_URL, "Build-Prüfung läuft nur lokal");

test("leere oder fehlende Kennungen gelten als fehlend", () => {
  expect(fehlendeFormularVariablen(EMAILJS_TESTWERTE)).toEqual([]);
  expect(fehlendeFormularVariablen({})).toEqual([...FORMULAR_VARIABLEN]);
  expect(
    fehlendeFormularVariablen({ ...EMAILJS_TESTWERTE, VITE_EMAILJS_SERVICE_ID: "  " }),
  ).toEqual(["VITE_EMAILJS_SERVICE_ID"]);
  expect(
    fehlendeFormularVariablen({ ...EMAILJS_TESTWERTE, VITE_RECAPTCHA_SITE_KEY: "" }),
  ).toEqual(["VITE_RECAPTCHA_SITE_KEY"]);
});

for (const fehlt of ["VITE_EMAILJS_TEMPLATE_ID", "VITE_RECAPTCHA_SITE_KEY"]) {
test(`der Build bricht ab, wenn ${fehlt} fehlt`, () => {
  // Eigenes Ausgabeverzeichnis, damit der Lauf das dist/ des Testservers nicht anrührt.
  const outDir = mkdtempSync(path.join(tmpdir(), "emailjs-build-"));
  // Leerer Wert in der Umgebung schlägt einen Wert aus .env.
  const env = { ...process.env, ...EMAILJS_TESTWERTE, [fehlt]: "" };
  const lauf = spawnSync("npx", ["vite", "build", "--outDir", outDir, "--emptyOutDir"], {
    env,
    encoding: "utf8",
    timeout: 60_000,
  });

  expect(lauf.status).not.toBe(0);
  expect(lauf.stderr + lauf.stdout).toContain(`es fehlt: ${fehlt}`);
});
}
