import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Datenschutz = () => {
  return (
    <>
      <Head>
        <title>Datenschutz – AiKMU</title>
        <meta
          name="description"
          content="Datenschutzerklärung der AiKMU. Informationen zur Bearbeitung personenbezogener Daten, Datenschutz, Hosting, Governance und Ihre Rechte."
        />
      </Head>

      <NavBar />

      <main className="legal-wrapper min-h-screen pt-[160px] pb-24">
        <section className="legal-container">
          <h1 className="legal-heading">
            Datenschutzerklärung
          </h1>

          <div className="legal-content">

            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. In dieser Datenschutzerklärung informieren wir Sie
              darüber, welche personenbezogenen Daten wir auf dieser Website
              bearbeiten, zu welchem Zweck dies geschieht und welche Rechte
              Ihnen gemäss dem anwendbaren Datenschutzrecht zustehen.
            </p>

            <div className="legal-section-block">
              <h2>1. Verantwortliche Stelle</h2>
              <p>
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz<br />
                E-Mail:{" "}
                <a href="mailto:info@aikmu.ch" className="legal-link">
                  info@aikmu.ch
                </a>
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Hosting und Server-Logs</h2>
              <p>
                Unsere Website wird bei professionellen Hosting-Dienstleistern
                betrieben. Beim Zugriff auf unsere Website werden automatisch
                technische Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs,
                aufgerufene Seiten, Browsertyp und Betriebssystem gespeichert.
              </p>
              <p>
                Diese Daten sind technisch notwendig, um den sicheren und
                stabilen Betrieb der Website zu gewährleisten.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Kontaktaufnahme und Anfrageformulare</h2>
              <p>
                Wenn Sie uns über ein Formular kontaktieren, erfassen wir die
                von Ihnen gemachten Angaben (z.B. Name, Unternehmen,
                E-Mail-Adresse, Telefonnummer, Nachricht).
              </p>
              <p>
                Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage
                und zur Vorbereitung einer möglichen Geschäftsbeziehung
                verwendet.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. KI-Beratung und projektbezogene Daten</h2>
              <p>
                Im Rahmen von Beratungsprojekten können projektbezogene
                Informationen verarbeitet werden. Dies erfolgt ausschliesslich
                im Auftrag unserer Kundinnen und Kunden.
              </p>
              <p>
                Es werden keine Kundendaten für Trainingszwecke von KI-Modellen
                verwendet, sofern dies nicht ausdrücklich vereinbart wurde.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Cookies</h2>
              <p>
                Es werden lediglich technisch notwendige Cookies eingesetzt,
                um die Funktionalität der Website sicherzustellen.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung oder Löschung
                Ihrer personenbezogenen Daten.
              </p>
              <p>
                Kontaktieren Sie uns unter{" "}
                <a href="mailto:info@aikmu.ch" className="legal-link">
                  info@aikmu.ch
                </a>.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
                anzupassen. Es gilt jeweils die aktuelle Version auf dieser Website.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Datenschutz;
