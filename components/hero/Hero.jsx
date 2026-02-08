import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";

import hero1 from "../../public/images/hero/hero1.png";
import hero2 from "../../public/images/hero/hero2.png";
import hero3 from "../../public/images/hero/hero3.png";
import hero4 from "../../public/images/hero/hero4.png";
import hero5 from "../../public/images/hero/hero5.png";
import hero6 from "../../public/images/hero/hero6.png";

import arthur from "../../public/images/arthurergen_square_tiny.png";

const Hero = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* Decorative Frames */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      {/* CONTENT */}
      <div className="container m-auto pt-[120px] pb-[120px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white">
            Wir integrieren Corporate KI in Ihr KMU
            <span className="block mt-2 text-[#7CFF00]">
              professionell, sicher und messbar
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed">
            Wir helfen CEOs, Geschäftsleitungen und Verwaltungsräten,
            KI dort einzusetzen, wo Zeit verloren geht,
            Umsatz liegen bleibt oder Kontrolle fehlt &ndash;
            strategisch geführt, professionell umgesetzt.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-lg">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full max-w-[360px]"
            >
              <span className="neon-border-inner flex justify-center items-center py-3 text-lg">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* INTRO */}
          <p className="mt-12 text-lg text-white text-center">
            Die zentralen Bereiche, in denen KI heute den grössten
            wirtschaftlichen Hebel für KMUs bringt:
          </p>

          {/* ACCORDION */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

            {/* 0 – Recruiting */}
            <button onClick={() => toggle(0)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  1. Recruiting & Instant Onboarding
                </h3>
                {open === 0 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Wertvolle Management-Zeit fliesst oft in die Sichtung unpassender Dossiers. KI filtert CVs nach echtem Match und übernimmt das Onboarding neuer Talente per interaktivem Wissens-Chat.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 1 – E-Mail */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  2. E-Mail-Management & Führungs-Fokus
                </h3>
                {open === 1 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Gewinnen Sie bis zu 5 Stunden pro Woche zurück. KI priorisiert Ihren Posteingang nach strategischer Relevanz und formuliert komplexe Antwortentwürfe vor.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 2 – Marketing */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  3. Marketing & KI-gestützte Lead-Gen
                </h3>
                {open === 2 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Schluss mit vagen Kampagnen. KI identifiziert High-Value-Leads und skaliert personalisierten Content, der Ihre Zielgruppe dort abholt, wo der Schmerz sitzt.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 3 – Finanzen */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  4. Finanzen & Echtzeit-Controlling
                </h3>
                {open === 3 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Verwandeln Sie trockene Zahlen in strategische Insights. KI liefert Prognosen, erkennt Anomalien in der Buchhaltung und erstellt Berichte für den Verwaltungsrat auf Knopfdruck.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 4 – Support */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  5. Kundenservice & Experten-Entlastung
                </h3>
                {open === 4 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Ihre teuersten Experten sollten nicht 80% ihrer Zeit Standardfragen beantworten. KI-Agenten lösen Kundenanfragen sofort und mit dem Wissen Ihres gesamten Unternehmens.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 5 – Offerten */}
            <button onClick={() => toggle(5)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  6. Offertstellung & Sales-Backoffice
                </h3>
                {open === 5 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Wer schneller antwortet, gewinnt. KI erstellt präzise Offerten und technische Dokumentationen basierend auf Ihren Daten &ndash; in Minuten statt Tagen.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 6 – Prozesse */}
            <button onClick={() => toggle(6)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  7. Prozess-Automatisierung & Skalierung
                </h3>
                {open === 6 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Skalieren Sie Ihren Umsatz, ohne die Fixkosten durch Personal linear zu steigern. Wir automatisieren repetitive Workflows direkt in Ihren bestehenden Systemen.</p>
                  </div>
                )}
              </div>
            </button>

            {/* 7 – Governance */}
            <button onClick={() => toggle(7)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  8. Governance, Sicherheit & Datenschutz
                </h3>
                {open === 7 && (
                  <div className="mt-3 text-white leading-relaxed">
                    <p>Schützen Sie Ihr geistiges Eigentum. Wir implementieren sichere KI-Frameworks, die Compliance-Anforderungen (CH/EU) erfüllen und Wildwuchs im Team verhindern.</p>
                  </div>
                )}
              </div>
            </button>

          </div>

          {/* PERSON / ZITAT */}
          <div className="mt-20 flex flex-col items-center text-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src={arthur}
                alt="Arthur Ergen"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>

            <blockquote className="mt-6 max-w-2xl text-lg sm:text-xl text-white leading-relaxed italic">
              &bdquo;In 4 Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren und diejenigen, deren Team Befehle der KI ausführt und von ihr Lohn erhält.&ldquo;
            </blockquote>

            <p className="mt-4 text-base text-white font-semibold">
              Arthur Ergen, CEO
            </p>
          </div>

          {/* SEO */}
          <div className="sr-only">
            <p>
              AiKMU integriert Corporate KI für KMUs.
              Fokus auf Governance, Effizienz, Sicherheit und messbaren Nutzen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;