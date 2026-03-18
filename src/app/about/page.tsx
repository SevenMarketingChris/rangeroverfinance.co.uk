import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Range Rover Finance | Free Tools & Guides for Finance Research",
  description:
    "Range Rover Finance provides free calculators, comparison tools and guides to help you research PCP, HP and lease options across the Range Rover and Land Rover lineup.",
  openGraph: {
    title: "About Range Rover Finance | Free Tools & Guides",
    description:
      "Free calculators, comparison tools and guides to help you research Range Rover finance options across PCP, HP and lease.",
    type: "website",
    url: "https://www.rangeroverfinance.co.uk/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pb-16">
          <Breadcrumbs items={[{ label: "About" }]} />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-display text-white mb-4">
              About Range Rover Finance
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Free tools, calculators and guides to help you research Range Rover finance options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom">
            <h2 className="text-2xl font-display text-charcoal mb-4">Who We Are</h2>
            <p className="text-slate leading-relaxed mb-6">
              Range Rover Finance is an independent information resource dedicated to helping buyers
              research and understand vehicle finance. We provide free tools, calculators, comparison
              features and in-depth guides covering PCP, HP, lease and other finance options for the
              complete Range Rover and Land Rover lineup.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              Our team has extensive experience in automotive finance, and we use that knowledge to
              create clear, practical resources. We believe everyone deserves access to straightforward
              information when researching how to finance a premium vehicle.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">Our Mission</h2>
            <p className="text-slate leading-relaxed mb-6">
              The vehicle finance market can be opaque. Dealers have their own finance products, lenders
              have their own agendas, and buyers are often left comparing options without the full picture.
              Our mission is to change that.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              We provide free tools — including detailed finance calculators, side-by-side
              comparisons, and expert guides — so that you can understand your options and make an
              informed decision before approaching any dealer or lender directly.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">How to Use This Site</h2>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sm font-display text-racing-green">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Research with Our Tools</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Use our finance calculators and comparison tools to understand estimated monthly payments,
                    total costs, and the key differences between PCP, HP and lease options for your chosen model.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sm font-display text-racing-green">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Read Our Guides</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Explore our detailed guides covering each finance type, tips for getting the best deal,
                    and model-specific information to help you decide which option works for your situation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sm font-display text-racing-green">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Approach Dealers and Lenders Informed</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Armed with a clear understanding of finance structures and estimated costs, you will be
                    in a stronger position when speaking to dealers or lenders directly.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display text-charcoal mb-4">Our Expertise</h2>
            <p className="text-slate leading-relaxed mb-6">
              We focus exclusively on finance information for Range Rover, Land Rover and Defender vehicles. This
              focused expertise means we understand the nuances of financing premium SUVs — from the impact
              of strong residual values on PCP deals to the tax advantages of PHEV models for business users.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Our content is written by automotive finance professionals with practical industry experience.
              Every calculator, guide and comparison on this site reflects real knowledge built over years
              of working in vehicle finance.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              We regularly update our tools and content to reflect current market conditions, ensuring the
              information you find here is as accurate and relevant as possible.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">Important Disclaimer</h2>
            <div className="bg-cream rounded-lg p-6 mb-6">
              <p className="text-sm text-slate leading-relaxed mb-3">
                Range Rover Finance is an independent information resource and is not affiliated with, endorsed by, or
                connected to Jaguar Land Rover Limited (JLR) or any of its subsidiaries. The names Range
                Rover, Land Rover, Defender, Discovery, Evoque and Velar are registered trademarks of
                Jaguar Land Rover Limited.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                This site provides tools and information for research purposes only. We do not provide
                financial advice, arrange finance, or act as a lender or credit broker. Always seek
                independent financial advice before entering into any finance agreement.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/calculator"
                className="inline-block px-10 py-4 bg-racing-green text-white font-semibold rounded-lg hover:bg-racing-green-light transition-colors text-lg"
              >
                Try Our Free Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
