// pages/_app.js
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CookieBanner from "../components/cookie/CookieBanner";
import * as fbq from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (!hasMarketingConsent()) return;

    fbq.pageview();

    const handleRouteChange = () => {
      fbq.pageview();
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
