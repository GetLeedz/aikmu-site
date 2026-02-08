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
  website: "",
};

const Anfrage = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [cfToken, setCfToken] = useState("");
  const [tsKey, setTsKey] = useState(0);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cfToken) {
      setStatus("error");
      setErrorMsg(
        "Bitte bestätigen Sie kurz die Sicherheitsprüfung, um fortzufahren."
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
        throw new Error(
          "Ihre Anfrage konnte momentan nicht übermittelt werden."
        );
      }

      setStatus("success");
      setFormData(initialState);
      setCfToken("");
      setTsKey((k) => k + 1);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Anfrage | AiKMU – KI-Beratung für Schweizer KMU</title>
        <meta
          name="description"
          content="Besprechen Sie Ihr KI-Potenzial mit AiKMU. Wir analysieren ehrlich, ob und wie KI Ihre Organisation entlastet, strukturiert und messbar voranbringt."
        />
      </Head>

      <NavBar />

      <main className="min-h-screen pt-[160px] pb-[90px]">
        <section>
          <div className="container m-auto max-w-3xl px-4 text-white">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl md:text-4xl font-semibold">
                Anfrage für ein KI-Projekt
              </h1>
              <p className="mt-5 text-lg md:text-xl opacity-90 leading-relaxed">
                Schildern Sie uns Ihre Situation.
                <br />
                Wir prüfen strukturiert, ob und wo KI Ihrem Unternehmen
                <br className="hidden sm:block" />
                einen echten wirtschaftlichen Mehrwert bringt.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8 rounded-2xl bg-black/40 p-8 md:p-10 backdrop-blur
                         shadow-[0_0_40px_rgba(15,23,42,0.9)]"
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

              {/* Name */}
              <div>
                <label className="neon-label">Ihr Name</label>
                <div className="neon-input-wrapper">
                  <input
                    name="name"
                    required
                    className="neon-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="neon-label">E-Mail-Adresse</label>
                <div className="neon-input-wrapper">
                  <input
                    name="email"
                    type="email"
                    required
                    className="neon-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="neon-label">Unternehmen</label>
                <div className="neon-input-wrapper">
                  <input
                    name="company"
                    required
                    className="neon-input"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="neon-label">Telefon (optional)</label>
                <div className="neon-input-wrapper">
                  <input
                    name="phone"
                    className="neon-input"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Industry */}
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
                    <option value="">Bitte auswählen …</option>
                    <option>Beratung / Treuhand / Kanzlei</option>
                    <option>Handwerk / Bau / Planung</option>
                    <option>Industrie / Produktion</option>
                    <option>IT / Software / SaaS</option>
                    <option>Gesundheit / Dienstleistungen</option>
                    <option>Andere Branche</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="neon-label">
                  Wo sehen Sie aktuell den grössten Handlungsbedarf?
                </label>
                <div className="neon-input-wrapper">
                  <textarea
                    name="message"
                    required
                    className="neon-textarea"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="z. B. Prozesse, Führung, Wissenstransfer, Effizienz, Kosten, Wachstum, Kontrolle …"
                  />
                </div>
              </div>

              {/* Turnstile */}
              <div className="pt-2 text-center">
                <Turnstile
                  key={tsKey}
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                  onVerify={(token) => setCfToken(token)}
                />
              </div>

              {/* Status */}
              {status === "success" && (
                <div className="text-green-400 text-center font-medium">
                  ✅ Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.
                </div>
              )}

              {status === "error" && (
                <div className="text-red-400 text-center font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Submit */}
              <button type="submit" className="neon-border w-full">
                <span className="neon-border-inner">
                  Anfrage vertraulich übermitteln
                </span>
              </button>

              <p className="text-sm text-center opacity-80 leading-relaxed">
                Ihre Angaben werden vertraulich behandelt.
                <br />
                Keine Massenmails. Keine automatisierten Verkaufsgespräche.
              </p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Anfrage;
