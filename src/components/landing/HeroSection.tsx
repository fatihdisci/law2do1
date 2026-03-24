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

        {/* LEFT COLUMN: Text (Wider - Col Span 7) */}
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600">
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
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all shadow-xl shadow-emerald-600/20 group"
            >
              Hemen Başla
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center justify-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted hover:border-slate-300 transition-all">
              <Play size={18} className="fill-slate-700" />
              Nasıl Çalışır?
            </button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground font-medium flex items-center gap-2">
            <CheckCircle2 size={14} className="text-emerald-500" /> Kredi kartı gerekmez
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <CheckCircle2 size={14} className="text-emerald-500" /> 2 dakikada kurulum
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Visual (Compact - Col Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="relative perspective-1000 lg:col-span-5 lg:pl-8"
        >
          {/* Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl"></div>

          {/* 3D Dashboard Card */}
          <div className="relative bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-indigo-900/10 overflow-hidden transform hover:rotate-0 transition-all duration-700 ease-out" style={{ transform: 'rotateY(-6deg) rotateX(4deg)' }}>

            {/* Fake Browser Bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-md text-[10px] font-mono text-slate-400 shadow-sm">
                  <Shield size={10} /> app.law2do.com
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-slate-50/50">

              {/* Case Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Ahmet Yılmaz v. Lojistik A.Ş.</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1"><Layout size={12} /> İş Mahkemesi</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>No: 2024/142</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-[10px] font-bold border border-emerald-200/50 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  Süreç Aktif
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-3">

                {/* Task 1: Completed */}
                <div className="group flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:border-emerald-200 transition-colors">
                  <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-400 line-through decoration-slate-300">Arabuluculuk Son Tutanağı Yükle</p>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Tamamlandı</span>
                </div>

                {/* Task 2: ACTIVE & CRITICAL */}
                <div className="relative overflow-hidden p-4 bg-white border-l-4 border-l-red-500 rounded-r-xl shadow-lg shadow-red-100/50 ring-1 ring-black/5 transform scale-[1.02]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="h-7 w-7 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
                      <FileText size={14} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="text-sm font-bold text-slate-900">Dava Dilekçesini Hazırla</p>
                        <span className="text-[8px] font-black text-white bg-red-500 px-1.5 py-0.5 rounded tracking-wide animate-pulse">KRİTİK</span>
                      </div>
                      <p className="text-[10px] text-slate-500">Harç hesaplaması sistem tarafından yapıldı. (₺1.240,50)</p>
                    </div>
                  </div>
                  <button className="w-full bg-indigo-900 text-white text-[10px] font-bold px-3 py-2 rounded-lg hover:bg-indigo-800 transition-colors shadow-md">
                    Görevi Başlat
                  </button>
                </div>

                {/* Task 3: Waiting */}
                <div className="flex items-center gap-3 p-3 bg-slate-100/50 border border-slate-200/60 rounded-xl opacity-60">
                  <div className="h-6 w-6 rounded-full border-2 border-slate-300 border-dashed flex items-center justify-center shrink-0">
                    <Clock size={12} className="text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500">Tebligat Takibi</p>
                  </div>
                  <span className="text-[9px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Bekliyor</span>
                </div>

              </div>

              {/* Micro Interaction: Notification */}
              <div className="absolute -right-2 top-16 bg-slate-800 text-white text-[10px] px-3 py-2 rounded-lg shadow-xl flex items-center gap-2 animate-bounce-slow z-20">
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
