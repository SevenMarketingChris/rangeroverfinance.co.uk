import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-rr-black text-white/40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div>
            <span className="text-[13px] font-light tracking-[0.35em] text-white uppercase block mb-6">
              Range Rover Finance
            </span>
            <p className="text-[13px] leading-relaxed text-white/30">
              Independent finance comparison for Range Rover and Land Rover vehicles.
              Compare PCP, HP and lease options with free calculators.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.3em] text-white/60 uppercase mb-6">Models</h3>
            <ul className="space-y-3">
              {[
                { href: "/range-rover", label: "Range Rover" },
                { href: "/range-rover-sport", label: "Range Rover Sport" },
                { href: "/range-rover-evoque", label: "Range Rover Evoque" },
                { href: "/range-rover-velar", label: "Range Rover Velar" },
                { href: "/discovery", label: "Discovery" },
                { href: "/discovery-sport", label: "Discovery Sport" },
                { href: "/defender", label: "Defender" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.3em] text-white/60 uppercase mb-6">Finance</h3>
            <ul className="space-y-3">
              {[
                { href: "/pcp-deals", label: "PCP Deals" },
                { href: "/hp-finance", label: "HP Finance" },
                { href: "/lease-deals", label: "Lease Deals" },
                { href: "/used-finance", label: "Used Finance" },
                { href: "/bad-credit", label: "Bad Credit" },
                { href: "/business-finance", label: "Business Finance" },
                { href: "/calculator", label: "Finance Calculator" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] tracking-[0.3em] text-white/60 uppercase mb-6">Guides</h3>
            <ul className="space-y-3">
              {[
                { href: "/guides/pcp-vs-hp", label: "PCP vs HP" },
                { href: "/guides/pcp-explained", label: "PCP Explained" },
                { href: "/guides/balloon-payment-explained", label: "Balloon Payments" },
                { href: "/guides/gap-insurance", label: "GAP Insurance" },
                { href: "/guides/how-car-finance-works", label: "How Finance Works" },
                { href: "/guides/credit-score-car-finance", label: "Credit Score Guide" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[13px] text-white/30 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex gap-8">
              {[
                { href: "/about", label: "About" },
                { href: "/privacy-policy", label: "Privacy" },
                { href: "/terms", label: "Terms" },
                { href: "/disclaimer", label: "Disclaimer" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.1em] text-white/25 hover:text-white/60 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-white/20">
              &copy; {new Date().getFullYear()} Range Rover Finance
            </p>
          </div>
          <p className="mt-6 text-[11px] text-white/15 leading-relaxed max-w-4xl">
            Range Rover Finance is not affiliated with Jaguar Land Rover Limited.
            Range Rover, Land Rover, Discovery and Defender are registered trademarks of Jaguar Land Rover Limited.
            Finance subject to status. Terms and conditions apply. Applicants must be 18+.
            We act as a credit broker, not a lender.
          </p>
        </div>
      </div>
    </footer>
  );
}
