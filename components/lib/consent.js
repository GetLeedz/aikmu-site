// components/cookie/consent.js

export const CONSENT_KEY = "getleedz_consent_marketing";

/**
 * Prüft, ob Marketing-Consent gegeben wurde
 * Default: false
 */
export const hasMarketingConsent = () => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "true";
};

/**
 * Setzt oder entfernt den Marketing-Consent
 */
export const setMarketingConsent = (value) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value ? "true" : "false");
};
