import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("defender")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Which Defender body style should I choose -- 90, 110 or 130?",
    answer: "The choice depends on your lifestyle requirements. The Defender 90 is the short-wheelbase, 3-door model that is the most affordable and the most capable off-road due to its shorter overhangs and tighter turning circle. It seats up to 6 with the optional front centre seat. The Defender 110 is the 5-door model and the most popular choice, seating 5 or optionally 5+2, with a practical boot and excellent balance of capability and daily usability. The Defender 130 extends the 110 with a longer rear overhang to accommodate full-size third-row seats for 8 passengers, making it the choice for larger families or those who regularly carry groups.",
  },
  {
    question: "Do Defenders really hold their value better than other SUVs?",
    answer: "Yes, the modern Defender has some of the strongest residual value performance in the entire automotive market. Standard models typically retain 60-65% of their value after three years, which is exceptional for a vehicle at this price point. Special editions and V8 models can retain even more, with some configurations actually appreciating in value. This remarkable residual performance directly benefits PCP customers by reducing the gap between the purchase price and the balloon payment, resulting in lower monthly instalments than the purchase price might suggest.",
  },
  {
    question: "Can I finance a Defender V8?",
    answer: "Yes, the Defender V8 P525 can be financed through PCP, HP, or lease. Starting from around £110,000, the V8 commands monthly PCP payments of approximately £900-£1,200 depending on deposit and term. The V8 Defender is a unique proposition in the market — there is no direct competitor offering a supercharged V8 in a vehicle with this level of off-road capability. This exclusivity supports its extraordinary residual values. Some V8 Defenders have been known to sell for more than their original list price on the used market, making them a rare example of a depreciating asset that can actually appreciate.",
  },
  {
    question: "Is the Defender PHEV worth considering on finance?",
    answer: "The Defender P400e PHEV is well worth considering, particularly for company car drivers. With CO2 emissions from just 28 g/km, it attracts some of the lowest BIK tax rates available. The electric-only range of approximately 27 miles covers short commutes and school runs without using any fuel, while the combined petrol-electric powertrain provides strong performance for longer journeys. The PHEV Defender also retains its value well, making PCP payments competitive. For private buyers, the PHEV makes most sense if you can charge at home and have a daily commute under 25 miles.",
  },
  {
    question: "How much does Defender insurance cost on finance?",
    answer: "Defender insurance groups range from 36 to 50 depending on the model and engine. Annual premiums typically range from £800 to £2,500. The Defender 90 D250 sits in the lower insurance groups, while the V8 P525 occupies group 50. All finance agreements require fully comprehensive insurance with the lender noted as an interested party. Given the Defender's desirability and theft risk, it is worth considering specialist insurers who understand high-value vehicles and can offer competitive premiums. Land Rover's approved security accessories, including a wheel lock set and tracking system, may also help reduce premiums.",
  },
  {
    question: "What accessories can I add to my Defender on finance?",
    answer: "Land Rover offers an extensive accessories catalogue for the Defender, and many of these can be factory-fitted and included in your finance agreement. Popular additions include the roof rack (from £600), side-mounted gear carrier (from £900), expedition roof tent, snorkel, and wheel arch protectors. Adding accessories at the point of order means their cost is spread across your monthly payments rather than paid as a lump sum. For example, adding £3,000 of accessories to a 48-month PCP would increase monthly payments by approximately £60-£70. Factory-fitted accessories also contribute positively to residual value.",
  },
];

export default function DefenderPage() {
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Land Rover Defender</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The modern Defender is one of the most remarkable automotive success stories of the past
              decade. Land Rover took the enormous risk of reinventing an icon, and the result has
              exceeded every expectation. The new Defender has become a genuine cultural phenomenon,
              as at home on the King's Road as it is on a Highland estate. This extraordinary breadth
              of appeal has created a demand profile that consistently outstrips supply, which is the
              single most important factor in the Defender's remarkable residual value performance.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The three body styles — 90, 110, and 130 — each serve distinct purposes and attract
              different buyers. The short-wheelbase 90 is the most characterful, with its three-door
              layout and optional front centre jump seat creating a distinctive cabin. The 110 is the
              volume seller, offering the best balance of practicality and capability for families
              and adventure-seekers. The 130 extends the formula with full-size third-row seating
              for eight, serving larger families and commercial operators who need to transport groups.
            </p>
            <p className="text-slate leading-relaxed">
              The powertrain range spans the widest spectrum of any Land Rover model. The D250 diesel
              is the workhorse, offering strong economy and dependable performance. The P400 mild hybrid
              delivers refined six-cylinder power. The P400e PHEV brings plug-in efficiency and tax
              advantages. And at the summit, the V8 P525 delivers 525PS of supercharged fury — a
              powertrain that has become an instant collector's item. Each engine choice has distinct
              finance implications, from the diesel's lower running costs to the V8's potential for
              value appreciation.
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
            a {model.fullName} 110 priced from {formatCurrency(model.priceFrom)}.
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
            Calculate monthly payments for your Defender 90, 110 or 130. Adjust the vehicle price
            to match your chosen specification and explore PCP, HP and lease options.
          </p>
          <FinanceCalculator
            defaultPrice={model.priceFrom}
            defaultDeposit={model.typicalDeposit}
            defaultTerm={model.typicalTerm}
            defaultApr={model.typicalApr}
            defaultBalloonPercent={60}
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
            Why Finance a Land Rover Defender?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Exceptional Residual Values</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Defender holds its value better than virtually any other SUV on sale. Standard
                models typically retain 60-65% of their original price after three years, while
                special editions and V8 models can retain even more. This extraordinary residual
                performance has a direct and significant impact on PCP finance. A higher residual
                value means a larger portion of the car's cost is deferred to the balloon payment,
                which reduces the amount you pay monthly. In practical terms, a Defender can have
                lower PCP payments than less expensive vehicles with weaker residual values.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Three Body Styles, One Icon</h3>
              <p className="text-sm text-slate leading-relaxed">
                The choice of 90, 110, and 130 body styles means there is a Defender for virtually
                every requirement. The 90 is the purist's choice and the most affordable entry point,
                starting from around £55,000. The 110 adds two doors and significantly more practicality,
                while the 130 extends to full eight-seat capability. Each body style can be extensively
                personalised through Land Rover's accessory programme, with additions like the
                expedition roof rack, side-mounted gear carrier, and exterior protection packages that
                can be included in your finance agreement and spread across monthly payments.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">V8 Investment Potential</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Defender V8 P525 occupies a unique position in the automotive market. With its
                supercharged 5.0-litre V8 producing 525PS, it offers a driving experience that no
                other off-road-capable vehicle can match. Limited production numbers and overwhelming
                demand have created a situation where some V8 Defenders trade above their original
                list price on the used market. For PCP customers, this means that the balloon payment
                at the end of the term may actually be lower than the vehicle's market value, creating
                positive equity that can fund the deposit on your next vehicle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Modern Icon Status</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Defender has achieved something rare in the automotive world: genuine icon status
                for a modern vehicle. It has become a design reference point and a cultural symbol
                that transcends the automotive sector. Featured in the James Bond franchise, embraced
                by designers and architects, and equally at home at country estates and London
                restaurants, the Defender's appeal is uniquely broad. This cultural significance
                underpins its demand profile and provides confidence that the Defender will remain
                desirable for years to come, supporting long-term residual values and making it a
                sound finance proposition.
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
            Whether you are looking at a Defender 90, 110 or 130, our specialists will find the most competitive finance deal for you.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.fullName} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Land Rover Defender?"
        description="Join the thousands of Defender owners who finance their icon. Free, no-obligation quotes for Defender 90, 110 and 130 across PCP, HP and lease."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
