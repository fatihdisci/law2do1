import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    replaces: string;
    highlight?: boolean;
}

export default function FeatureCard({
    icon: Icon,
    title,
    description,
    replaces,
    highlight = false,
}: FeatureCardProps) {
    return (
        <div
            className={`card-hover relative p-6 lg:p-8 rounded-2xl border ${highlight
                    ? "bg-indigo-950 border-indigo-800 text-white"
                    : "bg-white border-slate-100"
                }`}
        >
            {/* Replaces Tag */}
            <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-4 ${highlight
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
            >
                <span>Replaces:</span>
                <span className="font-semibold">{replaces}</span>
            </div>

            {/* Icon */}
            <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${highlight ? "bg-indigo-800" : "bg-indigo-100"
                    }`}
            >
                <Icon
                    className={`w-6 h-6 ${highlight ? "text-indigo-300" : "text-indigo-600"
                        }`}
                />
            </div>

            {/* Content */}
            <h3
                className={`text-xl font-bold mb-2 ${highlight ? "text-white" : "text-indigo-950"
                    }`}
            >
                {title}
            </h3>
            <p
                className={`text-sm leading-relaxed ${highlight ? "text-indigo-200" : "text-slate-600"
                    }`}
            >
                {description}
            </p>
        </div>
    );
}
