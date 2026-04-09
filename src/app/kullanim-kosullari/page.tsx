import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function KullanimKosullariPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl text-primary mb-6 shadow-sm border border-primary/20">
            <FileText size={28} />
          </div>
          <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">Kullanım Koşulları</h1>
          <p className="text-sm text-muted-foreground">Son güncelleme: 1 Mart 2026</p>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Kabul ve Onay</h2>
            <p className="text-muted-foreground leading-relaxed">
              Law2Do hizmetlerini kullanarak bu Kullanım Koşulları&apos;nı kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız, hizmetlerimizi kullanmamanızı rica ederiz. Law2Do, bu koşulları önceden bildirim yaparak değiştirme hakkını saklı tutar.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. Hizmet Tanımı</h2>
            <p className="text-muted-foreground leading-relaxed">
              Law2Do, avukatlar ve hukuk büroları için tasarlanmış bulut tabanlı bir iş akışı yönetim platformudur. Platform; dava takibi, görev yönetimi, süre hesaplama, bildirim ve hatırlatma, ekip koordinasyonu ve raporlama hizmetlerini içermektedir. Hizmetler &quot;olduğu gibi&quot; sunulmakta olup, sürekli olarak geliştirilmekte ve güncellenebilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Hesap Oluşturma ve Güvenlik</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hizmetlerimizi kullanabilmek için bir hesap oluşturmanız gerekmektedir. Hesap oluşturma sırasında:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Doğru ve güncel bilgiler sağlamayı kabul edersiniz</li>
              <li>Hesap güvenliğinden ve şifrenizin gizliliğinden siz sorumlusunuz</li>
              <li>Hesabınız üzerinden gerçekleştirilen tüm işlemlerden siz sorumlusunuz</li>
              <li>Yetkisiz erişim tespit ettiğinizde derhal bize bildirmeniz gerekmektedir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Kullanıcı Yükümlülükleri</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Hizmetlerimizi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Hizmeti yalnızca yasal amaçlarla kullanmak</li>
              <li>Üçüncü şahısların haklarını ihlal etmemek</li>
              <li>Sisteme zarar verecek veya işleyişini bozacak eylemlerden kaçınmak</li>
              <li>Hesap bilgilerinizi üçüncü şahıslarla paylaşmamak</li>
              <li>Ters mühendislik, kaynak kod çıkarma veya platformu kopyalama girişimlerinde bulunmamak</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Fikri Mülkiyet Hakları</h2>
            <p className="text-muted-foreground leading-relaxed">
              Law2Do platformu, tasarımı, logosu, yazılım kodu ve tüm içerikleri fikri mülkiyet hakları kapsamında korunmaktadır. Kullanıcılar, platforma yükledikleri verilerin mülkiyetini korurlar. Law2Do, kullanıcı verilerini yalnızca hizmet sunumu amacıyla işler ve üçüncü şahıslarla paylaşmaz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Ödeme ve Abonelik</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ücretli paketler için:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Abonelik ücretleri seçilen pakete göre aylık veya yıllık olarak faturalandırılır</li>
              <li>Fiyat değişiklikleri en az 30 gün önceden bildirilir</li>
              <li>İptal işlemi mevcut dönemin sonunda geçerli olur</li>
              <li>Ücretsiz deneme süresi 14 gündür ve otomatik olarak ücretli aboneliğe dönüşmez</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. Sorumluluk Sınırlamaları</h2>
            <p className="text-muted-foreground leading-relaxed">
              Law2Do, hizmetin kesintisiz veya hatasız çalışacağını garanti etmez. Platform bir iş yönetim aracı olup, hukuki danışmanlık hizmeti sunmamaktadır. Kullanıcılar, platformdaki bilgilere dayanarak aldıkları kararlardan kendileri sorumludur. Law2Do&apos;nun sorumluluğu, ilgili abonelik döneminde ödenen ücretle sınırlıdır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">8. Hizmetin Sonlandırılması</h2>
            <p className="text-muted-foreground leading-relaxed">
              Law2Do, kullanım koşullarının ihlali halinde hesabınızı askıya alma veya sonlandırma hakkını saklı tutar. Hesap sonlandırma durumunda verilerinizi 30 gün boyunca dışa aktarma imkanı sunulur. Bu süre sonunda verileriniz kalıcı olarak silinir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">9. Uygulanacak Hukuk ve Uyuşmazlık Çözümü</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu Kullanım Koşulları, Türkiye Cumhuriyeti kanunlarına tabidir. Bu koşullardan doğabilecek uyuşmazlıklarda İzmir Mahkemeleri ve İcra Daireleri yetkilidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">10. İletişim</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kullanım koşullarımız hakkında sorularınız için:
            </p>
            <div className="mt-4 p-4 bg-muted border border-border rounded-xl text-sm text-muted-foreground space-y-1">
              <p><strong>E-posta:</strong> hukuk@law2do.com</p>
              <p><strong>Adres:</strong> Alsancak Mah., Kıbrıs Şehitleri Cad. No: 42, Kat: 5, Konak, İzmir</p>
            </div>
          </section>

        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm text-primary font-medium hover:opacity-80 transition-colors">
            ← Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
