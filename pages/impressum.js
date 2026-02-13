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

const Impressum = () => {
  return (
    <>
      <Head>
        <title>Impressum – AiKMU</title>
        <meta
          name="description"
          content="Impressum und rechtliche Angaben der AiKMU. Kontaktinformationen, Handelsregister, MWST, Bankverbindung und rechtliche Hinweise."
        />
      </Head>

      <NavBar />

      <main className="relative min-h-screen overflow-hidden text-white pt-[160px] pb-20">

        {/* Subtile Background Icons */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">

          <div className="absolute top-[12%] left-[8%] opacity-6">
            <Image src={hero1} alt="" width={110} height={110} />
          </div>

          <div className="absolute top-[20%] right-[10%] opacity-5">
            <Image src={hero2} alt="" width={120} height={120} />
          </div>

          <div className="absolute bottom-[30%] left-[12%] opacity-5">
            <Image src={hero3} alt="" width={100} height={100} />
          </div>

          <div className="absolute top-[55%] right-[6%] opacity-5">
            <Image src={hero4} alt="" width={110} height={110} />
          </div>

          <div className="absolute bottom-[15%] right-[18%] opacity-4">
            <Image src={hero5} alt="" width={90} height={90} />
          </div>

          <div className="absolute top-[65%] left-[20%] opacity-4">
            <Image src={hero6} alt="" width={85} height={85} />
          </div>

        </div>

        <section className="container m-auto px-4 max-w-3xl relative z-10">

          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#a855f7]">
            Impressum
          </h1>

          <div className="space-y-10 text-white/90 leading-relaxed">

            <div>
              <h2 className="font-semibold text-lg mb-2">Verantwortlich für den Inhalt</h2>
              <p>
                AiKMU<br />
                GetLeedz GmbH<br />
                4102 Binningen<br />
                Schweiz
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Kontakt</h2>
              <p>
                E-Mail: <a href="mailto:info@aikmu.ch" className="text-[#00f2fe]">info@aikmu.ch</a><br />
                Telefon: <a href="tel:+41615251810" className="text-[#00f2fe]">+41 61 525 18 10</a><br />
                Web: <a href="https://www.aikmu.ch" className="text-[#00f2fe]">www.aikmu.ch</a>
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Unternehmensform</h2>
              <p>
                GetLeedz GmbH<br />
                Gesellschaft mit beschränkter Haftung (GmbH) nach Schweizer Recht.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Handelsregister</h2>
              <p>
                Eingetragen im Handelsregister des Kantons Basel-Landschaft<br />
                CHE-339.044.174
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Mehrwertsteuer</h2>
              <p>
                MWST-Nummer: CHE-339.044.174
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Haftungsausschluss</h2>
              <p>
                Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität übernehmen wir
                jedoch keine Gewähr, soweit gesetzlich zulässig.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">Urheberrechte</h2>
              <p>
                Inhalte und Werke unterliegen dem schweizerischen Urheberrecht.
                Vervielfältigung oder Verbreitung bedarf der schriftlichen Zustimmung.
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
