// components/footer/Footer.jsx
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300 pt-10 pb-12 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Links: Impressum / Datenschutz */}
        <div className="flex flex-wrap justify-center gap-6 text-base sm:text-base font-medium">
          <Link href="/impressum" legacyBehavior>
            <a className="neon-link">Impressum</a>
          </Link>
          <span className="text-gray-500">·</span>
          <Link href="/datenschutz" legacyBehavior>
            <a className="neon-link">Datenschutz</a>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm sm:text-sm text-gray-400 text-center">
          © 2026 GetLeedz. Alle Rechte vorbehalten.
        </p>

        {/* Social: Überschrift + Icons */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <span className="text-sm sm:text-sm tracking-[0.15em] uppercase text-gray-400">
            Folge uns
          </span>
          <div className="flex gap-5 sm:gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl sm:text-xl transition-all duration-200 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl sm:text-xl transition-all duration-200 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 sm:w-12 sm:h-12 rounded-full bg-[#020617] border border-[#292848] hover:border-transparent hover:bg-gradient-to-r hover:from-[#ff00ff] hover:via-[#7aff00] hover:to-[#00e5ff] text-white text-xl sm:text-xl transition-all duration-200 hover:scale-110"
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
