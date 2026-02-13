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

      <NavBar />

      <main className="legal-wrapper min-h-screen pt-[160px] pb-24">
        <section className="legal-container">

          <h1 className="legal-heading">
            Impressum
          </h1>

          <div className="legal-content">

            <div className="legal-section-block">
              <h2>Verantwortlich für den Inhalt dieser Website</h2>
              <p>
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@aikmu.ch" className="legal-link">
                  info@aikmu.ch
                </a>
                <br />
                Telefon:{" "}
                <a href="tel:+41615251810" className="legal-link">
                  +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
                </a>
                <br />
                Website:{" "}
                <a
                  href="https://www.aikmu.ch"
                  target="_blank"
                  rel="noreferrer"
                  className="legal-link"
                >
                  www.aikmu.ch
                </a>
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Unternehmensform</h2>
              <p>
                GetLeedz GmbH<br />
                Gesellschaft mit beschränkter Haftung (GmbH) nach Schweizer Recht.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Handelsregister</h2>
              <p>
                Eingetragen im Handelsregister des Kantons Basel-Landschaft<br />
                Handelsregister-Nummer: CHE-339.044.174
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Mehrwertsteuer (MWST)</h2>
              <p>
                MWST-Nummer: CHE-339.044.174
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Bankverbindung</h2>
              <p>
                Bank Cler AG<br />
                Aeschenplatz 3<br />
                4052 Basel, Schweiz<br /><br />
                BIC / SWIFT: BCLRCHBBXXX<br />
                IBAN: CH60&nbsp;0844&nbsp;0258&nbsp;4872&nbsp;6200&nbsp;1
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen
                wir jedoch keine Gewähr, soweit gesetzlich zulässig.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>Urheberrechte</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem
                schweizerischen Urheberrecht. Jede Verwendung ausserhalb der
                gesetzlichen Grenzen bedarf der schriftlichen Zustimmung des
                jeweiligen Rechteinhabers.
              </p>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
};

export default Impressum;
