"use client";

import { motion } from "framer-motion";
import {
  Shield,
  CheckCircle2,
  FileText,
  Scale,
  BellRing,
  Clock3,
  SearchCheck,
  Gavel,
  type LucideIcon,
} from "lucide-react";

type WorkflowItem = {
  step: string;
  title: string;
  icon: LucideIcon;
};

const WORKFLOW_ITEMS: WorkflowItem[] = [
  { step: "01", title: "Dava Dilekçesi Hazırla", icon: FileText },
  { step: "02", title: "Delil Listesi Oluştur", icon: Scale },
  { step: "03", title: "Cevap Süresi Takibi", icon: Clock3 },
  { step: "04", title: "Bilirkişi Raporu İncele", icon: SearchCheck },
  { step: "05", title: "Duruşma Hatırlatması", icon: BellRing },
  { step: "06", title: "Karar Tebliği Al", icon: Gavel },
];

function WorkflowPill({ item }: { item: WorkflowItem }) {
  const Icon = item.icon;

  return (
    <div className="group flex items-center gap-3 whitespace-nowrap rounded-xl border border-border/80 bg-card/85 px-4 py-2.5 text-sm text-foreground shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md">
      <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 px-1.5 text-[11px] font-bold tracking-wide text-primary">
        {item.step}
      </span>
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-secondary/60 text-secondary-foreground transition-colors duration-300 group-hover:bg-primary/15 group-hover:text-primary">
        <Icon size={15} />
      </span>
      <span className="font-medium">{item.title}</span>
    </div>
  );
}

export function MethodologySection() {
  return (
    <section
      id="how-it-works"
      className="relative z-10 overflow-hidden border-y border-border/80 bg-gradient-to-b from-card via-background to-background/80 py-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:radial-gradient(hsl(var(--color-border))_1px,transparent_1px)] [background-size:26px_26px] opacity-35"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/8 via-secondary/5 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h3 className="text-3xl font-black text-foreground md:text-4xl">
            Sahanın İçinden, Pratiğe Uygun.
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Sadece &quot;yapılması gerekenleri&quot; değil, &quot;nasıl yapılması
            gerektiğini&quot; de bilen bir sistem. Hukuk pratiğinin işleyişine aykırı
            hiçbir gereksiz detay barındırmaz.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2">
            <Shield size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">
              Mevzuata Uygun İş Akışları
            </span>
            <CheckCircle2 size={16} className="text-primary" />
          </div>
        </motion.div>

        <div className="mt-12 space-y-4">
          <div className="group/marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee gap-4 group-hover/marquee:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-4 py-1">
                  {WORKFLOW_ITEMS.map((item) => (
                    <WorkflowPill key={`${setIndex}-${item.step}`} item={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="group/marquee-reverse relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee-reverse gap-4 group-hover/marquee-reverse:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-4 py-1">
                  {[...WORKFLOW_ITEMS].reverse().map((item) => (
                    <WorkflowPill key={`${setIndex}-reverse-${item.step}`} item={item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
