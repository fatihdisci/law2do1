"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Scale, Github } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1C1917] relative overflow-hidden items-center justify-center p-12">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/40 rounded-full blur-[150px] opacity-10 -ml-48 -mb-48"></div>

        <div className="relative z-10 max-w-md text-center">
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-3 mb-12 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-serif text-xl shadow-lg border border-white/10">
              L
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Law<span className="text-primary">2</span>Do
            </span>
          </Link>

          <h2 className="text-4xl font-black text-white mb-6 leading-tight">
            Dava Takibinde<br />Kusursuz Disiplin
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Hukuki iş akışlarınızı otomatikleştirin, süreleri kaçırmayın ve ofisinizi tek panelden yönetin.
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/80 bg-white/5 py-3 px-6 rounded-full backdrop-blur-sm border border-white/10">
            <div className="flex items-center gap-2">
              <Scale size={16} className="text-primary" />
              <span className="font-medium text-white">500+ Avukat</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-primary/50"></div>
            <div className="flex items-center gap-2">
              <Lock size={16} className="text-primary" />
              <span className="font-medium text-white">KVKK Uyumlu</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        {/* Ambient Background for Dark Mode */}
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif shadow-md">
              L
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Law<span className="text-primary">2</span>Do
            </span>
          </div>

          <div className="bg-card/70 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-border/50">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Giriş Yap</h1>
              <p className="text-muted-foreground">Hesabınıza giriş yaparak devam edin.</p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button type="button" className="flex items-center justify-center gap-2 bg-card border border-border py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-colors shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 bg-card border border-border py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-muted transition-colors shadow-sm">
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.79 3.52-.8 1.48-.03 2.58.55 3.34 1.43-3.23 1.83-2.67 6.11.53 7.23-.74 1.87-1.46 3.48-2.47 4.31zm-4.32-15.3c-.04-1.63 1.35-3.21 3.02-3.48.33 1.83-1.09 3.39-2.91 3.54-.04-.02-.07-.04-.11-.06z" />
                </svg>
                Apple
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card/70 text-muted-foreground">veya e-posta ile</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  E-posta Adresi
                </label>
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-foreground">
                    Şifre
                  </label>
                  <Link href="/forgot-password" className="text-xs font-semibold text-primary hover:opacity-80 transition-opacity">
                    Şifremi Unuttum
                  </Link>
                </div>
                <div className="relative group">
                  <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-11 pr-12 py-3.5 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all shadow-sm"
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
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 group mt-2"
              >
                Giriş Yap
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Hesabınız yok mu?{' '}
              <Link href="/register" className="font-semibold text-primary hover:opacity-80 transition-opacity">
                Ücretsiz Kayıt Ol
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
