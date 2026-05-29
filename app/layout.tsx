import "./globals.css";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import type { Metadata } from "next";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}