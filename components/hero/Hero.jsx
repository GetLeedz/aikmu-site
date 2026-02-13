import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

// Images
import hero1 from "../../public/images/hero/hero1.png";
import hero2 from "../../public/images/hero/hero2.png";
import hero3 from "../../public/images/hero/hero3.png";
import hero4 from "../../public/images/hero/hero4.png";
import hero5 from "../../public/images/hero/hero5.png";
import hero6 from "../../public/images/hero/hero6.png";
import arthur from "../../public/images/arthurergen_square_tiny.png";

const Hero = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  const accordionItems = [
    { id: 0, title: "1. Recruiting & Instant Onboarding", content: "..." },
    { id: 1, title: "2. E-Mail-Management & Führungs-Fokus", content: "..." },
    { id: 2, title: "3. Marketing & KI-gestützte Lead-Gen", content: "..." },
    { id: 3, title: "4. Finanzen & Echtzeit-Controlling", content: "..." },
    { id: 4, title: "5. Kundenservice & Experten-Entlastung", content: "..." },
    { id: 5, title: "6. Offertstellung & Sales-Backoffice", content: "..." },
    { id: 6, title: "7. Prozess-Automatisierung & Skalierung", content: "..." },
    { id: 7, title: "8. Governance, Sicherheit & Datenschutz", content: "..." }
  ];

  return (
    <section className="hero relative overflow-hidden bg-[#020617]" id="hero">
      {/* Decorative Frames */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      <div className="container m-auto pt-[140px] pb-[100px] md:pt-[180px] xl:pt-[240px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 text-center m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white tracking-tight">
            Wir integrieren Corporate KI <br className="hidden md:block" /> in Ihr KMU
            <span className="block mt-3 text-[#00f2fe] drop-shadow-[0_0_15px_rgba(0,242,254,0.6)]">
              professionell, sicher und messbar.
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl m-auto leading-relaxed">
            Wir helfen CEOs, Geschäftsleitungen und Verwaltungsräten,
            KI dort einzusetzen, wo Zeit verloren geht,
            Umsatz liegen bleibt oder Kontrolle fehlt – 
            <span className="text-white font-medium italic"> strategisch geführt, professionell umgesetzt.</span>
          </p>

          {/* CTA SECTION - FIXED BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            
            {/* Button 1: Neon Primary */}
            <Link href="/anfrage" legacyBehavior>
              <a className="group relative flex items-center justify-center w-full sm:w-80 h-[64px] rounded-full border-2 border-[#00f2fe] text-white font-bold text-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] bg-transparent">
                <span className="relative z-10 flex items-center">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#00f2fe]" />
                </span>
                <div className="absolute inset-0 bg-[#0a1128] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Link>

            {/* Button 2: Secondary with Hover-Neon */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center w-full sm:w-80 h-[64px] rounded-full border-2 border-white/30 hover:border-[#00f2fe] text-white font-bold text-lg transition-all duration-300 bg-transparent overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:text-[#00f2fe]" />
              </span>
              <div className="absolute inset-0 bg-[#00f2fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* INTRO ACCORDION */}
          <p className="mt-20 text-lg text-gray-300 text-center font-medium">
            Die zentralen Bereiche, in denen KI heute den grössten
            wirtschaftlichen Hebel für KMUs bringt:
          </p>

          {/* ACCORDION */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-left">
            {accordionItems.map((item) => (
              <button key={item.id} onClick={() => toggle(item.id)} className="w-full text-left transition-all duration-300 focus:outline-none">
                <div className={`p-5 rounded-xl border transition-all duration-300 ${open === item.id ? 'bg-white/10 backdrop-blur-md border-[#00f2fe]/50 shadow-[0_0_15px_rgba(0,242,254,0.1)]' : 'bg-[#020617]/40 border-white/10 hover:bg-white/5'}`}>
                  <h3 className="text-lg sm:text-xl font-semibold text-white flex justify-between items-center">
                    {item.title}
                    <span className={`transition-transform duration-300 ${open === item.id ? 'rotate-180 text-[#00f2fe]' : 'text-white/30'}`}>▾</span>
                  </h3>
                  {open === item.id && (
                    <div className="mt-3 text-gray-200 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* PERSON / ZITAT */}
          <div className="mt-24 flex flex-col items-center text-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#00f2fe]/30 shadow-[0_0_20px_rgba(0,242,254,0.2)]">
              <Image
                src={arthur}
                alt="Arthur Ergen"
                width={140}
                height={140}
                className="object-cover"
              />
            </div>

            <blockquote className="mt-8 max-w-2xl text-xl sm:text-2xl text-white leading-relaxed italic font-light">
              &bdquo;In 4 Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren und diejenigen, deren Team Befehle der KI ausführt.&ldquo;
            </blockquote>

            <p className="mt-4 text-base text-[#00f2fe] font-semibold uppercase tracking-wider">
              Arthur Ergen, CEO
            </p>
          </div>

          <div className="sr-only">
            <p>AiKMU integriert Corporate KI für KMUs. Fokus auf Governance, Effizienz und Sicherheit.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;