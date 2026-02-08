import { useState, useEffect } from "react";
import Head from "next/head";
import { Turnstile } from "@marsidev/react-turnstile";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

// Icons für den Hintergrund
import hero1 from "../public/images/hero/hero1.png";
import hero2 from "../public/images/hero/hero2.png";
import hero3 from "../public/images/hero/hero3.png";
import hero4 from "../public/images/hero/hero4.png";
import hero5 from "../public/images/hero/hero5.png";
import hero6 from "../public/images/hero/hero6.png";

const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  industry: "",
  message: "",
  website: "", // Honeypot
};

export default function Anfrage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null); // null | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [cfToken, setCfToken] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const disabled = status === "loading";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!cfToken) {
      setStatus("error");
      setErrorMsg("Bitte bestätigen Sie kurz die Sicherheitsprüfung.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cfToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Absenden.");
      }

      setStatus("success");
      setFormData(initialState);
      setCfToken("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Ein technischer Fehler ist aufgetreten.");
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <>
      <Head>
        <title>Anfrage | AiKMU</title>
      </Head>

      <NavBar />

      <main className="relative min-h-screen pt-[160px] pb-[80px] overflow-hidden">
        
        {/* HINTERGRUND ICONS */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="hero-frame-1 animate-pulse"><Image src={hero1} alt="" /></div>
          <div className="hero-frame-2 animate-pulse"><Image src={hero2} alt="" /></div>
          <div className="hero-frame-3 animate-pulse"><Image src={hero3} alt="" /></div>
          <div className="hero-frame-4 animate-pulse"><Image src={hero4} alt="" /></div>
          <div className="hero-frame-5 animate-pulse"><Image src={hero5} alt="" /></div>
          <div className="hero-frame-6 animate-pulse"><Image src={hero6} alt="" /></div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 relative z-10 text-white">
          <div className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Anfrage für ein unverbindliches Gespräch</h1>
            <p className="mt-4 text-white/60 text-lg">Lassen Sie uns gemeinsam prüfen, wie KI Ihr Unternehmen voranbringt.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-black/60 p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Honeypot */}
            <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" />

            {[
              ["name", "Ihr Name"],
              ["email", "E-Mail-Adresse", "email"],
              ["company", "Unternehmen"],
              ["phone", "Telefonnummer"],
            ].map(([name, label, type]) => (
              <div key={name}>
                <label className="neon-label">{label}</label>
                <div className="dynamic-neon-wrapper">
                  <input
                    name={name}
                    type={type || "text"}
                    required={name !== "phone"}
                    className="neon-input"
                    value={formData[name]}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="neon-label">Branche</label>
              <div className="dynamic-neon-wrapper">
                <select 
                  name="industry" 
                  required 
                  className="neon-select" 
                  value={formData.industry} 
                  onChange={handleChange} 
                  disabled={disabled}
                >
                  <option value="">Bitte wählen ...</option>
                  <option>Gastronomie / Restaurant</option>
                  <option>Detailhandel / Retail</option>
                  <option>Versicherung / Finanzdienstleister</option>
                  <option>Immobilien / Makler / Verwaltung</option>
                  <option>Fitness / Gesundheit</option>
                  <option>Beauty / Kosmetik</option>
                  <option>Agentur / Marketing</option>
                  <option>Beratung / Coaching</option>
                  <option>IT / Software / SaaS</option>
                  <option>Industrie / Produktion</option>
                  <option>Dienstleistungen (allgemein)</option>
                  <option>Öffentliche Hand / Bildung</option>
                  <option>B2B / andere KMU</option>
                  <option>Andere Branche</option>
                </select>
              </div>
            </div>

            <div>
              <label className="neon-label">Ihre Herausforderung</label>
              <div className="dynamic-neon-wrapper">
                <textarea 
                  name="message" 
                  required 
                  className="neon-textarea" 
                  value={formData.message} 
                  onChange={handleChange} 
                  disabled={disabled} 
                  placeholder="Beschreiben Sie kurz, wo Sie KI-Potenzial sehen..."
                />
              </div>
            </div>

            {/* Turnstile Widget */}
            <div className="pt-4 flex flex-col items-center min-h-[80px]">
              <p className="mb-2 text-sm text-slate-400 uppercase tracking-widest">Sicherheitsprüfung</p>
              {isClient && (
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCfToken(token)}
                />
              )}
            </div>

            {status === "success" && <div className="badge-success text-center">✅ Vielen Dank! Wir haben Ihre Anfrage erhalten.</div>}
            {status === "error" && <div className="badge-error text-center">⚠️ {errorMsg}</div>}

            <div className="text-center">
              <button type="submit" disabled={disabled} className="neon-border w-full">
                <span className="neon-border-inner">
                  {status === "loading" ? "Wird gesendet …" : "Gespräch anfragen"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}