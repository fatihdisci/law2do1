"use client";

import { Pricing } from "@/components/ui/pricing";

const plans = [
    {
        name: "BİREYSEL",
        price: "499",
        yearlyPrice: "399",
        period: "ay",
        features: [
            "10 aktif dosya",
            "Otomatik süre hesaplama",
            "Görev yönetimi",
            "E-posta bildirimleri",
            "Temel raporlama",
            "7/24 erişim",
        ],
        description: "Serbest çalışan avukatlar için ideal başlangıç",
        buttonText: "Ücretsiz Dene",
        href: "/dashboard",
        isPopular: false,
    },
    {
        name: "OFİS",
        price: "1499",
        yearlyPrice: "1199",
        period: "ay",
        features: [
            "Sınırsız dosya",
            "Tüm Bireysel özellikler",
            "Kasa defteri",
            "Finansal raporlar",
            "Ekip yönetimi (5 kullanıcı)",
            "Müvekkil portalı",
            "WhatsApp entegrasyonu",
            "Öncelikli destek",
        ],
        description: "Büyüyen hukuk büroları için en çok tercih edilen",
        buttonText: "Hemen Başla",
        href: "/dashboard",
        isPopular: true,
    },
    {
        name: "KURUMSAL",
        price: "0",
        yearlyPrice: "0",
        period: "",
        features: [
            "Tüm Ofis özellikleri",
            "Sınırsız kullanıcı",
            "API erişimi",
            "UYAP entegrasyonu",
            "Özel eğitim programı",
            "Dedicated hesap yöneticisi",
            "SLA garantisi",
            "Özel geliştirmeler",
        ],
        description: "Büyük hukuk büroları için özel çözümler",
        buttonText: "İletişime Geç",
        href: "/contact",
        isPopular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24">
            {/* Aurora Background */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10">
                <Pricing
                    plans={plans}
                    title="Büronuza Uygun Paketi Seçin"
                    description="Gizli maliyet yok. İstediğiniz zaman iptal edebilirsiniz.
14 gün boyunca tüm özelliklere ücretsiz erişim."
                />

                {/* FAQ Teaser */}
                <div className="text-center pb-20">
                    <p className="text-slate-500">
                        Sorularınız mı var?{" "}
                        <a
                            href="/contact"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Bize ulaşın
                        </a>
                    </p>
                </div>

                {/* Trust Signals */}
                <div className="max-w-4xl mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div className="text-3xl font-black text-indigo-600 mb-2">14 Gün</div>
                            <div className="text-slate-500 text-sm">Ücretsiz deneme süresi</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div className="text-3xl font-black text-emerald-600 mb-2">%100</div>
                            <div className="text-slate-500 text-sm">Memnuniyet garantisi</div>
                        </div>
                        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                            <div className="text-3xl font-black text-indigo-600 mb-2">7/24</div>
                            <div className="text-slate-500 text-sm">Teknik destek</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
