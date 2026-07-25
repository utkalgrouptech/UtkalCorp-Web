import "./globals.css";
import Script from "next/script";
import Footer from "@/layouts/Footer";
import { Navbar } from "@/components/program/navbar";

export const metadata = {
  title: "Utkal Corporation",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="">
        <Navbar />
        {children}
        <Footer />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WG0NHBVF8P"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WG0NHBVF8P');
          `}
        </Script>
      </body>
    </html>
  );
}