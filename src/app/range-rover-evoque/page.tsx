import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

const model = getModelBySlug("range-rover-evoque")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "What are the monthly finance payments on a 2026 Range Rover Evoque?",
    answer:
      "Monthly payments on the 2026 Range Rover Evoque start from around £389 per month on PCP finance, based on the entry-level Evoque trim priced from £38,500 with a typical 10% deposit over 48 months. Higher specifications such as the Dynamic HSE (from £48,000) or Autobiography (from £53,000) will naturally carry higher monthly payments, though strong residual values across the Evoque range help keep PCP costs competitive. HP finance offers fixed monthly payments with full ownership at the end, while leasing provides the lowest monthly outlay with no balloon payment to consider.",
  },
  {
    question: "Is the 2026 Evoque P300e PHEV a good choice for company car drivers?",
    answer:
      "The 2026 Evoque P300e is one of the strongest company car choices in the compact luxury SUV segment. With CO2 emissions from just 32-36 g/km and an electric-only range of up to 39 miles (62 km), it qualifies for a Benefit in Kind rate of around 8% — compared to 37% for the standard petrol models. For a 40% taxpayer financing a £45,000 P300e, the monthly BIK tax could be as low as £120, saving over £400 per month compared to a conventionally powered Evoque. The 15 kWh battery comfortably covers most daily commutes on electric power alone, further reducing running costs.",
  },
  {
    question: "How does the 2026 Evoque compare to the BMW X1 and Audi Q3 on finance?",
    answer:
      "The 2026 Range Rover Evoque sits competitively alongside the BMW X1, Audi Q3, Mercedes GLA/GLB, and Volvo XC40 in terms of monthly finance costs. Where the Evoque differentiates itself is in residual value retention — the Range Rover badge carries significant desirability, and Evoque residuals of 48-52% after three years are among the strongest in the compact premium SUV segment. This means PCP balloon payments are set higher, reducing the monthly amount you actually pay. The Evoque also offers genuine all-wheel-drive capability with Terrain Response 2 and 600mm wading depth, which none of its key competitors can match.",
  },
  {
    question: "Can I finance a 2026 Evoque with a low deposit or no deposit?",
    answer:
      "Yes, many lenders offer 2026 Evoque finance with deposits as low as £1,000, and some zero-deposit deals are available subject to credit approval. A smaller deposit will increase your monthly payments and may attract a slightly higher APR. We generally recommend a deposit of 10-15% (approximately £3,850-£5,775 on the base model) to secure the most competitive rates and keep monthly payments manageable. Part-exchange vehicles are also widely accepted as deposits, which can be a convenient way to fund your down payment without a cash outlay.",
  },
  {
    question: "What is the difference between PCP, HP, and leasing for a 2026 Evoque?",
    answer:
      "PCP (Personal Contract Purchase) offers the lowest monthly payments by deferring a portion of the cost to a final balloon payment — ideal if you like to change your Evoque every 3-4 years. HP (Hire Purchase) spreads the full cost over monthly instalments with no balloon, so you own the car outright at the end — best for buyers who plan to keep their Evoque long-term. Leasing (Personal Contract Hire) provides the lowest monthly outlay with no ownership and no balloon, but you must return the car at the end of the term and stay within agreed mileage limits. For the 2026 Evoque, PCP is the most popular choice due to competitive residual values and the flexibility it offers at end of term.",
  },
  {
    question: "What warranty and maintenance cover comes with a financed 2026 Evoque?",
    answer:
      "Every new 2026 Range Rover Evoque comes with a comprehensive 3-year/100,000-mile manufacturer warranty, which runs concurrently with most finance agreements. For 48-month PCP or HP deals, the final year falls outside warranty cover, but this can be addressed with an extended warranty package typically costing £400-£600 — and many finance agreements allow you to roll this into your monthly payment. Land Rover also offers service plans that fix your maintenance costs for 3-5 years, covering scheduled servicing at a predictable monthly cost. The Evoque's service intervals are every 12 months or 16,000 miles, whichever comes first.",
  },
];

const powertrains = [
  {
    engine: "P200 Petrol MHEV",
    power: "200 PS",
    torque: "340 Nm",
    acceleration: "8.5s",
    topSpeed: "129 mph",
    co2: "175-182",
    mpg: "35-37",
  },
  {
    engine: "P250 Petrol MHEV",
    power: "249 PS",
    torque: "365 Nm",
    acceleration: "7.0s",
    topSpeed: "143 mph",
    co2: "175-182",
    mpg: "35-37",
  },
  {
    engine: "P300e PHEV",
    power: "309 PS",
    torque: "540 Nm",
    acceleration: "6.1s",
    topSpeed: "130 mph",
    co2: "32-36",
    mpg: "141-177",
  },
  {
    engine: "D165 Diesel MHEV",
    power: "163 PS",
    torque: "380 Nm",
    acceleration: "9.6s",
    topSpeed: "121 mph",
    co2: "149-158",
    mpg: "47-50",
  },
];

const trimLevels = [
  {
    name: "Evoque",
    price: "£38,500",
    features: [
      '18" alloy wheels',
      'Pivi Pro 11.4" touchscreen infotainment',
      "LED headlights",
      "Dual-zone climate control",
      "Heated front seats",
      "Terrain Response 2",
      "All-wheel drive",
    ],
  },
  {
    name: "S",
    price: "£41,000",
    features: [
      '19" alloy wheels',
      "Rear parking camera",
      "Blind spot assist",
      "Auto-dimming interior mirror",
      "All base Evoque features",
    ],
  },
  {
    name: "Dynamic SE",
    price: "£44,500",
    features: [
      '20" alloy wheels',
      "Meridian 380W sound system",
      "Adaptive dynamics suspension",
      "Gesture-controlled powered tailgate",
      "Privacy glass",
      "Dynamic exterior styling pack",
    ],
  },
  {
    name: "Dynamic HSE",
    price: "£48,000",
    features: [
      '21" alloy wheels',
      "Meridian 660W surround sound",
      "Head-up display",
      "ClearSight rear-view mirror",
      "Heated rear seats",
      "Heated steering wheel",
    ],
  },
  {
    name: "Autobiography",
    price: "£53,000",
    features: [
      '21" diamond-turned alloy wheels',
      "Meridian Signature 825W sound",
      "Premium Windsor leather upholstery",
      "Massage front seats",
      "Cabin air purification",
      "Configurable ambient interior lighting",
    ],
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
            <p className="text-sand font-display text-sm uppercase tracking-widest mb-3">
              2026 Model Year
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
              {model.name} Finance
            </h1>
            <p className="mt-3 text-xl text-sand font-display">
              The most accessible Range Rover. Compact luxury SUV finance from
              £389/month.
            </p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Finance the 2026 Range Rover Evoque — the compact crossover SUV
              that brings Range Rover design, capability, and craftsmanship to a
              city-friendly footprint. Available with petrol MHEV, diesel MHEV,
              and plug-in hybrid powertrains across five carefully curated trim
              levels.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Price From
                </p>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(model.priceFrom)}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Monthly From
                </p>
                <p className="text-2xl font-bold text-sand">
                  {formatCurrency(model.typicalMonthly)}/mo
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">Deposit</p>
                <p className="text-2xl font-bold text-white">{formatCurrency(model.typicalDeposit)}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Typical APR
                </p>
                <p className="text-2xl font-bold text-white">
                  {model.typicalApr}%
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/50">
              Representative example: {formatCurrency(model.typicalMonthly)}/mo with {formatCurrency(model.typicalDeposit)} deposit, {model.typicalTerm} months at {model.typicalApr}% APR. Finance subject to status.
            </p>
          </div>
        </div>
      </section>

      {/* Extended Intro */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">
              The 2026 Range Rover Evoque: Urban Luxury, Redefined
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Range Rover Evoque (L551) continues to set the standard
              for design-led compact luxury SUVs. Since its original debut, the
              Evoque has single-handedly attracted a younger, more urban
              demographic to the Range Rover brand — and this latest model year
              refines the formula with updated technology, enhanced efficiency,
              and the unmistakable coupe-like roofline that makes it one of the
              most visually distinctive vehicles on the road.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              As the most affordable Range Rover in the 2026 lineup, the Evoque
              occupies a crucial position in the range. It competes directly with
              the BMW X1 and X2, Audi Q3, Mercedes-Benz GLA and GLB, and Volvo
              XC40 — yet it offers something none of those rivals can match:
              genuine Range Rover DNA. That means all-wheel drive as standard on
              every variant, Terrain Response 2 for real off-road capability,
              600mm wading depth, and the commanding elevated driving position
              that defines the Range Rover experience.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              From a finance perspective, the 2026 Evoque is a compelling
              proposition. Its broad appeal generates high volumes and
              competitive rates from a wide range of lenders. Strong residual
              values — driven by consistent demand in both the new and used
              markets — keep PCP payments low relative to the purchase price.
              Insurance groups of 28-37 are substantially lower than the larger
              Range Rover models, while servicing and maintenance costs are also
              more accessible. The Evoque is particularly popular with younger
              buyers entering the premium SUV market, and as a second or third
              car in affluent households.
            </p>
            <p className="text-slate leading-relaxed">
              The 2026 powertrain lineup offers genuine choice. The P200 and
              P250 petrol mild hybrids suit different performance expectations,
              the D165 diesel remains the high-mileage champion, and the P300e
              plug-in hybrid is the standout for company car drivers seeking to
              minimise their Benefit in Kind tax liability. Every engine is
              paired with a 9-speed automatic transmission and intelligent
              all-wheel drive for refined, confident performance in all
              conditions.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Lineup */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Range Rover Evoque Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Four powertrains to suit every driving style and budget — from
            efficient diesel to performance plug-in hybrid.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-racing-green text-white">
                  <th className="text-left py-4 px-4 font-display font-medium rounded-tl-lg">
                    Engine
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium">
                    Power
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium">
                    Torque
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium">
                    0-60 mph
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium">
                    Top Speed
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium">
                    CO2 (g/km)
                  </th>
                  <th className="text-center py-4 px-3 font-display font-medium rounded-tr-lg">
                    MPG
                  </th>
                </tr>
              </thead>
              <tbody>
                {powertrains.map((pt, i) => (
                  <tr
                    key={pt.engine}
                    className={`border-b border-sand/30 ${i % 2 === 0 ? "bg-cream" : "bg-white"}`}
                  >
                    <td className="py-4 px-4 font-semibold text-charcoal">
                      {pt.engine}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.power}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.torque}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.acceleration}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.topSpeed}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.co2}
                    </td>
                    <td className="py-4 px-3 text-center text-slate">
                      {pt.mpg}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            All 2026 Evoque models feature 9-speed automatic transmission and
            intelligent all-wheel drive as standard. MHEV = Mild Hybrid Electric
            Vehicle. PHEV = Plug-in Hybrid Electric Vehicle.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Evoque Trim Levels &amp; Pricing
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five trim levels from the well-equipped base Evoque to the
            range-topping Autobiography. All prices are 2026 model year
            approximations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trimLevels.map((trim) => (
              <div
                key={trim.name}
                className="bg-white rounded-xl p-6 lg:p-8 border border-sand/30 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-display text-racing-green">
                    {trim.name}
                  </h3>
                  <span className="text-lg font-bold text-charcoal">
                    from {trim.price}
                  </span>
                </div>
                <ul className="space-y-2 flex-1">
                  {trim.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-slate flex items-start"
                    >
                      <span className="text-sand mr-2 mt-0.5 flex-shrink-0">
                        &bull;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Trim Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Evoque Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Range Rover Evoque trim levels. P270e PHEV available from Dynamic SE trim upward.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-slate font-semibold min-w-[160px]">Feature</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">S</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic SE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic HSE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Autobiography</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Edition</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£38,500</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£42,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£46,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£50,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£52,000</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">18" Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">18"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">21"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">21"</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">LED Headlights</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pivi Pro Infotainment</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Leather Interior</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Perforated</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Front Seats</td>
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
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Steering Wheel</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Meridian Sound System</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Adaptive Dynamics</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Head-Up Display</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Configurable Ambient Lighting</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Wireless Charging</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Fixed Panoramic Roof</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
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
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            Compare 2026 {model.name} Finance Options
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Three ways to finance your 2026 Evoque — choose the structure that
            best fits your budget and ownership preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">
                PCP Finance
              </h3>
              <p className="text-sm text-slate mb-6">
                Personal Contract Purchase
              </p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Deposit</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {formatCurrency(model.pcpExample.deposit)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">
                    {formatCurrency(model.pcpExample.monthly)}/mo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.pcpExample.term} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">APR</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.pcpExample.apr}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Balloon Payment</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {formatCurrency(model.pcpExample.balloon)}
                  </span>
                </div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-charcoal">
                      Total Cost
                    </span>
                    <span className="text-sm font-bold text-charcoal">
                      {formatCurrency(model.pcpExample.totalCost)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">
                HP Finance
              </h3>
              <p className="text-sm text-slate mb-6">Hire Purchase</p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Deposit</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {formatCurrency(model.hpExample.deposit)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">
                    {formatCurrency(model.hpExample.monthly)}/mo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.hpExample.term} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">APR</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.hpExample.apr}%
                  </span>
                </div>
                <div className="pt-4 border-t border-sand/30">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-charcoal">
                      Total Cost
                    </span>
                    <span className="text-sm font-bold text-charcoal">
                      {formatCurrency(model.hpExample.totalCost)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-1">
                Lease
              </h3>
              <p className="text-sm text-slate mb-6">Personal Contract Hire</p>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Initial Rental</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {formatCurrency(model.leaseExample.initialRental)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Monthly Payment</span>
                  <span className="text-sm font-semibold text-racing-green">
                    {formatCurrency(model.leaseExample.monthly)}/mo
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Term</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.leaseExample.term} months
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Annual Mileage</span>
                  <span className="text-sm font-semibold text-charcoal">
                    {model.leaseExample.annualMileage.toLocaleString()} miles
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            Representative examples only. Actual rates depend on individual
            circumstances and credit profile. Figures based on a 2026{" "}
            {model.name} priced from {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            2026 {model.name} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Explore monthly payments for the 2026 Evoque across PCP, HP, and
            lease options. Adjust the vehicle price, deposit, term, and APR to
            match your budget and preferred trim level.
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
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.name} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Body Type
              </p>
              <p className="text-sm font-semibold text-charcoal">
                Compact SUV / Crossover
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Drivetrain
              </p>
              <p className="text-sm font-semibold text-charcoal">
                AWD (All Models)
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Seating
              </p>
              <p className="text-sm font-semibold text-charcoal">5 Seats</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Insurance Group
              </p>
              <p className="text-sm font-semibold text-charcoal">28-37</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                CO2 Emissions
              </p>
              <p className="text-sm font-semibold text-charcoal">
                32-182 g/km
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Fuel Economy
              </p>
              <p className="text-sm font-semibold text-charcoal">
                35-177 mpg
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensions & Capability */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Evoque Dimensions &amp; Capability
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compact enough for the city, capable enough for the countryside.
            Every 2026 Evoque comes with all-wheel drive and Terrain Response 2
            as standard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-6">
                Exterior Dimensions
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Length</span>
                  <span className="text-sm font-semibold text-charcoal">
                    4,371 mm
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">
                    Width (inc. mirrors)
                  </span>
                  <span className="text-sm font-semibold text-charcoal">
                    2,096 mm
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Height</span>
                  <span className="text-sm font-semibold text-charcoal">
                    1,649 mm
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Wheelbase</span>
                  <span className="text-sm font-semibold text-charcoal">
                    2,681 mm
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Kerb Weight</span>
                  <span className="text-sm font-semibold text-charcoal">
                    1,706-1,944 kg
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Ground Clearance</span>
                  <span className="text-sm font-semibold text-charcoal">
                    212 mm
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-sand/30">
              <h3 className="text-lg font-display text-racing-green mb-6">
                Capability &amp; Practicality
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Boot Capacity</span>
                  <span className="text-sm font-semibold text-charcoal">
                    472 litres
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">
                    Boot (Seats Folded)
                  </span>
                  <span className="text-sm font-semibold text-charcoal">
                    1,156 litres
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">Wading Depth</span>
                  <span className="text-sm font-semibold text-charcoal">
                    600 mm
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">
                    Towing Capacity (ICE)
                  </span>
                  <span className="text-sm font-semibold text-charcoal">
                    2,000 kg
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-3">
                  <span className="text-sm text-slate">
                    Towing Capacity (PHEV)
                  </span>
                  <span className="text-sm font-semibold text-charcoal">
                    1,800 kg
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">
                    PHEV Electric Range
                  </span>
                  <span className="text-sm font-semibold text-charcoal">
                    Up to 39 miles (62 km)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            PHEV model features a 15 kWh battery. Boot capacity for PHEV
            alternative measurement: 591 litres. All variants feature Terrain
            Response 2 and intelligent all-wheel drive as standard.
          </p>
        </div>
      </section>

      {/* Why Finance an Evoque */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Range Rover Evoque?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Most Accessible Range Rover
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Evoque is the gateway to Range Rover ownership, with
                PCP payments from just £389 per month. It delivers genuine Range
                Rover design DNA, build quality, and all-weather capability at a
                price point that competes directly with mainstream premium
                brands. The compact crossover dimensions make it ideal for
                drivers who navigate tight urban streets daily but still want a
                commanding driving position and the prestige of the Range Rover
                badge. No other compact SUV in this segment offers the same
                combination of luxury, capability, and brand cachet.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                PHEV Tax Savings for Company Drivers
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Evoque P300e plug-in hybrid is a standout for company
                car drivers seeking to minimise their tax liability. With CO2
                emissions from just 32 g/km, BIK rates are around 8% — compared
                to 37% for conventional petrol models. On a £45,000 P300e, the
                annual BIK saving for a 40% taxpayer could exceed £5,000
                compared to a petrol equivalent. The 15 kWh battery delivers up
                to 39 miles of electric-only range, meaning many daily commutes
                can be completed with zero fuel consumption and zero tailpipe
                emissions.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Design-Led Style &amp; Desirability
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The Evoque&apos;s distinctive coupe-like roofline, flush door
                handles, and clean surfacing make it one of the most visually
                striking compact SUVs on the market. That design appeal
                translates directly into financial value: the Evoque
                consistently tops desirability surveys in its segment, which
                feeds through to strong residual values and competitive PCP
                monthly payments. The 2026 model year&apos;s five-trim
                structure — from the well-equipped base Evoque through to the
                luxurious Autobiography — means there is a specification to suit
                every taste and budget.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Strong Residual Values
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Evoque benefits from residual values of 48-52% after
                three years — among the strongest in the compact premium SUV
                segment. This is driven by consistent demand in the used market,
                where the Range Rover badge carries significant cachet. Higher
                residuals mean a larger portion of the car&apos;s cost is
                deferred to the PCP balloon payment, reducing the amount you
                actually pay each month. There is also frequently positive
                equity in your Evoque at the end of a PCP term, which can be
                used as a deposit towards your next vehicle — effectively
                reducing or eliminating your cash outlay for the next deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Range Rover Evoque
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">What Car?</span>
                <span className="text-sand font-bold text-lg">3.5/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;Pricier than most small SUVs but justifies that by being good to drive, posh inside and reasonably practical. The P270e PHEV is our pick of the engine range.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/range-rover-evoque/4x4/review/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Autocar</span>
                <span className="text-sand font-bold text-lg">3.5/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;The Evoque still has its good looks and smooth hybrid powertrain. A class favourite since launch with strong residual values.&rdquo;
              </p>
              <a
                href="https://www.autocar.co.uk/car-review/land-rover/range-rover-evoque"
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
                <span className="text-sand font-bold text-lg">7/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;Few small SUVs are quite as desirable as the Range Rover Evoque, with a prestigious badge, stylish looks, practical interior and an efficient plug-in hybrid option.&rdquo;
              </p>
              <a
                href="https://www.carwow.co.uk/land-rover/range-rover-evoque"
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
            Watch Range Rover Evoque Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+range+rover+evoque+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Evoque Review</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+range+rover+evoque+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Evoque PHEV Road Test</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=auto+express+range+rover+evoque+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Evoque vs Rivals Comparison</p>
                <p className="text-slate text-sm">Auto Express</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection title="2026 Range Rover Evoque Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Range Rover Evoque?"
        description="Discover the most affordable route into Range Rover ownership. Get a free, no-obligation finance quote for the 2026 Evoque today — compare PCP, HP, and lease options tailored to your budget."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
