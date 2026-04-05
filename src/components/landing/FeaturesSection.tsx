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
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl text-primary mb-6 shadow-sm">
            <Layout size={28} />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            İş Akışlarınızı <br />
            <span className="text-primary">Hatasız Bir Düzenle Yönetin.</span>
          </h2>
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Dosya türünü seçtiğinizde, sistem yapılması gerekenleri adım adım önüne getirir.
            <br /><br />
            <div className="flex items-center gap-4 bg-card px-6 py-4 rounded-xl border-l-4 border-red-600 shadow-2xl shadow-red-200/20 dark:shadow-red-900/10 w-fit transform hover:scale-105 transition-transform duration-300">
              <div className="bg-red-100 dark:bg-red-900/40 p-2 rounded-full animate-pulse">
                <AlertTriangle size={24} className="text-red-600 dark:text-red-400 fill-red-600/20 dark:fill-red-400/20" />
              </div>
              <div>
                <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider mb-0.5">KRİTİK RİSK</p>
                <p className="font-bold text-foreground text-lg">&quot;Acaba itiraz dilekçesini göndermiş miydim?&quot;</p>
              </div>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 group">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-foreground"><strong>Dinamik Checklistler:</strong> Dava türüne göre değişen akıllı listeler.</span>
            </li>
            <li className="flex items-start gap-3 group">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white dark:group-hover:bg-emerald-500 transition-colors">
                <CheckCircle2 size={16} />
              </div>
              <span className="text-foreground"><strong>Sıfır Hata:</strong> Hiçbir adımı atlamadan süreci tamamlamayı sağlar.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative group hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-card rounded-[2.5rem] rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative bg-card rounded-[2.5rem] p-8 border border-border shadow-xl overflow-hidden">
              {/* Case Type Selection */}
              <div className="bg-muted rounded-2xl p-4 border border-border mb-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">DOSYA TÜRÜ</div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">Sigorta Tahkim Komisyonu Başvurusu</span>
                  <div className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <CheckCircle2 size={10} /> SEÇİLDİ
                  </div>
                </div>
              </div>

              {/* Animated Connection */}
              <div className="flex justify-center mb-6 -mt-2">
                <div className="h-8 w-0.5 bg-border relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-border rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-3 relative">
                <div className="absolute left-[19px] top-4 h-24 w-0.5 bg-emerald-200 dark:bg-emerald-800 z-0"></div>
                <div className="absolute left-[19px] top-28 bottom-4 w-0.5 bg-border z-0"></div>

                <div className="relative flex items-center gap-4 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 z-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-card shadow-sm font-bold text-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground line-through">Başvuru Formunu Hazırla</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Tamamlandı</div>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 z-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                  <div className="h-10 w-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 border-4 border-card shadow-sm font-bold text-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground line-through">Sigorta Şirketi Başvurusu</div>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Tamamlandı (15 Gün Süre Doldu)</div>
                  </div>
                </div>

                <div className="relative flex items-center gap-4 p-3 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 z-10 transform scale-105 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                  <div className="h-10 w-10 rounded-full bg-primary-foreground text-primary flex items-center justify-center shrink-0 border-4 border-primary/30 shadow-sm font-bold text-sm">
                    3
                  </div>
                  <div>
                    <div className="text-sm font-bold">Komisyona Başvuru Yap</div>
                    <div className="text-[10px] text-primary-foreground/70">Sıradaki Görev</div>
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
        {/* Dark panel — intentional design, works in both modes */}
        <div className="relative bg-primary rounded-[2.5rem] p-8 md:p-10 text-primary-foreground overflow-hidden shadow-2xl shadow-primary/30 group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 -mr-20 -mt-20"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                <Layout size={28} className="text-primary-foreground/80" />
              </div>
              <h3 className="text-xl font-bold">Günlük İş Paneli</h3>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold">3</div>
                <div className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Bugün</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <div className="text-3xl font-bold">8</div>
                <div className="text-[10px] text-primary-foreground/60 uppercase tracking-wider">Bu Hafta</div>
              </div>
              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-4 border border-red-500/30 text-center">
                <div className="text-3xl font-bold text-red-300">2</div>
                <div className="text-[10px] text-red-300/80 uppercase tracking-wider">Gecikmiş</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                <span className="text-sm text-primary-foreground/80 flex-1">Cevap Dilekçesi Hazırla</span>
                <span className="text-[10px] text-red-300 font-bold">GECİKMİŞ</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-sm text-primary-foreground/80 flex-1">Duruşma Hazırlığı</span>
                <span className="text-[10px] text-amber-300 font-bold">BUGÜN</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm text-primary-foreground/80 flex-1">Bilirkişi Raporu İncele</span>
                <span className="text-[10px] text-primary-foreground/50">Yarın</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Tüm İşlerinizi <br />
            <span className="text-primary">Tek Bir Ekrandan Yönetin.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Bugünün görevleri, önümüzdeki haftanın yoğunluğu ve gecikmiş işler tek bir panelde. Hiçbir şey gözünüzden kaçmaz.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Günlük Özet:</strong> O güne ait tüm görevlerinizi anında görün.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Haftalık Planlama:</strong> Önümüzdeki haftanın iş yükünü önceden bilin.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400"><AlertTriangle size={16} /></div>
              <span className="text-foreground"><strong>Gecikme Uyarısı:</strong> Süresi geçen işler anında dikkatinizi çeker.</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Feature 3 - Reminders */}
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
            <span className="text-primary">Asla Kaçırmayın.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Son tarihi yaklaşan işler için otomatik bildirim ve e-posta hatırlatmaları alın. Süre kaçırma riskini sıfıra indirin.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>Anlık Bildirimler:</strong> Kritik tarihlerden önce uygulama içi uyarı.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"><CheckCircle2 size={16} /></div>
              <span className="text-foreground"><strong>E-posta Hatırlatma:</strong> Son tarihten 3-7-14 gün önce otomatik mail.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 p-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-600 dark:text-red-400"><AlertTriangle size={16} /></div>
              <span className="text-foreground"><strong>Acil Uyarı:</strong> Son gün geldiğinde tüm kanallarda acil bildirim.</span>
            </li>
          </ul>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative bg-primary rounded-[2.5rem] p-8 md:p-10 text-primary-foreground overflow-hidden shadow-2xl shadow-primary/30 group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[120px] opacity-40 group-hover:opacity-60 transition-opacity duration-700 -mr-20 -mt-20"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl">
                  <Bell size={28} className="text-primary-foreground/80" />
                </div>
                <h3 className="text-xl font-bold">Akıllı Hatırlatıcı</h3>
              </div>

              <div className="space-y-3">
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
                      <p className="text-sm text-primary-foreground font-medium">Temyiz dilekçesi son tarihi yarın!</p>
                      <p className="text-[10px] text-red-200 mt-1">Ahmet Yılmaz v. Lojistik A.Ş.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transform group-hover:translate-x-2 transition-transform duration-500 delay-100">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/20 rounded-lg shrink-0">
                      <FileText size={18} className="text-primary-foreground/70" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-primary-foreground/60 uppercase tracking-wider">E-POSTA GÖNDERİLDİ</span>
                        <span className="text-[10px] text-primary-foreground/50">Dün</span>
                      </div>
                      <p className="text-sm text-primary-foreground font-medium">Cevap dilekçesi için 3 gün kaldı.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 transform group-hover:translate-x-3 transition-transform duration-700 delay-200">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-emerald-500/30 rounded-lg shrink-0">
                      <Clock size={18} className="text-emerald-300" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">PLANLI HATIRLATMA</span>
                        <span className="text-[10px] text-primary-foreground/50">7 gün sonra</span>
                      </div>
                      <p className="text-sm text-primary-foreground font-medium">İstinaf başvurusu süresi dolacak.</p>
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
