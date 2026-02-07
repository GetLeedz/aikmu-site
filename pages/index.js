import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
<Head>
  {/* ================= BASIC SEO ================= */}
  <title>AiKMU – Corporate-konforme KI für Schweizer KMUs</title>
  <meta
    name="description"
    content="AiKMU begleitet Schweizer KMUs bei der professionellen Einführung von Künstlicher Intelligenz – sicher, Corporate-konform und kontrollierbar."
  />
  <link rel="icon" href="/favicon.ico" />

  {/* ================= OPEN GRAPH ================= */}
  <meta
    property="og:title"
    content="AiKMU macht Ihre KMU mit verantwortungsvoller KI zukunftsfähig"
  />
  <meta
    property="og:description"
    content="Corporate-konforme KI-Projekte für Schweizer KMUs – inklusive Datenschutz, klarer Governance und voller Kontrolle."
  />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="de_CH" />
  <meta property="og:url" content="https://www.aikmu.ch/" />
  <meta property="og:site_name" content="AiKMU" />
  <meta
    property="og:image"
    content="https://www.aikmu.ch/images/og-aikmu.png"
  />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* ================= TWITTER / X ================= */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="AiKMU – Corporate-konforme KI für Schweizer KMUs"
  />
  <meta
    name="twitter:description"
    content="Verantwortungsvolle KI-Implementierung für Schweizer KMUs. Beratung und Umsetzung aus einer Hand."
  />
  <meta
    name="twitter:image"
    content="https://www.aikmu.ch/images/og-aikmu.png"
  />

  {/* ================= SCHEMA.ORG – ORGANIZATION ================= */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "AiKMU",
        "url": "https://www.aikmu.ch",
        "email": "info@aikmu.ch",
        "telephone": "+41 61 525 18 10",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Walter Fürststr. 1",
          "postalCode": "4102",
          "addressLocality": "Binningen",
          "addressCountry": "CH"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Schweiz"
        }
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
        "name": "AiKMU",
        "url": "https://www.aikmu.ch",
        "inLanguage": "de-CH",
        "publisher": {
          "@type": "Organization",
          "name": "AiKMU"
        }
      })
    }}
  />

  {/* ================= SCHEMA.ORG – LOCAL BUSINESS ================= */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AiKMU",
        "url": "https://www.aikmu.ch",
        "email": "info@aikmu.ch",
        "telephone": "+41 61 525 18 10",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Walter Fürststr. 1",
          "postalCode": "4102",
          "addressLocality": "Binningen",
          "addressCountry": "CH"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Schweiz"
        }
      })
    }}
  />
</Head>


    <main>
      <Header />
      <Footer />
    </main>
  </div>
);

export default Home;
