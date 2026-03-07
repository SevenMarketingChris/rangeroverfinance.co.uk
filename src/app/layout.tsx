import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Range Rover Finance | PCP, HP & Lease Deals | Free Calculator",
  description:
    "Compare Range Rover finance deals including PCP, HP and lease options. Free finance calculator for Range Rover, Sport, Evoque, Velar, Discovery and Defender.",
  keywords:
    "range rover finance, range rover pcp, range rover lease, range rover hp, land rover finance, range rover monthly payments",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-charcoal font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
