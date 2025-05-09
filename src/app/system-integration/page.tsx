import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Database, GitBranch, Zap, Shield, Code, BarChart3, Users, Building2, ShoppingCart, FileText, Truck, Wallet } from 'lucide-react';
import Layout from '@/components/Layout';

const SystemIntegration = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-tech-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Systemvernetzungen & Automatisierung
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-tech-gray-700 max-w-2xl mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Effiziente Integration und Automatisierung Ihrer Geschäftsprozesse durch maßgeschneiderte Systemvernetzungen. Optimieren Sie Ihre Workflows und steigern Sie die Produktivität.
              </motion.p>
              
              <motion.div
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <Link to="/contact">
                  <button className="rounded-md bg-tech-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tech-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-blue">
                    Projekt besprechen
                  </button>
                </Link>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 flex items-center">
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                {/* Modern System Integration Interface */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-tech-blue to-tech-darkBlue p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <Code className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">System Integration Dashboard</h3>
                          <p className="text-white/80 text-sm">Aktiv & Synchronisiert</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                      </div>
                    </div>
                  </div>

                  {/* Integration Status */}
                  <div className="p-4 space-y-4 bg-gray-50/50">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="flex justify-end"
                    >
                      <div className="bg-tech-blue text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                        System-Status: Alle Komponenten synchronisiert
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-sm text-tech-gray-700">Datenbank: Verbunden</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-sm text-tech-gray-700">API: Aktiv</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-sm text-tech-gray-700">Workflow: Läuft</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-tech-blue/20 to-tech-darkBlue/20 blur-3xl rounded-full" />
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tech-blue/10 rounded-full blur-2xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">Systemintegration</h2>
            <p className="mt-6 text-lg leading-8 text-tech-gray-600">
              Unsere Lösungen verbinden Ihre Systeme nahtlos und automatisieren Ihre Geschäftsprozesse für maximale Effizienz.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-tech-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-tech-blue">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  Datenintegration
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tech-gray-600">
                  <p className="flex-auto">Nahtlose Verbindung verschiedener Datenquellen und Systeme für eine einheitliche Datenbasis.</p>
                </dd>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-tech-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-tech-blue">
                    <GitBranch className="h-6 w-6 text-white" />
                  </div>
                  Workflow-Automatisierung
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tech-gray-600">
                  <p className="flex-auto">Automatisierung wiederkehrender Prozesse und Workflows für optimierte Geschäftsabläufe.</p>
                </dd>
              </motion.div>
              <motion.div 
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-tech-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-tech-blue">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  Echtzeit-Synchronisation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tech-gray-600">
                  <p className="flex-auto">Sofortige Datenaktualisierung und Synchronisation zwischen allen verbundenen Systemen.</p>
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </section>

      {/* Economic Benefits Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-tech-blue/5 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">Wirtschaftliche Vorteile</h2>
            <p className="mt-6 text-lg leading-8 text-tech-gray-600">
              Unsere Systemvernetzungen und Automatisierungslösungen generieren konkrete wirtschaftliche Vorteile für Ihr Unternehmen.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 w-8 h-8 bg-tech-blue rounded-full -translate-y-1/2" />
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-6 w-6 text-tech-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-tech-gray-900">Kosteneinsparung</h4>
                        <p className="text-tech-gray-600">Konkrete Beispiele aus der Praxis</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-tech-gray-700">Manuelle Prozesse</span>
                          <span className="text-sm text-tech-gray-500">-70%</span>
                        </div>
                        <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "70%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-tech-blue rounded-full"
                          />
                        </div>
                        <p className="text-xs text-tech-gray-500 mt-1">Reduzierung manueller Arbeit</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-tech-gray-700">Prozesszeit</span>
                          <span className="text-sm text-tech-gray-500">-60%</span>
                        </div>
                        <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "60%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-tech-blue rounded-full"
                          />
                        </div>
                        <p className="text-xs text-tech-gray-500 mt-1">Schnellere Durchlaufzeiten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -left-4 top-1/2 w-8 h-8 bg-emerald-500 rounded-full -translate-y-1/2" />
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-tech-gray-900">Produktivitätssteigerung</h4>
                        <p className="text-tech-gray-600">Mehr Zeit für wertschöpfende Aufgaben</p>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-tech-gray-700">Effizienz</span>
                          <span className="text-sm text-tech-gray-500">+40%</span>
                        </div>
                        <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "40%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-tech-gray-500 mt-1">Steigerung der Gesamteffizienz</p>
                      </div>
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-tech-gray-700">Fehlerquote</span>
                          <span className="text-sm text-tech-gray-500">-90%</span>
                        </div>
                        <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="h-full bg-emerald-500 rounded-full"
                          />
                        </div>
                        <p className="text-xs text-tech-gray-500 mt-1">Reduzierung von Fehlern</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-tech-gray-900 sm:text-4xl">Use Cases</h2>
            <p className="mt-6 text-lg leading-8 text-tech-gray-600">
              Entdecken Sie die vielfältigen Möglichkeiten der Systemvernetzung und Automatisierung für Ihr Unternehmen.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Recruiting Automation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <Users className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  Recruiting Automation
                </h3>
                <p className="text-sm text-tech-gray-600">
                  Automatisierte Übertragung von Kandidatendaten zwischen Bewerbungsportalen, ATS und HR-Systemen. Reduzieren Sie manuelle Dateneingaben und beschleunigen Sie den Recruiting-Prozess.
                </p>
              </motion.div>

              {/* Business Intelligence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <BarChart3 className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  Automatisiertes Dashboarding
                </h3>
                <p className="text-sm text-tech-gray-600">
                  Echtzeit-Dashboards mit automatischer Datenaktualisierung aus verschiedenen Quellen. Visualisieren Sie Ihre KPIs und treffen Sie datenbasierte Entscheidungen.
                </p>
              </motion.div>

              {/* E-Commerce Integration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  E-Commerce Integration
                </h3>
                <p className="text-sm text-tech-gray-600">
                  Nahtlose Verbindung von Online-Shops mit Warenwirtschaft und ERP-Systemen. Automatisieren Sie Bestellungen, Lagerbestände und Lieferungen.
                </p>
              </motion.div>

              {/* Dokumentenverarbeitung */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <FileText className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  Automatisierte Dokumentenverarbeitung
                </h3>
                <p className="text-sm text-tech-gray-600">
                  KI-gestützte Verarbeitung und Klassifizierung von Dokumenten. Automatisieren Sie die Extraktion und Weiterleitung von Informationen.
                </p>
              </motion.div>

              {/* Lieferantenmanagement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <Truck className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  Lieferantenmanagement
                </h3>
                <p className="text-sm text-tech-gray-600">
                  Automatisierte Kommunikation und Datenübertragung mit Lieferanten. Optimieren Sie Bestellungen, Lieferungen und Rechnungsstellung.
                </p>
              </motion.div>

              {/* Finanzautomatisierung */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                  <Wallet className="h-6 w-6 text-tech-blue" />
                </div>
                <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                  Finanzautomatisierung
                </h3>
                <p className="text-sm text-tech-gray-600">
                  Automatisierte Buchhaltung und Finanzprozesse. Verbinden Sie Banken, ERP und Buchhaltungssysteme für effiziente Finanzverwaltung.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-tech-blue/5 to-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-tech-gray-900 mb-6"
            >
              Bereit für die nächste Stufe der Automatisierung?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-tech-gray-600 mb-8"
            >
              Lassen Sie uns gemeinsam Ihre Systeme vernetzen und Ihre Prozesse automatisieren.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/contact">
                <button className="rounded-md bg-tech-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-tech-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-blue">
                  Jetzt Projekt besprechen
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SystemIntegration; 