// pages/_app.js
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import CookieBanner from "../components/cookie/CookieBanner";
import { initFacebookPixel, trackPageView } from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (hasMarketingConsent()) {
      initFacebookPixel();
    }

    const handleRouteChange = () => {
      trackPageView();
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
