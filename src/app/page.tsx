"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2, ArrowRight, Layout, ChevronRight,
  Shield, XCircle, Play, Clock, FileText, Bell,
  BarChart3, CalendarClock, AlertTriangle
} from 'lucide-react';


export default function LandingPage() {

  // Scroll Animation Trigger
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-hidden').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">

      {/* BACKGROUND: Soft Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]"></div>
      </div>

      {/* HERO SECTION: Asymmetric Grid (7/5 Split) */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Text (Wider - Col Span 7) */}
          <div className="text-left animate-fade-in-up lg:col-span-7">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Türkiye'deki Avukatlar İçin Tasarlandı
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Dava Takibinde <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600">
                Kusursuz Bir İş Disiplini.
              </span>
            </h1>

            {/* SUBHEADER */}
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
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
              <button className="flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                <Play size={18} className="fill-slate-700" />
                Nasıl Çalışır?
              </button>
            </div>

            <p className="mt-6 text-xs text-slate-400 font-medium flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" /> Kredi kartı gerekmez
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <CheckCircle2 size={14} className="text-emerald-500" /> 2 dakikada kurulum
            </p>
          </div>

          {/* RIGHT COLUMN: Visual (Compact - Col Span 5) */}
          <div className="relative perspective-1000 animate-fade-in-up animation-delay-200 lg:col-span-5 lg:pl-8">
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
          </div>
        </div>
      </section>

      {/* METHODOLOGY: FIELD EXPERIENCE */}
      <section className="py-16 border-y border-slate-200 bg-gradient-to-b from-white to-slate-50/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Main Message */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Sahanın İçinden, Pratiğe Uygun.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sadece &quot;yapılması gerekenleri&quot; değil, &quot;nasıl yapılması gerektiğini&quot; de bilen bir sistem.
              Hukuk pratiğinin işleyişine aykırı hiçbir gereksiz detay barındırmaz.
            </p>

            {/* Workflow Verified Badge */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full">
              <Shield size={18} className="text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">Mevzuata Uygun İş Akışları</span>
              <CheckCircle2 size={16} className="text-emerald-600" />
            </div>
          </div>

          {/* Workflow Animation - Marquee Style */}
          <div className="mt-12 relative overflow-hidden">
            <div className="flex animate-marquee gap-4">
              {/* Task Items - Duplicated for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-4 shrink-0">
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    📋 Dava Dilekçesi Hazırla
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    📄 Delil Listesi Oluştur
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    ⏰ Cevap Süresi Takibi
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    📑 Bilirkişi Raporu İncele
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    🔔 Duruşma Hatırlatması
                  </div>
                  <div className="px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm text-sm font-medium text-slate-700 whitespace-nowrap">
                    ✅ Karar Tebliği Al
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER COMPARISON: "Farkı Hissedin" */}
      <section className="py-24 px-6 bg-slate-100/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Farkı Hissedin
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Genel amaçlı yazılımlar vs. hukuk pratiği için tasarlanmış sistem
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* LEFT: "Yazılımcı Mantığı" - The Problem */}
            <div className="relative group">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg overflow-hidden h-full flex flex-col">

                {/* Excel Interface Mock */}
                <div className="relative flex-1 bg-white flex flex-col text-[10px] sm:text-xs font-sans text-slate-700 select-none cursor-default border border-slate-300 rounded-lg overflow-hidden mb-6 shadow-inner">
                  {/* Excel Toolbar Mock */}
                  <div className="bg-[#107c41] text-white px-3 py-2 flex items-center gap-3">
                    <div className="font-bold">Excel</div>
                    <div className="opacity-80 hidden sm:block">Giriş</div>
                    <div className="opacity-80 hidden sm:block">Ekle</div>
                    <div className="ml-auto opacity-80">Oturum Açın</div>
                  </div>

                  {/* Formula Bar */}
                  <div className="bg-slate-50 border-b border-slate-300 px-2 py-1 flex items-center gap-2 text-slate-500">
                    <span className="font-serif italic font-bold">fx</span>
                    <div className="bg-white border border-slate-300 w-full h-4 rounded-sm"></div>
                  </div>

                  {/* Grid Container */}
                  <div className="flex-1 overflow-hidden relative bg-white">
                    {/* Header Row */}
                    <div className="flex border-b border-slate-300 bg-slate-50 font-bold text-slate-600">
                      <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-100"></div>
                      <div className="w-20 border-r border-slate-300 px-1 py-0.5 pl-2">A</div>
                      <div className="w-24 border-r border-slate-300 px-1 py-0.5 pl-2">B</div>
                      <div className="w-24 border-r border-slate-300 px-1 py-0.5 pl-2">C</div>
                      <div className="flex-1 border-r border-slate-300 px-1 py-0.5 pl-2">D</div>
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
                      <div key={row.id} className="flex border-b border-slate-200">
                        <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-50 font-semibold text-slate-500">
                          {row.id}
                        </div>
                        <div className="w-20 border-r border-slate-200 px-1 py-0.5 pl-2 truncate">{row.a}</div>
                        <div className="w-24 border-r border-slate-200 px-1 py-0.5 pl-2 truncate">{row.b}</div>
                        <div className="w-24 border-r border-slate-200 px-1 py-0.5 pl-2 truncate">{row.c}</div>
                        <div className="flex-1 border-r border-slate-200 px-1 py-0.5 pl-2 truncate text-slate-500">{row.d}</div>
                      </div>
                    ))}
                    {/* Empty Rows */}
                    {[8, 9, 10, 11, 12].map(i => (
                      <div key={i} className="flex border-b border-slate-200">
                        <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-50 font-semibold text-slate-500">{i}</div>
                        <div className="w-20 border-r border-slate-200 px-1 py-0.5"></div>
                        <div className="w-24 border-r border-slate-200 px-1 py-0.5"></div>
                        <div className="w-24 border-r border-slate-200 px-1 py-0.5"></div>
                        <div className="flex-1 border-r border-slate-200 px-1 py-0.5"></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Label */}
                <div className="flex items-center justify-center gap-3 pt-2 mt-auto border-t border-slate-100">
                  <XCircle size={24} className="text-red-500" />
                  <span className="text-xl font-black text-slate-700">Dağınık • Karmaşık • Kaybolan İşler</span>
                </div>
              </div>
            </div>

            {/* RIGHT: "Hukukçu Mantığı" - The Solution */}
            <div className="relative group">
              <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 rounded-3xl p-8 shadow-2xl shadow-indigo-900/30 overflow-hidden text-white">
                {/* Subtle pattern background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"></div>
                </div>

                {/* Clean Interface Preview */}
                <div className="relative h-64 md:h-80 flex flex-col justify-center space-y-4">
                  {/* Single Clear Action Card */}
                  <div className="bg-white rounded-xl p-5 shadow-xl transform group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">SIRADAKİ GÖREV</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Cevap Dilekçesi Hazırla</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">Dosya: 2024/1234</span>
                      <span className="text-sm font-bold text-red-600 flex items-center gap-1">
                        <Clock size={14} />
                        Son 3 Gün
                      </span>
                    </div>
                  </div>

                  {/* Mini Stats */}
                  <div className="flex gap-3">
                    <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-2xl font-black text-white">3</div>
                      <div className="text-xs text-indigo-200">Bugün</div>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-2xl font-black text-white">8</div>
                      <div className="text-xs text-indigo-200">Bu Hafta</div>
                    </div>
                    <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                      <div className="text-2xl font-black text-emerald-400">0</div>
                      <div className="text-xs text-indigo-200">Gecikmiş</div>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-indigo-800">
                  <CheckCircle2 size={24} className="text-emerald-400" />
                  <span className="text-xl font-black text-white">Net • Düzenli • Kontrol Altında</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">

        {/* Feature 1 */}
        <div className="scroll-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-50 rounded-2xl text-indigo-700 mb-6 shadow-sm">
              <Layout size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              İş Akışlarınızı <br />
              <span className="text-indigo-600">Hatasız Bir Düzenle Yönetin.</span>
            </h2>
            <div className="text-lg text-slate-500 mb-8 leading-relaxed">
              Dosya türünü seçtiğinizde, sistem yapılması gerekenleri adım adım önüne getirir.
              <br /><br />
              <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl border-l-4 border-red-600 shadow-2xl shadow-red-200/50 w-fit transform hover:scale-105 transition-transform duration-300">
                <div className="bg-red-100 p-2 rounded-full animate-pulse">
                  <AlertTriangle size={24} className="text-red-600 fill-red-600/20" />
                </div>
                <div>
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-0.5">KRİTİK RİSK</p>
                  <p className="font-bold text-slate-900 text-lg">&quot;Acaba itiraz dilekçesini göndermiş miydim?&quot;</p>
                </div>
              </div>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-700"><strong>Dinamik Checklistler:</strong> Dava türüne göre değişen akıllı listeler.</span>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-slate-700"><strong>Sıfır Hata:</strong> Hiçbir adımı atlamadan süreci tamamlamayı sağlar.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative group hover:scale-[1.02] transition-transform duration-500">
              {/* Abstract decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

              <div className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl overflow-hidden">
                {/* Header: Case Type Selection */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">DOSYA TÜRÜ</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-indigo-950">Sigorta Tahkim Komisyonu Başvurusu</span>
                    <div className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      <CheckCircle2 size={10} /> SEÇİLDİ
                    </div>
                  </div>
                </div>

                {/* Animated Connection Line */}
                <div className="flex justify-center mb-6 -mt-2">
                  <div className="h-8 w-0.5 bg-slate-200 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-200 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Generated Task List (Visualizing the flow) */}
                <div className="space-y-3 relative">
                  {/* Decorative line connecting tasks (Top part green, bottom part slate) */}
                  <div className="absolute left-[19px] top-4 h-24 w-0.5 bg-emerald-200 z-0"></div>
                  <div className="absolute left-[19px] top-28 bottom-4 w-0.5 bg-slate-100 z-0"></div>

                  {/* Task 1: COMPLETED */}
                  <div className="relative flex items-center gap-4 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/50 z-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-white shadow-sm font-bold text-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-600 line-through decoration-emerald-200">Başvuru Formunu Hazırla</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Tamamlandı</div>
                    </div>
                  </div>

                  {/* Task 2: COMPLETED */}
                  <div className="relative flex items-center gap-4 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/50 z-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-white shadow-sm font-bold text-sm">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-600 line-through decoration-emerald-200">Sigorta Şirketi Başvurusu</div>
                      <div className="text-[10px] text-emerald-600 font-bold">Tamamlandı (15 Gün Süre Doldu)</div>
                    </div>
                  </div>

                  {/* Task 3: CURRENT / ACTIVE */}
                  <div className="relative flex items-center gap-4 p-3 rounded-xl bg-indigo-950 text-white shadow-lg shadow-indigo-900/20 z-10 transform scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                    <div className="h-10 w-10 rounded-full bg-white text-indigo-900 flex items-center justify-center shrink-0 border-4 border-indigo-900 shadow-sm font-bold text-sm">
                      3
                    </div>
                    <div>
                      <div className="text-sm font-bold">Komisyona Başvuru Yap</div>
                      <div className="text-[10px] text-indigo-200">Sıradaki Görev</div>
                    </div>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Dashboard */}
        <div className="scroll-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative bg-indigo-950 rounded-[2.5rem] p-8 md:p-10 text-white overflow-hidden shadow-2xl shadow-indigo-900/30 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 -mr-20 -mt-20"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                  <Layout size={28} className="text-indigo-200" />
                </div>
                <h3 className="text-xl font-bold">Günlük İş Paneli</h3>
              </div>

              {/* Today's Summary */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-[10px] text-indigo-200 uppercase tracking-wider">Bugün</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                  <div className="text-3xl font-bold text-white">8</div>
                  <div className="text-[10px] text-indigo-200 uppercase tracking-wider">Bu Hafta</div>
                </div>
                <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-4 border border-red-500/30 text-center">
                  <div className="text-3xl font-bold text-red-400">2</div>
                  <div className="text-[10px] text-red-300 uppercase tracking-wider">Gecikmiş</div>
                </div>
              </div>

              {/* Mini Task List */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                  <span className="text-sm text-indigo-100 flex-1">Cevap Dilekçesi Hazırla</span>
                  <span className="text-[10px] text-red-300 font-bold">GECİKMİŞ</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <span className="text-sm text-indigo-100 flex-1">Duruşma Hazırlığı</span>
                  <span className="text-[10px] text-amber-300 font-bold">BUGÜN</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-sm text-indigo-100 flex-1">Bilirkişi Raporu İncele</span>
                  <span className="text-[10px] text-indigo-300">Yarın</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Tüm İşlerinizi <br />
              <span className="text-indigo-600">Tek Bir Ekrandan Yönetin.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Bugünün görevleri, önümüzdeki haftanın yoğunluğu ve gecikmiş işler tek bir panelde. Hiçbir şey gözünüzden kaçmaz.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                <span className="text-slate-700"><strong>Günlük Özet:</strong> O güne ait tüm görevlerinizi anında görün.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                <span className="text-slate-700"><strong>Haftalık Planlama:</strong> Önümüzdeki haftanın iş yükünü önceden bilin.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-red-100 text-red-600"><AlertTriangle size={16} /></div>
                <span className="text-slate-700"><strong>Gecikme Uyarısı:</strong> Süresi geçen işler anında dikkatinizi çeker.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 - Reminder Notifications */}
        <div className="scroll-hidden opacity-0 translate-y-8 transition-all duration-1000 ease-out grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Kritik Süreleri <br />
              <span className="text-indigo-600">Asla Kaçırmayın.</span>
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Son tarihi yaklaşan işler için otomatik bildirim ve e-posta hatırlatmaları alın. Süre kaçırma riskini sıfıra indirin.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                <span className="text-slate-700"><strong>Anlık Bildirimler:</strong> Kritik tarihlerden önce uygulama içi uyarı.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
                <span className="text-slate-700"><strong>E-posta Hatırlatma:</strong> Son tarihten 3-7-14 gün önce otomatik mail.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 p-0.5 rounded-full bg-red-100 text-red-600"><AlertTriangle size={16} /></div>
                <span className="text-slate-700"><strong>Acil Uyarı:</strong> Son gün geldiğinde tüm kanallarda acil bildirim.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative bg-indigo-950 rounded-[2.5rem] p-8 md:p-10 text-white overflow-hidden shadow-2xl shadow-indigo-900/30 group">
              <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 -mr-20 -mt-20"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                    <Bell size={28} className="text-indigo-200" />
                  </div>
                  <h3 className="text-xl font-bold">Akıllı Hatırlatıcı</h3>
                </div>

                {/* Notification Stack */}
                <div className="space-y-3">
                  {/* Notification 1 - Urgent */}
                  <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-4 border border-red-500/30 transform group-hover:translate-x-1 transition-transform duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-red-500/30 rounded-lg shrink-0">
                        <AlertTriangle size={18} className="text-red-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-red-300 uppercase tracking-wider">ACİL HATIRLATMA</span>
                          <span className="text-[10px] text-red-300">2 saat önce</span>
                        </div>
                        <p className="text-sm text-white font-medium">Temyiz dilekçesi son tarihi yarın!</p>
                        <p className="text-[10px] text-red-200 mt-1">Ahmet Yılmaz v. Lojistik A.Ş.</p>
                      </div>
                    </div>
                  </div>

                  {/* Notification 2 - Email */}
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-indigo-500/30 rounded-lg shrink-0">
                        <FileText size={18} className="text-indigo-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">E-POSTA GÖNDERİLDİ</span>
                          <span className="text-[10px] text-indigo-300">Dün</span>
                        </div>
                        <p className="text-sm text-white font-medium">Cevap dilekçesi için 3 gün kaldı.</p>
                      </div>
                    </div>
                  </div>

                  {/* Notification 3 - Scheduled */}
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transform group-hover:translate-x-3 transition-transform duration-700 delay-200">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-emerald-500/30 rounded-lg shrink-0">
                        <Clock size={18} className="text-emerald-300" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">PLANLI HATIRLATMA</span>
                          <span className="text-[10px] text-indigo-300">7 gün sonra</span>
                        </div>
                        <p className="text-sm text-white font-medium">İstinaf başvurusu süresi dolacak.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-slate-50/50 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Excel Dosyalarıyla Vedalaşın.
          </h2>
          <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto">
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
              className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all"
            >
              Paketleri İncele
            </Link>
          </div>
          <p className="mt-8 text-xs text-slate-400 font-medium">
            14 gün boyunca tüm özelliklere sınırsız erişim. İptal etmek tek tıkla.
          </p>
        </div>
      </section>
    </div>
  );
}
