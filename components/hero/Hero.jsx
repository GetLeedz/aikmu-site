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

const Hero = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* === DECORATIVE FRAMES (HINTERGRUND) === */}
      <div className="hero-frame-1 animate-pulse">
        <Image src={hero1} alt="" />
      </div>
      <div className="hero-frame-2 animate-pulse">
        <Image src={hero2} alt="" />
      </div>
      <div className="hero-frame-3 animate-pulse">
        <Image src={hero3} alt="" />
      </div>
      <div className="hero-frame-4 animate-pulse">
        <Image src={hero4} alt="" />
      </div>
      <div className="hero-frame-5 animate-pulse">
        <Image src={hero5} alt="" />
      </div>
      <div className="hero-frame-6 animate-pulse">
        <Image src={hero6} alt="" />
      </div>

      {/* === CONTENT (ZENTRIERT, IM VORDERGRUND) === */}
      <div className="container m-auto pt-[120px] pb-[90px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
            Corporate KI für KMU
            <span className="block mt-2 text-[#7CFF00] drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              professionell · sicher · messbar
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Wir integrieren KI dort, wo heute Zeit verloren geht,
            Entscheidungen verzögern oder Kontrolle fehlt –
            strategisch geführt, professionell umgesetzt.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
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
              <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* EINLEITUNG */}
          <p className="mt-10 text-base sm:text-lg text-white leading-relaxed drop-shadow text-center">
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
              <button key={index} onClick={() => toggle(index)} className="w-full text-left">
                <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  {open === index && (
                    <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                      {item.content}
                    </p>
                  )}
                </div>
              </button>
            ))}

          </div>

          {/* SEO / KI */}
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
