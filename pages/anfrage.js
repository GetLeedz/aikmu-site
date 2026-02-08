// pages/anfrage.js
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

// optional: Tracking
import { track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

// Turnstile (nur Client)
const Turnstile = dynamic(() => import("react-turnstile"), { ssr: false });

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
  const [tsKey, setTsKey] = useState(0);

  const disabled = status === "loading";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Turnstile Pflicht
    if (!cfToken) {
      setStatus("error");
      setErrorMsg(
        "Bitte bestätigen Sie kurz die Sicherheitsprüfung, damit wir Ihre Anfrage bearbeiten können."
      );
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, cfToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Fehler beim Absenden.");
      }

      // Erfolg
      setStatus("success");
      setFormData(initialState);
      setCfToken("");
      setTsKey((k) => k + 1);

      // Tracking (optional)
      if (hasMarketingConsent()) {
        track("Lead", {
          content_name: "AiKMU Anfrage",
          content_category: "KI-Beratung",
          value: 1,
          currency: "CHF",
        });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message ||
          "Es ist ein technischer Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <>
      <Head>
        <title>Anfrage | AiKMU</title>
        <meta
          name="description"
          content="Unverbindliche Anfrage für KI-Beratung und Umsetzung auf Schweizer Qualitätsniveau."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen pt-[160px] pb-[80px]">
        <section>
          <div className="container mx-auto max-w-3xl px-4 text-white">
            {/* Header */}
            <div className="mb-10 text-center">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Anfrage für ein unverbindliches Gespräch
              </h1>
              <p className="mt-4 text-lg text-slate-200">
                Kurz ausfüllen – wir melden uns mit einer ehrlichen Einschätzung,
                ob und wie KI in Ihrem Unternehmen sinnvoll eingesetzt werden kann.
              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl bg-black/40 p-6 backdrop-blur"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              {/* Standard Inputs */}
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

              {/* Branche */}
              <div>
                <label className="neon-label">Branche</label>
                <div className="neon-input-wrapper">
                  <select
                    name="industry"
                    required
                    className="neon-select"
                    value={formData.industry}
                    onChange={handleChange}
                    disabled={disabled}
                  >
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

              {/* Nachricht */}
              <div>
                <label className="neon-label">
                  Was ist aktuell Ihre grösste Herausforderung?
                </label>
                <div className="neon-input-wrapper">
                  <textarea
                    name="message"
                    required
                    className="neon-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Turnstile */}
              <div className="pt-4 text-center">
                <p className="mb-2 text-sm text-slate-300">
                  Kurze Sicherheitsprüfung:
                </p>
                <Turnstile
                  key={tsKey}
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onVerify={(token) => setCfToken(token)}
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="badge-success">
                  ✅ Vielen Dank. Ihre Anfrage wurde übermittelt.
                </div>
              )}

              {status === "error" && (
                <div className="badge-error">⚠️ {errorMsg}</div>
              )}

              {/* Submit */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={disabled}
                  className="neon-border"
                >
                  <span className="neon-border-inner">
                    {status === "loading"
                      ? "Wird gesendet …"
                      : "Gespräch anfragen"}
                  </span>
                </button>
              </div>

              <p className="text-sm text-slate-300 text-center">
                Ihre Angaben werden vertraulich behandelt. Kein Spam.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
