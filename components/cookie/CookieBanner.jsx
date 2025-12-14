import { useEffect, useState } from "react";
import Link from "next/link";
import { setMarketingConsent } from "./consent";
import { initFacebookPixel } from "../lib/fbpixel";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const consent = localStorage.getItem("getleedz_consent_marketing");
    if (!consent) setVisible(true);
  }, []);

  const handleChoice = (accepted) => {
    setMarketingConsent(accepted);
    if (accepted) {
      initFacebookPixel(); // 🚀 HIER startet Tracking
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4">
      <div className="max-w-2xl w-full bg-[#020617]/95 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
        <p className="text-sm text-gray-300 mb-3">
          Wir verwenden Cookies für Marketing & Analyse. Details in der{" "}
          <Link href="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>.
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => handleChoice(false)}
            className="px-4 py-2 text-sm border rounded-full text-gray-300"
          >
            Nur notwendige
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-[#ff00ff] via-[#7aff00] to-[#00e5ff] text-black"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
