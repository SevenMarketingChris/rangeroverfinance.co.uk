import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("discovery-sport")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Is the Discovery Sport really the most affordable Land Rover to finance?",
    answer: "Yes, the Discovery Sport is the most affordable vehicle in the entire Land Rover and Range Rover lineup, with prices starting from £36,000 and typical PCP payments from just £349 per month. It offers the lowest entry point to Land Rover ownership while still delivering genuine all-wheel-drive capability, a premium interior, and the option of 5+2 seating. Insurance groups of 25-34 are also the lowest across the range, which further reduces total ownership costs for younger or less experienced drivers.",
  },
  {
    question: "How practical are the 5+2 seats in the Discovery Sport?",
    answer: "The Discovery Sport's 5+2 seating arrangement provides two additional seats in the boot area that are best suited for children up to around 12 years old. Unlike the full-size Discovery, these are not full-size adult seats, but they are perfectly adequate for school runs, sports clubs, and short journeys with extra passengers. When not in use, the two additional seats fold completely flat into the floor, preserving the full 963-litre boot capacity. This flexibility is a significant draw for young families who occasionally need to carry extra passengers but do not want a larger, less manoeuvrable vehicle.",
  },
  {
    question: "Should I choose the PHEV Discovery Sport for company car tax savings?",
    answer: "The Discovery Sport P300e PHEV is an excellent choice for company car drivers. With CO2 emissions from just 36 g/km, it qualifies for a BIK rate of approximately 8%, compared to 37% for petrol and diesel variants. For a 40% taxpayer on a £42,000 Discovery Sport, the PHEV would attract monthly BIK tax of around £112, compared to approximately £518 for a petrol equivalent. Over a 48-month finance term, that represents a total tax saving of nearly £19,500 — more than enough to offset the PHEV's slightly higher purchase price.",
  },
  {
    question: "How does the Discovery Sport compare to the Range Rover Evoque on finance?",
    answer: "The Discovery Sport and Evoque are similarly priced, with the Discovery Sport starting approximately £2,500 less. However, they serve different purposes. The Discovery Sport prioritises practicality with its 5+2 seating, larger boot, and more upright driving position. The Evoque focuses on style with its coupe-like roofline and more fashion-forward design. On finance, the Discovery Sport typically offers slightly lower monthly payments due to its lower starting price, though the Evoque may hold its value marginally better in percentage terms due to its stronger brand image.",
  },
  {
    question: "Can I finance a Discovery Sport with no deposit?",
    answer: "Some lenders do offer zero-deposit Discovery Sport finance, particularly on PCP agreements. However, a zero-deposit deal will result in higher monthly payments and potentially a higher APR. Most finance specialists recommend a deposit of at least 10% (around £3,600) to secure competitive rates and keep monthly payments comfortable. If you have a vehicle to part-exchange, its value can be used as your deposit, which is a convenient way to reduce your monthly outgoings without a cash deposit.",
  },
  {
    question: "What is the best Discovery Sport specification for holding its value?",
    answer: "The Dynamic SE and Dynamic HSE specifications tend to hold their value best on the used market, as they strike the right balance between desirable equipment levels and reasonable purchase price. The R-Dynamic exterior styling is also popular with used buyers. In terms of powertrain, the D200 diesel and P300e PHEV retain value most strongly — the diesel for its broad appeal to high-mileage buyers, and the PHEV for its tax advantages. Black exterior colours and light interior trims tend to achieve the strongest residual values in the used market.",
  },
];

export default function DiscoverySportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
              {model.fullName} Finance
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Discovery Sport</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The Discovery Sport has carved out a distinct niche as the compact family SUV that
              does not compromise on capability. Where competitors offer either style or practicality,
              the Discovery Sport delivers both: 5+2 seating versatility in a footprint that navigates
              school car parks and supermarket bays with ease. This dual appeal to both practical and
              aspirational buyers creates a broad demand base that lenders value when setting finance
              terms.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The engine lineup is thoughtfully calibrated for the Discovery Sport's typical buyer
              profile. The P200 petrol is the entry-level choice, offering smooth refinement for
              urban-focused drivers. The P250 adds a welcome power increase for mixed-use driving.
              The D165 and D200 diesels suit higher-mileage families who need efficiency on long
              school holiday drives and countryside weekends. The P300e PHEV is transforming the
              Discovery Sport's appeal for company car drivers, offering BIK tax rates that make
              premium SUV ownership significantly more affordable than many smaller, less capable
              vehicles.
            </p>
            <p className="text-slate leading-relaxed">
              At its price point, the Discovery Sport faces strong competition from vehicles like
              the Volvo XC40, BMW X1, and Audi Q3. However, none of these competitors offers the
              combination of 5+2 seating, genuine all-wheel-drive capability, and the Land Rover
              badge. This unique positioning means the Discovery Sport retains a loyal buyer base
              that drives consistent used market demand, supporting the residual values that underpin
              affordable PCP monthly payments.
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
            a {model.fullName} priced from {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            {model.fullName} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Explore affordable monthly payments for the Discovery Sport. Adjust the sliders to match
            your budget and compare PCP, HP and lease options side by side.
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
            {model.fullName} Key Specifications
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
            Why Finance a Discovery Sport?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Most Affordable Land Rover</h3>
              <p className="text-sm text-slate leading-relaxed">
                Starting from £36,000 with PCP payments from just £349 per month, the Discovery
                Sport is the most affordable way into the Land Rover family. This accessible pricing
                brings premium SUV ownership within reach of a significantly wider audience than the
                larger Discovery or Range Rover models. Despite its entry-level positioning, the
                Discovery Sport does not compromise on the core Land Rover attributes of all-weather
                capability, robust build quality, and a genuinely premium cabin environment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Compact 7-Seater for Growing Families</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Discovery Sport's 5+2 seating configuration is a genuine differentiator in the
                compact SUV segment. Few competitors offer any form of third-row seating at this
                size and price point. For families with young children who occasionally need to carry
                extra passengers — whether for playdates, school runs, or family trips — the two
                additional seats eliminate the need for a larger and less manoeuvrable vehicle. The
                seats fold completely flat when not needed, preserving full boot capacity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Tax Efficiency</h3>
              <p className="text-sm text-slate leading-relaxed">
                The P300e plug-in hybrid Discovery Sport is a game-changer for company car drivers.
                With CO2 emissions from 36 g/km, BIK tax rates are dramatically lower than those for
                conventional petrol and diesel models. A 40% taxpayer could pay as little as £112 per
                month in BIK tax on a Discovery Sport PHEV, compared to over £500 for a petrol
                equivalent. The 38-mile electric range covers most commutes without using any fuel,
                and overnight home charging keeps running costs to a minimum.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Young Family Appeal</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Discovery Sport is designed with young families at its heart. The raised rear
                seating gives children a better view out, ISOFIX points are fitted on both outer
                rear seats and the front passenger seat, and the boot lip is low enough for easy
                pushchair loading. Practical touches like the waterproof loadspace liner and
                easy-clean seat fabrics make the Discovery Sport genuinely family-proof. This
                family-focused design creates a strong emotional connection with buyers, which
                supports demand in both new and used markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            Get Your {model.fullName} Finance Quote
          </h2>
          <p className="text-slate text-center mb-10">
            Find out how affordable Discovery Sport finance can be. Free, no-obligation quotes in minutes.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.fullName} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Discovery Sport?"
        description="The most affordable Land Rover is within reach. Get a free, no-obligation finance quote for the Discovery Sport today."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
