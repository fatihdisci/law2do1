"use client";

import { useState } from "react";
import { BookOpen, Calculator, Lock, CheckCircle2, Mail, User, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AraclarPage() {
  // PDF / AI Prompt formu
  const [pdfName, setPdfName] = useState("");
  const [pdfEmail, setPdfEmail] = useState("");
  const [pdfSubmitted, setPdfSubmitted] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);

  // Hesaplayıcı girdiler
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grossSalary, setGrossSalary] = useState("");

  // Hesaplama sonucu
  const [calcResult, setCalcResult] = useState<null | {
    workingMonths: number;
    workingYears: number;
    severancePay: number;
  }>(null);

  // Detay kilit açma
  const [unlockEmail, setUnlockEmail] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);

  function handleCalculate() {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = end.getTime() - start.getTime();
    const totalMonths = diffMs / (1000 * 60 * 60 * 24 * 30.44);
    const totalYears = totalMonths / 12;
    const salary = parseFloat(grossSalary) || 0;
    // Kıdem tazminatı: her tam yıl için 30 günlük brüt ücret
    const severancePay = (salary / 30) * 30 * Math.floor(totalYears);
    setCalcResult({
      workingMonths: Math.floor(totalMonths),
      workingYears: totalYears,
      severancePay,
    });
  }

  async function handlePdfSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pdfName.trim() || !pdfEmail.includes("@")) return;
    setPdfLoading(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: pdfName, email: pdfEmail, source: 'prompt-rehberi' }),
      });
    } catch {
      // Lead kaydı başarısız olsa bile PDF indirmeye izin ver
    }
    setPdfLoading(false);
    setPdfSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Sabit arka plan */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero başlık — hero-grid arka plan */}
      <section className="hero-grid pt-28 pb-16 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-5">
            Ücretsiz Araçlar
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-5">
            Avukatlar İçin{" "}
            <span className="gradient-text">Pratik Araçlar</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Yapay zeka destekli komut şablonları ve hesaplama araçlarıyla günlük
            iş yükünüzü hafifletin. Tamamen ücretsiz, kayıt gerektirmez.
          </p>
        </motion.div>
      </section>

      {/* Araçlar grid — 1 sütun mobilde, 2 sütun lg+ */}
      <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* ── Kart A: AI Prompt Kütüphanesi ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              {/* Gradient strip */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/60 to-primary/20" />

              <div className="p-8 md:p-10">
                {/* İkon + Başlık */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 text-primary mb-6 shadow-sm">
                  <BookOpen size={26} strokeWidth={1.8} />
                </div>

                <h2 className="text-2xl font-black text-foreground mb-3">
                  AI Prompt Kütüphanesi
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Avukatlık pratiğinize özel 40+ yapay zeka komut şablonu.
                  Dilekçe hazırlama, müvekkil yazışması ve hukuki araştırma
                  için hazır kullanıma uygun komutlar.
                </p>

                {!pdfSubmitted ? (
                  <form onSubmit={handlePdfSubmit} className="space-y-4">
                    {/* Ad Soyad */}
                    <div className="relative">
                      <User
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        type="text"
                        placeholder="Ad Soyad"
                        value={pdfName}
                        onChange={(e) => setPdfName(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    {/* E-posta */}
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                      />
                      <input
                        type="email"
                        placeholder="E-posta adresiniz"
                        value={pdfEmail}
                        onChange={(e) => setPdfEmail(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="default"
                      size="lg"
                      className="w-full rounded-xl font-semibold"
                      disabled={pdfLoading}
                    >
                      {pdfLoading ? 'Gönderiliyor...' : 'PDF Rehberini İndir'}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mb-3">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-sm font-bold text-emerald-700 dark:text-emerald-300 mb-1">
                      Rehberiniz hazır!
                    </p>
                    <p className="text-xs text-emerald-600/80 dark:text-emerald-400/80 mb-4">
                      Aşağıdaki bağlantıdan hemen indirebilirsiniz.
                    </p>
                    <a
                      href="/prompt-rehberi.pdf"
                      download
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <Download size={16} />
                      PDF İndir (40 Prompt)
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Kart B: İşçilik Tazminatı Hesaplayıcı ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300">
              {/* Gradient strip */}
              <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-300/40" />

              <div className="p-8 md:p-10">
                {/* İkon + Başlık */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/15 text-emerald-600 dark:text-emerald-400 mb-6 shadow-sm">
                  <Calculator size={26} strokeWidth={1.8} />
                </div>

                <h2 className="text-2xl font-black text-foreground mb-3">
                  İşçilik Tazminatı Hesaplayıcı
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  İşe giriş-çıkış tarihi ve brüt ücret bilgileriyle kıdem
                  tazminatını anında hesaplayın. Detaylı döküm için e-posta
                  ile kilidini açın.
                </p>

                {/* Hesap formu */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        İşe Giriş Tarihi
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all text-sm text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                        İşten Çıkış Tarihi
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all text-sm text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">
                      Brüt Ücret (TL)
                    </label>
                    <input
                      type="number"
                      placeholder="Örn: 35.000"
                      value={grossSalary}
                      onChange={(e) => setGrossSalary(e.target.value)}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={handleCalculate}
                    className="w-full rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white"
                    size="lg"
                  >
                    Hesapla
                  </Button>
                </div>

                {/* Hesaplama sonucu — görünür kısım */}
                {calcResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-5"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          Çalışma Süresi
                        </p>
                        <p className="text-lg font-black text-foreground">
                          {Math.floor(calcResult.workingYears)} yıl{" "}
                          {calcResult.workingMonths % 12} ay
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                          Kıdem Tazminatı
                        </p>
                        <p className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                          ₺
                          {calcResult.severancePay.toLocaleString("tr-TR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Blur ile kilitli detay bölümü */}
                {calcResult && (
                  <div className="relative mt-4">
                    {/* Kilitli içerik — blur uygulanır */}
                    <div
                      className={`transition-all duration-500 ${
                        isUnlocked
                          ? ""
                          : "blur-sm pointer-events-none select-none"
                      }`}
                    >
                      <div className="bg-muted/50 border border-border rounded-2xl p-5 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            Damga Vergisi (%0,759)
                          </span>
                          <span className="text-sm font-bold text-foreground">
                            ₺
                            {(calcResult.severancePay * 0.00759).toLocaleString(
                              "tr-TR",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            İhbar Tazminatı (8 hafta)
                          </span>
                          <span className="text-sm font-bold text-foreground">
                            ₺
                            {((parseFloat(grossSalary) || 0) * 2).toLocaleString(
                              "tr-TR",
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">
                            Net Tutar
                          </span>
                          <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                            ₺
                            {(
                              calcResult.severancePay -
                              calcResult.severancePay * 0.00759
                            ).toLocaleString("tr-TR", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Kilit açma katmanı — sadece kilitli + hesaplandıysa */}
                    {!isUnlocked && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card/80 backdrop-blur-[3px] rounded-2xl border border-border p-6">
                        <Lock
                          size={20}
                          className="text-muted-foreground"
                        />
                        <p className="text-xs text-center text-muted-foreground">
                          Detaylı dökümü görmek için e-posta adresinizi girin
                        </p>
                        <input
                          type="email"
                          placeholder="E-posta adresiniz"
                          value={unlockEmail}
                          onChange={(e) => setUnlockEmail(e.target.value)}
                          className="w-full max-w-xs px-4 py-2.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 outline-none transition-all text-sm text-foreground placeholder:text-muted-foreground text-center"
                        />
                        <Button
                          size="sm"
                          onClick={() => {
                            if (unlockEmail.includes("@"))
                              setIsUnlocked(true);
                          }}
                          className="rounded-xl"
                        >
                          Detayları Göster
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
