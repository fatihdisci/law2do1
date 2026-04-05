"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, Shield, Play, Clock, FileText, Bell, Layout,
  Star, Users, Award
} from 'lucide-react';

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* ── Headline words split for stagger animation ── */
const line1 = ['Dava', 'Takibinde'];
const line2 = ['Kusursuz', 'Bir', 'İş', 'Disiplini.'];

/* ── Marquee items (social proof logos as text) ── */
const marqueeItems = [
  { label: 'Baro Üyesi Avukatlar', icon: Award },
  { label: 'İstanbul Barosu', icon: Shield },
  { label: 'Ankara Barosu', icon: Shield },
  { label: 'Hukuk Büroları', icon: Users },
  { label: 'Sigorta Hukuku Uzmanları', icon: Award },
  { label: 'İzmir Barosu', icon: Shield },
  { label: 'Ticaret Hukuku Firmaları', icon: Users },
  { label: 'Aile Hukuku Avukatları', icon: Award },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">

      {/* ── Dot grid layer ── */}
      <div className="absolute inset-0 hero-grid opacity-50 z-0 pointer-events-none" />

      {/* ── Radial spotlight ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, hsl(var(--color-primary) / 0.12) 0%, transparent 70%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-0 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Copy */}
          <div className="lg:col-span-7 text-left">

            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Türkiye&apos;deki Avukatlar İçin Tasarlandı
              <ArrowRight size={12} className="ml-0.5 opacity-70" />
            </motion.div>

            {/* Headline — stagger per word */}
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-5xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6"
            >
              <span className="flex flex-wrap gap-x-[0.3em] text-foreground mb-1">
                {line1.map((w) => (
                  <motion.span key={w} variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}>
                    {w}
                  </motion.span>
                ))}
              </span>
              <span className="flex flex-wrap gap-x-[0.3em]">
                {line2.map((w, i) => (
                  <motion.span
                    key={w}
                    variants={fadeUp}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className={i === 0 ? 'gradient-text' : 'gradient-text'}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subheader */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl"
            >
              Dava süreçlerini kişisel takiplerden çıkarıp kurumsal bir disipline dönüştürün.
              Süre kaçırma riskini sıfıra indiren akıllı iş takip sistemiyle ofisinize tam hakimiyet sağlayın.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/dashboard"
                className="btn-shimmer relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                Hemen Başla — Ücretsiz
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted hover:border-border/80 transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                  <Play size={14} className="fill-primary translate-x-0.5" />
                </span>
                Nasıl Çalışır?
              </Link>
            </motion.div>

            {/* Social proof row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {/* Avatar stack */}
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {['#3b82f6','#8b5cf6','#10b981','#f59e0b'].map((color, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-background flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ background: color }}
                    >
                      {['AY','MK','FD','ZB'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">500+</span>
                <span className="text-sm text-muted-foreground">avukat kullanıyor</span>
              </div>

              <div className="h-4 w-px bg-border hidden sm:block" />

              {/* Star rating */}
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">4.9</span>
                <span className="text-sm text-muted-foreground">/ 5.0</span>
              </div>

              <div className="h-4 w-px bg-border hidden sm:block" />

              {/* Trust indicators */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                <CheckCircle2 size={13} className="text-emerald-500" />
                Kredi kartı gerekmez
              </div>
            </motion.div>
          </div>

          {/* RIGHT: 3‑D Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="relative perspective-1000 lg:col-span-5 lg:pl-4"
          >
            {/* Glow halo */}
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/15 to-secondary/10 rounded-[2.5rem] blur-2xl pointer-events-none" />

            {/* Card with 3D tilt */}
            <div
              className="relative bg-card rounded-2xl border border-border shadow-2xl shadow-primary/10 overflow-hidden"
              style={{ transform: 'perspective(800px) rotateY(-5deg) rotateX(3deg)' }}
            >
              {/* Browser chrome */}
              <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-card border border-border rounded-md text-[10px] font-mono text-muted-foreground shadow-sm">
                    <Shield size={9} strokeWidth={2} />
                    app.law2do.com
                  </div>
                </div>
              </div>

              {/* App UI */}
              <div className="p-5 bg-muted/20">

                {/* Case header */}
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">Ahmet Yılmaz v. Lojistik A.Ş.</h3>
                    <div className="flex items-center gap-1.5 mt-1 text-[10px] text-muted-foreground font-medium">
                      <Layout size={10} /> İş Mahkemesi
                      <span className="w-1 h-1 rounded-full bg-border" />
                      No: 2024/142
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[9px] font-bold border border-emerald-200/50 dark:border-emerald-800/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Aktif
                  </div>
                </div>

                {/* Task cards */}
                <div className="space-y-2.5">

                  {/* Completed */}
                  <div className="flex items-center gap-2.5 p-2.5 bg-card border border-border rounded-lg shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <p className="text-[10px] font-semibold text-muted-foreground line-through flex-1">Arabuluculuk Tutanağı Yükle</p>
                    <span className="text-[8px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded shrink-0">Tamam</span>
                  </div>

                  {/* Critical — highlighted */}
                  <div className="relative p-3 bg-card border-l-4 border-l-red-500 rounded-r-xl shadow-md ring-1 ring-border scale-[1.02]">
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 flex items-center justify-center shrink-0">
                        <FileText size={11} className="text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <p className="text-xs font-bold text-foreground">Dava Dilekçesini Hazırla</p>
                          <span className="text-[7px] font-black text-white bg-red-500 px-1.5 py-0.5 rounded tracking-wide animate-pulse">KRİTİK</span>
                        </div>
                        <p className="text-[9px] text-muted-foreground">Harç: ₺1.240,50 hesaplandı</p>
                      </div>
                    </div>
                    <button className="w-full bg-primary text-primary-foreground text-[9px] font-bold px-2 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">
                      Görevi Başlat
                    </button>
                  </div>

                  {/* Waiting */}
                  <div className="flex items-center gap-2.5 p-2.5 bg-muted/50 border border-border rounded-lg opacity-60">
                    <div className="w-5 h-5 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center shrink-0">
                      <Clock size={10} className="text-muted-foreground" />
                    </div>
                    <p className="text-[10px] font-semibold text-muted-foreground flex-1">Tebligat Takibi</p>
                    <span className="text-[8px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded shrink-0">Bekliyor</span>
                  </div>

                </div>
              </div>

              {/* Floating notification chip */}
              <div className="absolute -right-3 top-20 bg-foreground text-background text-[9px] font-semibold px-2.5 py-1.5 rounded-lg shadow-xl flex items-center gap-1.5 animate-bounce-slow z-20 whitespace-nowrap">
                <Bell size={9} className="text-amber-400 fill-amber-400 shrink-0" />
                Yeni süre hesaplandı
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Social proof marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-10 mt-20 py-6 border-y border-border/50 bg-muted/30 overflow-hidden"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-8">
          {[...Array(2)].map((_, si) => (
            <div key={si} className="flex gap-8 shrink-0 items-center">
              {marqueeItems.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors whitespace-nowrap"
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
