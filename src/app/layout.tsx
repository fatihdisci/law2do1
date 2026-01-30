import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Law2Do | Avukatlar için Hukuki İş Akışı Yönetimi",
  description:
    "Law2Do, dava süreçlerini otonom iş akışlarına dönüştürür. Süre kaçırma riskini sıfıra indirin, operasyonel yükü üzerinizden atın.",
  keywords: [
    "avukat yazılımı",
    "hukuk bürosu yönetimi",
    "dava takip",
    "süre hesaplama",
    "hukuki iş akışı",
  ],
  authors: [{ name: "Law2Do" }],
  openGraph: {
    title: "Law2Do | Avukatlar için Hukuki İş Akışı Yönetimi",
    description:
      "Dava süreçlerini otonom iş akışlarına dönüştürün. 500+ avukatın tercihi.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
