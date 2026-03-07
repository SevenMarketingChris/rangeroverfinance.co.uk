import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("range-rover-velar")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Where does the Velar sit in the Range Rover lineup?",
    answer: "The Velar occupies the space between the compact Evoque and the larger Range Rover Sport. With prices from £48,000, it offers more interior space and road presence than the Evoque but costs significantly less than the Sport. This mid-range positioning makes it an attractive finance proposition for buyers who want more luxury and space than the Evoque provides, without the step up to Sport pricing. The Velar's dimensions make it practical for both urban and suburban lifestyles.",
  },
  {
    question: "Is the Range Rover Velar good value on finance?",
    answer: "The Velar offers strong value in the context of the Range Rover range. PCP payments from £449 per month position it approximately £60 more than an Evoque but £200 less than a Range Rover Sport. Given that the Velar delivers substantially more interior space, a more premium cabin atmosphere, and more powerful engine options than the Evoque, the additional monthly cost is well justified. Its distinctive design also ages gracefully, supporting solid residual values that benefit PCP customers.",
  },
  {
    question: "What is the best engine choice for Velar finance?",
    answer: "The best engine depends on your usage and tax position. The D200 diesel offers the best fuel economy for high-mileage drivers and the lowest running costs. The P250 petrol is the most affordable entry point with refined performance for mixed-use driving. The P400e PHEV is the standout choice for company car drivers, offering dramatically reduced BIK tax rates thanks to its low CO2 emissions. The P400 petrol delivers the strongest performance but attracts the highest insurance and fuel costs.",
  },
  {
    question: "How does the Velar's minimalist interior affect its resale value?",
    answer: "The Velar's distinctive minimalist interior, with its dual-touchscreen dashboard and flush surfaces, has proven to be a strong positive for resale values. The design was ahead of its time when launched and continues to look contemporary. Buyers in the used market consistently rate the Velar's cabin as one of the most desirable in its class, which supports the residual values that underpin competitive PCP finance deals. Higher-specification models with the Pivi Pro system and premium leather tend to hold their value best.",
  },
  {
    question: "Can I finance a used Range Rover Velar?",
    answer: "Yes, used Velars can be financed through PCP, HP, or personal loan arrangements. A two to three-year-old Velar typically costs between £30,000 and £45,000, which can reduce monthly PCP payments by £100-£200 compared to a new model. Land Rover's Approved Used programme includes a comprehensive multi-point inspection, warranty coverage, and breakdown assistance. Used Velar finance rates are typically 1-2% higher APR than new car finance, but the lower purchase price more than compensates.",
  },
  {
    question: "What are the running costs of a Velar on finance?",
    answer: "Beyond the monthly finance payment, Velar running costs include insurance (groups 34-43, typically £600-£1,500 per year), fuel (31-130 mpg depending on powertrain), servicing (approximately £400-£600 annually on a service plan), and road tax. PHEV models benefit from lower VED rates in the first year. Servicing can be included in your finance package through Land Rover's service plans, allowing you to spread maintenance costs into a predictable monthly payment alongside your finance instalment.",
  },
];

export default function RangeRoverVelarPage() {
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Range Rover Velar</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The Velar was conceived as a design statement, and its avant-garde aesthetic continues
              to set it apart in the crowded premium SUV market. The name itself is a nod to the original
              Range Rover prototypes of the 1960s, and that pioneering spirit is evident in every detail
              of the current car. The flush door handles, continuous waistline, and minimalist interior
              with its revolutionary dual-touchscreen dashboard create an ambiance that few competitors
              can match at this price point.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              From a finance structuring perspective, the Velar offers an interesting proposition. Its
              mid-range positioning means it avoids the steep depreciation curve that can affect vehicles
              at the very top of the market, while still commanding the prestige premium that supports
              healthy residual values. The Velar typically retains 45-50% of its value after three years,
              which is competitive for the segment and translates directly into manageable PCP balloon
              payments.
            </p>
            <p className="text-slate leading-relaxed">
              The PHEV variant, the P400e, adds a further dimension to the Velar's finance appeal.
              With its plug-in hybrid powertrain producing CO2 emissions from just 36 g/km, company
              car drivers can access this design-led luxury SUV at BIK tax rates far below those of
              conventional petrol and diesel models. The electric-only range of up to 33 miles covers
              most daily commutes, and the ability to charge overnight on a home wallbox makes the
              PHEV a practical and financially astute daily driver.
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
            Model your ideal Velar finance package. Adjust the vehicle price, deposit, term and APR
            to see how different scenarios affect your monthly commitment.
          </p>
          <FinanceCalculator
            defaultPrice={model.priceFrom}
            defaultDeposit={model.typicalDeposit}
            defaultTerm={model.typicalTerm}
            defaultApr={model.typicalApr}
            defaultBalloonPercent={48}
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
            Why Finance a Range Rover Velar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Avant-Garde Design Language</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Velar is the most design-forward vehicle in the Range Rover family. Its flush
                door handles, continuous waistline, and dramatically raked roofline create a silhouette
                that turns heads in a way that more conventional SUV shapes cannot. Inside, the dual
                high-definition touchscreens and minimalist dashboard eliminate almost all physical
                buttons, creating a cabin that feels genuinely futuristic. This distinctive aesthetic
                ages exceptionally well, which directly supports the strong residual values that make
                PCP payments competitive.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">The Sweet Spot Between Evoque and Sport</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Velar bridges the gap between the compact Evoque and the larger Sport, offering
                meaningfully more interior space and road presence than the former without the premium
                pricing of the latter. With monthly PCP payments approximately £60 above the Evoque
                and £200 below the Sport, the Velar occupies a financial sweet spot for buyers who
                want more car than the Evoque provides but find the Sport a stretch. The boot capacity
                of 632 litres is practical for families and active lifestyles.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Competitive Total Cost of Ownership</h3>
              <p className="text-sm text-slate leading-relaxed">
                Beyond the monthly finance payment, the Velar scores well on total cost of ownership.
                Insurance groups of 34-43 are moderate for the premium SUV segment, and servicing
                costs are predictable through Land Rover's service plan options. The D200 diesel
                achieves up to 37 mpg in real-world driving, making it efficient for longer commutes.
                When you factor in the lower insurance, fuel, and servicing costs alongside competitive
                PCP payments, the Velar can be more affordable to run than some less prestigious
                alternatives.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Efficiency and Tax Benefits</h3>
              <p className="text-sm text-slate leading-relaxed">
                The P400e plug-in hybrid Velar offers up to 33 miles of electric-only range, which
                is sufficient for most daily commutes. With CO2 emissions from 36 g/km, it qualifies
                for very low BIK tax rates, making it an exceptionally tax-efficient company car.
                Home charging overnight is simple and inexpensive, costing approximately £1.50 for
                a full charge. For business users, the combination of low BIK, reduced fuel costs,
                and competitive finance rates makes the PHEV Velar one of the most financially
                intelligent premium SUV choices available.
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
            Request a tailored finance quote for the design-led Range Rover Velar. No obligation, no pressure.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Range Rover Velar?"
        description="Explore PCP, HP and lease options for the avant-garde Range Rover Velar. Free, no-obligation quotes from our finance specialists."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
