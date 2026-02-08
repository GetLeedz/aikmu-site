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

      {/* CONTENT */}
      <div className="container m-auto pt-[120px] pb-[90px] md:pt-[160px] xl:pt-[220px] relative z-[1] hero-content">
        <div className="w-11/12 md:w-8/12 text-center m-auto">

          {/* HEADLINE */}
          <h1
            className="text-[2.1rem] sm:text-5xl lg:text-6xl font-semibold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]"
            style={{ lineHeight: 1.2 }}
          >
            AiKMU macht KI
            <span className="block">für Entscheider sofort nutzbar</span>
            <span className="block mt-1 text-[#7CFF00]">
              messbar, sicher, wirksam
            </span>
          </h1>

          {/* SUBLINE */}
          <p className="mt-6 text-lg sm:text-xl text-white leading-relaxed drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]">
            Wir helfen CEOs, Geschäftsleitungen und Verwaltungsräten,
            KI dort einzusetzen, wo Zeit verloren geht, Kosten entstehen
            oder Wachstum gebremst wird – strategisch begleitet,
            sauber umgesetzt.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center gap-4 mt-10">
            <Link href="/anfrage">
              <a className="group neon-border w-full max-w-[360px]">
                <span className="neon-border-inner flex justify-center items-center py-3 text-base sm:text-lg">
                  KI-Potenzial besprechen
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
                Direktes Gespräch buchen
                <FaCalendarAlt className="ml-2 opacity-80" />
              </span>
            </a>
          </div>

          {/* EINLEITUNG */}
          <p className="mt-6 text-base sm:text-lg text-white leading-relaxed drop-shadow text-center">
            Typische Situationen, in denen KI für KMUs heute den grössten
            wirtschaftlichen Hebel bringt:
          </p>

          {/* ACCORDION – ERGEBNISORIENTIERT */}
          <div className="mt-4 max-w-3xl mx-auto space-y-4 text-left">

            {/* Fachkräftemangel / Onboarding */}
            <button onClick={() => toggle(0)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Neue Mitarbeitende kosten Sie zu viel Zeit
                </h3>
                {open === 0 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Neue Mitarbeitende stellen immer wieder dieselben Fragen,
                    Prozesse werden mündlich erklärt, Wissen geht verloren.
                    <br />
                    <strong>AiKMU-Lösung:</strong> Ein KI-Onboarding-System,
                    das interne Dokumente, Abläufe und Regeln per Chat erklärt.
                    <br />
                    <strong>Ihr Vorteil:</strong> Schnellere Einarbeitung,
                    weniger Abhängigkeit vom Chef,
                    produktive Mitarbeitende ab Woche eins.
                  </p>
                )}
              </div>
            </button>

            {/* Offerten & Ausschreibungen */}
            <button onClick={() => toggle(1)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Offerten dauern zu lange und blockieren Umsatz
                </h3>
                {open === 1 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Skizzen, Protokolle oder E-Mails müssen manuell
                    in Offerten übersetzt werden.
                    <br />
                    <strong>AiKMU-Lösung:</strong> KI-Systeme, die aus Fotos,
                    Texten oder Notizen automatisch strukturierte Offerten
                    für ERP oder CRM vorbereiten.
                    <br />
                    <strong>Ihr Vorteil:</strong> Offerten in Minuten statt Stunden,
                    höhere Abschlussquote, weniger Stress im Team.
                  </p>
                )}
              </div>
            </button>

            {/* E-Mail-Flut */}
            <button onClick={() => toggle(2)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Die E-Mail-Flut frisst Ihre Führungszeit
                </h3>
                {open === 2 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Wichtige Mails gehen unter, Termine werden hin- und hergeschoben,
                    Entscheidungen verzögern sich.
                    <br />
                    <strong>AiKMU-Lösung:</strong> Intelligente KI-Postfächer,
                    die priorisieren, Entwürfe vorbereiten
                    und Termine vorschlagen.
                    <br />
                    <strong>Ihr Vorteil:</strong> Mehr Fokus auf Führung,
                    weniger operative Ablenkung,
                    5–10 Stunden Zeitgewinn pro Woche.
                  </p>
                )}
              </div>
            </button>

            {/* Governance */}
            <button onClick={() => toggle(3)} className="w-full text-left">
              <div className="bg-[#020617]/95 rounded-xl p-5 border border-white/10">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  KI soll helfen – aber nicht zum Risiko werden
                </h3>
                {open === 3 && (
                  <p className="mt-3 text-base sm:text-lg text-white leading-relaxed">
                    Verwaltungsräte und Geschäftsleitungen sorgen sich
                    um Datenschutz, Kontrolle und Haftung.
                    <br />
                    <strong>AiKMU-Lösung:</strong> Corporate-konforme KI
                    mit klarer Governance, Zugriffsrechten
                    und auf Wunsch eigener Infrastruktur.
                    <br />
                    <strong>Ihr Vorteil:</strong> Rechtssicherheit,
                    Vertrauen im Management,
                    nachhaltige KI-Nutzung ohne Bauchschmerzen.
                  </p>
                )}
              </div>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
