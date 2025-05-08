import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-tech-gray-900 mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-6">
              Clara Thümecke<br />
              Thümecke Business Intelligence Solutions<br />
              Kazmairstraße 59<br />
              80339 München
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Kontakt</h2>
            <p className="mb-6">
              E-Mail: clara@thuemecke.net
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-6">
              Clara Thümecke<br />
              Kazmairstraße 59<br />
              80339 München
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Streitschlichtung</h2>
            <p className="mb-6">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" className="text-tech-blue hover:text-tech-darkBlue">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br /><br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
              <br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Haftung für Inhalte</h2>
            <p className="mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">Haftung für Links</h2>
            <p className="mb-6">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum; 