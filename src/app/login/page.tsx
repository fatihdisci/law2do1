"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Scale } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
            Dava Takibinde<br />Kusursuz İş Disiplini
          </h2>
          <p className="text-indigo-200 text-lg leading-relaxed mb-8">
            Hukuki iş akışlarınızı otomatikleştirin, süreleri kaçırmayın ve ofisinizi tek panelden yönetin.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-indigo-300">
            <div className="flex items-center gap-2">
              <Scale size={16} />
              <span>500+ Avukat</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-indigo-500"></div>
            <div className="flex items-center gap-2">
              <Lock size={16} />
              <span>KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
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
            <h1 className="text-3xl font-black text-foreground mb-2">Giriş Yap</h1>
            <p className="text-muted-foreground">Hesabınıza giriş yaparak devam edin.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-semibold text-foreground">
                  Şifre
                </label>
                <button type="button" className="text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                  Şifremi Unuttum
                </button>
              </div>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-12 py-3.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Şifrenizi girin"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20 group"
            >
              Giriş Yap
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Hesabınız yok mu?{' '}
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
              Ücretsiz Kayıt Ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
