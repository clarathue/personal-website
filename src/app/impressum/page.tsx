import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Title } from '@/components/ui/title';

const Impressum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title as="h1" variant="page" animate={true}>
            Impressum
          </Title>
          <p className="mb-6"> </p>

          <div className="prose prose-lg max-w-none">
            <Title as="h3" variant="subsection" animate={true}>
              Angaben gemäß § 5 TMG
            </Title>
            <p className="mb-6">
              Clara Thümecke<br />
              Thümecke Business Intelligence Solutions<br />
              Kazmairstraße 59<br />
              80339 München
            </p>

            <Title as="h3" variant="subsection" animate={true}>
              Kontakt
            </Title>
            <p className="mb-6">
              E-Mail: clara@thuemecke.net
            </p>

            <Title as="h3" variant="subsection" animate={true}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </Title>
            <p className="mb-6">
              Clara Thümecke<br />
              Kazmairstraße 59<br />
              80339 München
            </p>

            <Title as="h3" variant="subsection" animate={true}>
              Streitschlichtung
            </Title>
            <p className="mb-6">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <Title as="h3" variant="subsection" animate={true}>
              Haftung für Inhalte
            </Title>
            <p className="mb-6">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <Title as="h3" variant="subsection" animate={true}>
              Haftung für Links
            </Title>
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