# Plan: Araçlar Ekosistemi

## Genel Bakış

Law2Do projesine bağımsız bir `/araclar` rotası ve ana sayfada teaser bileşeni ekleniyor.  
**Amaç:** E-posta lead toplama ve profesyonel kullanışlılık araçları sunmak, mevcut ana sayfayı bozmadan.

---

## Değiştirilecek / Oluşturulacak Dosyalar

| İşlem | Dosya | Açıklama |
|-------|-------|----------|
| OLUŞTUR | `src/app/araclar/page.tsx` | Yeni bağımsız sayfa |
| OLUŞTUR | `src/components/landing/ToolsTeaser.tsx` | Ana sayfaya eklenecek teaser |
| DÜZENLE | `src/components/landing/index.ts` | ToolsTeaser export eklenir |
| DÜZENLE | `src/app/page.tsx` | ToolsTeaser import + yerleştirilir |

---

## Adım 1 — `src/app/araclar/page.tsx`

### Sayfa Yapısı
- `"use client"` direktifi (useState, event handler içerdiği için)
- Next.js App Router: `/araclar` rotası olarak otomatik çalışır
- Navbar ve Footer `layout.tsx` üzerinden otomatik gelir
- Arka plan: `.hero-grid` CSS class + iki aurora orb (ana sayfa ile aynı desen)
- Framer Motion `whileInView` ile scroll animasyonları

### State Tanımları

```typescript
// PDF / AI Prompt formu
const [pdfName, setPdfName] = useState('');
const [pdfEmail, setPdfEmail] = useState('');
const [pdfSubmitted, setPdfSubmitted] = useState(false);

// Hesaplayıcı girdiler
const [startDate, setStartDate] = useState('');
const [endDate, setEndDate] = useState('');
const [grossSalary, setGrossSalary] = useState('');

// Hesaplama sonucu
const [calcResult, setCalcResult] = useState<null | {
  workingMonths: number;
  workingYears: number;
  severancePay: number;
}>(null);

// Detay kilit açma
const [unlockEmail, setUnlockEmail] = useState('');
const [isUnlocked, setIsUnlocked] = useState(false);
```

### Kıdem Tazminatı Hesaplama Mantığı

```typescript
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
```

---

### A) AI Prompt Kütüphanesi Kartı

**İkon:** `BookOpen` (lucide-react)  
**Gradient strip:** `from-primary via-primary/60 to-primary/20`

```
┌─────────────────────────────────────────┐
│ ████ gradient strip                     │
│                                         │
│  [📖]  AI Prompt Kütüphanesi           │
│                                         │
│  Avukatlık pratiğinize özel 50+ yapay   │
│  zeka komut şablonu. Dilekçe, müvekkil  │
│  yazışması ve araştırma için hazır.     │
│                                         │
│  Ad Soyad: [________________]           │
│  E-posta:  [________________]           │
│                                         │
│  [  PDF Rehberini İndir  ]              │
│                                         │
│  ─── VEYA ───                           │
│                                         │
│  ✅ [Başarı mesajı - submit sonrası]    │
└─────────────────────────────────────────┘
```

**Submit sonrası:**  
`pdfSubmitted === true` iken form gizlenir, yeşil başarı kutusu gösterilir.  
Gerçek PDF linki placeholder (`href="#"`) — ileride gerçek URL ile değiştirilir.

---

### B) İşçilik Tazminatı Hesaplayıcı Kartı

**İkon:** `Calculator` (lucide-react)  
**Gradient strip:** `from-emerald-500 via-emerald-400 to-emerald-300/40`

```
┌─────────────────────────────────────────┐
│ ████ gradient strip                     │
│                                         │
│  [🧮]  İşçilik Tazminatı Hesaplayıcı  │
│                                         │
│  Giriş Tarihi:  [date input]           │
│  Çıkış Tarihi:  [date input]           │
│  Brüt Ücret:    [number input] TL      │
│                                         │
│  [      Hesapla      ]                  │
│                                         │
│  ┌── Hesaplama sonrası görünür ────┐   │
│  │ Çalışma Süresi: X yıl Y ay     │   │
│  │ Kıdem Tazminatı: ₺XX.XXX,XX   │   │
│  └────────────────────────────────┘   │
│                                         │
│  ┌── BLUR ile kilitli ────────────┐   │
│  │  [blur] Damga Vergisi: ...     │   │
│  │  [blur] İhbar Tazminatı: ...   │   │
│  │  [blur] Net Tutar: ...         │   │
│  │                                │   │
│  │  [🔒 Kilidi Aç katmanı]       │   │
│  │   E-posta: [_____________]     │   │
│  │   [  Detayları Göster  ]       │   │
│  └────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**Blur / Kilit mantığı:**
```tsx
<div className="relative mt-4">
  {/* Kilitli içerik — blur uygulanır */}
  <div className={`transition-all duration-500 ${
    isUnlocked ? '' : 'blur-sm pointer-events-none select-none'
  }`}>
    {/* damga vergisi, ihbar tazminatı, net tutar */}
  </div>

  {/* Kilit açma katmanı — sadece kilitli + hesaplandıysa */}
  {!isUnlocked && calcResult && (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 
                    bg-card/80 backdrop-blur-[3px] rounded-2xl border border-border p-6">
      <Lock size={20} className="text-muted-foreground" />
      <p className="text-xs text-center text-muted-foreground">
        Detaylı dökümü görmek için e-posta adresinizi girin
      </p>
      <input type="email" ... />
      <Button size="sm" onClick={() => {
        if (unlockEmail.includes('@')) setIsUnlocked(true);
      }}>
        Detayları Göster
      </Button>
    </div>
  )}
</div>
```

---

### Sayfa Genel Layout

```tsx
<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

  {/* Sabit arka plan */}
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] 
                    bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] 
                    bg-emerald-500/5 rounded-full blur-[120px]" />
  </div>

  {/* Hero başlık — hero-grid arka plan */}
  <section className="hero-grid pt-28 pb-16 px-6 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <span className="badge pill">Ücretsiz Araçlar</span>
      <h1>Avukatlar İçin <span className="gradient-text">Pratik Araçlar</span></h1>
      <p className="text-muted-foreground">...</p>
    </div>
  </section>

  {/* Araçlar grid — 1 sütun mobilde, 2 sütun lg+ */}
  <section className="py-12 px-6 max-w-7xl mx-auto relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Kart A: AI Prompt Kütüphanesi */}
      {/* Kart B: Hesaplayıcı */}
    </div>
  </section>

</div>
```

---

## Adım 2 — `src/components/landing/ToolsTeaser.tsx`

### Yapı
- `"use client"` direktifi
- `import Link from 'next/link'`
- `whileInView` ile scroll tetiklemeli fade-up animasyonu

### Layout

```tsx
<section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65 }}
    className="glass rounded-3xl border border-border p-8 md:p-12"
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Sol: Badge + Başlık + Açıklama */}
      <div className="flex-1">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
                         bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
          <Wrench size={13} /> Ücretsiz Araçlar
        </span>
        <h2 className="text-3xl md:text-4xl font-black text-foreground mt-4 mb-3">
          Avukatlar İçin Ücretsiz{' '}
          <span className="gradient-text">Verimlilik Araçları</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-lg">
          Yapay zeka komut rehberi ve pratik hesaplama araçlarıyla ofis 
          rutinlerinizi hızlandırın.
        </p>
      </div>

      {/* Sağ: Mini araç pilleri + CTA */}
      <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto">
        {/* İki mini araç önizlemesi */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 
                          rounded-xl border border-border">
            <BookOpen size={16} className="text-primary shrink-0" />
            <span className="text-sm font-medium text-foreground">
              AI Prompt Kütüphanesi
            </span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 
                          rounded-xl border border-border">
            <Calculator size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-sm font-medium text-foreground">
              İşçilik Tazminatı Hesaplayıcı
            </span>
          </div>
        </div>

        <Button variant="default" size="lg" className="w-full md:w-auto" asChild>
          <Link href="/araclar">
            Tüm Araçları İncele
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>

    </div>
  </motion.div>
</section>
```

---

## Adım 3 — `src/components/landing/index.ts`

Mevcut dosyaya tek satır ekleme:

```diff
  export { CtaSection } from './CtaSection';
+ export { ToolsTeaser } from './ToolsTeaser';
```

---

## Adım 4 — `src/app/page.tsx`

```diff
  import {
    HeroSection,
    MethodologySection,
    ComparisonSection,
    MapSection,
    FeaturesSection,
+   ToolsTeaser,
  } from '@/components/landing';

  ...

      <FeaturesSection />
+     <ToolsTeaser />
    </div>
```

---

## Tasarım Kuralları (Uygulama Notları)

| Kural | Uygulama |
|-------|----------|
| Renkler | Yalnızca CSS değişkenleri: `text-foreground`, `bg-card`, `border-border`, `text-primary`, `text-muted-foreground`, `bg-muted` |
| Butonlar | `@/components/ui/button.tsx` — `variant="default"`, `variant="glass"` |
| Input stili | `w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary/50 transition-all` |
| Animasyon | Framer Motion, `whileInView`, `once: true` |
| Kart stili | `bg-card border border-border rounded-3xl overflow-hidden shadow-sm` |
| Gradient strip | `h-1 w-full bg-gradient-to-r from-primary via-...` |
| Mobil | `grid-cols-1 lg:grid-cols-2` ile stack yapısı |
| Dil | Mesleki, nesnel Türkçe — "En iyi" yerine "Pratik", "Hızlı" yerine "Pratik hesaplama aracı" |

---

## Doğrulama Adımları

1. `npm run dev` → geliştirme sunucusunu başlat
2. `http://localhost:3000` → FeaturesSection altında ToolsTeaser görünmeli
3. ToolsTeaser "Tüm Araçları İncele" butonuna tıkla → `/araclar` açılmalı
4. PDF formu: ad + email gir → submit → başarı mesajı görünmeli
5. Hesaplayıcı: tarih + ücret gir → "Hesapla" → kısmi sonuç görünmeli, detay blur'lu
6. Blur alanına email gir → "Detayları Göster" → blur kalkar
7. Mobil (DevTools 375px): kartlar dikey stack, formlar tam genişlik
8. Koyu tema toggle: tüm renkler doğru geçiş yapmalı
