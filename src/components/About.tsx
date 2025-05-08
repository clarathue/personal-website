import React from 'react';
import { Database, Bot, ChartLine, Code, Cpu, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/20 via-purple-500/20 to-pink-500/20" />
              
              {/* Glassmorphism container */}
              <div className="absolute inset-0 backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl" />
              
              {/* Network animation container */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Center icon */}
                <motion.div 
                  className="relative z-10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="relative w-40 h-40">
                    <div className="absolute inset-0 bg-gradient-to-br from-tech-blue via-blue-500 to-tech-blue rounded-full blur-xl opacity-50 animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="h-20 w-20 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </motion.div>

                {/* Network nodes */}
                <div className="absolute inset-0">
                  {/* Top node */}
                  <motion.div
                    className="absolute top-[10%] left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, -20, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-tech-blue rounded-xl blur-md opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                        <Code className="h-8 w-8 text-tech-blue drop-shadow-md" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom node */}
                  <motion.div
                    className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2"
                    animate={{ 
                      y: [0, 20, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-tech-blue rounded-xl blur-md opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                        <Database className="h-8 w-8 text-tech-blue drop-shadow-md" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Right node */}
                  <motion.div
                    className="absolute top-1/2 right-[10%] transform -translate-y-1/2"
                    animate={{ 
                      x: [0, 20, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-tech-blue rounded-xl blur-md opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                        <Cpu className="h-8 w-8 text-tech-blue drop-shadow-md" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Left node */}
                  <motion.div
                    className="absolute top-1/2 left-[10%] transform -translate-y-1/2"
                    animate={{ 
                      x: [0, -20, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-tech-blue rounded-xl blur-md opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-white/50">
                        <Network className="h-8 w-8 text-tech-blue drop-shadow-md" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Animated connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    <motion.path
                      d="M 50% 50% L 50% 10%"
                      stroke="url(#gradient1)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <motion.path
                      d="M 50% 50% L 50% 90%"
                      stroke="url(#gradient2)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                    />
                    <motion.path
                      d="M 50% 50% L 90% 50%"
                      stroke="url(#gradient3)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                    />
                    <motion.path
                      d="M 50% 50% L 10% 50%"
                      stroke="url(#gradient4)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
                    />
                    
                    {/* Gradients for connection lines */}
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1EAEDB" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#1EAEDB" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#9333EA" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#9333EA" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </motion.div>
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
