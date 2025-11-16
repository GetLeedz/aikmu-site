import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import hero1 from "../../public/images/hero/hero1.png";
import hero2 from "../../public/images/hero/hero2.png";
import hero3 from "../../public/images/hero/hero3.png";
import hero4 from "../../public/images/hero/hero4.png";
import hero5 from "../../public/images/hero/hero5.png";
import hero6 from "../../public/images/hero/hero6.png";

const Hero = () => (
  <section className="hero" id="hero">
    {/* schräg, pulsierende Frames */}
    <div className="hero-frame-1 animate-pulse">
      <Image src={hero1} objectFit="fill" alt="hero one" />
    </div>
    <div className="hero-frame-2 animate-pulse">
      <Image src={hero2} objectFit="fill" alt="hero two" />
    </div>
    <div className="hero-frame-3 animate-pulse">
      <Image src={hero3} objectFit="fill" alt="hero three" />
    </div>
    <div className="hero-frame-4 animate-pulse">
      <Image src={hero4} objectFit="fill" alt="hero four" />
    </div>
    <div className="hero-frame-5 animate-pulse">
      <Image src={hero5} objectFit="fill" alt="hero five" />
    </div>
    <div className="hero-frame-6 animate-pulse">
      <Image src={hero6} objectFit="fill" alt="hero six" />
    </div>

    <div className="container m-auto pt-[120px] pb-[40px] md:pt-[150px] md:pb-[80px] lg:pt-[190px] lg:pb-[120px] xl:pt-[230px] xl:pb-[180px] z-[1] relative hero-content">

      <div className="w-10/12 sm:w-7/12 text-center m-auto">
        {/* kleine Zeile oben */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-slate-200 mb-4">
          GetLeedz · More Leads
        </p>

        {/* Haupttitel */}
        <h1 className="heading-1 mt-3">
          <span className="block">GetLeedz. More Leads.</span>
          <span className="block text-[color:var(--color-secondary)]">
            Leadgenerierung, die neue Anfragen bringt.
          </span>
        </h1>

        {/* Untertitel */}
        <p className="mt-5">
          GetLeedz entwickelt für dein KMU starke Creatives und
          Performance-Kampagnen auf Meta, LinkedIn und Google – damit dein
          Vertrieb mit den richtigen Menschen spricht, statt dem Algorithmus
          hinterherzurennen.
        </p>

        {/* ein CTA-Button */}
<div className="flex flex-col sm:flex-row items-center justify-center gap-[10px] sm:gap-[30px] mt-[35px]">
  <Link href="/anfrage">
    <a className="btn__primary btn-gradient gap-[10px] border border-transparent">
      Anfrage für Lead-Kampagne senden
      <FaArrowRight />
    </a>
  </Link>
</div>

      </div>
    </div>
  </section>
);

export default Hero;
