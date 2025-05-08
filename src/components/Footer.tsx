import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-tech-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Thümecke Business Intelligence Solutions</h3>
            <p className="text-gray-400">
              Modulare AI-Lösungen für datengetriebene Unternehmen
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              E-Mail: clara@thuemecke.net
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Thümecke Business Intelligence Solutions. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
