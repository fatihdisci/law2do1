"use client";

import { useState, useRef, useCallback } from "react";
import { CheckCircle2, XCircle, GripVertical, Clock, AlertCircle, FileText, Calendar, MoreVertical, Filter, Search } from "lucide-react";

export function ComparisonSlider() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = () => {
        isDragging.current = true;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging.current) {
            handleMove(e.clientX);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    // Excel mock data (Keeping this as requested)
    const excelData = [
        { no: "2024/101 E.", client: "Ayşe Demir", opponent: "Zeynep Arslan", type: "Tapu İptal ve Tescil", task: "Harç Yatır" },
        { no: "2024/102 E.", client: "Ayşe Demir", opponent: "Mustafa Öztürk", type: "Ortaklığın Giderilmesi", task: "Müvekkil ile Görüş" },
        { no: "2024/103 E.", client: "Ahmet Yıldız", opponent: "Mustafa Öztürk", type: "Ortaklığın Giderilmesi", task: "Müvekkil ile Görüş" },
        { no: "2024/104 E.", client: "Ahmet Yıldız", opponent: "Fatma Çelik", type: "Ceza Davası", task: "Duruşmaya Katıl" },
        { no: "2024/105 E.", client: "Ayşe Demir", opponent: "Ahmet Yıldız", type: "Kira Tespit", task: "Bilirkişi Raporunu İncele" },
        { no: "2024/106 E.", client: "Ayşe Demir", opponent: "Ali Yılmaz", type: "İş Davası (İşe İade)", task: "Dilekçe Yaz" },
        { no: "2024/107 E.", client: "Zeynep Arslan", opponent: "Fatma Çelik", type: "İş Davası (İşe İade)", task: "Bilirkişi Raporunu İncele" },
        { no: "2024/108 E.", client: "Mehmet Kaya", opponent: "Ayşe Demir", type: "Kira Tespit", task: "Müvekkil ile Görüş" },
        { no: "2024/109 E.", client: "Ayşe Demir", opponent: "Mehmet Kaya", type: "Anlaşmalı Boşanma", task: "Müvekkil ile Görüş" },
        { no: "2024/110 E.", client: "Elif Şahin", opponent: "Fatma Çelik", type: "Ceza Davası", task: "İstinaf Başvurusu" },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-border bg-white"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* LEFT SIDE: Excel View (Manual) */}
            <div className="absolute inset-0 bg-white text-[11px] md:text-xs font-sans text-slate-700">
                {/* Excel Toolbar Mock */}
                <div className="bg-[#107c41] text-white px-4 py-2 flex items-center gap-4 text-xs">
                    <span className="font-bold">Excel</span>
                    <span className="opacity-80">Giriş</span>
                    <span className="opacity-80">Ekle</span>
                    <span className="opacity-80">Düzen</span>
                    <span className="ml-auto opacity-80">Oturum Açın</span>
                </div>

                {/* Formula Bar */}
                <div className="bg-slate-50 border-b border-slate-300 px-2 py-1 flex items-center gap-2 text-slate-500">
                    <span className="font-serif italic font-bold">fx</span>
                    <div className="bg-white border border-slate-300 w-full h-5"></div>
                </div>

                {/* Grid Container */}
                <div className="w-full overflow-hidden relative">
                    {/* Header Row */}
                    <div className="flex border-b border-slate-300 bg-slate-50 font-bold text-slate-600">
                        <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-100"></div>
                        <div className="w-24 border-r border-slate-300 px-1 py-1">Dosya No</div>
                        <div className="w-28 border-r border-slate-300 px-1 py-1">Müvekkil</div>
                        <div className="w-28 border-r border-slate-300 px-1 py-1">Karşı Taraf</div>
                        <div className="w-32 border-r border-slate-300 px-1 py-1">Dava Türü</div>
                        <div className="flex-1 border-r border-slate-300 px-1 py-1">Sıradaki Görev</div>
                    </div>

                    {/* Data Rows */}
                    {excelData.map((row, index) => (
                        <div key={index} className="flex border-b border-slate-200 hover:bg-slate-50">
                            <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-50 font-semibold text-slate-500">
                                {index + 1}
                            </div>
                            <div className="w-24 border-r border-slate-200 px-1 py-1 truncate">{row.no}</div>
                            <div className="w-28 border-r border-slate-200 px-1 py-1 truncate">{row.client}</div>
                            <div className="w-28 border-r border-slate-200 px-1 py-1 truncate">{row.opponent}</div>
                            <div className="w-32 border-r border-slate-200 px-1 py-1 truncate">{row.type}</div>
                            <div className="flex-1 border-r border-slate-200 px-1 py-1 truncate">{row.task}</div>
                        </div>
                    ))}

                    {/* Empty Rows to Fill */}
                    {[...Array(10)].map((_, i) => (
                        <div key={`empty-${i}`} className="flex border-b border-slate-200">
                            <div className="w-8 border-r border-slate-300 flex items-center justify-center bg-slate-50 font-semibold text-slate-500">
                                {excelData.length + i + 1}
                            </div>
                            <div className="w-24 border-r border-slate-200 h-6"></div>
                            <div className="w-28 border-r border-slate-200 h-6"></div>
                            <div className="w-28 border-r border-slate-200 h-6"></div>
                            <div className="w-32 border-r border-slate-200 h-6"></div>
                            <div className="flex-1 border-r border-slate-200 h-6"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: Law2Do Interface (Clean/Simple) */}
            <div
                className="absolute inset-0 bg-slate-50 z-20 flex flex-col"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                {/* Simple Clean Header */}
                <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif font-bold shadow-sm">L</div>
                        <span className="font-bold text-lg text-slate-900">Law2Do</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                        <span className="text-indigo-600">Otomatik Takip</span>
                        <span>Akıllı Hatırlatıcı</span>
                    </div>
                </div>

                {/* Content: Clean Dashboard Concept */}
                <div className="p-8 flex-1 flex flex-col items-center justify-center text-center space-y-8 bg-slate-50/50">

                    {/* Center Visual */}
                    <div className="grid grid-cols-2 gap-4 max-w-md w-full">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900">Dosya Yönetimi</h3>
                            <p className="text-xs text-slate-500">Tüm dosyalarınız tek ekranda</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                                <Clock size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900">Akıllı Takvim</h3>
                            <p className="text-xs text-slate-500">Süreli işler kontrol altında</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                                <AlertCircle size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900">Risk Analizi</h3>
                            <p className="text-xs text-slate-500">Kritik hataları önleyin</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="font-bold text-slate-900">Görev Takibi</h3>
                            <p className="text-xs text-slate-500">Ekibinizi yönetin</p>
                        </div>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Kaostan Düzen'e Geçin</h2>
                        <p className="text-slate-600">Law2Do ile manuel takibin risklerini ortadan kaldırın, hukuk büronuzu dijitalleştirin.</p>
                    </div>

                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-30 group"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-indigo-600 group-hover:scale-110 transition-transform">
                    <GripVertical size={24} className="text-indigo-600" />
                </div>
            </div>
        </div>
    );
}
