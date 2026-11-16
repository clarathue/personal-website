// Schreibt nach dem Build je React-Route eine eigene HTML-Datei (dist/contact.html usw.).
// GitHub Pages liefert /contact dann mit Status 200 aus statt über die 404.html.
// Dazu 404.html (App-eigene 404-Seite für unbekannte Adressen) und .nojekyll.
// Die Routen kommen aus src/App.tsx, damit es nur eine Liste gibt.
import { copyFileSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIST = "dist";
const APP = "src/App.tsx";

const source = readFileSync(APP, "utf8");
const paths = [...source.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const pages = paths.filter((p) => p !== "/" && p !== "*").map((p) => p.replace(/^\//, ""));

if (pages.length === 0) {
  console.error(`Keine Routen in ${APP} gefunden – Muster prüfen.`);
  process.exit(1);
}

for (const page of pages) {
  if (page.includes("/") || page.includes(":")) {
    console.error(`Route /${page} wird nicht unterstützt (verschachtelt oder mit Parameter).`);
    process.exit(1);
  }
  // Eigene statische Seite (z. B. public/hr/index.html) hat Vorrang.
  if (existsSync(join(DIST, page, "index.html"))) {
    console.log(`/${page}: statische Seite vorhanden, übersprungen`);
    continue;
  }
  copyFileSync(join(DIST, "index.html"), join(DIST, `${page}.html`));
  console.log(`/${page}: ${page}.html geschrieben`);
}

copyFileSync(join(DIST, "index.html"), join(DIST, "404.html"));
writeFileSync(join(DIST, ".nojekyll"), "");
console.log("404.html und .nojekyll geschrieben");
