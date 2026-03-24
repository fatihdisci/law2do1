"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl text-indigo-600 mb-6 shadow-sm border border-indigo-100">
            <Mail size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Sorularınız, önerileriniz veya demo talepleriniz için bize ulaşın.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
                  <p className="text-muted-foreground">En kısa sürede size dönüş yapacağız.</p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-6 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    Yeni mesaj gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Ad Soyad
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        E-posta
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Konu
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Konu seçin</option>
                      <option value="demo">Demo Talebi</option>
                      <option value="destek">Teknik Destek</option>
                      <option value="fiyat">Fiyatlandırma Bilgisi</option>
                      <option value="kurumsal">Kurumsal Çözümler</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
                  >
                    <Send size={20} />
                    Mesaj Gönder
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Adres</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Alsancak Mahallesi, Kıbrıs Şehitleri Caddesi<br />
                    No: 42, Kat: 5<br />
                    Konak, İzmir 35220
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">E-posta</h3>
                  <p className="text-sm text-muted-foreground">
                    info@law2do.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    destek@law2do.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Telefon</h3>
                  <p className="text-sm text-muted-foreground">
                    +90 (232) 123 45 67
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Hafta içi 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-indigo-950 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-2">Hızlı Demo</h3>
              <p className="text-sm text-indigo-200 mb-4">
                15 dakikalık kişisel demo ile Law2Do&apos;yu keşfedin.
              </p>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-50 transition-colors"
              >
                Demo Planla
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
