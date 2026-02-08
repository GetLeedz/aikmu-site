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
    <section className="hero relative overflow-hidden min-h-screen flex flex-col justify-center" id="hero">
      {/* Decorative Frames */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      {/* CONTENT */}
      <div className="container m-auto pt-[140px] pb-[80px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-10/12 lg:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1
            className="text-[2.3rem] sm:text-5xl lg:text-7xl font-bold text-white tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            AiKMU integriert Corporate KI
            <span className="block mt-1">in Ihr KMU</span>
            <span className="block mt-2 text-[#7CFF00]">
              professionell, sicher und messbar
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Wir helfen Ihnen, KI dort einzusetzen, wo heute Zeit verloren geht,
            Umsatz liegen bleibt oder Kontrolle fehlt. Strategisch geführt,
            professionell umgesetzt.
          </p>

          {/* CTA - Button-Layout wie GetLeedz */}
          <div className="flex flex-col items-center gap-5 mt-12">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[400px] transition-transform hover:scale-[1.02]">
                <span className="neon-border-inner flex justify-center items-center py-4 text-lg font-semibold tracking-wide">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full max-w-[400px] transition-transform hover:scale-[1.02]"
            >
              <span className="neon-border-inner flex justify-center items-center py-4 text-lg font-semibold tracking-wide bg-black/20">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-3 opacity-80" />
              </span>
            </a>
          </div>

          {/* EINLEITUNG */}
          <p className="mt-16 text-base sm:text-lg text-white/70 text-center uppercase tracking-widest font-medium">
            Wirtschaftliche Hebel für KMUs:
          </p>

          {/* ACCORDION */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-left">
            {[
              {
                title: "Fachkräftemangel & Onboarding bremsen Ihr Wachstum",
                content: "Wissen steckt in Köpfen, neue Mitarbeitende brauchen Monate, Führungskräfte erklären immer wieder dasselbe. Ihr Nutzen: KI-Onboarding erklärt Prozesse, Richtlinien und Wissen per Chat – Mitarbeitende werden schneller produktiv, Führung wird entlastet."
              },
              {
                title: "Offerten & Ausschreibungen kosten Zeit und Umsatz",
                content: "Angebote entstehen manuell aus Notizen, Skizzen oder E-Mails. Ihr Nutzen: KI erstellt strukturierte Offerten direkt für ERP/CRM – schneller reagieren, mehr Abschlüsse, weniger Stress im Team."
              },
              {
                title: "Die E-Mail-Flut raubt Ihnen Führungszeit",
                content: "Wichtige Themen gehen unter, Entscheidungen verzögern sich. Ihr Nutzen: KI priorisiert, formuliert Entwürfe und organisiert Termine – Sie gewinnen wöchentlich mehrere Stunden zurück."
              },
              {
                title: "Marketing kostet Geld – bringt aber zu wenig Resultate",
                content: "Kampagnen laufen, aber ohne Klarheit, Konsistenz oder saubere Auswertung. Ihr Nutzen: KI analysiert Zielgruppen, optimiert Inhalte und Kampagnen – mehr qualifizierte Anfragen, klare Entscheidungsgrundlagen."
              },
              {
                title: "Buchhaltung & Finanzen: Fehlende Transparenz",
                content: "Zahlen kommen verspätet, Auswertungen sind schwer verständlich. Ihr Nutzen: KI unterstützt Treuhand, Finance und Management mit verständlichen Auswertungen, Prognosen und Frühwarnsignalen."
              },
              {
                title: "KI mit Governance und Datenschutz",
                content: "KI entfaltet nur dann nachhaltig Wirkung, wenn sie sauber eingebettet ist. Ihr Nutzen: klare Governance, definierte Zugriffsrechte und auf Wunsch KI auf eigener Infrastruktur – Sicherheit für VR und GL."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#020617]/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <button 
                  onClick={() => toggle(index)} 
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.title}
                  </h3>
                  <span className={`transform transition-transform ${open === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {open === index && (
                  <div className="px-5 pb-5 text-white/80 leading-relaxed border-t border-white/5 pt-4">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* FOTO + ZITAT */}
          <div className="mt-20 flex flex-col items-center gap-6 text-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#7CFF00]/30 shadow-2xl">
              <Image
                src={arthurImg}
                alt="Arthur Ergen"
                width={112}
                height={112}
                className="object-cover"
              />
            </div>

            <blockquote className="max-w-2xl text-xl sm:text-2xl text-white italic font-light leading-snug opacity-95">
              „In vier Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren – und diejenigen, deren Team Befehle der KI ausführt.“
            </blockquote>
            <div className="mt-2">
              <p className="text-lg font-bold text-white">Arthur Ergen</p>
              <p className="text-sm uppercase tracking-widest text-[#7CFF00] font-semibold">CEO GetLeedz GmbH</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;