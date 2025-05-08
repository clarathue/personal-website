
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tech-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png" 
                alt="Thümecke Business Intelligence Solutions" 
                className="h-12 w-auto brightness-200 contrast-200"
              />
            </div>
            <p className="text-tech-gray-300 text-sm">
              Modulare AI-Chatbots für datengetriebene Unternehmen. Maßgeschneidert, effizient und mit messbarem Mehrwert.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-tech-gray-300 hover:text-white text-sm">Home</a></li>
              <li><a href="#about" className="text-tech-gray-300 hover:text-white text-sm">Über mich</a></li>
              <li><a href="#services" className="text-tech-gray-300 hover:text-white text-sm">Leistungen</a></li>
              <li><a href="#usecases" className="text-tech-gray-300 hover:text-white text-sm">Anwendungsfälle</a></li>
              <li><a href="#contact" className="text-tech-gray-300 hover:text-white text-sm">Kontakt</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-tech-gray-300 text-sm">clara@thuemecke.net</p>
            <p className="text-tech-gray-300 text-sm mt-2">
              <a href="https://linkedin.com/in/clara-thuemecke" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn Profil
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-tech-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray-400 text-sm">
            © {currentYear} Thümecke Business Intelligence Solutions. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-tech-gray-400 hover:text-white text-sm">Impressum</a>
            <a href="#" className="text-tech-gray-400 hover:text-white text-sm">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
