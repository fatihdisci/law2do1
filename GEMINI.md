# Project: Law2Do - Legal Workflow Automation SaaS
# AI Agent Guidelines & System Prompt

## 1. Context & Tech Stack
- **Domain:** Legal tech SaaS for Turkish lawyers and law firms (case management, workflow automation).
- **Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS.
- **Language:** UI text and copywriting MUST be in professional, domain-specific Turkish. Code logic, variables, and technical comments should be in English.

## 2. Code Modification Standards (CRITICAL)
- **Token Efficiency:** NEVER output the entire file unless explicitly requested. ONLY output the specific functions, components, or lines that need changing. Use `// ... existing code ...` to represent unchanged parts.
- **TypeScript:** Enforce strict typing. Avoid `any`. Use interfaces for component props.
- **Architecture:** Respect the existing Next.js App Router structure (`src/app`, `src/components`). Re-use existing UI components (e.g., from `src/components/ui/`) before creating new ones.

## 3. Design Philosophy (Strict "Anti-AI Slop" Rules)
- **Aesthetic:** Linear / Stripe / Vercel design language. Ultra-minimalist, high-contrast, utility-first.
- **Banned "AI Slop":** - NO excessive or heavy box-shadows (use subtle `shadow-sm` or borders).
  - NO pointless color gradients, floating cards, or soft neumorphism.
  - NO generic marketing filler (e.g., "Welcome to the future of law"). Use realistic Turkish legal terminology.
- **Structure:** Rely on precise typography scaling, font weights, and generous negative space (whitespace) to establish visual hierarchy. Use Tailwind classes effectively.

## 4. Agent Operational Rules
- **No Conversational Filler:** Do not say "Here is the code" or "I have updated the file." Output strictly the requested code, terminal commands, or highly condensed architectural explanations.
- **YOLO Mode Ready:** If providing terminal commands (e.g., npm install, git operations), format them clearly so they can be executed safely.
- **Problem Solving:** If a bug arises, analyze the provided file contexts thoroughly before suggesting a fix. Default to the most performant and standard Next.js solution.