import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appshell from "@/components/layouts/Appshell";
import Navbar from "@/components/layouts/navbar";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KHYG1JVRW9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KHYG1JVRW9');
        `}
      </Script>
    
    <SessionProvider session={pageProps.session}>
      <Appshell>
        <Component {...pageProps} />
      </Appshell>
    </SessionProvider>
    </>
  );
}
