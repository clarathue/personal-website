// Erfundene EmailJS-Kennungen für den lokalen Test-Build. Sie überschreiben eine
// vorhandene .env, damit die Specs ohne echte Werte laufen und nie echte prüfen.
export const EMAILJS_TESTWERTE = {
  VITE_EMAILJS_PUBLIC_KEY: "test-public-key",
  VITE_EMAILJS_SERVICE_ID: "test-service",
  VITE_EMAILJS_TEMPLATE_ID: "test-template",
};
