import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rangeroverfinance.co.uk"),
  title: "Range Rover Finance | PCP, HP & Lease Deals | Free Calculator",
  description:
    "Compare Range Rover finance deals including PCP, HP and lease options. Free finance calculator for Range Rover, Sport, Evoque, Velar, Discovery and Defender.",
  keywords:
    "range rover finance, range rover pcp, range rover lease, range rover hp, land rover finance, range rover monthly payments",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    siteName: "Range Rover Finance",
    title: "Range Rover Finance | PCP, HP & Lease Deals | Free Calculator",
    description:
      "Compare Range Rover finance deals including PCP, HP and lease options. Free finance calculator for Range Rover, Sport, Evoque, Velar, Discovery and Defender.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Range Rover Finance | PCP, HP & Lease Deals | Free Calculator",
    description:
      "Compare Range Rover finance deals including PCP, HP and lease options. Free finance calculator for Range Rover, Sport, Evoque, Velar, Discovery and Defender.",
  },
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
