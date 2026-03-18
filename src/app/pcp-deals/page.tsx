import type { Metadata } from "next";
import Link from "next/link";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { models, formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Range Rover PCP Deals | Personal Contract Purchase | Compare Offers",
  description:
    "Compare Range Rover PCP deals across all models. Understand how Personal Contract Purchase works, typical monthly payments, balloon payments and your options at the end of the agreement. Free calculator included.",
  openGraph: {
    title: "Range Rover PCP Deals | Personal Contract Purchase | Compare Offers",
    description:
      "Compare Range Rover PCP deals across all models. Understand how PCP works, balloon payments and your end-of-term options.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/pcp-deals",
  },
};

const faqs = [
  {
    question: "What does PCP stand for and how does it work?",
    answer:
      "PCP stands for Personal Contract Purchase. It is a form of vehicle finance where you pay a deposit, followed by fixed monthly payments over an agreed term (typically 24-48 months). At the end of the agreement, a large final payment called the Guaranteed Future Value (GFV) or balloon payment remains. You then choose whether to pay this amount to own the car, hand the car back with nothing further to pay, or part-exchange it towards a new vehicle.",
  },
  {
    question: "Why are PCP monthly payments lower than HP?",
    answer:
      "PCP payments are lower because you are not paying off the full value of the vehicle during the agreement. A significant portion of the cost — the balloon or GFV — is deferred to the end of the term. You are essentially paying for the depreciation of the vehicle plus interest, rather than the entire purchase price. For Range Rovers, which hold their value well, this means the GFV is relatively high and monthly payments are correspondingly lower.",
  },
  {
    question: "What is the Guaranteed Future Value (GFV)?",
    answer:
      "The Guaranteed Future Value is the amount the finance company predicts your Range Rover will be worth at the end of the PCP agreement. It is set at the start of the contract and will not change, regardless of market conditions. The GFV is based on the model, specification, agreed mileage limit and term length. If the car is worth more than the GFV at the end, you have equity that can be used as a deposit on your next vehicle.",
  },
  {
    question: "What happens if I exceed the mileage limit on my PCP deal?",
    answer:
      "If you exceed the agreed annual mileage limit, you will be charged an excess mileage fee for every mile over the limit when you hand the car back. Typical charges range from 5p to 15p per mile for Range Rover models. On a 48-month agreement, exceeding by 5,000 miles per year at 10p per mile would cost an additional 2,000. You can avoid this charge by paying the balloon payment to keep the car, or by negotiating a higher mileage limit at the start of the agreement.",
  },
  {
    question: "Can I end my PCP agreement early?",
    answer:
      "Yes, you have the legal right to voluntarily terminate a PCP agreement once you have paid at least 50% of the total amount payable (including the balloon payment). You return the vehicle in reasonable condition and owe nothing further. Alternatively, you can settle the agreement early by paying the outstanding balance, which may be worthwhile if the car is worth more than the settlement figure. Always check your specific agreement terms.",
  },
  {
    question: "Do I own the car during a PCP agreement?",
    answer:
      "No, the finance company owns the vehicle throughout the PCP agreement. You are the registered keeper and are responsible for insurance, maintenance and road tax, but legal ownership only transfers to you if you make the final balloon payment at the end of the term. This means you cannot sell or modify the vehicle without the finance company's permission.",
  },
  {
    question: "What condition does the car need to be in when I hand it back?",
    answer:
      "The vehicle must be in fair wear and tear condition as defined by the BVRLA (British Vehicle Rental and Leasing Association) guidelines. This allows for minor scuffs, small stone chips and light interior wear consistent with the vehicle's age and mileage. Anything beyond fair wear and tear — such as dents, significant scratches, damaged alloy wheels or interior staining — will incur refurbishment charges. It is worth having the vehicle inspected before the end of the agreement so you can address any issues in advance.",
  },
  {
    question: "Is PCP a good idea for a Range Rover specifically?",
    answer:
      "PCP is particularly well suited to Range Rovers for several reasons. First, Range Rovers hold their value strongly, which means the GFV is high and monthly payments are lower. Second, many Range Rover buyers prefer to change vehicles every few years, and PCP makes this simple by allowing you to hand back and upgrade. Third, the high purchase price of Range Rovers means the difference between PCP and HP monthly payments can be substantial — often several hundred pounds per month — making PCP a much more accessible route to ownership.",
  },
];

export default function PCPDealsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "PCP Deals", url: "https://www.rangeroverfinance.co.uk/pcp-deals" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "PCP Deals" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Range Rover PCP Deals
              <span className="block text-sand mt-2">Personal Contract Purchase</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              PCP is the most popular way to finance a Range Rover. Lower monthly payments, flexibility at the
              end of the term, and the option to upgrade every few years make it the preferred choice for the
              majority of Range Rover buyers in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* How PCP Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            How PCP Finance Works for Range Rovers
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              Personal Contract Purchase, universally known as PCP, has become the dominant form of vehicle finance in
              the UK — and for good reason. It offers the lowest monthly payments of any ownership-based finance product,
              combined with genuine flexibility at the end of the agreement. For premium vehicles like the Range Rover,
              where purchase prices routinely exceed six figures, PCP makes luxury motoring accessible to a far wider
              audience than traditional hire purchase or outright cash purchase ever could.
            </p>
            <p>
              The structure of a PCP agreement is straightforward, though it differs from HP in one critical respect.
              You begin by paying an initial deposit — typically between 10% and 20% of the vehicle&apos;s on-the-road price,
              though some promotional deals may require less. You then make fixed monthly payments over an agreed term,
              most commonly 24, 36 or 48 months. Here is where PCP diverges from HP: at the end of the agreement, a
              large final payment remains. This is known as the Guaranteed Future Value (GFV), sometimes called the
              balloon payment. The GFV represents the predicted value of your Range Rover at the end of the term,
              and it is fixed at the outset of the agreement.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Why PCP Is Particularly Attractive for Range Rovers
            </h3>
            <p>
              The economics of PCP are heavily influenced by residual values — the amount a vehicle is expected to be
              worth at the end of the finance term. Range Rovers are renowned for their strong residual value retention.
              The flagship Range Rover typically holds between 50% and 60% of its value after three years, while the
              Defender can retain even more, with some special editions actually appreciating. This strong residual
              performance means the GFV on a Range Rover PCP deal is proportionally higher than on many competitor
              vehicles, which directly translates into lower monthly payments.
            </p>
            <p>
              To illustrate: on a Range Rover with an on-the-road price of {formatCurrency(105000)}, a 48-month PCP deal
              with a {formatCurrency(15000)} deposit and a GFV set at 50% of the vehicle price ({formatCurrency(52500)})
              means you are only financing around {formatCurrency(37500)} over four years, plus interest. Compare this to
              HP, where you would need to finance the full {formatCurrency(90000)} balance, and the difference in monthly
              payments becomes stark — often {formatCurrency(800)} to {formatCurrency(1000)} per month less on PCP.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              The Three Options at the End of Your PCP Agreement
            </h3>
            <p>
              When your PCP agreement reaches its natural conclusion, you have three clearly defined options. This
              flexibility is one of PCP&apos;s greatest strengths and a key reason it appeals to Range Rover buyers who
              value choice.
            </p>
            <p>
              <strong>Option 1: Hand the car back.</strong> If you simply want to walk away, you can return the Range
              Rover to the finance company with nothing further to pay — provided the vehicle is within its agreed
              mileage limit and in fair wear and tear condition. This is the simplest option and suits those who want
              to move on to a different vehicle or simply no longer need one.
            </p>
            <p>
              <strong>Option 2: Part-exchange for a new model.</strong> This is the most popular option among Range
              Rover PCP customers. If your vehicle is worth more than the GFV at the end of the agreement — which is
              common given Range Rover&apos;s strong residuals — the difference represents equity. This equity can be used
              as a deposit towards a new PCP agreement on the latest model. Many Range Rover owners roll from one PCP
              deal to the next, effectively upgrading their vehicle every three to four years whilst maintaining
              consistent monthly payments.
            </p>
            <p>
              <strong>Option 3: Pay the balloon and own the car.</strong> If you have grown attached to your Range Rover
              and wish to keep it, you can pay the GFV — either from savings, by refinancing, or through a separate
              personal loan — and the vehicle becomes yours outright. This option is worth considering if the GFV is
              lower than the car&apos;s actual market value, as you would be purchasing the vehicle at below its true worth.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Mileage Limits and Condition Requirements
            </h3>
            <p>
              Every PCP agreement includes an annual mileage allowance, typically set at 8,000, 10,000, 12,000 or
              15,000 miles per year. This is a critical consideration when setting up your agreement, because exceeding
              the limit will result in excess mileage charges when you hand the car back. For Range Rover models, these
              charges typically range from 7.5p to 15p per excess mile. On a 48-month agreement, underestimating your
              annual mileage by just 3,000 miles would result in 12,000 excess miles and a potential charge of up to
              {formatCurrency(1800)}.
            </p>
            <p>
              The condition of the vehicle is equally important if you intend to hand it back. The industry standard
              is the BVRLA fair wear and tear guide, which permits minor cosmetic imperfections consistent with normal
              use. Anything beyond this — kerbed alloy wheels, car park dents, interior damage — will attract
              refurbishment charges. Range Rover alloy wheels are particularly expensive to refurbish, so alloy
              wheel insurance is a worthwhile consideration during the PCP term.
            </p>
          </div>
        </div>
      </section>

      {/* PCP Comparison Table */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Typical PCP Payments by Model
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Compare estimated PCP monthly payments across the full Range Rover and Land Rover lineup.
              All figures are based on representative examples.
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
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Balloon (GFV)</th>
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
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.pcpExample.deposit)}</td>
                    <td className="text-right px-6 py-4 text-sm font-semibold text-charcoal">{formatCurrency(model.pcpExample.monthly)}/mo</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.pcpExample.term} months</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.pcpExample.apr}%</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.pcpExample.balloon)}</td>
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

      {/* Calculator */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              PCP Finance Calculator
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Adjust the vehicle price, deposit, term, APR and balloon percentage to see your estimated PCP
              monthly payment. The calculator is pre-set to PCP mode for your convenience.
            </p>
          </div>
          <FinanceCalculator
            defaultPrice={79500}
            defaultDeposit={10000}
            defaultTerm={48}
            defaultApr={6.9}
            defaultBalloonPercent={45}
            mode="pcp"
            showModeToggle={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="PCP Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Estimate Your PCP Payments"
        description="Use our free calculator to compare PCP monthly payments across different Range Rover models, deposits and terms."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
