import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Range Rover Finance Guides | Expert Advice & Tips",
  description:
    "Comprehensive Range Rover finance guides covering PCP, HP, deposits, credit scores, GAP insurance, early settlement and more. Free expert advice to help you make smarter finance decisions.",
};

const guides = [
  {
    title: "PCP vs HP: Which Finance Option is Right for You?",
    href: "/guides/pcp-vs-hp",
    description:
      "A detailed comparison of Personal Contract Purchase and Hire Purchase, with worked examples using a Range Rover Sport at £80,000.",
    category: "Comparing Options",
  },
  {
    title: "PCP Finance Explained: The Complete Guide",
    href: "/guides/pcp-explained",
    description:
      "Everything you need to know about Personal Contract Purchase, from how GFV is calculated to your voluntary termination rights.",
    category: "Finance Types",
  },
  {
    title: "Balloon Payments Explained: What You Need to Know",
    href: "/guides/balloon-payment-explained",
    description:
      "Understand how balloon payments work, why they make PCP cheaper than HP, and what happens when your car is worth more or less than the GFV.",
    category: "Finance Types",
  },
  {
    title: "GAP Insurance for Range Rovers: Is It Worth It?",
    href: "/guides/gap-insurance",
    description:
      "Learn what GAP insurance covers, the different types available, and why it is particularly important for high-value vehicles like Range Rovers.",
    category: "Protection",
  },
  {
    title: "Negative Equity on Car Finance: How to Handle It",
    href: "/guides/negative-equity",
    description:
      "What negative equity is, how to check if you are affected, and practical steps to deal with it or avoid it altogether.",
    category: "Managing Finance",
  },
  {
    title: "How Car Finance Works: A Beginner's Guide",
    href: "/guides/how-car-finance-works",
    description:
      "A complete introduction to car finance for first-time buyers. Covers PCP, HP, PCH, personal loans, APR, and your consumer rights.",
    category: "Getting Started",
  },
  {
    title: "How Your Credit Score Affects Car Finance",
    href: "/guides/credit-score-car-finance",
    description:
      "Understand what lenders look for, how to check and improve your credit score, and the difference between soft and hard searches.",
    category: "Getting Started",
  },
  {
    title: "How Much Deposit Do You Need for Range Rover Finance?",
    href: "/guides/deposit-guide",
    description:
      "Deposit requirements by finance type, how deposit size affects monthly payments, zero-deposit options, and using part exchange as deposit.",
    category: "Planning",
  },
  {
    title: "Settling Car Finance Early: Your Complete Guide",
    href: "/guides/early-settlement",
    description:
      "Your rights to settle early, how settlement figures are calculated, the difference between voluntary termination and early settlement, and when it makes sense.",
    category: "Managing Finance",
  },
  {
    title: "Financing a Range Rover vs Paying Cash: Which is Smarter?",
    href: "/guides/finance-vs-cash",
    description:
      "A clear-headed comparison of the opportunity cost of cash against the cost of finance, with specific Range Rover examples and scenarios.",
    category: "Comparing Options",
  },
];

const categoryColours: Record<string, string> = {
  "Comparing Options": "bg-racing-green/10 text-racing-green",
  "Finance Types": "bg-sand/30 text-charcoal",
  Protection: "bg-red-50 text-red-700",
  "Managing Finance": "bg-blue-50 text-blue-700",
  "Getting Started": "bg-green-50 text-green-700",
  Planning: "bg-purple-50 text-purple-700",
};

export default function GuidesHub() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover Finance Guides
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Whether you are financing your first Range Rover or looking to make a smarter decision on your next one,
              our expert guides cover everything you need to know. Each guide is written to give you clear, honest advice
              without the jargon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-sand transition-all hover:shadow-md flex flex-col"
              >
                <span
                  className={`inline-block self-start text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${categoryColours[guide.category] || "bg-gray-100 text-gray-700"}`}
                >
                  {guide.category}
                </span>
                <h2 className="text-lg font-display text-charcoal mb-2 group-hover:text-racing-green transition-colors">
                  {guide.title}
                </h2>
                <p className="text-sm text-slate leading-relaxed flex-1">{guide.description}</p>
                <span className="mt-4 text-sm font-medium text-sand group-hover:text-racing-green transition-colors inline-flex items-center gap-1">
                  Read guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">Why Trust Our Guides?</h2>
          <div className="space-y-4 text-sm text-slate leading-relaxed">
            <p>
              Our finance guides are written by specialists who understand the UK motor finance market inside out. We
              explain concepts clearly, use real-world examples based on current Range Rover pricing, and always put your
              interests first.
            </p>
            <p>
              We are not tied to any single lender or dealership. That independence means we can give you straightforward
              advice about what works and what to watch out for, whether that means recommending PCP, HP, a personal
              loan, or even paying cash.
            </p>
            <p>
              Every guide is regularly reviewed to ensure it reflects the latest regulations, market conditions, and
              Range Rover model pricing. If something changes — such as FCA guidelines or manufacturer finance offers —
              we update our content promptly.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Personalised Advice?"
        description="Use our free calculators and comparison tools to find the right finance option for your circumstances."
      />
    </>
  );
}
