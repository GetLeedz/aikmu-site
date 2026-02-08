import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] pt-12 pb-14 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-10">

        {/* Rechtliches */}
        <div className="flex flex-wrap justify-center gap-8 text-base font-medium">
          <Link href="/impressum" legacyBehavior>
            <a className="neon-link">Impressum</a>
          </Link>

          <span className="opacity-60">·</span>

          <Link href="/datenschutz" legacyBehavior>
            <a className="neon-link">Datenschutz</a>
          </Link>
        </div>

        {/* Positionierung */}
        <div className="text-center footer-text">
          KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau –<br />
          klar geführt, verantwortungsvoll umgesetzt.
          <span className="swiss-flag" aria-label="Schweiz" />
          <br />
          <span className="opacity-90">Swiss prompted.</span>
        </div>

        {/* Adresse & Kontakt */}
        <div className="text-center footer-text">
          <div>4102 Binningen, Schweiz</div>
          <a href="tel:+41615251810" className="footer-link-block">
            Tel. +41&nbsp;61&nbsp;525&nbsp;18&nbsp;10
          </a>
          <a href="mailto:info@aikmu.ch" className="footer-link-block">
            info@aikmu.ch
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © 2026 AiKMU. Alle Rechte vorbehalten.
        </p>

        {/* Social */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <span className="footer-follow">FOLGEN SIE UNS</span>
          <div className="flex gap-6">
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
