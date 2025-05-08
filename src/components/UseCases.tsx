import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartLine, Search, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
        answer: 'Der Gesamtumsatz im letzten Quartal betrug 4.2M €, was einem Wachstum von 8% gegenüber dem Vorjahr entspricht. Die Produktkategorie "Premium" zeigte mit +15% das stärkste Wachstum.'
      }
    },
    {
      id: 'market-research',
      title: 'Marktforschung & Wettbewerbsanalysen',
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
      title: 'Recruiting & Talent Acquisition',
      icon: <Database className="h-6 w-6" />,
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
          <h2 className="text-4xl font-bold text-tech-gray-900 mb-4">Anwendungsfälle</h2>
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
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-transparent mb-16">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id}
                value={useCase.id} 
                className={cn(
                  "flex items-center gap-3 py-4 px-5 border border-gray-200 rounded-xl bg-white data-[state=active]:border-tech-blue data-[state=active]:text-tech-blue shadow-sm hover:shadow-md transition-all h-auto min-h-[72px]",
                  activeTab === useCase.id ? "shadow-md" : ""
                )}
              >
                <div className={cn(
                  "p-2.5 rounded-lg flex-shrink-0", 
                  activeTab === useCase.id ? "bg-tech-blue text-white" : "bg-tech-gray-100 text-tech-gray-700"
                )}>
                  {useCase.icon}
                </div>
                <span className="font-medium text-left text-base leading-snug whitespace-normal flex items-center min-h-[24px]">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent 
              key={useCase.id} 
              value={useCase.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-tech-gray-900 mb-4">{useCase.title}</h3>
                    <p className="text-lg text-tech-gray-700">{useCase.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-tech-gray-900">Kernfunktionen:</h4>
                    <ul className="space-y-4">
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
                    <div className="bg-tech-gray-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex space-x-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="text-sm text-tech-gray-500">AI-Chatbot Demo</div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="bg-tech-gray-100 p-4 rounded-lg">
                        <p className="text-tech-gray-800">{useCase.chatExample.question}</p>
                      </div>
                      
                      <div className="bg-tech-blue/10 p-4 rounded-lg">
                        <p className="text-tech-blue font-medium mb-2">AI-Chatbot Antwort:</p>
                        <p className="text-tech-gray-800">{useCase.chatExample.answer}</p>
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
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UseCases;
