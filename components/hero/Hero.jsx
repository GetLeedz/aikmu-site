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

import arthur from "../../public/images/arthurergen_square_tiny.png";

const Hero = () => {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="hero relative overflow-hidden" id="hero">
      {/* Decorative Frames - Opacity leicht angepasst für den neuen Hintergrund */}
      <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
      <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
      <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
      <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
      <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
      <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>

      {/* CONTENT */}
      <div className="container m-auto pt-[140px] pb-[100px] md:pt-[180px] xl:pt-[240px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-10/12 lg:w-9/12 text-center m-auto">

          {/* HEADLINE: Optimiert auf Neon-Türkis & Spacing */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white tracking-tight">
            Wir integrieren Corporate KI <br className="hidden md:block" /> in Ihr KMU
            <span className="block mt-3 text-[#00f2fe] drop-shadow-[0_0_15px_rgba(0,242,254,0.4)]">
              professionell, sicher und messbar.
            </span>
          </h1>

          {/* SUBLINE: Kontrast verbessert */}
          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-3xl m-auto leading-relaxed">
            Wir helfen CEOs, Geschäftsleitungen und Verwaltungsräten,
            KI dort einzusetzen, wo Zeit verloren geht,
            Umsatz liegen bleibt oder Kontrolle fehlt – 
            <span className="text-white font-medium italic"> strategisch geführt, professionell umgesetzt.</span>
          </p>

          {/* CTA: Jetzt nebeneinander auf Desktop & Neon-Style */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <Link href="/anfrage">
              <a className="group neon-border w-full sm:w-80">
                <span className="neon-border-inner flex justify-center items-center py-4 text-lg">
                  KI-Potenzial besprechen
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group neon-border w-full sm:w-80"
            >
              <span className="neon-border-inner flex justify-center items-center py-4 text-lg">
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* INTRO ACCORDION */}
          <p className="mt-20 text-lg text-gray-300 text-center font-medium">
            Die zentralen Bereiche, in denen KI heute den grössten
            wirtschaftlichen Hebel für KMUs bringt:
          </p>

          {/* ACCORDION: Mit Glass-Effekt Design */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-left">
            {[
              { id: 0, title: "1. Recruiting & Instant Onboarding", content: "Wertvolle Management-Zeit fliesst oft in die Sichtung unpassender Dossiers. KI filtert CVs nach echtem Match und übernimmt das Onboarding neuer Talente per interaktivem Wissens-Chat." },
              { id: 1, title: "2. E-Mail-Management & Führungs-Fokus", content: "Gewinnen Sie bis zu 5 Stunden pro Woche zurück. KI priorisiert Ihren Posteingang nach strategischer Relevanz und formuliert komplexe Antwortentwürfe vor." },
              { id: 2, title: "3. Marketing & KI-gestützte Lead-Gen", content: "Schluss mit vagen Kampagnen. KI identifiziert High-Value-Leads und skaliert personalisierten Content, der Ihre Zielgruppe dort abholt, wo der Schmerz sitzt." },
              { id: 3, title: "4. Finanzen & Echtzeit-Controlling", content: "Verwandeln Sie trockene Zahlen in strategische Insights. KI liefert Prognosen, erkennt Anomalien in der Buchhaltung und erstellt Berichte für den Verwaltungsrat auf Knopfdruck." },
              { id: 4, title: "5. Kundenservice & Experten-Entlastung", content: "Ihre teuersten Experten sollten nicht 80% ihrer Zeit Standardfragen beantworten. KI-Agenten lösen Kundenanfragen sofort und mit dem Wissen Ihres gesamten Unternehmens." },
              { id: 5, title: "6. Offertstellung & Sales-Backoffice", content: "Wer schneller antwortet, gewinnt. KI erstellt präzise Offerten und technische Dokumentationen basierend auf Ihren Daten – in Minuten statt Tagen." },
              { id: 6, title: "7. Prozess-Automatisierung & Skalierung", content: "Skalieren Sie Ihren Umsatz, ohne die Fixkosten durch Personal linear zu steigern. Wir automatisieren repetitive Workflows direkt in Ihren bestehenden Systemen." },
              { id: 7, title: "8. Governance, Sicherheit & Datenschutz", content: "Schützen Sie Ihr geistiges Eigentum. Wir implementieren sichere KI-Frameworks, die Compliance-Anforderungen (CH/EU) erfüllen und Wildwuchs im Team verhindern." }
            ].map((item) => (
              <button key={item.id} onClick={() => toggle(item.id)} className="w-full text-left transition-all duration-300">
                <div className={`p-5 rounded-xl border border-white/10 transition-all ${open === item.id ? 'bg-white/10 backdrop-blur-md' : 'bg-[#020617]/40 hover:bg-white/5'}`}>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  {open === item.id && (
                    <div className="mt-3 text-gray-200 leading-relaxed animate-fadeIn">
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

          {/* SEO - Hidden */}
          <div className="sr-only">
            <p>AiKMU integriert Corporate KI für KMUs. Fokus auf Governance, Effizienz und Sicherheit.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;