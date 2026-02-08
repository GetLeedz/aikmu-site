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

import arthurImg from "../../public/images/arthurergen_square_tiny.png";

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
      <div className="container m-auto pt-[120px] pb-[90px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1
            className="text-[2.1rem] sm:text-5xl lg:text-6xl font-semibold text-white"
            style={{ lineHeight: 1.2 }}
          >
            AiKMU integriert Corporate KI
            <span className="block">in Ihr KMU</span>
            <span className="block mt-1 text-[#7CFF00]">
              professionell, sicher und messbar
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed">
            Wir helfen Ihnen, KI dort einzusetzen, wo heute Zeit verloren geht,
            Umsatz liegen bleibt oder Kontrolle fehlt. Strategisch geführt,
            professionell umgesetzt.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-2" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full max-w-[360px]"
            >
              <span className="neon-border-inner flex justify-center items-center py-3">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* EINLEITUNG */}
          <p className="mt-6 text-base sm:text-lg text-white text-center">
            Die zentralen Bereiche, in denen KI heute den grössten
            wirtschaftlichen Hebel für KMUs bringt:
          </p>

          {/* ACCORDION */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

            {/* Onboarding */}
            <button onClick={() => toggle(0)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Fachkräftemangel & Onboarding bremsen Ihr Wachstum
                </h3>
                {open === 0 && (
                  <p className="mt-3 text-white leading-relaxed">
                    Wissen steckt in Köpfen, neue Mitarbeitende brauchen Monate,
                    Führungskräfte erklären immer wieder dasselbe.
                    <br />
                    <strong>Ihr Nutzen:</strong> KI-Onboarding erklärt Prozesse,
                    Richtlinien und Wissen per Chat –
                    Mitarbeitende werden schneller produktiv,
                    Führung wird entlastet.
                  </p>
                )}
              </div>
            </button>

            {/* Offerten */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Offerten & Ausschreibungen kosten Zeit und Umsatz
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-white leading-relaxed">
                    Angebote entstehen manuell aus Notizen,
                    Skizzen oder E-Mails.
                    <br />
                    <strong>Ihr Nutzen:</strong> KI erstellt strukturierte
                    Offerten direkt für ERP/CRM –
                    schneller reagieren, mehr Abschlüsse,
                    weniger Stress im Team.
                  </p>
                )}
              </div>
            </button>

            {/* E-Mail */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Die E-Mail-Flut raubt Ihnen Führungszeit
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-white leading-relaxed">
                    Wichtige Themen gehen unter,
                    Entscheidungen verzögern sich.
                    <br />
                    <strong>Ihr Nutzen:</strong> KI priorisiert,
                    formuliert Entwürfe und organisiert Termine –
                    Sie gewinnen wöchentlich mehrere Stunden zurück.
                  </p>
                )}
              </div>
            </button>

            {/* Marketing */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Marketing kostet Geld – bringt aber zu wenig Resultate
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-white leading-relaxed">
                    Kampagnen laufen, aber ohne Klarheit,
                    Konsistenz oder saubere Auswertung.
                    <br />
                    <strong>Ihr Nutzen:</strong> KI analysiert Zielgruppen,
                    optimiert Inhalte und Kampagnen –
                    mehr qualifizierte Anfragen,
                    bessere Budget-Nutzung,
                    klare Entscheidungsgrundlagen.
                  </p>
                )}
              </div>
            </button>

            {/* Finanzen */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Buchhaltung & Finanzen sind da – aber nicht transparent genug
                </h3>
                {open === 4 && (
                  <p className="mt-3 text-white leading-relaxed">
                    Zahlen kommen verspätet,
                    Auswertungen sind schwer verständlich.
                    <br />
                    <strong>Ihr Nutzen:</strong> KI unterstützt Treuhand,
                    Finance und Management mit verständlichen Auswertungen,
                    Prognosen und Frühwarnsignalen –
                    bessere Entscheidungen, weniger Überraschungen.
                  </p>
                )}
              </div>
            </button>

            {/* Governance */}
            <button onClick={() => toggle(5)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI mit Governance, Kontrolle und Verantwortung
                </h3>
                {open === 5 && (
                  <p className="mt-3 text-white leading-relaxed">
                    KI entfaltet nur dann nachhaltig Wirkung, wenn sie
                    sauber in Organisation, Prozesse und Verantwortung
                    eingebettet ist.
                    <br />
                    <strong>Ihr Nutzen:</strong> klare Governance,
                    definierte Zugriffsrechte, Datenschutz und
                    auf Wunsch KI auf eigener Infrastruktur –
                    Sicherheit und Vertrauen für Geschäftsleitung
                    und Verwaltungsrat.
                  </p>
                )}
              </div>
            </button>

          </div>

          {/* FOTO + ZITAT */}
          <div className="mt-14 flex flex-col items-center gap-6 text-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-white/30">
              <Image
                src={arthurImg}
                alt="Arthur Ergen"
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>


            <blockquote className="max-w-2xl text-[1.05rem] sm:text-[1.15rem] text-white leading-[1.7] opacity-95">
              „In vier Jahren gibt es zwei Arten von KMU:  
              Diejenigen, die als Architekten ihre KI steuern und kontrollieren –  
              und diejenigen, deren Team für die KI arbeitet und seinen Lohn
              direkt von ihr bezieht.“
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
