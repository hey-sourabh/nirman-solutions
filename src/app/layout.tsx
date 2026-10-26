import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nirman Site Solutions | Architecture, Design & Construction",
  description:
    "Design • Plan • Build • Project Solutions. Nirman Site Solutions delivers bespoke architectural blueprints, sustainable construction planning, and luxury interior design.",
  keywords: [
    "Nirman Site Solutions",
    "Architecture Studio",
    "Design Plan Build",
    "Construction Solutions",
    "Interior Design",
    "Luxury Residential",
    "Commercial Architecture",
  ],
  authors: [{ name: "Nirman Site Solutions" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Nirman Site Solutions | Architecture & Construction",
    description:
      "Design • Plan • Build • Project Solutions. Crafting spaces of timeless distinction.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} light`}>
      <body className="min-h-screen bg-[#FAF8F5] text-[#16191D] font-sans antialiased selection:bg-[#C6A676] selection:text-white">
        {children}
      </body>
    </html>
  );
}
