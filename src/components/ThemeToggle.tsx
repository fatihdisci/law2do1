"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";

const options = [
    { value: "light" as const, label: "Açık", icon: Sun },
    { value: "dark" as const, label: "Koyu", icon: Moon },
    { value: "system" as const, label: "Sistem", icon: Monitor },
] as const;

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="flex items-center gap-0.5 p-1 rounded-lg bg-muted border border-border">
            {options.map(({ value, label, icon: Icon }) => (
                <button
                    key={value}
                    onClick={() => setTheme(value)}
                    title={label}
                    aria-label={label}
                    className={`flex items-center justify-center w-8 h-8 rounded-md transition-all duration-200 ${
                        theme === value
                            ? "bg-card text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    <Icon size={15} />
                </button>
            ))}
        </div>
    );
}
