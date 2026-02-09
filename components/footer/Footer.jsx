import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { hasMarketingConsent, setMarketingConsent } from "../lib/consent";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // 1. Prüfen, ob wir im Browser sind
    if (typeof window !== "undefined") {
      // 2. Den Key direkt abfragen (wie in deiner consent.js definiert)
      const consent = localStorage.getItem("getleedz_consent_marketing");
      
      // Wenn noch nie eine Entscheidung getroffen wurde (null), Banner zeigen
      if (consent === null) {
        setShowBanner(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setMarketingConsent(true);
    setShowBanner(false);
    if (typeof window !== "undefined") {
      window.location.reload(); 
    }
  };

  const handleDecline = () => {
    setMarketingConsent(false);
    setShowBanner(false);
  };

  return (
    <>
      <footer className="bg-[#020617] pt-14 pb-16 mt-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-12">

          {/* Rechtliches */}
          <div className="flex flex-wrap justify-center gap-8 text-base font-medium">
            <Link href="/impressum" className="footer-link text-white">
              Impressum
            </Link>
            <span className="opacity-40 text-white">·</span>
            <Link href="/datenschutz" className="footer-link text-white">
              Datenschutz
            </Link>
          </div>

          {/* Positionierung (aus deinem Original-Code) */}
          <div className="text-center footer-text max-w-xl text-white">
            KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –<br />
            klar geführt, verantwortungsvoll umgesetzt.
            <br />
            <div className="flex flex-col items-center mt-4">
              <span className="text-3xl mb-1">🇨🇭</span>
              <span className="opacity-100 inline-block font-medium">Swiss prompted.</span>
            </div>
          </div>

          {/* Adresse & Kontakt (exakt wie im Screenshot) */}
          <div className="text-center footer-text flex flex-col gap-3 text-white">
            <div>4102 Binningen, Schweiz</div>

            <a href="tel:+41615251810" className="footer-contact">
              Tel. +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
            </a>

            <a href="mailto:info@aikmu.ch" className="footer-contact">
              info@aikmu.ch
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm opacity-60 text-white">
            © 2026 AiKMU. Alle Rechte vorbehalten.
          </p>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4 pt-4">
            <span className="text-sm tracking-widest opacity-70 text-white uppercase">
              Folgen Sie uns
            </span>

            <div className="flex gap-8">
              <a href="https://www.instagram.com/aikmu.ch" target="_blank" rel="noopener noreferrer" className="footer-social">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587440278928" target="_blank" rel="noopener noreferrer" className="footer-social">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/aikmu/" target="_blank" rel="noopener noreferrer" className="footer-social">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </footer>

      {/* Der Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-6 left-6 right-6 md:right-8 md:left-auto md:max-w-sm z-[100] animate-fadeInUp">
          <div className="bg-[#050816]/95 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <h3 className="text-xs font-bold tracking-widest uppercase text-white">Privacy Settings</h3>
            </div>
            <p className="text-[11px] text-white/60 mb-6 leading-relaxed">
              Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren. Durch Klicken auf &quot;Akzeptieren&quot; stimmen Sie der Verwendung zu.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 py-3 px-4 rounded-xl bg-white text-black text-[10px] font-bold hover:bg-blue-400 transition-all duration-300"
              >
                AKZEPTIEREN
              </button>
              <button 
                onClick={handleDecline}
                className="flex-1 py-3 px-4 rounded-xl border border-white/10 text-white text-[10px] font-bold hover:bg-white/5 transition-all duration-300"
              >
                ABLEHNEN
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;