"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
    name: string;
    price: string;
    yearlyPrice: string;
    period: string;
    features: string[];
    description: string;
    buttonText: string;
    href: string;
    isPopular: boolean;
}

interface PricingProps {
    plans: PricingPlan[];
    title?: string;
    description?: string;
}

export function Pricing({
    plans,
    title = "Şeffaf ve Basit Fiyatlandırma",
    description = "Size uygun paketi seçin.\nTüm paketler platformumuza tam erişim ve öncelikli destek içerir.",
}: PricingProps) {
    const [isMonthly, setIsMonthly] = useState(true);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const switchRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (checked: boolean) => {
        setIsMonthly(!checked);
        if (checked && switchRef.current) {
            const rect = switchRef.current.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            confetti({
                particleCount: 50,
                spread: 60,
                origin: {
                    x: x / window.innerWidth,
                    y: y / window.innerHeight,
                },
                colors: ["#4f46e5", "#10b981", "#6366f1", "#34d399"],
                ticks: 200,
                gravity: 1.2,
                decay: 0.94,
                startVelocity: 30,
                shapes: ["circle"],
            });
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900">
                    {title}
                </h2>
                <p className="text-slate-500 text-lg whitespace-pre-line max-w-2xl mx-auto">
                    {description}
                </p>
            </div>

            <div className="flex justify-center mb-12">
                <div className="flex items-center gap-3 relative">
                    <span className={cn("font-medium", isMonthly ? "text-slate-900" : "text-slate-400")}>
                        Aylık
                    </span>
                    <Label className="cursor-pointer">
                        <Switch
                            ref={switchRef as React.RefObject<HTMLButtonElement>}
                            checked={!isMonthly}
                            onCheckedChange={handleToggle}
                            className="relative"
                        />
                    </Label>
                    <span className={cn("font-medium", !isMonthly ? "text-slate-900" : "text-slate-400")}>
                        Yıllık
                    </span>

                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 whitespace-nowrap">
                        {!isMonthly && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-bold rounded-full animate-[fade-in-up_0.3s_ease-out]">
                                %20 İndirim
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={
                            isDesktop
                                ? {
                                    y: plan.isPopular ? -20 : 0,
                                    opacity: 1,
                                    x: index === 2 ? -20 : index === 0 ? 20 : 0,
                                    scale: index === 0 || index === 2 ? 0.95 : 1.0,
                                }
                                : { y: 0, opacity: 1 }
                        }
                        viewport={{ once: true }}
                        transition={{
                            duration: 1.2,
                            type: "spring",
                            stiffness: 100,
                            damping: 30,
                            delay: 0.2 + index * 0.1,
                            opacity: { duration: 0.5 },
                        }}
                        className={cn(
                            `rounded-2xl border p-8 bg-white text-center lg:flex lg:flex-col lg:justify-center relative shadow-lg`,
                            plan.isPopular
                                ? "border-indigo-600 border-2 shadow-xl shadow-indigo-900/20"
                                : "border-slate-200",
                            "flex flex-col",
                            !plan.isPopular && "mt-5 md:mt-0",
                            index === 0 || index === 2 ? "z-0" : "z-10"
                        )}
                    >
                        {/* Popular Badge */}
                        {plan.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <div className="flex items-center gap-1 px-4 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-full shadow-lg">
                                    <Star className="h-3.5 w-3.5 fill-current" />
                                    <span>EN POPÜLER</span>
                                </div>
                            </div>
                        )}

                        <div className="flex-1 flex flex-col">
                            <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">
                                {plan.name}
                            </p>

                            <div className="mt-6 flex items-center justify-center gap-x-2">
                                <span className="text-5xl font-black tracking-tight text-slate-900">
                                    <NumberFlow
                                        value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                                        format={{
                                            style: "decimal",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                        }}
                                        transformTiming={{
                                            duration: 500,
                                            easing: "ease-out",
                                        }}
                                        willChange
                                        className="font-variant-numeric: tabular-nums"
                                    />
                                    <span className="text-2xl font-bold text-slate-400 ml-1">₺</span>
                                </span>
                                {plan.price !== "0" && (
                                    <span className="text-sm font-medium text-slate-400">
                                        / {plan.period}
                                    </span>
                                )}
                            </div>

                            <p className="text-xs text-slate-400 mt-2">
                                {isMonthly ? "aylık faturalandırma" : "yıllık faturalandırma"}
                            </p>

                            <ul className="mt-8 space-y-3 text-left">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="w-full my-6 border-slate-100" />

                            <Link
                                href={plan.href}
                                className={cn(
                                    buttonVariants({ variant: "outline" }),
                                    "group relative w-full gap-2 overflow-hidden text-base font-bold tracking-tight py-6",
                                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-indigo-600 hover:ring-offset-1",
                                    plan.isPopular
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700 border-indigo-600"
                                        : "bg-white text-slate-900 hover:bg-indigo-50 border-slate-200"
                                )}
                            >
                                {plan.buttonText}
                            </Link>

                            <p className="mt-6 text-sm text-slate-400">
                                {plan.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
