import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
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
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, 30); // Geschwindigkeit der Animation

    return () => clearTimeout(timeout);
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

const Hero: React.FC = () => {
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

  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-tech-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Modulare AI-Lösungen für datengetriebene Unternehmen
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl text-tech-gray-700 max-w-2xl mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Ich entwickle skalierbare, projektbasierte AI-Chatbots für Business Intelligence, Marktanalyse und Lieferantenmanagement – maßgeschneidert, effizient und mit messbarem Mehrwert.
            </motion.p>
            
            {/* Floating tags above the button */}
            <div className="flex flex-wrap gap-2 mt-8">
              <span className="px-2 py-1 bg-tech-blue text-white rounded text-xs animate-pulse">API</span>
              <span className="px-2 py-1 bg-tech-gray-700 text-white rounded text-xs animate-pulse">SQL</span>
              <span className="px-2 py-1 bg-emerald-600 text-white rounded text-xs animate-pulse">Data</span>
              <span className="px-2 py-1 bg-purple-600 text-white rounded text-xs animate-pulse">NLP</span>
              <span className="px-2 py-1 bg-amber-500 text-white rounded text-xs animate-pulse">LLM</span>
              <span className="px-2 py-1 bg-red-500 text-white rounded text-xs animate-pulse">Analytics</span>
            </div>
            
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
          
          <div className="lg:col-span-5 flex items-start pt-24">
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
                    
                    <motion.div 
                      className="bg-tech-blue/10 p-3 rounded-lg text-tech-gray-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <p className="text-tech-blue font-medium mb-2">AI-Chatbot Antwort:</p>
                      <motion.div 
                        className="bg-white p-3 rounded-lg border border-gray-200 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <div className="h-32">
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
                      </motion.div>
                      <p className="mb-4">
                        <StreamingText 
                          text="Der Umsatz in Region Nord zeigt eine dynamische Entwicklung: Nach einem starken Q2 (2.5M €) gab es im Q3 einen Rückgang auf 2.2M €. Im aktuellen Q4 liegt der Umsatz bei 2.4M €, was einem Wachstum von 9% zum Vorjahresquartal entspricht. Die Produktlinie A zeigt besonders im Q2 (+20%) und Q4 (+15%) starke Wachstumsimpulse."
                          delay={1500}
                        />
                      </p>
                    </motion.div>
                  </div>
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
