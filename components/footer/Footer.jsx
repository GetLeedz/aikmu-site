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
      <footer className="centered-footer-main">
        <div className="centered-footer-glow" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

          {/* LOGO */}
          <div className="mb-8">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo-aikmu-transparent_white_transparent_footer.png"
                  alt="AiKMU Logo"
                  width={200}
                  height={70}
                  className="brightness-125 object-contain"
                  priority
                />
              </a>
            </Link>
          </div>

          {/* CLAIM */}
          <p className="text-white/70 text-lg max-w-2xl mb-8 text-center">
            KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –
            <br />
            klar geführt, verantwortungsvoll umgesetzt.
          </p>

          {/* SWISS BADGE (PNG statt Emoji) */}
          <div className="centered-footer-swiss-badge flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(0,242,254,0.12)]">
            <Image
              src="/images/swissflagge.png"
              alt="Schweizer Qualität"
              width={22}
              height={22}
              className="rounded-sm"
            />
            <span className="text-[11px] uppercase tracking-widest font-bold text-white">
              Swiss prompted.
            </span>
          </div>

          {/* KONTAKT */}
          <div className="flex flex-col items-center gap-2 mb-10 mt-8">
            <p className="text-white/80">4102 Binningen, Schweiz</p>
            <div className="flex gap-8 mt-2">
              <a
                href="tel:+41615251810"
                className="centered-footer-link"
              >
                Tel. +41 61 525 18 10
              </a>
              <a
                href="mailto:info@aikmu.ch"
                className="centered-footer-link"
              >
                info@aikmu.ch
              </a>
            </div>
          </div>

          {/* RECHTLICHES */}
          <div className="flex gap-10 mb-12 border-t border-white/5 pt-8 w-full justify-center">
            <Link href="/impressum">
              <a className="centered-footer-link">Impressum</a>
            </Link>
            <Link href="/datenschutz">
              <a className="centered-footer-link">Datenschutz</a>
            </Link>
          </div>

          {/* SOCIALS */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
              Folgen Sie uns
            </span>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/aikmu.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="centered-footer-social-icon"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587440278928"
                target="_blank"
                rel="noopener noreferrer"
                className="centered-footer-social-icon"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.linkedin.com/company/aikmu/"
                target="_blank"
                rel="noopener noreferrer"
                className="centered-footer-social-icon"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* COPYRIGHT */}
          <p className="text-[10px] text-white/20 uppercase tracking-[0.4em] pt-8 border-t border-white/5 w-full text-center">
            © 2026 AiKMU. Precision & Intelligence.
          </p>
        </div>
      </footer>

      {/* COOKIE BANNER */}
      {showBanner && (
        <div className="fixed bottom-10 left-0 right-0 z-[100] px-4">
          <div className="max-w-2xl mx-auto bg-[#020617]/95 backdrop-blur-3xl border border-white/10 p-8 rounded-[30px] shadow-2xl text-center">
            <h3 className="text-white font-bold mb-2">
              Intelligence & Cookies.
            </h3>
            <p className="text-white/50 text-sm mb-6">
              Wir optimieren unsere KI-Services stetig für Sie.
            </p>
            <button
              onClick={handleAccept}
              className="bg-gradient-to-r from-[#00f2fe] to-[#a855f7] px-10 py-3 rounded-xl text-white font-bold text-sm"
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
