
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartLine, Search, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState('business-intelligence');

  const useCases = [
    {
      id: 'business-intelligence',
      title: 'Business Intelligence Chatbot',
      icon: <ChartLine className="h-6 w-6" />,
      description: 'Smarte Datenanalyse auf Knopfdruck für Controlling, Sales und Einkauf.',
      color: 'bg-blue-500',
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
      color: 'bg-emerald-500',
      features: [
        'Nutzung von SERPA-API (Google News, Web-Ergebnisse)',
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
      id: 'supplier-scouting',
      title: 'Lieferanten-Scouting & Risikomanagement',
      icon: <Database className="h-6 w-6" />,
      description: 'Intelligente Lieferantenanalyse für Einkauf, Supply Chain und ESG-Teams.',
      color: 'bg-amber-500',
      features: [
        'Verbindung interner & externer Datenquellen',
        'Automatisierte Bewertung neuer & bestehender Lieferanten',
        'Risikofrüherkennung über News- & Social-Sentiment',
        'Einsatz: Einkauf, Supply Chain, ESG'
      ],
      chatExample: {
        question: 'Gibt es aktuelle Risiken bei unserem Zulieferer XYZ GmbH?',
        answer: 'Bei XYZ GmbH wurden zwei potenzielle Risikofaktoren identifiziert: 1) In lokalen Medien wurde über Arbeitskonflikte im Hauptwerk berichtet (12.04.2025), 2) Eine wichtige Zertifizierung läuft in 45 Tagen aus. Die Gesamtrisikobewertung wurde von "niedrig" auf "mittel" angepasst.'
      }
    }
  ];

  return (
    <section id="usecases" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Anwendungsfälle</h2>
        <p className="section-subtitle text-center mx-auto">
          Reale Einsatzszenarien von AI-Chatbots in unterschiedlichen Unternehmensbereichen
        </p>

        <Tabs 
          defaultValue="business-intelligence" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <TabsList className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-transparent mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger 
                key={useCase.id}
                value={useCase.id} 
                className={cn(
                  "flex items-center gap-2 py-4 px-4 border border-gray-200 rounded-lg bg-white data-[state=active]:border-tech-blue data-[state=active]:text-tech-blue shadow-sm hover:shadow-md transition-all",
                  activeTab === useCase.id ? "shadow-md" : ""
                )}
              >
                <div className={cn(
                  "p-2 rounded-full", 
                  activeTab === useCase.id ? "bg-tech-blue text-white" : "bg-tech-gray-100 text-tech-gray-700"
                )}>
                  {useCase.icon}
                </div>
                <span className="font-medium">{useCase.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {useCases.map((useCase) => (
            <TabsContent 
              key={useCase.id} 
              value={useCase.id}
              className="mt-0 animate-fade-in"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-2xl font-bold text-tech-gray-900">{useCase.title}</h3>
                  <p className="text-tech-gray-700">{useCase.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-tech-gray-900">Kernfunktionen:</h4>
                    <ul className="space-y-3">
                      {useCase.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-tech-blue" />
                          <span className="text-tech-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-7">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="bg-tech-gray-100 px-4 py-3 border-b border-gray-200 flex items-center justify-between">
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
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-2 py-1 bg-tech-gray-100 text-tech-gray-700 rounded text-xs">Datenabfrage</span>
                        <span className="px-2 py-1 bg-tech-gray-100 text-tech-gray-700 rounded text-xs">Analyse</span>
                        <span className="px-2 py-1 bg-tech-gray-100 text-tech-gray-700 rounded text-xs">Natürliche Sprache</span>
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
