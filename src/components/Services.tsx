
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code, Network } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "AI-Beratung & Konzeption",
      icon: <Brain className="h-10 w-10 text-tech-blue" />,
      items: [
        "Potenzialanalysen für AI-Prozesse",
        "Strategische Beratung zu Datennutzung & Integration",
        "Machbarkeitsbewertungen von AI-Vorhaben"
      ]
    },
    {
      title: "Entwicklung modularer AI-Chatbots",
      icon: <Code className="h-10 w-10 text-tech-blue" />,
      items: [
        "Aufbau wiederverwendbarer Chatbot-Komponenten",
        "Datenbankanbindung (z. B. Postgres, Snowflake)",
        "API-Integrationen (z. B. SERPA, Genesis, interne Tools)",
        "Antwortgenerierung auf Basis natürlicher Sprache (NLP)",
        "Containerisierung & Deployment auf AWS"
      ]
    },
    {
      title: "Skalierung & Prozessautomatisierung",
      icon: <Network className="h-10 w-10 text-tech-blue" />,
      items: [
        "Aufbau modularer Architekturen für neue Projekte",
        "Wartung & Optimierung bestehender Lösungen",
        "Anbindung an Frontends, Zusammenarbeit mit UX-Teams"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-tech-gray-100">
      <div className="section-container">
        <h2 className="section-title text-center">Leistungen</h2>
        <p className="section-subtitle text-center mx-auto">
          Maßgeschneiderte KI-Lösungen für Ihren spezifischen Geschäftsbedarf
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-tech-blue" />
              <CardHeader className="pt-8 pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-tech-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-tech-blue" />
                      <span className="text-tech-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
