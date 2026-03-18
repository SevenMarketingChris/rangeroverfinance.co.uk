import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Finance Tools | Range Rover Finance",
  description:
    "Use our free finance calculator to estimate monthly payments for Range Rover PCP, HP and lease options. Adjust vehicle price, deposit, term and APR to explore your options.",
};

export default function ApplyPage() {
  return (
    <>
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pb-16">
          <Breadcrumbs items={[{ label: "Finance Tools" }]} />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-display text-white mb-4">
              Finance Calculator
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Our tools are available on the calculator page. Use our free calculator to estimate
              monthly payments for PCP, HP and lease options across all Range Rover models.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
            <h2 className="text-2xl font-display text-charcoal mb-4">
              Explore Your Finance Options
            </h2>
            <p className="text-slate leading-relaxed mb-8">
              Our finance calculator lets you estimate monthly payments by adjusting vehicle price,
              deposit, term, APR and finance type. Compare PCP, HP and lease options side by side
              to find what works for your budget.
            </p>
            <Link
              href="/calculator"
              className="inline-block px-8 py-4 bg-racing-green text-white font-semibold rounded-lg hover:bg-racing-green-light transition-colors"
            >
              Go to Calculator
            </Link>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            <Link
              href="/compare"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">Compare Finance Types</h3>
              <p className="text-sm text-slate">See PCP, HP and lease side by side to understand the differences.</p>
            </Link>
            <Link
              href="/guides/how-car-finance-works"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">How Car Finance Works</h3>
              <p className="text-sm text-slate">A complete guide to understanding your finance options.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
