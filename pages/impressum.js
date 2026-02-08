import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Impressum = () => {
  return (
    <div>
      <Head>
        <title>Impressum – AiKMU</title>
        <meta
          name="description"
          content="Impressum und rechtliche Angaben der AiKMU. Kontaktinformationen, Handelsregister, MWST, Bankverbindung und rechtliche Hinweise."
        />
      </Head>

      <main className="min-h-screen bg-transparent text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-16 max-w-3xl">
          <h1 className="heading-2 mb-8">Impressum</h1>

          <div className="space-y-8 text-base text-white leading-relaxed">

            {/* Verantwortlich */}
            <div>
              <h2 className="font-semibold mb-2">
                Verantwortlich für den Inhalt dieser Website
              </h2>
              <p>
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz
              </p>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="font-semibold mb-2">Kontakt</h2>
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
                Web:{" "}
                <a
                  href="https://www.aikmu.ch"
                  className="neon-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.aikmu.ch
                </a>
              </p>
            </div>

            {/* Unternehmensform */}
            <div>
              <h2 className="font-semibold mb-2">Unternehmensform</h2>
              <p>
                GetLeedz GmbH<br />
                Gesellschaft mit beschränkter Haftung (GmbH) nach Schweizer Recht.
              </p>
            </div>

            {/* Handelsregister */}
            <div>
              <h2 className="font-semibold mb-2">Handelsregistereintrag</h2>
              <p>
                Eingetragen im Handelsregister des Kantons Basel-Landschaft<br />
                Handelsregister-Nummer: CHE-339.044.174
              </p>
            </div>

            {/* MWST */}
            <div>
              <h2 className="font-semibold mb-2">Mehrwertsteuer (MWST)</h2>
              <p>
                MWST-Nummer: CHE-339.044.174
              </p>
            </div>

            {/* Bankverbindung */}
            <div>
              <h2 className="font-semibold mb-2">Bankverbindung</h2>
              <p>
                Bank Cler AG<br />
                Aeschenplatz 3<br />
                4052 Basel, Schweiz<br />
                BIC / SWIFT: BCLRCHBBXXX<br />
                IBAN: CH60&nbsp;0844&nbsp;0258&nbsp;4872&nbsp;6200&nbsp;1
              </p>
            </div>

            {/* Haftung */}
            <div>
              <h2 className="font-semibold mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                übernehmen wir jedoch keine Gewähr. Haftungsansprüche gegen den
                Betreiber wegen Schäden materieller oder immaterieller Art sind
                ausgeschlossen, soweit dies gesetzlich zulässig ist.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="font-semibold mb-2">Urheberrechte</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem
                schweizerischen Urheberrecht. Beiträge Dritter sind als solche
                gekennzeichnet. Die Vervielfältigung, Bearbeitung oder Verbreitung
                ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen
                schriftlichen Zustimmung des jeweiligen Rechteinhabers.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Impressum;
