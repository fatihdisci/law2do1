import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

const footerLinks = {
    urun: [
        { href: "/#features", label: "Özellikler" },
        { href: "/pricing", label: "Paketler" },
        { href: "/#how-it-works", label: "Nasıl Çalışır?" },
        { href: "/login", label: "Giriş Yap" },
    ],
    sirket: [
        { href: "/iletisim", label: "İletişim" },
        { href: "/sss", label: "SSS" },
    ],
    yasal: [
        { href: "/gizlilik-politikasi", label: "Gizlilik Politikası" },
        { href: "/kullanim-kosullari", label: "Kullanım Koşulları" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border relative z-10">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-serif shadow-md">
                                L
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Law<span className="text-primary">2</span>Do
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Avukatlar için tasarlanmış akıllı iş akışı yönetim sistemi. İzmir&apos;de geliştirildi.
                        </p>
                        {/* Social Links */}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={16} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Ürün</h4>
                        <ul className="space-y-3">
                            {footerLinks.urun.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Şirket</h4>
                        <ul className="space-y-3">
                            {footerLinks.sirket.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Yasal</h4>
                        <ul className="space-y-3">
                            {footerLinks.yasal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-muted-foreground">
                        © 2026 Law2Do. Tüm hakları saklıdır.
                    </div>
                    <div className="text-sm text-muted-foreground">
                        İzmir&apos;de geliştirildi.
                    </div>
                </div>
            </div>
        </footer>
    );
}
