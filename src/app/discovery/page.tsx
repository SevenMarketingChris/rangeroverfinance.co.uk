import { Metadata } from "next";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

const model = getModelBySlug("discovery")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question:
      "How much does it cost to finance a 2026 Land Rover Discovery per month?",
    answer:
      "Monthly payments for the 2026 Discovery start from around £550-£650 on a PCP agreement, depending on the trim level, deposit, term length, and annual mileage. A Discovery S with a 10% deposit over 48 months at a representative APR typically comes in around £600 per month. HP payments are higher because you are paying off the full value, but you own the car outright at the end. Lease payments tend to be the lowest monthly option as you are only paying for the depreciation during the contract period. We compare all three structures to find the best fit for your budget.",
  },
  {
    question:
      "Is the 2026 Discovery a genuine 7-seater or are the rear seats only for children?",
    answer:
      "The 2026 Discovery is one of the very few large SUVs with a genuinely adult-friendly third row. Land Rover designed the row 3 seats to accommodate passengers up to 5 foot 11 comfortably, which is substantially more generous than rivals like the BMW X7 or Audi Q7. The stadium seating layout, where each row sits slightly higher than the one in front, ensures good headroom and visibility for all seven occupants. All seats fold electrically via the 11.4-inch Pivi Pro touchscreen or remotely through the Land Rover smartphone app using the Intelligent Seat Fold system. This genuine seven-seat versatility is a key reason the Discovery holds its residual value so well on finance.",
  },
  {
    question:
      "Should I choose diesel or petrol for my 2026 Discovery on finance?",
    answer:
      "Diesel remains the most popular and financially sensible choice for Discovery buyers in 2026. The D250 and D300 MHEV diesel engines return 32-35 mpg in real-world driving, compared to 26-28 mpg for the P360 and P400 petrol MHEV units. Over a typical 48-month finance term at 12,000 miles per year, that difference amounts to roughly £5,000-£6,000 in additional fuel costs for the petrol variant. Diesel also delivers substantially more torque at low revs, which is critical for comfortable towing. However, if your annual mileage is below 8,000 miles and you primarily drive in urban areas, the P360 petrol offers quieter, smoother operation. All 2026 engines feature 48V mild-hybrid technology for improved efficiency.",
  },
  {
    question:
      "How much can the 2026 Discovery tow, and does towing affect my finance agreement?",
    answer:
      "The 2026 Discovery has a maximum braked towing capacity of 3,500 kg, which is sufficient for large caravans, horse boxes, and boat trailers. It has won multiple Tow Car of the Year awards and remains the benchmark in its class. Towing itself does not directly affect your finance agreement, though it may marginally increase wear on braking components and tyres. The Advanced Tow Assist system, standard from Dynamic SE trim upwards, allows you to reverse a trailer using the rotary controller, which removes one of the most stressful aspects of towing. If you plan to tow regularly, the D300 diesel is the recommended powertrain for its combination of 650 Nm torque and efficiency under load.",
  },
  {
    question:
      "How does 2026 Discovery finance compare to a BMW X5 or Audi Q7?",
    answer:
      "The 2026 Discovery is competitively priced against the BMW X5 and Audi Q7, with similar PCP payments in the £550-£700 range depending on specification. Where the Discovery distinguishes itself is in its genuine seven-seat capability with adult-sized third-row seats, superior off-road ability with 900mm wading depth and Terrain Response 2, and a class-leading 3,500 kg towing capacity. The X5 and Q7 are more road-focused and offer slightly more refined on-road handling, but neither can match the Discovery's breadth of capability. Residual values are broadly comparable across all three, though the Discovery's unique family-focused positioning gives it a loyal buyer base that supports strong second-hand demand.",
  },
  {
    question:
      "What happens if I exceed my mileage limit on a 2026 Discovery PCP?",
    answer:
      "If you exceed your agreed mileage at the end of a PCP term, you will be charged an excess mileage fee per mile. Typical charges are 10-15p per mile for the Discovery. For example, exceeding your limit by 5,000 miles would cost £500-£750. If you anticipate higher mileage, it is more cost-effective to agree a higher annual mileage upfront, as the per-mile cost is lower when set at the start of the agreement. Alternatively, if you know you want to keep the car, mileage limits become irrelevant as they only apply if you return the vehicle to the finance company. Given the Discovery's popularity for long family trips and towing holidays, we always recommend being realistic about your mileage estimate.",
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
              2026 {model.fullName} Finance
            </h1>
            <p className="mt-3 text-xl text-sand font-display">
              The ultimate premium 7-seat family SUV — now available on PCP, HP
              and lease
            </p>
            <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
              Finance the 2026 Land Rover Discovery (L462) from{" "}
              {formatCurrency(model.priceFrom)} with flexible monthly payments.
              Seven genuine adult-sized seats, 3,500 kg towing capacity, and
              Land Rover's legendary off-road capability make the Discovery the
              most versatile premium SUV on sale. Compare PCP, HP and lease
              options to find the right deal for your family.
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
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Typical APR
                </p>
                <p className="text-2xl font-bold text-white">
                  {model.typicalApr}%
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                <p className="text-sm text-white/60 uppercase tracking-wider">
                  Seats
                </p>
                <p className="text-2xl font-bold text-white">7</p>
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
              The 2026 Land Rover Discovery: The Family Flagship
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Land Rover Discovery (L462) continues the model's
              30-year legacy as the definitive full-size family SUV. No other
              vehicle in its class combines genuine seven-seat versatility,
              3,500 kg towing capability, and true all-terrain competence in a
              single, premium package. The Discovery occupies a unique position
              in the market — it is the only vehicle in the Land Rover range
              with a full-size, adult-friendly third row, and it competes
              directly with the BMW X5, BMW X7, Audi Q7, Mercedes GLE, and
              Volvo XC90 while offering capability none of them can match.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              For 2026, all four powertrains in the Discovery lineup feature
              48-volt mild-hybrid (MHEV) technology, pairing efficient
              Ingenium engines with belt-integrated starter generators that
              harvest energy during braking and coasting. The diesel models —
              D250 and D300 — continue to dominate sales thanks to their
              exceptional torque delivery and fuel economy, making them the
              natural choice for families who cover high annual mileages or tow
              regularly. The petrol P360 and range-topping P400 offer smoother,
              quieter power delivery for those who prioritise refinement over
              running costs.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Measuring 4,956mm long with a 2,923mm wheelbase, the Discovery
              provides genuine space for seven adults. The clever stadium
              seating arrangement — where each row sits progressively higher —
              ensures excellent visibility and comfort in all three rows. With
              the third row folded, the boot expands to a vast 986 litres, and
              folding the second row creates a cavernous 2,485-litre cargo
              area. Every seat folds electrically at the touch of a button on
              the Pivi Pro touchscreen or remotely via the Land Rover
              smartphone app.
            </p>
            <p className="text-slate leading-relaxed">
              From a finance perspective, the Discovery benefits from competing
              in a relatively niche segment. Full-size seven-seat SUVs with
              genuine off-road capability are rare, which limits direct
              competition and supports stable residual values. Lenders are
              confident in the Discovery's ability to hold its value, which
              translates into competitive PCP balloon payments and affordable
              monthly instalments relative to the vehicle's size, capability,
              and premium positioning. Multiple Tow Car of the Year awards and
              a fiercely loyal owner base further underpin demand on the used
              market.
            </p>
          </div>
        </div>
      </section>

      {/* 7-Seat Versatility */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Discovery: 7-Seat Versatility
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            The Discovery's Intelligent Seat Fold system transforms the cabin
            from a seven-seat people mover to a flat-floor cargo hauler in
            seconds — all controlled from the touchscreen or your phone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream rounded-xl p-8 text-center">
              <p className="text-4xl font-bold text-racing-green mb-2">7</p>
              <p className="text-sm font-semibold text-charcoal mb-3">
                Seats — All Power Foldable
              </p>
              <p className="text-sm text-slate leading-relaxed">
                Every seat folds electrically via the 11.4-inch Pivi Pro
                touchscreen or remotely through the Land Rover smartphone app.
                Configure the cabin before you even reach the car.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 text-center">
              <p className="text-4xl font-bold text-racing-green mb-2">
                5&apos;11&quot;
              </p>
              <p className="text-sm font-semibold text-charcoal mb-3">
                Row 3 — Adult-Sized Seats
              </p>
              <p className="text-sm text-slate leading-relaxed">
                Unlike most rivals where the third row is strictly for children,
                the Discovery's row 3 comfortably accommodates adults up to
                5 foot 11 — a genuine differentiator in this class.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 text-center">
              <p className="text-4xl font-bold text-racing-green mb-2">
                2,485
              </p>
              <p className="text-sm font-semibold text-charcoal mb-3">
                Litres — Maximum Boot Space
              </p>
              <p className="text-sm text-slate leading-relaxed">
                With rows 2 and 3 folded flat, the Discovery offers 2,485
                litres of completely flat cargo space — enough for bikes,
                furniture, or a full family camping load.
              </p>
            </div>
          </div>
          <div className="bg-racing-green rounded-xl p-8 lg:p-10">
            <h3 className="text-xl font-display text-white mb-6 text-center">
              Seating Configuration &amp; Boot Space
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <p className="text-sm text-white/70 mb-1">
                  7 Seats (All Upright)
                </p>
                <p className="text-3xl font-bold text-sand">258 litres</p>
                <p className="text-xs text-white/60 mt-2">
                  Still fits pushchairs and bags
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <p className="text-sm text-white/70 mb-1">
                  5 Seats (Row 3 Folded)
                </p>
                <p className="text-3xl font-bold text-sand">986 litres</p>
                <p className="text-xs text-white/60 mt-2">
                  Family holiday luggage with ease
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
                <p className="text-sm text-white/70 mb-1">
                  2 Seats (Rows 2 &amp; 3 Folded)
                </p>
                <p className="text-3xl font-bold text-sand">2,485 litres</p>
                <p className="text-xs text-white/60 mt-2">
                  Flat floor — bikes, furniture, anything
                </p>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="text-sm text-white/80">
                <span className="text-sand font-semibold">Row 2:</span> 3
                individual seats with slide and recline, 2x ISOFIX child seat
                points
              </div>
              <div className="text-sm text-white/80">
                <span className="text-sand font-semibold">Row 3:</span> 2
                full-size seats suitable for adults up to 5&apos;11&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Discovery Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            All 2026 Discovery engines feature 48V mild-hybrid (MHEV)
            technology. Every powertrain is paired with an 8-speed automatic
            gearbox and permanent all-wheel drive as standard.
          </p>
          <div className="overflow-x-auto rounded-xl border border-sand/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-racing-green text-white">
                  <th className="px-4 py-3 text-left font-display">Engine</th>
                  <th className="px-4 py-3 text-center font-display">Power</th>
                  <th className="px-4 py-3 text-center font-display">
                    Torque
                  </th>
                  <th className="px-4 py-3 text-center font-display">
                    0-60 mph
                  </th>
                  <th className="px-4 py-3 text-center font-display">
                    Top Speed
                  </th>
                  <th className="px-4 py-3 text-center font-display">
                    CO2 (g/km)
                  </th>
                  <th className="px-4 py-3 text-center font-display">MPG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-sand/20">
                  <td className="px-4 py-4 font-semibold text-charcoal">
                    D250 Diesel MHEV
                  </td>
                  <td className="px-4 py-4 text-center text-slate">249 PS</td>
                  <td className="px-4 py-4 text-center text-slate">570 Nm</td>
                  <td className="px-4 py-4 text-center text-slate">7.8s</td>
                  <td className="px-4 py-4 text-center text-slate">130 mph</td>
                  <td className="px-4 py-4 text-center text-slate">
                    209-224
                  </td>
                  <td className="px-4 py-4 text-center text-slate">33-35</td>
                </tr>
                <tr className="bg-cream border-b border-sand/20">
                  <td className="px-4 py-4 font-semibold text-charcoal">
                    D300 Diesel MHEV
                  </td>
                  <td className="px-4 py-4 text-center text-slate">300 PS</td>
                  <td className="px-4 py-4 text-center text-slate">650 Nm</td>
                  <td className="px-4 py-4 text-center text-slate">6.5s</td>
                  <td className="px-4 py-4 text-center text-slate">140 mph</td>
                  <td className="px-4 py-4 text-center text-slate">
                    209-228
                  </td>
                  <td className="px-4 py-4 text-center text-slate">32-35</td>
                </tr>
                <tr className="bg-white border-b border-sand/20">
                  <td className="px-4 py-4 font-semibold text-charcoal">
                    P360 Petrol MHEV
                  </td>
                  <td className="px-4 py-4 text-center text-slate">360 PS</td>
                  <td className="px-4 py-4 text-center text-slate">500 Nm</td>
                  <td className="px-4 py-4 text-center text-slate">6.5s</td>
                  <td className="px-4 py-4 text-center text-slate">143 mph</td>
                  <td className="px-4 py-4 text-center text-slate">
                    238-252
                  </td>
                  <td className="px-4 py-4 text-center text-slate">26-28</td>
                </tr>
                <tr className="bg-cream">
                  <td className="px-4 py-4 font-semibold text-charcoal">
                    P400 Petrol MHEV
                  </td>
                  <td className="px-4 py-4 text-center text-slate">400 PS</td>
                  <td className="px-4 py-4 text-center text-slate">550 Nm</td>
                  <td className="px-4 py-4 text-center text-slate">5.9s</td>
                  <td className="px-4 py-4 text-center text-slate">149 mph</td>
                  <td className="px-4 py-4 text-center text-slate">
                    238-252
                  </td>
                  <td className="px-4 py-4 text-center text-slate">26-28</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            All figures are manufacturer-stated WLTP values for the 2026 model
            year. Real-world economy may vary depending on driving style, load,
            and conditions.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Discovery Trim Levels &amp; Pricing
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five trim levels span the 2026 Discovery range, from the
            well-equipped base model to the limited-availability Metropolitan
            Edition. All trims come with 7 seats, all-wheel drive, and Terrain
            Response 2 as standard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Discovery */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-display text-racing-green">
                  Discovery
                </h3>
                <span className="text-sm font-bold text-racing-green">
                  From £58,000
                </span>
              </div>
              <ul className="space-y-2 text-sm text-slate">
                <li>19-inch alloy wheels</li>
                <li>Pivi Pro 11.4-inch touchscreen</li>
                <li>7 seats as standard</li>
                <li>Terrain Response 2</li>
                <li>LED headlights</li>
                <li>Heated front seats</li>
                <li>Powered tailgate</li>
                <li>48V MHEV on all engines</li>
              </ul>
            </div>
            {/* S */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-display text-racing-green">S</h3>
                <span className="text-sm font-bold text-racing-green">
                  From £62,000
                </span>
              </div>
              <p className="text-xs text-slate italic mb-3">
                Adds to Discovery:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li>20-inch alloy wheels</li>
                <li>Meridian 380W sound system</li>
                <li>Rear parking camera</li>
                <li>Privacy glass</li>
              </ul>
            </div>
            {/* Dynamic SE */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-display text-racing-green">
                  Dynamic SE
                </h3>
                <span className="text-sm font-bold text-racing-green">
                  From £67,000
                </span>
              </div>
              <p className="text-xs text-slate italic mb-3">Adds to S:</p>
              <ul className="space-y-2 text-sm text-slate">
                <li>21-inch alloy wheels</li>
                <li>Meridian 540W surround sound</li>
                <li>Electronic air suspension</li>
                <li>Head-up display</li>
                <li>Advanced Tow Assist</li>
                <li>Dynamic exterior styling pack</li>
              </ul>
            </div>
            {/* Dynamic HSE */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-display text-racing-green">
                  Dynamic HSE
                </h3>
                <span className="text-sm font-bold text-racing-green">
                  From £73,000
                </span>
              </div>
              <p className="text-xs text-slate italic mb-3">
                Adds to Dynamic SE:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li>22-inch alloy wheels</li>
                <li>Meridian Signature 700W system</li>
                <li>Heated rear seats</li>
                <li>Heated steering wheel</li>
                <li>ClearSight interior rear-view mirror</li>
                <li>Pixel LED headlights</li>
                <li>Massage front seats</li>
              </ul>
            </div>
            {/* Metropolitan Edition */}
            <div className="bg-cream rounded-xl p-6 lg:p-8 border border-sand/30 relative">
              <div className="absolute top-3 right-3 bg-racing-green text-white text-xs px-2 py-1 rounded">
                Limited
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-display text-racing-green">
                  Metropolitan Edition
                </h3>
              </div>
              <span className="text-sm font-bold text-racing-green block mb-3">
                From £78,000+
              </span>
              <p className="text-xs text-slate italic mb-3">
                Special edition — limited availability:
              </p>
              <ul className="space-y-2 text-sm text-slate">
                <li>Unique alloy wheel design</li>
                <li>Premium interior finishes</li>
                <li>Exclusive exterior colour palette</li>
                <li>Full Dynamic HSE specification</li>
                <li>Metropolitan Edition badging</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            Prices shown are approximate 2026 model year OTR prices and are
            subject to change. Contact us for the latest pricing on your
            preferred specification.
          </p>
        </div>
      </section>

      {/* Towing & Capability */}
      <section className="py-16 lg:py-20 bg-racing-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-white mb-4 text-center">
            Towing &amp; Off-Road Capability
          </h2>
          <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
            The 2026 Discovery is the tow car champion — a multiple Tow Car of
            the Year award winner with capability that no road-biased rival can
            match.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-sand">3,500 kg</p>
              <p className="text-sm text-white/70 mt-2">
                Max Braked Towing Capacity
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-sand">900mm</p>
              <p className="text-sm text-white/70 mt-2">Wading Depth</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-sand">283mm</p>
              <p className="text-sm text-white/70 mt-2">
                Ground Clearance (Air Susp.)
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <p className="text-3xl font-bold text-sand">5</p>
              <p className="text-sm text-white/70 mt-2">
                Air Suspension Height Settings
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-xl p-8">
              <h3 className="text-lg font-display text-sand mb-4">
                Advanced Tow Assist
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Standard from Dynamic SE trim, the Advanced Tow Assist system
                takes the stress out of reversing with a trailer. Simply select
                the direction you want the trailer to go using the rotary
                controller, and the Discovery steers automatically. The system
                works with trailers of any size up to the maximum towing
                capacity.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Combined with the 360-degree camera system and ClearSight
                Ground View — which uses cameras to create a virtual view
                through the bonnet — manoeuvring in tight spaces with a trailer
                becomes straightforward even for less experienced towers.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-8">
              <h3 className="text-lg font-display text-sand mb-4">
                Terrain Response 2
              </h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Terrain Response 2 with automatic mode continuously monitors
                the surface beneath the wheels and adjusts throttle response,
                gearbox mapping, differential settings, and stability control
                in real time. Manual modes include Comfort, Grass/Gravel/Snow,
                Mud/Ruts, Sand, and Rock Crawl.
              </p>
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="text-center">
                  <p className="text-xl font-bold text-sand">34°</p>
                  <p className="text-xs text-white/60">Approach Angle</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-sand">27.5°</p>
                  <p className="text-xs text-white/60">Breakover Angle</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold text-sand">30°</p>
                  <p className="text-xs text-white/60">Departure Angle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Trim Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Land Rover Discovery Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Land Rover Discovery trim levels. All trims feature 5+2 seven-seat configuration as standard.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-slate font-semibold min-w-[160px]">Feature</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Discovery</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">S</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic SE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic HSE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Metropolitan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£58,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£62,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£67,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£73,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£78,000+</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">20" Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">19"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">21"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">7-Seat Configuration</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">LED Headlights</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Matrix</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Matrix</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pivi Pro Infotainment</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Leather Interior</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Grained</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Front Seats</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Rear Seats</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
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
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Terrain Response 2</td>
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
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Head-Up Display</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Adaptive Dynamics</td>
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
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            Compare 2026 Discovery Finance Options
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Three ways to finance your 2026 Discovery — PCP for flexibility, HP
            for ownership, or lease for the lowest monthly payment.
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
            {model.fullName} priced from {formatCurrency(model.priceFrom)}.
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
            Calculate monthly payments for your 2026 Discovery. Adjust the
            vehicle price, deposit, term, and APR to compare PCP, HP, and lease
            options tailored to your family budget.
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

      {/* Key Specifications Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.fullName} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Length
              </p>
              <p className="text-sm font-semibold text-charcoal">4,956mm</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Width
              </p>
              <p className="text-sm font-semibold text-charcoal">2,220mm</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Height
              </p>
              <p className="text-sm font-semibold text-charcoal">1,888mm</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Wheelbase
              </p>
              <p className="text-sm font-semibold text-charcoal">2,923mm</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Seating
              </p>
              <p className="text-sm font-semibold text-charcoal">
                7 Seats (Standard)
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Kerb Weight
              </p>
              <p className="text-sm font-semibold text-charcoal">
                2,229-2,380 kg
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Towing Capacity
              </p>
              <p className="text-sm font-semibold text-charcoal">
                3,500 kg Braked
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Wading Depth
              </p>
              <p className="text-sm font-semibold text-charcoal">900mm</p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Body Type
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {model.bodyType}
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Engines
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {model.engineOptions.join(", ")}
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                CO2 Emissions
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {model.co2Range}
              </p>
            </div>
            <div className="bg-cream rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">
                Insurance Group
              </p>
              <p className="text-sm font-semibold text-charcoal">
                {model.insuranceGroup}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance a Discovery */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Land Rover Discovery?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Genuine 7-Seat Family Capability
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Discovery is one of very few SUVs where the third row
                of seats is genuinely usable by adults up to 5 foot 11. The
                stadium seating arrangement ensures all seven occupants have
                good headroom, legroom, and visibility. The Intelligent Seat
                Fold system lets you configure all seats remotely via the Land
                Rover app before you even reach the car, and the third row
                folds completely flat to create a vast 2,485-litre load space.
                For families who regularly carry six or seven passengers, the
                Discovery eliminates the need for a less premium people carrier.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                The Tow Car Champion
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                With a maximum braked towing capacity of 3,500 kg, the 2026
                Discovery can handle virtually any towing requirement — from
                caravans and horse boxes to boat trailers and car transporters.
                Multiple Tow Car of the Year awards validate what owners
                already know: nothing tows better. The Advanced Tow Assist
                system allows you to steer a trailer in reverse using the
                rotary controller, and ClearSight Ground View cameras let you
                see through the bonnet for precise manoeuvring. The D300 diesel
                with 650 Nm of torque is the engine of choice for serious
                towers.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Proven All-Terrain Credentials
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Unlike many modern SUVs designed primarily for tarmac, the 2026
                Discovery retains genuine off-road capability. Terrain Response
                2 automatically adapts the vehicle to the surface beneath you,
                while electronic air suspension provides up to 283mm of ground
                clearance, 900mm wading depth, and five height settings. With
                approach, breakover, and departure angles of 34, 27.5, and 30
                degrees respectively, the Discovery handles farm tracks, muddy
                fields, and winter conditions with a level of confidence that
                no road-biased competitor can match.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Diesel Economy for High-Mileage Families
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 D250 and D300 MHEV diesel engines are the backbone of
                the Discovery range and make compelling financial sense for the
                typical family buyer. Achieving 32-35 mpg in real-world mixed
                driving, the diesel Discovery keeps fuel costs manageable
                despite its full-size dimensions. Over a 48-month finance term
                at 12,000 miles per year, you could save £5,000-£6,000 in fuel
                versus the petrol equivalents. The D300 produces 300 PS and
                650 Nm of torque, providing effortless overtaking and relaxed
                motorway cruising, while the D250 offers the best balance of
                performance and efficiency for everyday family use.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Land Rover Discovery
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Top Gear</span>
                <span className="text-sand font-bold text-lg">8/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;A heroically talented go-anywhere, do-anything family SUV. So richly appointed inside, so deeply talented off-road and so downright massive it feels churlish to compare it to rivals.&rdquo;
              </p>
              <a
                href="https://www.topgear.com/car-reviews/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand text-sm font-semibold hover:underline"
              >
                Read full review &rarr;
              </a>
            </div>
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">What Car?</span>
                <span className="text-sand font-bold text-lg">4/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;One of the best 7-seat SUVs you can buy. It's spacious, comfortable and surprisingly capable off-road. The D300 diesel is the pick of the range.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/discovery/4x4/review/"
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
                <span className="text-sand font-bold text-lg">4/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;The Discovery still holds up well in the crowded luxury SUV segment, with unrivalled off-road capability and genuine seven-seat practicality.&rdquo;
              </p>
              <a
                href="https://www.autocar.co.uk/car-review/land-rover/discovery"
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
            Watch Land Rover Discovery Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+land+rover+discovery+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Land Rover Discovery Full Review</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+land+rover+discovery+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Discovery - Best 7-Seat SUV?</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection
        title={`2026 ${model.fullName} Finance FAQs`}
        faqs={faqs}
      />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Land Rover Discovery?"
        description="Get a free, no-obligation quote for the ultimate premium 7-seat family SUV. PCP, HP and lease options available for all 2026 Discovery trims and powertrains."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
