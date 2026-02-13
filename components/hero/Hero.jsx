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
import arthur from "../../public/images/arthurergen_square_tiny.png";

const Hero = () => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  const accordionItems = [
    { id: 0, title: "1. Recruiting & Instant Onboarding", content: "KI-gestützte Vorauswahl von Talenten und automatisierte Einarbeitungsprozesse." },
    { id: 1, title: "2. E-Mail-Management & Führungs-Fokus", content: "Intelligente Inbox-Steuerung für maximale Zeitersparnis." },
    { id: 2, title: "3. Marketing & KI-gestützte Lead-Gen", content: "Messbar mehr qualifizierte Anfragen durch automatisierte Content-Strategien." },
    { id: 3, title: "4. Finanzen & Echtzeit-Controlling", content: "Tagesaktuelle Transparenz durch KI-gestützte Buchhaltung." },
    { id: 4, title: "5. Kundenservice & Experten-Entlastung", content: "Vorqualifizierung komplexer Anfragen durch intelligente Systeme." },
    { id: 5, title: "6. Offertstellung & Sales-Backoffice", content: "Blitzschnelle Angebotserstellung mit CRM-Anbindung." },
    { id: 6, title: "7. Prozess-Automatisierung & Skalierung", content: "Nahtlose Workflows zwischen all Ihren Software-Tools." },
    { id: 7, title: "8. Governance, Sicherheit & Datenschutz", content: "DSGVO-konformer Schutz Ihrer Betriebsgeheimnisse." },
    { id: 8, title: "9. KI-Support & 1st Level Automatisierung", content: "100% KI-gesteuerter Erstkontakt rund um die Uhr – schnell und präzise." }
  ];

  return (
    <section className="hero-spotlight-bg relative min-h-screen w-full overflow-hidden flex flex-col items-center" id="hero">
      
      {/* Floating Background Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] animate-pulse opacity-20"><Image src={hero1} alt="" width={180} height={180} /></div>
        <div className="absolute top-[15%] right-[8%] animate-pulse opacity-15"><Image src={hero2} alt="" width={220} height={220} /></div>
        <div className="absolute bottom-[25%] left-[10%] animate-pulse opacity-10"><Image src={hero3} alt="" width={150} height={150} /></div>
        <div className="absolute top-[40%] right-[3%] animate-pulse opacity-20"><Image src={hero4} alt="" width={200} height={200} /></div>
        <div className="absolute bottom-[10%] right-[12%] animate-pulse opacity-15"><Image src={hero5} alt="" width={180} height={180} /></div>
      </div>

      <div className="container m-auto pt-[140px] pb-[100px] md:pt-[180px] xl:pt-[220px] relative z-10 text-center">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 m-auto">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white tracking-tight">
            Wir integrieren Corporate KI <br className="hidden md:block" /> in Ihr KMU
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#a855f7] to-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.6)]">
              professionell, sicher und messbar.
            </span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-gray-200 max-w-3xl m-auto leading-relaxed">
            Wir helfen CEOs und Geschäftsleitungen, KI dort einzusetzen, wo Zeit verloren geht.
          </p>

          {/* Buttons mit Klassen aus globals.css */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16">
            <Link href="/anfrage" legacyBehavior>
              <a className="btn-neon-gradient">
                <span className="flex items-center">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
                </span>
              </a>
            </Link>

            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="btn-neon-gradient">
              <span className="flex items-center">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-3 transition-all duration-300 group-hover:translate-x-3 group-hover:text-[#00f2fe]" />
              </span>
            </a>
          </div>

          {/* Accordion */}
          <div className="mt-32 max-w-3xl mx-auto space-y-4 text-left">
            {accordionItems.map((item) => (
              <div 
                key={item.id} 
                className={`accordion-box ${open === item.id ? 'accordion-box-active' : 'accordion-box-inactive'}`}
              >
                <div className={`absolute left-0 top-0 bottom-0 w-[5px] transition-opacity duration-500 ${open === item.id ? 'opacity-100' : 'opacity-0'} bg-gradient-to-b from-[#00f2fe] to-[#a855f7]`} />
                
                <button onClick={() => toggle(item.id)} className="w-full p-6 flex justify-between items-center group">
                  <h3 className={`text-lg sm:text-xl font-bold transition-colors ${open === item.id ? 'text-[#00f2fe]' : 'text-white'}`}>
                    {item.title}
                  </h3>
                  <div className={`p-2 rounded-full transition-all duration-300 ${open === item.id ? 'bg-[#00f2fe] rotate-180' : 'bg-white/10'}`}>
                    <FaChevronDown className={`w-4 h-4 ${open === item.id ? 'text-[#020617]' : 'text-white'}`} />
                  </div>
                </button>
                
                <div className={`transition-all duration-500 ease-in-out ${open === item.id ? 'max-h-[300px] opacity-100' : 'max-h-0'}`}>
                  <div className="px-6 pb-8 text-white text-lg leading-relaxed border-t border-white/10 pt-5">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Zitat */}
          <div className="mt-32 flex flex-col items-center">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden border-2 border-[#a855f7]/60 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <Image src={arthur} alt="Arthur Ergen" width={140} height={140} className="object-cover" />
            </div>
            <p className="mt-8 max-w-2xl text-xl text-white italic">&bdquo;In 4 Jahren gibt es zwei Arten von KMU...&ldquo;</p>
            <p className="mt-4 text-[#00f2fe] font-semibold uppercase tracking-widest">Arthur Ergen, CEO</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;