// pages/anfrage.js
import { useState } from "react";
import Turnstile from "react-turnstile";

export default function AnfragePage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
    website: "", // Honeypot (muss leer bleiben)
  });

  const [token, setToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "ok" | "error", message: string }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus(null);

    // Optional: Sicherstellen, dass ein Token vorhanden ist
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token, // Turnstile-Token mitschicken
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
      setToken(null); // optional, je nach Turnstile-Mode
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
    <main className="anfrage-page">
      <h1>Lead-Kampagnen-Anfrage</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name*
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Firma
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            E-Mail*
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Telefon
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Branche / Zielkunden
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Nachricht*
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Honeypot-Feld – unsichtbar per CSS */}
        <div style={{ display: "none" }}>
          <label>
            Website
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
        </div>

        {/* Turnstile-Widget */}
        <div style={{ margin: "1rem 0" }}>
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(newToken) => {
              setToken(newToken);
            }}
            onExpire={() => {
              setToken(null);
            }}
            onError={() => {
              setToken(null);
            }}


          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "1rem",
              color: status.type === "ok" ? "green" : "red",
            }}
          >
            {status.message}
          </p>
        )}
      </form>
    </main>
  );
}
