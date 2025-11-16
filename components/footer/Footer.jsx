import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(3,6,24,0.95)]">
      <div className="container m-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-300">
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-center md:text-left">
          <span className="font-semibold text-white">GetLeedz</span>
          <span className="hidden md:inline-block text-slate-500">·</span>
          <span>More Leads für Schweizer KMUs.</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right">
          {/* E-Mail bleibt normales <a> */}
          <a
            href="mailto:info@getleedz.com"
            className="hover:text-white transition-colors"
          >
            info@getleedz.com
          </a>

          <span className="hidden md:inline-block text-slate-500">·</span>

          {/* Interne Links mit Next.js Link */}
          <Link href="/impressum">
            <a className="hover:text-white transition-colors">Impressum</a>
          </Link>

          <span className="hidden md:inline-block text-slate-500">·</span>

          <Link href="/datenschutz">
            <a className="hover:text-white transition-colors">Datenschutz</a>
          </Link>
        </div>
      </div>

      <div className="container m-auto px-4 pb-4 text-[11px] text-slate-500 text-center">
        © {year} GetLeedz GmbH. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
};

export default Footer;
