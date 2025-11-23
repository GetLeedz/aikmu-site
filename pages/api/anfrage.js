import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    company,
    email,
    phone,
    industry,
    message,
    website,     // Honeypot
    cfToken,     // Turnstile Token vom Frontend
  } = req.body || {};

  // --------------------------
  // 1) Honeypot-Feld abfangen
  // --------------------------
  if (website) {
    console.log("Honeypot ausgelöst – Bot blockiert");
    return res.status(200).json({ ok: true });
  }

  // --------------------------
  // 2) Pflichtfelder prüfen
  // --------------------------
  if (!name || !email || !message) {
    console.log("Pflichtfelder fehlen", { name, email, message });
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // --------------------------
  // 3) Turnstile Sicherheits-Prüfung
  // --------------------------
  if (!cfToken) {
    console.log("Turnstile Security Token fehlt");
    return res.status(400).json({ error: "Security token fehlt." });
  }

  try {
    const secret = process.env.TURNSTILE_SECRET_KEY;

    if (!secret) {
      console.error("TURNSTILE_SECRET_KEY fehlt in ENV!");
      return res.status(500).json({ error: "Server Config Error" });
    }

    const verifyURL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

    const formData = new URLSearchParams();
    formData.append("secret", secret);
    formData.append("response", cfToken);

    const verifyRes = await fetch(verifyURL, {
      method: "POST",
      body: formData,
    });

    const verifyJSON = await verifyRes.json();

    if (!verifyJSON.success) {
      console.error("Turnstile Sicherheitscheck fehlgeschlagen:", verifyJSON);
      return res.status(400).json({
        error: "Sicherheitsprüfung fehlgeschlagen. Bitte nochmal versuchen.",
      });
    }
  } catch (err) {
    console.error("Fehler bei Turnstile:", err);
    return res.status(500).json({ error: "Security Server Error" });
  }

  // --------------------------
  // 4) Debug: Anfrage OK
  // --------------------------
  console.log("Neue Anfrage erhalten:
