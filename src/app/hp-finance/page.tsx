import type { Metadata } from "next";
import Link from "next/link";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { models, formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Range Rover HP Finance | Hire Purchase Deals | Own Your Vehicle",
  description:
    "Explore Range Rover hire purchase finance options. Fixed monthly payments with full ownership at the end. No mileage limits, no balloon payment. Compare HP deals across all models with our free calculator.",
  openGraph: {
    title: "Range Rover HP Finance | Hire Purchase Deals | Own Your Vehicle",
    description:
      "Explore Range Rover hire purchase finance. Fixed payments, full ownership, no mileage limits. Compare HP deals across all models.",
    type: "website",
    url: "https://www.rangeroverfinance.co.uk/hp-finance",
  },
};

const faqs = [
  {
    question: "How does hire purchase (HP) work on a Range Rover?",
    answer:
      "Hire purchase is a straightforward form of vehicle finance. You pay an initial deposit, then make fixed monthly payments over an agreed term — typically 24 to 60 months. Unlike PCP, there is no balloon payment at the end. Once you have made all your monthly payments, the vehicle is yours outright. A small option-to-purchase fee (usually around 100 to 200 pounds) may apply to formally transfer ownership.",
  },
  {
    question: "Why are HP monthly payments higher than PCP?",
    answer:
      "HP payments are higher because you are paying off the entire cost of the vehicle (minus your deposit) over the agreement term. With PCP, a large portion of the cost is deferred to the balloon payment at the end. On a Range Rover, this difference can be substantial — often 500 to 1,000 pounds per month more on HP compared to PCP — because of the high vehicle values involved.",
  },
  {
    question: "What are the advantages of HP over PCP for a Range Rover?",
    answer:
      "HP offers several distinct advantages. You own the car at the end with nothing further to pay. There are no mileage restrictions, so you can drive as much as you like without penalty. You are free to modify the vehicle — fitting aftermarket accessories, changing the wrap, or adding off-road upgrades — without needing the finance company's permission. And there is no risk of excess mileage or condition charges at the end of the agreement.",
  },
  {
    question: "Can I modify my Range Rover on HP finance?",
    answer:
      "While the vehicle technically belongs to the finance company until the final payment is made, HP agreements are far more flexible regarding modifications than PCP or lease agreements. Most lenders permit aftermarket accessories, upgraded wheels, suspension modifications and other enhancements, provided they do not materially reduce the vehicle's value. This makes HP popular with Defender and Range Rover Sport owners who want to personalise their vehicles.",
  },
  {
    question: "What is voluntary termination on an HP agreement?",
    answer:
      "Under the Consumer Credit Act, you have the right to voluntarily terminate your HP agreement once you have paid at least 50% of the total amount payable. You return the vehicle in reasonable condition and owe nothing further. This provides a safety net if your circumstances change. On a Range Rover HP deal, 50% of the total payable can be a significant sum, so this right may take several years to accrue depending on your deposit size.",
  },
  {
    question: "Are HP interest rates fixed or variable?",
    answer:
      "HP interest rates are fixed for the duration of the agreement. The APR you agree at the outset will not change, regardless of what happens to Bank of England base rates or market conditions. This provides certainty and predictability — you know exactly what you will pay each month for the entire term. Fixed rates are particularly valuable in the current economic climate where interest rates have been volatile.",
  },
  {
    question: "Is HP better for high-mileage Range Rover drivers?",
    answer:
      "Yes, HP is the clear choice for drivers who cover high mileage. PCP agreements include annual mileage limits, and exceeding these results in excess mileage charges of up to 15p per mile. If you regularly exceed 15,000 miles per year, HP removes this concern entirely. There are no mileage limits, no excess charges, and no end-of-term inspection of the vehicle's condition.",
  },
  {
    question: "Can I settle my Range Rover HP agreement early?",
    answer:
      "Yes, you can settle an HP agreement at any time by paying the outstanding balance. The finance company will provide a settlement figure, which includes the remaining capital and any accrued interest, minus a rebate for early settlement as required under the Consumer Credit Act. Early settlement can be worthwhile if you want to sell the vehicle privately or part-exchange it before the agreement ends.",
  },
];

export default function HPFinancePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "HP Finance", url: "https://www.rangeroverfinance.co.uk/hp-finance" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "HP Finance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Range Rover HP Finance
              <span className="block text-sand mt-2">Own Your Vehicle Outright</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Hire Purchase is the simplest route to Range Rover ownership. Fixed monthly payments, no balloon
              payment at the end, no mileage limits, and the vehicle is yours once the final payment is made.
              Straightforward, transparent, and designed for those who want to keep their vehicle long-term.
            </p>
          </div>
        </div>
      </section>

      {/* How HP Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            How Hire Purchase Works for Range Rovers
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              Hire Purchase is the oldest and most straightforward form of vehicle finance available in the UK. Its
              simplicity is its greatest strength: you agree a purchase price, pay a deposit, and then spread the
              remaining balance over a fixed number of monthly payments. Once every payment has been made, the Range
              Rover becomes your property. There is no balloon payment, no guaranteed future value to worry about, and
              no complex end-of-term decisions. You simply pay, and then you own.
            </p>
            <p>
              The typical structure of a Range Rover HP agreement begins with a deposit, usually between 10% and 20%
              of the vehicle&apos;s price. The remaining balance is then divided across the chosen term — typically 24 to 60
              months — with a fixed interest rate applied. A small option-to-purchase fee, generally between {formatCurrency(100)} and
              {formatCurrency(200)}, is payable at the end to formally transfer ownership from the finance company to you.
              Every payment you make builds equity in the vehicle, unlike PCP where a significant portion of the value
              remains outstanding until the balloon payment.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              HP vs PCP: Understanding the Key Differences
            </h3>
            <p>
              The fundamental difference between HP and PCP comes down to one question: do you want to own the car at
              the end, or do you want the flexibility to walk away? With HP, every pound you pay goes towards purchasing
              the vehicle. With PCP, a substantial portion of the vehicle&apos;s value — the balloon payment — is deferred to
              the end of the agreement, resulting in lower monthly payments but no automatic ownership.
            </p>
            <p>
              For a concrete comparison, consider a Range Rover Sport at {formatCurrency(79500)}. On a 48-month PCP deal
              with a {formatCurrency(10000)} deposit and a GFV of approximately {formatCurrency(39750)}, your monthly payment
              would be around {formatCurrency(649)}. On HP with the same deposit and term, your monthly payment would be
              approximately {formatCurrency(1495)}. The HP payment is significantly higher, but at the end of 48 months,
              you own a vehicle that is likely still worth {formatCurrency(35000)} to {formatCurrency(45000)} on the open market.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Why Choose HP for Your Range Rover
            </h3>
            <p>
              There are several compelling scenarios where HP is the superior choice. If you plan to keep your Range
              Rover for more than four or five years, HP is almost always more cost-effective in the long run. Once the
              finance is paid off, you have no monthly obligation — you own a valuable asset free and clear. Many Range
              Rover owners keep their vehicles for seven to ten years, and the zero-payment years after HP completion
              represent significant savings compared to perpetually rolling PCP agreements.
            </p>
            <p>
              HP also eliminates the anxiety of mileage limits and condition requirements. Range Rover owners who use
              their vehicles for towing, off-road driving, long-distance commuting, or rural life can rack up substantial
              mileage and wear. On PCP, this would result in potentially significant excess mileage and condition charges
              at the end of the agreement. On HP, it simply does not matter. Drive as far as you like, take the Defender
              off-road every weekend, tow your horsebox across the country — there are no restrictions and no penalties.
            </p>
            <p>
              The freedom to modify your Range Rover is another significant HP advantage. Defender owners in particular
              often invest heavily in aftermarket modifications — snorkels, roof racks, off-road tyres, upgraded
              suspension, light bars, and more. PCP agreements restrict modifications because the finance company needs
              the vehicle returned in a specific condition. HP agreements, while technically retaining finance company
              ownership until the final payment, are generally far more permissive about tasteful modifications that do
              not diminish the vehicle&apos;s value.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Fixed Interest Rates and Payment Certainty
            </h3>
            <p>
              One of HP&apos;s most attractive features is its fixed interest rate. The APR agreed at the start of your
              agreement will not change for its entire duration. In an era of fluctuating interest rates, this provides
              genuine financial certainty. You know exactly what you will pay every month, for every month of the term.
              There are no variable elements, no surprises, and no renegotiation. This makes budgeting straightforward
              and eliminates the risk of payment increases.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Voluntary Termination Rights
            </h3>
            <p>
              The Consumer Credit Act 1974 provides important protections for HP customers. Under Section 99, you have
              the right to voluntarily terminate your agreement once you have paid at least 50% of the total amount
              payable (this includes the deposit, all monthly payments, and any fees). You return the vehicle in
              reasonable condition and your obligation ends. This is a valuable safety net if your financial circumstances
              change unexpectedly. However, given the high values of Range Rovers, reaching the 50% threshold can take
              some time — a larger initial deposit accelerates this.
            </p>
          </div>
        </div>
      </section>

      {/* HP Comparison Table */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Typical HP Payments by Model
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Compare estimated HP monthly payments across all Range Rover and Land Rover models. HP payments
              are higher than PCP, but you own the vehicle outright at the end.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-charcoal">Model</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Price From</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Deposit</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Monthly</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Term</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">APR</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {models.map((model, i) => (
                  <tr key={model.slug} className={i % 2 === 0 ? "bg-white" : "bg-cream/30"}>
                    <td className="px-6 py-4">
                      <Link href={`/${model.slug}`} className="text-sm font-semibold text-racing-green hover:underline">
                        {model.name}
                      </Link>
                    </td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.priceFrom)}</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.hpExample.deposit)}</td>
                    <td className="text-right px-6 py-4 text-sm font-semibold text-charcoal">{formatCurrency(model.hpExample.monthly)}/mo</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.hpExample.term} months</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.hpExample.apr}%</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.hpExample.totalCost)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate text-center">
            Figures shown are representative examples for illustration purposes only. Actual rates and payments will vary based on
            specification, options, credit profile and lender criteria.
          </p>
        </div>
      </section>

      {/* HP vs PCP Quick Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal text-center mb-12">
            HP vs PCP at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border-2 border-racing-green bg-cream/30">
              <h3 className="text-xl font-display text-racing-green mb-4">Hire Purchase (HP)</h3>
              <ul className="space-y-3 text-sm text-slate">
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Own the vehicle at the end</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>No mileage restrictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>No balloon payment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Freedom to modify the vehicle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Fixed interest rate throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate mt-0.5">&#10007;</span>
                  <span>Higher monthly payments</span>
                </li>
              </ul>
            </div>
            <div className="p-8 rounded-xl border border-gray-200">
              <h3 className="text-xl font-display text-charcoal mb-4">Personal Contract Purchase (PCP)</h3>
              <ul className="space-y-3 text-sm text-slate">
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Lower monthly payments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Flexibility at end of term</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-racing-green mt-0.5">&#10003;</span>
                  <span>Easy upgrade to new model</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate mt-0.5">&#10007;</span>
                  <span>Annual mileage limits apply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate mt-0.5">&#10007;</span>
                  <span>Condition charges may apply</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate mt-0.5">&#10007;</span>
                  <span>Large balloon to own outright</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              HP Finance Calculator
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Calculate your estimated HP monthly payments. Adjust the vehicle price, deposit, term and APR to
              see how hire purchase would work for your chosen Range Rover.
            </p>
          </div>
          <FinanceCalculator
            defaultPrice={79500}
            defaultDeposit={10000}
            defaultTerm={48}
            defaultApr={6.9}
            mode="hp"
            showModeToggle={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="HP Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Estimate Your HP Payments"
        description="Use our free calculator to compare HP monthly payments across different Range Rover models, deposits and terms."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
