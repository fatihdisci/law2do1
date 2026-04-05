import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
