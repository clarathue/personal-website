import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

const SCRIPT_URL = 'https://www.google.com/recaptcha/api.js?render=explicit';

interface Grecaptcha {
  ready: (callback: () => void) => void;
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      size?: 'compact' | 'normal';
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
    },
  ) => number;
  reset: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

const LADE_TIMEOUT_MS = 10_000;

// Das Google-Skript wird nur geladen, wenn das Formular auf der Kontaktseite erscheint, nie auf
// anderen Seiten. Ein schon geladenes Skript wird wiederverwendet, ein gescheitertes entfernt, damit Wiederholungen keine Tags stapeln.
// Hängt die Bibliothek (z. B. von einem Blocker halb gesperrt), bricht ein Timeout ab.
function skriptLaden(): Promise<Grecaptcha> {
  return new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => reject(new Error('reCAPTCHA nicht rechtzeitig bereit')), LADE_TIMEOUT_MS);
    const bereit = (grecaptcha: Grecaptcha) => grecaptcha.ready(() => {
      window.clearTimeout(timeout);
      resolve(grecaptcha);
    });
    if (window.grecaptcha) {
      bereit(window.grecaptcha);
      return;
    }
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      reject(new Error('reCAPTCHA-Skript nicht geladen'));
    };
    script.onload = () => {
      if (window.grecaptcha) bereit(window.grecaptcha);
    };
    document.head.appendChild(script);
  });
}

type Zustand = 'laedt' | 'bereit' | 'fehler';

interface RecaptchaFieldProps {
  siteKey: string | undefined;
  onToken: (token: string | null) => void;
  // Zählt hoch, wenn das Widget neu starten soll (ein Token gilt nur für einen Versand).
  resetKey: number;
}

export default function RecaptchaField({ siteKey, onToken, resetKey }: RecaptchaFieldProps) {
  const [zustand, setZustand] = useState<Zustand>('laedt');
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  const laden = async () => {
    setZustand('laedt');
    try {
      await skriptLaden();
      setZustand('bereit');
    } catch (error) {
      console.error('reCAPTCHA konnte nicht geladen werden:', error);
      setZustand('fehler');
    }
  };

  // Ohne Site-Key gibt es nichts zu laden; das Feld sagt es unten sichtbar.
  useEffect(() => {
    if (siteKey) void laden();
  }, [siteKey]);

  useEffect(() => {
    const grecaptcha = window.grecaptcha;
    if (zustand !== 'bereit' || !siteKey || !grecaptcha || !container.current) return;
    if (widgetId.current !== null) return;
    widgetId.current = grecaptcha.render(container.current, {
      sitekey: siteKey,
      // compact (164 px) statt normal (304 px), damit die Checkbox auf schmalen Telefonen in die Karte passt.
      size: 'compact',
      callback: (token) => onTokenRef.current(token),
      'expired-callback': () => onTokenRef.current(null),
      'error-callback': () => onTokenRef.current(null),
    });
  }, [zustand, siteKey]);

  useEffect(() => {
    if (resetKey === 0 || widgetId.current === null) return;
    window.grecaptcha?.reset(widgetId.current);
  }, [resetKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-red-600" role="alert">
        Der Spamschutz ist gerade nicht eingerichtet. Bitte schreiben Sie mir direkt per E-Mail.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-tech-gray-700">
        Dieses Formular ist durch Google reCAPTCHA gegen Spam geschützt. Dabei lädt Ihr Browser beim
        Öffnen dieser Seite Inhalte von Google und übermittelt u. a. Ihre IP-Adresse an Google
        (auch in die USA). Details: <Link to="/datenschutz" className="text-tech-blue hover:text-tech-darkBlue underline">Datenschutzerklärung</Link>.
      </p>
      {zustand === 'laedt' && (
        <p className="text-sm text-tech-gray-700" role="status">
          Spamschutz wird geladen...
        </p>
      )}
      {zustand === 'fehler' && (
        <>
          <p className="text-sm text-red-600" role="alert">
            Der Spamschutz konnte nicht geladen werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.
          </p>
          <Button type="button" variant="outline" onClick={laden}>
            Erneut versuchen
          </Button>
        </>
      )}
      {zustand === 'bereit' && (
        <p className="text-sm text-tech-gray-700" role="status">
          Bitte bestätigen Sie die Checkbox.
        </p>
      )}
      <div ref={container} tabIndex={-1} className="outline-none" />
    </div>
  );
}
