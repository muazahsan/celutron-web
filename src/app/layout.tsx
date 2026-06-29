import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celutron Innovations — Engineering the Future of Human Tissue Regeneration",
  description: "Advanced bioprinting systems and clinical-grade patient-specific bioinks for tissue engineering and regenerative medicine research.",
  keywords: [
    "bioprinting", "tissue engineering", "regenerative medicine", 
    "biofabrication", "biomembranes", "stem cell engineering", 
    "scaffold engineering", "bioink", "bioprinter India", "Celutron"
  ],
  authors: [{ name: "Celutron Innovations Private Limited" }],
  openGraph: {
    title: "Celutron Innovations — Engineering the Future of Human Tissue Regeneration",
    description: "Advanced bioprinting systems and clinical-grade patient-specific bioinks for tissue engineering and regenerative medicine research.",
    type: "website",
    locale: "en_US",
    siteName: "Celutron Innovations",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} font-sans bg-clinical-bg text-clinical-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
