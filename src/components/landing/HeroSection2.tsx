"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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
const line1 = ['Süre', 'Kaçırma'];
const line2 = ['Korkusuyla', 'Uyumayın.'];

export function HeroSection2() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">

      {/* ── Background Image — large, shifted left, gradient mask on left edge ── */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden flex items-center">
        <img 
          src="/law2do1/hero2-image-final.png" 
          alt="" 
          className="absolute right-[-5%] lg:right-[-10%] top-1/2 -translate-y-1/2 w-[85%] lg:w-[75%] max-w-none object-contain"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 55%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,1) 55%)',
          }}
        />
      </div>

      {/* ── Dot grid layer ── */}
      <div className="absolute inset-0 hero-grid opacity-30 z-0 pointer-events-none" />

      {/* ── Radial spotlight ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 30% 50%, hsl(var(--color-primary) / 0.10) 0%, transparent 60%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-0 w-full flex">

        {/* LEFT: Copy */}
        <div className="max-w-3xl text-left">

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
                  className="gradient-text"
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
            UYAP&apos;tan dosyalarınızı tek tıkla çekin, görevlerinizi otomatikleştirin ve Law2do&apos;nun hatırlatıcıları sayesinde iş yükünüzü hafifletin.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://app.law2do.com"
              className="btn-shimmer relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              Hemen Başla — Ücretsiz
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
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

        </div>

      </div>

    </section>
  );
}
