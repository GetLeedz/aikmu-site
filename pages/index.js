import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <Head>
      {/* ================= BASIC SEO ================= */}
      <title>GetLeedz · More Leads für Schweizer KMUs</title>
      <meta
        name="description"
        content="GetLeedz ist eine Schweizer Agentur für Leadgenerierung. Wir entwickeln starke Creatives und Performance-Kampagnen auf Meta, LinkedIn und Google für messbar neue Anfragen."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* ================= OPEN GRAPH ================= */}
      <meta property="og:title" content="GetLeedz · More Leads für Schweizer KMUs" />
      <meta
        property="og:description"
        content="Leadgenerierung, die neue Anfragen bringt – mit starken Creatives und Performance-Kampagnen für Schweizer KMUs."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.getleedz.com/" />
      <meta property="og:image" content="https://www.getleedz.com/og-getleedz.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="GetLeedz" />

      {/* ================= TWITTER ================= */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GetLeedz · More Leads für Schweizer KMUs" />
      <meta
        name="twitter:description"
        content="GetLeedz entwickelt für Schweizer KMUs starke Creatives und Performance-Kampagnen auf Meta, LinkedIn & Google – mit Fokus auf messbare Anfragen."
      />
      <meta name="twitter:image" content="https://www.getleedz.com/og-getleedz.jpg" />

      {/* ================= SCHEMA.ORG – ORGANIZATION ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "GetLeedz GmbH",
            "url": "https://www.getleedz.com",
            "logo": "https://www.getleedz.com/images/getleedz-logo.png",
            "image": "https://www.getleedz.com/og-getleedz.jpg",
            "description":
              "GetLeedz ist eine Schweizer Agentur für Leadgenerierung. Das Unternehmen entwickelt starke Creatives, Performance-Kampagnen und Lead-Systeme für messbar neue Anfragen.",
            "areaServed": {
              "@type": "Country",
              "name": "Schweiz"
            },
            "sameAs": [
              "https://www.linkedin.com/company/getleedz/",
              "https://www.facebook.com/getleedz",
              "https://www.instagram.com/getleedz"
            ]
          })
        }}
      />

      {/* ================= SCHEMA.ORG – WEBSITE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GetLeedz",
            "url": "https://www.getleedz.com",
            "inLanguage": "de-CH",
            "publisher": {
              "@type": "Organization",
              "name": "GetLeedz GmbH"
            }
          })
        }}
      />

      {/* ================= SCHEMA.ORG – LOCAL BUSINESS + SERVICE ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "GetLeedz GmbH",
            "url": "https://www.getleedz.com",
            "telephone": "+41 61 525 18 10",
            "image": "https://www.getleedz.com/og-getleedz.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Binningen",
              "postalCode": "4102",
              "addressCountry": "CH"
            },
            "areaServed": {
              "@type": "Country",
              "name": "Schweiz"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Leadgenerierung für Schweizer KMUs",
                "serviceType": "Performance-Marketing & Leadgenerierung",
                "description":
                  "Strategische Leadgenerierung für Schweizer KMUs mit starken Creatives, Performance-Kampagnen, Funnels, KI-gestützter Lead-Qualifizierung und optionalen Schulungen."
              }
            }
          })
        }}
      />

      {/* ================= SCHEMA.ORG – FAQ ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Was ist Leadgenerierung?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Leadgenerierung ist der gezielte Prozess, potenzielle Kundinnen und Kunden über digitale Kanäle wie Meta, LinkedIn oder Google zu gewinnen und als qualifizierte Anfragen an den Vertrieb zu übergeben."
                }
              },
              {
                "@type": "Question",
                "name": "Was unterscheidet GetLeedz von klassischen Lead-Agenturen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "GetLeedz fokussiert sich auf Lead-Qualität statt Lead-Menge. Ziel sind messbare Anfragen und vertriebsrelevante Gespräche – nicht Klicks oder billige Leads."
                }
              },
              {
                "@type": "Question",
                "name": "Was sind Gold Leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Gold Leads sind abschlussbereite Kontakte mit klarem Bedarf, Budget und Entscheidungsreife. Sie werden durch KI-gestützte Systeme und Funnel-Logik vorqualifiziert."
                }
              },
              {
                "@type": "Question",
                "name": "Sind die Creatives von GetLeedz vorgefertigte Templates?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Nein. Alle Creatives entstehen individuell in Zusammenarbeit mit einer erfahrenen Marketing-Community und sind stets aktuell – nichts von der Stange."
                }
              },
              {
                "@type": "Question",
                "name": "Bietet GetLeedz auch komplette Systeme und Schulungen an?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Ja. GetLeedz entwickelt komplette Lead- und Funnel-Systeme und bietet Schulungen für Marketing- und Vertriebsteams an."
                }
              }
            ]
          })
        }}
      />
    </Head>

    <main>
      {/* Hero / Header */}
      <Header />

      {/* Footer */}
      <Footer />
    </main>
  </div>
);

export default Home;
