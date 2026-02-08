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
      {/* === DECORATIVE FRAMES === */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      {/* === CONTENT === */}
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
            Wir helfen Ihnen, KI dort einzusetzen, wo heute Zeit verloren geht, Umsatz liegen bleibt oder Kontrolle fehlt.
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

          {/* EINLEITUNG */}
          <p className="mt-12 text-lg text-white">
            Wirtschaftliche Hebel für KMUs:
          </p>

          {/* ACCORDION */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">
            {[
              {
                title: "Fachkräftemangel & langsames Onboarding",
                content:
                  "Wissen steckt in Köpfen. KI-Onboarding erklärt Prozesse, Richtlinien und Wissen per Chat – neue Mitarbeitende werden schneller produktiv."
              },
              {
                title: "Offerten & Ausschreibungen kosten Zeit",
                content:
                  "KI erstellt strukturierte Offerten direkt aus E-Mails, Notizen oder Skizzen – schneller reagieren, mehr Abschlüsse."
              },
              {
                title: "E-Mail-Flut blockiert Führungszeit",
                content:
                  "KI priorisiert, formuliert Entwürfe und organisiert Termine – mehrere Stunden Zeitgewinn pro Woche."
              },
              {
                title: "Marketing ohne klare Resultate",
                content:
                  "KI analysiert Zielgruppen, optimiert Inhalte und Kampagnen – messbar bessere Entscheidungen."
              },
              {
                title: "Finanzen ohne Transparenz",
                content:
                  "KI unterstützt Auswertungen, Prognosen und Frühwarnsysteme für Geschäftsleitung & VR."
              },
              {
                title: "Governance & Datenschutz",
                content:
                  "Saubere KI-Governance, definierte Zugriffsrechte und optional KI auf eigener Infrastruktur."
              }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => toggle(index)}
                className="w-full text-left"
              >
                <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  {open === index && (
                    <p className="mt-3 text-lg text-white leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* === PERSON / ZITAT === */}
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
              „IIn vier Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren und diejenigen, deren Team Befehle der KI ausführt und von ihr Lohn erhält.“
            </blockquote>

            <p className="mt-4 text-base text-white font-semibold">
              Arthur Ergen, CEO
            </p>

            <p className="mt-2 text-sm text-white/80 flex items-center gap-2">
              Swiss-promoted
              <span className="swiss-flag" />
            </p>
          </div>

          {/* SEO */}
          <div className="sr-only">
            <p>
              AiKMU integriert Corporate KI für Schweizer KMUs.
              Fokus auf Governance, Effizienz, Sicherheit und messbaren Nutzen.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
