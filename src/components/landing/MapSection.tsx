"use client";

import { useEffect, useState } from "react";
import { Gavel, Scale, Users } from "lucide-react";
import { TurkeyMap } from "@/components/TurkeyMap";

const TARGET_USERS = 12480;

const STATS = [
  { label: "Toplam Avukat", value: "12.4K+", icon: Users },
  { label: "Toplam Dava", value: "86K+", icon: Scale },
  { label: "Kapsanan İl", value: "81/81", icon: Gavel },
];

export function MapSection() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setUserCount(TARGET_USERS);
    }, 180);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative z-10 overflow-hidden px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_50%_0%,hsl(var(--color-primary)/0.16),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(var(--color-border))_1px,transparent_1px)] [background-size:30px_30px] opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-black text-foreground md:text-5xl">
            Türkiye&apos;nin Her Yerinde <br />
            <span className="gradient-text">Law2Do Kullanılıyor.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Avukatlar ve hukuk ekipleri, Türkiye genelinde Law2Do ile görevlerini
            daha hızlı ve hatasız yönetiyor.
          </p>
        </div>

        <TurkeyMap />

        <div className="mt-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Türkiye genelinde aktif kullanıcı
          </p>
          <p className="mt-2 text-4xl font-black text-foreground md:text-5xl">
            +
            <span className="gradient-text tabular-nums transition-all duration-1000">
              {userCount.toLocaleString("tr-TR")}
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/80 bg-card/80 p-4 text-center backdrop-blur-sm"
              >
                <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon size={18} />
                </div>
                <p className="text-xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
