import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

// HERO ICONS
import hero1 from "../public/images/hero/hero1.png";
import hero2 from "../public/images/hero/hero2.png";
import hero3 from "../public/images/hero/hero3.png";
import hero4 from "../public/images/hero/hero4.png";
import hero5 from "../public/images/hero/hero5.png";
import hero6 from "../public/images/hero/hero6.png";

const Datenschutz = () => {
  return (
    <>
      <Head>
        <title>Datenschutz – AiKMU</title>
        <meta
          name="description"
          content="Datenschutzerklärung der AiKMU. Informationen zur Bearbeitung personenbezogener Daten, Hosting, Governance und Ihre Rechte."
        />
      </Head>

      <NavBar />

      <main className="relative min-h-screen overflow-hidden text-white pt-[160px] pb-20">

        {/* Subtile Background Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

          <div className="absolute top-[10%] left-[8%] opacity-6">
            <Image src={hero1} alt="" width={110} height={110} />
          </div>

          <div className="absolute top-[18%] right-[10%] opacity-5">
            <Image src={hero2} alt="" width={120} height={120} />
          </div>

          <div className="absolute bottom-[28%] left-[12%] opacity-5">
            <Image src={hero3} alt="" width={100} height={100} />
          </div>

          <div className="absolute top-[55%] right-[6%] opacity-5">
            <Image src={hero4} alt="" width={110} height={110} />
          </div>

          <div className="absolute bottom-[12%] right-[18%] opacity-4">
            <Image src={hero5} alt="" width={90} height={90} />
          </div>

          <div className="absolute top-[65%] left-[20%] opacity-4">
            <Image src={hero6} alt="" width={85} height={85} />
          </div>

        </div>

        <section className="container m-auto px-4 max-w-3xl relative z-10">

          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#a855f7]">
            Datenschutzerklärung
          </h1>

          <div className="space-y-10 text-white/90 leading-relaxed">

            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
              Nachfolgend informieren wir Sie transparent über Art, Umfang und Zweck
              der Bearbeitung personenbezogener Daten gemäss dem anwendbaren Datenschutzrecht.
            </p>

            <div>
              <h2 className="font-semibold text-lg mb-2">1. Verantwortliche Stelle</h2>
              <p>
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz<br />
                E-Mail: <a href="mailto:info@aikmu.ch" className="text-[#00f2fe]">info@aikmu.ch</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">2. Hosting und Server-Logs</h2>
              <p>
                Beim Zugriff auf unsere Website werden automatisch technische Daten
                (IP-Adresse, Datum, Uhrzeit, Browsertyp, Betriebssystem) verarbeitet.
                Diese Daten sind technisch notwendig für Sicherheit und Stabilität.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">3. Kontaktformulare</h2>
              <p>
                Wenn Sie uns über Formulare kontaktieren, bearbeiten wir Ihre
                Angaben (Name, Unternehmen, E-Mail, Telefonnummer, Nachricht)
                ausschliesslich zur Bearbeitung Ihrer Anfrage.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">4. KI-Projekte & Beratungsdaten</h2>
              <p>
                Im Rahmen von Beratungs- und Implementierungsprojekten
                werden projektbezogene Daten ausschliesslich im Auftrag
                unserer Kunden verarbeitet.
              </p>
              <p className="mt-2">
                Kundendaten werden nicht ohne ausdrückliche Vereinbarung
                für Trainingszwecke von KI-Modellen verwendet.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">5. Cookies</h2>
              <p>
                Es werden nur technisch notwendige Cookies verwendet,
                um grundlegende Funktionen sicherzustellen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">6. Aufbewahrung</h2>
              <p>
                Daten werden nur so lange gespeichert, wie dies für
                die jeweiligen Zwecke erforderlich ist oder gesetzliche
                Pflichten bestehen.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">7. Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung
                sowie Einschränkung der Bearbeitung Ihrer Daten.
              </p>
              <p className="mt-2">
                Kontakt: <a href="mailto:info@aikmu.ch" className="text-[#00f2fe]">info@aikmu.ch</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">8. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
                anzupassen. Es gilt jeweils die veröffentlichte aktuelle Version.
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
