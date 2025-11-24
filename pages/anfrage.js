// pages/anfrage.js
import { useState } from "react";
import dynamic from "next/dynamic";

// Turnstile nur im Browser laden (wichtig!)
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
  const [status, setStatus] = useState(null); // { type: "ok" | "error", message: string }

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
    <main style={{ padding: "2rem", color: "#fff", background: "#050525", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "1.5rem", fontSize: "1.8rem", fontWeight: "bold" }}>
        Lead-Kampagnen-Anfrage
      </h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            Name*
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            Firma
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            E-Mail*
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            Branche / Zielkunden
          </label>
          <input
            type="text"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.25rem" }}>
            Nachricht*
          </label>
          <textarea
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        {/* Honeypot (versteckt) */}
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

        {/* Turnstile */}
        <div style={{ margin: "1rem 0" }}>
          <Turnstile
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={(newToken) => setToken(newToken)}
            onExpire={() => setToken(null)}
            onError={() => setToken(null)}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "0.6rem 1.4rem",
            background: "#ff007f",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "1rem",
              color: status.type === "ok" ? "lightgreen" : "#ff8080",
            }}
          >
            {status.message}
          </p>
        )}
      </form>
    </main>
  );
}
