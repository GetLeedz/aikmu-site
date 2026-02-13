import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum – AiKMU</title>
        <meta
          name="description"
          content="Impressum der AiKMU – rechtliche Angaben, Handelsregister, MWST, Kontaktinformationen und Haftungshinweise."
        />
      </Head>

      <main className="min-h-screen bg-transparent text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-20 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Impressum
          </h1>

          <div className="space-y-12 text-white/90 leading-relaxed">

            {/* Verantwortlich */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Verantwortlich für den Inhalt dieser Website
              </h2>
              <p>
                <strong>AiKMU</strong><br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz
              </p>
            </div>

            {/* Kontakt */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Kontakt
              </h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@aikmu.ch" className="neon-link">
                  info@aikmu.ch
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+41615251810" className="neon-link">
                  +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.aikmu.ch"
                  target="_blank"
                  rel="noreferrer"
                  className="neon-link"
                >
                  www.aikmu.ch
                </a>
              </p>
            </div>

            {/* Unternehmensdaten */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Unternehmensdaten
              </h2>
              <p>
                <strong>Gesellschaft:</strong> GetLeedz GmbH<br />
                <strong>Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH)<br />
                <strong>Handelsregister:</strong> Kanton Basel-Landschaft<br />
                <strong>Handelsregister-Nummer:</strong> CHE-339.044.174<br />
                <strong>MWST-Nummer:</strong> CHE-339.044.174
              </p>
            </div>

            {/* Bankverbindung */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Bankverbindung
              </h2>
              <p>
                Bank Cler AG<br />
                Aeschenplatz 3<br />
                4052 Basel, Schweiz<br /><br />
                <strong>BIC / SWIFT:</strong> BCLRCHBBXXX<br />
                <strong>IBAN:</strong> CH60&nbsp;0844&nbsp;0258&nbsp;4872&nbsp;6200&nbsp;1
              </p>
            </div>

            {/* Haftung */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Haftungsausschluss
              </h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen
                wir jedoch keine Gewähr. Haftungsansprüche sind – soweit gesetzlich
                zulässig – ausgeschlossen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4 text-white">
                Urheberrechte
              </h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem
                schweizerischen Urheberrecht. Eine Vervielfältigung oder
                Bearbeitung ausserhalb der gesetzlichen Grenzen bedarf der
                vorherigen schriftlichen Zustimmung des jeweiligen Rechteinhabers.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Impressum;
