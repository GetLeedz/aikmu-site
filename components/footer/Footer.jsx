import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/5 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center text-sm text-slate-300 md:flex-row md:justify-between md:text-left">
        {/* Link-Bereich */}
        <div className="space-y-3">
          <div className="flex justify-center gap-5 md:justify-start">
            <Link href="/impressum">
              <a className="hover:text-white">Impressum</a>
            </Link>
            <span className="text-slate-600">·</span>
            <Link href="/datenschutz">
              <a className="hover:text-white">Datenschutz</a>
            </Link>
          </div>

          <p className="text-xs text-slate-500">
            © {year} GetLeedz. Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center gap-3 md:items-end">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Folge uns
          </span>
          <div className="flex gap-3 text-lg">
            <a
              href="https://facebook.com/getleedz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GetLeedz auf Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-pink-500 hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/getleedz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GetLeedz auf Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-pink-500 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/channel/UCWdPkN8SUYylAkobLM3866w"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GetLeedz auf YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-200 transition hover:bg-pink-500 hover:text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
