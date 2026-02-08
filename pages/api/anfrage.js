// pages/api/anfrage.js
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
    website, // Honeypot
    cfToken, // Turnstile Token
  } = req.body || {};

  // 🛑 Honeypot (stille Annahme)
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // 🧾 Pflichtfelder
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // 🔐 Turnstile prüfen
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return res.status(500).json({ error: "Turnstile nicht konfiguriert." });
  }

  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      req.socket?.remoteAddress ||
      "";

    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${encodeURIComponent(secret)}
&response=${encodeURIComponent(cfToken || "")}
&remoteip=${encodeURIComponent(ip)}`,
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return res
        .status(400)
        .json({ error: "Sicherheitsprüfung fehlgeschlagen." });
    }
  } catch (err) {
    return res.status(500).json({ error: "Turnstile Fehler." });
  }

  // 📬 Mail-ENV prüfen
  const {
    MAIL_HOST,
    MAIL_PORT,
    MAIL_SECURE,
    MAIL_USER,
    MAIL_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (
    !MAIL_HOST ||
    !MAIL_USER ||
    !MAIL_PASS ||
    !MAIL_FROM ||
    !MAIL_TO
  ) {
    return res
      .status(500)
      .json({ error: "Mail-Konfiguration unvollständig." });
  }

  // ✉️ Mail senden
  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT || 465),
      secure: MAIL_SECURE === "true",
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    const text = `
Neue Anfrage über aikmu.ch

Name: ${name}
Firma: ${company || "-"}
E-Mail: ${email}
Telefon: ${phone || "-"}
Branche: ${industry || "-"}

Nachricht:
${message}
`;

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Neue Anfrage von ${name}`,
      text,
      html: text.replace(/\n/g, "<br/>"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "E-Mail konnte nicht gesendet werden." });
  }
}
