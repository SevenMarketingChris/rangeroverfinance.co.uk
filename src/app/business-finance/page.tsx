import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Range Rover Business Finance | Company Car | Business Lease & Contract Hire",
  description:
    "Explore Range Rover business finance options including business contract hire, business PCP, and outright purchase. Understand VAT recovery, corporation tax deductions, BIK rates, and why PHEV models offer significant tax advantages for company car drivers.",
  openGraph: {
    title: "Range Rover Business Finance | Company Car | Business Lease & Contract Hire",
    description:
      "Range Rover business finance: BCH, business PCP, VAT recovery, BIK rates, and PHEV tax advantages for company car drivers.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/business-finance",
  },
};

const bikComparisonData = [
  {
    model: "Range Rover P530 V8 (Petrol)",
    co2: "277 g/km",
    bikRate: "37%",
    p11d: "£126,000",
    annualBik20: "£9,324",
    annualBik40: "£18,648",
    monthlyBik40: "£1,554",
  },
  {
    model: "Range Rover P460e PHEV",
    co2: "18 g/km",
    bikRate: "5%",
    p11d: "£116,000",
    annualBik20: "£1,160",
    annualBik40: "£2,320",
    monthlyBik40: "£193",
  },
  {
    model: "RR Sport P530 V8 (Petrol)",
    co2: "243 g/km",
    bikRate: "37%",
    p11d: "£98,000",
    annualBik20: "£7,252",
    annualBik40: "£14,504",
    monthlyBik40: "£1,209",
  },
  {
    model: "RR Sport P510e PHEV",
    co2: "18 g/km",
    bikRate: "5%",
    p11d: "£89,000",
    annualBik20: "£890",
    annualBik40: "£1,780",
    monthlyBik40: "£148",
  },
  {
    model: "Evoque P250 (Petrol)",
    co2: "182 g/km",
    bikRate: "37%",
    p11d: "£44,000",
    annualBik20: "£3,256",
    annualBik40: "£6,512",
    monthlyBik40: "£543",
  },
  {
    model: "Evoque P300e PHEV",
    co2: "32 g/km",
    bikRate: "8%",
    p11d: "£47,000",
    annualBik20: "£752",
    annualBik40: "£1,504",
    monthlyBik40: "£125",
  },
  {
    model: "Defender P400e PHEV",
    co2: "28 g/km",
    bikRate: "8%",
    p11d: "£72,000",
    annualBik20: "£1,152",
    annualBik40: "£2,304",
    monthlyBik40: "£192",
  },
];

const faqs = [
  {
    question: "What is the most tax-efficient way to run a Range Rover through my business?",
    answer:
      "For most businesses, a business contract hire (BCH) on a PHEV model offers the best tax efficiency. The lease rentals are fully deductible against corporation tax (no disallowance for low-emission vehicles), VAT-registered businesses can reclaim 50% of the VAT on rentals, and the employee driving it pays minimal BIK tax due to the low CO2 emissions. For a Range Rover PHEV with BIK at 5%, a 40% taxpayer would pay as little as 193 pounds per month in BIK tax — compared to over 1,500 per month for a V8 petrol model.",
  },
  {
    question: "Can I claim back VAT on a Range Rover business lease?",
    answer:
      "If your business is VAT-registered, you can typically reclaim 50% of the VAT on business contract hire rentals. If the vehicle is used exclusively for business with absolutely no private use (including commuting), you may reclaim 100% of the VAT — though HMRC scrutinises such claims carefully. On a Range Rover Sport business lease at 1,298 plus VAT per month, 50% VAT recovery would save approximately 130 per month. Consult your accountant for advice specific to your circumstances.",
  },
  {
    question: "How does corporation tax relief work on a Range Rover?",
    answer:
      "Business contract hire rentals can be offset against taxable profits as a business expense. For vehicles with CO2 emissions of 50g/km or less (all PHEV models), 100% of the rental is deductible. For vehicles exceeding 50g/km, only 85% of the rental is deductible — the remaining 15% is disallowed. At the current 25% corporation tax rate, full deductibility on a 1,200 per month lease saves the business 300 per month in reduced tax. This is another reason PHEV models are overwhelmingly popular for business use.",
  },
  {
    question: "What is Benefit in Kind (BIK) and how does it apply to Range Rovers?",
    answer:
      "BIK is the tax charge levied on employees who receive non-cash benefits from their employer, such as a company car. The BIK amount is calculated by multiplying the vehicle's P11D value by its BIK rate (determined by CO2 emissions), then multiplying by your marginal tax rate. For a Range Rover P460e PHEV with a P11D of 116,000 and BIK rate of 5%, a 40% taxpayer would pay 2,320 per year in BIK tax. The same taxpayer in a petrol V8 with BIK at 37% would pay 18,648 per year — a difference of over 16,000 annually.",
  },
  {
    question: "Is it better to buy a Range Rover outright through my company or lease it?",
    answer:
      "Outright purchase through a company offers different tax advantages: capital allowances (100% first-year for zero/low emission vehicles, or writing down allowances for others) and no ongoing lease payments. However, it ties up significant capital, the company bears all depreciation risk, and the tax treatment of disposal must be considered. Leasing preserves cash flow, provides predictable costs, allows VAT recovery on rentals, and offers full tax deductibility for low-emission vehicles. For most businesses, leasing a Range Rover is more tax-efficient and less capital-intensive than outright purchase.",
  },
  {
    question: "Can I get a Range Rover through a salary sacrifice scheme?",
    answer:
      "Yes, salary sacrifice schemes for company cars have become increasingly popular, particularly for PHEV and electric vehicles. The employee sacrifices a portion of gross salary in exchange for the company providing the vehicle. The tax advantage arises because the BIK charge on a low-emission vehicle (5-8% for PHEVs) is typically much lower than the income tax and National Insurance that would have been paid on the sacrificed salary. For a Range Rover PHEV, salary sacrifice can reduce the effective monthly cost significantly compared to funding the same vehicle personally.",
  },
  {
    question: "What is the difference between sole trader and limited company Range Rover finance?",
    answer:
      "Sole traders and limited companies access different finance products and tax treatments. A sole trader can claim mileage allowances or a proportion of actual running costs (including finance interest) against income tax, but cannot claim input VAT on purchase or hire unless purely for business use. A limited company can hold the vehicle as a company asset, claim capital allowances on purchase or full rental deductions on leases, and recover VAT on lease rentals. Limited companies typically have more favourable options for Range Rover finance, particularly through business contract hire.",
  },
  {
    question: "What are P11D values and why do they matter for Range Rover company cars?",
    answer:
      "The P11D value is the vehicle's list price including VAT, delivery charges and optional extras, but excluding the first year's road tax and the registration fee. It is the basis for calculating BIK tax. Range Rovers have high P11D values due to their premium pricing, which means BIK tax on petrol and diesel models can be very substantial. This is precisely why PHEV models — with their low BIK rates of 5-8% — are so important for company car drivers. The BIK rate effectively multiplies the P11D value, so a low rate on a high P11D value produces a far more manageable tax charge than a high rate.",
  },
];

export default function BusinessFinancePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Business Finance", url: "https://www.rangeroverfinance.co.uk/business-finance" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "Business Finance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Range Rover Business Finance
              <span className="block text-sand mt-2">Tax-Efficient Company Car Solutions</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              Running a Range Rover through your business can offer significant tax advantages — particularly
              with PHEV models. From business contract hire and corporate PCP to salary sacrifice and fleet
              deals, understand all the options available to business users.
            </p>
          </div>
        </div>
      </section>

      {/* Business Finance Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            Business Finance Options for Range Rovers
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              A Range Rover is more than a vehicle — for many business owners, directors and senior executives,
              it is a statement of success and a practical tool for business. Whether you are a sole trader
              needing a capable vehicle for rural client visits, a company director seeking a prestigious
              company car, or a fleet manager equipping senior staff, understanding the business finance
              landscape is essential to making a tax-efficient choice. The right finance structure can reduce
              the effective cost of running a Range Rover by thousands of pounds per year through VAT recovery,
              corporation tax deductions, and favourable Benefit in Kind rates.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Business Contract Hire (BCH)
            </h3>
            <p>
              Business Contract Hire is the most popular finance method for company Range Rovers, and for good
              reason. It combines the simplicity of leasing with substantial tax advantages for VAT-registered
              businesses. The structure mirrors personal contract hire: an initial rental (typically 3, 6 or 9
              monthly payments upfront), followed by fixed monthly payments over an agreed term, with the vehicle
              returned at the end. Road tax is included throughout.
            </p>
            <p>
              The tax advantages of BCH are threefold. First, VAT-registered businesses can reclaim 50% of the
              VAT on lease rentals as input VAT (100% if the vehicle is genuinely used exclusively for business
              with no private use whatsoever). Second, the lease rental payments are fully deductible against
              corporation tax or income tax as a business expense — with an important caveat: for vehicles with
              CO2 emissions above 50g/km, only 85% of the rental is deductible, with 15% permanently disallowed.
              For low-emission vehicles (50g/km or below, which includes all Range Rover PHEVs), 100% of the
              rental is deductible with no disallowance. Third, the business bears no depreciation risk — the
              vehicle is returned at the end of the agreement, and any shortfall in residual value is the leasing
              company&apos;s problem, not yours.
            </p>
            <p>
              To illustrate the combined tax benefit: a Range Rover Sport P510e PHEV on BCH at
              {formatCurrency(1100)} plus VAT ({formatCurrency(1320)} including VAT) per month. A
              VAT-registered business reclaims 50% of the VAT ({formatCurrency(110)} per month), bringing the
              effective cost to {formatCurrency(1210)}. The full {formatCurrency(1320)} rental is deductible
              against corporation tax at 25%, saving {formatCurrency(330)} per month. The net effective cost
              is approximately {formatCurrency(880)} per month — a substantial reduction from the headline figure.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Business PCP (Personal Contract Purchase)
            </h3>
            <p>
              Business PCP operates identically to personal PCP — deposit, fixed monthly payments, and a balloon
              (GFV) at the end — but is taken out in the company&apos;s name. The tax treatment differs from BCH:
              there is no VAT recovery on PCP rental payments, and the capital cost is treated differently for
              tax purposes (capital allowances rather than rental deductions). However, business PCP offers the
              flexibility to purchase the vehicle at the end by paying the balloon, which can be advantageous
              if the car has appreciated or if the director wishes to retain it.
            </p>
            <p>
              For most businesses, BCH is more tax-efficient than business PCP unless there is a specific
              intention to purchase the vehicle at the end of the term. The inability to reclaim VAT on PCP
              payments is a significant disadvantage compared to BCH, particularly on a high-value Range Rover
              where the VAT element is substantial.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Outright Purchase Through the Company
            </h3>
            <p>
              Purchasing a Range Rover outright through a limited company is another option, though it ties up
              significant capital. The key tax consideration is capital allowances. For vehicles with CO2
              emissions of 0g/km (fully electric — not currently applicable to Range Rovers), 100% of the cost
              can be claimed as a first-year capital allowance. For vehicles with emissions between 1 and 50g/km
              (PHEVs), the cost goes into the main pool and qualifies for 18% writing down allowance per year.
              For vehicles above 50g/km, the cost goes into the special rate pool at just 6% writing down
              allowance per year.
            </p>
            <p>
              VAT-registered businesses can reclaim 100% of the VAT on purchase if the vehicle is used
              exclusively for business — but this is exceptionally rare for cars (as opposed to vans) and
              HMRC will challenge any private use. In practice, most businesses cannot reclaim VAT on the
              purchase of a Range Rover. When the vehicle is eventually sold, the proceeds are treated as a
              balancing charge, which can create a tax liability. For these reasons, outright purchase is
              usually less tax-efficient than leasing for Range Rovers.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Benefit in Kind: Why PHEV Models Are Essential for Company Cars
            </h3>
            <p>
              Benefit in Kind (BIK) tax is the single most important consideration for anyone receiving a Range
              Rover as a company car. The BIK charge is calculated by multiplying the vehicle&apos;s P11D value
              (list price including VAT and options, excluding road tax and registration fee) by the BIK
              percentage rate (determined by CO2 emissions), and then applying the employee&apos;s marginal income
              tax rate.
            </p>
            <p>
              For the 2025/26 tax year, BIK rates for vehicles emitting 1-50g/km with an electric range of
              over 130 miles start at just 3-5%. Traditional petrol and diesel Range Rovers, with CO2 emissions
              typically between 180 and 280g/km, attract the maximum BIK rate of 37%. The financial impact
              of this difference is dramatic.
            </p>
            <p>
              Consider a 40% taxpayer choosing between a Range Rover P530 V8 (petrol, 277g/km CO2,
              P11D {formatCurrency(126000)}) and a Range Rover P460e PHEV (18g/km CO2, P11D {formatCurrency(116000)}).
              The V8 attracts BIK at 37%, producing an annual tax charge of {formatCurrency(18648)} — that is
              {formatCurrency(1554)} per month in additional income tax, simply for having the use of the car.
              The PHEV attracts BIK at just 5%, producing an annual tax charge of {formatCurrency(2320)} — just
              {formatCurrency(193)} per month. The annual saving of over {formatCurrency(16000)} makes the PHEV
              the overwhelmingly rational choice for company car drivers, regardless of personal preference for
              the V8&apos;s character.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Salary Sacrifice Schemes
            </h3>
            <p>
              Salary sacrifice has emerged as an increasingly popular route to Range Rover ownership for
              employees of larger organisations. Under a salary sacrifice arrangement, the employee agrees to
              reduce their gross salary by a specified amount each month, and in return, the employer provides
              the vehicle (typically through a lease arrangement). The employee pays BIK tax on the vehicle,
              but saves income tax and National Insurance on the sacrificed salary.
            </p>
            <p>
              For PHEV models with low BIK rates, the tax saving through salary sacrifice can be substantial.
              A 40% taxpayer sacrificing {formatCurrency(1200)} per month of gross salary would normally lose
              {formatCurrency(480)} in income tax and approximately {formatCurrency(24)} in National Insurance
              (above the UEL) — a total deduction of {formatCurrency(504)}. Their net salary reduction is
              {formatCurrency(696)} per month. Against this, they pay BIK tax of around {formatCurrency(193)}
              per month on a Range Rover PHEV. The effective monthly cost — {formatCurrency(696)} net salary
              reduction plus {formatCurrency(193)} BIK tax — totals approximately {formatCurrency(889)} for a
              vehicle that would cost significantly more if funded personally through post-tax income.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Sole Trader vs Limited Company
            </h3>
            <p>
              The business structure you operate through significantly affects the tax treatment of a Range Rover.
              Sole traders can claim a proportion of actual running costs (fuel, insurance, servicing, and finance
              charges) against income tax, based on the percentage of business use. Alternatively, they can claim
              the simplified HMRC mileage rate (45p per mile for the first 10,000 miles, 25p thereafter) —
              though this is rarely advantageous for a Range Rover given the high actual costs involved.
            </p>
            <p>
              Limited companies have access to the full range of business finance products — BCH, business PCP,
              outright purchase — with corresponding tax reliefs including VAT recovery on lease rentals,
              corporation tax deductions, and capital allowances. The company can also provide the vehicle to
              a director or employee as a company car (subject to BIK), which is where the PHEV advantage
              becomes most valuable. For Range Rover business finance, a limited company structure generally
              offers superior tax efficiency compared to sole trader status.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Fleet Deals and Volume Discounts
            </h3>
            <p>
              Businesses ordering multiple Range Rovers or Land Rovers may qualify for fleet pricing, which
              can offer meaningful discounts on list prices. JLR operates a dedicated fleet and business sales
              division that works with businesses of all sizes. Fleet discounts are typically negotiated based
              on volume commitment and may be combined with business finance offers for further savings. Even
              businesses ordering as few as three to five vehicles per year may be able to negotiate improved
              terms through the fleet channel.
            </p>
          </div>
        </div>
      </section>

      {/* BIK Comparison Table */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              BIK Tax Comparison: PHEV vs Petrol
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              See the dramatic difference in Benefit in Kind tax between PHEV and traditional petrol
              Range Rover models. PHEV savings can exceed {formatCurrency(16000)} per year for higher-rate taxpayers.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-4 py-4 text-sm font-semibold text-charcoal">Model</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">CO2</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">BIK Rate</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">P11D Value</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">Annual BIK (20%)</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">Annual BIK (40%)</th>
                  <th className="text-right px-4 py-4 text-sm font-semibold text-charcoal">Monthly (40%)</th>
                </tr>
              </thead>
              <tbody>
                {bikComparisonData.map((row, i) => (
                  <tr
                    key={row.model}
                    className={`${i % 2 === 0 ? "bg-white" : "bg-cream/30"} ${
                      row.bikRate === "5%" || row.bikRate === "8%" ? "text-racing-green" : ""
                    }`}
                  >
                    <td className="px-4 py-4 text-sm font-semibold">{row.model}</td>
                    <td className="text-right px-4 py-4 text-sm">{row.co2}</td>
                    <td className="text-right px-4 py-4 text-sm font-semibold">{row.bikRate}</td>
                    <td className="text-right px-4 py-4 text-sm">{row.p11d}</td>
                    <td className="text-right px-4 py-4 text-sm">{row.annualBik20}</td>
                    <td className="text-right px-4 py-4 text-sm">{row.annualBik40}</td>
                    <td className="text-right px-4 py-4 text-sm font-semibold">{row.monthlyBik40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate text-center">
            BIK rates shown are for the 2025/26 tax year. P11D values and CO2 figures are representative and may vary
            by specification. PHEV rows are highlighted. Consult your accountant for personalised tax advice.
          </p>
        </div>
      </section>

      {/* Business Benefits Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal text-center mb-12">
            Key Tax Advantages at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "VAT Recovery on Lease",
                description:
                  "Reclaim 50% of VAT on business contract hire rentals (100% if no private use). On a flagship Range Rover lease, this can save over 150 per month.",
              },
              {
                title: "Corporation Tax Relief",
                description:
                  "100% of lease rentals deductible for vehicles with CO2 under 50g/km. At 25% corporation tax, this effectively reduces the cost of the lease by a quarter.",
              },
              {
                title: "Low BIK on PHEVs",
                description:
                  "PHEV models attract BIK rates of just 5-8%, versus 37% for petrol and diesel. Annual tax savings can exceed 16,000 for 40% taxpayers.",
              },
              {
                title: "No Depreciation Risk",
                description:
                  "Business contract hire eliminates depreciation risk entirely. The vehicle is returned at the end of the agreement — residual value fluctuations are the leasing company's concern.",
              },
              {
                title: "Salary Sacrifice Savings",
                description:
                  "Employees can access a Range Rover PHEV through salary sacrifice, saving income tax and National Insurance on the sacrificed salary while paying minimal BIK.",
              },
              {
                title: "Fleet Pricing Available",
                description:
                  "Businesses ordering multiple vehicles may access preferential fleet pricing from JLR, which can be combined with competitive business finance rates.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="p-8 rounded-xl border border-gray-100 hover:border-sand/50 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-display text-charcoal mb-3">{benefit.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Business Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Estimate Your Business Finance Payments"
        description="Use our free calculator to explore monthly payment estimates for Range Rover business finance across different models and terms."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
