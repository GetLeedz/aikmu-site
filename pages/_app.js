// pages/_app.js
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";
import CookieBanner from "../components/cookie/CookieBanner";
import * as fbq from "../components/lib/fbpixel";
import { hasMarketingConsent } from "../components/lib/consent";

const FB_PIXEL_ID = "1285613311599646";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [marketingOk, setMarketingOk] = useState(false);

  useEffect(() => {
    // initialer Consent-Status
    setMarketingOk(hasMarketingConsent());

    // wenn dein Banner Consent speichert, triggere danach dieses Event:
    const handler = () => setMarketingOk(hasMarketingConsent());
    window.addEventListener("getleedz:consent-updated", handler);
    return () => window.removeEventListener("getleedz:consent-updated", handler);
  }, []);

  useEffect(() => {
    if (!marketingOk) return;

    // erster PageView
    fbq.pageview();

    // PageView bei jedem Routenwechsel
    const handleRouteChange = () => fbq.pageview();
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events, marketingOk]);

  return (
    <>
      {/* FB Script NUR wenn Consent true */}
      {marketingOk && (
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
          `}
        </Script>
      )}

      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
