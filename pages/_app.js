// pages/_app.js
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CookieBanner from "../components/cookie/CookieBanner";
import { hasMarketingConsent } from "../components/lib/consent";
import * as fbq from "../components/lib/fbpixel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const track = () => {
      if (!hasMarketingConsent()) return;
      fbq.pageview();
    };

    // initial
    track();

    // route changes
    router.events.on("routeChangeComplete", track);

    // wenn User im Banner akzeptiert/ablehnt
    const onConsentChanged = () => track();
    window.addEventListener("marketing-consent-changed", onConsentChanged);

    return () => {
      router.events.off("routeChangeComplete", track);
      window.removeEventListener("marketing-consent-changed", onConsentChanged);
    };
  }, [router.events]);

  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
