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
            className="text-[2.1rem] sm:text-5xl lg:text-6xl font-semibold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
            style={{ lineHeight: 1.2 }}
          >
            AiKMU begleitet Ihr Unternehmen
            <span className="block">mit verantwortungsvoller KI</span>
            <span className="block mt-1 text-[#7CFF00] drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
              sicher in die Zukunft
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Strategische KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –  
            für effizientere Prozesse, bessere Entscheidungen und messbare Entlastung
            von Management und Teams.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                  Beratung anfragen
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
                Gespräch vereinbaren
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* EINLEITUNG */}
          <p className="mt-6 text-base sm:text-lg text-white leading-relaxed drop-shadow text-center">
            Wo AiKMU Sie konkret unterstützt – beratend, umsetzend oder begleitend.
            Immer mit dem Ziel, Ihr Unternehmen messbar besser aufzustellen.
          </p>

          {/* ACCORDION */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

            {/* KI Agenten */}
            <button onClick={() => toggle(0)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI Agenten für operative Entlastung
                </h3>
                {open === 0 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    KI Agenten übernehmen wiederkehrende Aufgaben selbstständig.
                    <br />
                    <strong>Ihr Vorteil:</strong> weniger operative Arbeit,
                    schnellere Abläufe und spürbare Zeitgewinne für Führungskräfte
                    und Schlüsselpersonen.
                  </p>
                )}
              </div>
            </button>

            {/* KI Assistenten */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI Assistenten für Management & Teams
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    KI Assistenten unterstützen beim Denken, Strukturieren
                    und Entscheiden.
                    <br />
                    <strong>Ihr Vorteil:</strong> bessere Entscheidungen in kürzerer Zeit,
                    weniger Überlastung und klarere Kommunikation im Team.
                  </p>
                )}
              </div>
            </button>

            {/* KI Bots */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI Bots für Kommunikation & Service
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    KI Bots übernehmen strukturierte Kommunikation intern
                    und extern.
                    <br />
                    <strong>Ihr Vorteil:</strong> konstante Erreichbarkeit,
                    weniger Rückfragen und eine deutlich höhere Servicequalität
                    ohne zusätzliches Personal.
                  </p>
                )}
              </div>
            </button>

            {/* KI Automatisierung */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI-gestützte Automatisierung von Prozessen
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Wir automatisieren Abläufe, die Zeit, Geld und Energie kosten.
                    <br />
                    <strong>Ihr Vorteil:</strong> geringere Kosten,
                    weniger Fehler und eine Organisation,
                    die stabil wächst statt zu bremsen.
                  </p>
                )}
              </div>
            </button>

            {/* KI Corporate Conform */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Corporate-konforme KI & Governance
                </h3>
                {open === 4 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    KI wird sauber in Ihre Organisation eingebettet –
                    mit klaren Regeln und Verantwortung.
                    <br />
                    <strong>Ihr Vorteil:</strong> volle Kontrolle,
                    Rechtssicherheit und Vertrauen bei
                    Verwaltungsrat, Management und Mitarbeitenden.
                  </p>
                )}
              </div>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
