// EmailJS-Kennungen kommen aus der Build-Konfiguration (`.env`, im Deploy aus
// GitHub-Secrets), nie aus dem Quelltext. Vite schreibt `VITE_*`-Werte ins
// ausgelieferte Bundle; der Public Key ist bei EmailJS bauartbedingt öffentlich.
export const EMAILJS_VARIABLEN = [
  "VITE_EMAILJS_PUBLIC_KEY",
  "VITE_EMAILJS_SERVICE_ID",
  "VITE_EMAILJS_TEMPLATE_ID",
] as const;

type Umgebung = Record<string, string | boolean | undefined>;

function istGesetzt(wert: string | boolean | undefined): boolean {
  return typeof wert === "string" && wert.trim() !== "";
}

export function fehlendeEmailjsVariablen(env: Umgebung): string[] {
  return EMAILJS_VARIABLEN.filter((name) => !istGesetzt(env[name]));
}

export function fehlendeVariablenMeldung(fehlend: string[]): string {
  return `EmailJS-Konfiguration unvollständig, es fehlt: ${fehlend.join(", ")}. Werte in .env eintragen (Vorlage: .env.example).`;
}
