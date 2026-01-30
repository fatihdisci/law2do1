"use client";

import { CheckCircle, Clock, AlertTriangle, Bell } from "lucide-react";

interface Task {
    title: string;
    status: "completed" | "critical" | "waiting";
}

const tasks: Task[] = [
    { title: "Arabuluculuk Son Tutanağı Yükle", status: "completed" },
    { title: "Dava Dilekçesini Hazırla", status: "critical" },
    { title: "Tebligat Takibi", status: "waiting" },
];

export default function DashboardCard() {
    const getStatusIcon = (status: Task["status"]) => {
        switch (status) {
            case "completed":
                return <CheckCircle className="w-5 h-5 text-emerald-600" />;
            case "critical":
                return <AlertTriangle className="w-5 h-5 text-red-500" />;
            case "waiting":
                return <Clock className="w-5 h-5 text-slate-400" />;
        }
    };

    const getStatusBadge = (status: Task["status"]) => {
        switch (status) {
            case "completed":
                return (
                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                        Tamamlandı
                    </span>
                );
            case "critical":
                return (
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-medium rounded-full animate-pulse">
                        KRİTİK
                    </span>
                );
            case "waiting":
                return (
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-medium rounded-full">
                        Bekliyor
                    </span>
                );
        }
    };

    return (
        <div className="perspective-container relative">
            {/* Floating Notification */}
            <div className="absolute -top-4 -right-4 z-20 animate-[float_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-slate-100">
                    <Bell className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-slate-700">
                        Yeni süre hesaplandı 🔔
                    </span>
                </div>
            </div>

            {/* Main Card */}
            <div className="card-3d bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 w-full max-w-md">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-indigo-950">
                            Ahmet Yılmaz v. Lojistik A.Ş.
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-full">
                                İş Mahkemesi
                            </span>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                Dosya No: 2024/142
                            </span>
                        </div>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
                        Süreç Aktif
                    </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 my-4" />

                {/* Task List */}
                <div className="space-y-3">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Görevler
                    </p>
                    {tasks.map((task, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-3 rounded-lg transition-all ${task.status === "waiting"
                                    ? "opacity-60 bg-slate-50"
                                    : task.status === "critical"
                                        ? "bg-red-50 border border-red-100"
                                        : "bg-slate-50"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                {getStatusIcon(task.status)}
                                <span
                                    className={`text-sm font-medium ${task.status === "completed"
                                            ? "text-slate-500 line-through"
                                            : task.status === "critical"
                                                ? "text-red-700"
                                                : "text-slate-600"
                                        }`}
                                >
                                    {task.title}
                                </span>
                            </div>
                            {getStatusBadge(task.status)}
                        </div>
                    ))}
                </div>

                {/* Progress */}
                <div className="mt-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-500">İlerleme</span>
                        <span className="font-semibold text-indigo-950">1/3</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}
