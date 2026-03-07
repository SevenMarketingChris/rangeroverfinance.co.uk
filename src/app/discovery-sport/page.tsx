import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

const model = getModelBySlug("discovery-sport")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const powertrains = [
  { engine: "P200 Petrol MHEV", power: "200 PS", torque: "340 Nm", acceleration: "8.6s", topSpeed: "127 mph", co2: "180-194", mpg: "33-36" },
  { engine: "P250 Petrol MHEV", power: "249 PS", torque: "365 Nm", acceleration: "7.2s", topSpeed: "136 mph", co2: "180-194", mpg: "33-36" },
  { engine: "P300e PHEV", power: "309 PS", torque: "540 Nm", acceleration: "6.6s", topSpeed: "130 mph", co2: "36-44", mpg: "130-141" },
  { engine: "D165 Diesel MHEV", power: "163 PS", torque: "380 Nm", acceleration: "9.9s", topSpeed: "117 mph", co2: "163-175", mpg: "43-46" },
  { engine: "D200 Diesel MHEV", power: "204 PS", torque: "430 Nm", acceleration: "8.4s", topSpeed: "127 mph", co2: "163-179", mpg: "42-46" },
];

const trimLevels = [
  {
    name: "Discovery Sport",
    price: "From £36,000",
    features: [
      '18" alloy wheels',
      "Pivi Pro 11.4\" infotainment",
      "LED headlights",
      "5+2 seating",
      "Heated front seats",
      "Dual-zone climate control",
    ],
  },
  {
    name: "S",
    price: "From £38,500",
    features: [
      '19" alloy wheels',
      "Rear parking camera",
      "Auto-dimming interior mirror",
      "Rain-sensing wipers",
      "All base features included",
    ],
  },
  {
    name: "Dynamic SE",
    price: "From £41,500",
    features: [
      '20" alloy wheels',
      "Meridian 380W sound system",
      "Gesture-controlled powered tailgate",
      "Blind spot assist",
      "Dynamic exterior styling pack",
    ],
  },
  {
    name: "Dynamic HSE",
    price: "From £45,000",
    features: [
      '20" alloy wheels',
      "Meridian 540W surround sound",
      "Head-up display",
      "ClearSight interior rear-view mirror",
      "Heated rear seats",
      "Heated steering wheel",
    ],
  },
  {
    name: "Autobiography",
    price: "From £49,000",
    features: [
      '21" alloy wheels',
      "Meridian 650W surround sound",
      "Premium Windsor leather",
      "Massage front seats",
      "Cabin air purification",
      "Configurable ambient lighting",
    ],
  },
];

const faqs = [
  {
    question: "Is the 2026 Discovery Sport really the most affordable Land Rover to finance?",
    answer:
      "Yes, the 2026 Discovery Sport is the most affordable vehicle in the entire Land Rover and Range Rover lineup, with prices starting from £36,000 and typical PCP payments from just £349 per month. It offers the lowest entry point to Land Rover ownership while still delivering genuine all-wheel-drive capability, a premium interior, and the option of 5+2 seating. Insurance groups of 25-34 are also the lowest across the range, which further reduces total ownership costs for younger or less experienced drivers.",
  },
  {
    question: "How practical are the 5+2 seats in the 2026 Discovery Sport?",
    answer:
      "The 2026 Discovery Sport's 5+2 seating arrangement provides two additional seats in the boot area that are best suited for children or adults up to around 5 foot 7 inches. Unlike the full-size Discovery, these are not full-size adult seats, but they are perfectly adequate for school runs, sports clubs, and short journeys with extra passengers. Row two slides and reclines independently, and row three folds completely flat into the floor. With all seven seats in use you get 115 litres of boot space; fold the third row for 596 litres; fold both rear rows for a cavernous 1,451 litres.",
  },
  {
    question: "Should I choose the 2026 P300e PHEV Discovery Sport for company car tax savings?",
    answer:
      "The 2026 Discovery Sport P300e PHEV is an excellent choice for company car drivers. With CO2 emissions from just 36 g/km, it qualifies for a BIK rate of approximately 8%, compared to 37% for petrol and diesel variants. For a 40% taxpayer on a £42,000 Discovery Sport, the PHEV would attract monthly BIK tax of around £112, compared to approximately £518 for a petrol equivalent. Over a 48-month finance term, that represents a total tax saving of nearly £19,500 — more than enough to offset the PHEV's slightly higher purchase price.",
  },
  {
    question: "How does the 2026 Discovery Sport compare to the Range Rover Evoque on finance?",
    answer:
      "The 2026 Discovery Sport and Evoque are similarly priced, with the Discovery Sport starting approximately £2,500 less. However, they serve different purposes. The Discovery Sport prioritises practicality with its 5+2 seating, larger boot, and more upright driving position. The Evoque focuses on style with its coupe-like roofline and more fashion-forward design. On finance, the Discovery Sport typically offers slightly lower monthly payments due to its lower starting price, though the Evoque may hold its value marginally better in percentage terms due to its stronger brand image.",
  },
  {
    question: "Can I finance a 2026 Discovery Sport with no deposit?",
    answer:
      "Some lenders do offer zero-deposit Discovery Sport finance, particularly on PCP agreements. However, a zero-deposit deal will result in higher monthly payments and potentially a higher APR. Most finance specialists recommend a deposit of at least 10% (around £3,600) to secure competitive rates and keep monthly payments comfortable. If you have a vehicle to part-exchange, its value can be used as your deposit, which is a convenient way to reduce your monthly outgoings without a cash deposit.",
  },
  {
    question: "What is the best 2026 Discovery Sport specification for holding its value?",
    answer:
      "The Dynamic SE and Dynamic HSE specifications tend to hold their value best on the used market, as they strike the right balance between desirable equipment levels and reasonable purchase price. The Dynamic exterior styling is also popular with used buyers. In terms of powertrain, the D200 diesel and P300e PHEV retain value most strongly — the diesel for its broad appeal to high-mileage buyers, and the PHEV for its tax advantages. Black exterior colours and light interior trims tend to achieve the strongest residual values in the used market.",
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
              2026 {model.fullName} Finance
            </h1>
            <p className="mt-3 text-xl text-sand font-display">
              The most affordable Land Rover. Compact family capability with 5+2 seating from just {formatCurrency(model.typicalMonthly)}/mo.
            </p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              The 2026 Discovery Sport (L550) is the entry point to Land Rover ownership — a compact
              family SUV that seats up to seven, tows 2,500 kg, and wades through 600mm of water, all
              while fitting comfortably into a supermarket car park. With five powertrains including
              a plug-in hybrid offering CO2 from just 36 g/km, the Discovery Sport makes premium
              SUV finance more accessible than ever.
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

      {/* Extended Intro */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">
              The 2026 Discovery Sport: Land Rover's Accessible Family SUV
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Discovery Sport (internal code L550) occupies a unique position in the premium
              compact SUV market. It is the most affordable Land Rover you can buy, yet it delivers
              the brand's core promises without compromise: genuine all-terrain capability, a robust
              and refined cabin, and the kind of everyday versatility that makes family life easier.
              At 4,597mm long and 1,727mm tall, it threads the needle between commanding road presence
              and manageable urban dimensions.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 model year engine lineup is thoughtfully calibrated for the Discovery Sport's
              typical buyer profile. The P200 petrol MHEV is the entry-level choice, offering smooth
              refinement for urban-focused drivers. The P250 adds a welcome power increase for
              mixed-use driving. The D165 and D200 diesels suit higher-mileage families who need
              efficiency on long school holiday drives and countryside weekends. The P300e PHEV,
              producing 309 PS and 540 Nm with CO2 from just 36 g/km, is transforming the
              Discovery Sport's appeal for company car drivers, offering BIK tax rates that make
              premium SUV ownership significantly more affordable than many smaller, less capable
              vehicles.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              At its price point, the 2026 Discovery Sport competes with the BMW X1 and X3, Audi Q3
              and Q5, Mercedes GLA and GLB, and Volvo XC40 and XC60. However, none of these
              competitors offers the combination of 5+2 seating, genuine all-wheel-drive capability
              with Terrain Response 2, and the Land Rover badge. This unique positioning means the
              Discovery Sport retains a loyal buyer base that drives consistent used market demand,
              supporting the residual values that underpin affordable PCP monthly payments.
            </p>
            <p className="text-slate leading-relaxed">
              The Discovery Sport is extremely popular in the UK market. It is the perfect choice for
              young families wanting genuine capability and optional seven-seat practicality in a
              compact, easy-to-park package. Strong residual values for its price bracket keep
              finance payments competitive, and the breadth of the trim range — from the well-equipped
              base model at £36,000 to the luxurious Autobiography at £49,000 — means there is a
              Discovery Sport for almost every budget.
            </p>
          </div>
        </div>
      </section>

      {/* 5+2 Seating & Versatility */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            5+2 Seating &amp; Versatility
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            The 2026 Discovery Sport's flexible seating is a genuine differentiator in the compact
            SUV segment. Few competitors offer any form of third-row seating at this size and price.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl font-display text-racing-green mb-4">Seating Configuration</h3>
              <div className="space-y-4">
                <div className="bg-cream rounded-lg p-5">
                  <p className="text-sm font-semibold text-charcoal mb-1">Row 1 — Front</p>
                  <p className="text-sm text-slate">2 seats. Heated as standard. Available massage on Autobiography.</p>
                </div>
                <div className="bg-cream rounded-lg p-5">
                  <p className="text-sm font-semibold text-charcoal mb-1">Row 2 — Middle</p>
                  <p className="text-sm text-slate">3 seats with ISOFIX on both outer positions. Independent slide and recline for each seat. 40:20:40 split-fold.</p>
                </div>
                <div className="bg-cream rounded-lg p-5">
                  <p className="text-sm font-semibold text-charcoal mb-1">Row 3 — Rear</p>
                  <p className="text-sm text-slate">2 seats best suited for children or adults up to approximately 5 foot 7 inches. Flat-folding into the floor when not in use.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-display text-racing-green mb-4">Boot Capacity</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-cream rounded-lg p-5">
                  <span className="text-sm text-charcoal font-medium">7 seats in use</span>
                  <span className="text-lg font-bold text-racing-green">115 litres</span>
                </div>
                <div className="flex justify-between items-center bg-cream rounded-lg p-5">
                  <span className="text-sm text-charcoal font-medium">5 seats in use</span>
                  <span className="text-lg font-bold text-racing-green">596 litres</span>
                </div>
                <div className="flex justify-between items-center bg-cream rounded-lg p-5">
                  <span className="text-sm text-charcoal font-medium">2 seats in use</span>
                  <span className="text-lg font-bold text-racing-green">1,451 litres</span>
                </div>
              </div>
              <p className="text-sm text-slate mt-4">
                Both the second and third rows fold completely flat, creating a level load floor
                ideal for pushchairs, bikes, luggage, and large shopping loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Discovery Sport Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five engines spanning petrol MHEV, diesel MHEV, and plug-in hybrid. Every 2026
            Discovery Sport features a 9-speed automatic transmission.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-racing-green text-white">
                  <th className="text-left px-4 py-3 font-display">Engine</th>
                  <th className="text-center px-4 py-3 font-display">Power</th>
                  <th className="text-center px-4 py-3 font-display">Torque</th>
                  <th className="text-center px-4 py-3 font-display">0-60 mph</th>
                  <th className="text-center px-4 py-3 font-display">Top Speed</th>
                  <th className="text-center px-4 py-3 font-display">CO2 (g/km)</th>
                  <th className="text-center px-4 py-3 font-display">MPG</th>
                </tr>
              </thead>
              <tbody>
                {powertrains.map((pt, i) => (
                  <tr key={pt.engine} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                    <td className="px-4 py-3 font-semibold text-charcoal">{pt.engine}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.power}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.torque}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.acceleration}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.topSpeed}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.co2}</td>
                    <td className="px-4 py-3 text-center text-slate">{pt.mpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            Figures are manufacturer-quoted WLTP combined. PHEV MPG figures reflect a full battery charge. Actual results will vary.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Discovery Sport Trim Levels &amp; Pricing
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            Five distinct specifications from the well-equipped base model to the luxurious
            Autobiography. All 2026 model year prices shown.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trimLevels.map((trim) => (
              <div
                key={trim.name}
                className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30 flex flex-col"
              >
                <h3 className="text-xl font-display text-racing-green mb-1">{trim.name}</h3>
                <p className="text-lg font-bold text-charcoal mb-4">{trim.price}</p>
                <ul className="space-y-2 flex-1">
                  {trim.features.map((feature) => (
                    <li key={feature} className="text-sm text-slate flex items-start gap-2">
                      <span className="text-racing-green mt-0.5 shrink-0">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Compare 2026 {model.name} Finance Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-sand/30">
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
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-sand/30">
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
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-sand/30">
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
            a 2026 {model.fullName} priced from {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            2026 {model.fullName} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Explore affordable monthly payments for the 2026 Discovery Sport. Adjust the
            sliders to match your budget and compare PCP, HP and lease options side by side.
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

      {/* Key Specifications Grid */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.fullName} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Length</p>
              <p className="text-sm font-semibold text-charcoal">4,597 mm</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Width (inc. mirrors)</p>
              <p className="text-sm font-semibold text-charcoal">2,173 mm</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Height</p>
              <p className="text-sm font-semibold text-charcoal">1,727 mm</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Wheelbase</p>
              <p className="text-sm font-semibold text-charcoal">2,741 mm</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Seating</p>
              <p className="text-sm font-semibold text-charcoal">5+2 (up to 7)</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Kerb Weight</p>
              <p className="text-sm font-semibold text-charcoal">1,768 - 2,043 kg</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Insurance Group</p>
              <p className="text-sm font-semibold text-charcoal">{model.insuranceGroup}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">CO2 Emissions</p>
              <p className="text-sm font-semibold text-charcoal">36 - 194 g/km</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Fuel Economy</p>
              <p className="text-sm font-semibold text-charcoal">33 - 141 mpg</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Boot (5-seat)</p>
              <p className="text-sm font-semibold text-charcoal">596 litres</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Boot (2-seat)</p>
              <p className="text-sm font-semibold text-charcoal">1,451 litres</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Drivetrain</p>
              <p className="text-sm font-semibold text-charcoal">AWD standard*</p>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            * All-wheel drive standard on all models except the base P200 which offers a front-wheel-drive option.
          </p>
        </div>
      </section>

      {/* Capability Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            Genuine Capability, Compact Dimensions
          </h2>
          <p className="text-slate text-center mb-12 max-w-2xl mx-auto">
            The 2026 Discovery Sport is a proper Land Rover. It may be the most compact model in
            the range, but it delivers real off-road ability and towing capability that competitors
            simply cannot match.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-xl p-6 text-center border border-sand/30">
              <p className="text-3xl font-bold text-racing-green mb-2">2,500 kg</p>
              <p className="text-sm font-semibold text-charcoal mb-1">Braked Towing</p>
              <p className="text-xs text-slate">Caravans, horse trailers, and boats — the Discovery Sport handles serious towing duties with confidence.</p>
            </div>
            <div className="bg-cream rounded-xl p-6 text-center border border-sand/30">
              <p className="text-3xl font-bold text-racing-green mb-2">600 mm</p>
              <p className="text-sm font-semibold text-charcoal mb-1">Wading Depth</p>
              <p className="text-xs text-slate">Nearly two feet of water fording ability. Flooded lanes and ford crossings are no obstacle.</p>
            </div>
            <div className="bg-cream rounded-xl p-6 text-center border border-sand/30">
              <p className="text-3xl font-bold text-racing-green mb-2">212 mm</p>
              <p className="text-sm font-semibold text-charcoal mb-1">Ground Clearance</p>
              <p className="text-xs text-slate">Ample clearance for rutted tracks, field parking, and unsurfaced rural roads.</p>
            </div>
            <div className="bg-cream rounded-xl p-6 text-center border border-sand/30">
              <p className="text-3xl font-bold text-racing-green mb-2">TR2</p>
              <p className="text-sm font-semibold text-charcoal mb-1">Terrain Response 2</p>
              <p className="text-xs text-slate">Standard on all 2026 models. Automatically detects the surface and adjusts throttle, gearbox, and traction settings.</p>
            </div>
          </div>
          <p className="text-sm text-slate text-center mt-8 max-w-2xl mx-auto">
            ClearSight Ground View technology is available on Dynamic SE and above, projecting a
            virtual image of the terrain beneath the bonnet onto the touchscreen for precise
            off-road manoeuvring.
          </p>
        </div>
      </section>

      {/* Why Finance a Discovery Sport */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Discovery Sport?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Affordable Premium Ownership</h3>
              <p className="text-sm text-slate leading-relaxed">
                Starting from £36,000 with PCP payments from just {formatCurrency(model.typicalMonthly)} per
                month, the 2026 Discovery Sport is the most affordable way into the Land Rover
                family. This accessible pricing brings premium SUV ownership within reach of a
                significantly wider audience than the larger Discovery or Range Rover models.
                Despite its entry-level positioning, the Discovery Sport does not compromise on the
                core Land Rover attributes of all-weather capability, robust build quality, and a
                genuinely premium cabin environment with the 11.4-inch Pivi Pro system as standard.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Tax Savings</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 P300e plug-in hybrid Discovery Sport is a game-changer for company car
                drivers. With CO2 emissions from 36 g/km, BIK tax rates are dramatically lower
                than those for conventional petrol and diesel models. A 40% taxpayer could pay as
                little as £112 per month in BIK tax on a Discovery Sport PHEV, compared to over
                £500 for a petrol equivalent. The electric range covers most commutes without using
                any fuel, and overnight home charging keeps running costs to a minimum. Over a
                typical 4-year finance term, the tax saving alone can exceed £19,000.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Unmatched Versatility</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Discovery Sport's 5+2 seating configuration is a genuine differentiator
                in the compact SUV segment. Few competitors offer any form of third-row seating at
                this size and price point. For families with young children who occasionally need
                to carry extra passengers — whether for playdates, school runs, or family trips —
                the two additional seats eliminate the need for a larger and less manoeuvrable
                vehicle. With seats folded, up to 1,451 litres of boot space handles everything
                from pushchairs and bikes to holiday luggage and flat-pack furniture.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Strong Residual Values</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Discovery Sport holds its value well relative to its price bracket, which
                directly benefits finance customers through lower PCP monthly payments and smaller
                negative equity gaps. The unique combination of 5+2 seating, genuine off-road
                capability, and the desirable Land Rover badge creates consistent demand on the
                used market. The Dynamic SE and Dynamic HSE trims in particular retain strong
                residual values, and the D200 diesel and P300e PHEV powertrains are the most
                sought-after on the used market, supporting competitive guaranteed minimum future
                values on PCP agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title="2026 Discovery Sport Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Discovery Sport?"
        description="The most affordable Land Rover is within reach. Get a free, no-obligation finance quote for the 2026 Discovery Sport today."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
