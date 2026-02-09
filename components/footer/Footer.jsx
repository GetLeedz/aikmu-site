import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-14 pb-16 mt-20 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-12">

        {/* Rechtliches */}
        <div className="flex flex-wrap justify-center gap-8 text-base font-medium">
          <Link href="/impressum" className="footer-link">
            Impressum
          </Link>
          <span className="opacity-40">·</span>
          <Link href="/datenschutz" className="footer-link">
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

          <a
            href="tel:+41615251810"
            className="footer-contact"
          >
            Tel. +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
          </a>

          <a
            href="mailto:info@aikmu.ch"
            className="footer-contact"
          >
            info@aikmu.ch
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm opacity-60 text-white">
          © 2026 AiKMU. Alle Rechte vorbehalten.
        </p>

        {/* Social */}
        <div className="flex flex-col items-center gap-4 pt-4">
          <span className="text-sm tracking-widest opacity-70 text-white">
            FOLGEN SIE UNS
          </span>

          <div className="flex gap-8">
            <a
              href="https://www.instagram.com/aikmu.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61587440278928"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.linkedin.com/company/aikmu/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
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