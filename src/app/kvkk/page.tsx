import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export default function KVKKPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-6 shadow-sm">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">KVKK Aydınlatma Metni</h1>
          <p className="text-sm text-muted-foreground">Son güncelleme: 1 Mart 2026</p>
        </div>

        {/* Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm space-y-10">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">1. Veri Sorumlusunun Kimliği</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz aşağıda
              kimlik bilgileri verilen veri sorumlusu tarafından işlenmektedir:
            </p>
            <div className="p-4 bg-muted border border-border rounded-xl text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Unvan:</strong> Law2Do Hukuk Teknolojileri A.Ş.</p>
              <p><strong className="text-foreground">Adres:</strong> Alsancak Mah., Kıbrıs Şehitleri Cad. No: 42, Kat: 5, Konak, İzmir</p>
              <p><strong className="text-foreground">E-posta:</strong> kvkk@law2do.com</p>
              <p><strong className="text-foreground">Web:</strong> www.law2do.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">2. İşlenen Kişisel Veriler</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hizmetlerimizi sunabilmek amacıyla aşağıdaki kişisel veriler işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Kimlik Verileri:</strong> Ad, soyad, T.C. kimlik numarası, baro sicil numarası</li>
              <li><strong className="text-foreground">İletişim Verileri:</strong> E-posta adresi, telefon numarası, adres bilgileri</li>
              <li><strong className="text-foreground">Mesleki Veriler:</strong> Baro bilgisi, uzmanlık alanları, büro bilgileri</li>
              <li><strong className="text-foreground">Finansal Veriler:</strong> Fatura bilgileri, ödeme yöntemi bilgileri (kart bilgileri tarafımızca saklanmaz)</li>
              <li><strong className="text-foreground">İşlem Güvenliği Verileri:</strong> IP adresi, oturum bilgileri, log kayıtları</li>
              <li><strong className="text-foreground">Kullanım Verileri:</strong> Platform içi davranış verileri, tercihler, raporlama verileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Hizmet sözleşmesinin kurulması ve ifası</li>
              <li>Kullanıcı hesabının oluşturulması ve yönetimi</li>
              <li>Abonelik ve fatura işlemlerinin yürütülmesi</li>
              <li>Müşteri hizmetleri ve teknik destek sunulması</li>
              <li>Platform güvenliğinin sağlanması ve yetkisiz erişimin önlenmesi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi (vergi mevzuatı vb.)</li>
              <li>Hizmetlerin geliştirilmesi ve kullanıcı deneyiminin iyileştirilmesi</li>
              <li>İlgili kişilerin açık rızası alınmak kaydıyla pazarlama iletişimleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">4. Hukuki İşleme Sebepleri</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddeleri kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması</li>
              <li>Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi</li>
              <li>İlgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla meşru menfaat</li>
              <li>Açık rıza (yalnızca açık rıza gerektiren işlemler için)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">5. Kişisel Verilerin Aktarılması</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddeleri uyarınca ve gerekli güvenlik önlemleri alınarak
              aşağıdaki taraflara aktarılabilir:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Ödeme altyapısı sağlayıcıları (yalnızca ödeme işlemine ilişkin veriler)</li>
              <li>Bulut altyapı hizmet sağlayıcıları (Türkiye sınırları içinde)</li>
              <li>Yetkili kamu kurum ve kuruluşları (yasal zorunluluk halinde)</li>
              <li>Bağımsız denetim ve danışmanlık kuruluşları (gizlilik sözleşmesi kapsamında)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">6. Kişisel Verilerin Saklanma Süresi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verileriniz, işlenme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen
              saklama sürelerine uygun olarak muhafaza edilmektedir. Sözleşme ilişkisinin sona ermesinin ardından
              veriler, yasal yükümlülükler kapsamında 10 yıla kadar saklanabilir. Bu sürenin dolmasının ardından
              veriler güvenli yöntemlerle silinir, yok edilir veya anonim hale getirilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">7. İlgili Kişi Hakları</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerinizin işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri öğrenme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Düzeltme ve silme işlemlerinin aktarım yapılan üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-4">8. Başvuru Yöntemi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yukarıda sayılan haklarınızı kullanmak için aşağıdaki kanallar aracılığıyla yazılı olarak
              başvurabilirsiniz. Başvurularınız, talebin niteliğine göre en geç 30 gün içinde sonuçlandırılacaktır.
            </p>
            <div className="p-4 bg-muted border border-border rounded-xl text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">E-posta:</strong> kvkk@law2do.com</p>
              <p><strong className="text-foreground">Posta:</strong> Alsancak Mah., Kıbrıs Şehitleri Cad. No: 42, Kat: 5, Konak, İzmir</p>
              <p className="pt-2 text-xs">* Başvuruda; ad, soyad, imza, T.C. kimlik numarası, tebligat adresi veya e-posta adresi ve talep konusunun açıkça belirtilmesi gerekmektedir.</p>
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
