import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    <html lang="tr" className={`scroll-smooth ${inter.variable} ${jakarta.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
