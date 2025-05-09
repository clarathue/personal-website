import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import UseCases from '@/components/UseCases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Thümecke Business Intelligence Solutions | Modulare AI-Chatbot Lösungen";
  }, []);

  return (
    <Layout
      title="Thümecke Business Intelligence Solutions | Modulare AI-Chatbot Lösungen"
      description="Professionelle Business Intelligence Lösungen mit Fokus auf AI-Chatbots und Systemintegration. Optimieren Sie Ihre Geschäftsprozesse mit maßgeschneiderten KI-Lösungen."
      keywords="Business Intelligence, AI-Chatbots, Systemintegration, KI-Lösungen, Automatisierung, Prozessoptimierung"
    >
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <UseCases />
        <div className="py-12 bg-gradient-to-br from-tech-blue/5 to-white">
          <div className="section-container text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-tech-gray-900 mb-4">
              Kontakt aufnehmen
            </h2>
            <p className="text-lg text-tech-gray-700 mb-6 max-w-2xl mx-auto">
              Sie haben Fragen oder möchten ein Projekt besprechen? Ich freue mich auf Ihre Nachricht!
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-tech-blue text-white text-lg font-semibold rounded-xl shadow hover:bg-tech-darkBlue transition-colors"
            >
              Zum Kontaktformular
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default Index;
