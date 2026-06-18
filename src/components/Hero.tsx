import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Title } from '@/components/ui/title';

const metrics = [
  { label: 'Manuelle Prozesse reduziert', value: '−70 %' },
  { label: 'Prozesszeit verkürzt', value: '−60 %' },
  { label: 'API-Verfügbarkeit', value: '99,9 %' },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Title as="h1" variant="page" animate={true}>
              Prozessautomatisierung & Systemintegration für den Mittelstand
            </Title>

            <motion.p
              className="text-lg sm:text-xl text-tech-gray-700 max-w-2xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Wir automatisieren Ihre Geschäftsprozesse und vernetzen Ihre Systemlandschaft – von HR und Recruiting bis Einkauf und Finance. Pragmatisch umgesetzt, messbar wirksam.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
            >
              <span className="px-3 py-1 bg-tech-blue text-white rounded-full text-sm font-medium">HR & Payroll</span>
              <span className="px-3 py-1 bg-tech-gray-700 text-white rounded-full text-sm font-medium">Systemintegration</span>
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-medium">Recruiting</span>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-medium">Einkauf</span>
              <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">Finance</span>
              <span className="px-3 py-1 bg-red-500 text-white rounded-full text-sm font-medium">Operations</span>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue text-white">
                  Projekt besprechen
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex items-center pt-4">
            <motion.div
              className="w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <p className="text-xs font-semibold text-tech-gray-400 uppercase tracking-widest mb-6">
                  Ergebnisse aus Kundenprojekten
                </p>
                <div className="space-y-5">
                  {metrics.map((m, i) => (
                    <motion.div key={i}>
                      <div className="flex items-center justify-between">
                        <span className="text-tech-gray-700">{m.label}</span>
                        <motion.span
                          className="text-2xl font-bold text-tech-blue"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + i * 0.15, duration: 0.4 }}
                        >
                          {m.value}
                        </motion.span>
                      </div>
                      {i < metrics.length - 1 && <div className="h-px bg-gray-100 mt-5" />}
                    </motion.div>
                  ))}
                  <div className="h-px bg-gray-100" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    <p className="text-xs text-tech-gray-400 uppercase tracking-widest mb-3">Unsere Branchen</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">Pharma & Industrie</span>
                      <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">HR & Recruiting</span>
                      <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">Einkauf</span>
                      <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">Finance</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
