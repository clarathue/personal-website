import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Database, MessageSquare, Zap, BarChart3, Building2, Users, FileText, Brain, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';
import Layout from '@/components/Layout';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StreamingText: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 30);

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

const AIChatbotsPage = () => {
  const chartData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Umsatz 2024',
        data: [2.1, 2.5, 2.2, 2.4],
        borderColor: '#1EAEDB',
        tension: 0.4
      },
      {
        label: 'Umsatz 2023',
        data: [1.9, 2.3, 1.8, 2.2],
        borderColor: '#94A3B8',
        tension: 0.4
      }
    ]
  };

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Modulare Architektur",
      description: "Skalierbare und wiederverwendbare Komponenten für maximale Flexibilität"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Datenintegration",
      description: "Nahtlose Anbindung an bestehende Datenbanken und APIs"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Natürliche Sprache",
      description: "Intuitive Kommunikation in natürlicher Sprache"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Schnelle Implementierung",
      description: "Rapid Prototyping und agile Entwicklung"
    }
  ];

  const caseStudies = [
    {
      title: "Recruiting & HR",
      company: "Recruiting-Agentur in der Pharma- und Biotech-Branche",
      description: "Automatisierung des Recruiting-Prozesses mit KI-gestützter Vorauswahl und Matching",
      preview: "Durch die Integration eines KI-Chatbots in den Recruiting-Prozess konnten wir die Bewerbungsanalyse automatisieren und die Qualität der Kandidatenauswahl verbessern. Der Chatbot analysiert Lebensläufe, führt erste Gespräche und unterstützt das HR-Team bei der Vorauswahl.",
      situation: "Das Tech-Startup stand vor der Herausforderung, bei starkem Wachstum die Qualität der Einstellungen zu halten und gleichzeitig den Recruiting-Prozess zu beschleunigen. Die manuelle Vorauswahl von Bewerbungen war zeitaufwändig und führte zu Engpässen im HR-Team.",
      process: [
        "Integration des KI-Chatbots in den bestehenden Workflow",
        "Training des Systems mit historischen Einstellungsdaten und erfolgreichen Kandidatenprofilen",
        "Implementierung automatisierter Bewerbungsanalyse und Kategorisierung",
        "Entwicklung einer Matching-Engine für Kandidaten-Position-Passung"
      ],
      results: [
        "Signifikante Zeitersparnis im Screening-Prozess durch automatisierte Vorauswahl",
        "Deutlich bessere Matching-Qualität durch KI-gestützte Analyse",
        "Effizientere Einstellungsprozesse mit kürzerer Time-to-Hire"
      ],
      image: "/images/recruiting.jpg"
    },
    {
      title: "Business Intelligence",
      company: "SaaS Unternehmen",
      description: "KI-gestützte Datenanalyse und Reporting für datengetriebene Entscheidungen",
      preview: "Der KI-Chatbot revolutionierte die Datenanalyse im Unternehmen durch automatisierte Report-Generierung und intelligente Insights. Er analysiert Umsatzdaten, Kundenverhalten und Produktperformance in Echtzeit und liefert maßgeschneiderte Berichte für verschiedene Abteilungen.",
      situation: "Das SaaS Unternehmen benötigte eine effizientere Methode zur Analyse von Geschäftsdaten und zur Erstellung von Reports. Die manuelle Datenaufbereitung war zeitaufwändig und führte zu verzögerten Entscheidungen.",
      process: [
        "Integration verschiedener Datenquellen (Umsatz, Kundendaten, etc.)",
        "Finetuning eines KI-Modells zur automatischen Datenanalyse",
        "Implementierung eines interaktiven Reporting-Systems",
        "Einrichtung von Echtzeit-Monitoring für wichtige KPIs"
      ],
      results: [
        "Schnellere und präzisere Datenanalyse durch automatisierte Prozesse",
        "Bessere Entscheidungsgrundlage durch KI-gestützte Insights",
        "Erhöhung der Effizienz durch Reduzierung manueller Arbeitsschritte bei der Datenanalyse"
      ],
      image: "/images/bi.jpg"
    }
  ];

  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Kosteneinsparung",
      description: "Signifikante Reduzierung der Support-Kosten durch Automatisierung von Routineanfragen. Laut McKinsey-Studie können Unternehmen durch KI-gestützte Automatisierung ihre Betriebskosten deutlich senken."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Produktivitätssteigerung",
      description: "Mitarbeiter können sich auf wertschöpfende Aufgaben konzentrieren, während KI-Systeme repetitive Arbeiten übernehmen. Dies führt zu einer effizienteren Ressourcennutzung und höherer Mitarbeiterzufriedenheit."
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Skalierbarkeit",
      description: "Flexible Anpassung an wachsende Anforderungen ohne proportional steigende Personalkosten. Die Systeme wachsen mit Ihrem Unternehmen und können Spitzenlasten effizient bewältigen."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Datenqualität",
      description: "Verbesserte Datenqualität durch automatisierte Validierung und Konsistenzprüfung. Dies führt zu fundierteren Entscheidungen und reduziert Fehler in der Datenanalyse erheblich."
    }
  ];

  const integrationUseCases = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Standalone Chatbot",
      description: "Eigenständiger KI-Chatbot für direkte Kundeninteraktion und Support"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Datenanalyse & Reporting",
      description: "Automatisierte Datenanalyse und intelligente Report-Generierung"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Daten-verbesserung",
      description: "KI-gestützte Datenbereinigung und Qualitätsverbesserung"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "System Integration",
      description: "Nahtlose Anbindung an bestehende Systeme und APIs"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Dokumenten-analyse",
      description: "Intelligente Verarbeitung und Analyse von Dokumenten"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "HR & Recruiting",
      description: "Automatisierte Bewerbungsanalyse und Kandidatenmatching"
    }
  ];

  return (
    <Layout
      title="AI-Chatbots | Thümecke Business Intelligence Solutions"
      description="Maßgeschneiderte AI-Chatbot Lösungen für Ihr Unternehmen. Automatisieren Sie Kundenbetreuung, Support und interne Prozesse mit modernster KI-Technologie."
      keywords="AI-Chatbots, Künstliche Intelligenz, Chatbot Entwicklung, Kundenservice Automatisierung, KI-Support, Prozessautomatisierung"
    >
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        <Navbar />
        
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
                  KI-Chatbots für Ihre Business Intelligence
                </motion.h1>
                
                <motion.p 
                  className="text-lg sm:text-xl text-tech-gray-700 max-w-2xl mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  Skalierbare, projektbasierte AI-Chatbots für Business Intelligence, Marktanalyse und Lieferantenmanagement – maßgeschneidert, effizient und mit messbarem Mehrwert.
                </motion.p>
                
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
              
              <div className="lg:col-span-5 flex items-center">
                <motion.div
                  className="relative w-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                >
                  {/* Modern Chat Interface */}
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-tech-blue to-tech-darkBlue p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                            <Brain className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">Business Intelligence Assistant</h3>
                            <p className="text-white/80 text-sm">Online & Bereit</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4 bg-gray-50/50">
                      {/* User Message */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="flex justify-end"
                      >
                        <div className="bg-tech-blue text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                          Wie entwickelt sich der Umsatz in Region Nord im Vergleich zum Vorjahr?
                        </div>
                      </motion.div>

                      {/* Bot Response */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%] shadow-sm">
                          <div className="mb-3">
                            <Line
                              data={chartData}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                plugins: {
                                  legend: {
                                    position: 'top' as const,
                                    labels: {
                                      font: {
                                        size: 11
                                      }
                                    }
                                  }
                                },
                                scales: {
                                  y: {
                                    beginAtZero: false,
                                    ticks: {
                                      callback: function(value) {
                                        return value + 'M €';
                                      }
                                    }
                                  }
                                }
                              }}
                            />
                          </div>
                          <p className="text-sm text-tech-gray-700">
                            <StreamingText 
                              text="Der Umsatz in Region Nord zeigt eine dynamische Entwicklung: Nach einem starken Q2 (2.5M €) gab es im Q3 einen Rückgang auf 2.2M €. Im aktuellen Q4 liegt der Umsatz bei 2.4M €, was einem Wachstum von 9% zum Vorjahresquartal entspricht."
                              delay={2000}
                            />
                          </p>
                        </div>
                      </motion.div>

                      {/* Interactive Elements */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.5 }}
                        className="flex flex-wrap gap-2 mt-4"
                      >
                        <button className="px-3 py-1.5 bg-tech-blue/10 text-tech-blue rounded-full text-sm hover:bg-tech-blue/20 transition-colors">
                          Detaillierte Analyse
                        </button>
                        <button className="px-3 py-1.5 bg-tech-blue/10 text-tech-blue rounded-full text-sm hover:bg-tech-blue/20 transition-colors">
                          Produktlinie A
                        </button>
                        <button className="px-3 py-1.5 bg-tech-blue/10 text-tech-blue rounded-full text-sm hover:bg-tech-blue/20 transition-colors">
                          Region Süd
                        </button>
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

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-br from-tech-blue/5 to-white overflow-hidden">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-tech-gray-900 mb-4">Wirtschaftlicher Nutzen</h2>
              <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
                Konkrete Mehrwerte für Ihr Unternehmen durch KI-Integration
              </p>
            </motion.div>

            <div className="relative">
              {/* Interactive Timeline */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-tech-blue/20 -translate-x-1/2" />

              {/* Cost Savings */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mb-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-tech-blue/15 to-transparent">
                      <div className="absolute inset-0 bg-[url('/images/cost-savings.jpg')] bg-cover bg-center mix-blend-soft-light opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">Kosteneinsparung</h3>
                        <p className="text-lg opacity-90">
                          Signifikante Reduzierung der Support-Kosten durch Automatisierung von Routineanfragen. Laut 
                          <a 
                            href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-tech-blue font-medium inline-flex items-center ml-1"
                          >
                            McKinsey-Studie
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </a>
                          können Unternehmen durch KI-gestützte Automatisierung ihre Betriebskosten deutlich senken.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 w-8 h-8 bg-tech-blue rounded-full -translate-y-1/2" />
                      <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center">
                            <BarChart3 className="h-6 w-6 text-tech-blue" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-tech-gray-900">Kosteneinsparung durch KI</h4>
                            <p className="text-tech-gray-600">Konkrete Beispiele aus der Praxis</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Support-Anfragen</span>
                              <span className="text-sm text-tech-gray-500">85%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "85%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-tech-blue rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Automatisierte Bearbeitung von Routineanfragen</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Datenanalyse</span>
                              <span className="text-sm text-tech-gray-500">75%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "75%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-tech-blue rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Reduzierung manueller Datenaufbereitung</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Reporting</span>
                              <span className="text-sm text-tech-gray-500">90%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "90%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-full bg-tech-blue rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Automatisierte Report-Generierung</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Productivity */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mb-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/15 to-transparent">
                      <div className="absolute inset-0 bg-[url('/images/productivity.jpg')] bg-cover bg-center mix-blend-soft-light opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">Produktivitätssteigerung</h3>
                        <p className="text-lg opacity-90">
                          Mitarbeiter können sich auf wertschöpfende Aufgaben konzentrieren, während KI-Systeme repetitive Arbeiten übernehmen. Dies führt zu einer effizienteren Ressourcennutzung und höherer Mitarbeiterzufriedenheit.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
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
                              <span className="text-sm font-medium text-tech-gray-700">Strategische Planung</span>
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
                            <p className="text-xs text-tech-gray-500 mt-1">Mehr Zeit für strategische Entscheidungen</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Kreative Arbeit</span>
                              <span className="text-sm text-tech-gray-500">+60%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-emerald-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Fokus auf innovative Lösungen</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Kundeninteraktion</span>
                              <span className="text-sm text-tech-gray-500">+50%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "50%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-full bg-emerald-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Mehr Zeit für persönlichen Kontakt</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Scalability */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative mb-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="lg:order-2">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/15 to-transparent">
                      <div className="absolute inset-0 bg-[url('/images/scalability.jpg')] bg-cover bg-center mix-blend-soft-light opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">Skalierbarkeit</h3>
                        <p className="text-lg opacity-90">
                          Flexible Anpassung an wachsende Anforderungen ohne proportional steigende Personalkosten. Die Systeme wachsen mit Ihrem Unternehmen und können Spitzenlasten effizient bewältigen.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:order-1">
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 w-8 h-8 bg-purple-500 rounded-full -translate-y-1/2" />
                      <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-tech-gray-900">Skalierbarkeit</h4>
                            <p className="text-tech-gray-600">Flexible Anpassung an Wachstum</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Anfragen pro Stunde</span>
                              <span className="text-sm text-tech-gray-500">1000+</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-purple-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Bewältigung von Spitzenlasten</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Datenvolumen</span>
                              <span className="text-sm text-tech-gray-500">10x</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-purple-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Skalierbare Datenverarbeitung</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Kosteneffizienz</span>
                              <span className="text-sm text-tech-gray-500">70%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "70%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-full bg-purple-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Geringere Kosten pro Transaktion</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Data Quality */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-500/15 to-transparent">
                      <div className="absolute inset-0 bg-[url('/images/data-quality.jpg')] bg-cover bg-center mix-blend-soft-light opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h3 className="text-3xl font-bold mb-2">Datenqualität</h3>
                        <p className="text-lg opacity-90">
                          Verbesserte Datenqualität durch automatisierte Validierung und Konsistenzprüfung. Dies führt zu fundierteren Entscheidungen und reduziert Fehler in der Datenanalyse erheblich.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="relative">
                      <div className="absolute -left-4 top-1/2 w-8 h-8 bg-amber-500 rounded-full -translate-y-1/2" />
                      <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                            <FileText className="h-6 w-6 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-tech-gray-900">Datenqualität</h4>
                            <p className="text-tech-gray-600">Präzise und zuverlässige Daten</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Fehlerreduktion</span>
                              <span className="text-sm text-tech-gray-500">95%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "95%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-amber-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Automatische Fehlererkennung</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Datenkonsistenz</span>
                              <span className="text-sm text-tech-gray-500">98%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "98%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="h-full bg-amber-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Einheitliche Datenformate</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-tech-gray-700">Echtzeit-Validierung</span>
                              <span className="text-sm text-tech-gray-500">100%</span>
                            </div>
                            <div className="h-2 bg-tech-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="h-full bg-amber-500 rounded-full"
                              />
                            </div>
                            <p className="text-xs text-tech-gray-500 mt-1">Sofortige Qualitätsprüfung</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 text-center"
            >

            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-tech-gray-900 mb-4">Use Cases</h2>
              <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
                Flexible Einsatzmöglichkeiten für verschiedene Anwendungsfälle
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {integrationUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="bg-tech-blue/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-tech-blue/20 transition-colors">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-tech-gray-900 mb-2 group-hover:text-tech-blue transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-tech-gray-600">
                    {useCase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Carousel Section */}
        <section className="py-16 bg-gradient-to-br from-white to-gray-50">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-tech-gray-900 mb-4">Case Studies</h2>
              <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
                Erfolgreiche KI-Integrationen in verschiedenen Branchen
              </p>
            </motion.div>

            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-0">
                    {caseStudies.map((study, index) => (
                      <CarouselItem key={index} className="pl-0 md:basis-1/2 flex justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="h-full cursor-pointer w-full"
                          onClick={() => {
                            const modal = document.getElementById(`modal-${index}`);
                            if (modal) {
                              modal.classList.remove('hidden');
                              document.body.style.overflow = 'hidden';
                            }
                          }}
                        >
                          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full border border-gray-100 hover:shadow-xl transition-shadow duration-300 max-w-sm mx-auto">
                            <div className="relative aspect-[16/9]">
                              <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <h3 className="text-lg font-bold text-white mb-0.5">{study.title}</h3>
                                <p className="text-xs text-tech-gray-200">{study.company}</p>
                              </div>
                            </div>
                            <div className="p-3">
                              {/* Animated Conversation */}
                              <div className="flex items-start space-x-2 mb-4">
                                {/* Brain Icon */}
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 }}
                                  className="flex-shrink-0 mt-10"
                                >
                                  <div className="w-6 h-6 rounded-full bg-tech-blue/20 flex items-center justify-center">
                                    <Brain className="h-3 w-3 text-tech-blue" />
                                  </div>
                                </motion.div>

                                {/* Chat Container */}
                                <div className="flex-1 space-y-1.5">
                                  <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="flex justify-end"
                                  >
                                    <div className="bg-tech-blue text-white px-2 py-1 rounded-xl rounded-tr-none max-w-[85%] text-xs">
                                      <motion.span
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}
                                      >
                                        {study.title === "Recruiting & HR" 
                                          ? "Haben wir passende Kandidaten für die Ingenieurstelle?"
                                          : "Welches meiner Produkte wurde letzten Monat am meisten verkauft?"}
                                      </motion.span>
                                    </div>
                                  </motion.div>
                                  
                                  <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 }}
                                    className="flex justify-start"
                                  >
                                    <div className="bg-gray-100 px-2 py-1 rounded-xl rounded-tl-none max-w-[85%]">
                                      <div className="flex items-center space-x-0.5">
                                        <div className="w-1 h-1 bg-tech-blue rounded-full animate-pulse" />
                                        <div className="w-1 h-1 bg-tech-blue rounded-full animate-pulse delay-75" />
                                        <div className="w-1 h-1 bg-tech-blue rounded-full animate-pulse delay-150" />
                                      </div>
                                    </div>
                                  </motion.div>
                                </div>

                                {/* User Icon */}
                                <motion.div
                                  initial={{ opacity: 0, x: 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.3 }}
                                  className="flex-shrink-0"
                                >
                                  <div className="w-6 h-6 rounded-full bg-tech-blue/20 flex items-center justify-center">
                                    <Users className="h-3 w-3 text-tech-blue" />
                                  </div>
                                </motion.div>
                              </div>

                              <p className="text-sm text-tech-gray-600 mb-4 line-clamp-2">{study.preview}</p>
                              <div className="text-tech-blue hover:text-tech-darkBlue font-medium inline-flex items-center text-sm">
                                Mehr erfahren
                                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Modals */}
        {caseStudies.map((study, index) => (
          <motion.div
            key={`modal-${index}`}
            id={`modal-${index}`}
            className="fixed inset-0 bg-black/50 z-50 hidden flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.currentTarget.classList.add('hidden');
                document.body.style.overflow = 'auto';
              }
            }}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <div className="p-8">
                <motion.div 
                  className="mb-8 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Animated Chatbot Header */}
                  <div className="relative h-32 mb-8 bg-gradient-to-r from-tech-blue/5 to-tech-blue/10 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full max-w-md px-6">
                        {/* Animated Conversation */}
                        <div className="flex items-center justify-between space-x-4">
                          {/* Bot Avatar */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                              <Brain className="h-6 w-6 text-tech-blue" />
                            </div>
                          </motion.div>

                          {/* Chat Bubbles */}
                          <div className="flex-1 space-y-4">
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="flex justify-end"
                            >
                              <div className="bg-tech-blue text-white px-4 py-2 rounded-2xl rounded-tr-none max-w-[80%]">
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.5 }}
                                >
                                  Wie können wir den Recruiting-Prozess optimieren?
                                </motion.span>
                              </div>
                            </motion.div>
                            
                            <motion.div
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }}
                              className="flex justify-start"
                            >
                              <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-tl-none max-w-[80%]">
                                <motion.div
                                  className="flex items-center space-x-2"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.7 }}
                                >
                                  <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse" />
                                  <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse delay-75" />
                                  <div className="w-2 h-2 bg-tech-blue rounded-full animate-pulse delay-150" />
                                </motion.div>
                              </div>
                            </motion.div>
                          </div>

                          {/* User Avatar */}
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                              <Users className="h-6 w-6 text-tech-blue" />
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tech-blue/0 via-tech-blue/50 to-tech-blue/0"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>

                  <motion.h3 
                    className="text-3xl font-bold text-tech-gray-900 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p 
                    className="text-lg text-tech-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    {study.company}
                  </motion.p>
                </motion.div>

                <div className="mb-8">
                  <motion.h4 
                    className="text-xl font-semibold text-tech-gray-900 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    Situation
                  </motion.h4>
                  <motion.p 
                    className="text-tech-gray-700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    {study.situation}
                  </motion.p>
                </div>
                
                <div className="mb-8">
                  <motion.h4 
                    className="text-xl font-semibold text-tech-gray-900 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    Projektablauf
                  </motion.h4>
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                  >
                    {study.process.map((step, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + (idx * 0.1) }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tech-blue/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-tech-blue text-sm">{idx + 1}</span>
                        </div>
                        <span className="text-tech-gray-700">{step}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div>
                  <motion.h4 
                    className="text-xl font-semibold text-tech-gray-900 mb-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                  >
                    Ergebnisse
                  </motion.h4>
                  <motion.ul 
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    {study.results.map((result, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.7 + (idx * 0.1) }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tech-blue/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-tech-blue text-sm">•</span>
                        </div>
                        <span className="text-tech-gray-700">{result}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

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
                Bereit für den nächsten Schritt?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-tech-gray-600 mb-8"
              >
                Lassen Sie uns gemeinsam Ihr AI-Chatbot Projekt entwickeln. Ich berate Sie gerne bei der Konzeption und Umsetzung.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link to="/contact">
                  <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue text-white">
                    Jetzt Projekt besprechen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default AIChatbotsPage; 