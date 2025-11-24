// pages/anfrage.js
import { useState } from "react";
import dynamic from "next/dynamic";

// Turnstile nur im Browser laden
const Turnstile = dynamic(() => import("react-turnstile"), { ssr: false });

export default function AnfragePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
    website: "", // Honeypot
  });

  const [token, setToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "ok" | "error", message }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!token) {
      setStatus({
        type: "error",
        message: "Bitte das Captcha bestätigen.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/anfrage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          token, // Turnstile-Token ans Backend schicken
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Fehler beim Senden der Anfrage.");
      }

      setStatus({
        type: "ok",
        message: "Danke! Deine Anfrage wurde erfolgreich gesendet.",
      });

      // Formular leeren
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
        website: "",
      });
      setToken(null);
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: err.message || "Es ist ein Fehler aufgetreten.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page page--anfrage">
      <section className="section section--anfrage">
        <div className="container">
          <h1 className="section-title">Lead-Kampagnen-Anfrage</h1>

          <form className="form form--anfrage" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Firma</label>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-Mail*</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="industry">Branche / Zielkunden</label>
              <input
                id="industry"
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Nachricht*</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Honeypot (versteckt) */}
            <div className="form-group form-group--hidden">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>

            {/* Turnstile-Captcha */}
            <div className="form-group form-group--captcha">
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                onSuccess={(newToken) => setToken(newToken)}
                onExpire={() => setToken(null)}
                onError={() => setToken(null)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </button>

            {status && (
              <p
                className={
                  status.type === "ok"
                    ? "form-status form-status--ok"
                    : "form-status form-status--error"
                }
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
