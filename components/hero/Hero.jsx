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
    <section
      id="hero"
      className="hero relative overflow-hidden min-h-screen flex items-center pt-[90px] md:pt-[110px]"
    >
      {/* BACKGROUND FRAMES */}
      {[hero1, hero2, hero3].map((img, i) => (
        <div
          key={i}
          className={`hero-frame-${i + 1} absolute z-0 pointer-events-none animate-pulse`}
        >
          <Image src={img} alt="" />
        </div>
      ))}

      {/* FLOATING ICONS – GetLeedz-Pattern mit vorhandenen Assets */}
      <div className="hero-icons">
        <div className="hero-icon hero-icon-left">
          <Image src={hero4} alt="" width={140} height={140} />
        </div>

        <div className="hero-icon hero-icon-right">
          <Image src={hero6} alt="" width={140} height={140} />
        </div>

        <div className="hero-icon hero-icon-bottom">
          <Image src={hero5} alt="" width={120} height={120} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 pt-[40px] pb-[80px] relative z-10 hero-content">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-[2.4rem] sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            Corporate KI für KMU
            <span className="block mt-3 text-[#7CFF00]">
              professionell · sicher · messbar
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Wir integrieren KI dort, wo heute Zeit verloren geht,
            Entscheidungen verzögern oder Kontrolle fehlt – strategisch geführt,
            professionell umgesetzt.
          </p>

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

          <p className="mt-16 text-sm sm:text-base text-white/70 uppercase tracking-widest font-medium">
            Wirtschaftliche Hebel für KMUs
          </p>

          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-left hidden md:block">
            {[
              {
                title: "Fachkräftemangel & langsames Onboarding",
                content:
                  "KI-Onboarding erklärt Prozesse, Richtlinien und Wissen per Chat. Neue Mitarbeitende werden schneller produktiv.",
              },
              {
                title: "Offerten & Ausschreibungen kosten Zeit",
                content:
                  "KI erstellt strukturierte Offerten direkt aus Notizen oder E-Mails.",
              },
              {
                title: "E-Mail-Flut blockiert Führungszeit",
                content:
                  "KI priorisiert, formuliert Entwürfe und organisiert Termine.",
              },
              {
                title: "Marketing ohne klare Resultate",
                content:
                  "KI analysiert Zielgruppen, optimiert Inhalte und Kampagnen.",
              },
              {
                title: "Finanzen ohne Transparenz",
                content:
                  "KI liefert verständliche Auswertungen und Prognosen.",
              },
              {
                title: "Governance & Datenschutz",
                content:
                  "Saubere KI-Governance, optional auf eigener Infrastruktur.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#020617]/80 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.title}
                  </h3>
                  <span
                    className={`transform transition-transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {open === index && (
                  <div className="px-5 pb-5 pt-4 text-white/80 leading-relaxed border-t border-white/5">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>

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
              „In vier Jahren gibt es zwei Arten von KMU:  
              Diejenigen, die ihre KI steuern –  
              und diejenigen, die von ihr gesteuert werden.“
            </blockquote>

            <div>
              <p className="text-lg font-bold text-white">Arthur Ergen</p>
              <p className="text-sm uppercase tracking-widest text-[#7CFF00] font-semibold">
                CEO GetLeedz GmbH
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
