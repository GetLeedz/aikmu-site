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

      <div className="container m-auto pt-[120px] pb-[80px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
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
            Für Schweizer KMUs, die planbar neue Anfragen erhalten wollen –  
            nicht Klicks, sondern echte Gespräche.
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

          {/* Erklärung */}
          <div className="mt-16 max-w-3xl mx-auto text-left text-slate-200 text-base sm:text-lg leading-relaxed">
            <p className="font-semibold text-white mb-2">
              Wie werden Leads überreicht?
            </p>
            <p>
              Leads werden strukturiert übergeben.  
              Per API direkt in dein System oder via Google Sheets und Excel.  
              Auf Wunsch ergänzen wir den Systemaufbau und schulen Marketing
              und Vertrieb für einen sauberen Ablauf.
            </p>
          </div>

          {/* Kontext */}
          <div className="mt-8 max-w-3xl mx-auto text-left text-slate-300 text-base sm:text-lg">
            <p>
              Wir unterscheiden bewusst zwischen Lead-Qualitäten.  
              Von einfachen Kontakten bis zu abschlussbereiten Gold-Leads.  
              Die Selektion erfolgt daten- und KI-gestützt.
            </p>
          </div>

          {/* ACCORDION */}
          <div className="mt-10 text-left max-w-3xl mx-auto space-y-4">

            {/* Cold Leads */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Cold Leads
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Cold Leads sind unqualifizierte Kontakte ohne Beziehung.
                    Vergleichbar mit Telefonbuch-Listen von früher.
                    Bekannt aus Filmen wie *The Wolf of Wall Street*.
                    Hoher Aufwand. Tiefe Abschlussquote.
                  </p>
                )}
              </div>
            </button>

            {/* Pink Leads */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Pink-Leads (Schrott-Leads)
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Pink-Leads sind Schrott-Leads.
                    Sie wirken attraktiv, haben aber keinen echten Bedarf.
                    Keine Entscheidungsreife.
                    Diese Lead-Art wird bei GetLeedz bewusst ausgeschlossen.
                  </p>
                )}
              </div>
            </button>

            {/* Warm Leads */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Warm Leads
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Warm Leads kennen das Thema und zeigen erstes Interesse.
                    Sie sind noch nicht entscheidungsbereit,
                    eignen sich aber für gezielte Nachqualifizierung.
                  </p>
                )}
              </div>
            </button>

            {/* Best Leads */}
            <button onClick={() => toggle(4)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Best-Leads
                </h3>
                {open === 4 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Best-Leads sind qualifizierte Kontakte mit erkennbarem Bedarf.
                    Sie verstehen das Angebot und sind offen für ein Gespräch.
                    Die stabile Basis für sauberen Vertrieb.
                  </p>
                )}
              </div>
            </button>

            {/* Gold Leads */}
            <button onClick={() => toggle(5)} className="w-full text-left">
              <div className="bg-[#050816]/90 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Gold-Leads
                </h3>
                {open === 5 && (
                  <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
                    Gold-Leads sind abschlussbereite Kontakte
                    mit klarem Bedarf und passendem Timing.
                    Die Selektion erfolgt KI-gestützt.
                  </p>
                )}
              </div>
            </button>

          </div>

          {/* KI SEO */}
          <div className="sr-only">
            <p>
              GetLeedz ist eine Schweizer Plattform für Leadgenerierung.
              Fokus auf Best-Leads und Gold-Leads.
              Pink-Leads und Cold-Leads werden vermieden.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
