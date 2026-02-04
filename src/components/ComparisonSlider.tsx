"use client";

import { useState, useRef, useCallback } from "react";
import { CheckCircle2, XCircle, Clock, GripVertical } from "lucide-react";

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

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
        >
            {/* LEFT SIDE: Excel Chaos (Full Width Background) */}
            <div className="absolute inset-0 bg-white">
                {/* Excel Grid Background */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
                        backgroundSize: "60px 28px",
                    }}
                />

                {/* Excel Header Row */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 border-b border-slate-300 flex">
                    <div className="w-10 h-full bg-slate-200 border-r border-slate-300"></div>
                    {["A", "B", "C", "D", "E", "F", "G", "H"].map((col) => (
                        <div
                            key={col}
                            className="w-[60px] h-full flex items-center justify-center text-xs font-medium text-slate-500 border-r border-slate-300"
                        >
                            {col}
                        </div>
                    ))}
                </div>

                {/* Excel Row Numbers */}
                <div className="absolute top-8 left-0 w-10 bottom-0 bg-slate-100 border-r border-slate-300">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((row) => (
                        <div
                            key={row}
                            className="h-7 flex items-center justify-center text-xs font-medium text-slate-500 border-b border-slate-300"
                        >
                            {row}
                        </div>
                    ))}
                </div>

                {/* Chaotic Data */}
                <div className="absolute top-8 left-10 right-0 bottom-0 p-2">
                    {/* Scattered Post-it Notes */}
                    <div className="absolute top-4 left-8 bg-yellow-200 px-3 py-2 rounded shadow-md rotate-[-3deg] text-xs font-medium text-yellow-900 border-b-2 border-yellow-300 z-10">
                        Revize?
                    </div>
                    <div className="absolute top-16 right-16 bg-pink-200 px-3 py-2 rounded shadow-md rotate-[2deg] text-xs font-medium text-pink-900 border-b-2 border-pink-300 z-10">
                        Hangi Dosya?
                    </div>
                    <div className="absolute top-36 left-20 bg-orange-200 px-3 py-2 rounded shadow-md rotate-[-1deg] text-xs font-medium text-orange-900 border-b-2 border-orange-300 z-10">
                        Vekalet nerede?
                    </div>
                    <div className="absolute bottom-32 right-24 bg-blue-200 px-3 py-2 rounded shadow-md rotate-[3deg] text-xs font-medium text-blue-900 border-b-2 border-blue-300 z-10">
                        Süre ne zaman?
                    </div>
                    <div className="absolute bottom-16 left-32 bg-green-200 px-3 py-2 rounded shadow-md rotate-[-2deg] text-xs font-medium text-green-900 border-b-2 border-green-300 z-10">
                        Kim takip edecek?
                    </div>
                    <div className="absolute top-28 right-8 bg-purple-200 px-3 py-2 rounded shadow-md rotate-[1deg] text-xs font-medium text-purple-900 border-b-2 border-purple-300 z-10">
                        Tebligat?
                    </div>
                    <div className="absolute bottom-40 left-4 bg-red-200 px-3 py-2 rounded shadow-md rotate-[4deg] text-xs font-medium text-red-900 border-b-2 border-red-300 z-10">
                        ACİL!
                    </div>

                    {/* Some Excel-like data cells */}
                    <div className="absolute top-2 left-[120px] text-[10px] text-slate-600 font-mono">2024/1234</div>
                    <div className="absolute top-9 left-[180px] text-[10px] text-slate-600 font-mono">Beklemede</div>
                    <div className="absolute top-16 left-[60px] text-[10px] text-slate-600 font-mono bg-yellow-100 px-1">SÜRE?</div>
                    <div className="absolute top-24 left-[240px] text-[10px] text-red-600 font-mono font-bold">GECİKMİŞ</div>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-sm border-t border-slate-200 flex items-center justify-center gap-3">
                    <XCircle size={24} className="text-red-500" />
                    <span className="text-lg md:text-xl font-black text-slate-700">
                        Dağınık • Karmaşık • Kaybolan İşler
                    </span>
                </div>
            </div>

            {/* RIGHT SIDE: Law2Do Clean Interface (Clipped) */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-indigo-900"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
                {/* Subtle glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20"></div>

                {/* Clean Interface Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    {/* Task Card */}
                    <div className="w-full max-w-sm bg-white rounded-xl p-5 shadow-2xl mb-4">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                                SIRADAKİ GÖREV
                            </span>
                        </div>
                        <h4 className="text-lg font-bold text-slate-900 mb-1">
                            Cevap Dilekçesi Hazırla
                        </h4>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">Dosya: 2024/1234</span>
                            <span className="text-sm font-bold text-red-600 flex items-center gap-1">
                                <Clock size={14} />
                                Son 3 Gün
                            </span>
                        </div>
                    </div>

                    {/* Mini Stats */}
                    <div className="flex gap-3 w-full max-w-sm">
                        <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                            <div className="text-2xl font-black text-white">3</div>
                            <div className="text-xs text-indigo-200">Bugün</div>
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                            <div className="text-2xl font-black text-white">8</div>
                            <div className="text-xs text-indigo-200">Bu Hafta</div>
                        </div>
                        <div className="flex-1 bg-white/10 backdrop-blur rounded-lg p-3 text-center">
                            <div className="text-2xl font-black text-emerald-400">0</div>
                            <div className="text-xs text-indigo-200">Gecikmiş</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Label */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-indigo-950/90 backdrop-blur-sm border-t border-indigo-800 flex items-center justify-center gap-3">
                    <CheckCircle2 size={24} className="text-emerald-400" />
                    <span className="text-lg md:text-xl font-black text-white">
                        Net • Düzenli • Kontrol Altında
                    </span>
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-20"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
            >
                {/* Handle Knob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-indigo-600">
                    <GripVertical size={20} className="text-indigo-600" />
                </div>

                {/* Edge glow */}
                <div className="absolute inset-y-0 -left-2 -right-2 bg-white/20 blur-sm"></div>
            </div>

            {/* Instruction Text */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-medium z-30">
                ← Sürükleyerek karşılaştırın →
            </div>
        </div>
    );
}
