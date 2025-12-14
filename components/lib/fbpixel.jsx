// components/lib/fbpixel.jsx
import { hasMarketingConsent } from "./consent";

export const FB_PIXEL_ID = "1285613311599646";

let pixelInitialized = false;

export const initPixel = () => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return; // 🚫 ohne Consent NICHT initialisieren
  if (pixelInitialized) return;

  // fbq bootstrap
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  window.fbq("init", FB_PIXEL_ID);

  pixelInitialized = true;
};

export const pageview = () => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return; // 🚫 ohne Consent kein Track
  if (!pixelInitialized) initPixel();
  if (typeof window.fbq === "function") window.fbq("track", "PageView");
};

// optional: custom events
export const event = (name, params = {}) => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!pixelInitialized) initPixel();
  if (typeof window.fbq === "function") window.fbq("track", name, params);
};
