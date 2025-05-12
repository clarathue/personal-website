import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartLine, Search, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Title } from '@/components/ui/title';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import * as SelectPrimitive from "@radix-ui/react-select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const CustomSelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "flex w-full cursor-default select-none items-center gap-3 py-4 px-5 min-h-[72px] h-auto rounded-xl transition-colors text-base font-bold min-w-0",
      className
    )}
    {...props}
  >
    {children}
  </SelectPrimitive.Item>
));
CustomSelectItem.displayName = "CustomSelectItem";

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business-intelligence');

  const useCases = [
    {
      id: 'business-intelligence',
      title: 'Business Intelligence Chatbot',
      icon: <ChartLine className="h-6 w-6" />,
      description: 'Smarte Datenanalyse auf Knopfdruck für Controlling, Sales und Einkauf.',
      features: [
        'Verbindung zur internen Datenbank (z. B. Postgres)',
        'AI erstellt automatisiert SQL-Abfragen',
        'Sofortige Antwort auf geschäftsrelevante Fragen',
        'Einsatz: Controlling, Sales, Einkauf'
      ],
      chatExample: {
        question: 'Wie hat sich der Umsatz im letzten Quartal entwickelt?',
        answer: 'Der Gesamtumsatz im letzten Quartal betrug 4.2M €, was einem Wachstum von 8% gegenüber dem Vorjahr entspricht. Die Produktkategorie "Premium" zeigte mit +15% das stärkste Wachstum.',
        visualization: {
          type: 'line',
          data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: 'Umsatz 2024',
                data: [3.8, 4.0, 4.1, 4.2],
                borderColor: '#1EAEDB',
                tension: 0.4
              },
              {
                label: 'Umsatz 2023',
                data: [3.5, 3.6, 3.7, 3.9],
                borderColor: '#94A3B8',
                tension: 0.4
              }
            ]
          }
        }
      }
    },
    {
      id: 'market-research',
      title: 'Marktforschung',
      icon: <Search className="h-6 w-6" />,
      description: 'Automatisierte Marktbeobachtung für Strategie, Marketing und Business Development.',
      features: [
        'Zugriff auf aktuelle Nachrichten via Internet',
        'AI analysiert Trends, Themen & Wettbewerber',
        'Ausgabe in Form strukturierter Reports',
        'Einsatz: Strategie, Marketing, Business Development'
      ],
      chatExample: {
        question: 'Welche neuen Features hat Wettbewerber X letzte Woche veröffentlicht?',
        answer: 'Wettbewerber X hat am 03.05.2025 drei neue Features veröffentlicht: 1) KI-gestützte Produktempfehlungen, 2) Echtzeit-Preisüberwachung für Mitbewerber, 3) Integration mit Microsoft Teams. Die Marktreaktion ist überwiegend positiv, besonders die Teams-Integration wird gelobt.'
      }
    },
    {
      id: 'recruiting',
      title: 'Recruiting',
      icon: <Users className="h-6 w-6" />,
      description: 'Intelligente Unterstützung für HR und Recruiting-Teams bei der Kandidatensuche und Stellenausschreibungen.',
      features: [
        'Integration mit Bewerbermanagement-Systemen',
        'KI-gestützte Erstellung und Optimierung von Stellenausschreibungen',
        'Automatisierte Vorauswahl und Matching von Kandidaten',
        'Einsatz: HR, Recruiting, Talent Acquisition'
      ],
      chatExample: {
        question: 'Wie können wir die Stellenausschreibung für den Senior Software Engineer optimieren?',
        answer: 'Basierend auf erfolgreichen Stellenausschreibungen und aktuellen Markttrends schlage ich folgende Optimierungen vor: 1) Hervorhebung der Remote-Flexibilität, 2) Konkrete Technologie-Stack-Details (React, Node.js, AWS), 3) Klare Karriereentwicklungsmöglichkeiten. Die aktuelle Ausschreibung erreicht nur 65% der Zielgruppe, mit diesen Änderungen könnten wir die Reichweite um 40% steigern.'
      }
    }
  ];

  return (
    <section id="usecases" className="py-24 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <Title as="h2" variant="section" animate={true}>
            Anwendungsfälle
          </Title>
          <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
          Reale Einsatzszenarien von AI-Chatbots in unterschiedlichen Unternehmensbereichen
        </p>
        </motion.div>

        <Tabs 
          defaultValue="business-intelligence" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Mobile Custom Select Dropdown */}
          <div className="sm:hidden mb-24 max-w-2xl mx-auto w-full">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full flex items-center gap-3 py-4 px-5 min-h-[72px] h-auto border-2 border-tech-blue rounded-xl shadow-lg bg-white text-lg font-bold">
                {(() => {
                  const selected = useCases.find(u => u.id === activeTab);
                  if (!selected) return <SelectValue placeholder="Anwendungsfall wählen" />;
                  return (
                    <>
                      <span className="p-2.5 rounded-lg flex-shrink-0 flex items-center justify-center bg-tech-blue text-white">
                        {React.cloneElement(selected.icon, { className: 'h-6 w-6' })}
                      </span>
                      <span className="font-bold text-base text-tech-blue">{selected.title}</span>
                    </>
                  );
                })()}
              </SelectTrigger>
              <SelectContent className="rounded-xl shadow-lg bg-white border border-gray-100">
                {useCases.map((useCase) => (
                  <CustomSelectItem
                    key={useCase.id}
                    value={useCase.id}
                    className={
                      (activeTab === useCase.id
                        ? 'bg-tech-blue/10 text-tech-blue'
                        : 'hover:bg-tech-blue/5 focus:bg-tech-blue/10 text-tech-gray-900')
                    }
                  >
                    <span className={
                      'h-10 w-10 flex items-center justify-center rounded-lg p-0 flex-shrink-0 ' +
                      (activeTab === useCase.id
                        ? 'bg-tech-blue text-white'
                        : 'bg-tech-gray-100 text-tech-gray-700')
                    }>
                      {React.cloneElement(useCase.icon, { className: 'h-6 w-6' })}
                    </span>
                    <span className={
                      (activeTab === useCase.id
                        ? 'font-bold text-tech-blue'
                        : 'font-bold text-tech-gray-900') +
                      ' text-base flex-1 min-w-0 whitespace-nowrap truncate'
                    }>
                      {useCase.title}
                    </span>
                  </CustomSelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tabs */}
          <div className="hidden sm:block">
            <TabsList className="grid grid-cols-3 gap-4 bg-transparent mb-24">
              {useCases.map((useCase) => (
                <TabsTrigger 
                  key={useCase.id}
                  value={useCase.id} 
                  className={cn(
                    "flex items-center gap-3 py-4 px-5 border border-gray-200 rounded-xl bg-white data-[state=active]:border-tech-blue data-[state=active]:text-tech-blue shadow-sm hover:shadow-md transition-all h-auto min-h-[72px] w-full",
                    activeTab === useCase.id ? "shadow-md" : ""
                  )}
                >
                  <div className={cn(
                    "p-2.5 rounded-lg flex-shrink-0", 
                    activeTab === useCase.id ? "bg-tech-blue text-white" : "bg-tech-gray-100 text-tech-gray-700"
                  )}>
                    {useCase.icon}
                  </div>
                  <span className="font-medium text-left text-base leading-snug break-words flex-1">{useCase.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative">
            {useCases.map((useCase) => (
              activeTab === useCase.id && (
                <TabsContent 
                  key={useCase.id} 
                  value={useCase.id}
                  className="mt-20 animate-fade-in"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-5 space-y-6 lg:space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold text-tech-gray-900 mb-4">{useCase.title}</h3>
                        <p className="text-lg text-tech-gray-700">{useCase.description}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-tech-gray-900">Kernfunktionen:</h4>
                        <ul className="space-y-3 lg:space-y-4">
                          {useCase.features.map((feature, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              className="flex items-start"
                            >
                              <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-tech-blue flex-shrink-0" />
                              <span className="text-tech-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                        <div className="bg-tech-gray-100 px-4 sm:px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                          <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                          </div>
                          <div className="text-sm text-tech-gray-500">AI-Chatbot Demo</div>
                        </div>
                        <div className="p-4 sm:p-6 space-y-4">
                          <div className="bg-tech-gray-100 p-4 rounded-lg">
                            <p className="text-tech-gray-800">{useCase.chatExample.question}</p>
                          </div>
                          <div className="bg-tech-blue/10 p-4 rounded-lg">
                            <p className="text-tech-blue font-medium mb-2">AI-Chatbot Antwort:</p>
                            <p className="text-tech-gray-800 mb-4">{useCase.chatExample.answer}</p>
                            {useCase.chatExample.visualization && (
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <div className="h-48">
                                  <Line
                                    data={useCase.chatExample.visualization.data}
                                    options={{
                                      responsive: true,
                                      maintainAspectRatio: false,
                                      plugins: {
                                        legend: {
                                          position: 'top' as const,
                                          labels: {
                                            font: {
                                              size: 12
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
                              </div>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <span className="px-3 py-1 bg-tech-gray-100 text-tech-gray-700 rounded-full text-sm">Datenabfrage</span>
                            <span className="px-3 py-1 bg-tech-gray-100 text-tech-gray-700 rounded-full text-sm">Analyse</span>
                            <span className="px-3 py-1 bg-tech-gray-100 text-tech-gray-700 rounded-full text-sm">Natürliche Sprache</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              )
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
