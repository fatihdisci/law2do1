import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-muted-foreground">
                    © 2026 Law2Do. İzmir'de geliştirildi.
                </div>
                <div className="flex gap-8 text-sm font-medium text-muted-foreground">
                    <Link href="/privacy" className="hover:text-foreground transition-colors">
                        Gizlilik
                    </Link>
                    <Link href="/contact" className="hover:text-foreground transition-colors">
                        İletişim
                    </Link>
                    <Link href="#" className="hover:text-foreground transition-colors">
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    );
}
