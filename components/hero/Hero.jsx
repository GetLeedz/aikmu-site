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
            Umsatz liegen bleibt oder Kontrolle fehlt –
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

            {/* 1 – Onboarding */}
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

            {/* 2 – Offerten */}
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

            {/* 3 – E-Mail */}
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

            {/* 4 – Marketing */}
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
                    optimiert Inhalte und unterstützt bei Kampagnen –
                    mehr qualifizierte Anfragen,
                    bessere Budget-Nutzung,
                    klare Entscheidungsgrundlagen.
                  </p>
                )}
              </div>
            </button>

            {/* 5 – Finanzen */}
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

            {/* 6 – Governance (1:1 dein Inhalt) */}
            <button onClick={() => toggle(5)} className="w-full text-left">
              <div className="bg-[#020617]/95 p-5 rounded-xl border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI mit Governance, Kontrolle und Verantwortung
                </h3>
                {open === 5 && (
                  <p className="mt-3 text-white leading-relaxed">
                    KI entfaltet nur dann nachhaltig Wirkung, wenn sie
                    sauber in Organisation, Prozesse und Verantwortung eingebettet ist.
                    <br />
                    <strong>Ihr Nutzen:</strong> klare Governance,
                    definierte Zugriffsrechte, Datenschutz und
                    auf Wunsch KI-Lösungen auf eigener Infrastruktur –
                    Sicherheit und Vertrauen für Geschäftsleitung
                    und Verwaltungsrat.
                  </p>
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
              „In 4 Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren und diejenigen, deren Team Befehle der KI ausführt und von ihr Lohn erhält.“
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

          {/* Swiss Promoted */}
          <div className="mt-10 flex justify-center items-center gap-2 text-sm text-white/80">
            <span className="swiss-flag" />
            <span>Swiss Promoted</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
