"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ArrowRight, Shield, Play, Clock, FileText, Bell, Layout
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* LEFT COLUMN: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-left lg:col-span-7"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border text-muted-foreground text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Türkiye&apos;deki Avukatlar İçin Tasarlandı
          </div>

          {/* HEADLINE */}
          <h1 className="text-5xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 tracking-tight">
            Dava Takibinde <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Kusursuz Bir İş Disiplini.
            </span>
          </h1>

          {/* SUBHEADER */}
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Dava süreçlerini kişisel takiplerden çıkarıp kurumsal bir disipline dönüştürün.
            Süre kaçırma riskini sıfıra indiren akıllı iş takip sistemiyle ofisinize tam hakimiyet sağlayın.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 hover:-translate-y-1 transition-all shadow-xl shadow-primary/20 group"
            >
              Hemen Başla
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted transition-all">
              <Play size={18} className="fill-foreground/70" />
              Nasıl Çalışır?
            </button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-medium flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" /> Kredi kartı gerekmez
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <CheckCircle2 size={14} className="text-emerald-500" /> 2 dakikada kurulum
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative perspective-1000 lg:col-span-5 lg:pl-8"
        >
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-emerald-500/10 rounded-[2rem] blur-2xl"></div>

          {/* 3D Dashboard Card */}
          <div className="relative bg-card rounded-2xl border border-border shadow-2xl shadow-primary/10 overflow-hidden transition-all duration-700 ease-out" style={{ transform: 'rotateY(-6deg) rotateX(4deg)' }}>

            {/* Browser Bar */}
            <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-card border border-border rounded-md text-[10px] font-mono text-muted-foreground shadow-sm">
                  <Shield size={10} /> app.law2do.com
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-muted/20">

              {/* Case Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Ahmet Yılmaz v. Lojistik A.Ş.</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground font-medium">
                    <span className="flex items-center gap-1"><Layout size={12} /> İş Mahkemesi</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>No: 2024/142</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-2 py-1 rounded-full text-[10px] font-bold border border-emerald-200/50 dark:border-emerald-800/50 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Süreç Aktif
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-3">

                {/* Task 1: Completed */}
                <div className="group flex items-center gap-3 p-3 bg-card border border-border rounded-xl shadow-sm hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground line-through">Arabuluculuk Son Tutanağı Yükle</p>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded">Tamamlandı</span>
                </div>

                {/* Task 2: ACTIVE & CRITICAL */}
                <div className="relative overflow-hidden p-4 bg-card border-l-4 border-l-red-500 rounded-r-xl shadow-lg ring-1 ring-border transform scale-[1.02]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-7 w-7 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-100 dark:border-red-900/50">
                      <FileText size={14} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-bold text-foreground">Dava Dilekçesini Hazırla</p>
                        <span className="text-[8px] font-black text-white bg-red-500 px-1.5 py-0.5 rounded tracking-wide animate-pulse">KRİTİK</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground">Harç hesaplaması sistem tarafından yapıldı. (₺1.240,50)</p>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-primary-foreground text-[10px] font-bold px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-md">
                    Görevi Başlat
                  </button>
                </div>

                {/* Task 3: Waiting */}
                <div className="flex items-center gap-3 p-3 bg-muted/50 border border-border rounded-xl opacity-60">
                  <div className="h-6 w-6 rounded-full border-2 border-muted-foreground/30 border-dashed flex items-center justify-center shrink-0">
                    <Clock size={12} className="text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground">Tebligat Takibi</p>
                  </div>
                  <span className="text-[9px] font-medium text-muted-foreground bg-muted px-1.5 py-0.5 rounded">Bekliyor</span>
                </div>

              </div>

              {/* Notification Chip */}
              <div className="absolute -right-2 top-16 bg-foreground text-background text-[10px] px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-bounce-slow z-20">
                <Bell size={10} className="text-amber-400 fill-amber-400" />
                <span>Yeni süre hesaplandı</span>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
