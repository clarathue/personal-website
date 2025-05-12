import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const mainNavLinks = [
    { to: '/', text: 'Startseite' },
    { to: '/ai-chatbots', text: 'AI-Chatbots' },
    { to: '/system-integration', text: 'Prozessautomatisierung' }
  ];

  const legalLinks = [
    { to: '/impressum', text: 'Impressum' },
    { to: '/datenschutz', text: 'Datenschutz' }
  ];

  return (
    <footer className="bg-tech-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="mb-4">
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img 
                  src="/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png" 
                  alt="Thümecke Business Intelligence Solutions Logo - Modulare AI-Chatbot Lösungen" 
                  className="h-12 w-auto brightness-200 contrast-200"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="text-tech-gray-300 text-sm">
              Modulare AI-Chatbots für datengetriebene Unternehmen. Maßgeschneidert, effizient und mit messbarem Mehrwert.
            </p>
          </div>
          
          <div className="md:col-span-8 flex flex-col items-end">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                <div className="flex flex-col space-y-2">
                  {mainNavLinks.map((link) => (
                    <button 
                      key={link.to} 
                      onClick={() => handleNavigation(link.to)}
                      className="text-tech-gray-300 text-right text-sm hover:text-white whitespace-nowrap cursor-pointer"
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => handleNavigation('/contact')}
                    className="text-tech-gray-300 text-right text-sm hover:text-white cursor-pointer"
                  >
                    Kontaktformular
                  </button>
                  <a 
                    href="https://linkedin.com/in/clara-thuemecke" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-tech-gray-300 text-right text-sm hover:text-white"
                  >
                    LinkedIn Profil
                  </a>
                </div>
              </div>
              
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Rechtliches</h3>
                <div className="flex flex-col space-y-2">
                  {legalLinks.map((link) => (
                    <button 
                      key={link.to} 
                      onClick={() => handleNavigation(link.to)}
                      className="text-tech-gray-300 text-right text-sm hover:text-white whitespace-nowrap cursor-pointer"
                    >
                      {link.text}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="border-t border-tech-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-tech-gray-400 text-sm">
            © {new Date().getFullYear()} Thümecke Business Intelligence Solutions. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
