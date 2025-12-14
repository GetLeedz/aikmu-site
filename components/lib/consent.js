// components/lib/consent.js

export const CONSENT_KEY = "getleedz_consent_marketing";

/**
 * true = Marketing erlaubt
 * Default: false
 */
export const hasMarketingConsent = () => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(CONSENT_KEY) === "true";
};

/**
 * Marketing-Consent setzen
 */
export const setMarketingConsent = (value) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value ? "true" : "false");

  // Optional: Event feuern, damit andere Teile (Pixel) reagieren können
  window.dispatchEvent(
    new CustomEvent("marketing-consent-changed", { detail: { value: !!value } })
  );
};
