"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Scale, ArrowLeft, CheckCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSent(true);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Left Panel - Brand */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1C1917] relative overflow-hidden items-center justify-center p-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[150px] opacity-20 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/40 rounded-full blur-[150px] opacity-10 -ml-48 -mb-48"></div>

        <div className="relative z-10 max-w-md text-center">
          <Link href="/" className="flex items-center justify-center gap-3 mb-12 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white font-serif text-xl shadow-lg border border-white/10">
              <Scale size={22} className="text-white" />
            </div>
            <span className="text-3xl font-bold text-white tracking-tight">
              Law<span className="text-primary">2</span>Do
            </span>
          </Link>

          <h2 className="text-4xl font-black text-white mb-6 leading-tight">
            Şifrenizi<br />Sıfırlayın
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            E-posta adresinizi girin, size hemen şifre sıfırlama bağlantısı gönderelim.
          </p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-md">
              <Scale size={18} />
            </div>
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Law<span className="text-primary">2</span>Do
            </span>
          </div>

          <div className="bg-card/70 backdrop-blur-xl rounded-3xl p-8 sm:p-10 shadow-2xl border border-border/50">
            {sent ? (
              /* Success State */
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-3 tracking-tight">Bağlantı Gönderildi!</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  <strong className="text-foreground">{email}</strong> adresine şifre sıfırlama bağlantısı gönderildi.
                  Gelen kutunuzu ve spam klasörünüzü kontrol edin.
                </p>
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
                >
                  Giriş Sayfasına Dön
                  <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              /* Form State */
              <>
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-black text-foreground mb-2 tracking-tight">Şifremi Unuttum</h1>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Kayıtlı e-posta adresinizi girin, şifre sıfırlama bağlantısını hemen göndereceğiz.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      E-posta Adresi
                    </label>
                    <div className="relative group">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
                      />
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

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 group mt-2"
                  >
                    Sıfırlama Bağlantısı Gönder
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <Link
                    href="/login"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowLeft size={14} />
                    Giriş sayfasına dön
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
