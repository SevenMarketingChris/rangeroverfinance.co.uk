import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("range-rover-evoque")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Is the Range Rover Evoque the cheapest Range Rover to finance?",
    answer: "Yes, the Evoque is the most affordable Range Rover to finance. With prices starting from £38,500 and typical PCP payments from £389 per month, it offers the most accessible route into Range Rover ownership. The Evoque's competitive pricing, combined with strong residual values and lower insurance groups (28-37), also means running costs are significantly more manageable than the larger Range Rover models.",
  },
  {
    question: "What are the Benefit in Kind rates for the Evoque P300e PHEV?",
    answer: "The Evoque P300e plug-in hybrid produces CO2 emissions from just 32 g/km, placing it in one of the lower BIK tax bands. For the 2024/25 tax year, this translates to a BIK rate of around 8%, compared to 37% for the standard petrol models. For a 40% taxpayer financing a £45,000 Evoque P300e, monthly BIK tax would be approximately £120, compared to around £555 for a petrol equivalent. This makes the PHEV the clear choice for company car drivers.",
  },
  {
    question: "Can I get an Evoque on finance with a small deposit?",
    answer: "Yes, many lenders offer Evoque finance with deposits as low as £1,000 or even zero deposit in some cases. A smaller deposit will increase your monthly payments and may result in a higher APR. A deposit of around 10-15% (£3,850-£5,775) is generally recommended to secure the most competitive rates and keep monthly payments affordable. Some dealers also accept part-exchange vehicles as deposits, which can be a convenient way to fund your down payment.",
  },
  {
    question: "How does the Evoque compare to competitors like the BMW X1 and Audi Q3 on finance?",
    answer: "The Evoque sits between the BMW X1 and Audi Q3 on price, with typical PCP payments of £389-£500 depending on specification. Where the Evoque excels is in residual value retention and brand desirability. The Range Rover badge carries significant cachet, and Evoque residuals of 48-52% after three years are strong for the compact premium SUV segment. Monthly payments are often comparable to or even lower than equivalent BMW and Audi models once residual values are factored into the PCP calculation.",
  },
  {
    question: "Is the Evoque suitable for city driving?",
    answer: "The Evoque was specifically designed with urban environments in mind. At 4,371mm long, it is the most compact Range Rover and parks comfortably in standard city parking spaces. The high driving position provides excellent visibility in traffic, while the optional ClearSight Ground View camera — which digitally shows the ground beneath the bonnet — makes urban manoeuvring effortless. The PHEV model can cover most daily city commutes on electric power alone, with up to 34 miles of zero-emission range.",
  },
  {
    question: "What warranty cover comes with an Evoque on finance?",
    answer: "New Evoque models come with Land Rover's standard 3-year/100,000-mile manufacturer warranty, which runs concurrently with most finance agreements. For 48-month PCP deals, there is a gap in the final year that can be covered with an extended warranty, typically costing £400-£600. Many finance packages allow you to include an extended warranty in your monthly payment, providing comprehensive cover for the entire duration of the agreement. Land Rover Approved Used Evoques carry a minimum 12-month warranty.",
  },
];

export default function RangeRoverEvoquePage() {
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Range Rover Evoque</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The Evoque has been a phenomenal success for Land Rover since its original launch,
              single-handedly attracting a younger, more urban demographic to the Range Rover brand.
              This second-generation model refines the formula further, with a more mature design language,
              improved interior quality, and the addition of a plug-in hybrid powertrain. From a finance
              perspective, the Evoque's broad appeal translates into high volumes and competitive rates
              from a wide range of lenders.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The engine range is carefully calibrated to suit different buyers. The P200 petrol is the
              entry-level choice, offering adequate performance for predominantly urban use. The P250
              adds a meaningful step up in power for those who want more responsiveness on motorways
              and A-roads. The D165 diesel suits higher-mileage drivers with its superior fuel economy,
              while the P300e PHEV is the standout for tax-conscious company car users and environmentally
              aware private buyers.
            </p>
            <p className="text-slate leading-relaxed">
              One of the Evoque's strongest finance attributes is its relatively low insurance group
              placement. Sitting in groups 28-37, it is substantially cheaper to insure than the larger
              Range Rover models, which can be a significant factor in the total cost of ownership
              calculation. Combined with its compact dimensions, lower fuel consumption, and more
              affordable servicing costs, the Evoque delivers the Range Rover ownership experience
              at a genuinely accessible total monthly cost.
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
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">PCP Finance</h3>
              <p className="text-sm text-slate mb-6">Personal Contract Purchase</p>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-sm text-slate">Deposit</span><span className="text-sm font-semibold text-charcoal">{formatCurrency(model.pcpExample.deposit)}</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Monthly Payment</span><span className="text-sm font-semibold text-racing-green">{formatCurrency(model.pcpExample.monthly)}/mo</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Term</span><span className="text-sm font-semibold text-charcoal">{model.pcpExample.term} months</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">APR</span><span className="text-sm font-semibold text-charcoal">{model.pcpExample.apr}%</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Balloon Payment</span><span className="text-sm font-semibold text-charcoal">{formatCurrency(model.pcpExample.balloon)}</span></div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between"><span className="text-sm font-medium text-charcoal">Total Cost</span><span className="text-sm font-bold text-charcoal">{formatCurrency(model.pcpExample.totalCost)}</span></div>
                </div>
              </div>
            </div>
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">HP Finance</h3>
              <p className="text-sm text-slate mb-6">Hire Purchase</p>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-sm text-slate">Deposit</span><span className="text-sm font-semibold text-charcoal">{formatCurrency(model.hpExample.deposit)}</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Monthly Payment</span><span className="text-sm font-semibold text-racing-green">{formatCurrency(model.hpExample.monthly)}/mo</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Term</span><span className="text-sm font-semibold text-charcoal">{model.hpExample.term} months</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">APR</span><span className="text-sm font-semibold text-charcoal">{model.hpExample.apr}%</span></div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between"><span className="text-sm font-medium text-charcoal">Total Cost</span><span className="text-sm font-bold text-charcoal">{formatCurrency(model.hpExample.totalCost)}</span></div>
                </div>
              </div>
            </div>
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">Lease</h3>
              <p className="text-sm text-slate mb-6">Personal Contract Hire</p>
              <div className="space-y-4">
                <div className="flex justify-between"><span className="text-sm text-slate">Initial Rental</span><span className="text-sm font-semibold text-charcoal">{formatCurrency(model.leaseExample.initialRental)}</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Monthly Payment</span><span className="text-sm font-semibold text-racing-green">{formatCurrency(model.leaseExample.monthly)}/mo</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Term</span><span className="text-sm font-semibold text-charcoal">{model.leaseExample.term} months</span></div>
                <div className="flex justify-between"><span className="text-sm text-slate">Annual Mileage</span><span className="text-sm font-semibold text-charcoal">{model.leaseExample.annualMileage.toLocaleString()} miles</span></div>
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
            Explore monthly payments for your Evoque across PCP, HP and lease options.
            Adjust the deposit, term and APR to see how they affect your budget.
          </p>
          <FinanceCalculator
            defaultPrice={model.priceFrom}
            defaultDeposit={model.typicalDeposit}
            defaultTerm={model.typicalTerm}
            defaultApr={model.typicalApr}
            defaultBalloonPercent={43}
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
            Why Finance a Range Rover Evoque?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Most Accessible Range Rover</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Evoque is the gateway to Range Rover ownership, and its finance affordability
                reinforces that role. With PCP payments from £389 per month, it is within reach of
                buyers who might otherwise consider mainstream premium brands. Yet the Evoque delivers
                genuine Range Rover design DNA, build quality, and all-weather capability that sets
                it apart from the competition. The compact dimensions make it ideal for drivers who
                navigate tight urban streets but still want a commanding driving position.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">City-Friendly Dimensions</h3>
              <p className="text-sm text-slate leading-relaxed">
                At just 4,371mm long, the Evoque is the only Range Rover that genuinely thrives in
                urban environments. It fits comfortably in standard parking bays, negotiates multi-storey
                car parks without anxiety, and offers excellent visibility thanks to its elevated seating
                position. The ClearSight Ground View camera is an Evoque innovation that eliminates
                blind spots by virtually removing the bonnet from your view, making parking in tight
                city spaces effortless.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV BIK Tax Advantages</h3>
              <p className="text-sm text-slate leading-relaxed">
                The P300e PHEV Evoque is a standout for company car drivers seeking to minimise their
                tax liability. With CO2 emissions from 32 g/km, BIK rates are around 8% — dramatically
                lower than the 37% applied to standard petrol models. On a £45,000 Evoque, the annual
                BIK tax saving for a 40% taxpayer could exceed £5,000 compared to a conventional petrol
                model. The 34-mile electric range also means many daily commutes can be completed on
                electric power alone.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Strong Used Market Demand</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Evoque's desirability extends well into the used market, where demand consistently
                outpaces supply. This strong second-hand demand underpins the residual values that
                lenders use to set PCP balloon payments. Higher residual values mean a larger portion
                of the car's cost is deferred to the balloon, reducing the amount you pay each month.
                It also means there is often positive equity in your Evoque at the end of a PCP term,
                which can be used as a deposit towards your next vehicle.
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
            Complete the form below for a free, no-obligation Evoque finance quote.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Range Rover Evoque?"
        description="Discover the most affordable route into Range Rover ownership. Get a free, no-obligation finance quote for the Evoque today."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
