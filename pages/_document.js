// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>{/* Kein Facebook Pixel hier – nur nach Consent clientseitig */}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
