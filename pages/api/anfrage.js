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
    cfToken, // Turnstile-Token vom Frontend
  } = req.body || {};

  // 1) Honeypot
  if (website) {
    console.log("Honeypot ausgelöst – Bot blockiert");
    return res.status(200).json({ ok: true });
  }

  // 2) Pflichtfelder
  if (!name || !email || !message) {
    console.log("Pflichtfelder fehlen", { name, email, message });
    return res.status(400).json({ error: "Pflichtfelder fehlen." });
  }

  // 3) Turnstile-Sicherheitsprüfung
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

    const verifyURL =
      "https://challenges.cloudflare.com/turnstile/v0/siteverify";

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
        error:
          "Sicherheitsprüfung fehlgeschlagen. Bitte versuch es nochmals.",
      });
    }
  } catch (err) {
    console.error("Fehler bei Turnstile:", err);
    return res.status(500).json({ error: "Security Server Error" });
  }

  console.log("Neue Anfrage erhalten:", {
    name,
    email,
    company,
    phone,
    industry,
  });

  // 4) Mail-ENV prüfen
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

  // 5) Mail versenden
  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT || 465),
      secure: MAIL_SECURE === "true" || MAIL_SECURE === true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    // Kein Backtick, nur normaler String + \n
    let textBody = "";
    textBody += "Neue Lead-Kampagnen-Anfrage über getleedz.com\n\n";
    textBody += "Name:    " + name + "\n";
    textBody += "Firma:   " + (company || "-") + "\n";
    textBody += "E-Mail:  " + email + "\n";
    textBody += "Telefon: " + (phone || "-") + "\n\n";
    textBody += "Branche / Zielkunden:\n";
    textBody += (industry || "-") + "\n\n";
    textBody += "Nachricht:\n";
    textBody += message + "\n";

    const info = await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject: "Neue Lead-Anfrage von " + name,
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
