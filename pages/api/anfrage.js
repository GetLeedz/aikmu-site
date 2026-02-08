import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, company, email, phone, industry, message, website, cfToken } = req.body || {};

  if (website) return res.status(200).json({ ok: true });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // 1. Turnstile Validierung
  const secret = process.env.TURNSTILE_SECRET_KEY;
  try {
    const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(cfToken || "")}`,
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: "Sicherheitsprüfung fehlgeschlagen." });
    }
  } catch (err) {
    return res.status(500).json({ error: "Sicherheits-Service nicht erreichbar." });
  }

  // 2. Mail-Versand
// 2. Mail-Versand
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      // Für Port 587 muss secure FALSE sein. 
      // Wir prüfen, ob der String in der Variable "true" ist:
      secure: process.env.MAIL_SECURE === "true", 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // TLS-Optionen hinzufügen für stabilere Verbindung bei Hostpoint
      tls: {
        rejectUnauthorized: false
      }
    });

    const text = `Neue Anfrage von ${name}\nFirma: ${company}\nE-Mail: ${email}\nTelefon: ${phone}\nBranche: ${industry}\n\nNachricht:\n${message}`;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Neue Anfrage von ${name}`,
      text,
      html: text.replace(/\n/g, "<br/>"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    // Wichtig: Logge den Fehler in Vercel, damit wir ihn lesen können!
    console.error("SMTP Fehler:", err); 
    return res.status(500).json({ error: "Mail-Server Fehler: " + err.message });
  }

    const text = `Neue Anfrage von ${name}\nFirma: ${company}\nE-Mail: ${email}\nBranche: ${industry}\n\nNachricht:\n${message}`;

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Neue Anfrage von ${name}`,
      text,
      html: text.replace(/\n/g, "<br/>"),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: "Mail-Server Fehler." });
  }
}