import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const mainNavLinks = [
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
          
          <div className="md:col-span-8 flex flex-col items-end">
            <div className="grid grid-cols-3 gap-8">
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
                <div className="flex flex-col space-y-2">
                  {mainNavLinks.map((link) => (
                    <p key={link.to} className="text-tech-gray-300 text-sm">
                      <Link to={link.to} className="hover:text-white whitespace-nowrap">
                        {link.text}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
                <div className="flex flex-col space-y-2">
                  <p className="text-tech-gray-300 text-sm"><Link to="/contact" className="hover:text-white">Kontaktformular</Link></p>
                  <p className="text-tech-gray-300 text-sm"><a href="https://linkedin.com/in/clara-thuemecke" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn Profil</a></p>
                </div>
              </div>
              
              <div className="text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Rechtliches</h3>
                <div className="flex flex-col space-y-2">
                  {legalLinks.map((link) => (
                    <p key={link.to} className="text-tech-gray-300 text-sm">
                      <Link to={link.to} className="hover:text-white whitespace-nowrap">
                        {link.text}
                      </Link>
                    </p>
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
