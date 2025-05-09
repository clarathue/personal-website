import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-tech-gray-900 mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">Allgemeine Hinweise</h3>
            <p className="mb-6">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>

            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">Datenerfassung auf dieser Website</h3>
            
            <h4 className="text-lg font-semibold text-tech-gray-800 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p className="mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h4 className="text-lg font-semibold text-tech-gray-800 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p className="mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben.
            </p>
            <p className="mb-6">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h4 className="text-lg font-semibold text-tech-gray-800 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p className="mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="text-lg font-semibold text-tech-gray-800 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p className="mb-6">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">2. Hosting</h2>
            <p className="mb-6">
              Wir hosten die Inhalte unserer Website bei GitHub Pages. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">Datenschutz</h3>
            <p className="mb-6">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-6">
              Clara Thümecke<br />
              Thümecke Business Intelligence Solutions<br />
              Kazmairstraße 59<br />
              80339 München<br />
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">4. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">Kontaktformular</h3>
            <p className="mb-6">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>

            <h3 className="text-xl font-semibold text-tech-gray-800 mb-3">EmailJS</h3>
            <p className="mb-6">
              Wir nutzen EmailJS für die Verarbeitung von Kontaktformularen. EmailJS ist ein Dienst der EmailJS Inc., 1234 Main St, San Francisco, CA 94107, USA. Die Datenschutzerklärung von EmailJS finden Sie unter:  
              <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-tech-blue hover:text-tech-darkBlue">
                https://www.emailjs.com/legal/privacy-policy/
              </a>
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">5. Soziale Medien</h2>
            <p className="mb-6">
              Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke, um mit den dort aktiven Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.
            </p>

            <h2 className="text-2xl font-semibold text-tech-gray-800 mb-4">6. Änderungen</h2>
            <p className="mb-6">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz; 