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
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-primary-foreground mb-6 shadow-lg shadow-primary/25">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Sorularınız, önerileriniz veya demo talepleriniz için uzman ekibimiz
            size en kısa sürede dönüş yapacaktır.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Ofisimize Hoş Geldiniz</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Adres</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi<br />
                      No: 42, Kat: 5 Konak<br />
                      İzmir, 35220
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">E-posta Adreslerimiz</h4>
                    <a href="mailto:info@law2do.com" className="block text-muted-foreground hover:text-primary transition-colors">
                      info@law2do.com (Genel)
                    </a>
                    <a href="mailto:destek@law2do.com" className="block text-muted-foreground hover:text-primary transition-colors">
                      destek@law2do.com (Teknik Destek)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center text-primary shrink-0 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Telefon Numarası</h4>
                    <a href="tel:+902321234567" className="block text-muted-foreground hover:text-primary transition-colors">
                      +90 (232) 123 45 67
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Destek saatleri: Hafta içi 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-border">
              <h4 className="font-bold text-foreground mb-4">Bizi Takip Edin</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 rounded-lg flex items-center justify-center transition-all shadow-sm">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 rounded-lg flex items-center justify-center transition-all shadow-sm">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 rounded-lg flex items-center justify-center transition-all shadow-sm">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-muted rounded-2xl overflow-hidden relative border border-border shadow-inner">
              <div className="absolute inset-0 hero-grid opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-primary/20 rounded-full animate-ping absolute inset-0"></div>
                <div className="relative flex flex-col items-center">
                  <MapPin className="text-primary drop-shadow-md" size={32} fill="hsl(var(--color-primary-100))" />
                  <div className="bg-card border border-border px-3 py-1 rounded-full text-xs font-bold text-primary shadow-md mt-1">
                    İzmir, TR
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full blur-[40px] pointer-events-none"></div>

              {submitted ? (
                <div className="text-center py-16">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 shadow-sm">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
                  <p className="text-muted-foreground max-w-sm mx-auto">
                    Kısa süre içerisinde sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-8 text-primary font-bold hover:opacity-80 transition-opacity uppercase tracking-wider text-sm"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Formu Doldurun</h3>
                    <p className="text-sm text-muted-foreground">Demo oluşturmak veya soru sormak için saniyeler içinde formu doldurun.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Ad Soyad <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        E-posta <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                      Konu <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        required
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={(e) => updateField('subject', e.target.value)}
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all shadow-sm appearance-none"
                      >
                        <option value="" disabled>Lütfen bir konu seçiniz</option>
                        <option value="demo">Demo Talebi</option>
                        <option value="fiyat">Fiyatlandırma Bilgisi</option>
                        <option value="kurumsal">Kurumsal / Enterprise Çözümler</option>
                        <option value="destek">Mevcut Kullanıcı: Teknik Destek</option>
                        <option value="diger">Diğer / Genel</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                          <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                      Mesajınız <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      disabled={isSubmitting}
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none shadow-sm"
                      placeholder="Size nasıl yardımcı olabiliriz?"
                    />
                  </div>

                  <div className="text-xs text-muted-foreground flex gap-2">
                    <span className="shrink-0">ℹ️</span>
                    <p>Formu göndererek <Link href="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikamızı</Link> kabul etmiş olursunuz.</p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-lg",
                      isSubmitting
                        ? "bg-muted text-muted-foreground cursor-not-allowed shadow-none"
                        : "bg-primary text-primary-foreground shadow-primary/25 hover:opacity-90 active:scale-[0.98]"
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
