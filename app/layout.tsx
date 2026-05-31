import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  title: "Workplace AI Coach — Your pocket coach for work",
  description:
    "An AI coach that helps you handle tough conversations, write smarter messages, and grow at work — right from your phone.",
  metadataBase: new URL("https://workplace-ai-coach-landing.vercel.app"),
  openGraph: {
    title: "Workplace AI Coach",
    description: "Your pocket coach for tough work moments.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F19",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} 
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });`}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
