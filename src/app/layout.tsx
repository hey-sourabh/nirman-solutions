import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

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
  title: "Nirman Solutions | Architecture & Luxury Interior Design",
  description:
    "Transforming spaces into timeless experiences. Nirman Solutions delivers bespoke architectural blueprints, sustainable construction planning, and luxury interior design.",
  keywords: [
    "Architecture Studio",
    "Interior Design",
    "Nirman Solutions",
    "Luxury Residential",
    "Commercial Architecture",
    "Sustainable Masterplanning",
  ],
  authors: [{ name: "Nirman Solutions" }],
  openGraph: {
    title: "Nirman Solutions | Architecture & Luxury Interior Design",
    description:
      "Crafting spaces of timeless distinction. Discover bespoke architectural engineering and contemporary interior styling.",
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
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} dark`}>
      <body className="min-h-screen bg-[#0d0f12] text-zinc-100 font-sans antialiased selection:bg-[#c6a676] selection:text-black">
        {children}
      </body>
    </html>
  );
}
