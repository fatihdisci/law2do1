"use client";

import { Layout, CheckCircle2, AlertTriangle, Bell, FileText, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── Shared variants ── */
const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-6 max-w-7xl mx-auto relative z-10">

      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-5">
          <Layout size={13} /> Temel Özellikler
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight mb-5">
          Hukuk Pratiğinize Özel{' '}
          <span className="gradient-text">Üç Çözüm.</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Her özellik, avukatlık pratiğinin gerçek ihtiyaçlarından doğdu.
          Genel amaçlı araçlar değil — sadece sizin için.
        </p>
      </motion.div>

      {/* ── Bento grid ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >

        {/* ── CARD 1 (large) — İş Akışı ── */}
        <motion.div
          variants={cardVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-7 group"
        >
          <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-300">

            {/* Gradient accent top strip */}
            <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary-500 to-primary/40" />

            <div className="p-8 md:p-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 text-primary mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-primary/20 transition-all duration-300">
                <Layout size={26} strokeWidth={1.8} />
              </div>

              <h3 className="text-2xl font-black text-foreground mb-3">
                İş Akışlarınızı Hatasız Bir Düzenle Yönetin
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Dosya türünü seçtiğinizde sistem yapılması gerekenleri adım adım önünüze getirir. Artık "acaba göndermiş miydim?" diye düşünmezsiniz.
              </p>

              {/* Mini workflow mockup */}
              <div className="relative bg-muted/50 rounded-2xl p-5 border border-border overflow-hidden">
                {/* Connector line */}
                <div className="absolute left-[2.65rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-300 to-border z-0" />

                <div className="space-y-3 relative z-10">
                  {/* Case type selector */}
                  <div className="bg-card rounded-xl px-4 py-3 border border-border flex items-center justify-between mb-5 shadow-sm">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-0.5">DOSYA TÜRÜ</p>
                      <p className="text-sm font-bold text-foreground">Sigorta Tahkim Başvurusu</p>
                    </div>
                    <span className="flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-lg">
                      <CheckCircle2 size={9} /> SEÇİLDİ
                    </span>
                  </div>

                  {[
                    { done: true,  label: 'Başvuru Formunu Hazırla',    sub: 'Tamamlandı' },
                    { done: true,  label: 'Sigorta Şirketi Başvurusu',  sub: 'Tamamlandı (15 Gün Doldu)' },
                    { done: false, label: 'Komisyona Başvuru Yap',      sub: 'Sıradaki Görev', active: true },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                        step.active
                          ? 'bg-primary text-primary-foreground border-primary/30 shadow-lg shadow-primary/20 scale-[1.02]'
                          : 'bg-card border-border'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold text-sm border-4 ${
                        step.active
                          ? 'bg-primary-foreground text-primary border-primary/20'
                          : 'bg-emerald-500 text-white border-card'
                      }`}>
                        {step.done && !step.active ? <CheckCircle2 size={15} /> : i + 1}
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-bold truncate ${step.done && !step.active ? 'line-through opacity-60' : ''}`}>{step.label}</p>
                        <p className={`text-[10px] ${step.active ? 'text-primary-foreground/70' : 'text-emerald-600 dark:text-emerald-400'}`}>{step.sub}</p>
                      </div>
                      {step.active && <div className="ml-auto w-2 h-2 bg-emerald-400 rounded-full animate-pulse shrink-0" />}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary group/link cursor-pointer w-fit">
                Daha fazla öğren
                <ArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right column: 2 stacked cards ── */}
        <div className="lg:col-span-5 flex flex-col gap-6">

          {/* ── CARD 2 — Günlük Panel ── */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group flex-1"
          >
            <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-secondary/10 hover:-translate-y-1.5 transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-secondary-500 via-primary to-secondary-500/40" />

              <div className="p-7">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20 text-secondary-600 dark:text-secondary-400 mb-5 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Layout size={22} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-black text-foreground mb-2">
                  Tek Ekrandan Tam Hakimiyet
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Bugünkü görevler, haftalık yoğunluk ve gecikmeler tek bir panelde.
                </p>

                {/* Mini stat bar */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { n: '3',  label: 'Bugün',    cls: 'bg-primary/10 text-primary' },
                    { n: '8',  label: 'Hafta',    cls: 'bg-primary/5 text-foreground' },
                    { n: '2',  label: 'Gecikmiş', cls: 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400' },
                  ].map(({ n, label, cls }) => (
                    <div key={label} className={`${cls} rounded-xl p-3 text-center border border-border/50`}>
                      <div className="text-2xl font-black">{n}</div>
                      <div className="text-[9px] uppercase tracking-wider opacity-70 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Task rows */}
                <div className="space-y-1.5">
                  {[
                    { dot: 'bg-red-400',    text: 'Cevap Dilekçesi Hazırla', badge: 'GECİKMİŞ',   bc: 'text-red-500' },
                    { dot: 'bg-amber-400',  text: 'Duruşma Hazırlığı',       badge: 'BUGÜN',      bc: 'text-amber-500' },
                    { dot: 'bg-emerald-400',text: 'Bilirkişi Raporu İncele', badge: 'Yarın',      bc: 'text-muted-foreground' },
                  ].map(({ dot, text, badge, bc }) => (
                    <div key={text} className="flex items-center gap-2.5 bg-muted/50 px-3 py-2.5 rounded-lg border border-border/50">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                      <span className="text-xs text-foreground/80 flex-1 truncate">{text}</span>
                      <span className={`text-[9px] font-bold ${bc} shrink-0`}>{badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── CARD 3 — Akıllı Hatırlatıcı ── */}
          <motion.div
            variants={cardVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="group flex-1"
          >
            <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300">
              <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-red-400" />

              <div className="p-7">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/20 text-amber-600 dark:text-amber-400 mb-5 shadow-sm group-hover:scale-110 transition-all duration-300">
                  <Bell size={22} strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-black text-foreground mb-2">
                  Kritik Süreleri Asla Kaçırmayın
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Son tarih yaklaştığında 3—7—14 gün öncesinden otomatik e-posta ve uygulama içi uyarılar.
                </p>

                {/* Notification stack */}
                <div className="space-y-2">
                  {[
                    {
                      icon: AlertTriangle, iconCls: 'text-red-400', bg: 'bg-red-50 dark:bg-red-950/30 border-red-100 dark:border-red-900/40',
                      label: 'ACİL',   labelCls: 'text-red-500',
                      text:  'Temyiz dilekçesi son tarihi yarın!', time: '2s önce',
                    },
                    {
                      icon: FileText, iconCls: 'text-primary', bg: 'bg-primary/5 border-primary/10',
                      label: 'E-POSTA', labelCls: 'text-primary',
                      text:  'Cevap dilekçesi için 3 gün kaldı.', time: 'Dün',
                    },
                    {
                      icon: Clock, iconCls: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-100 dark:border-emerald-900/40',
                      label: 'PLANLI', labelCls: 'text-emerald-600 dark:text-emerald-400',
                      text:  'İstinaf başvurusu süresi dolacak.', time: '7g sonra',
                    },
                  ].map(({ icon: Icon, iconCls, bg, label, labelCls, text, time }, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 px-3 py-2.5 rounded-xl border ${bg} group-hover:translate-x-1 transition-transform`}
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <Icon size={14} className={`${iconCls} shrink-0 mt-0.5`} />
                      <div className="flex-1 min-w-0">
                        <span className={`text-[9px] font-black uppercase tracking-wider ${labelCls}`}>{label}</span>
                        <p className="text-xs text-foreground/80 truncate">{text}</p>
                      </div>
                      <span className="text-[9px] text-muted-foreground shrink-0 mt-0.5">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* ── Bottom CTA strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 bg-muted/50 rounded-2xl border border-border"
      >
        <div>
          <p className="font-bold text-foreground text-lg">Tüm özellikleri ücretsiz deneyin.</p>
          <p className="text-sm text-muted-foreground mt-0.5">14 gün, kredi kartı gerekmez, iptal tek tıkla.</p>
        </div>
        <a
          href="https://app.law2do.com"
          className="btn-shimmer relative overflow-hidden inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200 shrink-0 group"
        >
          Hemen Başla
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </motion.div>

    </section>
  );
}
