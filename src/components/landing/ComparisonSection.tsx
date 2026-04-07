"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  FileText,
  LayoutDashboard,
  MoreVertical,
  Scale,
  Siren,
  Timer,
  TrendingUp,
  XCircle,
} from "lucide-react";

type ExcelRow = {
  id: number;
  fileNo: string;
  client: string;
  stage: string;
  note: string;
};

const EXCEL_ROWS: ExcelRow[] = [
  {
    id: 2,
    fileNo: "2024/102",
    client: "Mehmet K.",
    stage: "Bilirkişi",
    note: "Rapor bekleniyor",
  },
  {
    id: 3,
    fileNo: "2024/103",
    client: "Ayşe D.",
    stage: "Karar",
    note: "İstinaf süresi: 2 gün",
  },
  {
    id: 4,
    fileNo: "2024/104",
    client: "Fatma S.",
    stage: "Tensip",
    note: "Görev ataması yok",
  },
  {
    id: 5,
    fileNo: "2024/105",
    client: "Ali V.",
    stage: "Tanık",
    note: "Tebligat tarihi eksik",
  },
  {
    id: 6,
    fileNo: "2024/106",
    client: "Veli Z.",
    stage: "Keşif",
    note: "Takvim çakışması",
  },
  {
    id: 7,
    fileNo: "2024/107",
    client: "Hasan B.",
    stage: "Dilekçe",
    note: "Son gün: bugün",
  },
];

const stats = [
  { label: "İş Tamamlama Hızı", value: "3x daha hızlı", icon: TrendingUp },
  { label: "Kaçırılan Görev", value: "0 kayıp görev", icon: CheckCircle2 },
  { label: "Zaman Kazancı", value: "Haftada +6 saat", icon: Timer },
];

export function ComparisonSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-muted/40 px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(var(--color-border))_1px,transparent_1px)] [background-size:30px_30px] opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <h2 className="gradient-text mb-4 text-3xl font-black md:text-5xl">
            Farkı Hissedin
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Genel amaçlı dosya takibi ile hukuk pratiği için tasarlanmış gerçek iş
            akışı arasındaki farkı net görün.
          </p>
        </motion.div>

        <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
            className="group"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-lg sm:p-6">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1.5 text-xs font-bold text-red-600 dark:text-red-400">
                <AlertTriangle size={14} /> Sorun
              </div>

              <div className="relative mb-6 flex flex-1 flex-col overflow-hidden rounded-xl border border-border shadow-inner">
                <div className="flex items-center gap-2 border-b border-emerald-800 bg-emerald-700 px-3 py-2 text-[11px] text-white sm:text-xs">
                  <div className="font-bold tracking-wide">Excel</div>
                  <div className="rounded border border-white/30 bg-white/10 px-1.5 py-0.5 text-[10px]">
                    Otomatik Kaydet
                  </div>
                  <div className="ml-auto hidden items-center gap-2 text-white/85 sm:flex">
                    <span>Giriş</span>
                    <span>Ekle</span>
                    <span>Gözden Geçir</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-b border-border bg-muted/90 px-2 py-1 text-[11px] text-muted-foreground dark:bg-muted/40">
                  <span className="font-serif font-bold italic">fx</span>
                  <div className="h-5 w-full rounded-sm border border-border bg-card px-2 leading-5 text-[10px] text-muted-foreground">
                    =EĞER(TARİH-BUGÜN()&lt;=2;&quot;ACİL&quot;;&quot;NORMAL&quot;)
                  </div>
                </div>

                <div className="overflow-x-auto bg-card">
                  <div className="min-w-[390px]">
                    <div className="grid grid-cols-[36px_105px_110px_95px_1fr] border-b border-border bg-muted text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                      <div className="border-r border-border p-1.5 text-center">#</div>
                      <div className="border-r border-border p-1.5">Dosya</div>
                      <div className="border-r border-border p-1.5">Müvekkil</div>
                      <div className="border-r border-border p-1.5">Aşama</div>
                      <div className="p-1.5">Not</div>
                    </div>

                    <div className="grid grid-cols-[36px_105px_110px_95px_1fr] border-b border-red-200/70 bg-red-50/70 text-[11px] dark:border-red-900/60 dark:bg-red-950/30">
                      <div className="border-r border-border p-1.5 text-center font-semibold text-muted-foreground">
                        1
                      </div>
                      <div className="border-r border-border p-1.5 font-medium text-foreground">
                        2024/101
                      </div>
                      <div className="border-r border-border p-1.5 text-foreground">
                        Ahmet Y.
                      </div>
                      <div className="border-r border-border p-1.5 text-foreground">
                        Duruşma
                      </div>
                      <div className="truncate p-1.5 font-semibold text-red-600 dark:text-red-400">
                        14:30 bugün — manuel takip
                      </div>
                    </div>

                    {EXCEL_ROWS.map((row) => (
                      <div
                        key={row.id}
                        className="grid grid-cols-[36px_105px_110px_95px_1fr] border-b border-border/60 text-[11px]"
                      >
                        <div className="border-r border-border bg-muted/55 p-1.5 text-center font-semibold text-muted-foreground">
                          {row.id}
                        </div>
                        <div className="border-r border-border p-1.5 text-foreground">
                          {row.fileNo}
                        </div>
                        <div className="border-r border-border p-1.5 text-foreground">
                          {row.client}
                        </div>
                        <div className="border-r border-border p-1.5 text-foreground">
                          {row.stage}
                        </div>
                        <div className="truncate p-1.5 text-muted-foreground">
                          {row.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-center gap-3 border-t border-border pt-4">
                <XCircle size={22} className="text-red-500" />
                <span className="text-center text-base font-black text-foreground sm:text-lg">
                  Dağınık • Karmaşık • Kaybolan İşler
                </span>
              </div>
            </div>
          </motion.div>



          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.16 }}
            className="group"
          >
            <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-2xl sm:p-6">
              <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10 mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/12 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 size={14} /> Çözüm
              </div>

              <div className="relative z-10 mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25">
                    <LayoutDashboard size={19} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Law2Do Asistan</h3>
                    <p className="text-xs font-medium text-muted-foreground">
                      Günlük İş Akışı
                    </p>
                  </div>
                </div>
                <div className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  Sistem Aktif
                </div>
              </div>

              <div className="relative z-10 flex-1 space-y-3">
                <div className="rounded-xl border border-red-300/35 bg-red-50/70 p-4 shadow-sm dark:border-red-800/50 dark:bg-red-950/30">
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                        2024/101
                      </span>
                      <span className="inline-flex items-center gap-1 rounded border border-red-200 bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-600 dark:border-red-900/60 dark:bg-red-950/60 dark:text-red-400">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-80" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
                        </span>
                        ACİL
                      </span>
                    </div>
                    <MoreVertical size={16} className="text-muted-foreground/60" />
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/12 text-red-600 dark:text-red-400">
                        <Siren size={16} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">Duruşma: Ahmet Y.</h4>
                        <p className="text-xs text-muted-foreground">
                          14. Asliye Hukuk Mahkemesi
                        </p>
                      </div>
                    </div>
                    <div className="rounded-lg border border-red-200/80 bg-background px-2 py-1 text-center text-[10px] font-bold leading-tight text-red-600 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-400">
                      01:12:47
                      <div className="text-[9px] font-medium uppercase">kaldı</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-muted px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                      2024/102
                    </span>
                    <span className="inline-flex items-center gap-1 rounded border border-border bg-background px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                      <Clock3 size={10} /> BEKLİYOR
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Bilirkişi Raporu Takibi</h4>
                      <p className="text-xs text-muted-foreground">
                        Rapor tanzimi bekleniyor
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-orange-300/40 bg-orange-50/55 p-4 dark:border-orange-900/50 dark:bg-orange-950/25">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-background px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                        2024/107
                      </span>
                      <span className="rounded border border-orange-200 bg-orange-100 px-2 py-0.5 text-[10px] font-bold text-orange-700 dark:border-orange-900/70 dark:bg-orange-950/45 dark:text-orange-400">
                        YÜKSEK ÖNCELİK
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-400">
                      %72 tamamlandı
                    </span>
                  </div>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950/55 dark:text-orange-400">
                      <Scale size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground">Cevap Dilekçesi</h4>
                      <p className="text-xs text-muted-foreground">
                        Son kontrol ve teslim aşaması
                      </p>
                    </div>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-orange-200/70 dark:bg-orange-900/40">
                    <div className="h-full w-[72%] rounded-full bg-orange-500" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-5 flex items-center justify-center gap-3 border-t border-border pt-4">
                <CheckCircle2 size={22} className="text-emerald-500" />
                <span className="text-center text-base font-black text-foreground sm:text-lg">
                  Net • Düzenli • Kontrol Altında
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-3"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card/80 p-4 backdrop-blur-sm"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={16} />
                </div>
                <p className="text-lg font-black text-foreground">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
