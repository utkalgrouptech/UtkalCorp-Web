
import "./globals.css";
import Footer from "@/layouts/Footer";
import { Navbar } from "@/components/program/navbar";


export const metadata = {
  title: "Utkal Corporation",
  icons: {
    icon: "/favicon.ico", // or "/favicon.ico"
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
      <body
        className=" " 
        
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
