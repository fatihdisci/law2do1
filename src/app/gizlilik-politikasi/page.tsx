import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function GizlilikPolitikasiPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-50 rounded-2xl text-indigo-600 mb-6 shadow-sm border border-indigo-100">
            <Shield size={28} />
          </div>
          <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">Gizlilik Politikası</h1>
          <p className="text-sm text-muted-foreground">Son güncelleme: 1 Mart 2026</p>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Genel Bakış</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Law2Do olarak, kullanıcılarımızın gizliliğini korumayı en önemli önceliklerimizden biri olarak kabul ediyoruz. Bu Gizlilik Politikası, kişisel verilerinizin nasıl toplandığını, kullanıldığını, saklandığını ve korunduğunu açıklamaktadır.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bu politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat kapsamında hazırlanmıştır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Toplanan Veriler</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Hizmetlerimizi sunabilmek için aşağıdaki kişisel verileri toplayabiliriz:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Ad, soyad ve iletişim bilgileri (e-posta, telefon numarası)</li>
              <li>Baro sicil numarası ve mesleki bilgiler</li>
              <li>Hesap oluşturma ve giriş bilgileri</li>
              <li>Hizmet kullanımına ilişkin log kayıtları ve analitik veriler</li>
              <li>Ödeme işlemlerine ilişkin finansal bilgiler (kredi kartı bilgileri doğrudan tarafımızca saklanmaz)</li>
              <li>Çerez ve benzeri teknolojiler aracılığıyla toplanan teknik veriler</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Verilerin Kullanım Amacı</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Toplanan veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Hizmetlerimizin sunulması ve iyileştirilmesi</li>
              <li>Kullanıcı hesaplarının oluşturulması ve yönetimi</li>
              <li>Teknik destek ve müşteri hizmetleri sağlanması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Güvenlik önlemlerinin alınması ve dolandırıcılığın önlenmesi</li>
              <li>İstatistiksel analizler ve hizmet geliştirme çalışmaları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Verilerin Saklanması ve Güvenliği</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kişisel verileriniz, Türkiye Cumhuriyeti sınırları içinde bulunan güvenli sunucularda saklanmaktadır. Verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alıyoruz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>256-bit SSL/TLS şifreleme</li>
              <li>Düzenli güvenlik denetimleri ve penetrasyon testleri</li>
              <li>Erişim kontrol mekanizmaları ve yetkilendirme sistemleri</li>
              <li>Düzenli veri yedekleme ve felaket kurtarma planları</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. KVKK Kapsamındaki Haklarınız</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Kişisel verilerinizin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Çerezler</h2>
            <p className="text-muted-foreground leading-relaxed">
              Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır. Çerezler, tarayıcınız aracılığıyla cihazınıza yerleştirilen küçük metin dosyalarıdır. Zorunlu çerezler hizmetin işleyişi için gereklidir. Analitik çerezler ise hizmetimizi geliştirmek amacıyla anonim kullanım verileri toplar. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. İletişim</h2>
            <p className="text-muted-foreground leading-relaxed">
              Gizlilik politikamız hakkında sorularınız veya KVKK kapsamındaki talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz:
            </p>
            <div className="mt-4 p-4 bg-muted border border-border rounded-xl text-sm text-muted-foreground space-y-1">
              <p><strong>E-posta:</strong> kvkk@law2do.com</p>
              <p><strong>Adres:</strong> Alsancak Mah., Kıbrıs Şehitleri Cad. No: 42, Kat: 5, Konak, İzmir</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
