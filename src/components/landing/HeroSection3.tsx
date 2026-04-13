"use client";

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const line1 = ['Süre', 'Kaçırma'];
const line2 = ['Korkusuyla', 'Uyumayın.'];

/* ─── Scroll-animated dashed path ── */
function AnimPath({ d, range, progress }: {
  d: string; range: [number, number]; progress: MotionValue<number>;
}) {
  const pathLength = useTransform(progress, range, [0, 1]);
  return (
    <motion.path
      d={d} fill="none"
      stroke="#6366f1" strokeWidth="1.5" strokeDasharray="6 5"
      style={{ pathLength }}
    />
  );
}

/*
  viewBox: 0 0 860 280

  Başlangıç pill:   x=320 y=10  w=140 h=36   center-x=390  bottom=46
  Split junction:   (390, 90)
  ─ left branch →  Kontrol: x=10  y=110  w=180 h=140  center=(100,180)  top=(100,110)
  ─ right branch → Görev:   x=250 y=140  w=168 h=130  center=(334,205)  top=(334,140)
  Görev right →    Bilirkişi: x=468 y=140 w=168 h=130  left=(468,205)   right=(636,205)
  Bilirkişi right → Bitiş:   x=710 y=192 w=130 h=38   center=(775,211)  left=(710,211)

  Horizontal connections (all at y=205 mid-card):
  Kontrol right (190,205) → dashed box left (245,205) → Görev left (250,205)
  Görev right (418,205)   → Bilirkişi left (468,205)
  Bilirkişi right (636,205) → Bitiş left (710,211)
*/

export function HeroSection3() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        <div className="absolute inset-0 hero-grid opacity-30 z-0 pointer-events-none" />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 60% at 30% 50%, hsl(var(--color-primary) / 0.10) 0%, transparent 60%)',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8">

          {/* ── LEFT: Copy ── */}
          <div className="max-w-xl text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
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

            <motion.h1 variants={stagger} initial="hidden" animate="show"
              className="text-5xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-6">
              <span className="flex flex-wrap gap-x-[0.3em] text-foreground mb-1">
                {line1.map((w) => (
                  <motion.span key={w} variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}>{w}</motion.span>
                ))}
              </span>
              <span className="flex flex-wrap gap-x-[0.3em]">
                {line2.map((w) => (
                  <motion.span key={w} variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="gradient-text">{w}</motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-lg text-muted-foreground mb-10 leading-relaxed"
            >
              UYAP&apos;tan dosyalarınızı tek tıkla çekin, görevlerinizi otomatikleştirin ve Law2do&apos;nun hatırlatıcıları sayesinde iş yükünüzü hafifletin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://app.law2do.com"
                className="btn-shimmer relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group">
                Hemen Başla — Ücretsiz
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <Link href="/#how-it-works"
                className="inline-flex items-center justify-center gap-2.5 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted hover:border-border/80 transition-all duration-200">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                  <Play size={14} className="fill-primary translate-x-0.5" />
                </span>
                Nasıl Çalışır?
              </Link>
            </motion.div>
          </div>

          {/* ── RIGHT: Flow diagram ── */}
          <div className="hidden lg:block">
            <svg viewBox="0 0 860 280" className="w-full" xmlns="http://www.w3.org/2000/svg">

              {/* ══ STATIC NODES (always visible) ══ */}

              {/* Başlangıç */}
              <rect x="320" y="10" width="140" height="36" rx="18" fill="#16a34a" />
              <polygon points="337,20 337,34 348,27" fill="white" opacity="0.9" />
              <text x="356" y="33" fontSize="13" fontWeight="700" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">Başlangıç</text>

              {/* Kontrol Listesi card */}
              {/* dashed outer border */}
              <rect x="5" y="105" width="190" height="150" rx="12"
                fill="none" stroke="#6366f1" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.7" />
              {/* card */}
              <rect x="10" y="110" width="180" height="140" rx="10" fill="#0f172a" />
              {/* blue header */}
              <rect x="10" y="110" width="180" height="44" rx="10" fill="#1d4ed8" />
              <rect x="10" y="134" width="180" height="20" fill="#1d4ed8" />
              {/* header icon + title */}
              <rect x="22" y="122" width="9" height="9" rx="1.5" fill="none" stroke="white" strokeWidth="1.2" />
              <text x="36" y="132" fontSize="11" fontWeight="700" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">Kontrol Listesi</text>
              {/* items */}
              <text x="22" y="175" fontSize="9.5" fill="#475569"
                fontFamily="system-ui,-apple-system,sans-serif">☑  ARABULUCULUK</text>
              <text x="22" y="196" fontSize="9.5" fill="#475569"
                fontFamily="system-ui,-apple-system,sans-serif">☑  SGK HİZMET DÖKÜMÜ</text>

              {/* Görev / DAVA DİLEKÇESİ card */}
              <rect x="245" y="135" width="178" height="135" rx="12"
                fill="none" stroke="#6366f1" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.7" />
              <rect x="250" y="140" width="168" height="125" rx="10" fill="#0f172a" />
              <rect x="250" y="140" width="168" height="44" rx="10" fill="#b45309" />
              <rect x="250" y="164" width="168" height="20" fill="#b45309" />
              <text x="264" y="160" fontSize="9.5" fontWeight="700" fill="white" opacity="0.85"
                fontFamily="system-ui,-apple-system,sans-serif">≡  Görev</text>
              <text x="264" y="207" fontSize="11" fontWeight="700" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">DAVA DİLEKÇESİ</text>
              <text x="264" y="228" fontSize="9" fill="#64748b"
                fontFamily="system-ui,-apple-system,sans-serif">⊙  Aynı gün</text>

              {/* BİLİRKİŞİ RAPORU card */}
              <rect x="463" y="135" width="178" height="135" rx="12"
                fill="none" stroke="#6366f1" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.7" />
              <rect x="468" y="140" width="168" height="125" rx="10" fill="#0f172a" />
              <rect x="468" y="140" width="168" height="44" rx="10" fill="#b45309" />
              <rect x="468" y="164" width="168" height="20" fill="#b45309" />
              <text x="482" y="160" fontSize="9" fontWeight="700" fill="white" opacity="0.85"
                fontFamily="system-ui,-apple-system,sans-serif">≡  BİLİRKİŞİ RAPORU</text>
              {/* notification dot */}
              <circle cx="623" cy="149" r="7" fill="#d97706" />
              <text x="623" y="153" textAnchor="middle" fontSize="9" fontWeight="800" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">!</text>
              <text x="482" y="207" fontSize="11" fontWeight="700" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">Görev başlığı...</text>
              <text x="482" y="228" fontSize="9" fill="#64748b"
                fontFamily="system-ui,-apple-system,sans-serif">⊙  Aynı gün</text>

              {/* Bitiş pill */}
              <rect x="685" y="185" width="130" height="36" rx="18"
                fill="none" stroke="#6366f1" strokeWidth="1.4" strokeDasharray="5 4" opacity="0.7" />
              <rect x="690" y="190" width="120" height="30" rx="15" fill="#dc2626" />
              <line x1="703" y1="197" x2="703" y2="213" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M 703 198 L 713 202 L 703 207 Z" fill="white" opacity="0.9" />
              <text x="720" y="210" fontSize="12.5" fontWeight="700" fill="white"
                fontFamily="system-ui,-apple-system,sans-serif">Bitiş</text>

              {/* ══ ANIMATED PATHS (drawn on scroll, left→right) ══ */}

              {/* 1. Başlangıç bottom → junction (390,90) */}
              <AnimPath d="M 390 46 L 390 90" range={[0.0, 0.15]} progress={scrollYProgress} />

              {/* 2. Junction → left → Kontrol top (100,110) */}
              <AnimPath d="M 390 90 L 100 90 L 100 110" range={[0.12, 0.28]} progress={scrollYProgress} />

              {/* 3. Junction → Görev top (334,140) — goes right then down */}
              <AnimPath d="M 390 90 L 334 90 L 334 140" range={[0.10, 0.24]} progress={scrollYProgress} />

              {/* 4. Kontrol right (190,205) → "tamamlandığında" label area → Görev left (250,205) */}
              <AnimPath d="M 190 205 L 250 205" range={[0.30, 0.50]} progress={scrollYProgress} />

              {/* 5. Görev right (418,205) → Bilirkişi left (468,205) */}
              <AnimPath d="M 418 205 L 468 205" range={[0.52, 0.68]} progress={scrollYProgress} />

              {/* 6. Bilirkişi right (636,205) → Bitiş left (690,205) */}
              <AnimPath d="M 636 205 L 685 205" range={[0.70, 0.85]} progress={scrollYProgress} />

              {/* ══ "tamamlandığında" labels (static, sit on top of paths) ══ */}
              <rect x="165" y="196" width="110" height="18" rx="9" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
              <text x="220" y="209" textAnchor="middle" fontSize="8" fill="#64748b"
                fontFamily="system-ui,-apple-system,sans-serif">tamamlandığında</text>

              <rect x="383" y="196" width="110" height="18" rx="9" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
              <text x="438" y="209" textAnchor="middle" fontSize="8" fill="#64748b"
                fontFamily="system-ui,-apple-system,sans-serif">tamamlandığında</text>

              <rect x="600" y="196" width="110" height="18" rx="9" fill="#0f172a" stroke="#334155" strokeWidth="0.8" />
              <text x="655" y="209" textAnchor="middle" fontSize="8" fill="#64748b"
                fontFamily="system-ui,-apple-system,sans-serif">tamamlandığında</text>

              {/* ══ connector dots (static) ══ */}
              <circle cx="390" cy="90"  r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="100" cy="110" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="334" cy="140" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="190" cy="205" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="250" cy="205" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="418" cy="205" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="468" cy="205" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />
              <circle cx="636" cy="205" r="4.5" fill="#0f172a" stroke="#475569" strokeWidth="1.2" />

              {/* ══ ▼ triangle arrows (static) ══ */}
              <polygon points="100,103 94,91 106,91" fill="#3b82f6" />
              <polygon points="334,133 328,121 340,121" fill="#3b82f6" />
              <polygon points="552,133 546,121 558,121" fill="#3b82f6" />

            </svg>
          </div>

        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50 text-xs pointer-events-none"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ opacity: scrollHintOpacity }}
        >
          <span>Akışı görmek için kaydırın</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            className="w-0.5 h-5 rounded-full bg-current"
          />
        </motion.div>

      </div>
    </section>
  );
}
