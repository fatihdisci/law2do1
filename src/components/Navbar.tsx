"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Scale } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
    { href: "/#how-it-works", label: "Nasıl Çalışır?" },
    { href: "/#features", label: "Özellikler" },
    { href: "/pricing", label: "Paketler" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-sm"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">

                {/* ── Logo ── */}
                <Link
                    href="/"
                    className="flex items-center gap-2.5 shrink-0 group"
                    aria-label="Law2Do Ana Sayfa"
                >
                    <div className="relative w-9 h-9 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300">
                        <Scale size={18} className="text-primary-foreground" strokeWidth={2} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Law<span className="text-primary">2</span>Do
                    </span>
                </Link>

                {/* ── Desktop Links ── */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="relative py-1 hover:text-foreground transition-colors duration-200 group"
                        >
                            {link.label}
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* ── Desktop Actions ── */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <ThemeToggle />
                    <Link
                        href="/login"
                        className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors px-3 py-2"
                    >
                        Giriş Yap
                    </Link>
                    <a
                        href="https://app.law2do.com"
                        className="relative overflow-hidden inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-px active:translate-y-0 active:shadow-none btn-shimmer"
                    >
                        Ücretsiz Başla
                    </a>
                </div>

                {/* ── Mobile: Theme + Hamburger ── */}
                <div className="md:hidden flex items-center gap-2 shrink-0">
                    <ThemeToggle />
                    <button
                        className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen((v) => !v)}
                        aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {/* Animated hamburger → X */}
                        <span
                            className={`block h-[2px] w-5 bg-foreground rounded-full origin-center transition-all duration-300 ${
                                isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-5 bg-foreground rounded-full transition-all duration-200 ${
                                isMobileMenuOpen ? "opacity-0 scale-x-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-[2px] w-5 bg-foreground rounded-full origin-center transition-all duration-300 ${
                                isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                            }`}
                        />
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu — slide down ── */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-background/95 backdrop-blur-xl border-t border-border/60 px-6 pb-6 pt-4 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="flex items-center h-11 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg px-2 hover:bg-muted"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-border my-3" />
                    <Link
                        href="/login"
                        className="flex items-center h-11 text-base font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg px-2 hover:bg-muted"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Giriş Yap
                    </Link>
                    <a
                        href="https://app.law2do.com"
                        className="flex items-center justify-center h-11 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-all mt-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Ücretsiz Başla
                    </a>
                </div>
            </div>
        </nav>
    );
}
