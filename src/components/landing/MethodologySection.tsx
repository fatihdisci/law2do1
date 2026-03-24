"use client";

import { motion } from 'framer-motion';
import { Shield, CheckCircle2 } from 'lucide-react';

export function MethodologySection() {
  return (
    <section id="how-it-works" className="py-16 border-y border-border bg-gradient-to-b from-card to-background/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Sahanın İçinden, Pratiğe Uygun.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sadece &quot;yapılması gerekenleri&quot; değil, &quot;nasıl yapılması gerektiğini&quot; de bilen bir sistem.
            Hukuk pratiğinin işleyişine aykırı hiçbir gereksiz detay barındırmaz.
          </p>

          {/* Workflow Verified Badge */}
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
            <Shield size={18} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">Mevzuata Uygun İş Akışları</span>
            <CheckCircle2 size={16} className="text-emerald-600" />
          </div>
        </motion.div>

        {/* Workflow Animation - Marquee Style */}
        <div className="mt-12 relative overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {/* Task Items - Duplicated for seamless loop */}
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 shrink-0">
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  📋 Dava Dilekçesi Hazırla
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  📄 Delil Listesi Oluştur
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  ⏰ Cevap Süresi Takibi
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  📑 Bilirkişi Raporu İncele
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  🔔 Duruşma Hatırlatması
                </div>
                <div className="px-4 py-2 bg-card rounded-lg border border-border shadow-sm text-sm font-medium text-foreground whitespace-nowrap">
                  ✅ Karar Tebliği Al
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
