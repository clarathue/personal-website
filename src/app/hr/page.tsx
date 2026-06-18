import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

const CALENDLY = 'https://calendly.com/clara-oesm/30min';
const EMAIL = 'mailto:clara@thuemecke.net';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const HRPage: React.FC = () => (
  <div className="min-h-screen font-sans" style={{ backgroundColor: '#F8F7F4', color: '#1a1a1a' }}>

    {/* Hero */}
    <section className="px-6 py-20 md:py-32 max-w-3xl mx-auto text-center">
      <motion.h1
        className="text-3xl md:text-5xl font-bold leading-tight tracking-tight"
        style={{ color: '#1a1a1a' }}
        {...fadeUp(0)}
      >
        HR-Systeme die nicht miteinander reden —<br className="hidden md:block" />
        das kostet Ihr Team mehr Zeit als Sie denken.
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl leading-relaxed"
        style={{ color: '#4a4a4a' }}
        {...fadeUp(0.15)}
      >
        Ich helfe HR-Teams in regulierten Industrieunternehmen, Datenflüsse zwischen ihren Systemen zu automatisieren — ohne neue Plattformen, ohne IT-Großprojekte.
      </motion.p>

      <motion.div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" {...fadeUp(0.3)}>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#3D5A80' }}
        >
          <Calendar className="h-4 w-4" />
          15-Minuten-Gespräch buchen
        </a>
        <a
          href={EMAIL}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold border transition-colors hover:bg-gray-100"
          style={{ borderColor: '#3D5A80', color: '#3D5A80' }}
        >
          <Mail className="h-4 w-4" />
          E-Mail schreiben
        </a>
      </motion.div>
    </section>

    {/* Atmosphärenbild */}
    <div className="w-full overflow-hidden" style={{ maxHeight: '340px' }}>
      <img
        src="/images/hr-meeting.jpg"
        alt="HR-Beratung und Systemintegration – direkte Zusammenarbeit"
        className="w-full object-cover object-center"
        style={{ maxHeight: '340px' }}
        loading="lazy"
      />
    </div>

    {/* Das Problem */}
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: '#1a1a1a' }}
          {...fadeUp(0)}
        >
          Das Problem
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed"
          style={{ color: '#4a4a4a' }}
          {...fadeUp(0.1)}
        >
          ATS, Zeitwirtschaftssystem und Payroll sprechen selten dieselbe Sprache. Onboarding-Daten werden manuell übertragen, Personalstammdaten dreifach gepflegt, Auswertungen per Hand zusammengezogen. In regulierten Produktionsumgebungen — Pharma, Medtech, Chemie — kommt dazu: jede Abweichung ist ein Risiko, jede manuelle Aktion ein potenzieller Audit-Befund.
        </motion.p>
        <motion.p
          className="mt-4 text-lg leading-relaxed"
          style={{ color: '#4a4a4a' }}
          {...fadeUp(0.2)}
        >
          Ihr HR-Team verbringt Zeit mit Datenpflege statt mit Menschen. Das lässt sich ändern — ohne Systemwechsel.
        </motion.p>
      </div>
    </section>

    {/* Der Ansatz */}
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#F8F7F4' }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10"
          style={{ color: '#1a1a1a' }}
          {...fadeUp(0)}
        >
          Wie ich vorgehе
        </motion.h2>
        <div className="space-y-8">
          {[
            {
              step: '01',
              title: 'Analyse der Systemlandschaft',
              body: 'Ich schaue mir an, welche Systeme Sie nutzen, wo Daten heute manuell fließen und wo der größte Hebel liegt — ohne Vorannahmen über Tools oder Lösungen.',
            },
            {
              step: '02',
              title: 'Integration ohne Systemwechsel',
              body: 'Bestehende Systeme bleiben. Ich verbinde sie über APIs oder Middleware so, dass Daten automatisch und fehlerfrei fließen — tool-agnostisch, auf Basis dessen was schon vorhanden ist.',
            },
            {
              step: '03',
              title: 'Compliance von Anfang an',
              body: 'Jede Lösung ist auf GxP-konforme Umgebungen ausgelegt: Nachvollziehbarkeit, Audit Trail, Validierbarkeit. Nichts, was später nachgerüstet werden muss.',
            },
          ].map((item, i) => (
            <motion.div key={i} className="flex gap-6" {...fadeUp(0.1 * i)}>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                style={{ backgroundColor: '#3D5A80' }}
              >
                {item.step}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: '#1a1a1a' }}>
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#4a4a4a' }}>
                  {item.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Referenz */}
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8"
          style={{ color: '#1a1a1a' }}
          {...fadeUp(0)}
        >
          Aus der Praxis
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-md"
            {...fadeUp(0.05)}
          >
            <img
              src="/images/team-overhead.jpg"
              alt="Team-Meeting – gemeinsam Prozesse analysieren und optimieren"
              className="w-full h-full object-cover"
              style={{ minHeight: '260px', maxHeight: '400px' }}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="rounded-2xl p-8 border"
            style={{ borderColor: '#e0e0e0', backgroundColor: '#fafaf8' }}
            {...fadeUp(0.1)}
          >
          <p className="text-base font-semibold uppercase tracking-wide mb-4" style={{ color: '#3D5A80' }}>
            Internationaler Pharmahersteller, DACH
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
            Zeiterfassung, Payroll und Recruiting waren drei voneinander isolierte Systeme. Jede Gehaltsabrechnung erforderte manuelle Korrekturrunden, Eintritte wurden doppelt erfasst, Auswertungen für den Betriebsrat per Hand erstellt.
          </p>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: '#4a4a4a' }}>
            Nach der Integration laufen Stammdaten automatisch, Abrechnungsdaten werden ohne manuelle Eingriffe übergeben, und der gesamte Prozess ist auditierbar dokumentiert.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            {['Kein Systemwechsel', 'GxP-konform', 'Vollständig automatisiert'].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full"
                style={{ backgroundColor: '#EBF0F7', color: '#3D5A80' }}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </section>

    {/* Über Clara */}
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#F8F7F4' }}>
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: '#1a1a1a' }}
          {...fadeUp(0)}
        >
          Wer dahintersteckt
        </motion.h2>
        <motion.p className="text-lg leading-relaxed" style={{ color: '#4a4a4a' }} {...fadeUp(0.1)}>
          Ich bin Clara Thümecke. Ich arbeite an der Schnittstelle zwischen HR und Technologie — in Umgebungen, wo beides zählt: das Verständnis für HR-Prozesse und die Fähigkeit, Systeme tatsächlich zu verbinden. Kein Beratungsoverhead, kein Offshore-Team. Ich arbeite direkt mit Ihnen.
        </motion.p>
        <motion.div className="mt-6 flex flex-wrap gap-4 text-sm" {...fadeUp(0.2)}>
          <a
            href={EMAIL}
            className="inline-flex items-center gap-1.5 font-medium hover:underline"
            style={{ color: '#3D5A80' }}
          >
            clara@thuemecke.net <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>

    {/* Finaler CTA */}
    <section className="px-6 py-20 md:py-32 text-center" style={{ backgroundColor: '#3D5A80' }}>
      <motion.h2
        className="text-2xl md:text-4xl font-bold text-white mb-4"
        {...fadeUp(0)}
      >
        Kein Pitch. 15 Minuten reichen für eine erste Einschätzung.
      </motion.h2>
      <motion.p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#c8d8ee' }} {...fadeUp(0.1)}>
        Erzählen Sie mir kurz, wie Ihre Systemlandschaft heute aussieht — ich sage Ihnen ehrlich, ob und wo ich helfen kann.
      </motion.p>
      <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" {...fadeUp(0.2)}>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white transition-opacity hover:opacity-90"
          style={{ color: '#3D5A80' }}
        >
          <Calendar className="h-5 w-5" />
          Termin buchen
        </a>
        <a
          href={EMAIL}
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border border-white text-white transition-colors hover:bg-white/10"
        >
          <Mail className="h-5 w-5" />
          E-Mail schreiben
        </a>
      </motion.div>
    </section>

    {/* Minimal Footer */}
    <footer className="px-6 py-6 text-center text-sm" style={{ color: '#888', backgroundColor: '#F8F7F4' }}>
      <a href="/" className="hover:underline" style={{ color: '#3D5A80' }}>thuemecke.net</a>
      {' · '}
      <a href="/impressum" className="hover:underline" style={{ color: '#3D5A80' }}>Impressum</a>
      {' · '}
      <a href="/datenschutz" className="hover:underline" style={{ color: '#3D5A80' }}>Datenschutz</a>
    </footer>
  </div>
);

export default HRPage;
