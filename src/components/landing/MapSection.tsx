"use client";

import dynamic from "next/dynamic";

const TurkeyMap = dynamic(
  () => import("@/components/TurkeyMap").then((mod) => mod.TurkeyMap),
  {
    loading: () => (
      <div className="mx-auto aspect-[16/9] max-w-4xl animate-pulse rounded-2xl bg-muted/50" />
    ),
    ssr: false,
  }
);

export function MapSection() {
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
      </div>
    </section>
  );
}
