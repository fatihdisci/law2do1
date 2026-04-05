"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";

const SPARKLES = [
  { left: "8%", top: "18%", delay: 0.1, duration: 3.4 },
  { left: "20%", top: "74%", delay: 0.5, duration: 4.1 },
  { left: "76%", top: "16%", delay: 0.9, duration: 3.7 },
  { left: "88%", top: "72%", delay: 0.2, duration: 4.4 },
  { left: "58%", top: "8%", delay: 0.7, duration: 3.2 },
];

const TRUST_ITEMS = [
  "Kredi kartı gerekmez",
  "14 gün ücretsiz",
  "İptal istediğinde",
];

export function CtaSection() {
  const noiseBackground =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='.9'/%3E%3C/svg%3E\")";

  return (
    <section className="relative z-10 overflow-hidden px-4 py-24 sm:px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/18 via-background to-emerald-500/14 dark:from-primary/24 dark:via-background dark:to-cyan-500/16" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(hsl(var(--color-neutral-1000))_0.8px,transparent_0.8px)] [background-size:14px_14px] dark:opacity-[0.18]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/50 bg-white/72 p-8 shadow-[0_30px_120px_-45px_hsl(var(--color-primary)/0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-white/6 md:p-12"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--color-primary)/0.14),transparent_35%,hsl(var(--color-accent-500)/0.14))]" />
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-soft-light"
          style={{ backgroundImage: noiseBackground }}
        />

        {SPARKLES.map((sparkle, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 0.65, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              ease: "easeOut",
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.6,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.35, 0.9, 0.35],
              scale: [1, 1.18, 1],
            }}
            className="pointer-events-none absolute text-primary/70 transition-transform duration-500 group-hover:scale-125 group-hover:text-accent"
            style={{
              left: sparkle.left,
              top: sparkle.top,
            }}
          >
            <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
          </motion.div>
        ))}

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.14 }}
              className="font-display text-4xl font-black leading-[1.05] tracking-[-0.04em] text-foreground md:text-6xl"
            >
              Hukuk büronuzu
              <span className="block bg-gradient-to-r from-primary via-sky-500 to-emerald-500 bg-clip-text text-transparent">
                bir üst seviyeye taşıyın.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.22 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0"
            >
              Law2Do ile duruşmalar, görevler ve ekip akışı tek merkezde buluşur.
              Excel dağınıklığını bırakın; ilk günden daha sakin, daha görünür ve
              daha kontrollü bir çalışma düzenine geçin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[0_18px_40px_-18px_hsl(var(--color-primary)/0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 hover:shadow-[0_24px_48px_-18px_hsl(var(--color-primary)/0.95)]"
              >
                Hemen Başla
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border/80 bg-background/70 px-8 py-4 text-base font-bold text-foreground shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-background"
              >
                <PlayCircle className="h-5 w-5 text-primary" />
                Demo İzle
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.38 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground lg:justify-start"
            >
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 bg-background/70 px-4 py-2 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-emerald-400/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(160deg,hsl(var(--color-neutral-0)/0.95),hsl(var(--color-primary-50)/0.82))] p-6 shadow-2xl dark:border-white/10 dark:bg-[linear-gradient(160deg,hsl(var(--color-neutral-100)/0.96),hsl(var(--color-primary-100)/0.24))]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/80">
                    Bugünün özeti
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-foreground">
                    Hazırsınız.
                  </h3>
                </div>
                <div className="rounded-2xl bg-emerald-500/12 px-3 py-2 text-right text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  6 görev tamamlandı
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                    <span>Yarınki duruşmalar</span>
                    <span className="text-primary">3 kayıt</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Uyarı yok
                    </p>
                    <p className="mt-2 text-3xl font-black text-foreground">0</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Kaçırılan görev bulunmuyor
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-background/80 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Kazanılan zaman
                    </p>
                    <p className="mt-2 text-3xl font-black text-foreground">+6s</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Haftalık görünür rahatlama
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-primary/15 bg-primary/8 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-xl bg-primary/14 p-2 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        İlk dosyanızı dakikalar içinde içeri alın
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        Hazır şablonlarla başlangıç yükünü azaltın, ekipçe aynı ekranda
                        ilerleyin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
