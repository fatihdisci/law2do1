import Link from 'next/link';
import { Users, Target, Eye, Scale, MapPin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Av. Mehmet Yılmaz',
    role: 'Kurucu & CEO',
    description: 'İstanbul Barosu avukatı. 12 yıllık hukuk pratiği deneyimiyle Law2Do\'yu kurdu.',
  },
  {
    name: 'Zeynep Kaya',
    role: 'Kurucu & CTO',
    description: 'Yazılım mühendisi. Hukuk teknolojisi alanında 8 yıl deneyim.',
  },
  {
    name: 'Av. Ali Demir',
    role: 'Hukuki Danışman',
    description: 'Ankara Barosu avukatı. Ürün geliştirme süreçlerinde hukuki rehberlik sağlar.',
  },
];

const milestones = [
  { year: '2022', event: 'Law2Do fikri ortaya çıktı, ilk prototip geliştirildi.' },
  { year: '2023', event: 'Beta sürümü 50 avukatla test edildi, ilk geri bildirimler alındı.' },
  { year: '2024', event: 'Resmi lansman. 200+ avukat ilk 3 ayda platforma katıldı.' },
  { year: '2025', event: 'UYAP entegrasyonu eklendi. 500+ aktif kullanıcıya ulaşıldı.' },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">

        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-6 shadow-sm">
            <Scale size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">Hakkımızda</h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Law2Do, Türkiye'deki avukatların dava süreçlerini daha verimli yönetmesi için
            kurulmuş bir hukuk teknolojisi şirketidir.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-bold text-foreground">Misyonumuz</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Türk hukuk büroları için süre kaçırma riskini sıfıra indiren,
              dava takibini otomatikleştiren ve ekip koordinasyonunu güçlendiren
              akıllı iş akışı çözümleri sunmak.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <Eye size={20} />
              </div>
              <h2 className="text-xl font-bold text-foreground">Vizyonumuz</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Türkiye'nin her ilinden avukatlara ulaşarak hukuki hizmetlerin
              kalitesini ve erişilebilirliğini artırmak; teknolojiyle
              adalete katkı sunmak.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hikayemiz</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Law2Do, bir avukatın önemli bir dava süresini Excel tablosundaki
              karışıklık yüzünden kaçırmasıyla başladı. Bu deneyim, hukuk
              bürolarının iş akışı yönetiminde ne kadar büyük bir boşluk
              olduğunu gözler önüne serdi.
            </p>
            <p>
              2022 yılında İzmir'de kurulan ekibimiz, avukatların gerçek ihtiyaçlarını
              anlamak için onlarla yan yana çalıştı. Sonuç: Türk hukuk sistemine
              özgü, UYAP entegrasyonlu, KVKK uyumlu bir platform.
            </p>
            <p>
              Bugün 500'den fazla avukat, her gün dava takibini, süre hesaplamasını
              ve ekip koordinasyonunu Law2Do ile yönetiyor.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-10 space-y-4">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-4">
                <div className="shrink-0 w-14 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-primary">{m.year}</span>
                </div>
                <p className="text-sm text-muted-foreground pt-1 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <Users size={20} />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Kurucu Ekip</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-card border border-border rounded-2xl p-6 shadow-sm">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold text-xl mb-4">
                  {member.name.split(' ').pop()?.charAt(0)}
                </div>
                <h3 className="font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-foreground text-lg mb-1">Bize Ulaşın</h3>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Mail size={14} />
                info@law2do.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Alsancak Mah., Kıbrıs Şehitleri Cad. No: 42, Konak, İzmir
              </span>
            </div>
          </div>
          <Link
            href="/iletisim"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/25"
          >
            İletişime Geç
          </Link>
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
