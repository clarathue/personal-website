import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Thümecke Business Intelligence Solutions | Prozessautomatisierung & Systemintegration",
  description = "Prozessautomatisierung und Systemintegration für den Mittelstand – von HR und Recruiting bis Einkauf und Finance. Pragmatisch umgesetzt, messbar wirksam.",
  keywords = "Prozessautomatisierung, Systemintegration, Business Intelligence, HR-Automatisierung, Recruiting-Automatisierung, KI-Lösungen, Mittelstand",
  canonicalUrl = "https://thuemecke.net",
  ogImage = "https://thuemecke.net/favicon.png",
  ogType = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Thümecke Business Intelligence Solutions",
    "url": canonicalUrl,
    "logo": ogImage,
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
    },
    "sameAs": [
      "https://github.com/clarathue"
    ]
  };

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Clara Thümecke" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="München" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={ogType} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Thümecke Business Intelligence Solutions" />
        <meta property="og:locale" content="de_DE" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Structured Data */}
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