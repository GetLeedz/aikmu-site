// pages/anfrage.js
import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

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
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [cfToken, setCfToken] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

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

      if (!res.ok) throw new Error("Senden fehlgeschlagen");

      setStatus("success");
      setFormData(initialState);
      setCfToken("");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut."
      );
    }
  };

  return (
    <>
      <Head>
        <title>Anfrage | AiKMU</title>
        <meta
          name="description"
          content="Unverbindliches Gespräch zur KI-Nutzung in Ihrem Unternehmen."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen pt-[160px] pb-[100px]">
        <div className="container m-auto max-w-3xl px-4 text-white">
          <h1 className="text-3xl md:text-4xl font-semibold text-center">
            Gespräch anfragen
          </h1>

          <p className="mt-4 text-center text-slate-300">
            Kurz ausfüllen – wir melden uns persönlich bei Ihnen.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6 rounded-2xl bg-black/40 p-6 backdrop-blur"
          >
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
            />

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
                  />
                </div>
              </div>
            ))}

            <div>
              <label className="neon-label">Branche</label>
              <div className="neon-input-wrapper">
                <select
                  name="industry"
                  required
                  className="neon-select"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">Bitte wählen …</option>
                  <option>Handwerk / Bau</option>
                  <option>Treuhand / Finanzen</option>
                  <option>Beratung / Dienstleistung</option>
                  <option>IT / Software</option>
                  <option>Andere</option>
                </select>
              </div>
            </div>

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
                />
              </div>
            </div>

            <div className="turnstile-wrapper">
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onVerify={(token) => setCfToken(token)}
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-center">{errorMsg}</p>
            )}

            {status === "success" && (
              <p className="text-green-400 text-center">
                Vielen Dank. Ihre Anfrage wurde übermittelt.
              </p>
            )}

            <button type="submit" className="neon-border">
              <span className="neon-border-inner">
                Gespräch anfragen
              </span>
            </button>

            <p className="text-center text-sm text-slate-400">
              Ihre Angaben werden vertraulich behandelt. Kein Spam.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
