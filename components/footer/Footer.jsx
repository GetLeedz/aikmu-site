import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { setMarketingConsent } from "../lib/consent";

// WICHTIG: Pfad zum Original-Logo prüfen
import Logo from "../public/images/logo/logo.png"; 

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
      <footer className="footer-main mt-20">
        {/* Die leuchtende Trennlinie aus der globals.css */}
        <div className="footer-glow-line" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* BRAND SECTION: Logo & Slogan */}
            <div className="md:col-span-2 space-y-6">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
                <Image 
                  src={Logo} 
                  alt="AiKMU Logo" 
                  width={140} 
                  height={50} 
                  className="brightness-110" 
                />
              </Link>
              <p className="text-white/60 max-w-sm leading-relaxed text-lg">
                KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau – 
                klar geführt, verantwortungsvoll umgesetzt.
              </p>
              <div className="swiss-badge">
                <span className="text-xl">🇨🇭</span>
                <span className="text-[11px] uppercase tracking-widest font-medium">Swiss prompted.</span>
              </div>
            </div>

            {/* NAVIGATION: Rechtliches mit Mouse-Over Effekt */}
            <div>
              <h4 className="footer-heading">Rechtliches</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/impressum" className="footer-link-new">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="footer-link-new">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>

            {/* KONTAKT SECTION */}
            <div>
              <h4 className="footer-heading">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="footer-label-small">Location</span>
                  <span className="text-white/60">4102 Binningen, Schweiz</span>
                </div>
                <div className="flex flex-col">
                  <span className="footer-label-small">Direkt</span>
                  <a href="tel:+41615251810" className="footer-link-new">
                    +41 61 525 18 10
                  </a>
                  <a href="mailto:info@aikmu.ch" className="footer-link-new">
                    info@aikmu.ch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR: Copyright & Socials */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em]">
              © 2026 AiKMU. Precision & Intelligence.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/aikmu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="https://www.instagram.com/aikmu.ch" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61587440278928" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-icon"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* COOKIE BANNER: Passend zum neuen Style */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4 animate-fadeInUp">
          <div className="max-w-4xl mx-auto bg-[#020617]/95 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-1">Intelligence & Cookies.</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Wir optimieren unsere KI-Services stetig für Sie. Alles im Sinne von Swiss Quality.
              </p>
            </div>
            <button 
              onClick={handleAccept} 
              className="btn-submit !mt-0 !w-auto px-10 py-3 text-sm"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;