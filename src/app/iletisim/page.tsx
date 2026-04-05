"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2, Twitter, Linkedin, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px] dark:bg-indigo-900/20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px] dark:bg-emerald-900/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl text-white mb-6 shadow-lg shadow-indigo-500/25">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Sorularınız, önerileriniz veya demo talepleriniz için uzman ekibimiz
            size en kısa sürede dönüş yapacaktır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Ofisimize Hoş Geldiniz</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Adres</h4>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                      Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi<br />
                      No: 42, Kat: 5 Konak<br />
                      İzmir, 35220
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">E-posta Adreslerimiz</h4>
                    <a href="mailto:info@law2do.com" className="block text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      info@law2do.com (Genel)
                    </a>
                    <a href="mailto:destek@law2do.com" className="block text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      destek@law2do.com (Teknik Destek)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Telefon Numarası</h4>
                    <a href="tel:+902321234567" className="block text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                      +90 (232) 123 45 67
                    </a>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                      Destek saatleri: Hafta içi 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Bizi Takip Edin</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg flex items-center justify-center transition-colors shadow-sm cursor-pointer">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg flex items-center justify-center transition-colors shadow-sm cursor-pointer">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-lg flex items-center justify-center transition-colors shadow-sm cursor-pointer">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="w-full h-48 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-inner">
                {/* Simulated map background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                {/* Pin Point */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-indigo-600/20 rounded-full animate-ping absolute inset-0"></div>
                    <div className="relative flex flex-col items-center">
                        <MapPin className="text-indigo-600 drop-shadow-md" size={32} fill="white" />
                        <div className="bg-white dark:bg-slate-900 px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-md mt-1 border border-slate-100 dark:border-slate-700">
                            İzmir, TR
                        </div>
                    </div>
                </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
                {/* Subtle gradient corner in form */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full blur-[40px] pointer-events-none"></div>

              {submitted ? (
                <div className="text-center py-16 animate-[fade-in_0.5s_ease-out]">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm border border-emerald-200 dark:border-emerald-800/50">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mesajınız Alındı!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                    Kısa süre içerisinde sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-8 text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors uppercase tracking-wider text-sm"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Formu Doldurun</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Demo oluşturmak veya soru sormak için saniyeler içinde formu doldurun.</p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                        E-posta <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Konu <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                        <select
                        id="subject"
                        required
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm appearance-none"
                        >
                        <option value="" disabled>Lütfen bir konu seçiniz</option>
                        <option value="demo">Demo Talebi</option>
                        <option value="fiyat">Fiyatlandırma Bilgisi</option>
                        <option value="kurumsal">Kurumsal / Enterprise Çözümler</option>
                        <option value="destek">Mevcut Kullanıcı: Teknik Destek</option>
                        <option value="diger">Diğer / Genel</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                      Mesajınız <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full px-4 py-3.5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none shadow-sm"
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>
                  
                  <div className="text-xs text-slate-500 dark:text-slate-400 flex gap-2">
                     <span className="shrink-0">ℹ️</span>
                     <p>Formu göndererek <Link href="/gizlilik-politikasi" className="text-indigo-600 dark:text-indigo-400 hover:underline">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg",
                      isSubmitting 
                        ? "bg-slate-400 cursor-not-allowed shadow-none" 
                        : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/25 active:scale-[0.98]"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mb-0.5" />
                        Mesajı Gönder
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
