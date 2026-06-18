import React from 'react';
import { Database, Bot, ChartLine, Code, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { Title } from '@/components/ui/title';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/work-cafe.jpg"
                alt="Moderner Arbeitsplatz – pragmatische Lösungen direkt am Rechner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <Title as="h2" variant="section" animate={true}>
              Unser Ansatz
            </Title>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
            <p className="text-lg text-tech-gray-700">
              Thümecke Business Intelligence Solutions unterstützt mittelständische Unternehmen und wachsende Organisationen bei der Automatisierung von Geschäftsprozessen und der Integration komplexer Systemlandschaften.
            </p>

            <p className="text-lg text-tech-gray-700">
              Unsere Stärke liegt in der Verbindung von Fachbereichsverständnis mit technischer Umsetzungskompetenz – von der Prozessanalyse über die Systemarchitektur bis zur produktiven Lösung. Moderne Technologien, einschließlich KI, setzen wir dort ein, wo sie echten Mehrwert erzeugen.
            </p>

            <p className="text-lg text-tech-gray-700">
              Wir arbeiten pragmatisch, lösungsorientiert und eng mit unseren Kunden zusammen. Unser Ziel: schnelle, tragfähige Ergebnisse, die im Betrieb bestehen – ohne unnötigen Overhead.
            </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
