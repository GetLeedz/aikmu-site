import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import * as fbq from "../components/lib/fbpixel";


const initialState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  industry: "",
  message: "",
};

const Anfrage = () => {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });



      if (!res.ok) {
        throw new Error("Fehler beim Absenden der Anfrage.");
      }

      setStatus("success");
      setFormData(initialState);

      // Meta Lead-Event feuern
      fbq.lead({
        form: "Lead-Kampagne-Anfrage",
      });




    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg(
        "Irgendwas hat nicht geklappt. Bitte versuch es später nochmals oder schreib direkt an info@getleedz.com."
      );
    } finally {
      setTimeout(() => {
        setStatus(null);
      }, 6000);
    }
  };

  const disabled = status === "loading";

  return (
    <>
      <Head>
        <title>Anfrage für Lead-Kampagne | GetLeedz</title>
        <meta
          name="description"
          content="Schick uns deine Challenge – wir prüfen, wie viele Leads für dein Schweizer KMU drinliegen."
        />
      </Head>

      {/* Fixes Logo / Navigation oben */}
      <NavBar />

      <main className="bg-[#020617] min-h-screen pt-[160px] pb-[80px]">
        <section>
          <div className="container m-auto max-w-3xl px-4 text-slate-100">
            <div className="mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-white">
                Anfrage für Lead-Kampagne
              </h1>
              {/* 👉 Text heller & grösser */}
              <p className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed">
                Kurz ausfüllen – wir melden uns bei dir mit einer ehrlichen
                Einschätzung, ob und wie wir dir mehr Leads bringen können.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl bg-black/40 p-5 shadow-[0_0_40px_rgba(15,23,42,0.9)] backdrop-blur"
            >
              {/* Name */}
              <div>
                <label className="neon-label" htmlFor="name">
                  Dein Name
                </label>
                <div className="neon-input-wrapper">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="neon-input"
                    placeholder="Vor- und Nachname"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* E-Mail */}
              <div>
                <label className="neon-label" htmlFor="email">
                  E-Mail
                </label>
                <div className="neon-input-wrapper">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="neon-input"
                    placeholder="name@firma.ch"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Firma */}
              <div>
                <label className="neon-label" htmlFor="company">
                  Firma
                </label>
                <div className="neon-input-wrapper">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="neon-input"
                    placeholder="Firmenname"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Telefon */}
              <div>
                <label className="neon-label" htmlFor="phone">
                  Telefon
                </label>
                <div className="neon-input-wrapper">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="neon-input"
                    placeholder="+41 ..."
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Branche – erweitert & sortiert */}
              <div>
                <label className="neon-label" htmlFor="industry">
                  Branche
                </label>
                <div className="neon-input-wrapper">
                  <select
                    id="industry"
                    name="industry"
                    className="neon-select"
                    value={formData.industry}
                    onChange={handleChange}
                    disabled={disabled}
                    required
                  >
                    <option value="">Bitte wählen ...</option>
                    <option value="Gastronomie / Restaurant">
                      Gastronomie / Restaurant
                    </option>
                    <option value="Detailhandel / Retail">
                      Detailhandel / Retail
                    </option>
                    <option value="Versicherung / Finanzdienstleister">
                      Versicherung / Finanzdienstleister
                    </option>
                    <option value="Immobilien / Makler / Verwaltung">
                      Immobilien / Makler / Verwaltung
                    </option>
                    <option value="Fitness / Gesundheit">
                      Fitness / Gesundheit
                    </option>
                    <option value="Beauty / Kosmetik">
                      Beauty / Kosmetik
                    </option>
                    <option value="Agentur / Marketing">
                      Agentur / Marketing
                    </option>
                    <option value="Beratung / Coaching">
                      Beratung / Coaching
                    </option>
                    <option value="IT / Software / SaaS">
                      IT / Software / SaaS
                    </option>
                    <option value="Industrie / Produktion">
                      Industrie / Produktion
                    </option>
                    <option value="Dienstleistungen (allgemein)">
                      Dienstleistungen (allgemein)
                    </option>
                    <option value="Öffentliche Hand / Bildung">
                      Öffentliche Hand / Bildung
                    </option>
                    <option value="B2B / andere KMU">
                      B2B / andere KMU
                    </option>
                    <option value="Andere Branche">Andere Branche</option>
                  </select>
                </div>
              </div>

              {/* Nachricht */}
              <div>
                <label className="neon-label" htmlFor="message">
                  Was ist deine grösste Challenge bei Leads?
                </label>
                <div className="neon-input-wrapper">
                  <textarea
                    id="message"
                    name="message"
                    className="neon-textarea"
                    placeholder="Kurz in 1–3 Sätzen beschreiben. Je konkreter, desto besser können wir dir antworten."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* Status-Meldungen */}
              {status === "success" && (
                <div className="badge-success">
                  <span>✅</span>
                  <span>
                    Danke dir! Deine Anfrage ist bei uns eingetroffen. Wir
                    melden uns so schnell wie möglich.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="badge-error">
                  <span>⚠️</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* CTA-Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={disabled}
                  className={`group neon-border ${
                    disabled
                      ? "opacity-60 cursor-not-allowed"
                      : "cursor-pointer"
                  }`}
                >
                  <span className="neon-border-inner">
                    {status === "loading"
                      ? "Wird gesendet..."
                      : "Anfrage jetzt abschicken"}
                  </span>
                </button>
              </div>

              {/* Hinweistext – deutlich grösser & heller */}
              <p className="pt-3 text-base md:text-base leading-relaxed text-slate-200">
                Deine Angaben werden vertraulich behandelt und nur verwendet, um
                deine Anfrage zu beantworten. Keine Newsletter, kein Spam.
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer unten */}
      <Footer />
    </>
  );
};

export default Anfrage;
