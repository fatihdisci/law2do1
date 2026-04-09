"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Mail,
  Scale,
  ArrowRight,
} from "lucide-react";
import { useState, type FormEvent } from "react";

const footerLinks = {
  urun: [
    { href: "/#features", label: "Özellikler" },
    { href: "/pricing", label: "Paketler" },
    { href: "/#how-it-works", label: "Nasıl Çalışır?" },
    { href: "/login", label: "Giriş Yap" },
  ],
  sirket: [
    { href: "/iletisim", label: "İletişim" },
    { href: "/sss", label: "SSS" },
    { href: "/hakkimizda", label: "Hakkımızda" },
  ],
  yasal: [
    { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
    { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
    { href: "/kvkk", label: "KVKK Aydınlatma" },
  ],
};

const socials = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:info@law2do.com",
    label: "E-posta",
    icon: Mail,
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative z-10 border-t border-border bg-card">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(hsl(var(--color-border))_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16">
        {/* ── Main Grid ── */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="group mb-5 inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                <Scale size={17} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Law<span className="text-primary">2</span>Do
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Avukatlar için tasarlanmış akıllı iş akışı yönetim sistemi.
              Dava süreçlerinizi otomatik iş akışlarına dönüştürün.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-muted/50 text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                    aria-label={social.label}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:col-span-5">
            {/* Product */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Ürün
              </h4>
              <ul className="space-y-3">
                {footerLinks.urun.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={11}
                        className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-60 group-hover/link:translate-x-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Şirket
              </h4>
              <ul className="space-y-3">
                {footerLinks.sirket.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={11}
                        className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-60 group-hover/link:translate-x-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                Hukuki
              </h4>
              <ul className="space-y-3">
                {footerLinks.yasal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group/link inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                    >
                      <span>{link.label}</span>
                      <ArrowRight
                        size={11}
                        className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-60 group-hover/link:translate-x-0"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
              Bülten
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Yeni özellikler ve hukuk teknolojisi güncellemelerinden haberdar olun.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center dark:border-emerald-800/50 dark:bg-emerald-950/30"
              >
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  ✓ Bültenimize abone oldunuz!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2.5">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-posta adresiniz"
                    required
                    className="h-11 w-full rounded-xl border border-border bg-background/80 px-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all duration-200 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                >
                  Abone Ol
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-14 border-t border-border pt-7">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Law2Do. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span>İzmir&apos;de ❤️ ile geliştirildi.</span>
            </div>

            <div className="flex items-center gap-4">
              <button className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                🇹🇷 Türkçe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
