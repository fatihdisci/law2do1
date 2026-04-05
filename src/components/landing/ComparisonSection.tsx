"use client";

import { motion } from 'framer-motion';
import {
  CheckCircle2, XCircle, Layout, Clock, Shield, FileText, MoreVertical
} from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/50 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4">
            Farkı Hissedin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Genel amaçlı yazılımlar vs. hukuk pratiği için tasarlanmış sistem
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT: Excel Mock - The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="relative group"
          >
            <div className="bg-card rounded-3xl border border-border p-4 sm:p-8 shadow-lg overflow-hidden h-full flex flex-col">

              {/* Excel Interface Mock */}
              <div className="relative flex-1 flex flex-col text-[10px] sm:text-xs font-sans select-none cursor-default border border-border rounded-lg overflow-hidden mb-6 shadow-inner">
                {/* Excel Toolbar — intentionally uses Excel's brand green in both modes */}
                <div className="bg-[#107c41] text-white px-3 py-2 flex items-center gap-3">
                  <div className="font-bold">Excel</div>
                  <div className="opacity-80 hidden sm:block">Giriş</div>
                  <div className="opacity-80 hidden sm:block">Ekle</div>
                  <div className="ml-auto opacity-80">Oturum Açın</div>
                </div>

                {/* Formula Bar */}
                <div className="bg-muted border-b border-border px-2 py-1 flex items-center gap-2 text-muted-foreground">
                  <span className="font-serif italic font-bold">fx</span>
                  <div className="bg-card border border-border w-full h-4 rounded-sm"></div>
                </div>

                {/* Grid Container */}
                <div className="flex-1 overflow-x-auto overflow-y-hidden relative bg-card">
                  {/* Header Row */}
                  <div className="flex border-b border-border bg-muted font-bold text-muted-foreground min-w-[280px]">
                    <div className="w-6 sm:w-8 border-r border-border flex items-center justify-center bg-muted/80"></div>
                    <div className="w-14 sm:w-20 border-r border-border px-1 py-0.5">A</div>
                    <div className="w-16 sm:w-24 border-r border-border px-1 py-0.5">B</div>
                    <div className="w-16 sm:w-24 border-r border-border px-1 py-0.5">C</div>
                    <div className="flex-1 border-r border-border px-1 py-0.5">D</div>
                  </div>

                  {/* Data Rows */}
                  {[
                    { id: 1, a: "2024/101", b: "Ahmet Y.", c: "Duruşma", d: "14.10.2024" },
                    { id: 2, a: "2024/102", b: "Mehmet K.", c: "Bilirkişi", d: "Rapor Bekleniyor" },
                    { id: 3, a: "2024/103", b: "Ayşe D.", c: "Karar", d: "İstinaf Süresi" },
                    { id: 4, a: "2024/104", b: "Fatma S.", c: "Tensip", d: "Gereği Yapılacak" },
                    { id: 5, a: "2024/105", b: "Ali V.", c: "Tanık", d: "Dinlenecek" },
                    { id: 6, a: "2024/106", b: "Veli Z.", c: "Keşif", d: "Araç Ayarlanacak" },
                    { id: 7, a: "2024/107", b: "Hasan B.", c: "Dilekçe", d: "Cevap Verilecek" },
                  ].map((row) => (
                    <div key={row.id} className="flex border-b border-border/50 min-w-[280px]">
                      <div className="w-6 sm:w-8 border-r border-border flex items-center justify-center bg-muted font-semibold text-muted-foreground">
                        {row.id}
                      </div>
                      <div className="w-14 sm:w-20 border-r border-border/50 px-1 py-0.5 truncate text-foreground">{row.a}</div>
                      <div className="w-16 sm:w-24 border-r border-border/50 px-1 py-0.5 truncate text-foreground">{row.b}</div>
                      <div className="w-16 sm:w-24 border-r border-border/50 px-1 py-0.5 truncate text-foreground">{row.c}</div>
                      <div className="flex-1 border-r border-border/50 px-1 py-0.5 truncate text-muted-foreground">{row.d}</div>
                    </div>
                  ))}
                  {/* Empty Rows */}
                  {[8, 9, 10, 11, 12].map(i => (
                    <div key={i} className="flex border-b border-border/50 min-w-[280px]">
                      <div className="w-6 sm:w-8 border-r border-border flex items-center justify-center bg-muted font-semibold text-muted-foreground">{i}</div>
                      <div className="w-14 sm:w-20 border-r border-border/50 px-1 py-0.5"></div>
                      <div className="w-16 sm:w-24 border-r border-border/50 px-1 py-0.5"></div>
                      <div className="w-16 sm:w-24 border-r border-border/50 px-1 py-0.5"></div>
                      <div className="flex-1 border-r border-border/50 px-1 py-0.5"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Label */}
              <div className="flex items-center justify-center gap-3 pt-2 mt-auto border-t border-border">
                <XCircle size={24} className="text-red-500" />
                <span className="text-base sm:text-xl font-black text-foreground">Dağınık • Karmaşık • Kaybolan İşler</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Law2Do - The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="relative group"
          >
            <div className="bg-card rounded-3xl border border-border p-4 sm:p-8 shadow-2xl overflow-hidden h-full flex flex-col relative">
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

              {/* Header */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                    <Layout size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Law2Do Asistan</h3>
                    <p className="text-xs text-muted-foreground font-medium">Günlük İş Akışı</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">Sistem Aktif</span>
                </div>
              </div>

              {/* Smart Task List */}
              <div className="space-y-3 relative z-10 flex-1">

                {/* Task 1: Urgent Hearing */}
                <div className="bg-card border border-primary/20 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/40 transition-all group/item cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded border border-primary/20">2024/101</span>
                      <span className="bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 text-[10px] font-bold px-2 py-0.5 rounded border border-red-100 dark:border-red-900/50 flex items-center gap-1 animate-pulse">
                        <Clock size={10} /> BUGÜN 14:30
                      </span>
                    </div>
                    <div className="text-muted-foreground/40 group-hover/item:text-primary transition-colors">
                      <MoreVertical size={16} />
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Duruşma: Ahmet Y.</h4>
                      <p className="text-xs text-muted-foreground">14. Asliye Hukuk Mahkemesi</p>
                    </div>
                  </div>
                </div>

                {/* Task 2: Waiting Report */}
                <div className="bg-muted/50 border border-border rounded-xl p-4 opacity-75 hover:opacity-100 transition-opacity">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded">2024/102</span>
                      <span className="bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-100 dark:border-amber-900/50">
                        BEKLİYOR
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Bilirkişi Raporu Takibi</h4>
                      <p className="text-xs text-muted-foreground">Rapor tanzimi bekleniyor</p>
                    </div>
                  </div>
                </div>

                {/* Task 3: High Priority */}
                <div className="bg-card border-l-4 border-l-orange-500 border-y border-r border-border rounded-r-xl p-4 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-start mb-2 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="bg-muted text-muted-foreground text-[10px] font-bold px-2 py-0.5 rounded">2024/107</span>
                      <span className="text-orange-600 dark:text-orange-400 text-[10px] font-bold flex items-center gap-1">
                        YÜKSEK ÖNCELİK
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="h-10 w-10 rounded-full bg-orange-50 dark:bg-orange-950/40 flex items-center justify-center shrink-0">
                      <FileText size={18} className="text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm">Cevap Dilekçesi</h4>
                      <p className="text-xs text-muted-foreground">Hazırlanması gerekiyor</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Label */}
              <div className="flex items-center justify-center gap-3 pt-6 mt-auto border-t border-border relative z-10">
                <CheckCircle2 size={24} className="text-emerald-500" />
                <span className="text-base sm:text-xl font-black text-foreground">Net • Düzenli • Kontrol Altında</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
