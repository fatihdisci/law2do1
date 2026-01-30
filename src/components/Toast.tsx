"use client";

import { useEffect, useState } from "react";
import { CheckCircle, X } from "lucide-react";

interface ToastProps {
    message: string;
    isVisible: boolean;
    onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 300);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible && !show) return null;

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
        >
            <div className="flex items-center gap-3 px-5 py-4 bg-white rounded-xl shadow-2xl border border-slate-100">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-slate-700">{message}</p>
                <button
                    onClick={() => {
                        setShow(false);
                        setTimeout(onClose, 300);
                    }}
                    className="ml-2 p-1 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X className="w-4 h-4 text-slate-400" />
                </button>
            </div>
        </div>
    );
}
