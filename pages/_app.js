// pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import CookieBanner from "../components/cookie/CookieBanner";
import { initFacebookPixel, track } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Initial PageView (nur wenn Consent schon existiert)
    if (hasMarketingConsent()) {
      initFacebookPixel();
    }

    // PageView bei jeder Route
    const handleRouteChange = () => {
      if (hasMarketingConsent()) {
        track("PageView");
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
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
