# CLAUDE.md – personal-website

Website thuemecke.net: React-SPA mit Vite, Tailwind und shadcn/ui auf GitHub Pages. Aufbau:
`README.md`. Tests, Workflows und offene Entscheidungen: `TESTING.md`.

## Was hier besonders ist

- **Ein Push auf `main` ist ein Deploy** (`.github/workflows/deploy.yml`, nach den Checks aus
  `ci.yml`). Danach prüft der Smoke Prod, stündlich geplant der Monitor. Rückweg: Revert auf `main`.
- **Der Takt des Monitors (`monitor.yml`, stündlich, Minute 23) ist von GitHub nicht zugesichert.**
  Geplante Läufe kamen verzögert
  (17.–18.11.2026: 3 Läufe in ca. 15 h, Lücken von 6–9 h); ob das Drosselung oder ein Anlaufeffekt
  nach dem Revert ist, ist nicht geklärt. Ein ausbleibender Lauf ist erst nach ca. 24 h ein Befund,
  und ein Ausfall der Seite kann bis zu ca. 9 h unbemerkt bleiben (der Smoke nach dem Deploy bleibt
  davon unberührt). Die Auslösung durch die Box (16.11. 15:09 bis 17.11. 09:23 UTC, ca. 18 h)
  wurde am 17.11.2026 bewusst zurückgenommen (PR #16).
- **Das Kontaktformular verschickt echte Mails** über EmailJS aus dem Browser des Besuchers.
  Einen Trockenlauf gibt es nicht, jeder erfolgreiche Aufruf ist eine Mail.
- **Unterseiten liefern Status 200, weil `postbuild` je Route eine HTML-Datei schreibt**
  (`scripts/write-route-pages.mjs`). Die Liste der Routen kommt aus `src/App.tsx`.
- `/hr` gibt es zweimal. Live gewinnt `public/hr/index.html` vor der React-Route.

## Regeln für Code

- **Routen nur als `<Route path="/name" …>` direkt in `src/App.tsx`**, ohne Verschachtelung
  und ohne Parameter. Sonst bricht `postbuild` ab oder die Seite fehlt in `dist/`.
- **`<meta name="build-sha">` bleibt** (`vite.config.ts`). Daran erkennt der Smoke nach dem
  Deploy den neuen Stand.
- Keine Konsolenfehler, außer dem gewollten `console.error` der 404-Seite
  (`src/app/not-found/page.tsx`). Die Specs prüfen das.
- Lint ohne Warnungen (`--max-warnings 0`), Typprüfung über alle drei `tsconfig.*.json`.

## Versandwege

| Weg | Datei | Absender | Empfängerkreis | Auslöser |
|---|---|---|---|---|
| Kontaktformular per EmailJS (`emailjs.send`) | `src/app/contact/page.tsx` | EmailJS-Service und -Template aus `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` | `clara@thuemecke.net` (`to_email`) | Besucher klickt „Absenden“ |

Kein anderer Code verschickt Mails. Specs und Skripte lösen den Versand nie aus.

- **EmailJS-Kennungen nie im Quelltext.** Public Key, Service- und Template-ID kommen als
  `VITE_EMAILJS_*` aus `.env` (Vorlage `.env.example`), in `ci.yml` und `deploy.yml` aus
  den gleichnamigen GitHub-Secrets. Fehlt eine, bricht der Build ab (`vite.config.ts`).
  Der lokale Test-Build nimmt erfundene Werte (`e2e/emailjs-testwerte.ts`).

## Prod-Zugriffe

| Werkzeug | Schreibt in | Trockenlauf |
|---|---|---|
| `.github/workflows/deploy.yml` (Push auf `main`, per Hand, `repository_dispatch`) | GitHub Pages (thuemecke.net) | keiner, Gate sind die Checks aus `ci.yml` |
| `.github/workflows/monitor.yml`, `npm run test:smoke` mit `BASE_URL` | nichts, nur lesend | entfällt |

## Tests

- **Jede Anfrage an `api.emailjs.com` fängt der Spec selbst ab** (`page.route`).
  Formular-Specs laufen nie mit `BASE_URL`. Prod-Specs tragen `@smoke` und sind nur lesend.
- Selektoren nach Rolle und Label, keine festen Wartezeiten. Formularfehler über `validity`
  prüfen, nicht über den Meldungstext (hängt von der Browsersprache ab).
- Lokal gegen `serve`, nicht `vite preview`: nur `serve` liefert wie Pages 404 für Unbekanntes.

<!-- BEGIN gemeinsame Regeln – aus Notion „Agent-Spec: Tech“, nicht von Hand ändern -->
## Gemeinsame Regeln

Gilt für jedes Repo. Ein nächtlicher Abgleich schreibt diesen Abschnitt wörtlich in die `CLAUDE.md` jedes Repos und öffnet einen PR, wenn er sich geändert hat. Änderungen deshalb nur hier, nie in den Repos.

### Code

- **Werte auf einen Blick lesbar.** Braucht eine Zuweisung einen verschachtelten Ausdruck, kommt er in eine Hilfsfunktion: `TIMEOUT = _float_env("TIMEOUT", 30.0)` statt `TIMEOUT = float(os.environ.get("TIMEOUT") or "30.0")`. Gilt auch für Modulkonstanten, Klassenattribute und Standardwerte in Signaturen.
- **`requests.Response` ist bei Status ≥ 400 falsy.** `if not response` verschluckt jeden Fehlerstatus. Für „keine Antwort“ `if response is None` schreiben.
- **Ein Fehler endet als Fehler.** Kein `except`, das einen Fehler verschluckt und danach weiterschreibt; ein gescheiterter Abruf ist keine leere Liste und kein „nichts zu tun“; ein Skript, das scheitert, endet mit Exit-Code ≠ 0.
- **Erst Vorhandenes nutzen:** Codebase, Standardbibliothek, installierte Abhängigkeit, dann ein Einzeiler, erst dann neuer Code. Nie kürzen: Eingabeprüfung, Fehlerbehandlung gegen Datenverlust, Security, Barrierefreiheit.
- **Kein Umbau außerhalb der Aufgabe.**

### Daten und Dienste

- **Versand nur über die Versandwege der `CLAUDE.md`.** Code versendet E-Mails nur über die Wege, die im Abschnitt „Versandwege“ der `CLAUDE.md` des Repos stehen (Datei, Absender, Empfängerkreis). Ein neuer Versandweg oder ein neuer Empfängerkreis braucht eine Freigabe. Was im eigenen Namen an Dritte schreibt, legt immer einen Entwurf an und versendet nicht.
- **Testmails nur an freigegebene eigene Adressen:** `clara@thuemecke.net`, `clara@almabridgeofhope.org`, `clara.thue@gmail.com`, `c.thuemecke.extern@intega-solutions.com`. Den Empfänger aus der Konfiguration lesen, nicht fest eintragen. Nie an Dritte, auch nicht „nur kurz“.
- **Produktionsdaten nur mit Freigabe schreiben.** Lesen ist erlaubt.
- **Prod nur über die Prod-Zugriffe der `CLAUDE.md`.** Personio standardmäßig mit `PERSONIO_CLIENT_ID_DEV` / `PERSONIO_CLIENT_SECRET_DEV`, die Variablen ohne `_DEV` zeigen auf Produktion. Zugriff auf eine Produktivumgebung nur in Werkzeugen aus dem Abschnitt „Prod-Zugriffe“ der `CLAUDE.md`, dort mit Trockenlauf als Standard. Geschrieben wird erst mit ausdrücklichem Schalter nach Freigabe.
- **Secrets nur aus `.env` oder dem Secret-Store**, nie im Code, in Logs, Tests oder Commits.
- **Neue Aufrufe kostenpflichtiger APIs** (Sprachmodelle, bezahlte Dienste) nur mit Freigabe.

### Tests und Doku

- Testbefehl und Stand stehen in `TESTING.md`. Vor und nach der Änderung laufen lassen.
- Ein Bugfix bekommt einen Regressionstest, erst rot, dann grün. Tests gehören in denselben PR wie der Code.
- HTTP-Antworten in Tests als echte `requests.Response`-Objekte bauen, Prozessaufrufe als echtes `CompletedProcess`. Ein `MagicMock` ist immer truthy und läuft am Fehler vorbei.
- **Doku im selben PR:** Ändert ein PR ein Verhalten, das in `CLAUDE.md`, `README.md` oder `TESTING.md` beschrieben ist, ändert er die Datei mit.
- **Jede Regel steht nur in der `CLAUDE.md`.** `README.md` erklärt Zweck, Einrichtung und Bedienung, `TESTING.md` den Teststand, `docs/` das Nachschlagewissen (Architektur, Abläufe, Entscheidungsgeschichte). Dort stehen keine Regeln, höchstens ein Verweis. Keine `AGENTS.md`, keine Cursor- oder Copilot-Regeln.
- Keine ADR-Dateien. Entscheidungen stehen in `CLAUDE.md` oder `docs/architecture.md`.

### Git

- Conventional Commits (`feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`), kein `Co-Authored-By`.
- In Commit-Messages und Code-Kommentaren niemanden nennen, weder Mensch noch Assistent. Die Entscheidung nennen, nicht wer sie getroffen hat.
- Ein PR je Arbeitspaket, Squash-Merge. Nie auf `main` arbeiten, nie `--no-verify`, nie ohne Freigabe mergen.
- Ausführlich: Notion „Agent-Spec: Tech“, Abschnitt Git-Regeln.
<!-- END gemeinsame Regeln -->
