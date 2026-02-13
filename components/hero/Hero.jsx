import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaChevronDown } from "react-icons/fa";

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
    { id: 0, title: "1. Recruiting & Instant Onboarding", content: "KI-gestützte Vorauswahl von Talenten und automatisierte Einarbeitungsprozesse, die neue Mitarbeiter in Rekordzeit produktiv machen." },
    { id: 1, title: "2. E-Mail-Management & Führungs-Fokus", content: "Intelligente Sortierung und Entwurfserstellung für Ihre Inbox, damit Sie sich auf strategische Entscheidungen konzentrieren können." },
    { id: 2, title: "3. Marketing & KI-gestützte Lead-Gen", content: "Automatisierte Erstellung von Inhalten und präzises Targeting für messbar mehr qualifizierte Anfragen." },
    { id: 3, title: "4. Finanzen & Echtzeit-Controlling", content: "Automatisierte Buchhaltungsprozesse und KI-Analysen für tagesaktuelle finanzielle Transparenz." },
    { id: 4, title: "5. Kundenservice & Experten-Entlastung", content: "KI-Chatbots, die komplexe Anfragen vorqualifizieren und Standardaufgaben sofort lösen." },
    { id: 5, title: "6. Offertstellung & Sales-Backoffice", content: "Blitzschnelle Erstellung von Angeboten basierend auf Ihren Daten und CRM-Integration." },
    { id: 6, title: "7. Prozess-Automatisierung & Skalierung", content: "Verknüpfung Ihrer bestehenden Software-Tools zu einem nahtlosen, autonomen Workflow." },
    { id: 7, title: "8. Governance, Sicherheit & Datenschutz", content: "Sicherstellung, dass Ihre KI-Nutzung DSGVO-konform bleibt und Ihre Betriebsgeheimnisse geschützt sind." },
    { id: 8, title: "9. KI-Support & 1st Level Automatisierung", content: "100% KI-gesteuerter Erstkontakt für Ihre Kunden oder Mitarbeiter. Schnelle, präzise Antworten rund um die Uhr ohne menschliches Eingreifen." }
  ];

  const buttonBaseClass = `
    group relative flex items-center justify-center 
    w-full sm:w-80 h-[64px] rounded-full 
    text-white font-bold text-lg 
    transition-all duration-300 bg-[#020617]
    before:absolute before:inset-[-2px] before:rounded-full before:z-[-1]
    before:bg-gradient-to-r before:from-[#00f2fe] before:via-[#7d2ae8] before:to-[#00f2fe]
    before:bg-[length:200%_auto] hover:before:bg-right-center
    shadow-[0_0_20px_rgba(0,242,254,0.3)]
    hover:shadow-[0_0_35px_rgba(0,242,254,0.6)]
  `;

  return (
    <section 
      className="hero relative min-h-screen w-full overflow-hidden flex flex-col items-center" 
      style={{ background: "radial-gradient(circle at center, #0a1e3d 0%, #041026 40%, #020617 100%)" }}
      id="hero"
    >
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] animate-pulse opacity-20"><Image src={hero1} alt="" width={180} height={180} /></div>
        <div className="absolute top-[15%] right-[8%] animate-pulse opacity-15"><Image src={hero2} alt="" width={220} height={220} /></div>
        <div className="absolute bottom-[25%] left-[10%] animate-pulse opacity-10"><Image src={hero3} alt="" width={150} height={150} /></div>
        <div className="absolute top-[40%] right-[3%] animate-pulse opacity-20"><Image src={hero4} alt="" width={200} height={200} /></div>
        <div className="absolute bottom-[10%] right-[12%] animate-pulse opacity-15"><Image src={hero5} alt="" width={180} height={180} /></div>
      </div>

      <div className="container m-auto pt-[140px] pb-[100px] md:pt-[180px] xl:pt-[220px] relative z-10 text-center">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 m-auto">

          {/* HEADLINE */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white tracking-tight">
            Wir integrieren Corporate KI <br className="hidden md:block" /> in Ihr KMU
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#a855f7] to-[#00f2fe] drop-shadow-[0_0_15px_rgba(0,242,254,0.5)]">
              professionell, sicher und messbar.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl m-auto leading-relaxed">
            Wir helfen CEOs, Geschäftsleitungen und Verwaltungsräten, KI dort einzusetzen, wo Zeit verloren geht oder Kontrolle fehlt.
          </p>

          {/* CTA SECTION */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16">
            <Link href="/anfrage" legacyBehavior>
              <a className={buttonBaseClass}>
                <span className="flex items-center">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
                </span>
              </a>
            </Link>

            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className={buttonBaseClass}>
              <span className="flex items-center">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
              </span>
            </a>
          </div>

          {/* ACCORDION BOXEN MIT HELLEREM BORDER */}
          <div className="mt-32 max-w-3xl mx-auto space-y-4 text-left">
            {accordionItems.map((item) => (
              <div 
                key={item.id} 
                className={`relative group rounded-2xl transition-all duration-500 overflow-hidden border ${
                  open === item.id 
                    ? 'border-[#00f2fe] bg-white/15 shadow-[0_0_40px_rgba(0,242,254,0.15)]' 
                    : 'border-white/25 bg-[#020617]/50 hover:border-white/50 hover:bg-[#020617]/80'
                }`}
              >
                {/* Neon-Strich Seite */}
                <div className={`absolute left-0 top-0 bottom-0 w-[5px] transition-opacity duration-500 ${open === item.id ? 'opacity-100' : 'opacity-0'} bg-gradient-to-b from-[#00f2fe] to-[#a855f7]`} />
                
                <button 
                  onClick={() => toggle(item.id)} 
                  className="w-full p-6 flex justify-between items-center focus:outline-none"
                >
                  <h3 className={`text-lg sm:text-xl font-bold tracking-wide transition-colors duration-300 ${open === item.id ? 'text-[#00f2fe]' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  <div className={`p-2 rounded-full transition-all duration-300 ${open === item.id ? 'bg-[#00f2fe] rotate-180' : 'bg-white/10'}`}>
                    <FaChevronDown className={`w-4 h-4 transition-colors ${open === item.id ? 'text-[#020617]' : 'text-white'}`} />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${open === item.id ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-8 text-white/90 text-lg leading-relaxed border-t border-white/10 pt-5">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER ZITAT */}
          <div className="mt-32 flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#a855f7]/60 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
              <Image src={arthur} alt="Arthur Ergen" width={140} height={140} className="object-cover" />
            </div>
            <blockquote className="mt-8 max-w-2xl text-xl sm:text-2xl text-white italic font-light">
              &bdquo;In 4 Jahren gibt es zwei Arten von KMU: Diejenigen, die als Architekten ihre KI steuern und kontrollieren...&ldquo;
            </blockquote>
            <p className="mt-4 text-[#00f2fe] font-semibold uppercase tracking-[0.2em]">Arthur Ergen, CEO</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;