import { useState, useEffect } from "react";
import Head from "next/head";
import { Turnstile } from "@marsidev/react-turnstile";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import Image from "next/image";

// Background Icons
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
  website: "", 
};

export default function Anfrage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null); 
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
      if (!res.ok) throw new Error(data.error || "Fehler beim Absenden.");
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

      <main className="hero-spotlight-bg relative min-h-screen pt-[160px] pb-[80px] overflow-hidden">
        
        {/* Background Icons */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-[10%] left-[5%] animate-pulse-slow"><Image src={hero1} alt="" width={150} height={150} /></div>
          <div className="absolute top-[20%] right-[10%] animate-pulse-slow"><Image src={hero2} alt="" width={180} height={180} /></div>
          <div className="absolute bottom-[20%] left-[8%] animate-pulse-slow"><Image src={hero3} alt="" width={140} height={140} /></div>
          <div className="absolute top-[45%] right-[5%] animate-pulse-slow"><Image src={hero4} alt="" width={160} height={160} /></div>
          <div className="absolute bottom-[10%] right-[15%] animate-pulse-slow"><Image src={hero5} alt="" width={140} height={140} /></div>
        </div>

        <div className="container mx-auto max-w-3xl px-4 relative z-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Anfrage für ein <br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#a855f7]">unverbindliches Gespräch</span>
            </h1>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="website" value={formData.website} onChange={handleChange} className="hidden" tabIndex="-1" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  ["name", "Ihr Name"],
                  ["email", "E-Mail-Adresse", "email"],
                  ["company", "Unternehmen"],
                  ["phone", "Telefonnummer"],
                ].map(([name, label, type]) => (
                  <div key={name}>
                    <label className="form-label">{label}</label>
                    <input
                      name={name}
                      type={type || "text"}
                      required={name !== "phone"}
                      className="form-input"
                      placeholder={label}
                      value={formData[name]}
                      onChange={handleChange}
                      disabled={disabled}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="form-label">Branche</label>
                <select name="industry" required className="form-input" value={formData.industry} onChange={handleChange} disabled={disabled}>
                  <option value="" className="text-gray-900">Bitte wählen ...</option>
                  <option className="text-gray-900">Gastronomie / Restaurant</option>
                  <option className="text-gray-900">Detailhandel / Retail</option>
                  <option className="text-gray-900">Versicherung / Finanzdienstleister</option>
                  <option className="text-gray-900">Immobilien / Makler / Verwaltung</option>
                  <option className="text-gray-900">Agentur / Marketing</option>
                  <option className="text-gray-900">IT / Software / SaaS</option>
                  <option className="text-gray-900">Industrie / Produktion</option>
                  <option className="text-gray-900">Andere Branche</option>
                </select>
              </div>

              <div>
                <label className="form-label">Ihre Herausforderung</label>
                <textarea name="message" required className="form-input min-h-[120px]" value={formData.message} onChange={handleChange} disabled={disabled} placeholder="Beschreiben Sie kurz, wo Sie KI-Potenzial sehen..." />
              </div>

              <div className="pt-6 flex flex-col items-center">
                <p className="mb-3 text-[10px] text-white/40 uppercase tracking-[0.2em]">Sicherheitsprüfung</p>
                {isClient && (
                  <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY} onSuccess={(token) => setCfToken(token)} theme="dark" />
                )}
              </div>

              {status === "success" && <div className="badge-success">✅ Anfrage erfolgreich gesendet!</div>}
              {status === "error" && <div className="badge-error">⚠️ {errorMsg}</div>}

              <button type="submit" disabled={disabled} className="btn-submit">
                {status === "loading" ? "Wird gesendet …" : "Gespräch anfragen"}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}