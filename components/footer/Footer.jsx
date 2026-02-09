import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { hasMarketingConsent, setMarketingConsent } from "../lib/consent";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("getleedz_consent_marketing");
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

          {/* Positionierung */}
          <div className="text-center footer-text max-w-xl text-white">
            KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –<br />
            klar geführt, verantwortungsvoll umgesetzt.
            <br />
            <div className="flex flex-col items-center mt-4">
              <span className="text-3xl mb-1">🇨🇭</span>
              <span className="opacity-100 inline-block font-medium">Swiss prompted.</span>
            </div>
          </div>

          {/* Adresse & Kontakt */}
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

      {/* Dein gewünschter Neon-Banner in der Mitte */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4 animate-fadeInUp">
          <div className="max-w-4xl mx-auto bg-[#050816]/90 backdrop-blur-xl border border-cyan-400/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.2)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-1">Cookies für mehr Performance.</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Wir verwenden Cookies, um deine Nutzungserfahrung zu verbessern und unsere Kampagnen auszuwerten. Mehr Infos in unserer Datenschutzerklärung.
              </p>
            </div>
            
            <button 
              onClick={handleAccept}
              className="whitespace-nowrap px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-bold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/20"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;