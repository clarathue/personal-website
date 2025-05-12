// @ts-ignore
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Title } from '@/components/ui/title';

const Datenschutz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title as="h1" variant="page" animate={true}>
            Datenschutzerklärung
          </Title>
          
          <div className="prose prose-lg max-w-none">            
          <p className="mb-6"> </p>
            <Title as="h2" animate={true}>
              Datenerfassung auf dieser Website
            </Title>
          
            <Title as="h5" variant="subsection" animate={true}>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </Title>
            <p className="mb-6">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Wie werden Ihre Daten erfasst?
            </Title>
            <p className="mb-6">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in unser Kontaktformular eingeben.
            </p>
            <p className="mb-6">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Wofür werden Ihre Daten verwendet?
            </Title>
            <p className="mb-6">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </Title>
            <p className="mb-6">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
            </p>

            <Title as="h2" variant="section" animate={true}>
              Hosting
            </Title>
            <p className="mb-6">
              Die Inhalte meiner Website werden bei GitHub Pages gehostet. Anbieter ist die GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA.
            </p>

            <Title as="h2" variant="section" animate={true}>
              Allgemeine Hinweise und Pflichtinformationen
            </Title>
            
            <Title as="h5" variant="subsection" animate={true}>
              Datenschutz
            </Title>
            <p className="mb-6">
              Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              Hinweis zur verantwortlichen Stelle
            </Title>
            <p className="mb-6">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="mb-6">
              Clara Thümecke<br />
              Thümecke Business Intelligence Solutions<br />
              Kazmairstraße 59<br />
              80339 München<br />
            </p>

            <Title as="h2" variant="section" animate={true}>
              Datenerfassung auf dieser Website
            </Title>
            
            <Title as="h5" variant="subsection" animate={true}>
              Kontaktformular
            </Title>
            <p className="mb-6">
              Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
            </p>

            <Title as="h5" variant="subsection" animate={true}>
              EmailJS
            </Title>
            <p className="mb-6">
              Ich nutze EmailJS für die Verarbeitung von Kontaktformularen. EmailJS ist ein Dienst der EmailJS Inc., 1234 Main St, San Francisco, CA 94107, USA. Die Datenschutzerklärung von EmailJS findest du unter:  
              <a href="https://www.emailjs.com/legal/privacy-policy/" className="text-tech-blue hover:text-tech-darkBlue">
                https://www.emailjs.com/legal/privacy-policy/
              </a>
            </p>

            <Title as="h2" variant="section" animate={true}>
              Soziale Medien
            </Title>
            <p className="mb-6">
              Ich unterhalte Onlinepräsenzen innerhalb sozialer Netzwerke, um mit den dort aktiven Interessenten und Nutzern kommunizieren und sie dort über meine Leistungen informieren zu können.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz; 