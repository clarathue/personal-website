
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="mb-6">
              <motion.img 
                src="/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png" 
                alt="Thümecke Business Intelligence Solutions" 
                className="h-16 sm:h-20 w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-tech-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Modulare AI-Lösungen für datengetriebene Unternehmen
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-tech-gray-700 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Ich entwickle skalierbare, projektbasierte AI-Chatbots für Business Intelligence, Marktanalyse und Lieferantenmanagement – maßgeschneidert, effizient und mit messbarem Mehrwert.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <a href="#contact">
                <Button size="lg" className="bg-tech-blue hover:bg-tech-darkBlue text-white">
                  Projekt besprechen
                </Button>
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5">
            <motion.div
              className="relative h-[400px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(30,174,219,0.1)_0%,rgba(255,255,255,0)_100%)]" />
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="text-xs text-tech-gray-400">AI-Chatbot</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-tech-gray-100 p-3 rounded-lg text-tech-gray-800">
                      Wie entwickelt sich der Umsatz in Region Nord im Vergleich zum Vorjahr?
                    </div>
                    
                    <div className="bg-tech-blue/10 p-3 rounded-lg text-tech-gray-800">
                      <p className="text-tech-blue font-medium mb-2">AI-Chatbot Antwort:</p>
                      <p>Der Umsatz in Region Nord liegt im aktuellen Quartal bei €2,4M, das entspricht einem Wachstum von 12% zum Vorjahreszeitraum. Haupttreiber sind die Produktlinien A (+18%) und C (+15%).</p>
                      <div className="mt-2 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                        <span className="text-tech-gray-500 text-sm">[Visualisierung: Umsatzentwicklung]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Top-right floating tags with better positioning and z-index */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="px-2 py-1 bg-tech-blue text-white rounded text-xs animate-pulse">API</span>
                  <span className="px-2 py-1 bg-tech-gray-700 text-white rounded text-xs animate-pulse">SQL</span>
                  <span className="px-2 py-1 bg-emerald-600 text-white rounded text-xs animate-pulse">Data</span>
                </div>
              </div>
              
              {/* Bottom-left floating tags with better positioning and z-index */}
              <div className="absolute bottom-4 left-4 z-10">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-purple-600 text-white rounded text-xs animate-pulse">NLP</span>
                  <span className="px-2 py-1 bg-amber-500 text-white rounded text-xs animate-pulse">LLM</span>
                  <span className="px-2 py-1 bg-red-500 text-white rounded text-xs animate-pulse">Analytics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
