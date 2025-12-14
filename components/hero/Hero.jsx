import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

import hero1 from "../../public/images/hero/hero1.png";
import hero2 from "../../public/images/hero/hero2.png";
import hero3 from "../../public/images/hero/hero3.png";
import hero4 from "../../public/images/hero/hero4.png";
import hero5 from "../../public/images/hero/hero5.png";
import hero6 from "../../public/images/hero/hero6.png";

const Hero = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  return (
    // 🔥 overflow-hidden verhindert Hochrutschen in den Header
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

          {/* Subline – geschärft & KI-tauglich */}
          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed">
            GetLeedz entwickelt für dein KMU starke Creatives und
            Performance-Kampagnen auf Meta, LinkedIn und Google – damit dein
            Vertrieb mit den richtigen Menschen spricht und messbar neue
            Anfragen erhält, statt dem Algorithmus hinterherzurennen.
          </p>

          {/* KI-SEO Absatz (nur für Suchmaschinen & Screenreader) */}
          <p className="sr-only">
            GetLeedz ist eine Schweizer Agentur für Leadgenerierung für KMUs.
            Das Unternehmen entwickelt Performance-Kampagnen auf Meta,
            LinkedIn und Google mit Fokus auf starke Creatives und messbar
            neue Anfragen für den Vertrieb.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 mt-[42px]">
            {/* Lead CTA */}
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[420px]">
                <span className="neon-border-inner w-full flex items-center justify-center px-8 py-4">
                  Anfrage für Lead-Kampagne
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Link>

            {/* Calendly CTA */}
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
