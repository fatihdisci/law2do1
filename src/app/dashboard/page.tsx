"use client";

import { useState } from "react";
import { Plus, Calendar, ChevronDown, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import Toast from "@/components/Toast";

interface GeneratedTask {
    title: string;
    dueDate: string;
    status: "pending" | "critical";
}

const caseTypes = [
    { value: "is", label: "İş Davası" },
    { value: "bosanma", label: "Boşanma" },
    { value: "icra", label: "İcra Takibi" },
    { value: "ceza", label: "Ceza Davası" },
];

export default function DashboardPage() {
    const [selectedCaseType, setSelectedCaseType] = useState("");
    const [notificationDate, setNotificationDate] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [generatedTasks, setGeneratedTasks] = useState<GeneratedTask[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const generateTasks = () => {
        if (!selectedCaseType || !notificationDate) return;

        const baseDate = new Date(notificationDate);

        // Generate tasks based on case type
        const tasks: GeneratedTask[] = [];

        if (selectedCaseType === "is") {
            tasks.push(
                { title: "Arabuluculuk başvurusu yap", dueDate: formatDate(addDays(baseDate, 3)), status: "critical" },
                { title: "Karşı taraf bilgilerini topla", dueDate: formatDate(addDays(baseDate, 5)), status: "pending" },
                { title: "Dava dilekçesi taslağı hazırla", dueDate: formatDate(addDays(baseDate, 10)), status: "pending" },
                { title: "Delil listesi oluştur", dueDate: formatDate(addDays(baseDate, 12)), status: "pending" },
                { title: "Mahkemeye başvur", dueDate: formatDate(addDays(baseDate, 15)), status: "pending" },
            );
        } else if (selectedCaseType === "bosanma") {
            tasks.push(
                { title: "Müvekkil görüşmesi", dueDate: formatDate(addDays(baseDate, 2)), status: "critical" },
                { title: "Mal varlığı tespiti", dueDate: formatDate(addDays(baseDate, 7)), status: "pending" },
                { title: "Nafaka hesaplaması", dueDate: formatDate(addDays(baseDate, 10)), status: "pending" },
                { title: "Dava dilekçesi hazırla", dueDate: formatDate(addDays(baseDate, 14)), status: "pending" },
            );
        } else {
            tasks.push(
                { title: "Dosya incelemesi", dueDate: formatDate(addDays(baseDate, 3)), status: "critical" },
                { title: "İlgili belgeleri topla", dueDate: formatDate(addDays(baseDate, 7)), status: "pending" },
                { title: "Strateji belgesi hazırla", dueDate: formatDate(addDays(baseDate, 10)), status: "pending" },
            );
        }

        setGeneratedTasks(tasks);
        setShowToast(true);
    };

    const addDays = (date: Date, days: number) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString("tr-TR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-indigo-950">Dosyalar</h1>
                <p className="text-slate-500 mt-1">Dava dosyalarınızı yönetin</p>
            </div>

            {/* Create New Case Form */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 mb-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-indigo-950">Yeni Dava Oluştur</h2>
                        <p className="text-sm text-slate-500">Akıllı görevler otomatik oluşturulacak</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    {/* Case Type Dropdown */}
                    <div className="relative">
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Dava Türü
                        </label>
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-left hover:border-indigo-300 transition-colors"
                        >
                            <span className={selectedCaseType ? "text-slate-900" : "text-slate-400"}>
                                {selectedCaseType
                                    ? caseTypes.find((c) => c.value === selectedCaseType)?.label
                                    : "Seçiniz..."}
                            </span>
                            <ChevronDown className="w-5 h-5 text-slate-400" />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-lg z-10 overflow-hidden">
                                {caseTypes.map((type) => (
                                    <button
                                        key={type.value}
                                        onClick={() => {
                                            setSelectedCaseType(type.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full px-4 py-3 text-left hover:bg-indigo-50 transition-colors text-slate-700"
                                    >
                                        {type.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Notification Date */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Tebligat Tarihi
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                value={notificationDate}
                                onChange={(e) => setNotificationDate(e.target.value)}
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none"
                            />
                            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-end">
                        <button
                            onClick={generateTasks}
                            disabled={!selectedCaseType || !notificationDate}
                            className="w-full btn-shimmer px-6 py-3 bg-indigo-950 text-white font-semibold rounded-xl hover:bg-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Süreci Başlat
                        </button>
                    </div>
                </div>
            </div>

            {/* Generated Tasks */}
            {generatedTasks.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-[fade-in-up_0.5s_ease-out]">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-indigo-950">
                            Oluşturulan Görevler
                        </h2>
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                            {generatedTasks.length} görev
                        </span>
                    </div>

                    <div className="space-y-3">
                        {generatedTasks.map((task, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-4 rounded-xl transition-all ${task.status === "critical"
                                    ? "bg-red-50 border border-red-100"
                                    : "bg-slate-50"
                                    }`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-4">
                                    {task.status === "critical" ? (
                                        <AlertTriangle className="w-5 h-5 text-red-500" />
                                    ) : (
                                        <Clock className="w-5 h-5 text-slate-400" />
                                    )}
                                    <span
                                        className={`font-medium ${task.status === "critical" ? "text-red-700" : "text-slate-700"
                                            }`}
                                    >
                                        {task.title}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-slate-500">{task.dueDate}</span>
                                    {task.status === "critical" && (
                                        <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                                            Öncelikli
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Toast */}
            <Toast
                message="Dosya akışı oluşturuldu."
                isVisible={showToast}
                onClose={() => setShowToast(false)}
            />
        </div>
    );
}
