import { useState, useEffect } from "react";
import Head from "next/head";
import { Turnstile } from "@marsidev/react-turnstile";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

// optional: Tracking (falls vorhanden)
import { track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

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

  // Fix für Hydration Error: Erst im Browser auf true setzen
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

      if (typeof hasMarketingConsent === 'function' && hasMarketingConsent()) {
        track("Lead", { value: 1, currency: "CHF" });
      }
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

      <main className="min-h-screen pt-[160px] pb-[80px]">
        <div className="container mx-auto max-w-3xl px-4 text-white">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-semibold">Anfrage für ein Gespräch</h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-black/40 p-6 backdrop-blur">
            <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" />

            {[
              ["name", "Ihr Name"],
              ["email", "E-Mail-Adresse", "email"],
              ["company", "Unternehmen"],
              ["phone", "Telefonnummer"],
            ].map(([name, label, type]) => (
              <div key={name}>
                <label className="neon-label">{label}</label>
                <div className="neon-input-wrapper">
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
              <div className="neon-input-wrapper">
                <select name="industry" required className="neon-select" value={formData.industry} onChange={handleChange} disabled={disabled}>
                  <option value="">Bitte wählen …</option>
                  <option>Handwerk / Bau</option>
                  <option>Treuhand / Finanzen</option>
                  <option>Immobilien</option>
                  <option>Gesundheit</option>
                  <option>Beratung / Dienstleistung</option>
                  <option>Industrie / Produktion</option>
                  <option>IT / Software</option>
                  <option>Andere</option>
                </select>
              </div>
            </div>

            <div>
              <label className="neon-label">Ihre Herausforderung</label>
              <div className="neon-input-wrapper">
                <textarea name="message" required className="neon-textarea" value={formData.message} onChange={handleChange} disabled={disabled} />
              </div>
            </div>

            {/* Turnstile Widget mit Client-Check */}
            <div className="pt-4 flex flex-col items-center min-h-[80px]">
              <p className="mb-2 text-sm text-slate-300">Kurze Sicherheitsprüfung:</p>
              {isClient && (
                <Turnstile
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCfToken(token)}
                />
              )}
            </div>

            {status === "success" && <div className="badge-success text-center">✅ Vielen Dank. Ihre Anfrage wurde übermittelt.</div>}
            {status === "error" && <div className="badge-error text-center">⚠️ {errorMsg}</div>}

            <div className="text-center">
              <button type="submit" disabled={disabled} className="neon-border">
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