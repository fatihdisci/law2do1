"use client";

import { TurkeyMap } from '@/components/TurkeyMap';

export function MapSection() {
  return (
    <section className="py-24 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6">
            Türkiye&apos;nin Her Yerinde <br />
            <span className="text-indigo-600">Law2Do Kullanılıyor.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Avukatlar ve hukuk ekipleri, Türkiye genelinde Law2Do ile görevlerini yönetiyor.
          </p>
        </div>
        <TurkeyMap />
      </div>
    </section>
  );
}
