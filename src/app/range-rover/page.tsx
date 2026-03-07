import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("range-rover")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "What is the cheapest way to finance a new Range Rover?",
    answer: "PCP (Personal Contract Purchase) typically offers the lowest monthly payments for a Range Rover because a significant portion of the cost is deferred to the optional balloon payment at the end. With strong residual values of 55-60% after three years, the balloon on a Range Rover PCP is substantial, which keeps monthly instalments lower than HP. A larger deposit will further reduce your monthly outgoings.",
  },
  {
    question: "Can I get a Range Rover PHEV on finance and benefit from lower BIK tax?",
    answer: "Yes, the Range Rover P460e and P510e plug-in hybrid models qualify for significantly reduced Benefit in Kind (BIK) tax rates. With CO2 emissions as low as 18 g/km, PHEV Range Rovers currently attract a BIK rate of around 5%, compared to 37% for petrol and diesel variants. For a 40% taxpayer, this can mean savings of over £800 per month compared to an equivalent petrol model taken as a company car.",
  },
  {
    question: "Is the Range Rover Long Wheelbase worth the extra cost on finance?",
    answer: "The LWB adds approximately £10,000-£15,000 to the purchase price, which translates to around £100-£150 more per month on a typical PCP deal. However, LWB models hold their value exceptionally well due to limited supply and strong demand, particularly in the luxury chauffeur and executive market. The additional rear legroom and optional Executive Class rear seats make it a worthwhile investment if rear passenger comfort is a priority.",
  },
  {
    question: "What deposit do I need for Range Rover finance?",
    answer: "There is no fixed minimum deposit for Range Rover finance, though most lenders prefer at least 10% of the vehicle price. On a £105,000 Range Rover, a typical deposit of £10,500-£20,000 would be expected. A larger deposit reduces your monthly payments and the total amount of interest paid over the term. Some lenders offer zero-deposit deals, though these will result in higher monthly payments and potentially higher APR rates.",
  },
  {
    question: "How does Range Rover finance compare to buying outright?",
    answer: "Buying outright avoids interest charges but ties up significant capital. A £115,000 Range Rover financed over 48 months at 6.9% APR costs approximately £15,000-£20,000 in interest. However, PCP finance allows you to invest that capital elsewhere, potentially earning returns that offset the interest cost. Additionally, PCP provides flexibility at the end of the term to hand the vehicle back, refinance, or pay the balloon. For many buyers, the flexibility and cash flow advantages of finance outweigh the interest cost.",
  },
  {
    question: "Can I finance a used or approved Range Rover?",
    answer: "Absolutely. Approved used Range Rovers can be financed through PCP, HP, or personal loan arrangements. Used models typically carry slightly higher APR rates than new vehicle finance, but the lower purchase price means monthly payments can be significantly reduced. A two-year-old Range Rover might cost £70,000-£85,000, potentially saving £300-£500 per month compared to financing a new equivalent model. Land Rover's Approved Used programme also includes warranty coverage and vehicle history checks.",
  },
];

export default function RangeRoverPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
              {model.name} Finance
            </h1>
            <p className="mt-3 text-xl text-sand font-display">{model.tagline}</p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              {model.heroDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">Price From</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(model.priceFrom)}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">Monthly From</p>
                <p className="text-2xl font-bold text-sand">{formatCurrency(model.typicalMonthly)}/mo</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">Typical APR</p>
                <p className="text-2xl font-bold text-white">{model.typicalApr}%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Overview */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Range Rover</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The flagship Range Rover represents the pinnacle of Land Rover's engineering, and its finance
              structure reflects that premium positioning. Whether you are considering the refined D350 diesel
              for effortless long-distance cruising, the exhilarating P530 V8 Twin Turbo for ultimate performance,
              or the increasingly popular P460e and P510e plug-in hybrids for their remarkable tax efficiency,
              each powertrain presents a distinct financial profile.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              PHEV models deserve particular attention from a finance perspective. The P510e, with its
              electric-only range of up to 70 miles, qualifies for substantially reduced Benefit in Kind taxation.
              For company car drivers in the 40% tax bracket, choosing a PHEV Range Rover over an equivalent
              petrol model can save upwards of £10,000 annually in tax alone. This saving often more than offsets
              the slightly higher purchase price of the PHEV variant, making it the most financially astute choice
              for business users.
            </p>
            <p className="text-slate leading-relaxed">
              The Range Rover's exceptional residual value performance is a cornerstone of its finance appeal.
              First-generation models of the current L460 shape are holding their value remarkably well, with
              demand consistently outstripping supply. This strong residual value is the single most important
              factor in determining PCP affordability, and it works decisively in the Range Rover's favour.
            </p>
          </div>
        </div>
      </section>

      {/* Finance Comparison Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Compare {model.name} Finance Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* PCP */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">PCP Finance</h3>
              <p className="text-sm text-slate mb-6">Personal Contract Purchase</p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Deposit</span>
                  <span className="text-sm font-semibold text-charcoal">{formatCurrency(model.pcpExample.deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">{formatCurrency(model.pcpExample.monthly)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">{model.pcpExample.term} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">APR</span>
                  <span className="text-sm font-semibold text-charcoal">{model.pcpExample.apr}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Balloon Payment</span>
                  <span className="text-sm font-semibold text-charcoal">{formatCurrency(model.pcpExample.balloon)}</span>
                </div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-charcoal">Total Cost</span>
                    <span className="text-sm font-bold text-charcoal">{formatCurrency(model.pcpExample.totalCost)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HP */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">HP Finance</h3>
              <p className="text-sm text-slate mb-6">Hire Purchase</p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Deposit</span>
                  <span className="text-sm font-semibold text-charcoal">{formatCurrency(model.hpExample.deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">{formatCurrency(model.hpExample.monthly)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">{model.hpExample.term} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">APR</span>
                  <span className="text-sm font-semibold text-charcoal">{model.hpExample.apr}%</span>
                </div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-charcoal">Total Cost</span>
                    <span className="text-sm font-bold text-charcoal">{formatCurrency(model.hpExample.totalCost)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lease */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">Lease</h3>
              <p className="text-sm text-slate mb-6">Personal Contract Hire</p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Initial Rental</span>
                  <span className="text-sm font-semibold text-charcoal">{formatCurrency(model.leaseExample.initialRental)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">{formatCurrency(model.leaseExample.monthly)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">{model.leaseExample.term} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Annual Mileage</span>
                  <span className="text-sm font-semibold text-charcoal">{model.leaseExample.annualMileage.toLocaleString()} miles</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            Representative examples only. Actual rates depend on individual circumstances and credit profile. Figures based on
            a {model.name} priced from {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            {model.name} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Adjust the sliders to explore monthly payment options for your Range Rover. Compare PCP,
            HP and lease costs to find the finance structure that suits your budget.
          </p>
          <FinanceCalculator
            defaultPrice={model.priceFrom}
            defaultDeposit={model.typicalDeposit}
            defaultTerm={model.typicalTerm}
            defaultApr={model.typicalApr}
            defaultBalloonPercent={50}
            mode="pcp"
            showModeToggle={true}
          />
        </div>
      </section>

      {/* Key Specifications */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            {model.name} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Body Type</p>
              <p className="text-sm font-semibold text-charcoal">{model.bodyType}</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Engines</p>
              <p className="text-sm font-semibold text-charcoal">{model.engineOptions.join(", ")}</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Seating</p>
              <p className="text-sm font-semibold text-charcoal">{model.seatingCapacity}</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Insurance Group</p>
              <p className="text-sm font-semibold text-charcoal">{model.insuranceGroup}</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">CO2 Emissions</p>
              <p className="text-sm font-semibold text-charcoal">{model.co2Range}</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Fuel Economy</p>
              <p className="text-sm font-semibold text-charcoal">{model.fuelEconomy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance This Model */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a Range Rover?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Exceptional Residual Values</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Range Rover consistently holds its value better than most luxury SUVs. Retaining
                55-60% of its value after three years means the gap between what you finance and what
                the car is worth at the end of the term is smaller. This directly translates to lower
                PCP monthly payments, making the flagship Range Rover more affordable on finance than
                many buyers expect.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Tax Advantages</h3>
              <p className="text-sm text-slate leading-relaxed">
                The P460e and P510e plug-in hybrids offer a compelling financial case for company car
                drivers. With CO2 emissions as low as 18 g/km, BIK rates are dramatically lower than
                petrol or diesel equivalents. A company car driver could save over £10,000 per year in
                tax compared to a conventional Range Rover, making the PHEV the most tax-efficient
                luxury SUV available in the UK.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Long Wheelbase Prestige</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Range Rover LWB and SV models occupy a unique position in the market, competing
                directly with chauffeur-grade luxury saloons from Bentley and Rolls-Royce. Optional
                Executive Class rear seats with airline-style recline and entertainment screens make
                the LWB a boardroom on wheels. These high-specification models command strong premiums
                on the used market, supporting excellent PCP terms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Flagship Ownership Experience</h3>
              <p className="text-sm text-slate leading-relaxed">
                Beyond the vehicle itself, Range Rover ownership includes access to Land Rover's
                premium service network, courtesy car provision, and comprehensive warranty packages.
                Finance customers can roll service plans and extended warranties into their monthly
                payment, creating a single predictable cost of ownership. The Range Rover's legendary
                capability in all conditions provides genuine year-round usability that few rivals can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            Get Your {model.name} Finance Quote
          </h2>
          <p className="text-slate text-center mb-10">
            Complete the form below for a free, no-obligation finance quote tailored to your circumstances.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Range Rover?"
        description="Speak to our specialists about PCP, HP and lease options for the flagship Range Rover. Free, no-obligation quotes tailored to your budget."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
