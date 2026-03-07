import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { LeadForm } from "@/components/LeadForm";

const model = getModelBySlug("discovery")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Is the Discovery a genuine 7-seater or are the rear seats only for children?",
    answer: "The Discovery is one of the few SUVs with genuinely usable third-row seats for adults. The stadium seating layout, where each row sits slightly higher than the one in front, ensures good visibility and comfort for all seven occupants. Adults up to 6ft can sit comfortably in the third row for journeys of up to two hours, which is more than most competitors can claim. The third-row seats fold electrically flush into the floor, maintaining a flat boot area when not in use. This genuine seven-seat capability is a significant factor in the Discovery's residual value strength.",
  },
  {
    question: "Should I choose diesel or petrol for my Discovery on finance?",
    answer: "Diesel remains the most popular choice for Discovery buyers, and for good reason. The D250 and D300 diesel engines offer substantially better fuel economy (up to 37 mpg) compared to the petrol P360 and P400 (around 26 mpg). For a typical 12,000-mile annual mileage, the diesel could save approximately £1,200-£1,500 per year in fuel costs. Diesel also provides superior towing performance with greater low-end torque. However, if your annual mileage is below 8,000 miles and you primarily drive in urban areas, the P360 petrol offers quieter, smoother operation and lower upfront cost.",
  },
  {
    question: "How much can a Discovery tow, and does it affect finance?",
    answer: "The Discovery has a maximum braked towing capacity of 3,500kg, which is sufficient for horse boxes, large caravans, and boat trailers. This class-leading towing capability is a key differentiator that supports the Discovery's residual value. Towing itself does not directly affect your finance agreement, though it may marginally increase wear on braking components and tyres. Some lenders offer Discovery-specific finance packages that account for the vehicle's typical use profile, including towing. If you plan to tow regularly, the D300 diesel is the recommended powertrain for its combination of torque and efficiency under load.",
  },
  {
    question: "How does Discovery finance compare to a BMW X5 or Audi Q7?",
    answer: "The Discovery is competitively priced against the BMW X5 and Audi Q7, with similar PCP payments in the £500-£650 range. Where the Discovery distinguishes itself is in its genuine seven-seat capability, superior off-road ability, and 3,500kg towing capacity. The X5 and Q7 are more road-focused and offer slightly more refined on-road handling, but neither can match the Discovery's breadth of capability. Residual values are broadly similar across all three, though the Discovery's unique family-focused positioning gives it a loyal buyer base that supports strong second-hand demand.",
  },
  {
    question: "Can I add a service plan to my Discovery finance agreement?",
    answer: "Yes, Land Rover offers service plans that can be included within your monthly finance payment. A typical Discovery service plan covers scheduled servicing for 3-5 years and costs approximately £30-£50 per month when bundled into the finance agreement. This provides cost certainty and avoids unexpected maintenance bills during the finance term. The service plan covers all routine maintenance items including oil changes, filter replacements, and brake fluid changes. It does not cover wear items like brake pads and tyres, though separate tyre insurance products are available.",
  },
  {
    question: "What happens if I exceed my mileage limit on a Discovery PCP?",
    answer: "If you exceed your agreed mileage at the end of a PCP term, you will be charged an excess mileage fee per mile. Typical charges are 10-15p per mile for the Discovery. For example, exceeding your limit by 5,000 miles would cost £500-£750. If you anticipate higher mileage, it is more cost-effective to agree a higher annual mileage upfront, as the per-mile cost is lower when set at the start of the agreement. Alternatively, if you know you want to keep the car, mileage limits become irrelevant as they only apply if you return the vehicle to the finance company.",
  },
];

export default function DiscoveryPage() {
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
            <h2 className="text-3xl font-display text-charcoal mb-6">Financing Your Land Rover Discovery</h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The Discovery has been the definitive full-size family SUV for over three decades, and
              the current model refines that formula to near perfection. With its full-size 7-seat
              configuration, 3,500kg towing capacity, and genuine off-road capability courtesy of
              Land Rover's Terrain Response 2 system, the Discovery occupies a unique position in
              the market. No other vehicle combines this level of family versatility with true all-terrain
              competence, and that distinction supports the Discovery's place in an enthusiast buyer
              base that values capability above all else.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Diesel powertrains dominate Discovery sales, and the finance numbers explain why.
              The D300 diesel achieves real-world fuel economy of around 32-37 mpg, while the P400
              petrol manages just 24-26 mpg. Over a typical 48-month finance term at 12,000 miles
              per year, that difference amounts to approximately £5,000-£6,000 in additional fuel
              costs for the petrol variant. The diesel also delivers substantially more torque at low
              revs, which is critical for comfortable towing of caravans, horse boxes, and trailers.
            </p>
            <p className="text-slate leading-relaxed">
              From a financial structuring perspective, the Discovery benefits from competing in a
              relatively niche segment. Full-size seven-seat SUVs with genuine off-road capability
              are rare, which limits direct competition and supports stable residual values. Lenders
              are confident in the Discovery's ability to hold its value, which translates into
              competitive PCP balloon payments and affordable monthly instalments relative to the
              vehicle's size and capability.
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
            Calculate monthly payments for your Discovery. Compare PCP, HP and lease options
            to find the right finance structure for your family budget.
          </p>
          <FinanceCalculator
            defaultPrice={model.priceFrom}
            defaultDeposit={model.typicalDeposit}
            defaultTerm={model.typicalTerm}
            defaultApr={model.typicalApr}
            defaultBalloonPercent={45}
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
            Why Finance a Land Rover Discovery?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Genuine 7-Seat Family Capability</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Discovery is one of very few SUVs where the third row of seats is genuinely
                usable by adults. The clever stadium seating arrangement ensures all seven occupants
                have good headroom, legroom, and visibility. Individual folding seats can be configured
                remotely via the Land Rover app, and the third row folds completely flat to create a
                vast 2,485-litre load space. For families who regularly carry six or seven passengers,
                the Discovery eliminates the need for a less practical people carrier.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Class-Leading Towing Capacity</h3>
              <p className="text-sm text-slate leading-relaxed">
                With a maximum braked towing capacity of 3,500kg, the Discovery can handle virtually
                any towing requirement. Whether you tow a caravan, horse box, or boat trailer, the
                Discovery's combination of powerful diesel engines, permanent all-wheel drive, and
                advanced towing assist technology makes it the most capable tower in its class. The
                optional Advanced Tow Assist system allows you to steer a trailer in reverse using
                a rotary controller, removing one of the most stressful aspects of towing for less
                experienced drivers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Proven Off-Road Credentials</h3>
              <p className="text-sm text-slate leading-relaxed">
                Unlike many modern SUVs that are designed primarily for road use, the Discovery
                retains genuine off-road capability. Terrain Response 2 automatically adapts the
                vehicle's settings to the surface beneath you, while the optional air suspension
                provides up to 283mm of ground clearance and allows wading through water up to
                900mm deep. For families who enjoy countryside driving, farm tracks, or winter
                conditions, the Discovery provides a level of confidence that no road-biased
                competitor can match.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Diesel Economy for High-Mileage Families</h3>
              <p className="text-sm text-slate leading-relaxed">
                The D250 and D300 diesel engines are the backbone of the Discovery range, and they
                make compelling financial sense for the typical family buyer. Achieving 32-37 mpg
                in real-world mixed driving, the diesel Discovery keeps fuel costs manageable despite
                its full-size dimensions. The D300 produces 300PS and 650Nm of torque, providing
                effortless overtaking performance and relaxed motorway cruising, while the D250
                offers the most cost-effective balance of performance and efficiency for everyday
                family use.
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
            Request your free Discovery finance quote. Our specialists will find the best deal for your family.
          </p>
          <LeadForm preselectedModel={model.slug} />
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title={`${model.fullName} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your Land Rover Discovery?"
        description="Get a free, no-obligation quote for the ultimate family SUV. PCP, HP and lease options available for the 7-seat Discovery."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
