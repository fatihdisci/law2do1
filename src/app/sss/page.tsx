import { Scale, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Law2Do nedir ve ne işe yarar?",
    answer: "Law2Do, avukatlar ve hukuk büroları için geliştirilmiş bir iş akışı yönetim sistemidir. Dava süreçlerini otomatik iş akışlarına dönüştürerek süre kaçırma riskini sıfıra indirir, görevleri takip eder ve ekip koordinasyonunu kolaylaştırır."
  },
  {
    question: "Hangi dava türlerini destekliyorsunuz?",
    answer: "İş davaları, boşanma davaları, icra takipleri, ceza davaları, sigorta tahkim komisyonu başvuruları, idari davalar ve daha birçok dava türü için hazır iş akışı şablonları sunuyoruz. Ayrıca kendi özel iş akışlarınızı da oluşturabilirsiniz."
  },
  {
    question: "Verilerim güvende mi?",
    answer: "Evet. Tüm verileriniz 256-bit SSL şifreleme ile korunmaktadır. Sunucularımız Türkiye'de konumlandırılmış olup, KVKK (Kişisel Verilerin Korunması Kanunu) gerekliliklerine tam uyumludur. Düzenli yedekleme ve felaket kurtarma planlarımız mevcuttur."
  },
  {
    question: "KVKK'ya uyumlu musunuz?",
    answer: "Evet, Law2Do tamamen KVKK uyumludur. Kişisel veriler Türkiye sınırları içindeki sunucularda saklanır. Veri işleme süreçlerimiz, veri sorumlusu yükümlülüklerine uygun şekilde tasarlanmıştır. Detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz."
  },
  {
    question: "Ücretsiz deneme süresi var mı?",
    answer: "Evet! 14 gün boyunca tüm özelliklere sınırsız erişim sağlayan ücretsiz deneme sunuyoruz. Kredi kartı bilgisi gerekmez. Deneme süresi sonunda dilediğiniz paketi seçebilir veya hesabınızı kapatabilirsiniz."
  },
  {
    question: "Mobil cihazlardan erişebilir miyim?",
    answer: "Evet, Law2Do tamamen responsive bir web uygulamasıdır. Telefon, tablet veya bilgisayarınızdan herhangi bir modern tarayıcı üzerinden erişebilirsiniz. Ayrıca yakında iOS ve Android uygulamalarımız da kullanıma sunulacaktır."
  },
  {
    question: "Ekibimle birlikte kullanabilir miyiz?",
    answer: "Evet! Ofis ve Kurumsal paketlerimiz ekip yönetimi özelliklerini içerir. Ekip üyelerine görev atayabilir, dosya erişim yetkilerini yönetebilir ve ekip performansını takip edebilirsiniz. Bireysel pakette tek kullanıcı desteği bulunmaktadır."
  },
  {
    question: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
    answer: "Evet, aboneliğinizi istediğiniz zaman tek tıkla iptal edebilirsiniz. İptal işlemi sonrası mevcut dönem sonuna kadar sistemi kullanmaya devam edebilirsiniz. Verilerinizi dışa aktarma imkanı da sunulmaktadır."
  },
  {
    question: "UYAP entegrasyonu var mı?",
    answer: "UYAP entegrasyonu Kurumsal paketimizde sunulmaktadır. Bu entegrasyon sayesinde dava bilgileri otomatik olarak senkronize edilir ve manuel veri girişi ihtiyacı ortadan kalkar. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
  },
  {
    question: "Mevcut verilerimi sisteme aktarabilir miyim?",
    answer: "Evet, Excel ve CSV formatındaki mevcut dosya ve dava verilerinizi Law2Do'ya kolayca aktarabilirsiniz. Kurumsal paketlerde özel veri aktarım desteği de sağlanmaktadır."
  },
];

export default function SSSPage() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-2xl text-indigo-600 mb-6 shadow-sm border border-indigo-100">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Law2Do hakkında merak ettiğiniz her şey. Sorunuzun cevabını bulamadıysanız bizimle iletişime geçin.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group bg-card border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg text-sm font-bold shrink-0 group-open:bg-indigo-600 group-open:text-white transition-colors">
                    {index + 1}
                  </div>
                  <span className="text-base font-semibold text-foreground group-open:text-indigo-900">
                    {item.question}
                  </span>
                </div>
                <Scale size={18} className="text-muted-foreground shrink-0 group-open:text-indigo-600 transition-colors group-open:rotate-12 transition-transform" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <div className="pl-12 text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {item.answer}
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8 shadow-sm">
          <p className="text-lg font-semibold text-foreground mb-2">Başka sorunuz mu var?</p>
          <p className="text-muted-foreground mb-6">Ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
          >
            İletişime Geçin
          </a>
        </div>
      </div>
    </div>
  );
}
