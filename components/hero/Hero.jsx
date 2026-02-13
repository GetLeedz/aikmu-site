import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";

// Images - Pfade bitte prüfen
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

  // Neon Gradient Style für die Buttons
  const buttonBaseClass = `
    group relative flex items-center justify-center 
    w-full sm:w-80 h-[64px] rounded-full 
    text-white font-bold text-lg 
    transition-all duration-300 bg-[#020617]
    before:absolute before:inset-[-2px] before:rounded-full before:z-[-1]
    before:bg-gradient-to-r before:from-[#00f2fe] before:via-[#7d2ae8] before:to-[#00f2fe]
    before:bg-[length:200%_auto] hover:before:bg-right-center
    shadow-[0_0_20px_rgba(0,242,254,0.3),0_0_20px_rgba(125,42,232,0.2)]
    hover:shadow-[0_0_35px_rgba(0,242,254,0.5),0_0_35px_rgba(125,42,232,0.4)]
  `;

  return (
    <section className="hero relative min-h-screen w-full overflow-hidden bg-[#020617]" id="hero">
      
      {/* DER HINTERGRUND (Frames) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] animate-pulse opacity-50"><Image src={hero1} alt="" width={200} height={200} /></div>
        <div className="absolute top-[15%] right-[10%] animate-pulse opacity-40 transition-all duration-1000"><Image src={hero2} alt="" width={250} height={250} /></div>
        <div className="absolute bottom-[20%] left-[8%] animate-pulse opacity-30"><Image src={hero3} alt="" width={180} height={180} /></div>
        <div className="absolute top-[40%] right-[5%] animate-pulse opacity-50"><Image src={hero4} alt="" width={220} height={220} /></div>
        <div className="absolute bottom-[10%] right-[15%] animate-pulse opacity-40"><Image src={hero5} alt="" width={200} height={200} /></div>
        <div className="absolute bottom-[5%] left-[20%] animate-pulse opacity-20"><Image src={hero6} alt="" width={150} height={150} /></div>
      </div>

      <div className="container m-auto pt-[140px] pb-[100px] md:pt-[180px] xl:pt-[240px] relative z-10 hero-content">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 text-center m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white tracking-tight">
            Wir integrieren Corporate KI <br className="hidden md:block" /> in Ihr KMU
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#7d2ae8] to-[#00f2fe] drop-shadow-[0_0_15px_rgba(0,242,254,0.5)]">
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

          {/* CTA SECTION */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16">
            
            {/* Button 1 */}
            <Link href="/anfrage" legacyBehavior>
              <a className={buttonBaseClass}>
                <span className="flex items-center">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
                </span>
              </a>
            </Link>

            {/* Button 2 */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonBaseClass}
            >
              <span className="flex items-center">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
              </span>
            </a>
          </div>

          {/* ACCORDION SECTION */}
          <div className="mt-32 max-w-3xl mx-auto space-y-4 text-left">
            {accordionItems.map((item) => (
              <button key={item.id} onClick={() => toggle(item.id)} className="w-full text-left focus:outline-none group">
                <div className={`p-5 rounded-xl border transition-all duration-500 ${open === item.id ? 'bg-white/10 backdrop-blur-md border-[#00f2fe]/50 shadow-[0_0_20px_rgba(0,242,254,0.1)]' : 'bg-[#020617]/40 border-white/10 hover:border-white/20'}`}>
                  <h3 className="text-lg sm:text-xl font-semibold text-white flex justify-between items-center">
                    {item.title}
                    <span className={`transition-transform duration-300 ${open === item.id ? 'rotate-180 text-[#00f2fe]' : 'text-white/30'}`}>▾</span>
                  </h3>
                  {open === item.id && (
                    <div className="mt-3 text-gray-300 leading-relaxed animate-in fade-in slide-in-from-top-2">
                      <p>{item.content}</p>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* ZITAT */}
          <div className="mt-32 flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#7d2ae8]/50 shadow-[0_0_30px_rgba(125,42,232,0.3)]">
              <Image src={arthur} alt="Arthur Ergen" width={140} height={140} className="object-cover" />
            </div>
            <blockquote className="mt-8 max-w-2xl text-xl sm:text-2xl text-white leading-relaxed italic font-light">
              &bdquo;In 4 Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren und diejenigen, deren Team Befehle der KI ausführt.&ldquo;
            </blockquote>
            <p className="mt-4 text-base text-[#00f2fe] font-semibold uppercase tracking-widest">
              Arthur Ergen, CEO
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;