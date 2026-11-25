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

// Das Google-Skript wird nie beim Seitenaufruf geladen, sondern erst nach dem Klick auf
// „Spamschutz laden“ (ausdrückliche Einwilligung). Ein schon geladenes Skript wird
// wiederverwendet, ein gescheitertes entfernt, damit Wiederholungen keine Tags stapeln.
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

type Zustand = 'aus' | 'laedt' | 'bereit' | 'fehler';

interface RecaptchaFieldProps {
  siteKey: string | undefined;
  onToken: (token: string | null) => void;
  // Zählt hoch, wenn das Widget neu starten soll (ein Token gilt nur für einen Versand).
  resetKey: number;
}

export default function RecaptchaField({ siteKey, onToken, resetKey }: RecaptchaFieldProps) {
  const [zustand, setZustand] = useState<Zustand>('aus');
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  const einwilligen = async () => {
    setZustand('laedt');
    try {
      await skriptLaden();
      setZustand('bereit');
    } catch (error) {
      console.error('reCAPTCHA konnte nicht geladen werden:', error);
      setZustand('fehler');
    }
  };

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
    // Der Laden-Knopf verschwindet; der Fokus geht an die Checkbox-Fläche statt an <body>.
    container.current.focus();
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
      {zustand !== 'bereit' && (
        <>
          <p className="text-sm text-tech-gray-700">
            Zum Schutz vor Spam nutzt dieses Formular Google reCAPTCHA. Wenn Sie den Spamschutz laden,
            lädt Ihr Browser Inhalte von Google und übermittelt dabei u. a. Ihre IP-Adresse an Google
            (auch in die USA). Details und Widerruf: <Link to="/datenschutz" className="text-tech-blue hover:text-tech-darkBlue underline">Datenschutzerklärung</Link>.
          </p>
          <Button type="button" variant="outline" onClick={einwilligen} disabled={zustand === 'laedt'}>
            {zustand === 'laedt' ? 'Spamschutz wird geladen...' : 'Spamschutz laden'}
          </Button>
        </>
      )}
      {zustand === 'fehler' && (
        <p className="text-sm text-red-600" role="alert">
          Der Spamschutz konnte nicht geladen werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.
        </p>
      )}
      {zustand === 'bereit' && (
        <p className="text-sm text-tech-gray-700" role="status">
          Spamschutz geladen. Bitte bestätigen Sie die Checkbox.
        </p>
      )}
      <div ref={container} tabIndex={-1} className="outline-none" />
    </div>
  );
}
