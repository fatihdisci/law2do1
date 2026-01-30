"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#features", label: "Nasıl Çalışır?" },
        { href: "#features", label: "Özellikler" },
        { href: "/pricing", label: "Paketler" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-indigo-950 rounded-lg flex items-center justify-center text-white font-serif shadow-md">
                        L
                    </div>
                    <span className="text-xl font-bold tracking-tight text-indigo-950">
                        Law<span className="text-emerald-600">2</span>Do
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="hover:text-indigo-900 transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-950 transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="text-sm font-semibold text-slate-600 hover:text-indigo-900 transition-colors">
                        Giriş Yap
                    </button>
                    <Link
                        href="/dashboard"
                        className="bg-indigo-950 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-900 transition-all shadow-lg shadow-indigo-900/20 active:scale-95"
                    >
                        Ücretsiz Başla
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-indigo-950"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-slate-600 hover:text-indigo-950 font-medium py-2 transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <hr className="border-slate-100" />
                        <button className="text-slate-600 font-medium py-2 text-left">
                            Giriş Yap
                        </button>
                        <Link
                            href="/dashboard"
                            className="bg-indigo-950 text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:bg-indigo-900 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Ücretsiz Başla
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
