// components/lib/fbpixel.jsx
import { hasMarketingConsent } from "./consent";

export const FB_PIXEL_ID = "1285613311599646";

export const pageview = () => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!window.fbq) return;

  window.fbq("track", "PageView");
};

export const lead = (params = {}) => {
  if (typeof window === "undefined") return;
  if (!hasMarketingConsent()) return;
  if (!window.fbq) return;

  window.fbq("track", "Lead", params);
};
