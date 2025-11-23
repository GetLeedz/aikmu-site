// components/lib/fbpixel.jsx

// Deine Pixel ID
export const FB_PIXEL_ID = "1285613311599646";

// PageView tracken
export const pageview = () => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", "PageView");
};

// Generische Event-Funktion
export const event = (name, options = {}) => {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", name, options);
};

// Komfortfunktion für Leads
export const lead = (options = {}) => {
  event("Lead", options);
};
