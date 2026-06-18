import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Layout from '@/components/Layout';

const caseStudies = [
  {
    category: 'Pharma · HR · Payroll',
    title: 'HR & Payroll Automatisierung',
    company: 'Internationaler Pharmahersteller, 5.000+ Mitarbeitende',
    summary:
      'Aufbau einer integrierten HR-Systemlandschaft: Prozessanalyse, Zielarchitektur und technische Umsetzung für Personio, ATOSS und DATEV über mehrere Standorte hinweg.',
    result: 'Klare Systemarchitektur, automatisierte Datenflüsse, deutlich weniger manuelle Prozesse',
  },
  {
    category: 'Recruiting · ATS · DSGVO',
    title: 'Recruiting-Prozesse automatisiert',
    company: 'Personaldienstleister im Recruiting-Umfeld',
    summary:
      'Portfolio serverloser Automationen rund um das ATS: Jobfeeds, automatische Bewerberkommunikation, DSGVO-Consent-Workflows und Datenpflege – vollständig automatisiert.',
    result: 'Signifikant weniger manuelle ATS-Arbeit, DSGVO-Prozesse vollständig automatisiert',
  },
  {
    category: 'Einkauf · KI · SaaS',
    title: 'KI-gestützte Procurement-Plattform',
    company: 'SaaS-Unternehmen im Beschaffungsbereich',
    summary:
      'Multi-Agent-Plattform für Supplier Scouting, Marktanalysen, Dokumentenvergleich und natürlichsprachliche Datenabfragen im Einkauf – cloudfähig und wiederverwendbar.',
    result: 'Skalierbare Agentenarchitektur, beschleunigte Analyse- und Rechercheprozesse',
  },
];

const Index = () => {
  useEffect(() => {
    document.title =
      'Thümecke Business Intelligence Solutions | Prozessautomatisierung & Systemintegration';
  }, []);

  return (
    <Layout
      title="Thümecke Business Intelligence Solutions | Prozessautomatisierung & Systemintegration"
      description="Prozessautomatisierung und Systemintegration für den Mittelstand – von HR und Recruiting bis Einkauf und Finance. Pragmatisch umgesetzt, messbar wirksam."
      keywords="Prozessautomatisierung, Systemintegration, HR-Automatisierung, Recruiting-Automatisierung, Business Intelligence, Mittelstand"
    >
      <div className="min-h-screen">
        <Hero />
        <Services />

        {/* Case Studies */}
        <section className="py-24 bg-gray-50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-tech-gray-900 mb-4">
                Aus der Praxis
              </h2>
              <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
                Einblicke in abgeschlossene Projekte – von HR-Automatisierung bis KI-gestützter
                Plattformentwicklung
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <span className="text-xs font-semibold text-tech-blue uppercase tracking-widest">
                    {c.category}
                  </span>
                  <h3 className="text-xl font-bold text-tech-gray-900 mt-2 mb-1">{c.title}</h3>
                  <p className="text-sm text-tech-gray-500 mb-4">{c.company}</p>
                  <p className="text-tech-gray-700 flex-1">{c.summary}</p>
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <p className="text-xs font-semibold text-tech-gray-400 uppercase tracking-widest mb-1">
                      Ergebnis
                    </p>
                    <p className="text-sm font-medium text-tech-gray-800">{c.result}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <About />

        <div className="py-12 bg-gradient-to-br from-tech-blue/5 to-white">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-tech-gray-900 mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg text-tech-gray-700 mb-6 max-w-2xl mx-auto">
              Sie haben Fragen oder möchten ein Projekt besprechen? Sprechen Sie uns an – wir freuen
              uns auf den Austausch.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue text-white">
                Zum Kontaktformular
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
