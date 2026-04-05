"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function Stat({
  value,
  label,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
  ...props
}: StatProps) {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(0);
  const startTime = React.useRef<number | null>(null);

  React.useEffect(() => {
    let animationFrameId: number;
    
    const easeOutQuad = (t: number) => t * (2 - t);

    const updateCount = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / (duration * 1000), 1);
      
      const easedProgress = easeOutQuad(percentage);
      const nextCount = Math.floor(easedProgress * value);
      
      if (nextCount !== countRef.current) {
        countRef.current = nextCount;
        setCount(nextCount);
      }

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return (
    <div className={cn(" flex flex-col gap-1", className)} {...props}>
      <div className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm md:text-base font-semibold text-slate-500 dark:text-slate-400">
        {label}
      </div>
    </div>
  );
}
