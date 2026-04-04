import type { Config } from "tailwindcss";
import { designTokens } from "./src/design-tokens";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-bg) / <alpha-value>)",
        foreground: "hsl(var(--color-fg) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--color-card) / <alpha-value>)",
          foreground: "hsl(var(--color-card-fg) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover) / <alpha-value>)",
          foreground: "hsl(var(--color-popover-fg) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary) / <alpha-value>)",
          foreground: "hsl(var(--color-primary-fg) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary) / <alpha-value>)",
          foreground: "hsl(var(--color-secondary-fg) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted) / <alpha-value>)",
          foreground: "hsl(var(--color-muted-fg) / <alpha-value>)",
        },
        border: "hsl(var(--color-border) / <alpha-value>)",
        input: "hsl(var(--color-input) / <alpha-value>)",
        ring: "hsl(var(--color-ring) / <alpha-value>)",
        accent: {
          DEFAULT: "hsl(var(--color-accent-500) / <alpha-value>)",
          foreground: "hsl(var(--color-fg) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive) / <alpha-value>)",
          foreground: "hsl(var(--color-destructive-fg) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--color-sidebar) / <alpha-value>)",
          foreground: "hsl(var(--color-sidebar-fg) / <alpha-value>)",
          primary: "hsl(var(--color-sidebar-primary) / <alpha-value>)",
          "primary-foreground": "hsl(var(--color-sidebar-primary-fg) / <alpha-value>)",
          accent: "hsl(var(--color-sidebar-accent) / <alpha-value>)",
          "accent-foreground": "hsl(var(--color-sidebar-accent-fg) / <alpha-value>)",
          border: "hsl(var(--color-sidebar-border) / <alpha-value>)",
          ring: "hsl(var(--color-sidebar-ring) / <alpha-value>)",
        },
        chart: {
          1: "hsl(var(--color-chart-1) / <alpha-value>)",
          2: "hsl(var(--color-chart-2) / <alpha-value>)",
          3: "hsl(var(--color-chart-3) / <alpha-value>)",
          4: "hsl(var(--color-chart-4) / <alpha-value>)",
          5: "hsl(var(--color-chart-5) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: designTokens.typography.fontFamily.sans,
        display: designTokens.typography.fontFamily.display,
        mono: designTokens.typography.fontFamily.mono,
      },
      boxShadow: {
        xs: designTokens.shadow.xs,
        sm: designTokens.shadow.sm,
        md: designTokens.shadow.md,
        lg: designTokens.shadow.lg,
        xl: designTokens.shadow.xl,
        glow: designTokens.shadow.glow,
      },
      borderRadius: {
        sm: designTokens.radius.sm,
        DEFAULT: designTokens.radius.md,
        md: designTokens.radius.md,
        lg: designTokens.radius.lg,
        xl: designTokens.radius.xl,
        "2xl": designTokens.radius["2xl"],
        full: designTokens.radius.full,
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "toast-in": {
          from: { opacity: "0", transform: "translateX(100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.6" },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-8px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1", borderWidth: "2px" },
          "100%": { transform: "scale(2.5)", opacity: "0", borderWidth: "0px" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 3s ease-in-out infinite",
        "slide-up": "slide-up 0.3s ease-out forwards",
        "toast-in": "toast-in 0.3s ease-out forwards",
        "pulse-slow": "pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow": "bounce-slow 3s infinite",
        marquee: "marquee 20s linear infinite",
        ripple: "ripple 1.5s ease-out infinite",
      },
    },
  },
};

export default config;
