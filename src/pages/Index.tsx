
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import UseCases from '@/components/UseCases';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Thümecke Business Intelligence Solutions | Modulare AI-Chatbot Lösungen";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
