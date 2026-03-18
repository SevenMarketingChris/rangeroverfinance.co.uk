import { Metadata } from "next";
import Image from "next/image";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VehicleFinanceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";

const model = getModelBySlug("defender")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "Which 2026 Defender body style should I choose -- 90, 110 or 130?",
    answer:
      "The choice depends on your lifestyle. The 2026 Defender 90 is the short-wheelbase, 2-door model -- the most nimble off-road thanks to its shorter overhangs, tighter turning circle and 40-degree departure angle. It seats up to 6 with the optional front centre jump seat and starts from around £52,000. The Defender 110 is the 4-door, 5+2 seat volume seller and the most versatile choice for families, with 786 litres of boot space and the widest engine range including the P400e PHEV and OCTA. The Defender 130 extends the 110 platform with a longer rear overhang for full-size third-row seating for 8 passengers, making it the go-to for larger families. The 130 starts from around £59,000.",
  },
  {
    question: "What is the 2026 Defender OCTA and can I finance it?",
    answer:
      "The Defender OCTA is the flagship performance variant for 2026, available exclusively on the 110 body style. It features a twin-turbocharged V8 producing 635 PS and 750 Nm of torque. The OCTA features 6-piston Brembo brakes, a unique wider-track body kit, 33-inch all-terrain tyres, a rally-inspired 4x4 system with rear e-diff, and bespoke suspension. Starting from approximately £120,000, the OCTA can be financed through PCP, HP or lease. Its exclusivity and limited production numbers are expected to support exceptional residual values, potentially making PCP monthly payments more attractive than the list price suggests.",
  },
  {
    question: "Do 2026 Defenders really hold their value better than other SUVs?",
    answer:
      "Yes, the modern Defender has some of the strongest residual value performance in the entire automotive market. Standard models typically retain 60-65% of their value after three years, which is exceptional for a vehicle at this price point. Special editions, V8 and OCTA models can retain even more, with some configurations actually appreciating in value. This remarkable residual performance directly benefits PCP customers by reducing the gap between the purchase price and the balloon payment, resulting in lower monthly instalments than the purchase price might suggest.",
  },
  {
    question: "Is the 2026 Defender P400e PHEV worth considering on finance?",
    answer:
      "The 2026 Defender P400e PHEV is well worth considering, particularly for company car drivers. Available exclusively on the 110 body style, it produces 404 PS with CO2 emissions from just 28 g/km, attracting some of the lowest BIK tax rates available. The electric-only range covers short commutes without using any fuel, while the combined petrol-electric powertrain provides strong performance. Official economy figures of 80-100 mpg are achievable if you charge regularly. The PHEV Defender retains its value well, making PCP payments competitive with pure petrol models. For private buyers, it makes most sense if you can charge at home.",
  },
  {
    question: "How much does 2026 Defender insurance cost on finance?",
    answer:
      "Defender insurance groups range from 36 to 50 depending on the model and engine. Annual premiums typically range from £800 to £2,500. The Defender 90 D250 sits in the lower insurance groups, while the V8 P525 and OCTA occupy group 50. All finance agreements require fully comprehensive insurance with the lender noted as an interested party. Given the Defender's desirability and theft risk, it is worth considering specialist insurers who understand high-value vehicles. Land Rover's approved security accessories, including a wheel lock set and tracking system, may also help reduce premiums.",
  },
  {
    question: "What accessories can I add to my 2026 Defender on finance?",
    answer:
      "Land Rover offers an extensive accessories catalogue for the 2026 Defender, and many of these can be factory-fitted and included in your finance agreement. Popular additions include the expedition roof rack (from £600), side-mounted gear carrier (from £900), expedition roof tent, raised air intake (snorkel), and wheel arch protectors. Adding accessories at the point of order means their cost is spread across your monthly payments rather than paid as a lump sum. For example, adding £3,000 of accessories to a 48-month PCP would increase monthly payments by approximately £60-£70. Factory-fitted accessories also contribute positively to residual value.",
  },
];

export default function DefenderPage() {
  return (
    <>
      <VehicleFinanceSchema
        modelName="Land Rover Defender"
        priceFrom={model.priceFrom}
        monthlyFrom={model.typicalMonthly}
        apr={model.typicalApr}
        url="https://www.rangeroverfinance.co.uk/defender"
      />
      <BreadcrumbSchema items={[{ name: "Defender", url: "https://www.rangeroverfinance.co.uk/defender" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <p className="text-sand font-display text-sm uppercase tracking-widest mb-3">
                2026 Model Year
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
                {model.fullName} Finance
              </h1>
              <p className="mt-3 text-xl text-sand font-display">
                The unstoppable icon. Research PCP, HP and lease costs for the 2026 Defender 90, 110, 130 and OCTA.
              </p>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                The 2026 Land Rover Defender is the most capable and desirable Defender ever built.
                From the nimble 2-door 90 to the 8-seat 130, and now crowned by the 635 PS OCTA,
                there is a Defender for every ambition. Estimated monthly payments from {formatCurrency(model.typicalMonthly)}/month.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Price From</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(model.priceFrom)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Monthly From</p>
                  <p className="text-2xl font-bold text-sand">{formatCurrency(model.typicalMonthly)}/mo</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Typical APR</p>
                  <p className="text-2xl font-bold text-white">{model.typicalApr}%</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Body Styles</p>
                  <p className="text-2xl font-bold text-white">90 / 110 / 130</p>
                </div>
              </div>
            </div>
            <div className="model-hero-stage">
              <div className="model-hero-glow" />

              <div className="model-hero-car">
                <Image
                  src="/images/models/defender.png"
                  alt="Defender 110 OCTA in Borasco Grey - front three-quarter view"
                  fill
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Intro */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">
              The 2026 Land Rover Defender: An Icon Reborn
            </h2>
            <p className="text-slate leading-relaxed mb-6">{model.financeOverview}</p>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Defender represents the pinnacle of Land Rover's reinvention of its most
              celebrated nameplate. When the original Defender ended production in 2016 after 67 years,
              many questioned whether its successor could capture the same spirit. The answer has been
              emphatic. The modern Defender has not merely replaced its predecessor -- it has elevated
              the concept into something that appeals far beyond the traditional Land Rover heartland.
              It is as at home threading through Chelsea as it is fording rivers on a Highland estate,
              and this extraordinary breadth of appeal has created demand that consistently outstrips supply.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The Defender's cultural significance extends well beyond the automotive sector. Its
              appearance in the James Bond franchise, its adoption by designers, architects and
              fashion houses, and its presence at both agricultural shows and art galleries speaks to
              a vehicle that has transcended its utilitarian origins. For 2026, Land Rover has expanded
              the range with the OCTA -- a 635 PS twin-turbo V8 performance flagship that redefines
              what an off-roader can achieve on tarmac while losing none of its mud-plugging credentials.
            </p>
            <p className="text-slate leading-relaxed">
              From a finance perspective, the Defender is one of the most compelling propositions in
              the premium SUV market. Its residual values are among the strongest of any vehicle on
              sale, which directly translates to lower PCP monthly payments relative to the vehicle's
              list price. Combined with the choice of three body styles, seven powertrains, and eight
              trim levels, there is a 2026 Defender configuration for virtually
              every requirement and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Body Styles Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Defender Body Styles: 90, 110 and 130
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            Three distinct body styles, each with its own character and purpose. Choose the Defender
            that fits your life.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Defender 90 */}
            <div className="bg-cream rounded-xl p-8 border border-sand/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-racing-green text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  2-Door
                </span>
                <span className="bg-sand/30 text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Capable
                </span>
              </div>
              <h3 className="text-2xl font-display text-racing-green mb-2">Defender 90</h3>
              <p className="text-sm text-slate mb-6 leading-relaxed">
                The short-wheelbase purist's choice. The 2026 Defender 90 is the most characterful
                and most capable off-road variant, with the shortest overhangs, tightest turning circle
                and a distinctive 2-door layout. The optional front centre jump seat creates a 5+1
                configuration unique to the 90. Its compact dimensions make it the most agile Defender
                in tight trails and urban environments alike.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Length</span>
                  <span className="font-semibold text-charcoal">4,583 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Width</span>
                  <span className="font-semibold text-charcoal">2,105 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Height</span>
                  <span className="font-semibold text-charcoal">1,967 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Wheelbase</span>
                  <span className="font-semibold text-charcoal">2,587 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Seating</span>
                  <span className="font-semibold text-charcoal">5+1 (jump seat opt.)</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Boot Capacity</span>
                  <span className="font-semibold text-charcoal">397 litres</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Approach / Departure</span>
                  <span className="font-semibold text-charcoal">38° / 40°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Price From</span>
                  <span className="font-bold text-racing-green">~£52,000</span>
                </div>
              </div>
              <p className="text-xs text-slate mt-4 italic">
                Typically £3,000-£5,000 less than the equivalent 110 specification.
              </p>
            </div>

            {/* Defender 110 */}
            <div className="bg-cream rounded-xl p-8 border-2 border-racing-green relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-racing-green text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="bg-sand/30 text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  4-Door
                </span>
                <span className="bg-sand/30 text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Best All-Rounder
                </span>
              </div>
              <h3 className="text-2xl font-display text-racing-green mb-2">Defender 110</h3>
              <p className="text-sm text-slate mb-6 leading-relaxed">
                The 2026 Defender 110 is the volume seller and the most versatile choice. Its 4-door
                layout, generous boot and optional 5+2 seating make it the natural daily driver for
                families and adventurers. The 110 has the widest engine range of any Defender, including
                the P400e PHEV and the range-topping OCTA. It is the benchmark against which all
                premium off-road SUVs are measured.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Length</span>
                  <span className="font-semibold text-charcoal">5,018 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Width</span>
                  <span className="font-semibold text-charcoal">2,105 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Height</span>
                  <span className="font-semibold text-charcoal">1,967 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Wheelbase</span>
                  <span className="font-semibold text-charcoal">3,022 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Seating</span>
                  <span className="font-semibold text-charcoal">5+2 (3rd row opt.)</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Boot Capacity</span>
                  <span className="font-semibold text-charcoal">786 litres</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Approach / Departure</span>
                  <span className="font-semibold text-charcoal">37.5° / 34°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Price From</span>
                  <span className="font-bold text-racing-green">~£55,000</span>
                </div>
              </div>
              <p className="text-xs text-slate mt-4 italic">
                The 110 is available with all seven powertrains including PHEV and OCTA.
              </p>
            </div>

            {/* Defender 130 */}
            <div className="bg-cream rounded-xl p-8 border border-sand/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-racing-green text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  4-Door Extended
                </span>
                <span className="bg-sand/30 text-charcoal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  8 Seats
                </span>
              </div>
              <h3 className="text-2xl font-display text-racing-green mb-2">Defender 130</h3>
              <p className="text-sm text-slate mb-6 leading-relaxed">
                The 2026 Defender 130 extends the 110 platform with a longer rear overhang to
                accommodate full-size third-row seats for 8 adults. It is the largest Defender ever
                made, offering genuine long-distance comfort for bigger families, school runs and group
                adventures. Despite its length, the 130 retains serious off-road capability with 3,500 kg
                towing capacity.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Length</span>
                  <span className="font-semibold text-charcoal">5,358 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Width</span>
                  <span className="font-semibold text-charcoal">2,105 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Height</span>
                  <span className="font-semibold text-charcoal">1,967 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Wheelbase</span>
                  <span className="font-semibold text-charcoal">3,022 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Seating</span>
                  <span className="font-semibold text-charcoal">8 seats (3 rows)</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Boot Capacity</span>
                  <span className="font-semibold text-charcoal">389L / 2,516L (folded)</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-slate">Approach / Departure</span>
                  <span className="font-semibold text-charcoal">37.5° / 28.5°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Price From</span>
                  <span className="font-bold text-racing-green">~£59,000</span>
                </div>
              </div>
              <p className="text-xs text-slate mt-4 italic">
                Typically £4,000-£6,000 more than the equivalent 110 specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Defender Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Seven powertrains spanning diesel, petrol, mild hybrid, plug-in hybrid and the
            twin-turbo V8 OCTA. Every engine is paired with an 8-speed automatic and
            permanent all-wheel drive.
          </p>
          <div className="overflow-x-auto rounded-xl border border-sand/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-racing-green text-white">
                  <th className="text-left px-4 py-3 font-display font-medium">Engine</th>
                  <th className="text-left px-4 py-3 font-display font-medium">Power</th>
                  <th className="text-left px-4 py-3 font-display font-medium">Torque</th>
                  <th className="text-left px-4 py-3 font-display font-medium">CO2 (g/km)</th>
                  <th className="text-left px-4 py-3 font-display font-medium">MPG</th>
                  <th className="text-left px-4 py-3 font-display font-medium">Available On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/20">
                <tr className="bg-white hover:bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">D250 Diesel</td>
                  <td className="px-4 py-3 text-slate">249 PS</td>
                  <td className="px-4 py-3 text-slate">570 Nm</td>
                  <td className="px-4 py-3 text-slate">234-253</td>
                  <td className="px-4 py-3 text-slate">29-31</td>
                  <td className="px-4 py-3 text-slate">90, 110, 130</td>
                </tr>
                <tr className="bg-cream/50 hover:bg-cream">
                  <td className="px-4 py-3 font-semibold text-charcoal">D300 Diesel</td>
                  <td className="px-4 py-3 text-slate">300 PS</td>
                  <td className="px-4 py-3 text-slate">650 Nm</td>
                  <td className="px-4 py-3 text-slate">234-257</td>
                  <td className="px-4 py-3 text-slate">28-31</td>
                  <td className="px-4 py-3 text-slate">90, 110, 130</td>
                </tr>
                <tr className="bg-white hover:bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">P300 Petrol</td>
                  <td className="px-4 py-3 text-slate">300 PS</td>
                  <td className="px-4 py-3 text-slate">400 Nm</td>
                  <td className="px-4 py-3 text-slate">254-268</td>
                  <td className="px-4 py-3 text-slate">24-26</td>
                  <td className="px-4 py-3 text-slate">90, 110</td>
                </tr>
                <tr className="bg-cream/50 hover:bg-cream">
                  <td className="px-4 py-3 font-semibold text-charcoal">P400 Mild Hybrid</td>
                  <td className="px-4 py-3 text-slate">400 PS</td>
                  <td className="px-4 py-3 text-slate">550 Nm</td>
                  <td className="px-4 py-3 text-slate">262-277</td>
                  <td className="px-4 py-3 text-slate">23-25</td>
                  <td className="px-4 py-3 text-slate">90, 110, 130</td>
                </tr>
                <tr className="bg-white hover:bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">P400e PHEV</td>
                  <td className="px-4 py-3 text-slate">404 PS</td>
                  <td className="px-4 py-3 text-slate">640 Nm</td>
                  <td className="px-4 py-3 text-slate">28-36</td>
                  <td className="px-4 py-3 text-slate">80-100</td>
                  <td className="px-4 py-3 text-slate">110 only</td>
                </tr>
                <tr className="bg-cream/50 hover:bg-cream">
                  <td className="px-4 py-3 font-semibold text-charcoal">V8 P525</td>
                  <td className="px-4 py-3 text-slate">525 PS</td>
                  <td className="px-4 py-3 text-slate">625 Nm</td>
                  <td className="px-4 py-3 text-slate">354</td>
                  <td className="px-4 py-3 text-slate">~18</td>
                  <td className="px-4 py-3 text-slate">90, 110</td>
                </tr>
                <tr className="bg-racing-green/5 hover:bg-racing-green/10 border-t-2 border-racing-green/20">
                  <td className="px-4 py-3 font-bold text-racing-green">OCTA (V8 Twin Turbo)</td>
                  <td className="px-4 py-3 font-semibold text-racing-green">635 PS</td>
                  <td className="px-4 py-3 font-semibold text-racing-green">750 Nm</td>
                  <td className="px-4 py-3 font-semibold text-racing-green">~310</td>
                  <td className="px-4 py-3 font-semibold text-racing-green">~20</td>
                  <td className="px-4 py-3 font-semibold text-racing-green">110 only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            All figures quoted for the 110 body style where available.
            All engines paired with ZF 8-speed automatic transmission and permanent all-wheel drive.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Defender Trim Levels and Pricing
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            Eight trim levels from the purposeful base model to the flagship OCTA. Prices shown
            are for the Defender 110; deduct £3,000-£5,000 for the 90, add £4,000-£6,000 for the 130.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Defender (Base) */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">Defender</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £55,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>19" steel wheels (90) or alloys</li>
                <li>Pivi Pro infotainment</li>
                <li>Heated front seats</li>
                <li>Wade sensing</li>
                <li>Terrain Response 2</li>
              </ul>
            </div>

            {/* S */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">S</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £58,500</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>19" alloy wheels</li>
                <li>Pivi Pro infotainment</li>
                <li>Heated front seats</li>
                <li>Wade sensing</li>
                <li>Terrain Response 2</li>
              </ul>
            </div>

            {/* SE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">SE</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £63,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>20" alloy wheels</li>
                <li>LED headlights</li>
                <li>Configurable terrain response</li>
                <li>Air suspension (optional)</li>
                <li>Enhanced interior</li>
              </ul>
            </div>

            {/* HSE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">HSE</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £69,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>Electronic air suspension (std)</li>
                <li>20" alloy wheels</li>
                <li>Premium LED headlights</li>
                <li>Heated steering wheel</li>
                <li>360° parking aid</li>
              </ul>
            </div>

            {/* X-Dynamic SE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">X-Dynamic SE</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £66,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>Black exterior pack</li>
                <li>Shadow Atlas details</li>
                <li>Contrast roof option</li>
                <li>Sportier styling cues</li>
                <li>SE equipment level</li>
              </ul>
            </div>

            {/* X-Dynamic HSE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">X-Dynamic HSE</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £72,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>Black exterior pack</li>
                <li>Shadow Atlas details</li>
                <li>Contrast roof option</li>
                <li>Sportier styling cues</li>
                <li>HSE equipment level</li>
              </ul>
            </div>

            {/* X */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-1">X</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £78,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>22" alloy wheels</li>
                <li>Premium Meridian sound</li>
                <li>Sliding panoramic roof</li>
                <li>Configurable ambient lighting</li>
                <li>Full luxury specification</li>
              </ul>
            </div>

            {/* V8 */}
            <div className="bg-cream rounded-xl p-6 border border-racing-green/30">
              <h3 className="text-lg font-display text-racing-green mb-1">V8</h3>
              <p className="text-xl font-bold text-charcoal mb-4">From £98,000</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>Unique quad-exit exhaust</li>
                <li>Blue brake calipers</li>
                <li>22" forged alloy wheels</li>
                <li>Sports suspension</li>
                <li>525 PS supercharged V8</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OCTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sand font-display text-sm uppercase tracking-widest mb-3">
              Flagship Performance Variant
            </p>
            <h2 className="text-3xl lg:text-4xl font-display text-white mb-4">
              2026 Defender OCTA
            </h2>
            <p className="text-white/80 leading-relaxed">
              The most powerful and capable Defender ever made. The 2026 OCTA takes the Defender 110
              platform and transforms it with a twin-turbocharged V8, bespoke chassis engineering and
              a rally-inspired drivetrain. Starting from £120,000+, the OCTA occupies a category of one.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-lg font-display text-sand mb-3">Twin-Turbo V8 Power</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                The OCTA's 4.4-litre twin-turbocharged V8 produces 635 PS and 750 Nm of torque,
                delivering extraordinary performance for a vehicle of this size. This is a Defender
                that rewrites the performance rulebook.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-lg font-display text-sand mb-3">Rally-Bred Chassis</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                The OCTA features a wider track than any other Defender, with a unique body kit
                that extends the wheel arches. 6-piston Brembo brakes provide immense stopping
                power. The bespoke suspension and rear electronic differential are calibrated for
                both high-speed tarmac work and serious off-road performance.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-lg font-display text-sand mb-3">Unique Specification</h3>
              <p className="text-sm text-white/80 leading-relaxed">
                The OCTA is distinguished by 33-inch all-terrain tyres, a rally-inspired 4x4 system
                with rear e-diff, bespoke interior trim and unique exterior detailing. Available
                exclusively on the 110 body style, limited production numbers are expected to support
                exceptional residual values, making the OCTA a compelling finance proposition.
              </p>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Power</p>
              <p className="text-2xl font-bold text-white">635 PS</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Torque</p>
              <p className="text-2xl font-bold text-white">750 Nm</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Price From</p>
              <p className="text-2xl font-bold text-white">£120,000+</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-3 text-center">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Brakes</p>
              <p className="text-2xl font-bold text-white">6-Piston Brembo</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Trim Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Land Rover Defender Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Land Rover Defender trim levels. All body styles (90/110/130) available across trims. Prices shown for Defender 110.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-slate font-semibold min-w-[160px]">Feature</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Defender</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">S</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">X-Dynamic SE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">X-Dynamic HSE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">X</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">V8</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">OCTA</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£55,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£58,500</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£63,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£70,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£82,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£98,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£145,300</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">18"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">19"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">LED Headlights</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Matrix</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Matrix</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Matrix</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pivi Pro Infotainment</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Interior</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Resist</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained Leather</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained Leather</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">SV Bespoke</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">OCTA Bespoke</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Front Seats</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Rear Seats</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Terrain Response 2</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Air Suspension</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">6D Dynamics</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Meridian Sound</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">ClearSight Mirror</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Configurable Ambient Lighting</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Head-Up Display</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
              </tbody>
            </table>
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
            Illustrative figures only. Actual rates depend on individual circumstances and credit profile. Use our calculator to estimate payments for a 2026 {model.fullName} 110 priced from {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            2026 {model.fullName} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Calculate monthly payments for your 2026 Defender 90, 110 or 130. Adjust the vehicle
            price to match your chosen body style and specification, then explore PCP, HP and
            lease options side by side.
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

      {/* Off-Road Capability */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Defender Off-Road Capability
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            The Defender remains the most capable vehicle Land Rover makes. Every model features
            permanent all-wheel drive, Terrain Response 2 and a body-on-frame-inspired architecture
            engineered for the most demanding environments on earth.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Wading Depth</p>
              <p className="text-3xl font-bold text-racing-green">900mm</p>
              <p className="text-xs text-slate mt-1">with wade sensing</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Ground Clearance</p>
              <p className="text-3xl font-bold text-racing-green">291mm</p>
              <p className="text-xs text-slate mt-1">with air suspension</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Approach Angle (90)</p>
              <p className="text-3xl font-bold text-racing-green">38°</p>
              <p className="text-xs text-slate mt-1">110: 37.5°</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Departure Angle (90)</p>
              <p className="text-3xl font-bold text-racing-green">40°</p>
              <p className="text-xs text-slate mt-1">110: 34° / 130: 28.5°</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Towing Capacity</p>
              <p className="text-3xl font-bold text-racing-green">3,500 kg</p>
              <p className="text-xs text-slate mt-1">all body styles</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Roof Load (Static)</p>
              <p className="text-3xl font-bold text-racing-green">168 kg</p>
              <p className="text-xs text-slate mt-1">300 kg with roof rack</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Terrain Response</p>
              <p className="text-3xl font-bold text-racing-green">TR2</p>
              <p className="text-xs text-slate mt-1">configurable from SE</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Drivetrain</p>
              <p className="text-3xl font-bold text-racing-green">AWD</p>
              <p className="text-xs text-slate mt-1">permanent, all models</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.fullName} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Body Styles</p>
              <p className="text-sm font-semibold text-charcoal">90 / 110 / 130</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Engines</p>
              <p className="text-sm font-semibold text-charcoal">{model.engineOptions.join(", ")}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Seating</p>
              <p className="text-sm font-semibold text-charcoal">5+1 / 5+2 / 8</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Insurance Group</p>
              <p className="text-sm font-semibold text-charcoal">{model.insuranceGroup}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">CO2 Emissions</p>
              <p className="text-sm font-semibold text-charcoal">28-354 g/km</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Fuel Economy</p>
              <p className="text-sm font-semibold text-charcoal">18-100 mpg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance a Defender */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Land Rover Defender?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Exceptional Residual Values</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Defender holds its value better than virtually any other SUV on sale. Standard
                models typically retain 60-65% of their original price after three years, while
                special editions, V8 and OCTA models can retain even more. This extraordinary residual
                performance has a direct and significant impact on PCP finance. A higher residual
                value means a larger portion of the car's cost is deferred to the balloon payment,
                reducing your monthly outlay. In practical terms, a Defender can have lower PCP
                payments than less expensive vehicles with weaker residual values.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Three Body Styles, One Icon</h3>
              <p className="text-sm text-slate leading-relaxed">
                The choice of 90, 110 and 130 body styles means there is a 2026 Defender for virtually
                every requirement. The 90 is the purist's choice and the most affordable entry point,
                starting from around £52,000. The 110 adds two doors and significantly more practicality,
                while the 130 extends to full eight-seat capability from around £59,000. Each body style
                can be extensively personalised through Land Rover's accessory programme, with additions
                like the expedition roof rack, side-mounted gear carrier and exterior protection packages
                that can be included in your finance agreement and spread across monthly payments.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">V8 and OCTA Investment Potential</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Defender V8 P525 and the new OCTA occupy unique positions in the automotive
                market. The V8 produces 525 PS from its supercharged 5.0-litre engine, while the OCTA
                pushes to 635 PS from a twin-turbo V8. Limited production numbers and overwhelming
                demand have created situations where these models trade above their original list price.
                For PCP customers, this means the balloon payment at the end of the term may be lower
                than the vehicle's market value, creating positive equity that can fund the deposit on
                your next vehicle.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Modern Icon Status</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Defender has achieved something rare in the automotive world: genuine icon
                status for a modern vehicle. It has become a design reference point and a cultural
                symbol that transcends the automotive sector. Featured in the James Bond franchise,
                embraced by designers and architects, and equally at home at country estates and
                London restaurants, the Defender's appeal is uniquely broad. This cultural significance
                underpins its demand profile and provides confidence that the Defender will remain
                desirable for years to come, supporting long-term residual values.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Land Rover Defender
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">What Car?</span>
                <span className="text-sand font-bold text-lg">5/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;Premium SUV of the Year 2026. A very versatile SUV that's stylish, practical and plush, available in a variety of body styles to cater for different needs.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/defender/4x4/review/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Top Gear</span>
                <span className="text-sand font-bold text-lg">9/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;Top Gear Car of the Year. One of the most desirable vehicles on the market, combining unstoppable off-road capability with contemporary luxury.&rdquo;
              </p>
              <a
                href="https://www.topgear.com/car-reviews/land-rover/defender"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Car Magazine</span>
                <span className="text-sand font-bold text-lg">4.5/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;Still the best 4x4 by far? The Defender has become one of the most desirable vehicles on the market, with some models actually appreciating in value.&rdquo;
              </p>
              <a
                href="https://www.carmagazine.co.uk/car-reviews/land-rover/defender-4x4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Carwow</span>
                <span className="text-sand font-bold text-lg">9/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;For family buyers and off-road enthusiasts alike, the Defender 110 is just about unbeatable.&rdquo;
              </p>
              <a
                href="https://www.carwow.co.uk/land-rover/defender-110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            Watch Land Rover Defender Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+land+rover+defender+review+2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-cream rounded-xl p-5 border border-sand/30 hover:border-sand transition-colors group"
            >
              <div className="w-12 h-12 bg-racing-green rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Land Rover Defender Review</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+land+rover+defender+review+2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-cream rounded-xl p-5 border border-sand/30 hover:border-sand transition-colors group"
            >
              <div className="w-12 h-12 bg-racing-green rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Defender - Best Off-Road SUV?</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=top+gear+defender+octa+review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-cream rounded-xl p-5 border border-sand/30 hover:border-sand transition-colors group"
            >
              <div className="w-12 h-12 bg-racing-green rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sand" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div>
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Defender OCTA Review</p>
                <p className="text-slate text-sm">Top Gear</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection title={`2026 ${model.fullName} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Explore 2026 Defender Finance Options"
        description="Use our calculator to compare PCP, HP and lease costs for the 2026 Defender 90, 110, 130 and OCTA across all trims."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
