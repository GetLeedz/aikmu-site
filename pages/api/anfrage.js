// api/anfrage.js
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
    token,   // Cloudflare Turnstile Token
  } = req.body || {};

  // Honeypot-Schutz
  if (website) {
    console.log("Honeypot ausgelöst, Anfrage ignoriert");
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    console.log("Pflichtfelder fehlen", { name, email, message });
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  console.log("Neue Anfrage erhalten:", {
    name,
    email,
    company,
    phone,
    industry,
  });



// ALT:
// const TURNSTILE_SECRET_KEY = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

// NEU:
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;



  if (TURNSTILE_SECRET_KEY && token) {
    try {
      const formData = new URLSearchParams();
      formData.append("secret", TURNSTILE_SECRET_KEY);
      formData.append("response", token);

      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket?.remoteAddress;

      if (ip) {
        formData.append("remoteip", ip);
      }

      const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
          method: "POST",
          body: formData,
        }
      );

      const verifyData = await verifyRes.json();

      if (!verifyData.success) {
        console.warn("Turnstile-Verifizierung fehlgeschlagen:", verifyData);
        return res
          .status(400)
          .json({ error: "Captcha-Verifizierung fehlgeschlagen." });
      }

      console.log("Turnstile-Verifizierung erfolgreich.");
    } catch (err) {
      console.error("Fehler bei Turnstile-Check:", err);
      // Fail-open: nur loggen, Anfrage trotzdem weiterlaufen lassen
    }
  } else {
    console.log(
      "Turnstile nicht aktiv oder kein Token vorhanden – Anfrage wird ohne Captcha akzeptiert."
    );
  }

  // Mail-ENV-Variablen
  const {
    MAIL_HOST,
    MAIL_PORT,
    MAIL_SECURE,
    MAIL_USER,
    MAIL_PASS,
    MAIL_FROM,
    MAIL_TO,
  } = process.env;

  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !MAIL_FROM || !MAIL_TO) {
    console.error("Mail-ENV-Variablen fehlen.");
    return res
      .status(500)
      .json({ error: "Mail-Konfiguration ist unvollständig." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: MAIL_PORT ? Number(MAIL_PORT) : 465,
      secure: MAIL_SECURE === "true" || MAIL_SECURE === true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    const textBody = `
Neue Lead-Kampagnen-Anfrage über getleedz.com

Name:    ${name}
Firma:   ${company || "-"}
E-Mail:  ${email}
Telefon: ${phone || "-"}

Branche / Zielkunden:
${industry || "-"}

Nachricht:
${message}
`.trim();

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: `Neue Lead-Anfrage von ${name}`,
      text: textBody,
      html: textBody.replace(/\n/g, "<br />"),
    });

    console.log("Mail erfolgreich übergeben:", info.messageId);

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Mail Fehler:", error);
    return res
      .status(500)
      .json({ error: "Mail konnte nicht gesendet werden." });
  }
}
