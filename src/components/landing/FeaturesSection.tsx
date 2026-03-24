"use client";

import {
  Layout, CheckCircle2, AlertTriangle, Bell, FileText, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-10">

      {/* Feature 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-center mb-32"
      >
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-50 rounded-2xl text-indigo-700 mb-6 shadow-sm">
            <Layout size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            İş Akışlarınızı <br />
            <span className="text-indigo-600">Hatasız Bir Düzenle Yönetin.</span>
          </h2>
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Dosya türünü seçtiğinizde, sistem yapılması gerekenleri adım adım önüne getirir.
            <br /><br />
            <div className="flex items-center gap-4 bg-card px-6 py-4 rounded-xl border-l-4 border-red-600 shadow-2xl shadow-red-200/50 w-fit transform hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 p-2 rounded-full animate-pulse">
                <AlertTriangle size={24} className="text-red-600 fill-red-600/20" />
              </div>
              <div>
                <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-0.5">KRİTİK RİSK</p>
                <p className="font-bold text-foreground text-lg">&quot;Acaba itiraz dilekçesini göndermiş miydim?&quot;</p>
              </div>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-foreground"><strong>Dinamik Checklistler:</strong> Dava türüne göre değişen akıllı listeler.</span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-foreground"><strong>Sıfır Hata:</strong> Hiçbir adımı atlamadan süreci tamamlamayı sağlar.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative group hover:scale-[1.02] transition-transform duration-500">
            {/* Abstract decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-white rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

            <div className="relative bg-card rounded-[2.5rem] p-8 border border-border shadow-xl overflow-hidden">
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

              {/* Generated Task List */}
              <div className="space-y-3 relative">
                {/* Decorative line connecting tasks */}
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
      </motion.div>

      {/* Feature 2 - Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-center mb-32"
      >
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
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Tüm İşlerinizi <br />
            <span className="text-indigo-600">Tek Bir Ekrandan Yönetin.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Bugünün görevleri, önümüzdeki haftanın yoğunluğu ve gecikmiş işler tek bir panelde. Hiçbir şey gözünüzden kaçmaz.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Günlük Özet:</strong> O güne ait tüm görevlerinizi anında görün.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Haftalık Planlama:</strong> Önümüzdeki haftanın iş yükünü önceden bilin.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-red-100 text-red-600"><AlertTriangle size={16} /></div>
              <span className="text-foreground"><strong>Gecikme Uyarısı:</strong> Süresi geçen işler anında dikkatinizi çeker.</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Feature 3 - Reminder Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Kritik Süreleri <br />
            <span className="text-indigo-600">Asla Kaçırmayın.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Son tarihi yaklaşan işler için otomatik bildirim ve e-posta hatırlatmaları alın. Süre kaçırma riskini sıfıra indirin.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Anlık Bildirimler:</strong> Kritik tarihlerden önce uygulama içi uyarı.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>E-posta Hatırlatma:</strong> Son tarihten 3-7-14 gün önce otomatik mail.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-red-100 text-red-600"><AlertTriangle size={16} /></div>
              <span className="text-foreground"><strong>Acil Uyarı:</strong> Son gün geldiğinde tüm kanallarda acil bildirim.</span>
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
      </motion.div>
    </section>
  );
}
