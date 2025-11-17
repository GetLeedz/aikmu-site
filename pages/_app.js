// pages/_app.js
import "../styles/globals.css";
import CookieBanner from "../components/cookie/CookieBanner";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}

export default MyApp;
