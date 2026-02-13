import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { setMarketingConsent } from "../lib/consent";

const Footer = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const consent = localStorage.getItem("getleedz_consent_marketing");
      if (consent === null) setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setMarketingConsent(true);
    setShowBanner(false);
    if (typeof window !== "undefined") window.location.reload(); 
  };

  return (
    <>
      <footer className="footer-main">
        {/* Neon-Trennlinie aus der globals.css */}
        <div className="footer-glow-line" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          {/* 1. LOGO SECTION - Jetzt groß & zentriert */}
          <div className="mb-10 transition-transform duration-500 hover:scale-105">
            <Link href="/">
              <Image 
                src="/logo-aikmu-transparent_white_transparent.png" 
                alt="AiKMU Logo" 
                width={200} 
                height={75} 
                className="mx-auto brightness-125"
                priority
              />
            </Link>
          </div>

          {/* 2. SLOGAN & SWISS BADGE */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau – <br className="hidden md:block" />
            klar geführt, verantwortungsvoll umgesetzt.
          </p>

          <div className="swiss-badge-centered">
            <span className="text-2xl">🇨🇭</span>
            <span className="text-[12px] uppercase tracking-[0.2em] font-bold">Swiss prompted.</span>
          </div>

          {/* 3. KONTAKT & ADRESSE (Zentriert mit Mouse-over) */}
          <div className="flex flex-col gap-2 mb-12">
            <p className="text-white/80 font-medium text-lg">4102 Binningen, Schweiz</p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-2">
              <a href="tel:+41615251810" className="footer-link-centered text-base">
                Tel. +41 61 525 18 10
              </a>
              <a href="mailto:info@aikmu.ch" className="footer-link-centered text-base">
                info@aikmu.ch
              </a>
            </div>
          </div>

          {/* 4. RECHTLICHES (Zentriert & Mouse-over) */}
          <div className="flex justify-center gap-10 mb-16 border-t border-white/5 pt-10">
            <Link href="/impressum" className="footer-link-centered font-semibold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="footer-link-centered font-semibold">
              Datenschutz
            </Link>
          </div>

          {/* 5. SOCIAL MEDIA (Größer, heller, zentriert) */}
          <div className="space-y-6 mb-16">
            <span className="text-[11px] uppercase tracking-[0.4em] text-white/30 font-bold">Folgen Sie uns</span>
            <div className="flex justify-center gap-8">
              <a href="https://www.instagram.com/aikmu.ch" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587440278928" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/aikmu/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 6. COPYRIGHT */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-[10px] text-white/20 uppercase tracking-[0.5em]">
              © 2026 AiKMU. Precision & Intelligence.
            </p>
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER (Passend zum neuen Style) */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4 animate-fadeInUp">
          <div className="max-w-2xl mx-auto bg-[#020617]/95 backdrop-blur-3xl border border-white/10 p-8 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center">
            <h3 className="text-white font-bold text-xl mb-2">Intelligence & Cookies.</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Wir optimieren unsere KI-Services stetig für Sie. <br /> Alles im Sinne von Swiss Quality.
            </p>
            <button onClick={handleAccept} className="btn-submit !mt-0 !w-auto px-16 py-4 text-base">
              Akzeptieren
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;