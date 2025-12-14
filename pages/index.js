import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => (
  <div>
    <Head>
      {/* Basic SEO */}
      <title>GetLeedz · More Leads für Schweizer KMUs</title>
      <meta
        name="description"
        content="GetLeedz ist deine Schweizer Agentur für Leadgenerierung: starke Creatives und Performance-Kampagnen auf Meta, LinkedIn & Google für mehr qualifizierte Anfragen."
      />

      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph */}
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

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GetLeedz · More Leads für Schweizer KMUs" />
      <meta
        name="twitter:description"
        content="GetLeedz entwickelt für dein KMU starke Creatives & Kampagnen auf Meta, LinkedIn & Google – für mehr qualifizierte Leads."
      />
      <meta name="twitter:image" content="https://www.getleedz.com/og-getleedz.jpg" />
    </Head>

    <main>
      {/* Hero + Header */}
      <Header />

      {/* Footer */}
      <Footer />
    </main>
  </div>
);

export default Home;
