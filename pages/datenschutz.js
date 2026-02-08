import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Datenschutz = () => {
  return (
    <div>
      <Head>
        <title>Datenschutz – AiKMU</title>
        <meta
          name="description"
          content="Datenschutzerklärung der AiKMU. Informationen zur Bearbeitung personenbezogener Daten, Datenschutz, Hosting, Governance und Ihre Rechte."
        />
      </Head>

      <main className="min-h-screen bg-transparent text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-16 max-w-3xl">
          <h1 className="heading-2 mb-8">Datenschutzerklärung</h1>

          <div className="space-y-8 text-base text-white leading-relaxed">

            {/* Einleitung */}
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. In dieser Datenschutzerklärung informieren wir Sie
              darüber, welche personenbezogenen Daten wir auf dieser Website
              bearbeiten, zu welchem Zweck dies geschieht und welche Rechte
              Ihnen gemäss dem anwendbaren Datenschutzrecht zustehen.
            </p>

            {/* Verantwortliche Stelle */}
            <div>
              <h2 className="font-semibold mb-2">1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenbearbeitung auf dieser Website ist:
                <br />
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz<br />
                E-Mail:{" "}
                <a href="mailto:info@aikmu.ch" className="neon-link">
                  info@aikmu.ch
                </a>
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="font-semibold mb-2">2. Hosting und Server-Logs</h2>
              <p>
                Unsere Website wird bei professionellen Hosting-Dienstleistern
                betrieben. Beim Zugriff auf unsere Website werden automatisch
                technische Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs,
                aufgerufene Seiten, Browsertyp und Betriebssystem in sogenannten
                Server-Logfiles gespeichert.
              </p>
              <p className="mt-2">
                Diese Daten sind technisch notwendig, um den sicheren und
                stabilen Betrieb der Website zu gewährleisten. Eine
                personenbezogene Auswertung oder Zusammenführung mit anderen
                Daten erfolgt nicht.
              </p>
            </div>

            {/* Kontaktformulare */}
            <div>
              <h2 className="font-semibold mb-2">
                3. Kontaktaufnahme und Anfrageformulare
              </h2>
              <p>
                Wenn Sie uns über ein Kontakt- oder Anfrageformular
                kontaktieren, erfassen wir die von Ihnen gemachten Angaben
                (z.&nbsp;B. Name, Unternehmen, E-Mail-Adresse,
                Telefonnummer, Nachricht).
              </p>
              <p className="mt-2">
                Diese Daten werden ausschliesslich zur Bearbeitung Ihrer
                Anfrage, zur Kontaktaufnahme sowie zur Vorbereitung und
                Durchführung einer möglichen Geschäftsbeziehung verwendet.
                Eine Weitergabe an Dritte erfolgt nur, soweit dies zur
                Erfüllung des jeweiligen Zwecks erforderlich ist oder eine
                gesetzliche Verpflichtung besteht.
              </p>
            </div>

            {/* KI / Beratung */}
            <div>
              <h2 className="font-semibold mb-2">
                4. KI-Beratung und projektbezogene Daten
              </h2>
              <p>
                Im Rahmen von Beratungs- und Umsetzungsprojekten im Bereich
                Künstliche Intelligenz können projektbezogene Informationen
                verarbeitet werden. Dies erfolgt ausschliesslich im Auftrag
                und nach Weisung unserer Kundinnen und Kunden sowie unter
                Beachtung vertraglicher, organisatorischer und technischer
                Schutzmassnahmen.
              </p>
              <p className="mt-2">
                Es werden keine Kundendaten für Trainingszwecke von KI-Modellen
                verwendet, sofern dies nicht ausdrücklich vereinbart wurde.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-semibold mb-2">5. Cookies und Tracking</h2>
              <p>
                Auf dieser Website werden derzeit keine
                personenbezogenen Tracking- oder Analyse-Tools eingesetzt
                (z.&nbsp;B. Google Analytics). Es können technisch notwendige
                Cookies verwendet werden, um grundlegende Funktionen der
                Website sicherzustellen.
              </p>
              <p className="mt-2">
                Diese Cookies enthalten keine personenbezogenen Profile und
                werden in der Regel nach Ende der Sitzung oder beim Schliessen
                des Browsers gelöscht.
              </p>
            </div>

            {/* Aufbewahrung */}
            <div>
              <h2 className="font-semibold mb-2">
                6. Aufbewahrung und Löschung
              </h2>
              <p>
                Personenbezogene Daten werden nur so lange aufbewahrt, wie dies
                für die genannten Zwecke erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen. Nach Wegfall des Zwecks oder
                Ablauf der gesetzlichen Fristen werden die Daten gelöscht oder
                anonymisiert.
              </p>
            </div>

            {/* Weitergabe / Ausland */}
            <div>
              <h2 className="font-semibold mb-2">
                7. Weitergabe an Dritte und Datenübermittlung ins Ausland
              </h2>
              <p>
                Wir verkaufen oder vermieten keine personenbezogenen Daten.
                Eine Weitergabe an Dritte erfolgt nur an sorgfältig ausgewählte
                Dienstleister (z.&nbsp;B. Hosting-, E-Mail- oder IT-Dienstleister),
                die in unserem Auftrag handeln.
              </p>
              <p className="mt-2">
                Sofern dabei Daten ins Ausland übermittelt werden, stellen wir
                sicher, dass ein angemessenes Datenschutzniveau gewährleistet
                ist, beispielsweise durch vertragliche Garantien.
              </p>
            </div>

            {/* Rechte */}
            <div>
              <h2 className="font-semibold mb-2">8. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft über die zu Ihrer Person
                gespeicherten Daten sowie auf Berichtigung unrichtiger Daten.
                Zudem können Sie – im Rahmen der gesetzlichen Bestimmungen –
                die Löschung oder Einschränkung der Bearbeitung verlangen.
              </p>
              <p className="mt-2">
                Anfragen richten Sie bitte an{" "}
                <a href="mailto:info@aikmu.ch" className="neon-link">
                  info@aikmu.ch
                </a>.
              </p>
            </div>

            {/* Anpassungen */}
            <div>
              <h2 className="font-semibold mb-2">
                9. Änderungen dieser Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit
                anzupassen, um sie an rechtliche, technische oder organisatorische
                Änderungen anzupassen. Es gilt jeweils die auf dieser Website
                veröffentlichte aktuelle Version.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Datenschutz;
