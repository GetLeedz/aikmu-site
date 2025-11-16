import Head from "next/head";
import { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";

const Anfrage = () => {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(json.error || "Fehler beim Senden");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Submit error", err);
      setStatus("error");
      setErrorMessage(err.message || "Unbekannter Fehler");
    }
  };

  return (
    <div>
      <Head>
        <title>Lead-Kampagne anfragen – GetLeedz</title>
        <meta
          name="description"
          content="Stelle eine unverbindliche Anfrage für deine Lead-Kampagne mit GetLeedz. Wir prüfen, ob und wie wir für dein KMU planbar neue Leads generieren können."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Lead-Kampagne anfragen – GetLeedz" />
        <meta
          property="og:description"
          content="Schick uns deine Anfrage und wir prüfen, wie wir für dein KMU planbar neue Leads generieren können."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.getleedz.com/anfrage" />
        <meta property="og:image" content="https://www.getleedz.com/og-getleedz.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lead-Kampagne anfragen – GetLeedz" />
        <meta
          name="twitter:description"
          content="Jetzt unverbindlich Lead-Kampagne bei GetLeedz anfragen."
        />
        <meta name="twitter:image" content="https://www.getleedz.com/og-getleedz.jpg" />
      </Head>



      <main className="min-h-screen bg-[color:var(--bg-primary)] text-white">
        <NavBar />

        <section className="container m-auto px-4 pt-[160px] pb-16">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-2 mb-4">
              Anfrage für deine Lead-Kampagne
            </h1>
            <p className="mb-8 text-sm md:text-base text-slate-200">
              Fülle das Formular aus und wir melden uns mit einer Einschätzung,
              ob und wie wir für dein KMU planbare Leads generieren können.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[rgba(8,8,28,0.9)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Dein Name*</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Firma</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">E-Mail*</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Mobile / Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Branche / Zielkunden
                </label>
                <input
                  type="text"
                  name="industry"
                  placeholder="z.B. Zahnarztpraxis Basel, Fitnessstudio, Restaurant …"
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Was wünschst du dir konkret?*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-secondary)]"
                  placeholder="Kurz beschreiben, welche Leads du willst, was aktuell nicht funktioniert und ob es Deadlines gibt."
                />
              </div>

              {/* Honeypot gegen Bots */}
              <div className="hidden">
                <label>
                  Lass dieses Feld leer:
                  <input type="text" name="website" autoComplete="off" />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn__primary btn-gradient mt-2 disabled:opacity-60"
              >
                {status === "loading" ? "Wird gesendet…" : "Anfrage senden"}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400 mt-2">
                  Danke! Deine Anfrage ist bei uns eingetroffen. Wir melden
                  uns so schnell wie möglich.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 mt-2">
                  Uups – etwas ist schiefgelaufen: {errorMessage}. Bitte
                  versuche es später nochmals oder schreibe direkt an
                  info@getleedz.com.
                </p>
              )}
            </form>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Anfrage;
