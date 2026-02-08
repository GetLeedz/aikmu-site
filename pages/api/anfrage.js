import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, phone, industry, message, website, cfToken } = req.body || {};

  // Honeypot Schutz
  if (website) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // 1. Turnstile Validierung
  try {
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(cfToken || "")}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: "Sicherheitsprüfung fehlgeschlagen." });
    }
  } catch (err) {
    return res.status(500).json({ error: "Sicherheits-Service nicht erreichbar." });
  }

  // 2. Mail-Versand Konfiguration (Port 465 & SSL)
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Dein Passwort: 8QffOo1i8fdm0
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Sauberes Layout für die interne E-Mail
    const mailHtml = `
      <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2c3e50;">Neue Projekt-Anfrage für AiKMU</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || "Nicht angegeben"}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "Nicht angegeben"}</p>
        <p><strong>Branche:</strong> ${industry || "Nicht angegeben"}</p>
        <hr style="border: 0; border-top: 1px solid #eee;" />
        <p><strong>Nachricht:</strong><br />${message.replace(/\n/g, "<br/>")}</p>
        <br />
        <p style="font-size: 12px; color: #7f8c8d;">Diese Anfrage wurde über das Formular auf aikmu.ch gesendet.</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"AiKMU | GetLeedz GmbH" <${process.env.MAIL_USER}>`, // Absender-Branding angepasst
      to: process.env.MAIL_TO,
      subject: `Projekt AiKMU: Neue Anfrage von ${name}`,
      html: mailHtml,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SMTP Fehler:", err);
    return res.status(500).json({ error: `Mail-Fehler: ${err.message}` });
  }
}