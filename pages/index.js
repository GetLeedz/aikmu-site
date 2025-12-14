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
            "name": "GetLeedz",
            "url": "https://www.getleedz.com",
            "logo": "https://www.getleedz.com/images/getleedz-logo.png",
            "description":
              "GetLeedz ist eine Schweizer Agentur für Leadgenerierung für KMUs. Das Unternehmen entwickelt Performance-Kampagnen auf Meta, LinkedIn und Google mit Fokus auf starke Creatives und messbar neue Anfragen.",
            "areaServed": {
              "@type": "Country",
              "name": "Schweiz"
            }
          }),
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
              "name": "GetLeedz"
            }
          }),
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
                    "Leadgenerierung bezeichnet den gezielten Prozess, potenzielle Kundinnen und Kunden über digitale Kanäle wie Meta, LinkedIn oder Google zu gewinnen und als qualifizierte Anfragen an Unternehmen weiterzugeben."
                }
              },
              {
                "@type": "Question",
                "name": "Wie funktioniert Leadgenerierung für Schweizer KMUs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "Für Schweizer KMUs funktioniert Leadgenerierung am besten über Performance-Kampagnen mit klar definierten Zielgruppen, lokalem Bezug und messbaren Anfragen."
                }
              },
              {
                "@type": "Question",
                "name": "Über welche Kanäle generiert GetLeedz Leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "GetLeedz nutzt Meta Ads (Facebook und Instagram), LinkedIn Ads und Google Ads, abhängig von Zielgruppe und Angebot des jeweiligen Unternehmens."
                }
              },
              {
                "@type": "Question",
                "name": "Für welche Unternehmen ist GetLeedz geeignet?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text":
                    "GetLeedz arbeitet mit Schweizer KMUs aus Dienstleistung, Beratung, Gastronomie, Fitness, Immobilien und B2B-Bereichen, die planbar neue Kunden gewinnen möchten."
                }
              }
            ]
          }),
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
