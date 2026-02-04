"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const options = [
        { value: "light" as const, label: "Açık", icon: Sun },
        { value: "dark" as const, label: "Koyu", icon: Moon },
        { value: "system" as const, label: "Sistem", icon: Monitor },
    ];

    const currentOption = options.find((o) => o.value === theme) || options[0];
    const CurrentIcon = currentOption.icon;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
                aria-label="Tema değiştir"
            >
                <CurrentIcon size={18} className="text-foreground" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
                    {options.map((option) => {
                        const Icon = option.icon;
                        return (
                            <button
                                key={option.value}
                                onClick={() => {
                                    setTheme(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${theme === option.value
                                        ? "bg-primary text-primary-foreground"
                                        : "text-foreground hover:bg-muted"
                                    }`}
                            >
                                <Icon size={16} />
                                <span>{option.label}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
