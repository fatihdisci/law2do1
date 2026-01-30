"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface PricingTier {
    name: string;
    description: string;
    monthlyPrice: number;
    features: string[];
    highlighted?: boolean;
    cta: string;
}

const tiers: PricingTier[] = [
    {
        name: "Bireysel",
        description: "Serbest çalışan avukatlar için",
        monthlyPrice: 499,
        features: [
            "10 Dosya",
            "Otomatik süre hesaplama",
            "Görev yönetimi",
            "E-posta bildirimleri",
            "Temel raporlama",
        ],
        cta: "Ücretsiz Başla",
    },
    {
        name: "Ofis",
        description: "Küçük ve orta ölçekli bürolar için",
        monthlyPrice: 1499,
        features: [
            "Sınırsız Dosya",
            "Kasa Defteri",
            "Tüm Bireysel özellikler",
            "Finansal raporlar",
            "Ekip yönetimi (5 kullanıcı)",
            "Müvekkil portalı",
            "WhatsApp entegrasyonu",
            "Öncelikli destek",
        ],
        highlighted: true,
        cta: "Ücretsiz Dene",
    },
    {
        name: "Kurumsal",
        description: "Büyük hukuk büroları için",
        monthlyPrice: 0,
        features: [
            "Tüm Ofis özellikleri",
            "Sınırsız kullanıcı",
            "API erişimi",
            "UYAP entegrasyonu",
            "Özel eğitim programı",
            "Dedicated hesap yöneticisi",
            "SLA garantisi",
        ],
        cta: "İletişime Geç",
    },
];

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false);

    const getPrice = (monthlyPrice: number) => {
        if (monthlyPrice === 0) return "Özel";
        const price = isYearly ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
        return `₺${price}`;
    };

    return (
        <div className="min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-24">
            {/* Aurora Background */}
            <div className="aurora-blob aurora-blob-primary w-[500px] h-[500px] -top-20 left-1/4 opacity-20 fixed" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full mb-4">
                        Basit Fiyatlandırma
                    </span>
                    <h1 className="text-3xl lg:text-5xl font-bold text-indigo-950 mb-4">
                        Büronuza Uygun Paketi Seçin
                    </h1>
                    <p className="text-lg text-slate-600">
                        Gizli maliyet yok. İstediğiniz zaman iptal edebilirsiniz.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span
                        className={`font-medium ${!isYearly ? "text-indigo-950" : "text-slate-400"
                            }`}
                    >
                        Aylık
                    </span>
                    <button
                        onClick={() => setIsYearly(!isYearly)}
                        className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isYearly ? "bg-emerald-600" : "bg-slate-200"
                            }`}
                        aria-label="Toggle yearly pricing"
                    >
                        <span
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-1"
                                }`}
                        />
                    </button>
                    <span
                        className={`font-medium ${isYearly ? "text-indigo-950" : "text-slate-400"
                            }`}
                    >
                        Yıllık
                    </span>
                    {isYearly && (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full animate-[fade-in-up_0.3s_ease-out]">
                            %20 İndirim
                        </span>
                    )}
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${tier.highlighted
                                ? "bg-indigo-950 border-indigo-800 text-white scale-105 shadow-2xl shadow-indigo-950/30"
                                : "bg-white border-slate-200 hover:border-indigo-200 hover:shadow-lg"
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1 px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        <Sparkles className="w-3 h-3" />
                                        <span>EN POPÜLER</span>
                                    </div>
                                </div>
                            )}

                            {/* Header */}
                            <div className="mb-6">
                                <h3
                                    className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-indigo-950"
                                        }`}
                                >
                                    {tier.name}
                                </h3>
                                <p
                                    className={`text-sm ${tier.highlighted ? "text-indigo-200" : "text-slate-500"
                                        }`}
                                >
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span
                                        className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-indigo-950"
                                            }`}
                                    >
                                        {getPrice(tier.monthlyPrice)}
                                    </span>
                                    {tier.monthlyPrice > 0 && (
                                        <span
                                            className={`text-sm ${tier.highlighted ? "text-indigo-300" : "text-slate-500"
                                                }`}
                                        >
                                            /ay
                                        </span>
                                    )}
                                </div>
                                {tier.monthlyPrice > 0 && isYearly && (
                                    <p
                                        className={`text-xs mt-1 ${tier.highlighted ? "text-indigo-300" : "text-slate-400"
                                            }`}
                                    >
                                        Yıllık faturalandırma
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <Check
                                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-emerald-400" : "text-emerald-600"
                                                }`}
                                        />
                                        <span
                                            className={`text-sm ${tier.highlighted ? "text-indigo-100" : "text-slate-600"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Link
                                href={tier.monthlyPrice === 0 ? "/contact" : "/dashboard"}
                                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-xl transition-all duration-200 ${tier.highlighted
                                    ? "bg-white text-indigo-950 hover:bg-indigo-50"
                                    : "bg-indigo-950 text-white hover:bg-indigo-900 btn-shimmer"
                                    }`}
                            >
                                {tier.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* FAQ Teaser */}
                <div className="text-center mt-16">
                    <p className="text-slate-500">
                        Sorularınız mı var?{" "}
                        <Link
                            href="/contact"
                            className="text-indigo-600 font-semibold hover:underline"
                        >
                            Bize ulaşın
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
