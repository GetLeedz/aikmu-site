import { hasMarketingConsent } from "../cookie/consent";

const FB_PIXEL_ID = "1285613311599646";

// Schweiz-Check
const isSwissUser = () => {
  if (typeof window === "undefined") return false;
  return Intl.DateTimeFormat().resolvedOptions().timeZone === "Europe/Zurich";
};

const canTrack = () => {
  return hasMarketingConsent() && isSwissUser() && typeof window.fbq === "function";
};

export const pageview = () => {
  if (!canTrack()) return;
  window.fbq("track", "PageView");
};

export const lead = (params = {}) => {
  if (!canTrack()) return;
  window.fbq("track", "Lead", params);
};
