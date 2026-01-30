import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 py-12 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-slate-500">
                    © 2026 Law2Do. İzmir'de geliştirildi.
                </div>
                <div className="flex gap-8 text-sm font-medium text-slate-600">
                    <Link href="/privacy" className="hover:text-indigo-950 transition-colors">
                        Gizlilik
                    </Link>
                    <Link href="/contact" className="hover:text-indigo-950 transition-colors">
                        İletişim
                    </Link>
                    <Link href="#" className="hover:text-indigo-950 transition-colors">
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    );
}
