import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Code, Network, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Title } from '@/components/ui/title';
const Services: React.FC = () => {
  const services = [
    {
      title: "AI-Beratung & Systemintegration",
      icon: <Brain className="h-8 w-8" />,
      description: "Strategische Beratung und Konzeption von KI-Lösungen mit Fokus auf nahtlose Systemintegration",
      items: [
        "Analyse bestehender Systemlandschaften und Integrationspotenziale",
        "Entwicklung von API-Strategien für effiziente Datenflüsse",
        "Konzeption von Middleware-Lösungen für Systemkommunikation",
        "Machbarkeitsbewertungen für komplexe Integrationsvorhaben"
      ]
    },
    {
      title: "Entwicklung modularer AI-Chatbots",
      icon: <Code className="h-8 w-8" />,
      description: "Intelligente Chatbot-Lösungen mit umfassender Systemanbindung",
      items: [
        "REST & GraphQL API-Integrationen für Echtzeit-Datenabfragen",
        "Datenbankanbindungen (Postgres, Snowflake, MongoDB)",
        "Middleware-Entwicklung für komplexe Systemkommunikation",
        "Webhook-Integrationen für automatisierte Prozesse",
        "Containerisierung & Deployment auf AWS mit CI/CD"
      ]
    },
    {
      title: "Prozessautomatisierung & Integration",
      icon: <Network className="h-8 w-8" />,
      description: "Nahtlose Verbindung verschiedener Systeme und Automatisierung von Geschäftsprozessen",
      items: [
        "Entwicklung von API-Gateways für zentrale Systemkommunikation",
        "Implementierung von Event-Driven Architectures",
        "Microservices-Architektur für skalierbare Integrationen",
        "Monitoring & Logging für Systemkommunikation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Title as="h2" variant="section" animate={true}>
            Leistungen
          </Title>
          <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
            Modulare KI-Lösungen mit nahtloser Systemintegration für Ihren spezifischen Geschäftsbedarf
        </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 to-tech-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <CardContent className="relative p-8 z-10">
                  <div className="mb-6">
                    <div className="h-16 w-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-tech-blue group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-tech-gray-900 mb-3">{service.title}</h3>
                  <p className="text-tech-gray-600 mb-6">{service.description}</p>
                  
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                        className="flex items-start"
                      >
                        <div className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-tech-blue flex-shrink-0" />
                      <span className="text-tech-gray-700">{item}</span>
                      </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6"
        >
          <Link to="/ai-chatbots">
            <button className="rounded-md bg-tech-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-tech-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-blue transition-colors duration-300 flex items-center gap-2">
              AI-Chatbots
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
          <Link to="/system-integration">
            <button className="rounded-md bg-tech-blue px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-tech-darkBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-blue transition-colors duration-300 flex items-center gap-2">
              Prozessautomatisierung
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
