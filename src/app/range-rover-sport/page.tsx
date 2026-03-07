import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("range-rover-sport")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "How does Range Rover Sport finance compare to the full-size Range Rover?",
    answer: "The Range Rover Sport starts from around £25,000 less than the full-size Range Rover, which translates to roughly £250-£300 lower monthly PCP payments. Despite this price difference, the Sport shares its MLA-Flex platform with the full-size model and offers many of the same powertrains. For buyers who prioritise dynamic driving over ultimate rear-seat luxury, the Sport represents a compelling value proposition while still delivering genuine Range Rover prestige.",
  },
  {
    question: "Is the Range Rover Sport PHEV a good choice for company car drivers?",
    answer: "The Range Rover Sport P510e PHEV is one of the most tax-efficient premium SUVs available. With CO2 emissions from just 18 g/km, it attracts a BIK rate of approximately 5%. For a 40% taxpayer, the monthly BIK tax on a Sport PHEV could be as low as £200-£250, compared to over £1,000 for a diesel equivalent. Over a four-year finance term, the tax savings alone can exceed the price difference between the PHEV and standard models.",
  },
  {
    question: "What are the most popular Range Rover Sport finance options?",
    answer: "PCP is by far the most popular finance choice for the Range Rover Sport, accounting for approximately 70% of all financed sales. Its popularity stems from the lower monthly payments compared to HP, combined with the flexibility to hand back, refinance, or purchase the car at the end of the term. For buyers who want to change their car every 3-4 years, PCP offers the most cost-effective route. HP is preferred by those who want to own the car outright, while leasing suits drivers who want a fixed monthly cost with no residual value risk.",
  },
  {
    question: "Can I finance a Range Rover Sport V8?",
    answer: "Yes, the Range Rover Sport P530 V8 Twin Turbo can be financed through PCP, HP, or lease. The V8 starts from around £115,000 and typically commands monthly PCP payments of £900-£1,100 depending on deposit and term. The V8 Sport holds its value well due to limited production and strong enthusiast demand. Insurance sits in group 50, and running costs are higher than six-cylinder models, but for many owners the 4.4-litre twin-turbo V8 experience justifies the premium.",
  },
  {
    question: "What happens at the end of my Range Rover Sport PCP deal?",
    answer: "At the end of your PCP term, you have three options. First, you can return the car with nothing further to pay, provided it is within agreed mileage and condition limits. Second, you can pay the balloon payment (also called the Guaranteed Future Value) to own the car outright. Third, and most commonly, you can use any equity in the car — the difference between its market value and the balloon — as a deposit towards a new vehicle. Range Rover Sport models frequently have positive equity at the end of PCP terms due to their strong residual performance.",
  },
  {
    question: "How much does it cost to insure a Range Rover Sport on finance?",
    answer: "Range Rover Sport models sit in insurance groups 44-50, which places them at the higher end of the insurance spectrum. Annual premiums typically range from £1,200 to £3,000 depending on driver age, location, and claims history. Finance agreements require fully comprehensive insurance with the finance company noted as the interested party. It is worth noting that some insurers specialise in high-value vehicles and may offer more competitive premiums than mainstream providers.",
  },
];

export default function RangeRoverSportPage() {
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Range Rover Sport</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The Range Rover Sport occupies a sweet spot in the premium SUV market, delivering much of
              the full-size Range Rover's luxury and capability but at a more accessible price point. Built
              on the same MLA-Flex architecture as its larger sibling, the Sport shares fundamental
              engineering DNA whilst offering a more dynamic, driver-focused experience. This combination
              of brand prestige and relative affordability makes the Sport one of the most frequently
              financed vehicles in the premium segment.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The powertrain lineup spans a wide range of budgets and requirements. The D250 diesel
              offers the most affordable entry point with strong fuel economy for high-mileage drivers,
              while the D300 provides effortless performance for those who cover significant distances.
              The P400 mild hybrid petrol suits drivers who want refinement without the charging commitment
              of a PHEV, and the P510e plug-in hybrid delivers the best of both worlds with up to 70 miles
              of electric range and dramatically reduced company car tax.
            </p>
            <p className="text-slate leading-relaxed">
              From a finance perspective, the Sport's position as the best-selling Range Rover model is
              advantageous. High volume translates to competitive finance rates from lenders who are
              confident in the model's residual value performance. The Sport typically retains 50-55%
              of its value after three years, which is strong for this price bracket and keeps PCP
              balloon payments at a level that genuinely reduces monthly outgoings.
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
            Use the sliders below to model different finance scenarios for your Range Rover Sport.
            Switch between PCP, HP and lease to see how each option affects your monthly budget.
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
            Why Finance a Range Rover Sport?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Performance and Prestige Combined</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Range Rover Sport is the most dynamically capable Range Rover, offering a driving
                experience that rivals dedicated performance SUVs from Porsche and BMW. The sport-tuned
                air suspension, active roll control, and torque vectoring deliver genuinely engaging
                handling. Financing a Sport means accessing this performance with predictable monthly
                payments, rather than committing over £80,000 upfront.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Strong Value vs Full-Size Range Rover</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Sport shares its platform, powertrains, and much of its technology with the
                full-size Range Rover at a starting price roughly £25,000 lower. The Pivi Pro
                infotainment, Meridian sound system, and advanced driver assistance features are
                all present. For buyers who do not need the extra interior space or the LWB option,
                the Sport delivers 90% of the Range Rover experience at a meaningful discount.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Company Car Savings</h3>
              <p className="text-sm text-slate leading-relaxed">
                The P510e plug-in hybrid Sport is transforming how business users access premium SUVs.
                With CO2 emissions from 18 g/km, it sits in the lowest BIK bands, meaning company car
                tax can be a fraction of what a petrol or diesel Sport would cost. Many fleet managers
                and company directors are discovering that the total cost of ownership for a PHEV Sport
                is actually lower than a smaller, less prestigious vehicle when tax savings are factored in.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Best-Selling Range Rover Model</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Sport is consistently the most popular Range Rover variant, which benefits finance
                customers in two ways. First, high sales volume means lenders compete for your business,
                driving down APR rates. Second, strong demand in the used market underpins residual
                values, ensuring that the balloon payment at the end of a PCP term remains achievable
                and that trade-in equity is often available for your next vehicle.
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
        title="Ready to Finance Your Range Rover Sport?"
        description="Our specialists will find the most competitive PCP, HP or lease deal for your Range Rover Sport. Free quotes with no obligation."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
