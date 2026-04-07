"use client";

import { useState } from 'react';
import { HelpCircle, Search, ChevronDown, Mail, ArrowRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const faqCategories = ["Tümü", "Ödeme", "Güvenlik", "Kullanım", "Entegrasyon"];

const faqItems = [
  {
    id: 1,
    category: "Kullanım",
    question: "Law2Do nedir ve ne işe yarar?",
    answer: "Law2Do, avukatlar ve hukuk büroları için geliştirilmiş bir iş akışı yönetim sistemidir. Dava süreçlerini otomatik iş akışlarına dönüştürerek süre kaçırma riskini sıfıra indirir, görevleri takip eder ve ekip koordinasyonunu kolaylaştırır."
  },
  {
    id: 2,
    category: "Kullanım",
    question: "Hangi dava türlerini destekliyorsunuz?",
    answer: "İş davaları, boşanma davaları, icra takipleri, ceza davaları, sigorta tahkim komisyonu başvuruları, idari davalar ve daha birçok dava türü için hazır iş akışı şablonları sunuyoruz. Ayrıca kendi özel iş akışlarınızı da oluşturabilirsiniz."
  },
  {
    id: 3,
    category: "Güvenlik",
    question: "Verilerim güvende mi?",
    answer: "Evet. Tüm verileriniz 256-bit SSL şifreleme ile korunmaktadır. Sunucularımız Türkiye'de konumlandırılmış olup, KVKK (Kişisel Verilerin Korunması Kanunu) gerekliliklerine tam uyumludur. Düzenli yedekleme ve felaket kurtarma planlarımız mevcuttur."
  },
  {
    id: 4,
    category: "Güvenlik",
    question: "KVKK'ya uyumlu musunuz?",
    answer: "Evet, Law2Do tamamen KVKK uyumludur. Kişisel veriler Türkiye sınırları içindeki sunucularda saklanır. Veri işleme süreçlerimiz, veri sorumlusu yükümlülüklerine uygun şekilde tasarlanmıştır. Detaylı bilgi için Gizlilik Politikamızı inceleyebilirsiniz."
  },
  {
    id: 5,
    category: "Ödeme",
    question: "Ücretsiz deneme süresi var mı?",
    answer: "Evet! 14 gün boyunca tüm özelliklere sınırsız erişim sağlayan ücretsiz deneme sunuyoruz. Kredi kartı bilgisi gerekmez. Deneme süresi sonunda dilediğiniz paketi seçebilir veya hesabınızı kapatabilirsiniz."
  },
  {
    id: 6,
    category: "Kullanım",
    question: "Mobil cihazlardan erişebilir miyim?",
    answer: "Evet, Law2Do tamamen responsive bir web uygulamasıdır. Telefon, tablet veya bilgisayarınızdan herhangi bir modern tarayıcı üzerinden erişebilirsiniz. Ayrıca yakında iOS ve Android uygulamalarımız da kullanıma sunulacaktır."
  },
  {
    id: 7,
    category: "Kullanım",
    question: "Ekibimle birlikte kullanabilir miyiz?",
    answer: "Evet! Ofis ve Kurumsal paketlerimiz ekip yönetimi özelliklerini içerir. Ekip üyelerine görev atayabilir, dosya erişim yetkilerini yönetebilir ve ekip performansını takip edebilirsiniz. Bireysel pakette tek kullanıcı desteği bulunmaktadır."
  },
  {
    id: 8,
    category: "Ödeme",
    question: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
    answer: "Evet, aboneliğinizi istediğiniz zaman tek tıkla iptal edebilirsiniz. İptal işlemi sonrası mevcut dönem sonuna kadar sistemi kullanmaya devam edebilirsiniz. Verilerinizi dışa aktarma imkanı da sunulmaktadır."
  },
  {
    id: 9,
    category: "Entegrasyon",
    question: "UYAP entegrasyonu var mı?",
    answer: "UYAP entegrasyonu Kurumsal paketimizde sunulmaktadır. Bu entegrasyon sayesinde dava bilgileri otomatik olarak senkronize edilir ve manuel veri girişi ihtiyacı ortadan kalkar. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
  },
  {
    id: 10,
    category: "Kullanım",
    question: "Mevcut verilerimi sisteme aktarabilir miyim?",
    answer: "Evet, Excel ve CSV formatındaki mevcut dosya ve dava verilerinizi Law2Do'ya kolayca aktarabilirsiniz. Kurumsal paketlerde özel veri aktarım desteği de sağlanmaktadır."
  },
];

export default function SSSPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === "Tümü" || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl text-primary-foreground mb-6 shadow-lg shadow-primary/25">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Law2Do hakkında merak ettiğiniz her şeyi aşağıda bulabilirsiniz.
          </p>
        </div>

        {/* Search & Filters Layout */}
        <div className="bg-card/70 backdrop-blur-xl border border-border/50 rounded-3xl p-6 sm:p-8 shadow-xl mb-12">
            <div className="flex flex-col gap-6">
                {/* Search Input */}
                <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Merak ettiğiniz bir konuyu arayın (örn: KVKK, Fiyat)" 
                        className="w-full bg-background border border-border focus:border-primary py-4 pl-12 pr-10 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 transition-all text-foreground shadow-sm"
                    />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                            <X size={18} />
                        </button>
                    )}
                </div>

                {/* Category Pills */}
                <div>
                    <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Kategoriler</h3>
                    <div className="flex flex-wrap gap-2">
                        {faqCategories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-semibold transition-all border shadow-sm",
                                    selectedCategory === cat 
                                        ? "bg-primary border-primary text-primary-foreground shadow-primary/25" 
                                        : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
            {filteredItems.length === 0 ? (
                <div className="text-center py-12 bg-card/50 rounded-3xl border border-border/50">
                    <p className="text-muted-foreground text-lg">Aramanızla eşleşen sonuç bulunamadı.</p>
                </div>
            ) : (
                filteredItems.map((item) => {
                    const isOpen = openItems.includes(item.id);
                    return (
                        <div 
                            key={item.id} 
                            className={cn(
                                "group bg-card/80 backdrop-blur-sm border rounded-2xl transition-all duration-300 overflow-hidden",
                                isOpen 
                                    ? "border-primary/50 shadow-md shadow-primary/10" 
                                    : "border-border/50 hover:border-primary/30 hover:shadow-sm"
                            )}
                        >
                            <button 
                                onClick={() => toggleItem(item.id)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "hidden sm:flex text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded border",
                                        isOpen
                                            ? "bg-primary/10 text-primary border-primary/20"
                                            : "bg-muted text-muted-foreground border-border"
                                    )}>
                                        {item.category}
                                    </div>
                                    <span className={cn(
                                        "text-base sm:text-lg font-bold transition-colors",
                                        isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                                    )}>
                                        {item.question}
                                    </span>
                                </div>
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                                    isOpen 
                                        ? "bg-primary text-primary-foreground rotate-180" 
                                        : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                                )}>
                                    <ChevronDown size={18} />
                                </div>
                            </button>
                            <div 
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border/50">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-3xl p-10 sm:p-12 shadow-xl border border-border relative overflow-hidden">
            {/* CTA Decorative BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl text-primary mb-6">
                    <Mail size={32} />
                </div>
                <h3 className="text-3xl font-black text-foreground mb-3 tracking-tight">Cevabı bulamadın mı?</h3>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
                    Destek ekibimiz tüm sorularınızı yanıtlamak ve size yardımcı olmak için hazır.
                </p>
                <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/25 group"
                >
                    Bize Yazın
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
