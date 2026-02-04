"use client";

import { useState, useRef, useCallback } from "react";
import { CheckCircle2, XCircle, GripVertical, Clock, AlertCircle, FileText, Calendar } from "lucide-react";

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

    // Excel mock data based on user image
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

    // Law2Do smart tasks mock data
    const smartTasks = [
        {
            title: "Harç Tamamlama",
            file: "2024/101 E. - Demir v. Arslan",
            due: "Bugün",
            status: "critical",
            type: "finance"
        },
        {
            title: "Duruşma Hazırlığı",
            file: "2024/104 E. - Yıldız v. Çelik",
            due: "Yarın 09:30",
            status: "warning",
            type: "calendar"
        },
        {
            title: "Bilirkişi Raporuna Beyan",
            file: "2024/105 E. - Demir v. Yıldız",
            due: "Son 3 Gün",
            status: "normal",
            type: "document"
        },
        {
            title: "İşe İade Dilekçesi",
            file: "2024/106 E. - Demir v. Yılmaz",
            due: "5 Gün Kaldı",
            status: "normal",
            type: "document"
        }
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-border"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* LEFT SIDE: Excel View */}
            <div className="absolute inset-0 bg-white text-[11px] md:text-xs font-sans text-slate-700">
                {/* Excel Toolbar Mock */}
                <div className="bg-[#107c41] text-white px-4 py-2 flex items-center gap-4 text-xs">
                    <span className="font-bold">Excel</span>
                    <span className="opacity-80">Giriş</span>
                    <span className="opacity-80">Ekle</span>
                    <span className="opacity-80">Düzen</span>
                    <span className="opacity-80">Formüller</span>
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

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                    <div className="bg-white/90 backdrop-blur-md border border-red-200 shadow-xl rounded-full px-6 py-3 flex items-center gap-3">
                        <XCircle size={24} className="text-red-500" />
                        <span className="text-lg font-bold text-slate-800">
                            Manuel • Hataya Açık • Takibi Zor
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Law2Do Interface */}
            <div
                className="absolute inset-0 bg-slate-50 z-20"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                {/* Modern Header */}
                <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif font-bold">L</div>
                        <span className="font-bold text-slate-900">Görevlerim</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-slate-500">Bugün: 4 Kritik Görev</span>
                    </div>
                </div>

                {/* Task List */}
                <div className="p-6 space-y-4 bg-slate-50 h-full">
                    {smartTasks.map((task, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-between hover:shadow-md transition-shadow group cursor-pointer"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${task.type === 'finance' ? 'bg-amber-100 text-amber-600' :
                                        task.type === 'calendar' ? 'bg-indigo-100 text-indigo-600' :
                                            'bg-blue-100 text-blue-600'
                                    }`}>
                                    {task.type === 'finance' && <AlertCircle size={20} />}
                                    {task.type === 'calendar' && <Calendar size={20} />}
                                    {task.type === 'document' && <FileText size={20} />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{task.title}</h4>
                                    <p className="text-sm text-slate-500">{task.file}</p>
                                </div>
                            </div>

                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${task.status === 'critical' ? 'bg-red-100 text-red-700 animate-pulse' :
                                    task.status === 'warning' ? 'bg-orange-100 text-orange-700' :
                                        'bg-emerald-100 text-emerald-700'
                                }`}>
                                <Clock size={12} />
                                {task.due}
                            </div>
                        </div>
                    ))}

                    {/* AI Suggestion Banner */}
                    <div className="bg-indigo-900 rounded-xl p-4 text-white flex items-center justify-between shadow-lg mt-4">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">✨</div>
                            <div className="text-sm">
                                <p className="font-bold">Yapay Zeka Önerisi</p>
                                <p className="opacity-80">2024/106 E. dosyası için emsal karar bulundu.</p>
                            </div>
                        </div>
                        <button className="bg-white text-indigo-900 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-indigo-50 transition-colors">
                            İncele
                        </button>
                    </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                    <div className="bg-white/90 backdrop-blur-md border border-emerald-200 shadow-xl rounded-full px-6 py-3 flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-emerald-500" />
                        <span className="text-lg font-bold text-slate-800">
                            Otonom • Planlı • Güvenli
                        </span>
                    </div>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-xl cursor-ew-resize z-30"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-indigo-600 hover:scale-110 transition-transform">
                    <GripVertical size={24} className="text-indigo-600" />
                </div>
            </div>
        </div>
    );
}
