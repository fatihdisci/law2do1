# Law2Do — Website UI/UX Yeniden Tasarım Planı

> **Amaç:** Siteyi profesyonel bir frontend designer tarafından yapılmış seviyeye çıkarmak.  
> **Kural:** Her adım bağımsız ve sıralı uygulanabilir. Bir önceki tamamlanmadan sonrakine geçilmez.  
> **Not:** Türkiye haritası (parıldama efektli) ve karşılaştırma bölümü korunacak, geliştirilecek.

---

## FAZ 1 — Design Token Sistemi (Tek Kaynak Gerçeği)

> Tüm renkler, yazı tipleri, shadow'lar tek bir dosyadan yönetilecek.  
> Renk değiştirmek için sadece bu dosyayı güncellemek yeterli olacak.

- [x] **1.1** `src/design-tokens.ts` dosyası oluştur ✅ (2026-04-04 07:14 UTC — tamamlandı, design token dosyası oluşturuldu)  
  - Primary, secondary, accent, neutral renk paletlerini HSL formatında tanımla  
  - Light ve dark mod değerlerini ayrı ayrı yaz  
  - Font ailelerini, font ağırlıklarını, font boyut skalasını ekle  
  - Shadow, border-radius, spacing skalasını ekle  
  - Tüm değerleri `as const` ile export et

- [x] **1.2** `src/app/globals.css` dosyasını design-tokens'a göre yeniden yaz ✅ (2026-04-04 07:19 UTC — root/dark değişkenleri token yapısına göre eşleştirildi, fontlar merkezileştirildi)  
  - `:root` içindeki tüm `--variable` değerlerini token dosyasından gelen değerlerle eşleştir  
  - `.dark` class'ı altındaki tüm değerleri token dosyasından gelen dark değerlerle eşleştir  
  - CSS değişken isimlerini tutarlı ve anlamlı hale getir (`--color-primary`, `--color-bg`, vb.)  
  - Font import'larını (Google Fonts veya next/font) merkezi hale getir

- [x] **1.3** `tailwind.config.ts` dosyasını oluştur/güncelle ✅ (2026-04-04 07:22 UTC — colors/font/shadow/radius/animation token tabanlı tailwind config eklendi)  
  - `theme.extend.colors` içinde CSS değişkenlerine referans ver (`hsl(var(--color-primary))`)  
  - `theme.extend.fontFamily` içinde token'daki font ailelerini tanımla  
  - `theme.extend.boxShadow` içinde özel shadow'ları tanımla  
  - `theme.extend.borderRadius` içinde özel radius değerlerini tanımla  
  - `theme.extend.animation` ve `theme.extend.keyframes` içine tüm animasyonları taşı

---

## FAZ 2 — Dark Mode Tamiri

> Şu anda birçok component hardcoded renk kullandığı için dark mode'da sorun yaşıyor.

- [x] **2.1** `src/components/Toast.tsx` dosyasını düzelt ✅  
  - `bg-white` → `bg-card` değiştir  
  - `border-slate-100` → `border-border` değiştir  
  - `text-slate-900` → `text-foreground` değiştir  
  - `text-slate-500` → `text-muted-foreground` değiştir  
  - Dark mode'da görünürlüğü test et

- [x] **2.2** `src/components/dashboard/Sidebar.tsx` dosyasını düzelt ✅  
  - `bg-indigo-950` gibi hardcoded renkleri CSS değişkenlerine çevir  
  - `text-white` → `text-foreground` veya uygun token'a çevir  
  - Active link state'ini CSS değişkenleriyle yönet  
  - Dark/light mode'da tutarlı görünümü sağla

- [x] **2.3** `src/components/DashboardCard.tsx` dosyasını düzelt ✅  
  - Tüm hardcoded hex renkleri kaldır  
  - CSS değişkenleri veya Tailwind tema renkleri kullan  
  - Status renklerini (urgent/waiting/high priority) token sistemine bağla

- [x] **2.4** `src/components/landing/ComparisonSection.tsx` dark mode uyumunu düzelt ✅  
  - `text-slate-900`, `bg-slate-50`, `bg-white` gibi hardcoded değerleri temizle  
  - Excel mock-up'ın dark mode versiyonunu ekle (koyu toolbar, koyu grid)  
  - Law2Do kartının dark mode versiyonunu iyileştir

- [x] **2.5** `src/app/page.tsx` ve tüm landing section bileşenlerini tara ✅  
  - Hardcoded renk kullanan her yeri tespit et ve CSS değişkenlerine çevir  
  - Inline `style={{}}` içindeki renkleri de kontrol et  
  - `dark:` prefix'li Tailwind class'larını gözden geçir, gerekirse düzelt

- [x] **2.6** `src/components/ThemeToggle.tsx` bileşenini iyileştir ✅  
  - Dropdown yerine üç butonlu (Güneş/Ay/Sistem) kompakt bir toggle yap  
  - Aktif seçenek görsel olarak belirgin olsun  
  - Animasyonlu geçiş efekti ekle

---

## FAZ 3 — Profesyonel Navbar Yeniden Tasarımı

- [x] **3.1** `src/components/Navbar.tsx` bileşenini yeniden tasarla ✅  
  - Scroll'da glassmorphism efekti (backdrop-blur + yarı saydam arka plan)  
  - Logo bölümünü güçlendir: Scale ikonu + wordmark kombinasyonu  
  - Nav linkleri için hover'da alt çizgi animasyonu ekle  
  - CTA butonu için btn-shimmer + glow shadow efekti  
  - Mobile hamburger: CSS animasyonlu 3 çizgi → X dönüşümü  
  - Mobile menü: max-height CSS slide-down animasyonu

---

## FAZ 4 — Hero Section Yeniden Tasarımı

- [x] **4.1** `src/components/landing/HeroSection.tsx` bileşenini yeniden tasarla ✅  
  - Arkaplan: CSS dot-grid pattern (`.hero-grid`) + radial spotlight  
  - Gradient spotlight efekti: statik ellipse radial-gradient  
  - Badge: pulsing primary dot + ArrowRight, primary/10 bg  
  - Ana başlık: Framer Motion staggerChildren per-word animasyonu  
  - Alt başlık: delay 0.55s fade-in  
  - CTA birincil: bg-gradient-to-br + btn-shimmer + shadow-primary/25  
  - CTA ikincil: Play ikonu primary/10 dairede + outline  
  - Social proof: renkli avatar stack + 4.9/5.0 yıldız + "500+ avukat"  
  - Dashboard mockup: 3D tilt, browser chrome, 3 task state  
  - Marquee şerit: baro/hukuk organizasyonları, kenar fade overlay

---

## FAZ 5 — Features Section Yeniden Tasarımı

- [x] **5.1** `src/components/landing/FeaturesSection.tsx` bileşenini yeniden tasarla ✅  
  - Bento grid: 1 büyük kart (col-7) + 2 yığılmış küçük kart (col-5)  
  - Section header: pill badge + gradient-text başlık + alt başlık  
  - Her kart: gradient top accent strip + gradient icon container  
  - Hover: `-translate-y-1.5` + `shadow-xl` + icon `scale-110`  
  - Framer Motion staggerChildren 0.15s whileInView  
  - Alt CTA strip: "14 gün ücretsiz" mesajı + aksiyon butonu

---

## FAZ 6 — Methodology/Marquee Section İyileştirmesi

- [x] **6.1** `src/components/landing/MethodologySection.tsx` bileşenini geliştir ✅ (2026-04-05 00:00 UTC — çift yön marquee, numaralı+ikonlu öğeler, hover pause ve arkaplan pattern/gradient eklendi)  
  - Marquee şeridini iki yönde çalıştır (ikinci şerit ters yönde)  
  - Şerit öğelerini adım adım numaralandır ve ikon ekle  
  - Şerit öğelerinin hover'ında duraklatma efekti  
  - Section arka planına hafif bir pattern veya gradient ekle

---

## FAZ 7 — Comparison Section Yeniden Tasarımı

> Bu bölüm korunacak, yapay zeka görseli kaldırılacak, gerçek mock-up geliştirilecek.

- [x] **7.1** `src/components/landing/ComparisonSection.tsx` sol tarafı güncelle ✅ (2026-04-05 00:00 UTC — Excel mock-up gerçekçi hale getirildi, problem badge güçlendirildi, AI tarzı sahte görsel yaklaşımı kaldırıldı)  
  - AI tarafından oluşturulan sahte görsel varsa kaldır  
  - Excel mock-up'ı daha detaylı ve gerçekçi yap (gerçek Excel UI'ına yakın)  
  - Dark mode'da Excel mock-up'ı uyumlu hale getir  
  - "Sorun" etiketini daha dikkat çekici yap (kırmızı badge, uyarı ikonu)

- [x] **7.2** `src/components/landing/ComparisonSection.tsx` sağ tarafı güncelle ✅ (2026-04-05 00:00 UTC — urgent/waiting/high-priority kartları, pulsing nokta, countdown ve progress bar iyileştirildi)  
  - Law2Do dashboard preview kartlarını geliştir  
  - Urgent kart: Pulsing kırmızı nokta + countdown timer animasyonu ekle  
  - Waiting kart: Yumuşak gri ton + saat ikonu  
  - High Priority kart: Turuncu badge + progress bar  
  - "Çözüm" etiketini yeşil badge ile güçlendir

- [x] **7.3** ComparisonSection layout ve animasyonlarını geliştir ✅ (2026-04-05 00:00 UTC — gradient başlık, aşağıdan-yukarı animasyon ve stats row eklendi)  
  - (Kaldırıldı) İki kart arasına "VS" seperatörü ekle  
  - Section başlığını gradient text ile güçlendir  
  - Kartların giriş animasyonunu sol-sağ yerine aşağıdan yukarıya değiştir  
  - Alt kısma stats row ekle: "3x daha hızlı", "0 kayıp görev" gibi

---

## FAZ 8 — Turkey Map Section İyileştirmesi

> Parıldama efekti korunacak, görsel olarak daha premium hale getirilecek.

- [x] **8.1** `src/components/TurkeyMap.tsx` görsel iyileştirmeleri ✅ (2026-04-05 00:00 UTC — il dolguları/theme renkleri, güçlü hover/active glow, büyük pulsing dot ve harita çerçeve/overlay iyileştirmeleri tamamlandı)  
  - Province fill rengi: Dark mode'da daha derin slate tonu, light mode'da soft mavi-gri  
  - Hover state: Daha belirgin glow efekti (box-shadow değil, filter: drop-shadow)  
  - Pulsing dots: Boyutunu ve glow yoğunluğunu artır  
  - Active/clicked province: Daha güçlü highlight ve smooth scale animasyonu  
  - Harita çerçevesi: Subtle border + gradient overlay (kenarlardan soluklaşma)

- [x] **8.2** `src/components/landing/MapSection.tsx` wrapper'ı geliştir ✅ (2026-04-05 00:00 UTC — gradient başlık, animasyonlu kullanıcı sayacı ve 3'lü stats alanı eklendi; arkaplan mesh/gradient güçlendirildi)  
  - Section başlığını gradient text ile güçlendir  
  - Haritanın altına türkiye genelinde toplam kullanıcı sayısı sayacı ekle (animasyonlu)  
  - Section arka planına koyu gradient veya mesh gradient ekle  
  - Haritanın yanına veya altına 3'lü stats (Toplam Avukat, Toplam Dava, Toplam İl) ekle

---

## FAZ 9 — CTA Section Yeniden Tasarımı

- [x] **9.1** `src/components/landing/CtaSection.tsx` bileşenini yeniden tasarla ✅
  - Full-width gradient arka plan (diagonal veya radial)
  - Arka plana subtle noise/grain texture ekle
  - Büyük, bold başlık + alt başlık
  - İki buton: "Hemen Başla" (solid, büyük) + "Demo İzle" (outline)
  - Alt kısma "Kredi kartı gerekmez • 14 gün ücretsiz • İptal istediğinde" gibi güven mesajı
  - Confetti veya sparkle animasyonu hover'da

---

## FAZ 9.5 — UI Temizlik & İyileştirme Geçişi

> FAZ 9 sonrası, FAZ 10 öncesi yapılan toplu düzeltmeler.

- [x] **9.5.1** `ComparisonSection.tsx` — Ekrana ortalanmadı sorunu düzeltildi ✅ (2026-04-05 15:38 UTC)
  - Grid `md:grid-cols-[1fr_auto_1fr]` → `md:grid-cols-2` yapıldı, sola yaslanma giderildi
  - `max-w-5xl mx-auto` ile ortalandı
  - VS ayırıcı `top-1/2` ve `z-10` ile konumlandı
  - Stats row da `max-w-5xl mx-auto` ile ortalandı

- [x] **9.5.2** `HeroSection.tsx` — Social proof satırı kaldırıldı ✅ (2026-04-05 15:38 UTC)
  - Avatar stack (500+ avukat), yıldız puanı (4.9/5.0), "Kredi kartı gerekmez" kaldırıldı
  - Kullanılmayan importlar (Star) temizlendi

- [x] **9.5.3** `MethodologySection.tsx` — Marquee 2 satırdan 1'e düşürüldü ✅ (2026-04-05 15:39 UTC)
  - İkinci (ters yönlü) marquee şeridi kaldırıldı, tek satır kaldı

- [x] **9.5.4** `MapSection.tsx` — Avukat sayacı ve stats kaldırıldı ✅ (2026-04-05 15:39 UTC)
  - Animasyonlu kullanıcı sayacı (+12.480) kaldırıldı
  - 3'lü stats alanı (Toplam Avukat, Toplam Dava, Kapsanan İl) kaldırıldı
  - Harita ve başlık korundu
  - useState/useEffect importları temizlendi

- [x] **9.5.5** `CtaSection.tsx` — Badge ve başlık metni güncellendi ✅ (2026-04-05 15:40 UTC)
  - "Büro düzeni artık kendiliğinden aksın" badge kaldırıldı
  - "Her dosyada daha az takip, daha çok netlik" başlığı → "Hukuk büronuzu bir üst seviyeye taşıyın" olarak değiştirildi

---

## FAZ 10 — Footer Yeniden Tasarımı

- [x] **10.1** `src/components/Footer.tsx` bileşenini yeniden tasarla ✅ (2026-04-05 15:41 UTC)
  - Logo (Scale ikonu + gradient bg) + kısa açıklama + 3 sosyal medya ikonu (Twitter, LinkedIn, E-posta)
  - Link grupları: Ürün / Şirket / Hukuki — her linkte hover'da ArrowRight micro-animasyonu
  - Newsletter input alanı + abone ol butonu + başarı state animasyonu
  - Alt kısma ince gradient çizgi + copyright (dinamik yıl) + kalp emoji + dil seçici butonu
  - Dark mode tam uyumlu, token sistemi kullanıldı
  - Subtle dot-grid arkaplan eklendi
  - KVKK Aydınlatma ve Hakkımızda linkleri eklendi

## FAZ 11 — Fiyatlandırma (Pricing) Bileşeni İyileştirmeleri [TAMAMLANDI]

- [x] **11.1** `src/app/pricing/page.tsx` ve `src/components/ui/pricing.tsx` geliştir  
  - [x] Toggle'ı (aylık/yıllık) daha görsel bir pill switcher'a dönüştür  
  - [x] Pricing kartlarına glassmorphism efekti ekle  
  - [x] En popüler planı "POPULAR" badge + highlight border ile belirt  
  - [x] Feature listesinde checkmark ikonları yerine daha şık ikonlar kullan  
  - [x] Scroll tetiklemeli kart giriş animasyonu  
  - [x] Alt kısma FAQ bölümü veya karşılaştırma tablosu ekle

---

## FAZ 12 — Login / Register Sayfaları Yeniden Tasarımı [TAMAMLANDI]

- [x] **12.1** `src/app/login/page.tsx` sayfasını yeniden tasarla  
  - [x] Split layout: Sol taraf büyük arkaplan görseli/gradient + sağ taraf form  
  - [x] Form container'ı glassmorphism kart içinde  
  - [x] Input focus state'i animasyonlu ve renkli  
  - [x] "Şifremi Unuttum" linki şık konumda  
  - [x] Google/Apple ile giriş butonu (UI mock, işlevsiz olabilir)  
  - [x] Dark mode'da arka plan koyu gradient

- [x] **12.2** `src/app/register/page.tsx` sayfasını yeniden tasarla  
  - [x] Login ile tutarlı split layout  
  - [x] Multi-step form UI (3 adım göstergesi üstte)  
  - [x] Şifre güç göstergesi (progress bar)  
  - [x] Hizmet şartları checkbox'ı şık hale getir

---

## FAZ 13 — İletişim Sayfası Yeniden Tasarımı [TAMAMLANDI]

- [x] **13.1** `src/app/iletisim/page.tsx` sayfasını yeniden tasarla  
  - [x] Sol kolon: İletişim bilgileri (adres, tel, mail) + sosyal medya ikonları  
  - [x] Sağ kolon: Modern form tasarımı (floating labels veya clear label + input)  
  - [x] Form gönderim animasyonu (loading state + success state)  
  - [x] Harita embed veya şehir/adres görseli

---

## FAZ 14 — SSS Sayfası Yeniden Tasarımı [TAMAMLANDI]

- [x] **14.1** `src/app/sss/page.tsx` sayfasını yeniden tasarla  
  - [x] Accordion bileşeni: Smooth open/close animasyonu  
  - [x] Kategori filtreleme (Ödeme, Güvenlik, Kullanım, vb.)  
  - [x] Arama input'u ile SSS filtreleme  
  - [x] "Cevabı bulamadın mı? Bize yaz →" CTA

---

## FAZ 15 — Button ve UI Bileşenleri Sistemi [TAMAMLANDI]

- [x] **15.1** `src/components/ui/button.tsx` CVA varyantlarını genişlet  
  - [x] `gradient` varyantı ekle (primary gradient)  
  - [x] `glow` varyantı ekle (glow box-shadow efekti)  
  - [x] `glass` varyantı ekle (glassmorphism)  
  - [x] `size` varyantlarına `xl` ekle (hero CTA için)  
  - [x] Tüm varyantların dark mode uyumunu doğrula

- [x] **15.2** Yeni bileşenler oluştur (sadece ihtiyaç duyulanlar)  
  - [x] `src/components/ui/badge.tsx` — Status badge (variant: success/warning/danger/muted)  
  - [x] `src/components/ui/card.tsx` — Temel kart bileşeni (variant: default/glass/bordered)  
  - [x] `src/components/ui/separator.tsx` — Bölüm ayırıcı  
  - [x] `src/components/ui/stat.tsx` — Sayı + label stat bileşeni (animasyonlu sayaç ile)

---

## FAZ 16 — Animasyon ve Etkileşim Standardizasyonu [TAMAMLANDI]

- [x] **16.1** Framer Motion varyantlarını merkezi bir dosyada topla  
  - [x] `src/lib/animations.ts` dosyası oluştur  
  - [x] `fadeInUp`, `fadeInLeft`, `fadeInRight`, `stagger`, `scaleIn` varyantlarını tanımla  
  - [x] Viewport threshold ve once değerlerini standart hale getir  
  - [x] Tüm landing section'larda bu merkezi varyantları kullan

- [x] **16.2** Sayfa geçiş animasyonu ekle  
  - [x] Next.js route geçişlerinde fade veya slide animasyonu  
  - [x] Loading state için skeleton bileşeni

---

## FAZ 17 — Responsive ve Erişilebilirlik [TAMAMLANDI]

- [x] **17.1** Tüm sayfaları mobile-first gözden geçir  
  - [x] 375px (iPhone SE), 390px (iPhone 14), 768px (tablet), 1280px (desktop) test et  
  - [x] Hero section mobile'da metin boyutunu kontrol et  
  - [x] Navbar mobile menü animasyonunu test et  
  - [x] Turkey map mobile'da kaydırılabilir container içinde mi? Kontrol et  
  - [x] Footer linkleri mobile'da tek kolon mu? Düzelt

- [x] **17.2** Erişilebilirlik temellerini ekle  
  - [x] `aria-label` eksik olan buton ve linklere ekle  
  - [x] Renk kontrastını WCAG AA standardına göre kontrol et (özellikle dark modda)  
  - [x] Focus ring'lerin tüm interaktif elemanlarda görünür olduğundan emin ol  
  - [x] `alt` etiketi eksik görselleri tamamla

---

## FAZ 18 — Performans ve Temizlik [TAMAMLANDI]

- [x] **18.1** Kullanılmayan kod ve bileşenleri temizle  
  - [x] Import edilip kullanılmayan bileşenleri kaldır  
  - [x] Yorum satırı kalmış test kodlarını temizle  
  - [x] `console.log` statement'larını kaldır

- [x] **18.2** Next.js optimizasyonları  
  - [x] `next/font` ile font yüklemeyi optimize et (globals.css'den Google Fonts link'ini kaldır)  
  - [x] `next/image` ile tüm `<img>` etiketlerini değiştir  
  - [x] Büyük bileşenleri `dynamic import` ile lazy load et (TurkeyMap, ComparisonSlider)

---

## FAZ 19 — Son Kontrol ve Deploy [TAMAMLANDI]

- [x] **19.1** Full sayfa görsel denetimi  
  - [x] Light mode: Tüm sayfaları baştan sona gözden geçir  
  - [x] Dark mode: Tüm sayfaları baştan sona gözden geçir  
  - [x] Tüm renklerin token sisteminden geldiğini doğrula  
  - [x] Herhangi bir hardcoded renk kalmadığından emin ol

- [x] **19.2** Design token değişim testi  
  - [x] `design-tokens.ts` içinde primary rengi değiştir  
  - [x] Sitenin her yerinde bu rengin güncellendiğini doğrula  
  - [x] Font ailesini değiştir ve tüm sayfada yansıdığını doğrula

- [x] **19.3** Git commit ve push  
  - [x] Feature branch'e commit at  
  - [x] Commit mesajı açıklayıcı olsun  

---

## Önemli Notlar — Agent İçin

### Korunacak Bölümler (Silme/Kaldırma)
- `TurkeyMap.tsx` — SVG harita ve parıldama efektleri tamamen korunacak, sadece görsel iyileştirme yapılacak
- `ComparisonSection.tsx` — Genel yapı korunacak, içerik ve görsel kalite artırılacak
- `ComparisonSlider.tsx` — Tamamen korunacak

### Yeni Renk Paleti Değişikliği
> **ÖNEMLİ:** Mevcut renk sistemi (emerald/green primary) değişebilir.  
> FAZ 1 tamamlandıktan sonra `design-tokens.ts` içindeki primary rengi güncellemek,  
> sitenin tamamında değişimi yayacak. Bu yüzden FAZ 1 önceliklidir.

### Dark Mode Prensibi
- Light mode: Beyaz/çok açık gri arka plan, koyu metin
- Dark mode: `#0f172a` veya daha derin slate arka plan, açık metin
- Primary renk her iki modda da net kontrast sağlamalı
- Hiçbir bileşende hardcoded renk (`bg-white`, `text-slate-900`, `#hex`) kalmamalı

### Profesyonel Tasarım Kriterleri
- **Tutarlılık:** Tüm bileşenler aynı border-radius, shadow, spacing sistemini kullanmalı
- **Hiyerarşi:** Görsel ağırlık net olmalı (primary CTA en belirgin)
- **Boşluk:** Sıkışık değil, nefes alan layout'lar
- **Animasyon:** Subtle ve amaçlı — dikkat dağıtmayan, kullanıcıyı yönlendiren
- **Tipografi:** En fazla 2 font ailesi, net boyut hiyerarşisi

---

