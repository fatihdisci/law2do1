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

    // Calculate dynamic blur and opacity
    // If slider > 50 (Opening Excel/Left): Left blur decreases, Right blur stays max
    // If slider < 50 (Opening Law2Do/Right): Right blur decreases, Left blur stays max
    const leftBlur = sliderPosition >= 50 ? ((100 - sliderPosition) / 50) * 8 : 8; // Max blur 8px
    const rightBlur = sliderPosition <= 50 ? (sliderPosition / 50) * 8 : 8;

    // Labels fade out as content becomes clear
    // At 50%: Opacity 1. At 100% (Left clear): Left Label Opacity 0.
    const leftLabelOpacity = Math.max(0, Math.min(1, (100 - sliderPosition) / 40 - 0.2));
    const rightLabelOpacity = Math.max(0, Math.min(1, sliderPosition / 40 - 0.2));

    // Excel mock data
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
            type: "finance",
            tag: "Finans"
        },
        {
            title: "Duruşma Hazırlığı",
            file: "2024/104 E. - Yıldız v. Çelik",
            due: "Yarın 09:30",
            status: "warning",
            type: "calendar",
            tag: "Duruşma"
        },
        {
            title: "Bilirkişi Raporuna Beyan",
            file: "2024/105 E. - Demir v. Yıldız",
            due: "Son 3 Gün",
            status: "normal",
            type: "document",
            tag: "Dilekçe"
        },
        {
            title: "İşe İade Dilekçesi",
            file: "2024/106 E. - Demir v. Yılmaz",
            due: "5 Gün Kaldı",
            status: "normal",
            type: "document",
            tag: "Dilekçe"
        },
        {
            title: "Müvekkil Görüşmesi",
            file: "2024/108 E. - Kaya v. Demir",
            due: "Haftaya",
            status: "normal",
            type: "meeting",
            tag: "Toplantı"
        }
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
            {/* LEFT SIDE: Excel View */}
            <div className="absolute inset-0 bg-white text-[11px] md:text-xs font-sans text-slate-700">
                <div
                    className="h-full w-full transition-all duration-100 ease-out"
                    style={{ filter: `blur(${leftBlur}px)` }}
                >
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

                {/* Centered Overlay Label */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    style={{ opacity: leftLabelOpacity, transition: 'opacity 0.2s ease-out' }}
                >
                    <div className="bg-white/95 backdrop-blur-md border border-red-200 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center gap-3 text-center max-w-xs transform scale-110">
                        <div className="bg-red-100 p-3 rounded-full">
                            <XCircle size={32} className="text-red-500" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-800 mb-1">
                                Manuel Takip
                            </span>
                            <span className="text-sm font-medium text-slate-500">
                                Hataya Açık • Karmaşık • Riskli
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE: Law2Do Interface */}
            <div
                className="absolute inset-0 bg-slate-50 z-20"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                <div
                    className="h-full w-full transition-all duration-100 ease-out"
                    style={{ filter: `blur(${rightBlur}px)` }}
                >
                    {/* Modern Header - Enhanced */}
                    <div className="bg-white border-b border-slate-200 px-6 py-4">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-serif font-bold shadow-sm">L</div>
                                <span className="font-bold text-lg text-slate-900">Görevlerim</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                                    <input type="text" placeholder="Ara..." className="pl-9 pr-3 py-1.5 bg-slate-100 rounded-md text-sm border-none focus:ring-1 focus:ring-indigo-500 w-48 hidden md:block" />
                                </div>
                                <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-2">
                                    <AlertCircle size={14} />
                                    <span>4 Kritik</span>
                                </div>
                            </div>
                        </div>

                        {/* Filter Bar */}
                        <div className="flex items-center gap-2 text-sm overflow-x-auto pb-1 scrollbar-hide">
                            <span className="px-3 py-1 rounded-full bg-slate-900 text-white font-medium cursor-pointer whitespace-nowrap">Tümü</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 cursor-pointer whitespace-nowrap">Duruşmalar</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 cursor-pointer whitespace-nowrap">Süreli İşler</span>
                            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-medium hover:bg-slate-200 cursor-pointer whitespace-nowrap">Bekleyenler</span>
                            <button className="ml-auto p-1.5 text-slate-400 hover:text-slate-600">
                                <Filter size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Task List - Enhanced Density */}
                    <div className="p-4 md:p-6 space-y-3 bg-slate-50 h-full overflow-y-auto pb-20">
                        {smartTasks.map((task, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-between hover:shadow-md hover:border-indigo-100 transition-all group cursor-pointer relative overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-indigo-500 transition-colors"></div>

                                <div className="flex items-center gap-4">
                                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${task.type === 'finance' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                            task.type === 'calendar' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' :
                                                task.type === 'meeting' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                                                    'bg-blue-50 text-blue-600 border border-blue-100'
                                        }`}>
                                        {task.type === 'finance' && <AlertCircle size={20} />}
                                        {task.type === 'calendar' && <Calendar size={20} />}
                                        {task.type === 'document' && <FileText size={20} />}
                                        {task.type === 'meeting' && <Clock size={20} />}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <h4 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-indigo-600 transition-colors truncate">{task.title}</h4>
                                            <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 hidden md:inline-block">
                                                {task.tag}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 truncate">{task.file}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 pl-4">
                                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap shadow-sm border ${task.status === 'critical' ? 'bg-red-50 text-red-700 border-red-100' :
                                            task.status === 'warning' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                                                'bg-emerald-50 text-emerald-700 border-emerald-100'
                                        }`}>
                                        <Clock size={12} className={task.status === 'critical' ? 'animate-pulse' : ''} />
                                        {task.due}
                                    </div>
                                    <div className="text-slate-300 group-hover:text-indigo-600 transition-colors">
                                        <MoreVertical size={16} />
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add a placeholder task to show it continues */}
                        <div className="opacity-40 bg-white rounded-xl p-4 border border-slate-100 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-lg bg-slate-100"></div>
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-32 bg-slate-100 rounded"></div>
                                <div className="h-3 w-48 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Centered Overlay Label */}
                <div
                    className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
                    style={{ opacity: rightLabelOpacity, transition: 'opacity 0.2s ease-out' }}
                >
                    <div className="bg-white/95 backdrop-blur-md border border-emerald-200 shadow-2xl rounded-2xl px-8 py-6 flex flex-col items-center gap-3 text-center max-w-xs transform scale-110">
                        <div className="bg-emerald-100 p-3 rounded-full">
                            <CheckCircle2 size={32} className="text-emerald-500" />
                        </div>
                        <div>
                            <span className="block text-xl font-black text-slate-800 mb-1">
                                Otonom Sistem
                            </span>
                            <span className="text-sm font-medium text-slate-500">
                                Planlı • Güvenli • Kontrollü
                            </span>
                        </div>
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
