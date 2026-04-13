"use client";

import Link from "next/link";
import { Wrench, BookOpen, Calculator, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ToolsTeaser() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="glass rounded-3xl border border-border p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Sol: Badge + Başlık + Açıklama */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Wrench size={13} /> Ücretsiz Araçlar
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 mb-3">
              Avukatlar İçin Ücretsiz{" "}
              <span className="gradient-text">Verimlilik Araçları</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              Yapay zeka komut rehberi ve pratik hesaplama araçlarıyla ofis
              rutinlerinizi hızlandırın.
            </p>
          </div>

          {/* Sağ: Mini araç pilleri + CTA */}
          <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
            {/* İki mini araç önizlemesi */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl border border-border">
                <BookOpen size={16} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  AI Prompt Kütüphanesi
                </span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-xl border border-border">
                <Calculator
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400 shrink-0"
                />
                <span className="text-sm font-medium text-foreground">
                  İşçilik Tazminatı Hesaplayıcı
                </span>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              className="w-full md:w-auto"
              asChild
            >
              <Link href="/araclar">
                Tüm Araçları İncele
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
