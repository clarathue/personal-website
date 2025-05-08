import React from 'react';
import { Database, Bot, ChartLine } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-tech-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-tech-blue flex items-center justify-center">
                  <Bot className="h-16 w-16 text-white" />
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-md">
                <ChartLine className="h-6 w-6 text-tech-blue" />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <Database className="h-6 w-6 text-tech-blue" />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8">
            <motion.h2 
              className="text-3xl font-bold text-tech-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Über mich
            </motion.h2>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-tech-gray-700">
                Ich bin Data Scientist mit Fokus auf KI-gestützte Prozessautomatisierung. Mein Schwerpunkt liegt auf der Entwicklung modularer, wiederverwendbarer AI-Komponenten, die sich schnell in Unternehmensstrukturen integrieren lassen.
              </p>
              
              <p className="text-lg text-tech-gray-700">
                Nach mehreren Jahren im Angestelltenverhältnis habe ich mich selbstständig gemacht, weil ich Unternehmen direkter und unabhängiger unterstützen möchte – mit AI-Lösungen, die nicht nur technisch spannend, sondern wirtschaftlich sinnvoll sind.
              </p>
              
              <p className="text-lg text-tech-gray-700">
                Ich arbeite pragmatisch, lösungsorientiert und eng mit meinen Kunden zusammen. Mein Ziel ist es, schnelle, tragfähige Ergebnisse zu liefern – ohne unnötigen Overhead.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
