"use client";

import Link from "next/link";
import { useState } from "react";

const modelLinks = [
  { href: "/range-rover", label: "RANGE ROVER" },
  { href: "/range-rover-sport", label: "RANGE ROVER SPORT" },
  { href: "/range-rover-evoque", label: "RANGE ROVER EVOQUE" },
  { href: "/range-rover-velar", label: "RANGE ROVER VELAR" },
  { href: "/discovery", label: "DISCOVERY" },
  { href: "/discovery-sport", label: "DISCOVERY SPORT" },
  { href: "/defender", label: "DEFENDER" },
];

const financeLinks = [
  { href: "/pcp-deals", label: "PCP DEALS" },
  { href: "/hp-finance", label: "HP FINANCE" },
  { href: "/lease-deals", label: "LEASE DEALS" },
  { href: "/used-finance", label: "USED FINANCE" },
  { href: "/bad-credit", label: "BAD CREDIT" },
  { href: "/business-finance", label: "BUSINESS FINANCE" },
];

const calculatorLinks = [
  { href: "/calculator", label: "FINANCE CALCULATOR" },
  { href: "/calculator/pcp", label: "PCP CALCULATOR" },
  { href: "/calculator/hp", label: "HP CALCULATOR" },
  { href: "/calculator/lease", label: "LEASE CALCULATOR" },
  { href: "/calculator/affordability", label: "AFFORDABILITY" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-rr-black sticky top-0 z-50 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Link href="/" className="flex items-center gap-0">
            <span className="text-[13px] font-light tracking-[0.35em] text-white uppercase">
              Range Rover Finance
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0">
            <NavDropdown
              label="MODELS"
              links={modelLinks}
              active={activeDropdown === "models"}
              onToggle={() => setActiveDropdown(activeDropdown === "models" ? null : "models")}
              onClose={() => setActiveDropdown(null)}
            />
            <NavDropdown
              label="FINANCE"
              links={financeLinks}
              active={activeDropdown === "finance"}
              onToggle={() => setActiveDropdown(activeDropdown === "finance" ? null : "finance")}
              onClose={() => setActiveDropdown(null)}
            />
            <NavDropdown
              label="CALCULATORS"
              links={calculatorLinks}
              active={activeDropdown === "calculators"}
              onToggle={() => setActiveDropdown(activeDropdown === "calculators" ? null : "calculators")}
              onClose={() => setActiveDropdown(null)}
            />
            <Link
              href="/guides"
              className="px-5 py-2 text-[11px] tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300"
            >
              GUIDES
            </Link>
            <Link
              href="/apply"
              className="ml-6 px-7 py-2 border border-white/20 text-[11px] tracking-[0.2em] text-white hover:bg-white hover:text-rr-black transition-all duration-300"
            >
              GET A QUOTE
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-rr-black border-t border-white/5">
          <div className="px-6 py-6 space-y-1">
            <MobileSection title="MODELS" links={modelLinks} onClose={() => setMobileOpen(false)} />
            <MobileSection title="FINANCE" links={financeLinks} onClose={() => setMobileOpen(false)} />
            <MobileSection title="CALCULATORS" links={calculatorLinks} onClose={() => setMobileOpen(false)} />
            <Link
              href="/guides"
              onClick={() => setMobileOpen(false)}
              className="block px-0 py-3 text-[11px] tracking-[0.2em] text-white/60 hover:text-white border-b border-white/5"
            >
              GUIDES
            </Link>
            <div className="pt-4">
              <Link
                href="/apply"
                onClick={() => setMobileOpen(false)}
                className="block py-3 border border-white/20 text-[11px] tracking-[0.2em] text-white text-center hover:bg-white hover:text-rr-black transition-all"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavDropdown({
  label,
  links,
  active,
  onToggle,
  onClose,
}: {
  label: string;
  links: { href: string; label: string }[];
  active: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onToggle} onMouseLeave={onClose}>
      <button className="px-5 py-2 text-[11px] tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 flex items-center gap-2">
        {label}
        <svg
          className={`w-2.5 h-2.5 transition-transform duration-300 ${active ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {active && (
        <div className="absolute top-full left-0 mt-0 w-64 bg-rr-black shadow-2xl border border-white/5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block px-6 py-3 text-[11px] tracking-[0.15em] text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5 last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileSection({
  title,
  links,
  onClose,
}: {
  title: string;
  links: { href: string; label: string }[];
  onClose: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-[11px] tracking-[0.2em] text-white/60"
      >
        {title}
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-3 space-y-0">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block pl-4 py-2 text-[11px] tracking-[0.15em] text-white/40 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
