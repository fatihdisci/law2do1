import {
  HeroSection,
  MethodologySection,
  ComparisonSection,
  MapSection,
  FeaturesSection,
  ToolsTeaser,
} from '@/components/landing';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

      {/* BACKGROUND: Soft Aurora */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px]"></div>
      </div>

      <HeroSection />
      <MethodologySection />
      <ComparisonSection />
      <MapSection />
      <FeaturesSection />
      <ToolsTeaser />
    </div>
  );
}
