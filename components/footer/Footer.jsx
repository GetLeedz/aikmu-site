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
      <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
        {/* Subtiler Glow Effekt im Hintergrund */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00f2fe]/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Logo & Slogan */}
            <div className="md:col-span-2 space-y-6">
              <div className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f2fe] to-[#a855f7] flex items-center justify-center text-xs">AI</span>
                AiKMU
              </div>
              <p className="text-white/60 max-w-sm leading-relaxed text-lg">
                KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau – 
                klar geführt, verantwortungsvoll umgesetzt.
              </p>
              <div className="flex items-center gap-3 text-white/80 font-medium bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
                <span className="text-xl">🇨🇭</span>
                <span className="text-sm uppercase tracking-widest">Swiss prompted.</span>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Rechtliches</h4>
              <ul className="space-y-4">
                <li><Link href="/impressum" className="text-white/50 hover:text-[#00f2fe] transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-white/50 hover:text-[#00f2fe] transition-colors">Datenschutz</Link></li>
              </ul>
            </div>

            {/* Kontakt */}
            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Kontakt</h4>
              <ul className="space-y-4 text-white/50">
                <li className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/30">Location</span>
                  4102 Binningen, Schweiz
                </li>
                <li className="flex flex-col">
                   <span className="text-[10px] uppercase text-white/30">Direkt</span>
                  <a href="tel:+41615251810" className="hover:text-white transition-colors">+41 61 525 18 10</a>
                  <a href="mailto:info@aikmu.ch" className="hover:text-white transition-colors">info@aikmu.ch</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Untere Zeile */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-white/30 uppercase tracking-widest">
              © 2026 AiKMU. Built for the future.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/aikmu/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/aikmu.ch" },
                { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61587440278928" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/5 hover:border-[#00f2fe] hover:text-[#00f2fe] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner (Styling bleibt, aber wir integrieren ihn nahtlos) */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4 animate-fadeInUp">
          <div className="max-w-4xl mx-auto bg-[#020617]/90 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-white font-bold text-lg mb-1">KI & Cookies.</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Wir nutzen Cookies zur Optimierung. Alles im Sinne von Swiss Quality.
              </p>
            </div>
            <button 
              onClick={handleAccept}
              className="btn-submit !mt-0 !w-auto px-10"
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