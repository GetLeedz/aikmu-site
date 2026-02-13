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
        {/* Glow Line oben */}
        <div className="footer-glow-line" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          
          {/* LOGO - Pfad korrigiert auf /images/ + Dateiname aus deinem Screenshot */}
          <div className="mb-10 transition-transform duration-500 hover:scale-105">
            <Link href="/">
              <a>
                <Image 
                  src="/images/logo-aikmu-transparent_white_transparent_footer.png" 
                  alt="AiKMU Logo" 
                  width={240} 
                  height={80} 
                  className="brightness-125 object-contain"
                  priority
                />
              </a>
            </Link>
          </div>

          {/* SLOGAN */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau – <br className="hidden md:block" />
            klar geführt, verantwortungsvoll umgesetzt.
          </p>

          {/* SWISS BADGE */}
          <div className="swiss-badge-centered mb-12">
            <span className="text-2xl">🇨🇭</span>
            <span className="text-[12px] uppercase tracking-[0.2em] font-bold">Swiss prompted.</span>
          </div>

          {/* KONTAKT INFORMATIONEN */}
          <div className="flex flex-col items-center gap-2 mb-12">
            <p className="text-white/80 font-semibold text-lg">4102 Binningen, Schweiz</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-3">
              <a href="tel:+41615251810" className="footer-link-centered">
                Tel. +41 61 525 18 10
              </a>
              <a href="mailto:info@aikmu.ch" className="footer-link-centered">
                info@aikmu.ch
              </a>
            </div>
          </div>

          {/* RECHTLICHES (Zentriert mit Mouse-Over Effekt) */}
          <div className="flex justify-center gap-12 mb-16 border-t border-white/5 pt-12 w-full max-w-lg">
            <Link href="/impressum">
              <a className="footer-link-centered font-bold">Impressum</a>
            </Link>
            <Link href="/datenschutz">
              <a className="footer-link-centered font-bold">Datenschutz</a>
            </Link>
          </div>

          {/* SOCIAL MEDIA - Gross, hell und zentriert */}
          <div className="flex flex-col items-center gap-6 mb-20">
            <span className="text-[11px] uppercase tracking-[0.4em] text-white/30 font-bold">Folgen Sie uns</span>
            <div className="flex justify-center gap-8">
              <a href="https://www.instagram.com/aikmu.ch" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587440278928" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/aikmu/" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="w-full pt-10 border-t border-white/5">
            <p className="text-[11px] text-white/20 uppercase tracking-[0.5em] font-medium">
              © 2026 AiKMU. Precision & Intelligence.
            </p>
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4 animate-fadeInUp">
          <div className="max-w-2xl mx-auto bg-[#020617]/95 backdrop-blur-3xl border border-white/10 p-10 rounded-[40px] shadow-[0_30px_70px_rgba(0,0,0,0.8)] text-center">
            <h3 className="text-white font-bold text-2xl mb-3">Intelligence & Cookies.</h3>
            <p className="text-white/50 text-base mb-8 leading-relaxed">
              Wir optimieren unsere KI-Services stetig für Sie. <br /> Alles im Sinne von Swiss Quality.
            </p>
            <button onClick={handleAccept} className="btn-submit !mt-0 !w-auto px-20 py-4 text-base">
              Akzeptieren
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;