import { spawnSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { expect, test } from "@playwright/test";
import { EMAILJS_VARIABLEN, fehlendeEmailjsVariablen } from "../src/lib/emailjs-config";
import { EMAILJS_TESTWERTE } from "./emailjs-testwerte";

// Ohne EmailJS-Kennungen darf kein Build entstehen, sonst ginge ein Formular live,
// das nichts sendet. Läuft nur lokal, braucht keinen Browser.
test.skip(!!process.env.BASE_URL, "Build-Prüfung läuft nur lokal");

test("leere oder fehlende Kennungen gelten als fehlend", () => {
  expect(fehlendeEmailjsVariablen(EMAILJS_TESTWERTE)).toEqual([]);
  expect(fehlendeEmailjsVariablen({})).toEqual([...EMAILJS_VARIABLEN]);
  expect(
    fehlendeEmailjsVariablen({ ...EMAILJS_TESTWERTE, VITE_EMAILJS_SERVICE_ID: "  " }),
  ).toEqual(["VITE_EMAILJS_SERVICE_ID"]);
});

test("der Build bricht ab, wenn eine Kennung fehlt", () => {
  // Eigenes Ausgabeverzeichnis, damit der Lauf das dist/ des Testservers nicht anrührt.
  const outDir = mkdtempSync(path.join(tmpdir(), "emailjs-build-"));
  // Leerer Wert in der Umgebung schlägt einen Wert aus .env.
  const env = { ...process.env, ...EMAILJS_TESTWERTE, VITE_EMAILJS_TEMPLATE_ID: "" };
  const lauf = spawnSync("npx", ["vite", "build", "--outDir", outDir, "--emptyOutDir"], {
    env,
    encoding: "utf8",
    timeout: 60_000,
  });

  expect(lauf.status).not.toBe(0);
  expect(lauf.stderr + lauf.stdout).toContain("es fehlt: VITE_EMAILJS_TEMPLATE_ID");
});
