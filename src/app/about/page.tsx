import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Range Rover Finance | Independent Finance Comparison",
  description:
    "Range Rover Finance is an independent finance comparison service helping buyers find the best PCP, HP and lease deals. We are not a dealer or lender — we work for you.",
  openGraph: {
    title: "About Range Rover Finance | Independent Finance Comparison",
    description:
      "Independent finance comparison service helping buyers find the best Range Rover finance deals across PCP, HP and lease options.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/about",
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
              Independent, impartial finance comparison — helping you find the best deal on your next Range Rover.
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
              Range Rover Finance is an independent finance comparison service dedicated to helping buyers
              navigate the complex world of vehicle finance. We are not a dealership. We are not a lender.
              We are on your side — working to find the most competitive finance options from across the
              market so you do not have to.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              Our team has extensive experience in automotive finance, having collectively spent over two
              decades advising buyers on PCP, HP, lease and specialist finance products. We understand that
              financing a premium vehicle is a significant decision, and we believe everyone deserves access
              to clear, honest information and competitive rates.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">Our Mission</h2>
            <p className="text-slate leading-relaxed mb-6">
              The vehicle finance market can be opaque. Dealers have their own finance products, lenders
              have their own agendas, and buyers are often left comparing deals without the full picture.
              Our mission is to change that.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              We provide free, no-obligation tools — including detailed finance calculators, side-by-side
              comparisons, and expert guides — so that you can make an informed decision before speaking
              to a single salesperson. When you are ready, we connect you with FCA-regulated finance
              partners who compete for your business, ensuring you receive the most competitive offer
              available.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">How It Works</h2>
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
                  <h3 className="font-semibold text-charcoal mb-1">Request a Free Quote</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Submit your details through our secure form. There is no credit check at this stage and
                    absolutely no obligation. We simply need to understand your requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-cream flex items-center justify-center text-sm font-display text-racing-green">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Compare Real Offers</h3>
                  <p className="text-sm text-slate leading-relaxed">
                    Our finance specialists match your requirements with suitable lenders and present you
                    with real, personalised offers. You compare them and choose the best one — or walk away.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-display text-charcoal mb-4">Our Expertise</h2>
            <p className="text-slate leading-relaxed mb-6">
              We specialise exclusively in finance for Range Rover, Land Rover and Defender vehicles. This
              focused expertise means we understand the nuances of financing premium SUVs — from the impact
              of strong residual values on PCP deals to the tax advantages of PHEV models for business users.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Our content is written by automotive finance professionals, not copywriters. Every calculator,
              guide and comparison on this site reflects real industry knowledge and practical experience
              helping buyers just like you.
            </p>
            <p className="text-slate leading-relaxed mb-10">
              We regularly update our tools and content to reflect current market conditions, ensuring the
              information you find here is as accurate and relevant as possible.
            </p>

            <h2 className="text-2xl font-display text-charcoal mb-4">Important Disclaimer</h2>
            <div className="bg-cream rounded-lg p-6 mb-6">
              <p className="text-sm text-slate leading-relaxed mb-3">
                Range Rover Finance is an independent service and is not affiliated with, endorsed by, or
                connected to Jaguar Land Rover Limited (JLR) or any of its subsidiaries. The names Range
                Rover, Land Rover, Defender, Discovery, Evoque and Velar are registered trademarks of
                Jaguar Land Rover Limited.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                We act as a credit broker, not a lender. All finance is subject to status and is provided
                by FCA-regulated third-party lenders. We may receive a commission from lenders for
                introductions, but this does not affect the options or rates presented to you.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/apply"
                className="inline-block px-10 py-4 bg-racing-green text-white font-semibold rounded-lg hover:bg-racing-green-light transition-colors text-lg"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
