import { Metadata } from "next";
import Image from "next/image";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VehicleFinanceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";

const model = getModelBySlug("range-rover-sport")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "How does Range Rover Sport finance compare to the full-size Range Rover?",
    answer: "The 2026 Range Rover Sport starts from around £25,000 less than the full-size Range Rover, which translates to roughly £250-£300 lower monthly PCP payments. Despite this price difference, the Sport shares its MLA-Flex platform with the full-size model and offers many of the same powertrains. For buyers who prioritise dynamic driving over ultimate rear-seat luxury, the Sport represents a compelling value proposition while still delivering genuine Range Rover prestige.",
  },
  {
    question: "Is the 2026 Range Rover Sport PHEV a good choice for company car drivers?",
    answer: "The 2026 Range Rover Sport P510e PHEV is one of the most tax-efficient premium SUVs available. With CO2 emissions from just 18 g/km and an electric range of up to 70 miles from its 31.8 kWh battery, it attracts a BIK rate of approximately 5%. For a 40% taxpayer, the monthly BIK tax on a Sport PHEV could be as low as £200-£250, compared to over £1,000 for a diesel equivalent. Over a four-year finance term, the tax savings alone can exceed the price difference between the PHEV and standard models.",
  },
  {
    question: "What are the most popular Range Rover Sport finance options?",
    answer: "PCP is by far the most popular finance choice for the Range Rover Sport, accounting for approximately 70% of all financed sales. Its popularity stems from the lower monthly payments compared to HP, combined with the flexibility to hand back, refinance, or purchase the car at the end of the term. For buyers who want to change their car every 3-4 years, PCP offers the most cost-effective route. HP is preferred by those who want to own the car outright, while leasing suits drivers who want a fixed monthly cost with no residual value risk.",
  },
  {
    question: "Can I finance a 2026 Range Rover Sport V8?",
    answer: "Yes, the 2026 Range Rover Sport P530 V8 Twin Turbo can be financed through PCP, HP, or lease. The V8 starts from around £115,000 and typically commands monthly PCP payments of £900-£1,100 depending on deposit and term. The V8 Sport holds its value well due to limited production and strong enthusiast demand. With 530 PS, it delivers supercar-rivalling performance in an SUV body. Insurance sits in group 50, and running costs are higher than six-cylinder models, but for many owners the 4.4-litre twin-turbo V8 experience justifies the premium.",
  },
  {
    question: "What happens at the end of my Range Rover Sport PCP deal?",
    answer: "At the end of your PCP term, you have three options. First, you can return the car with nothing further to pay, provided it is within agreed mileage and condition limits. Second, you can pay the balloon payment (also called the Guaranteed Future Value) to own the car outright. Third, and most commonly, you can use any equity in the car — the difference between its market value and the balloon — as a deposit towards a new vehicle. Range Rover Sport models frequently have positive equity at the end of PCP terms due to their strong residual performance.",
  },
  {
    question: "How much does it cost to insure a Range Rover Sport on finance?",
    answer: "Range Rover Sport models sit in insurance groups 44-50, which places them at the higher end of the insurance spectrum. Annual premiums typically range from £1,200 to £3,000 depending on driver age, location, and claims history. Finance agreements require fully comprehensive insurance with the finance company noted as the interested party. It is worth noting that some insurers specialise in high-value vehicles and may offer more competitive premiums than mainstream providers.",
  },
  {
    question: "What is the Stealth Pack on the 2026 Range Rover Sport?",
    answer: "The Stealth Pack is an optional styling package available across all 2026 Range Rover Sport trim levels. It replaces exterior chrome and bright accents with gloss black finishes, including black badges, a black grille surround, black window surrounds, and dark exhaust tips. The result is a more menacing, blacked-out appearance that has proved extremely popular. The Stealth Pack can be combined with darker body colours like Santorini Black or Carpathian Grey for maximum visual impact, and it has a minimal effect on monthly finance payments — typically adding £10-£20 per month on PCP.",
  },
  {
    question: "How does the 2026 Sport compare to a Porsche Cayenne on finance?",
    answer: "The 2026 Range Rover Sport and Porsche Cayenne are the two most cross-shopped performance SUVs in this price bracket. The Sport typically offers lower monthly PCP payments due to stronger residual values in the UK market, while also providing superior off-road capability, a more luxurious interior, and the Range Rover badge cachet. The Cayenne may edge ahead in outright on-road dynamics, but the Sport's combination of road manners, off-road ability, and brand prestige makes it the more popular finance choice in Britain.",
  },
];

export default function RangeRoverSportPage() {
  return (
    <>
      <VehicleFinanceSchema
        modelName="Range Rover Sport"
        priceFrom={model.priceFrom}
        monthlyFrom={model.typicalMonthly}
        apr={model.typicalApr}
        url="https://www.rangeroverfinance.co.uk/range-rover-sport"
      />
      <BreadcrumbSchema items={[{ name: "Range Rover Sport", url: "https://www.rangeroverfinance.co.uk/range-rover-sport" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sand font-display text-sm uppercase tracking-widest mb-2">2026 Model Year</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
                {model.name} Finance
              </h1>
              <p className="mt-3 text-xl text-sand font-display">{model.tagline}</p>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                Compare PCP, HP and lease deals on the 2026 Range Rover Sport. From the efficient D250 diesel
                to the blistering 530 PS V8, find the right powertrain and the right finance package for
                the most dynamic Range Rover ever built.
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
                  <p className="text-sm text-white/60 uppercase tracking-wider">Deposit</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(model.typicalDeposit)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Typical APR</p>
                  <p className="text-2xl font-bold text-white">{model.typicalApr}%</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-white/50">
                Representative example: {formatCurrency(model.typicalMonthly)}/mo with {formatCurrency(model.typicalDeposit)} deposit, {model.typicalTerm} months at {model.typicalApr}% APR. Finance subject to status.
              </p>
            </div>
            <div className="model-hero-stage">
              <div className="model-hero-glow" />

              <div className="model-hero-car">
                <Image
                  src="/images/models/range-rover-sport.png"
                  alt="Range Rover Sport SV Edition Two in Sunrise Copper - front three-quarter view"
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

      {/* Extended Intro — 2026 Sport, L461, Market Position */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">
              The 2026 Range Rover Sport: Performance Meets Prestige
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Range Rover Sport (L461) continues to refine what is already the most dynamically
              focused vehicle in the Range Rover family. Built on Land Rover&apos;s MLA-Flex aluminium
              architecture — the same platform underpinning the full-size Range Rover — the Sport delivers
              a driving experience that genuinely challenges dedicated performance SUVs from Porsche, BMW,
              and Mercedes-AMG, while retaining the off-road capability and luxury that only a Range Rover
              can offer.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              For the 2026 model year, the Sport lineup spans five powertrains covering everything from
              frugal diesel motoring to supercar-rivalling V8 performance. The entry-level D250 diesel
              provides a sensible, high-economy starting point for drivers who cover serious mileage, while
              the range-topping P530 V8 Twin Turbo delivers 530 PS and performance that
              would embarrass many two-door sports cars. In between, the D300 diesel, P400 mild hybrid, and
              P510e plug-in hybrid each serve distinct ownership profiles.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Sport sits in a competitive sweet spot: it offers roughly 90% of the full-size Range
              Rover&apos;s luxury and technology at a price point around £25,000 lower, while adding a sharper,
              more athletic driving character. It is the best-selling model in the Range Rover range and one
              of the most frequently financed premium SUVs in the UK. Strong residual values — typically
              50-55% retention after three years — mean PCP monthly payments are competitive against rivals
              that cost significantly less on paper.
            </p>
            <p className="text-slate leading-relaxed">
              Whether you are a company car driver drawn to the P510e&apos;s ultra-low BIK rates, a
              performance enthusiast eyeing the V8, or a family buyer who wants Range Rover comfort with
              a more manageable footprint, the 2026 Sport has a configuration — and a finance deal — to match.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Lineup Table */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Range Rover Sport Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five engines spanning diesel, mild hybrid petrol, plug-in hybrid, and twin-turbo V8.
            Every 2026 Sport features all-wheel drive and an eight-speed automatic gearbox as standard.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-racing-green text-white">
                  <th className="px-4 py-3 text-left font-display font-semibold">Engine</th>
                  <th className="px-4 py-3 text-center font-display font-semibold">Power</th>
                  <th className="px-4 py-3 text-center font-display font-semibold">Torque</th>
                  <th className="px-4 py-3 text-center font-display font-semibold">CO2 (g/km)</th>
                  <th className="px-4 py-3 text-center font-display font-semibold">MPG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand/30">
                <tr className="bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">D250 Diesel</td>
                  <td className="px-4 py-3 text-center text-slate">249 PS</td>
                  <td className="px-4 py-3 text-center text-slate">600 Nm</td>
                  <td className="px-4 py-3 text-center text-slate">199-205</td>
                  <td className="px-4 py-3 text-center text-slate">36-37</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-charcoal">D300 Diesel</td>
                  <td className="px-4 py-3 text-center text-slate">300 PS</td>
                  <td className="px-4 py-3 text-center text-slate">650 Nm</td>
                  <td className="px-4 py-3 text-center text-slate">199-209</td>
                  <td className="px-4 py-3 text-center text-slate">35-37</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">P400 Mild Hybrid</td>
                  <td className="px-4 py-3 text-center text-slate">400 PS</td>
                  <td className="px-4 py-3 text-center text-slate">550 Nm</td>
                  <td className="px-4 py-3 text-center text-slate">231-243</td>
                  <td className="px-4 py-3 text-center text-slate">26-28</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-charcoal">P530 V8 Twin Turbo</td>
                  <td className="px-4 py-3 text-center text-slate">530 PS</td>
                  <td className="px-4 py-3 text-center text-slate">750 Nm</td>
                  <td className="px-4 py-3 text-center text-slate">283-298</td>
                  <td className="px-4 py-3 text-center text-slate">22-23</td>
                </tr>
                <tr className="bg-cream/50">
                  <td className="px-4 py-3 font-semibold text-charcoal">P510e PHEV</td>
                  <td className="px-4 py-3 text-center text-slate">510 PS</td>
                  <td className="px-4 py-3 text-center text-slate">700 Nm</td>
                  <td className="px-4 py-3 text-center text-slate">18-22</td>
                  <td className="px-4 py-3 text-center text-slate">353-404</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate mt-4 text-center">
            All 2026 Range Rover Sport models feature all-wheel drive and ZF 8-speed automatic transmission.
            PHEV electric-only range: up to 70 miles (113 km) from a 31.8 kWh battery. Figures are WLTP combined.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Range Rover Sport Trim Levels
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Four core trim levels plus the exclusive SV Edition. Every 2026 Sport comes with
            air suspension, Terrain Response 2, and Pivi Pro infotainment as standard.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dynamic SE */}
            <div className="bg-white rounded-xl p-8 border border-sand/30">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-display text-racing-green">Dynamic SE</h3>
                <span className="text-sm font-semibold text-sand bg-racing-green px-3 py-1 rounded-full">From £79,500</span>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                The entry point to the 2026 Range Rover Sport, the Dynamic SE is far from basic. It
                establishes a generous standard specification that includes the sport-tuned Dynamic Air
                Suspension with switchable-volume air springs — a system that underpins the Sport&apos;s
                sharp handling character across the entire range.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  21-inch alloy wheels with all-season tyres
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Dynamic Air Suspension with adaptive dampers
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Pivi Pro 13.1-inch curved touchscreen
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Meridian 400W sound system
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Grained leather seats with heated fronts
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  LED headlights with signature DRL
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Terrain Response 2 with auto mode
                </li>
              </ul>
            </div>

            {/* Dynamic HSE */}
            <div className="bg-white rounded-xl p-8 border border-sand/30">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-display text-racing-green">Dynamic HSE</h3>
                <span className="text-sm font-semibold text-sand bg-racing-green px-3 py-1 rounded-full">From £87,000</span>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                The Dynamic HSE is the most popular 2026 Sport trim, striking the ideal balance between
                equipment and price. It adds meaningful comfort and technology upgrades over the SE,
                including a head-up display and the ClearSight interior rear-view mirror that uses a
                camera feed for an unobstructed rearward view.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  22-inch alloy wheels
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Upgraded Windsor leather upholstery
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Heated rear seats
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Head-up display
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  ClearSight interior rear-view mirror
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Soft-close doors
                </li>
              </ul>
            </div>

            {/* Autobiography */}
            <div className="bg-white rounded-xl p-8 border border-sand/30">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-display text-racing-green">Autobiography</h3>
                <span className="text-sm font-semibold text-sand bg-racing-green px-3 py-1 rounded-full">From £100,000</span>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                The Autobiography takes the 2026 Sport into genuine luxury territory. Semi-aniline leather,
                massage front seats, and the spectacular 1,430W Meridian Signature Sound system with 29
                speakers transform the cabin into a first-class environment. Pixel LED headlights provide
                the most advanced lighting available on any Range Rover Sport.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  23-inch alloy wheels
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Semi-aniline leather upholstery
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Meridian Signature 1,430W / 29-speaker system
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Massage front seats with memory
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Configurable ambient interior lighting
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Pixel LED headlights with adaptive high beam
                </li>
              </ul>
            </div>

            {/* SV / First Edition */}
            <div className="bg-white rounded-xl p-8 border border-sand/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-sand text-racing-green text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg">
                Flagship
              </div>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-display text-racing-green">SV / First Edition</h3>
                <span className="text-sm font-semibold text-sand bg-racing-green px-3 py-1 rounded-full">From £115,000+</span>
              </div>
              <p className="text-sm text-slate leading-relaxed mb-4">
                The spiritual successor to the SVR, the SV Edition is hand-finished by Land Rover&apos;s
                Special Vehicle Operations division. It pairs the P530 V8 with exclusive exterior colours,
                carbon fibre interior trim, and bespoke detailing that sets it apart from standard Sport
                models. The First Edition offers a curated specification with unique colourways available
                only during the initial production run.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Hand-finished SVO interior
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Exclusive exterior colour palette
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Carbon fibre trim options
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Active locking rear differential (V8)
                </li>
                <li className="text-sm text-slate flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  All Autobiography features included
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Editions — Stealth Pack & Dynamic Black */}
      <section className="py-16 lg:py-20 bg-racing-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-white mb-3 text-center">
            2026 Special Editions
          </h2>
          <p className="text-white/70 text-center mb-10 max-w-2xl mx-auto">
            Two distinctive styling packages let you personalise the 2026 Sport beyond the standard
            trim levels. Both are available across the full range.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-display text-sand mb-3">Stealth Pack</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                The Stealth Pack transforms the 2026 Sport&apos;s exterior presence by replacing all
                brightwork with gloss black finishes. Available across every trim level, it is the single
                most popular optional package on the current Sport, chosen by roughly one in three UK buyers.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Gloss black grille surround and mesh
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Black Range Rover and Sport badges
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Gloss black window surrounds
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Dark-finish exhaust tips
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Available on all engines and trims
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-display text-sand mb-3">Dynamic Black Edition</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-4">
                Building on the Stealth Pack concept, the Dynamic Black Edition is a factory-curated
                package that pairs the exterior black treatment with a matching interior theme. It adds
                black-accented alloy wheels and Narvik Black contrast roof for a fully coordinated look
                that commands attention on the road.
              </p>
              <ul className="space-y-2">
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  All Stealth Pack exterior features
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Gloss black alloy wheels
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Narvik Black contrast roof
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Ebony interior with black headlining
                </li>
                <li className="text-sm text-white/70 flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#9670;</span>
                  Unique badging and tread plates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      
      {/* Trim Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Sport Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Range Rover Sport trim levels. All trims available with all engine options.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-slate font-semibold min-w-[160px]">Feature</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic SE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Dynamic HSE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Autobiography</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">SV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£79,500</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£88,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£105,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£125,000</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">21" Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">23"</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Electronic Air Suspension</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">SV Tuned</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Meridian Sound System</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Signature 1,430W</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Signature 1,430W</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pivi Pro Infotainment</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Leather Interior</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Windsor</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Semi-Aniline</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">SV Bespoke</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Front Seats</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Rear Seats</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Head-Up Display</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Adaptive Dynamics</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Soft-Close Doors</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">4-Zone Climate Control</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Configurable Ambient Lighting</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Carbon Fibre Exterior Trim</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">SV-Specific Styling</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
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
            Three ways to finance your 2026 Range Rover Sport. PCP offers the lowest monthly payments,
            HP leads to outright ownership, and leasing provides a fixed-cost motoring solution.
          </p>
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
            a 2026 {model.name} priced from {formatCurrency(model.priceFrom)}.
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
            Use the sliders below to model different finance scenarios for the 2026 Range Rover Sport.
            Adjust the vehicle price to match your chosen engine and trim — from £79,500 for a D250
            Dynamic SE up to £115,000+ for the SV Edition V8. Switch between PCP, HP and lease to see
            how each option affects your monthly budget.
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

      {/* Key Specifications Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.name} Key Specifications
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

      {/* Dimensions & Capability */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            Dimensions &amp; Off-Road Capability
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            The 2026 Range Rover Sport combines a road-focused stance with genuine all-terrain ability.
            A 900mm wading depth and 3,500 kg towing capacity mean it is far more than a performance SUV.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Length</p>
              <p className="text-2xl font-bold text-racing-green">4,946</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Width (inc. mirrors)</p>
              <p className="text-2xl font-bold text-racing-green">2,209</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Height</p>
              <p className="text-2xl font-bold text-racing-green">1,820</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Wheelbase</p>
              <p className="text-2xl font-bold text-racing-green">2,997</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Boot Capacity</p>
              <p className="text-2xl font-bold text-racing-green">647</p>
              <p className="text-xs text-slate">litres (seats up)</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Towing Capacity</p>
              <p className="text-2xl font-bold text-racing-green">3,500</p>
              <p className="text-xs text-slate">kg braked</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Wading Depth</p>
              <p className="text-2xl font-bold text-racing-green">900</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Ground Clearance</p>
              <p className="text-2xl font-bold text-racing-green">281</p>
              <p className="text-xs text-slate">mm</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Kerb Weight</p>
              <p className="text-2xl font-bold text-racing-green">2,285-2,575</p>
              <p className="text-xs text-slate">kg</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">PHEV Battery</p>
              <p className="text-2xl font-bold text-racing-green">31.8</p>
              <p className="text-xs text-slate">kWh</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Electric Range</p>
              <p className="text-2xl font-bold text-racing-green">70</p>
              <p className="text-xs text-slate">miles (PHEV)</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center border border-sand/20">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Suspension</p>
              <p className="text-lg font-bold text-racing-green">Dynamic Air</p>
              <p className="text-xs text-slate">Switchable-volume springs</p>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            All 2026 Range Rover Sport models feature sport-tuned Dynamic Air Suspension.
            V8 models add torque vectoring by braking and an active locking rear differential.
            Active roll control delivers flat cornering across the range.
          </p>
        </div>
      </section>

      {/* Why Finance a Range Rover Sport */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Range Rover Sport?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream rounded-xl p-8 border border-sand/20">
              <h3 className="text-lg font-display text-racing-green mb-3">Performance and Prestige Combined</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Range Rover Sport is the most dynamically capable Range Rover ever built, offering
                a driving experience that rivals dedicated performance SUVs from Porsche and BMW. The
                sport-tuned Dynamic Air Suspension with switchable-volume air springs, active roll control,
                and torque vectoring deliver genuinely engaging handling. With the P530 V8 delivering 530 PS, it rivals many dedicated sports cars. Financing a Sport means
                accessing this performance with predictable monthly payments, rather than committing over
                £80,000 upfront.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-sand/20">
              <h3 className="text-lg font-display text-racing-green mb-3">Strong Value vs Full-Size Range Rover</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Sport shares its MLA-Flex platform, powertrains, and much of its technology with
                the full-size Range Rover at a starting price roughly £25,000 lower. The Pivi Pro
                infotainment, Meridian sound system, air suspension, and advanced driver assistance features
                are all present. For buyers who do not need the extra interior space or the LWB option,
                the Sport delivers 90% of the Range Rover experience at a meaningful discount — and that
                discount translates directly into lower monthly finance payments.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-sand/20">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Company Car Savings</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 P510e plug-in hybrid Sport is transforming how business users access premium SUVs.
                With CO2 emissions from just 18 g/km and an electric range of up to 70 miles from its
                31.8 kWh battery, it sits in the lowest BIK bands at approximately 5%. For a 40% taxpayer,
                the monthly BIK tax can be as low as £200-£250, compared to over £1,000 for a diesel
                equivalent. Many company directors are discovering that the total cost of ownership for a
                PHEV Sport is actually lower than a smaller, less prestigious vehicle when tax savings are
                factored in.
              </p>
            </div>
            <div className="bg-cream rounded-xl p-8 border border-sand/20">
              <h3 className="text-lg font-display text-racing-green mb-3">Best-Selling Range Rover Model</h3>
              <p className="text-sm text-slate leading-relaxed">
                The Sport is consistently the most popular Range Rover variant, which benefits finance
                customers in two ways. First, high sales volume means lenders compete for your business,
                driving down APR rates. Second, strong demand in the used market underpins residual
                values — the 2026 Sport typically retains 50-55% of its value after three years, ensuring
                that the balloon payment at the end of a PCP term remains achievable and that trade-in
                equity is often available for your next vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Range Rover Sport
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">What Car?</span>
                <span className="text-sand font-bold text-lg">4/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;A fantastic SUV that goes big on luxury, comfort and off-road ability. The P460e PHEV offers up to 72 miles of electric range, which is excellent for the class.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/range-rover-sport/4x4/review/"
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
                &ldquo;Ready to drive Land Rover forward and bring new buyers into the fold, while maintaining the integrity of the Range Rover brand.&rdquo;
              </p>
              <a
                href="https://www.autocar.co.uk/car-review/land-rover/range-rover-sport"
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
                <span className="text-sand font-bold text-lg">8/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;It shares its aluminium chassis and engines with the big Range Rover, but features sharper suspension for more back-road fun. One of the quietest cars in its class.&rdquo;
              </p>
              <a
                href="https://www.topgear.com/car-reviews/land-rover/range-rover-sport"
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
                <span className="text-sand font-bold text-lg">8/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;If you want speedy luxury and off-road prowess, the Range Rover Sport delivers. The SV with its 635 PS V8 is the performance halo of the lineup.&rdquo;
              </p>
              <a
                href="https://www.carwow.co.uk/land-rover/range-rover-sport"
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
            Watch Range Rover Sport Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+range+rover+sport+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Sport Full Review</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+range+rover+sport+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Sport - Worth the Money?</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=top+gear+range+rover+sport+sv+review"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Sport SV Review</p>
                <p className="text-slate text-sm">Top Gear</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection title={`2026 ${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Range Rover Sport?"
        description="Our specialists will find the most competitive PCP, HP or lease deal for your 2026 Range Rover Sport. Compare all five engines across every trim level — free quotes with no obligation."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
