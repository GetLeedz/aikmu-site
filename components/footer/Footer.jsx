import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-10 pb-12 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">

        {/* Rechtliches */}
        <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
          <Link href="/impressum" legacyBehavior>
            <a className="neon-link">Impressum</a>
          </Link>

          <span className="text-gray-500">·</span>

          <Link href="/datenschutz" legacyBehavior>
            <a className="neon-link">Datenschutz</a>
          </Link>
        </div>

        {/* Positionierung */}
        <div className="text-center text-sm sm:text-base text-slate-300 leading-relaxed">
          KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –  
          klar geführt, verantwortungsvoll umgesetzt.
        </div>

        {/* Adresse & Kontakt */}
        <div className="text-center text-sm sm:text-base text-slate-300 leading-relaxed">
          <div>4102 Binningen, Schweiz</div>
          <a href="tel:+41615251810" className="neon-link block">
            Tel. +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
          </a>
          <a href="mailto:info@aikmu.ch" className="neon-link block">
            info@aikmu.ch
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center">
          © 2026 AiKMU. Alle Rechte vorbehalten.
        </p>

        {/* Social */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <span className="text-sm tracking-[0.15em] uppercase text-gray-400">
            Folgen Sie uns
          </span>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/aikmu.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl transition-all duration-200 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587440278928"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl transition-all duration-200 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/aikmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl transition-all duration-200 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
