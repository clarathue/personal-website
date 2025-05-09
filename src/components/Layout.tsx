import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Thümecke Business Intelligence Solutions | Modulare AI-Chatbot Lösungen",
  description = "Professionelle Business Intelligence Lösungen mit Fokus auf AI-Chatbots und Systemintegration. Optimieren Sie Ihre Geschäftsprozesse mit maßgeschneiderten KI-Lösungen.",
  keywords = "Business Intelligence, AI-Chatbots, Systemintegration, KI-Lösungen, Automatisierung, Prozessoptimierung"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thümecke Business Intelligence Solutions",
    "url": "https://thuemecke.net",
    "logo": "https://thuemecke.net/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png",
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kazmairstraße 59",
      "addressLocality": "München",
      "postalCode": "80339",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "clara@thuemecke.net"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thuemecke.net" />
        <meta property="og:image" content="https://thuemecke.net/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://thuemecke.net/lovable-uploads/46f348e0-9fb0-45e9-8ca3-2de393953867.png" />
        <link rel="canonical" href="https://thuemecke.net" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 