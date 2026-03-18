import type { Metadata } from "next";
import Link from "next/link";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { models, formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Range Rover Lease Deals | Personal Contract Hire | Business Lease",
  description:
    "Compare Range Rover lease deals including personal and business contract hire. Fixed monthly rentals, road tax included, no depreciation risk. Explore PCH and BCH options across all models.",
  openGraph: {
    title: "Range Rover Lease Deals | Personal Contract Hire | Business Lease",
    description:
      "Compare Range Rover lease deals. Fixed monthly rentals, road tax included, no depreciation risk. Personal and business contract hire options.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/lease-deals",
  },
};

const faqs = [
  {
    question: "What is the difference between PCH and BCH?",
    answer:
      "PCH (Personal Contract Hire) is a lease agreement for private individuals, while BCH (Business Contract Hire) is for businesses, sole traders and partnerships. The key difference is tax treatment: businesses can typically reclaim 50% of the VAT on lease rentals (100% if the vehicle is used exclusively for business) and offset the full rental cost against corporation tax or income tax. PCH payments include VAT and are paid from post-tax income with no tax relief available.",
  },
  {
    question: "What does the initial rental cover on a Range Rover lease?",
    answer:
      "The initial rental is an upfront payment made at the start of the lease, typically equivalent to 3, 6 or 9 monthly payments. It is not a deposit in the traditional sense — you will not get it back at the end of the agreement. A higher initial rental reduces your monthly payments for the remainder of the term. For example, a 6-month initial rental on a Range Rover Sport lease might be around 7,800, reducing monthly payments by approximately 200 compared to a 3-month initial rental.",
  },
  {
    question: "Is road tax included in a Range Rover lease?",
    answer:
      "Yes, road tax (Vehicle Excise Duty) is included in lease agreements for the duration of the contract. This is a meaningful benefit on Range Rover models, where the first-year road tax on vehicles costing over 40,000 can be substantial. The lease company handles the road tax administration and cost throughout the agreement, simplifying your ownership experience.",
  },
  {
    question: "What happens at the end of a Range Rover lease?",
    answer:
      "At the end of the lease, you simply return the vehicle. There is no option to purchase it (unlike PCP) and no balloon payment. The vehicle must be within the agreed mileage limit and in fair wear and tear condition as defined by BVRLA guidelines. If these conditions are met, you hand back the keys and walk away — or start a new lease on the latest model.",
  },
  {
    question: "Can I claim VAT back on a Range Rover business lease?",
    answer:
      "If you are VAT-registered and the vehicle is used for business purposes, you can typically reclaim 50% of the VAT on lease rentals. If the vehicle is used exclusively for business with no private use whatsoever, you may be able to reclaim 100% of the VAT. However, HMRC scrutinises these claims carefully, and any personal use — including commuting — means only 50% recovery. Always consult your accountant for advice specific to your situation.",
  },
  {
    question: "What mileage options are available on Range Rover leases?",
    answer:
      "Most lease providers offer annual mileage options ranging from 5,000 to 30,000 miles per year, in increments of 5,000. The most common choices are 8,000, 10,000 and 15,000 miles per year. Higher mileage allowances increase the monthly rental because the vehicle will depreciate more. Excess mileage charges typically range from 5p to 15p per mile, so it is important to estimate your mileage accurately at the outset.",
  },
  {
    question: "Can I add a maintenance package to my Range Rover lease?",
    answer:
      "Yes, many lease providers offer optional maintenance packages that cover servicing, routine maintenance, tyre replacement and roadside assistance. These packages add a fixed amount to your monthly rental and provide complete cost certainty. For Range Rovers, where service and maintenance costs can be significant, a maintenance package can be a sensible addition — particularly on a business lease where the full cost is tax-deductible.",
  },
  {
    question: "Is leasing better than PCP for a Range Rover?",
    answer:
      "Leasing can be more cost-effective than PCP if you have no interest in owning the vehicle and simply want the lowest fixed monthly cost to drive a new Range Rover. Business users benefit most from leasing due to the VAT and tax advantages. However, PCP offers more flexibility — you can buy the car at the end, build equity through part-exchange, or hand it back. Leasing gives you no ownership rights and no equity, so it depends on whether cost certainty or flexibility matters more to you.",
  },
];

export default function LeaseDealsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Lease Deals", url: "https://www.rangeroverfinance.co.uk/lease-deals" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "Lease Deals" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Range Rover Lease Deals
              <span className="block text-sand mt-2">Personal &amp; Business Contract Hire</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Leasing offers the simplest way to drive a new Range Rover. Fixed monthly rentals, road tax
              included, no depreciation risk, and significant tax advantages for business users. Simply drive,
              enjoy, and return when the agreement ends.
            </p>
          </div>
        </div>
      </section>

      {/* How Leasing Works */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            How Range Rover Leasing Works
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              Leasing — formally known as contract hire — is fundamentally different from PCP and HP finance.
              With a lease, you are paying for the use of the vehicle over an agreed period, not paying towards
              ownership. At no point during or at the end of the agreement do you have any ownership stake in the
              vehicle. You are, in essence, renting the Range Rover on a long-term basis with fixed monthly
              payments and defined terms. For many drivers — particularly business users — this simplicity and
              cost predictability make leasing the most attractive option.
            </p>
            <p>
              A typical Range Rover lease begins with an initial rental, usually expressed as a multiple of the
              monthly payment. The most common structures are 3+47 (three months&apos; initial rental followed by 47
              monthly payments on a 48-month term), 6+47 (six months upfront), or 9+47 (nine months upfront). A
              higher initial rental reduces your monthly payments for the remainder of the agreement, but does tie
              up more capital upfront. Unlike a deposit on PCP or HP, the initial rental is a non-refundable
              payment — you will not receive it back at the end of the lease.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Personal Contract Hire (PCH) vs Business Contract Hire (BCH)
            </h3>
            <p>
              The two forms of contract hire differ primarily in their tax treatment. Personal Contract Hire (PCH)
              is available to private individuals and carries no specific tax advantages. All payments are made
              from post-tax income, and the monthly figures quoted include VAT. It appeals to those who want the
              simplicity of fixed monthly motoring costs without the complications of ownership, depreciation risk,
              or balloon payments.
            </p>
            <p>
              Business Contract Hire (BCH) is available to limited companies, sole traders, partnerships, and
              other business entities. It offers substantial tax advantages that can significantly reduce the
              effective cost of running a Range Rover. VAT-registered businesses can typically reclaim 50% of the
              VAT on lease rentals — or 100% if the vehicle is used exclusively for business with no private use
              whatsoever. The full lease rental (excluding the disallowed portion for cars with CO2 emissions above
              50g/km) can be offset against corporation tax or income tax as a legitimate business expense.
            </p>
            <p>
              For a Range Rover Sport on a business lease at {formatCurrency(1298)} per month plus VAT, a
              VAT-registered company reclaiming 50% of the VAT would effectively pay around {formatCurrency(1168)}
              per month. The full rental amount can then be set against taxable profits, providing further tax relief
              at the company&apos;s marginal tax rate. For a company paying 25% corporation tax, this represents an
              additional saving of approximately {formatCurrency(292)} per month in reduced tax liability — bringing
              the effective net cost down to around {formatCurrency(876)} per month.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              What Is Included in a Range Rover Lease
            </h3>
            <p>
              One of the advantages of leasing is the simplicity of the package. Your monthly rental covers the
              use of the vehicle, and road tax (Vehicle Excise Duty) is included for the duration of the agreement.
              This is a meaningful benefit on Range Rover models, where the annual road tax on vehicles with a
              list price above {formatCurrency(40000)} includes a supplement that can add several hundred pounds per
              year. The lease company handles all road tax administration and renewal throughout the agreement.
            </p>
            <p>
              Many lease providers also offer optional maintenance packages. These add a fixed monthly amount to
              your rental and cover all scheduled servicing, routine maintenance, tyre replacement, and sometimes
              roadside assistance. For Range Rovers, where a major service can cost {formatCurrency(500)} to
              {formatCurrency(800)} and a set of premium tyres can exceed {formatCurrency(1200)}, a maintenance
              package provides welcome cost certainty. On a business lease, the maintenance package cost is fully
              tax-deductible alongside the rental.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Benefit in Kind for Company Car Drivers
            </h3>
            <p>
              If a company provides a leased Range Rover to an employee for personal use, the employee will pay
              Benefit in Kind (BIK) tax. The BIK rate is determined by the vehicle&apos;s CO2 emissions and P11D value
              (its list price including options but excluding road tax and first registration fee). For traditional
              petrol and diesel Range Rovers, BIK rates can be as high as 37%, resulting in significant monthly
              tax charges for higher-rate taxpayers.
            </p>
            <p>
              This is where Plug-in Hybrid Electric Vehicle (PHEV) models become particularly compelling. The
              Range Rover P460e and P510e, Range Rover Sport P510e, and Evoque P300e all qualify for substantially
              lower BIK rates — typically 5% to 8% — due to their low CO2 emissions and electric range. For a
              40% taxpayer, the difference between a petrol Range Rover Sport (BIK at 37%) and a PHEV (BIK at 5%)
              can be over {formatCurrency(500)} per month in tax savings alone. This makes PHEV models the
              overwhelmingly popular choice for company car drivers.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Lease vs PCP: Which Is Right for You?
            </h3>
            <p>
              Both lease and PCP offer similar monthly payment structures with no automatic ownership at the end.
              However, there are important distinctions. PCP gives you the option to buy the vehicle at the end by
              paying the balloon payment — leasing does not. PCP can build equity if the car is worth more than
              the GFV — leasing never builds equity. Leasing typically includes road tax — PCP does not. Business
              lease offers VAT recovery and full tax deductibility — PCP offers neither.
            </p>
            <p>
              For private individuals who want flexibility and the possibility of ownership, PCP is usually the
              better choice. For businesses seeking maximum tax efficiency and cost certainty, business contract
              hire is typically the superior option. The right choice depends entirely on your personal or
              business circumstances. Use our calculator to compare both options side by side.
            </p>
          </div>
        </div>
      </section>

      {/* Lease Comparison Table */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Typical Lease Payments by Model
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Compare estimated personal lease (PCH) monthly payments across the full Range Rover and Land Rover
              lineup. Business lease (BCH) payments exclude VAT.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-charcoal">Model</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Price From</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Initial Rental</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Monthly</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Term</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">Annual Miles</th>
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
                    <td className="text-right px-6 py-4 text-sm text-slate">{formatCurrency(model.leaseExample.initialRental)}</td>
                    <td className="text-right px-6 py-4 text-sm font-semibold text-charcoal">{formatCurrency(model.leaseExample.monthly)}/mo</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.leaseExample.term} months</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{model.leaseExample.annualMileage.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate text-center">
            Figures shown are representative personal lease (PCH) examples including VAT. Business lease (BCH) prices
            exclude VAT. Actual rates and payments will vary based on specification, mileage and term.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Lease Payment Calculator
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto leading-relaxed">
              Estimate your monthly lease payment by adjusting the vehicle price, term, APR and annual mileage.
              The calculator provides personal lease estimates including VAT.
            </p>
          </div>
          <FinanceCalculator
            defaultPrice={79500}
            defaultDeposit={0}
            defaultTerm={48}
            defaultApr={6.9}
            mode="lease"
            showModeToggle={false}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Lease Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Estimate Your Lease Payments"
        description="Use our free calculator to compare lease monthly payments across different Range Rover models and terms."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
