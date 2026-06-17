import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// FIX: Removed "900" from the weight array because Manrope only goes up to 800
const manrope = Manrope({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-manrope", 
});

export const metadata: Metadata = {
  title: "Wexoraa",
  description: "Modern Digital Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}