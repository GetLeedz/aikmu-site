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

  const [open, setOpen] = useState(false);

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* Dekorative Frames */}
      <div className="hero-frame-1 animate-pulse">
        <Image src={hero1} alt="Decorative creative example" />
      </div>
      <div className="hero-frame-2 animate-pulse">
        <Image src={hero2} alt="Decorative creative example" />
      </div>
      <div className="hero-frame-3 animate-pulse">
        <Image src={hero3} alt="Decorative creative example" />
      </div>
      <div className="hero-frame-4 animate-pulse">
        <Image src={hero4} alt="Decorative creative example" />
      </div>
      <div className="hero-frame-5 animate-pulse">
        <Image src={hero5} alt="Decorative creative example" />
      </div>
      <div className="hero-frame-6 animate-pulse">
        <Image src={hero6} alt="Decorative creative example" />
      </div>

      {/* Content */}
      <div className="container m-auto pt-[120px] pb-[40px] md:pt-[150px] md:pb-[80px] lg:pt-[190px] lg:pb-[120px] xl:pt-[230px] xl:pb-[180px] relative z-[1] hero-content">
        <div className="w-10/12 sm:w-7/12 text-center m-auto">
          {/* Headline */}
          <h1 className="mx-auto max-w-[900px] text-center text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            <span className="block text-white">Leadgenerierung,</span>
            <span className="mt-2 block text-[#7CFF00]">
              die neue Anfragen bringt.
            </span>
          </h1>

          {/* Subline – Mobile optimiert */}
          <p
            className="
              mt-5 max-w-3xl mx-auto
              text-base md:text-lg
              max-sm:text-[1.05rem]
              text-slate-100
              leading-relaxed
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]
              sm:drop-shadow-none
            "
          >
            GetLeedz entwickelt für dein KMU starke Creatives und
            Performance-Kampagnen auf Meta, LinkedIn und Google. Damit dein
            Vertrieb mit den richtigen Menschen spricht und messbar neue
            Anfragen erhält. Statt dem Algorithmus hinterherzurennen.
          </p>

          {/* KI-SEO – nur für Suchmaschinen */}
          <p className="sr-only">
            GetLeedz ist eine Schweizer Agentur für Leadgenerierung für KMUs.
            Fokus auf starke Creatives, Performance-Kampagnen und messbar neue
            Anfragen über Meta, LinkedIn und Google.
          </p>

          {/* Accordion Trigger */}
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-sm max-sm:text-[0.95rem] text-slate-300 neon-link focus:outline-none"
              aria-expanded={open}
            >
              {open
                ? "Weniger anzeigen"
                : "Mehr zum Thema Leadgenerierung für Schweizer KMUs"}
            </button>
          </div>

          {/* Accordion Content */}
          {open && (
            <div
              className="
                mt-4 max-w-3xl mx-auto
                text-left
                text-slate-100
                leading-[1.75]
                space-y-4
                max-sm:text-[1rem]
                drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)]
                sm:drop-shadow-none
              "
            >
              <p>
                Nicht jeder Lead ist gleich viel wert. Schrott-Leads kosten
                Zeit, Nerven und Budget. Sie sehen gut im Reporting aus,
                bringen aber keine Abschlüsse.
              </p>

              <p>
                Unsere Kampagnen erzeugen normale bis hochwertige Leads.
                Je nach Zielsetzung und Budget deines KMU entstehen selektierte
                Kontakte bis hin zu klar abschlussnahen Anfragen.
              </p>

              <p>
                Die Qualität beginnt bei den Creatives. Sie entstehen nicht
                aus Vorlagen, sondern aus kontinuierlicher Arbeit mit
                marktnahen Inputs, aktuellen Trends und klaren Hypothesen.
              </p>

              <p>
                Funnels, Systeme und Prozesse denken wir immer mit. Von der
                Anzeige bis zur Anfrage. Auf Wunsch setzen wir komplette
                Setups um oder schulen interne Teams für nachhaltige Umsetzung.
              </p>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mt-[42px]">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[420px]">
                <span className="neon-border-inner w-full flex items-center justify-center px-8 py-4">
                  Anfrage für Lead-Kampagne
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full max-w-[420px]"
            >
              <span className="neon-border-inner w-full flex items-center justify-center px-8 py-4">
                Rückruf direkt buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
