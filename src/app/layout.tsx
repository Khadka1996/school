import type { Metadata } from "next";
import { Inter, Noto_Sans_Devanagari } from "next/font/google";

import "@/app/globals.css";
import { Navbar } from "@/components/navbar";
import { TopInfoBar } from "@/components/top-info-bar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const noto = Noto_Sans_Devanagari({ subsets: ["devanagari"], variable: "--font-nepali" });

export const metadata: Metadata = {
  title: "Shree Panchthar Secondary School",
  description: "Official website of Shree Panchthar Secondary School, Panchthar District, Nepal.",
  keywords: [
    "Shree Panchthar Secondary School",
    "Panchthar school",
    "Nepal education",
    "School admission Nepal",
  ],
  openGraph: {
    title: "Shree Panchthar Secondary School",
    description: "Trusted government school in Panchthar, Nepal. Admissions, notices, academics and contact.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree Panchthar Secondary School",
    description: "Admissions, notices and academics in Panchthar, Nepal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${noto.variable} font-sans`}>
        <TopInfoBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
