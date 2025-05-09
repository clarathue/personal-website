import React from 'react';
import { Database, Bot, ChartLine, Code, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-tech-blue/20 via-purple-500/20 to-pink-500/20">
              <div className="absolute inset-0 backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl" />
              <img
                src="/images/Foto_Clara Thümecke.png"
                alt="Clara Thümecke"
                className="w-full h-full object-cover"
                style={{ position: 'relative', zIndex: 1 }}
              />
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
