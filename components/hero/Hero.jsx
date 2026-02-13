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
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/getleedz";

  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  const accordionItems = [
    {
      id: 0,
      title: "1. Recruiting & Instant Onboarding",
      content: `
Case: 180 Bewerbungen. 4 Monate Suche. HR am Limit.

Unsere Lösung:
KI filtert, bewertet und priorisiert Bewerbungen automatisch. 
Onboarding-Prozesse laufen strukturiert und digitalisiert.

Was es bringt:
• Vorauswahl bis zu 20x schneller  
• 60–80% weniger HR-Zeit  
• Produktivität in Tagen statt Wochen  
• Fehlbesetzungen drastisch reduziert  

Recruiting wird vom Engpass zum Skalierungshebel.
      `,
    },
    {
      id: 1,
      title: "2. E-Mail-Management & Führungs-Fokus",
      content: `
Case: 2–3 Stunden täglich im Posteingang. Strategie bleibt liegen.

Unsere Lösung:
KI priorisiert, beantwortet Standardanfragen und fasst Inhalte zusammen.

Was es bringt:
• 70% weniger operative Inbox-Zeit  
• Bis zu 15 Stunden pro Woche frei  
• Kein Informationsverlust  
• Kein Chaos bei Abwesenheit  

Sie führen wieder. Sie verwalten nicht mehr.
      `,
    },
    {
      id: 2,
      title: "3. Marketing & KI-gestützte Lead-Generierung",
      content: `
Case: Hoher Marketingaufwand. Unklarer ROI.

Unsere Lösung:
KI analysiert Daten, erstellt Varianten und optimiert Kampagnen in Echtzeit.

Was es bringt:
• Kampagnen bis zu 3x effizienter  
• 30–50% geringere Lead-Kosten  
• Skalierung ohne zusätzliches Marketingpersonal  

Marketing wird berechenbar.
      `,
    },
    {
      id: 3,
      title: "4. Finanzen & Echtzeit-Controlling",
      content: `
Case: Monatsabschlüsse kommen verspätet. Entscheidungen basieren auf alten Zahlen.

Unsere Lösung:
KI analysiert Cashflow, Forecasts und Abweichungen in Echtzeit.

Was es bringt:
• Tagesaktuelle Liquiditätsübersicht  
• 80% weniger manuelle Controlling-Arbeit  
• Frühwarnsystem für Risiken  

Sie steuern mit Zahlen. Nicht mit Hoffnung.
      `,
    },
    {
      id: 4,
      title: "5. Kundenservice & Experten-Entlastung",
      content: `
Case: Hochqualifizierte Mitarbeitende beantworten Standardfragen.

Unsere Lösung:
KI übernimmt 1st-Level-Kommunikation und qualifiziert Anfragen vor.

Was es bringt:
• 60–90% Entlastung im Support  
• Schnellere Reaktionszeiten  
• Experten arbeiten an Wertschöpfung  

Sie zahlen keine Premium-Löhne für Routine.
      `,
    },
    {
      id: 5,
      title: "6. Offertstellung & Sales-Backoffice",
      content: `
Case: Angebote dauern Tage. Leads gehen verloren.

Unsere Lösung:
KI generiert Offerten automatisch aus CRM-Daten und verfolgt Leads.

Was es bringt:
• Angebote bis zu 10x schneller  
• Weniger Kalkulationsfehler  
• Höhere Abschlussquote  

Geschwindigkeit gewinnt Märkte.
      `,
    },
    {
      id: 6,
      title: "7. Prozess-Automatisierung & Skalierung",
      content: `
Case: Wachstum erhöht administrativen Aufwand.

Unsere Lösung:
KI verbindet Systeme und automatisiert Workflows vollständig.

Was es bringt:
• 40–70% weniger Prozesskosten  
• Skalierung ohne proportionalen Personalaufbau  
• Weniger Fehler  

Sie wachsen. Ohne die Kosten zu verdoppeln.
      `,
    },
    {
      id: 7,
      title: "8. Governance, Sicherheit & Datenschutz",
      content: `
Case: KI wird genutzt – aber ohne Kontrolle.

Unsere Lösung:
Corporate-KI-Struktur mit Governance, Zugriffskontrolle und Compliance.

Was es bringt:
• Schutz sensibler Daten  
• Reduziertes Haftungsrisiko  
• DSGVO-konforme Architektur  

Innovation ohne Kontrollverlust.
      `,
    },
    {
      id: 8,
      title: "9. KI-Support & 1st Level Automatisierung",
      content: `
Case: Support läuft von 08:00–17:00. Danach warten Kunden.

Unsere Lösung:
KI beantwortet Anfragen 24/7 – ohne Ferien, Krankheit oder Backup.

Was es bringt:
• 24/7 Verfügbarkeit  
• Reaktionszeit in Sekunden  
• Ein Bruchteil der Personalkosten  
• Skalierbar auf 1 oder 10'000 Anfragen gleichzeitig  

Eine KI braucht keinen Ersatz.
      `,
    },
  ];

  return (
    <section
      className="hero-spotlight-bg relative min-h-screen w-full overflow-hidden flex flex-col items-center"
      id="hero"
    >
      <div className="container m-auto pt-[160px] pb-[120px] relative z-10 text-center">
        <div className="w-11/12 md:w-9/12 m-auto">

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.15] text-white">
            Wir integrieren Corporate KI in Ihr KMU
            <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#a855f7] to-[#00f2fe]">
              professionell, sicher und messbar.
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-200 max-w-3xl m-auto">
            Wir helfen CEOs und Verwaltungsräten, KI dort einzusetzen,
            wo heute Zeit, Geld und Energie verloren gehen.
          </p>

          <div className="home-cta-row">
            <Link href="/anfrage">
              <a className="btn-neon-gradient group">
                KI-Potenzial besprechen
                <FaArrowRight className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
              </a>
            </Link>

            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-gradient secondary group"
            >
              Direktes Gespräch buchen
              <FaCalendarAlt className="ml-3 transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>

          <div className="mt-32 max-w-3xl mx-auto space-y-4 text-left">
            {accordionItems.map((item) => (
              <div key={item.id} className="accordion-box">
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full p-6 flex justify-between items-center group"
                >
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      open === item.id ? "rotate-180 text-[#00f2fe]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-500 ${
                    open === item.id ? "max-h-[600px] p-6" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <div className="text-white whitespace-pre-line leading-relaxed">
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
