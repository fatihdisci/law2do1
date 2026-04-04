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

- [ ] **1.3** `tailwind.config.ts` dosyasını oluştur/güncelle  
  - `theme.extend.colors` içinde CSS değişkenlerine referans ver (`hsl(var(--color-primary))`)  
  - `theme.extend.fontFamily` içinde token'daki font ailelerini tanımla  
  - `theme.extend.boxShadow` içinde özel shadow'ları tanımla  
  - `theme.extend.borderRadius` içinde özel radius değerlerini tanımla  
  - `theme.extend.animation` ve `theme.extend.keyframes` içine tüm animasyonları taşı

---

## FAZ 2 — Dark Mode Tamiri

> Şu anda birçok component hardcoded renk kullandığı için dark mode'da sorun yaşıyor.

- [ ] **2.1** `src/components/Toast.tsx` dosyasını düzelt  
  - `bg-white` → `bg-card` değiştir  
  - `border-slate-100` → `border-border` değiştir  
  - `text-slate-900` → `text-foreground` değiştir  
  - `text-slate-500` → `text-muted-foreground` değiştir  
  - Dark mode'da görünürlüğü test et

- [ ] **2.2** `src/components/dashboard/Sidebar.tsx` dosyasını düzelt  
  - `bg-indigo-950` gibi hardcoded renkleri CSS değişkenlerine çevir  
  - `text-white` → `text-foreground` veya uygun token'a çevir  
  - Active link state'ini CSS değişkenleriyle yönet  
  - Dark/light mode'da tutarlı görünümü sağla

- [ ] **2.3** `src/components/DashboardCard.tsx` dosyasını düzelt  
  - Tüm hardcoded hex renkleri kaldır  
  - CSS değişkenleri veya Tailwind tema renkleri kullan  
  - Status renklerini (urgent/waiting/high priority) token sistemine bağla

- [ ] **2.4** `src/components/landing/ComparisonSection.tsx` dark mode uyumunu düzelt  
  - `text-slate-900`, `bg-slate-50`, `bg-white` gibi hardcoded değerleri temizle  
  - Excel mock-up'ın dark mode versiyonunu ekle (koyu toolbar, koyu grid)  
  - Law2Do kartının dark mode versiyonunu iyileştir

- [ ] **2.5** `src/app/page.tsx` ve tüm landing section bileşenlerini tara  
  - Hardcoded renk kullanan her yeri tespit et ve CSS değişkenlerine çevir  
  - Inline `style={{}}` içindeki renkleri de kontrol et  
  - `dark:` prefix'li Tailwind class'larını gözden geçir, gerekirse düzelt

- [ ] **2.6** `src/components/ThemeToggle.tsx` bileşenini iyileştir  
  - Dropdown yerine üç butonlu (Güneş/Ay/Sistem) kompakt bir toggle yap  
  - Aktif seçenek görsel olarak belirgin olsun  
  - Animasyonlu geçiş efekti ekle

---

## FAZ 3 — Profesyonel Navbar Yeniden Tasarımı

- [ ] **3.1** `src/components/Navbar.tsx` bileşenini yeniden tasarla  
  - Scroll'da glassmorphism efekti (backdrop-blur + yarı saydam arka plan)  
  - Logo bölümünü güçlendir: ikon + wordmark kombinasyonu  
  - Nav linkleri için hover'da alt çizgi animasyonu ekle  
  - CTA butonu (Ücretsiz Dene) için gradient veya ring efekti  
  - Mobile hamburger menü animasyonunu iyileştir (X'e dönen animasyon)  
  - Sticky navbar'ın dark/light mod geçişinde shadow değişimi

---

## FAZ 4 — Hero Section Yeniden Tasarımı

- [ ] **4.1** `src/components/landing/HeroSection.tsx` bileşenini yeniden tasarla  
  - Arkaplan: Subtle grid pattern veya noise texture (CSS ile, resim olmadan)  
  - Gradient spotlight efekti (fareyi takip eden veya statik radial gradient)  
  - Badge bileşeni: "Yeni: v2.0 çıktı →" şeklinde dikkat çekici animasyonlu rozet  
  - Ana başlık için kelime kelime veya harf harf giriş animasyonu  
  - Alt başlık için fade-in animasyonu  
  - CTA butonları: Primary (solid gradient) + Secondary (outline/ghost)  
  - Trusted by / Kullanıcı sayısı gibi social proof elementi ekle  
  - Dashboard preview mockup: Gerçek bir uygulama ekranı gibi görünen tarayıcı frame'i içinde dashboard kartları  
  - Hero'nun altına akan/kayan logo/marka marquee şeridi

---

## FAZ 5 — Features Section Yeniden Tasarımı

- [ ] **5.1** `src/components/landing/FeaturesSection.tsx` bileşenini yeniden tasarla  
  - 3'lü grid yerine daha dinamik bir layout: 1 büyük featured kart + 2 küçük kart  
  - Kart tasarımı: Icon container'ı için gradient arka plan  
  - Hover'da kart'ın hafifçe yukarı kalkması + shadow derinleşmesi  
  - Her feature için mini illustrasyon veya ikon animasyonu  
  - Section başlığına gradient text efekti  
  - Scroll tetiklemeli stagger animasyonu (kartlar sırayla açılsın)

---

## FAZ 6 — Methodology/Marquee Section İyileştirmesi

- [ ] **6.1** `src/components/landing/MethodologySection.tsx` bileşenini geliştir  
  - Marquee şeridini iki yönde çalıştır (ikinci şerit ters yönde)  
  - Şerit öğelerini adım adım numaralandır ve ikon ekle  
  - Şerit öğelerinin hover'ında duraklatma efekti  
  - Section arka planına hafif bir pattern veya gradient ekle

---

## FAZ 7 — Comparison Section Yeniden Tasarımı

> Bu bölüm korunacak, yapay zeka görseli kaldırılacak, gerçek mock-up geliştirilecek.

- [ ] **7.1** `src/components/landing/ComparisonSection.tsx` sol tarafı güncelle  
  - AI tarafından oluşturulan sahte görsel varsa kaldır  
  - Excel mock-up'ı daha detaylı ve gerçekçi yap (gerçek Excel UI'ına yakın)  
  - Dark mode'da Excel mock-up'ı uyumlu hale getir  
  - "Sorun" etiketini daha dikkat çekici yap (kırmızı badge, uyarı ikonu)

- [ ] **7.2** `src/components/landing/ComparisonSection.tsx` sağ tarafı güncelle  
  - Law2Do dashboard preview kartlarını geliştir  
  - Urgent kart: Pulsing kırmızı nokta + countdown timer animasyonu ekle  
  - Waiting kart: Yumuşak gri ton + saat ikonu  
  - High Priority kart: Turuncu badge + progress bar  
  - "Çözüm" etiketini yeşil badge ile güçlendir

- [ ] **7.3** ComparisonSection layout ve animasyonlarını geliştir  
  - İki kart arasına "VS" seperatörü ekle  
  - Section başlığını gradient text ile güçlendir  
  - Kartların giriş animasyonunu sol-sağ yerine aşağıdan yukarıya değiştir  
  - Alt kısma stats row ekle: "3x daha hızlı", "0 kayıp görev" gibi

---

## FAZ 8 — Turkey Map Section İyileştirmesi

> Parıldama efekti korunacak, görsel olarak daha premium hale getirilecek.

- [ ] **8.1** `src/components/TurkeyMap.tsx` görsel iyileştirmeleri  
  - Province fill rengi: Dark mode'da daha derin slate tonu, light mode'da soft mavi-gri  
  - Hover state: Daha belirgin glow efekti (box-shadow değil, filter: drop-shadow)  
  - Pulsing dots: Boyutunu ve glow yoğunluğunu artır  
  - Active/clicked province: Daha güçlü highlight ve smooth scale animasyonu  
  - Harita çerçevesi: Subtle border + gradient overlay (kenarlardan soluklaşma)

- [ ] **8.2** `src/components/landing/MapSection.tsx` wrapper'ı geliştir  
  - Section başlığını gradient text ile güçlendir  
  - Haritanın altına türkiye genelinde toplam kullanıcı sayısı sayacı ekle (animasyonlu)  
  - Section arka planına koyu gradient veya mesh gradient ekle  
  - Haritanın yanına veya altına 3'lü stats (Toplam Avukat, Toplam Dava, Toplam İl) ekle

---

## FAZ 9 — CTA Section Yeniden Tasarımı

- [ ] **9.1** `src/components/landing/CtaSection.tsx` bileşenini yeniden tasarla  
  - Full-width gradient arka plan (diagonal veya radial)  
  - Arka plana subtle noise/grain texture ekle  
  - Büyük, bold başlık + alt başlık  
  - İki buton: "Hemen Başla" (solid, büyük) + "Demo İzle" (outline)  
  - Alt kısma "Kredi kartı gerekmez • 14 gün ücretsiz • İptal istediğinde" gibi güven mesajı  
  - Confetti veya sparkle animasyonu hover'da

---

## FAZ 10 — Footer Yeniden Tasarımı

- [ ] **10.1** `src/components/Footer.tsx` bileşenini yeniden tasarla  
  - Logo + kısa açıklama + sosyal medya ikonları (sol kolon)  
  - Link grupları: Ürün / Şirket / Hukuki (orta kolonlar)  
  - Newsletter input alanı + abone ol butonu (sağ kolon)  
  - Alt kısma ince bir çizgi + copyright + dil seçici  
  - Dark mode'da footer arka planı koyu, light mode'da hafif gri/muted

---

## FAZ 11 — Pricing Page Yeniden Tasarımı

- [ ] **11.1** `src/app/pricing/page.tsx` ve `src/components/ui/pricing.tsx` geliştir  
  - Toggle'ı (aylık/yıllık) daha görsel bir pill switcher'a dönüştür  
  - Pricing kartlarına glassmorphism efekti ekle  
  - En popüler planı "POPULAR" badge + highlight border ile belirt  
  - Feature listesinde checkmark ikonları yerine daha şık ikonlar kullan  
  - Scroll tetiklemeli kart giriş animasyonu  
  - Alt kısma FAQ bölümü veya karşılaştırma tablosu ekle

---

## FAZ 12 — Login / Register Sayfaları Yeniden Tasarımı

- [ ] **12.1** `src/app/login/page.tsx` sayfasını yeniden tasarla  
  - Split layout: Sol taraf büyük arkaplan görseli/gradient + sağ taraf form  
  - Form container'ı glassmorphism kart içinde  
  - Input focus state'i animasyonlu ve renkli  
  - "Şifremi Unuttum" linki şık konumda  
  - Google/Apple ile giriş butonu (UI mock, işlevsiz olabilir)  
  - Dark mode'da arka plan koyu gradient

- [ ] **12.2** `src/app/register/page.tsx` sayfasını yeniden tasarla  
  - Login ile tutarlı split layout  
  - Multi-step form UI (3 adım göstergesi üstte)  
  - Şifre güç göstergesi (progress bar)  
  - Hizmet şartları checkbox'ı şık hale getir

---

## FAZ 13 — İletişim Sayfası Yeniden Tasarımı

- [ ] **13.1** `src/app/iletisim/page.tsx` sayfasını yeniden tasarla  
  - Sol kolon: İletişim bilgileri (adres, tel, mail) + sosyal medya ikonları  
  - Sağ kolon: Modern form tasarımı (floating labels veya clear label + input)  
  - Form gönderim animasyonu (loading state + success state)  
  - Harita embed veya şehir/adres görseli

---

## FAZ 14 — SSS Sayfası Yeniden Tasarımı

- [ ] **14.1** `src/app/sss/page.tsx` sayfasını yeniden tasarla  
  - Accordion bileşeni: Smooth open/close animasyonu  
  - Kategori filtreleme (Ödeme, Güvenlik, Kullanım, vb.)  
  - Arama input'u ile SSS filtreleme  
  - "Cevabı bulamadın mı? Bize yaz →" CTA

---

## FAZ 15 — Button ve UI Bileşenleri Sistemi

- [ ] **15.1** `src/components/ui/button.tsx` CVA varyantlarını genişlet  
  - `gradient` varyantı ekle (primary gradient)  
  - `glow` varyantı ekle (glow box-shadow efekti)  
  - `glass` varyantı ekle (glassmorphism)  
  - `size` varyantlarına `xl` ekle (hero CTA için)  
  - Tüm varyantların dark mode uyumunu doğrula

- [ ] **15.2** Yeni bileşenler oluştur (sadece ihtiyaç duyulanlar)  
  - `src/components/ui/badge.tsx` — Status badge (variant: success/warning/danger/muted)  
  - `src/components/ui/card.tsx` — Temel kart bileşeni (variant: default/glass/bordered)  
  - `src/components/ui/separator.tsx` — Bölüm ayırıcı  
  - `src/components/ui/stat.tsx` — Sayı + label stat bileşeni (animasyonlu sayaç ile)

---

## FAZ 16 — Animasyon ve Etkileşim Standardizasyonu

- [ ] **16.1** Framer Motion varyantlarını merkezi bir dosyada topla  
  - `src/lib/animations.ts` dosyası oluştur  
  - `fadeInUp`, `fadeInLeft`, `fadeInRight`, `stagger`, `scaleIn` varyantlarını tanımla  
  - Viewport threshold ve once değerlerini standart hale getir  
  - Tüm landing section'larda bu merkezi varyantları kullan

- [ ] **16.2** Sayfa geçiş animasyonu ekle  
  - Next.js route geçişlerinde fade veya slide animasyonu  
  - Loading state için skeleton bileşeni

---

## FAZ 17 — Responsive ve Erişilebilirlik

- [ ] **17.1** Tüm sayfaları mobile-first gözden geçir  
  - 375px (iPhone SE), 390px (iPhone 14), 768px (tablet), 1280px (desktop) test et  
  - Hero section mobile'da metin boyutunu kontrol et  
  - Navbar mobile menü animasyonunu test et  
  - Turkey map mobile'da kaydırılabilir container içinde mi? Kontrol et  
  - Footer linkleri mobile'da tek kolon mu? Düzelt

- [ ] **17.2** Erişilebilirlik temellerini ekle  
  - `aria-label` eksik olan buton ve linklere ekle  
  - Renk kontrastını WCAG AA standardına göre kontrol et (özellikle dark modda)  
  - Focus ring'lerin tüm interaktif elemanlarda görünür olduğundan emin ol  
  - `alt` etiketi eksik görselleri tamamla

---

## FAZ 18 — Performans ve Temizlik

- [ ] **18.1** Kullanılmayan kod ve bileşenleri temizle  
  - Import edilip kullanılmayan bileşenleri kaldır  
  - Yorum satırı kalmış test kodlarını temizle  
  - `console.log` statement'larını kaldır

- [ ] **18.2** Next.js optimizasyonları  
  - `next/font` ile font yüklemeyi optimize et (globals.css'den Google Fonts link'ini kaldır)  
  - `next/image` ile tüm `<img>` etiketlerini değiştir  
  - Büyük bileşenleri `dynamic import` ile lazy load et (TurkeyMap, ComparisonSlider)

---

## FAZ 19 — Son Kontrol ve Deploy

- [ ] **19.1** Full sayfa görsel denetimi  
  - Light mode: Tüm sayfaları baştan sona gözden geçir  
  - Dark mode: Tüm sayfaları baştan sona gözden geçir  
  - Tüm renklerin token sisteminden geldiğini doğrula  
  - Herhangi bir hardcoded renk kalmadığından emin ol

- [ ] **19.2** Design token değişim testi  
  - `design-tokens.ts` içinde primary rengi değiştir  
  - Sitenin her yerinde bu rengin güncellendiğini doğrula  
  - Font ailesini değiştir ve tüm sayfada yansıdığını doğrula

- [ ] **19.3** Git commit ve push  
  - Feature branch'e commit at: `claude/redesign-website-ui-NcRQF`  
  - Commit mesajı açıklayıcı olsun  
  - `git push -u origin claude/redesign-website-ui-NcRQF`

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

*Bu plan `claude/redesign-website-ui-NcRQF` branch'inde geliştirilecektir.*
