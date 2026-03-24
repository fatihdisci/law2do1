"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="py-24 px-6 bg-background/50 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
          Excel Dosyalarıyla Vedalaşın.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Kurulum yok. Kredi kartı gerekmez. İlk dosyanızı oluşturmak sadece 2 dakika sürer.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/dashboard"
            className="bg-emerald-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-500 hover:-translate-y-1 transition-all shadow-xl shadow-emerald-600/20"
          >
            Ücretsiz Denemeyi Başlat
          </Link>
          <Link
            href="/pricing"
            className="bg-card text-foreground border border-border px-10 py-4 rounded-xl font-bold text-lg hover:bg-card hover:border-slate-300 hover:shadow-sm transition-all"
          >
            Paketleri İncele
          </Link>
        </div>
        <p className="mt-8 text-xs text-muted-foreground font-medium">
          14 gün boyunca tüm özelliklere sınırsız erişim. İptal etmek tek tıkla.
        </p>
      </motion.div>
    </section>
  );
}
