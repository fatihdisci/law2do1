"use client";

import { buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
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
  const pillRef = useRef<HTMLDivElement>(null);

  const handleToggle = (monthly: boolean) => {
    setIsMonthly(monthly);
    if (!monthly && pillRef.current) {
      const rect = pillRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 60,
        spread: 70,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: ["#6366f1", "#10b981", "#8b5cf6", "#34d399"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto max-w-2xl whitespace-pre-line text-lg text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {/* Pill Switcher */}
      <div className="mb-14 flex justify-center" ref={pillRef}>
        <div className="relative inline-flex items-stretch rounded-full bg-muted p-1">
          <button
            onClick={() => handleToggle(true)}
            className={cn(
              "relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
              isMonthly ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isMonthly && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-0 -z-10 rounded-full bg-card shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Aylık
          </button>
          <button
            onClick={() => handleToggle(false)}
            className={cn(
              "relative z-10 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300",
              !isMonthly ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {!isMonthly && (
              <motion.div
                layoutId="pricing-pill"
                className="absolute inset-0 -z-10 rounded-full bg-card shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            Yıllık
            <span
              className={cn(
                "relative z-10 rounded-full px-2 py-0.5 text-xs font-bold transition-all duration-300",
                !isMonthly
                  ? "bg-primary/20 text-primary"
                  : "bg-primary/10 text-primary/60"
              )}
            >
              %20 İndirim
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
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
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.1 + index * 0.1,
              opacity: { duration: 0.4 },
            }}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-3xl border p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:mt-0",
              plan.isPopular
                ? "z-10 border-primary bg-card shadow-primary/20"
                : "z-0 mt-5 border-border bg-card/60 shadow-lg"
            )}
          >
            {/* Popular Badge */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/30">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span>EN POPÜLER</span>
                </div>
              </div>
            )}

            <div className="flex w-full flex-1 flex-col">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                {plan.name}
              </p>

              <div className="mt-6 flex flex-col items-center justify-center">
                <div className="flex items-start justify-center gap-x-1.5">
                  <span className="text-5xl font-black tracking-tight text-foreground">
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
                  </span>
                  <span className="mt-1 text-2xl font-bold text-muted-foreground">₺</span>
                </div>
                {plan.price !== "0" && (
                  <span className="mt-2 text-sm font-medium text-muted-foreground">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                {isMonthly ? "aylık faturalandırılır" : "yıllık faturalandırılır"}
              </p>

              <ul className="mt-8 space-y-4 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-8 w-full border-border" />

              <div className="mt-auto">
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group relative w-full overflow-hidden py-6 text-base font-bold tracking-tight transition-all duration-300",
                    plan.isPopular
                      ? "border-transparent bg-primary text-primary-foreground hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
                      : "border-border bg-transparent text-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {plan.buttonText}
                </Link>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
