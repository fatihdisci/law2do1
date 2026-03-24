"use client";

import { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Scale, Shield } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    baroSicilNo: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-950 via-indigo-900 to-emerald-900 relative overflow-hidden items-center justify-center p-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 rounded-full blur-[150px] opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full blur-[150px] opacity-20 -ml-48 -mb-48"></div>

        <div className="relative z-10 max-w-md text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-serif text-xl shadow-lg border border-white/10">
              L
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Law<span className="text-emerald-400">2</span>Do
            </span>
          </div>

          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            14 Gün Ücretsiz<br />Tüm Özellikler
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-8">
            Kredi kartı gerekmez. Hemen kaydolun ve Law2Do&apos;nun tüm özelliklerini 14 gün boyunca ücretsiz deneyin.
          </p>

          {/* Features */}
          <div className="space-y-3 text-left max-w-xs mx-auto">
            <div className="flex items-center gap-3 text-indigo-200">
              <Shield size={18} className="text-emerald-400 shrink-0" />
              <span className="text-sm">KVKK uyumlu güvenli altyapı</span>
            </div>
            <div className="flex items-center gap-3 text-indigo-200">
              <Scale size={18} className="text-emerald-400 shrink-0" />
              <span className="text-sm">Mevzuata uygun iş akışları</span>
            </div>
            <div className="flex items-center gap-3 text-indigo-200">
              <Lock size={18} className="text-emerald-400 shrink-0" />
              <span className="text-sm">256-bit SSL şifreleme</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif shadow-md">
              L
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Law<span className="text-indigo-600">2</span>Do
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-black text-foreground mb-2">Hesap Oluştur</h1>
            <p className="text-muted-foreground">14 gün ücretsiz deneme ile başlayın.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Ad Soyad
              </label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Adınız Soyadınız"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                E-posta Adresi
              </label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="baroSicilNo" className="block text-sm font-semibold text-foreground mb-2">
                Baro Sicil No <span className="text-muted-foreground font-normal">(Opsiyonel)</span>
              </label>
              <div className="relative">
                <Scale size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="baroSicilNo"
                  type="text"
                  value={formData.baroSicilNo}
                  onChange={(e) => updateField('baroSicilNo', e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="12345"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-foreground mb-2">
                  Şifre
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    className="w-full pl-11 pr-10 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Min. 8 karakter"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-foreground mb-2">
                  Şifre Tekrar
                </label>
                <div className="relative">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="confirmPassword"
                    type={showConfirm ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                    className="w-full pl-11 pr-10 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="Tekrar girin"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={(e) => updateField('acceptTerms', e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                <Link href="/kullanim-kosullari" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Kullanım Koşulları
                </Link>
                {' '}ve{' '}
                <Link href="/gizlilik-politikasi" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Gizlilik Politikası
                </Link>
                &apos;nı okudum ve kabul ediyorum.
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 group"
            >
              Ücretsiz Başla
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Zaten hesabınız var mı?{' '}
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
