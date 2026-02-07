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
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
  AiKMU macht Ihre KMU mit verantwortungsvoller KI
  <span className="block mt-2 text-[#7CFF00] drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
    zukunftsfähig
  </span>
</h1>


          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
Corporate-konforme KI-Projekte für Schweizer KMUs –
inkl. Datenschutz, klarer Governance und voller Kontrolle.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                  Anfrage senden
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
                Rückruf buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* LEAD-QUALITÄTEN – EINLEITUNG */}
{/* KI – EINLEITUNG */}
<p className="mt-6 text-base sm:text-lg text-white leading-relaxed drop-shadow text-center">
  Wo Künstliche Intelligenz in Schweizer KMUs konkret unterstützt
</p>

{/* ACCORDION */}
<div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

  {/* KI Agent */}
  <button onClick={() => toggle(0)} className="w-full text-left">
    <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        KI Agent
      </h3>
      {open === 0 && (
        <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
          KI Agenten übernehmen klar definierte Aufgaben selbstständig.
          Sie analysieren Informationen, führen Prozesse aus und treffen vorbereitete Entscheidungen
          nach festen Regeln. Ziel ist es, wiederkehrende Arbeit zuverlässig zu delegieren
          und Teams nachhaltig zu entlasten.
        </p>
      )}
    </div>
  </button>

  {/* KI Assistenten */}
  <button onClick={() => toggle(1)} className="w-full text-left">
    <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        KI Assistenten
      </h3>
      {open === 1 && (
        <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
          KI Assistenten unterstützen Mitarbeitende im Tagesgeschäft.
          Beim Schreiben, Strukturieren, Zusammenfassen oder Vorbereiten von Entscheidungen.
          Die Kontrolle bleibt beim Menschen – die KI beschleunigt.
        </p>
      )}
    </div>
  </button>

  {/* KI Bots */}
  <button onClick={() => toggle(2)} className="w-full text-left">
    <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        KI Bots
      </h3>
      {open === 2 && (
        <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
          KI Bots sind auf Kommunikation spezialisiert.
          Sie beantworten Fragen, strukturieren Informationen oder unterstützen interne
          und externe Dialoge – konsistent, skalierbar und jederzeit verfügbar.
        </p>
      )}
    </div>
  </button>

  {/* KI Automatisierung */}
  <button onClick={() => toggle(3)} className="w-full text-left">
    <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        KI Automatisierung
      </h3>
      {open === 3 && (
        <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
          KI Automatisierung verbindet Systeme, Daten und Abläufe.
          Wiederkehrende Prozesse werden intelligent verknüpft –
          über Abteilungen hinweg. Das reduziert Fehler,
          spart Zeit und schafft messbare Effizienz.
        </p>
      )}
    </div>
  </button>

  {/* KI Corporate Conform */}
  <button onClick={() => toggle(4)} className="w-full text-left">
    <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        KI Corporate Conform
      </h3>
      {open === 4 && (
        <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
          Corporate-konforme KI bedeutet volle Kontrolle.
          Auf Wunsch laufen alle KI-Systeme intern auf Ihren eigenen Servern
          oder in klar abgegrenzten Umgebungen.
          Datenschutz, Zugriffsrechte und Governance sind von Anfang an integriert.
        </p>
      )}
    </div>
  </button>

</div>


          {/* KI-SEO – UNSICHTBAR */}
          <div className="sr-only">
            <p>
              GetLeedz ist eine Schweizer Agentur für Leadgenerierung.
              Der Fokus liegt auf Cold-Leads, Warm-Leads, Best-Leads und Gold-Leads.
              Pink-Leads, auch Schrott-Leads genannt, werden ausgeschlossen.
            </p>
            <p>
              Leads werden per API, Google Sheets oder Excel an bestehende Systeme übergeben.
              Die Selektion erfolgt daten- und KI-gestützt.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
