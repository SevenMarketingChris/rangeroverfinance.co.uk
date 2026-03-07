import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Range Rover Finance Calculator | Compare PCP, HP & Lease Payments",
  description:
    "Use our free Range Rover finance calculator to compare PCP, HP and lease payments side by side. Adjust price, deposit, term and APR to see estimated monthly costs instantly.",
};

const calculatorLinks = [
  {
    title: "PCP Calculator",
    href: "/calculator/pcp",
    description:
      "Personal Contract Purchase with lower monthly payments and a balloon payment at the end. The most popular way to finance a Range Rover.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "HP Calculator",
    href: "/calculator/hp",
    description:
      "Hire Purchase with fixed monthly payments and full ownership at the end. No balloon payment, no mileage limits.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: "Lease Calculator",
    href: "/calculator/lease",
    description:
      "Personal Contract Hire with fixed monthly rentals and no ownership responsibility. Simply hand back at the end.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Affordability Calculator",
    href: "/calculator/affordability",
    description:
      "Work backwards from your monthly budget to find out which Range Rover or Land Rover models you can afford.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Balloon Payment Calculator",
    href: "/calculator/balloon-payment",
    description:
      "Understand your Guaranteed Future Value and what the optional final payment means at the end of your PCP deal.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Part Exchange Calculator",
    href: "/calculator/part-exchange",
    description:
      "Calculate your equity position on your current vehicle and see how it affects the deposit on your new Range Rover.",
    icon: (
      <svg className="w-8 h-8 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Which finance type is best for a Range Rover?",
    answer:
      "The best finance type depends on your circumstances. PCP is the most popular choice because it offers lower monthly payments and flexibility at the end of the agreement. HP suits buyers who want to own the vehicle outright without a balloon payment. Leasing is ideal if you prefer fixed costs and plan to change your vehicle every few years. Our calculators help you compare all three options side by side.",
  },
  {
    question: "How accurate is the finance calculator?",
    answer:
      "Our calculator provides reliable estimates based on standard finance formulas. However, the actual quote you receive may differ depending on your credit score, the specific vehicle, the lender's current rates, and any manufacturer incentives available at the time. We recommend using the calculator to get a ballpark figure, then requesting a formal quote for precise figures.",
  },
  {
    question: "What deposit do I need for Range Rover finance?",
    answer:
      "Most finance agreements require a minimum deposit of around 10% of the vehicle price, though this varies by lender. A larger deposit will reduce your monthly payments and may help you secure a better interest rate. Some manufacturers occasionally offer low-deposit or zero-deposit deals, particularly on outgoing models or during promotional periods.",
  },
  {
    question: "Can I get Range Rover finance with bad credit?",
    answer:
      "It is possible to obtain Range Rover finance with a less-than-perfect credit history, though rates will typically be higher than those offered to applicants with strong credit profiles. Specialist lenders cater to a range of credit circumstances. A larger deposit can improve your chances of approval and may help secure more competitive terms.",
  },
  {
    question: "What is the typical APR on Range Rover finance?",
    answer:
      "APR on Range Rover finance typically ranges from around 4.9% to 12.9%, depending on the lender, your credit profile, and any manufacturer subsidies. Land Rover Financial Services occasionally offers promotional rates as low as 0% on selected models, particularly at the end of a model year or during special events. The APR includes all mandatory charges, making it the best figure to use when comparing deals.",
  },
  {
    question: "How long should my finance agreement be?",
    answer:
      "Finance agreements typically run for 24, 36, or 48 months, with 48 months being the most common for Range Rovers. A longer term reduces monthly payments but increases the total amount of interest you pay. A shorter term means higher monthly costs but less interest overall and equity built more quickly. Consider how long you intend to keep the vehicle and balance affordability against total cost.",
  },
];

export default function CalculatorHub() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Finance Calculator" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover Finance Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Compare PCP, HP and lease payments side by side using our free, no-obligation calculator. Adjust the
              vehicle price, deposit, term and interest rate to see estimated monthly costs for any model in the Range
              Rover and Land Rover lineup.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display text-charcoal mb-6">Calculate Your Monthly Payment</h2>
          <FinanceCalculator showModeToggle={true} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-4">
            Understanding Your Finance Options
          </h2>
          <p className="text-center text-slate max-w-2xl mx-auto mb-12">
            Every buyer has different priorities. Whether you value low monthly payments, outright ownership, or
            hassle-free motoring, there is a finance structure that fits.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-display text-charcoal mb-3">Personal Contract Purchase (PCP)</h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                PCP is the most popular way to finance a new Range Rover. You pay a deposit followed by fixed monthly
                payments over an agreed term, typically 24 to 48 months. At the end, you have three choices: pay the
                optional final payment (balloon) to own the vehicle, hand it back with nothing more to pay, or use any
                equity as a deposit on your next vehicle. Monthly payments are lower than HP because you are not
                financing the full value of the car — only the depreciation plus interest.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                PCP works exceptionally well for Range Rovers because these vehicles hold their value strongly. A higher
                residual value means a lower balloon payment, which in turn keeps your monthly costs down. If you like
                to change your vehicle every three to four years, PCP offers unmatched flexibility.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-display text-charcoal mb-3">Hire Purchase (HP)</h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Hire Purchase is the most straightforward way to finance a vehicle. You pay a deposit, then make fixed
                monthly payments for an agreed term. Once every payment has been made, the vehicle is yours. There is no
                balloon payment, no mileage restrictions, and no conditions about the vehicle&apos;s condition at the end
                of the agreement.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                HP monthly payments are higher than PCP because you are paying off the entire balance of the vehicle.
                However, you build equity from day one, and there are no surprises at the end of the term. HP is ideal
                for buyers who intend to keep their Range Rover for the long term and want the simplicity of a fixed
                repayment schedule with guaranteed ownership.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-display text-charcoal mb-3">Personal Contract Hire (Lease)</h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Leasing, or Personal Contract Hire, is a long-term rental agreement. You pay an initial rental
                (typically three or six monthly payments upfront) followed by fixed monthly payments. At the end of the
                agreement, you simply return the vehicle. You never own the car, but you also never have to worry about
                depreciation or resale.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                Leasing is particularly popular with business users because the payments can be offset against tax.
                For private individuals, the appeal lies in predictable costs and always driving a new vehicle. Mileage
                limits and fair-wear-and-tear conditions apply, so leasing suits drivers who cover a consistent and
                moderate annual mileage.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-display text-charcoal text-center mb-4">Specialist Calculators</h2>
          <p className="text-center text-slate max-w-2xl mx-auto mb-10">
            Dive deeper with our dedicated calculators, each designed to answer a specific question about your Range
            Rover finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculatorLinks.map((calc) => (
              <Link
                key={calc.href}
                href={calc.href}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-sand transition-all hover:shadow-md"
              >
                <div className="mb-4">{calc.icon}</div>
                <h3 className="text-lg font-display text-charcoal mb-2 group-hover:text-racing-green transition-colors">
                  {calc.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">{calc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">How to Use the Range Rover Finance Calculator</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Our finance calculator is designed to give you a clear picture of what your monthly payments could look
              like before you speak to a dealer or finance broker. Start by entering the on-the-road price of the Range
              Rover or Land Rover model you are interested in. You can find current prices on the Land Rover
              configurator or by speaking to your local dealership.
            </p>
            <p>
              Next, enter your deposit amount. A larger deposit will reduce the amount you need to finance and therefore
              lower your monthly payments. Most lenders require a minimum deposit of around 10%, though some promotional
              deals may offer lower entry points.
            </p>
            <p>
              Select your preferred term length. Shorter terms mean higher monthly payments but less total interest paid.
              Longer terms spread the cost but increase the overall amount you repay. For PCP agreements, the term also
              affects the Guaranteed Future Value — longer terms typically result in a lower balloon payment because the
              vehicle has depreciated more.
            </p>
            <p>
              The APR (Annual Percentage Rate) represents the total cost of borrowing, including interest and any
              mandatory fees. If you have a specific quote, enter that rate. Otherwise, use our default rate as a
              starting point. Rates vary significantly based on your credit profile, so the rate you are offered may be
              higher or lower than the default.
            </p>
            <p>
              For PCP calculations, you can also adjust the balloon payment percentage. This represents the Guaranteed
              Future Value — the amount the lender predicts the vehicle will be worth at the end of the agreement. A
              higher balloon percentage means lower monthly payments but a larger lump sum if you choose to buy the
              vehicle at the end.
            </p>
            <p>
              Toggle between PCP, HP and Lease modes using the tabs at the top of the calculator. Each mode uses
              different calculations to reflect the structure of that particular finance type. Compare all three to find
              the option that best suits your budget and ownership preferences.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection />
    </>
  );
}
