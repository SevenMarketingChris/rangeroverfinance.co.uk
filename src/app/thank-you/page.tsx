import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Range Rover Finance",
  description: "Your finance quote request has been received. We will be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-racing-green-dark py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Checkmark icon */}
          <div className="w-20 h-20 rounded-full bg-sand/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-5xl font-display text-white mb-4">
            Thank You for Your Enquiry
          </h1>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
            Your finance quote request has been received. One of our specialists will be in touch shortly
            with tailored finance options for you.
          </p>
        </div>
      </section>

      {/* What Happens Next Timeline */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-display text-charcoal text-center mb-12">
            What Happens Next
          </h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-cream-dark hidden md:block" />

            <div className="space-y-10">
              {[
                {
                  step: "1",
                  title: "Review Within 24 Hours",
                  description:
                    "Our finance specialists will review your details and requirements. We will assess your enquiry against our panel of lenders to identify the most suitable options for your circumstances.",
                  timeframe: "Within 24 hours",
                },
                {
                  step: "2",
                  title: "Finance Options Presented",
                  description:
                    "We will contact you by your preferred method with a clear breakdown of the finance options available. You will see monthly payments, total costs, APR rates and key terms — all laid out so you can compare easily.",
                  timeframe: "1-2 working days",
                },
                {
                  step: "3",
                  title: "Choose Your Deal",
                  description:
                    "Once you have reviewed your options, simply let us know which deal works best for you. If none of the options suit, there is absolutely no obligation to proceed. The choice is always yours.",
                  timeframe: "At your pace",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6 md:gap-8">
                  <div className="shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-racing-green text-white flex items-center justify-center text-xl font-display">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-sand uppercase tracking-wide">
                      {item.timeframe}
                    </span>
                    <h3 className="text-lg font-semibold text-charcoal mt-1 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-display text-charcoal mb-4">While You Wait</h2>
          <p className="text-slate mb-8 leading-relaxed">
            Explore our guides and tools to help you prepare for your finance decision.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/calculator"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">Finance Calculator</h3>
              <p className="text-sm text-slate">Compare estimated payments across PCP, HP and lease options.</p>
            </Link>
            <Link
              href="/compare"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">Compare Finance Types</h3>
              <p className="text-sm text-slate">See PCP, HP and lease side by side to understand the differences.</p>
            </Link>
            <Link
              href="/pcp-deals"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">PCP Deals Guide</h3>
              <p className="text-sm text-slate">Learn how PCP finance works and whether it suits your needs.</p>
            </Link>
            <Link
              href="/hp-finance"
              className="block bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-charcoal mb-1">HP Finance Guide</h3>
              <p className="text-sm text-slate">Understand Hire Purchase and when it makes sense for you.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
