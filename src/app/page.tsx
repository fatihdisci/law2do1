import {
  HeroSection,
  MethodologySection,
  ComparisonSection,
  MapSection,
  FeaturesSection,
  CtaSection,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900 dark:selection:bg-indigo-900 dark:selection:text-indigo-100">

      {/* BACKGROUND: Soft Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-100/40 rounded-full blur-[120px]"></div>
      </div>

      <HeroSection />
      <MethodologySection />
      <ComparisonSection />
      <MapSection />
      <FeaturesSection />
      <CtaSection />
    </div>
  );
}
