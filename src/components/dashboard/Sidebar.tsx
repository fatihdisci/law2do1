"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderOpen, CheckSquare, Wallet, Settings, LogOut, BarChart3 } from "lucide-react";

interface NavItem {
    icon: React.ElementType;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { icon: FolderOpen, label: "Dosyalar", href: "/dashboard" },
    { icon: CheckSquare, label: "Görevler", href: "/dashboard/tasks" },
    { icon: Wallet, label: "Kasa", href: "/dashboard/finance" },
    { icon: BarChart3, label: "Raporlar", href: "/dashboard/reports" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-64 bg-sidebar text-sidebar-foreground flex flex-col z-40 border-r border-sidebar-border">
            {/* Logo */}
            <div className="p-6 border-b border-sidebar-border">
                <Link href="/" className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-sidebar-foreground">
                        Law<span className="text-primary">2</span>Do
                    </span>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-sidebar-border space-y-1">
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200 w-full">
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Ayarlar</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200 w-full">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Çıkış</span>
                </button>
            </div>
        </aside>
    );
}
