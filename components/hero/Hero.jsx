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

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* Decorative Frames */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      <div className="container m-auto pt-[120px] pb-[60px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
            Leadgenerierung,
            <span className="block mt-2 text-[#7CFF00] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
              die neue Anfragen bringt.
            </span>
          </h1>

          {/* Subline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-100 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
            GetLeedz entwickelt starke Creatives und Performance-Kampagnen auf
            Meta, LinkedIn und Google.  
            Damit dein Vertrieb mit den richtigen Menschen spricht und messbar
            neue Anfragen erhält.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[380px]">
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
              className="group neon-border w-full max-w-[380px]"
            >
              <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                Rückruf buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* Accordion */}
          <div className="mt-14 text-left max-w-3xl mx-auto space-y-4">

            {/* Pink Leads */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Pink-Leads (Schrott-Leads)
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Pink-Leads sind Schrott-Leads.  
                    Sie klicken schnell, tragen irgendetwas ein und verschwinden wieder.
                    Kein klarer Bedarf. Keine Entscheidung. Kein Abschluss.  
                    Diese Leads entstehen durch falsche Zielgruppen,
                    reisserische Creatives oder fehlende Vorqualifizierung.  
                    Solche Leads gibt es bei GetLeedz nicht.
                  </p>
                )}
              </div>
            </button>

            {/* Best Leads */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Best-Leads
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Best-Leads sind echte Interessenten mit erkennbarem Bedarf.
                    Sie verstehen dein Angebot und sind offen für ein Gespräch.
                    Best-Leads bilden die Grundlage für sauberen,
                    planbaren Vertrieb ohne Zeitverschwendung.
                  </p>
                )}
              </div>
            </button>

            {/* Gold Leads */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Gold-Leads
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Gold-Leads sind abschlussbereite Kontakte mit klarem Bedarf
                    und passendem Timing.  
                    Die Selektion erfolgt KI-gestützt anhand von Verhalten,
                    Antworten und Signalen.  
                    Je nach Budget deines KMU skalieren wir von Best-Leads
                    bis Gold-Leads.
                  </p>
                )}
              </div>
            </button>

            {/* Übergabe */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Lead-Übergabe & Integration
                </h3>
                {open === 4 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Leads werden strukturiert übergeben.  
                    Per API direkt in dein System, oder über Google Sheets
                    und Excel.  
                    Sauber. Klar. Ohne Nacharbeit.
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
