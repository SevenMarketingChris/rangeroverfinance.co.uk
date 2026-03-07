import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.1em] text-rr-pewter">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-rr-black transition-colors duration-300">HOME</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="text-rr-mist">/</span>
            {item.href ? (
              <Link href={item.href} className="hover:text-rr-black transition-colors duration-300 uppercase">
                {item.label}
              </Link>
            ) : (
              <span className="text-rr-silver uppercase">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
