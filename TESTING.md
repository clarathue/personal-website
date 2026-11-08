# Testing — personal-website

**Stufe: P (Produktiv)**

Diese Datei ist der verbindliche Einstieg für Tests in diesem Repo: welche Befehle
vor und nach einer Änderung laufen, was abgedeckt ist und was bewusst nicht.

## Warum Stufe P

| Merkmal | Ausprägung |
| --- | --- |
| Sichtbarkeit | Öffentliche Website unter thuemecke.net — ein Fehler ist sofort für Dritte sichtbar |
| Stack | React 18 + Vite + TypeScript + Tailwind + framer-motion, Routing über `react-router-dom` |
| Seiteneffekte nach aussen | Kontaktformular verschickt über EmailJS echte Mails an das Postfach |
| Auslieferung | Automatischer Deploy nach GitHub Pages bei Push auf `main` (`.github/workflows/deploy.yml`) |
| Datenhaltung | Keine — kein Backend, keine Datenbank, keine Anmeldung |

Kein Backend und keine persistierten Daten, dafür öffentliche Oberfläche und ein
automatischer Deploy ohne Zwischenstufe: der Schwerpunkt liegt deshalb auf
End-to-End-Prüfung der ausgelieferten Seiten, nicht auf Unit-Tests einzelner
Komponenten.

## Testbefehle

Stand heute (vor Umsetzung der PR-Folge) gibt es **keine automatisierten Tests**.
Was es gibt, ist die statische Prüfung:

```bash
npm ci
npm run lint         # ESLint 9, Flat Config, --max-warnings 0
npm run type-check   # tsc --noEmit
npm run build        # Vite-Produktionsbuild nach dist/
```

Nach PR 6 kommt dazu:

```bash
npm run test:e2e              # Playwright, alle Specs, gegen lokalen Preview-Server
npm run test:e2e -- --grep @smoke   # nur die Smoke-Auswahl
```

**Regel:** Diese Befehle laufen vor und nach jeder Änderung; das Ergebnis wird
verglichen. Rot vorher und rot nachher ist kein grünes Licht, sondern ein eigener
Befund, der in den PR gehört.

## Geltungsbereich

| Schicht | Abdeckung | Werkzeug |
| --- | --- | --- |
| Typen, Lint | vollständig | `tsc --noEmit`, ESLint |
| Build | vollständig | `vite build` |
| Seiten und Routen | geplant, PR 6 | Playwright |
| Formular-Validierung | geplant, PR 6 | Playwright |
| Formular-Versand (EmailJS) | **bewusst nicht automatisiert** | — |
| Einzelkomponenten | bewusst keine Unit-Tests | — |

### Das Kontaktformular wird nie abgeschickt

`src/app/contact/page.tsx` und `src/components/Contact.tsx` rufen beim Absenden
`emailjs.send(...)` auf. Ein automatisierter Absendeversuch erzeugt echte Mails und
verbraucht das EmailJS-Kontingent. Tests prüfen deshalb ausschliesslich das
Verhalten **vor** dem Versand:

- Pflichtfelder: `name`, `email` und `message` tragen `required`
- `email` ist `type="email"`, prüft also im Browser auf Adressform
- erwartet wird, dass der Browser das Formular bei leeren oder ungültigen Feldern
  gar nicht erst absendet (`form.checkValidity() === false`, Feld matcht `:invalid`)

Soll der Erfolgspfad je abgedeckt werden, dann über ein Abfangen des
Netzwerk-Requests an EmailJS (`page.route`) mit einer Attrappen-Antwort — nie gegen
den echten Dienst, und nie gegen Produktion.

## Geplante PR-Folge

Ein PR je Arbeitspaket, nacheinander, jeder für sich prüf- und zurückrollbar.
Die Nummern folgen dem Stufenkatalog der Testing-Spec.

### PR 1 — Linter, Typen und Build in CI

Eigener Workflow `.github/workflows/ci.yml`, ausgelöst bei `pull_request` und bei
Push auf `main`: `npm ci`, `npm run lint`, `npm run type-check`, `npm run build`.
Node 18 wie im Deploy-Workflow, damit CI und Deploy dieselbe Laufzeit sehen.

Zu klären in diesem PR: das `lint`-Skript übergibt `--ext ts,tsx`, obwohl die
Konfiguration eine Flat Config ist (`eslint.config.js`) und die Dateiauswahl dort
bereits über `files: ["**/*.{ts,tsx}"]` steht. Läuft der Befehl in CI nicht sauber
durch, wird `--ext` aus dem Skript entfernt statt der Workflow angepasst.

Fertig, wenn: ein PR ohne grünen Lauf nicht mehr unbemerkt gemergt werden kann.

### PR 6 — Playwright-Specs für Seiten und Formular-Validierung

- Playwright als Dev-Abhängigkeit, `playwright.config.ts` mit `webServer` auf
  `npm run build && npm run preview` (Port 3000) und Chromium als Standardprojekt
- Specs unter `e2e/`
- Seiten-Specs: `/`, `/contact`, `/impressum`, `/datenschutz`, `/ai-chatbots`,
  `/system-integration`, `/hr` — je Route Statuscode, sichtbare Überschrift, keine
  Konsolenfehler; dazu eine unbekannte Route, die die 404-Seite zeigt
- Formular-Spec: leeres Absenden und ungültige Adresse werden blockiert, gültige
  Eingaben machen den Absende-Knopf nutzbar — **ohne Absenden**, siehe oben
- CI-Job aus PR 1 um `npm run test:e2e` erweitert, Report als Artefakt

Fertig, wenn: jede Route und die Formular-Validierung automatisch geprüft sind.

### PR 7 — `@smoke` nach dem Deploy

Eine kleine Auswahl der Specs wird mit `@smoke` markiert (Startseite lädt,
Navigation erreichbar, Kontaktseite zeigt das Formular). Der Deploy-Workflow
bekommt einen nachgelagerten Job, der diese Auswahl gegen die frisch
veröffentlichte Seite laufen lässt (`BASE_URL` auf die Deploy-URL). Schlägt er
fehl, ist der Lauf rot — der Deploy selbst wird nicht zurückgenommen, der Befund
ist aber sofort sichtbar.

Fertig, wenn: ein kaputter Deploy innerhalb weniger Minuten auffällt, ohne dass
jemand die Seite von Hand öffnet.

### PR 8 — Geplanter Smoke gegen Produktion

Derselbe `@smoke`-Lauf zusätzlich per `schedule` gegen https://thuemecke.net,
einmal täglich. Fängt ab, was nach dem Deploy kaputtgeht: abgelaufenes
Zertifikat, DNS, GitHub-Pages-Störung. Nur lesende Zugriffe, kein Formularversand.

Fertig, wenn: Ausfälle der Live-Seite gemeldet werden, statt zufällig aufzufallen.

## Konventionen

- Specs liegen unter `e2e/`, Dateiendung `.spec.ts`, Namen nach Route bzw. Funktion
- `@smoke` markiert, was auch gegen eine laufende Umgebung gefahrlos läuft:
  nur lesend, keine Formulare, keine Seiteneffekte
- Keine Zugangsdaten in Specs oder Workflows; die EmailJS-Kennung im Quelltext ist
  ein öffentlicher Browser-Schlüssel und kein Geheimnis, trotzdem gehört sie in
  keinen Test
- Tests gehören in denselben PR wie der Code, den sie betreffen. Bei einem Bugfix
  zuerst der Test, der den Fehler zeigt (rot), dann der Fix (grün)

## Pflege

Kommt eine Route in `src/App.tsx` dazu, kommt die Seiten-Spec im selben PR dazu.
Ändert sich ein Testbefehl, wird diese Datei im selben PR nachgezogen.
