import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center gap-2">
          {idx > 0 && <ChevronRight size={14} className="text-white/40" />}
          {item.href ? (
            <a
              href={item.href}
              className="text-white/60 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-white/90 font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
