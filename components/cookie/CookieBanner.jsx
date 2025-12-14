// components/cookie/CookieBanner.jsx
import { useEffect, useState } from "react";
import Link from "next/link";
import { setMarketingConsent } from "../lib/consent";
import { initFacebookPixel } from "../lib/fbpixel";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem("getleedz_consent_marketing");
    if (!consent) setVisible(true);
  }, []);

  const acceptAll = () => {
    setMarketingConsent(true);
    initFacebookPixel(); // 🔥 HIER wird Pixel NACH Consent geladen
    setVisible(false);
  };

  const decline = () => {
    setMarketingConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-0 z-[999] flex justify-center px-4">
      <div className="max-w-2xl w-full rounded-2xl bg-[#020617]/95 p-4 border border-[#7aff00]">
        <p className="text-white font-semibold">Cookies & Tracking</p>
        <p className="text-gray-300 text-sm mt-1">
          Wir verwenden Marketing-Cookies (z.B. Meta Pixel).
          Details in der{" "}
          <Link href="/datenschutz">
            <a className="underline">Datenschutzerklärung</a>
          </Link>
        </p>

        <div className="flex gap-3 mt-4 justify-end">
          <button
            onClick={decline}
            className="px-4 py-2 rounded-full border text-gray-300"
          >
            Nur notwendig
          </button>
          <button
            onClick={acceptAll}
            className="px-5 py-2 rounded-full bg-[#7aff00] text-black font-semibold"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
