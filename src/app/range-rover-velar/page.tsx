import { Metadata } from "next";
import Image from "next/image";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VehicleFinanceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";

const model = getModelBySlug("range-rover-velar")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const powertrains = [
  {
    engine: "P250 Petrol MHEV",
    power: "249 PS",
    torque: "365 Nm",
    co2: "198-205",
    mpg: "31-33",
  },
  {
    engine: "P400 Petrol MHEV",
    power: "400 PS",
    torque: "550 Nm",
    co2: "222-233",
    mpg: "28-30",
  },
  {
    engine: "P400e PHEV",
    power: "404 PS",
    torque: "640 Nm",
    co2: "36-44",
    mpg: "108-130",
  },
  {
    engine: "D200 Diesel MHEV",
    power: "204 PS",
    torque: "430 Nm",
    co2: "172-181",
    mpg: "41-44",
  },
];

const trimLevels = [
  {
    name: "Velar",
    price: "From £48,000",
    features: [
      '19" alloy wheels',
      "Pivi Pro dual touchscreen infotainment",
      "LED headlights",
      "Flush deployable door handles",
      "Leather and suedecloth interior",
      "Heated front seats",
      "All-wheel drive with Terrain Response 2",
    ],
  },
  {
    name: "S",
    price: "From £51,000",
    features: [
      '20" alloy wheels',
      "Meridian 380W sound system",
      "Rear parking camera",
      "Powered tailgate",
      "Enhanced interior lighting",
      "All features from Velar trim",
    ],
  },
  {
    name: "Dynamic SE",
    price: "From £55,000",
    features: [
      '21" alloy wheels',
      "Meridian 650W surround sound system",
      "Adaptive Dynamics suspension",
      "Head-up display",
      "Dynamic exterior styling pack",
      "All features from S trim",
    ],
  },
  {
    name: "Dynamic HSE",
    price: "From £61,000",
    features: [
      '22" alloy wheels',
      "Meridian Signature 1600W sound system",
      "Massage front seats",
      "ClearSight rear-view mirror",
      "Heated steering wheel",
      "Pixel LED headlights",
      "All features from Dynamic SE trim",
    ],
  },
  {
    name: "Edition / Autobiography",
    price: "From £68,000+",
    features: [
      '22" diamond-turned alloy wheels',
      "Premium leather throughout",
      "Configurable ambient interior lighting",
      "Air suspension as standard",
      "Full extended leather dashboard",
      "All features from Dynamic HSE trim",
    ],
  },
];

const faqs = [
  {
    question: "How much does it cost to finance a 2026 Range Rover Velar per month?",
    answer:
      "Monthly PCP finance payments on the 2026 Range Rover Velar start from approximately £449 per month based on the entry-level Velar trim at £48,000 with a typical 10% deposit over 48 months. Higher-specification trims such as the Dynamic HSE or Autobiography will increase the monthly figure accordingly. The exact payment depends on the deposit amount, term length, mileage allowance, and the APR offered, which is influenced by your credit profile. HP finance results in higher monthly payments as there is no balloon payment, but you own the car outright at the end of the agreement.",
  },
  {
    question: "Is the 2026 Velar P400e PHEV a good choice for company car drivers?",
    answer:
      "The 2026 Velar P400e PHEV is one of the strongest company car propositions in the premium SUV segment. With CO2 emissions of just 36-44 g/km, it qualifies for very low Benefit-in-Kind tax rates, dramatically reducing your monthly tax liability compared to the conventional petrol and diesel variants. The 17.1 kWh battery provides an electric-only range of approximately 33 miles, which comfortably covers most daily commutes on electric power alone. When you factor in the BIK savings alongside competitive lease rates, the P400e can be significantly cheaper as a company car than less prestigious alternatives with higher emissions.",
  },
  {
    question: "What deposit do I need to finance a 2026 Range Rover Velar?",
    answer:
      "Most Velar finance agreements require a minimum deposit of around 10% of the vehicle price, which equates to approximately £4,800 on the base Velar trim. However, a larger deposit of 15-20% will reduce your monthly payments and may help you secure a more competitive APR. Some promotional offers from Land Rover Financial Services occasionally feature reduced or matched deposit contributions. If you have a part-exchange vehicle, its value can be used as your deposit, potentially eliminating any cash outlay at the start of the agreement.",
  },
  {
    question: "How does the Velar hold its value for PCP finance?",
    answer:
      "The 2026 Range Rover Velar typically retains 45-50% of its original value after three years, which is competitive for the premium mid-size SUV segment. This strong residual value performance directly benefits PCP customers by keeping the Guaranteed Future Value (balloon payment) at a manageable level relative to the original price. The Velar's distinctive minimalist design has proven to age gracefully, and its desirability in the used market remains consistently high. Higher-specification models and the PHEV variant tend to hold their value best, and popular colours such as Santorini Black and Eiger Grey also support stronger residuals.",
  },
  {
    question: "Can I finance a used Range Rover Velar instead of a new 2026 model?",
    answer:
      "Yes, used Velars are widely available on PCP, HP, and personal loan finance. A two to three-year-old Velar typically costs between £30,000 and £45,000, reducing monthly PCP payments by £100-£200 compared to a new 2026 model. Land Rover's Approved Used programme includes a comprehensive multi-point inspection, warranty coverage, and roadside assistance. Used finance APR rates are typically 1-2% higher than new car rates, but the substantially lower purchase price more than compensates. This makes a used Velar an attractive route into Range Rover ownership at a lower monthly cost.",
  },
  {
    question: "What are the total running costs of a 2026 Velar alongside finance payments?",
    answer:
      "Beyond the monthly finance instalment, 2026 Velar running costs include insurance (groups 34-43, typically £600-£1,500 per year depending on your profile), fuel costs (31-130 mpg depending on powertrain choice), and servicing at approximately £400-£600 annually if you take out a Land Rover service plan. Road tax (VED) varies by emissions, with the PHEV attracting lower first-year rates. You can bundle servicing and maintenance into your finance package for a single predictable monthly outgoing. The D200 diesel offers the best fuel economy for high-mileage drivers at 41-44 mpg, while the P400e PHEV delivers the lowest running costs for shorter commutes driven predominantly on electric power.",
  },
];

export default function RangeRoverVelarPage() {
  return (
    <>
      <VehicleFinanceSchema
        modelName="Range Rover Velar"
        priceFrom={model.priceFrom}
        monthlyFrom={model.typicalMonthly}
        apr={model.typicalApr}
        url="https://www.rangeroverfinance.co.uk/range-rover-velar"
      />
      <BreadcrumbSchema items={[{ name: "Range Rover Velar", url: "https://www.rangeroverfinance.co.uk/range-rover-velar" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sand font-display text-sm uppercase tracking-widest mb-3">
                2026 Model Year
              </p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
                2026 {model.name} Finance
              </h1>
              <p className="mt-3 text-xl text-sand font-display">
                The most design-focused Range Rover. Avant-garde luxury, financed to suit you.
              </p>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                Finance the 2026 Range Rover Velar from {formatCurrency(model.typicalMonthly)} per
                month. With its award-winning minimalist interior, flush deployable door handles, and
                a silhouette that sits between the Evoque and Sport, the 2026 Velar is the design
                statement of the Range Rover family. Explore PCP, HP, and lease options below.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <p className="text-sm text-white/60 uppercase tracking-wider">2026 Price From</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(model.priceFrom)}</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <p className="text-sm text-white/60 uppercase tracking-wider">Monthly From</p>
                  <p className="text-2xl font-bold text-sand">
                    {formatCurrency(model.typicalMonthly)}/mo
                  </p>
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
                  src="/images/models/range-rover-velar.png"
                  alt="Range Rover Velar Belgravia Satin in Carpathian Grey - front three-quarter view"
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

      {/* Extended Intro - 2026 Velar Context */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display text-charcoal mb-6">
              The 2026 Range Rover Velar: Design Without Compromise
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The name &ldquo;Velar&rdquo; carries deep significance within Range Rover&rsquo;s
              history. Derived from the Italian word &ldquo;velare&rdquo; &mdash; meaning to veil or
              cover &mdash; it was the codename given to the original Range Rover prototypes in the
              late 1960s, disguised to keep their revolutionary design secret during road testing.
              The 2026 Velar honours that pioneering spirit with a vehicle that continues to push
              boundaries in automotive design.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              In the 2026 Range Rover lineup, the Velar occupies a distinctive position. It sits
              between the compact Evoque and the larger, more performance-oriented Range Rover Sport
              in both size and price, but it is not simply a compromise between the two. The 2026
              Velar is the most design-conscious model in the family &mdash; a vehicle conceived
              first and foremost as an aesthetic statement. Its continuous waistline, dramatically
              reduced shutlines, flush deployable door handles, and clean sculptural surfaces create
              a silhouette that is instantly recognisable and unlike anything else on the road.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 model year Velar competes directly with the Porsche Macan, BMW X4, Mercedes-Benz
              GLC Coupe, and Audi Q5. Against these established rivals, the Velar differentiates
              itself through its singular commitment to minimalist design and its award-winning
              interior architecture. The dual-touchscreen dashboard &mdash; a feature the Velar
              pioneered in the Range Rover range &mdash; eliminates almost all physical buttons,
              creating an interior ambience that feels more like a contemporary design studio than
              a conventional car cabin.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              This design-led approach has proven remarkably popular with buyers who value aesthetics
              and individuality. The 2026 Velar appeals strongly to design-conscious professionals,
              architects, creative directors, and buyers who want a premium SUV that expresses
              sophistication rather than aggression. Its single body style &mdash; a mid-size SUV
              with a gracefully raked roofline &mdash; ensures a cohesive, undiluted design vision.
            </p>
            <p className="text-slate leading-relaxed">
              From a finance perspective, the 2026 Velar offers an intelligent proposition. Its
              mid-range positioning means it avoids the steep depreciation curve that can affect
              vehicles at the very top of the market, while still commanding the prestige premium
              that supports healthy residual values. The Velar typically retains 45-50% of its
              value after three years, which translates directly into competitive PCP balloon
              payments and manageable monthly costs. The P400e PHEV variant adds a further
              dimension, offering dramatically reduced BIK tax for company car drivers thanks to
              CO2 emissions from just 36 g/km.
            </p>
          </div>
        </div>
      </section>

      {/* 2026 Powertrain Lineup */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Velar Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            The 2026 Range Rover Velar is available with four powertrain options spanning petrol,
            diesel, and plug-in hybrid technology. Every engine is paired with an eight-speed
            automatic transmission and all-wheel drive as standard.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-racing-green">
                  <th className="text-left py-3 px-4 font-display text-racing-green">Engine</th>
                  <th className="text-center py-3 px-4 font-display text-racing-green">Power</th>
                  <th className="text-center py-3 px-4 font-display text-racing-green">Torque</th>
                  <th className="text-center py-3 px-4 font-display text-racing-green">
                    CO2 (g/km)
                  </th>
                  <th className="text-center py-3 px-4 font-display text-racing-green">MPG</th>
                </tr>
              </thead>
              <tbody>
                {powertrains.map((pt, i) => (
                  <tr
                    key={pt.engine}
                    className={`border-b border-sand/30 ${i % 2 === 0 ? "bg-cream/50" : "bg-white"}`}
                  >
                    <td className="py-4 px-4 font-semibold text-charcoal">{pt.engine}</td>
                    <td className="py-4 px-4 text-center text-slate">{pt.power}</td>
                    <td className="py-4 px-4 text-center text-slate">{pt.torque}</td>
                    <td className="py-4 px-4 text-center text-slate">{pt.co2}</td>
                    <td className="py-4 px-4 text-center text-slate">{pt.mpg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-4">
            All 2026 Velar powertrains feature an 8-speed automatic gearbox and permanent all-wheel
            drive with Terrain Response 2. MHEV = Mild Hybrid Electric Vehicle. PHEV = Plug-in
            Hybrid Electric Vehicle.
          </p>
        </div>
      </section>

      {/* 2026 Trim Levels */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-3 text-center">
            2026 Velar Trim Levels &amp; Pricing
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five trim levels allow you to tailor the 2026 Velar to your preferences and budget. Each
            step up adds meaningful equipment, and every trim is available with all four powertrains.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trimLevels.map((trim) => (
              <div
                key={trim.name}
                className="bg-white rounded-xl p-6 lg:p-8 border border-sand/30 flex flex-col"
              >
                <h3 className="text-xl font-display text-racing-green mb-1">{trim.name}</h3>
                <p className="text-sand font-semibold text-lg mb-4">{trim.price}</p>
                <ul className="space-y-2 flex-1">
                  {trim.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate">
                      <span className="text-racing-green mt-0.5 flex-shrink-0">&#10003;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate text-center mt-6">
            2026 model year pricing is approximate and subject to change. On-the-road prices
            include VAT, first registration fee, and delivery charges.
          </p>
        </div>
      </section>

      {/* Design & Technology */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display text-charcoal mb-6 text-center">
              Design &amp; Technology: The 2026 Velar Difference
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Range Rover Velar&rsquo;s design philosophy centres on reductive simplicity.
              Where other manufacturers add visual complexity, the Velar strips it away. The flush
              deployable door handles &mdash; a feature the Velar introduced to the Range Rover
              range &mdash; sit perfectly flush with the bodywork when not in use, preserving the
              uninterrupted flow of the car&rsquo;s flanks and reducing aerodynamic drag. They
              deploy automatically as the driver approaches, a detail that encapsulates the
              Velar&rsquo;s ethos of technology serving design.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Inside, the 2026 Velar&rsquo;s cabin is defined by its pioneering dual-touchscreen
              architecture. The upper screen handles navigation, media, and vehicle settings, while
              the lower screen manages climate control and secondary functions. This arrangement
              eliminates the clutter of conventional buttons and rotary controls, creating an
              interior that feels open, calm, and distinctly modern. The Pivi Pro infotainment
              system powering both screens is responsive and intuitive, with over-the-air updates
              ensuring the software remains current throughout the ownership period.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Material quality throughout the 2026 Velar is exceptional. Even the base trim combines
              leather and suedecloth in a manner that feels premium and considered, while higher
              specifications introduce extended leather, open-pore wood veneers, and brushed metal
              finishes. The Meridian sound system options &mdash; ranging from 380W in S trim to the
              extraordinary 1600W Signature system in Dynamic HSE &mdash; ensure the auditory
              experience matches the visual refinement.
            </p>
            <p className="text-slate leading-relaxed">
              Advanced driver assistance systems in the 2026 Velar include adaptive cruise control
              with steering assist, a 3D surround camera system, and the ClearSight rear-view
              mirror (available from Dynamic HSE), which replaces the conventional mirror with a
              high-definition camera feed for an unobstructed view behind the vehicle. The
              optional head-up display projects navigation, speed, and driver assistance
              information directly onto the windscreen, reducing the need to glance away from the
              road.
            </p>
          </div>
        </div>
      </section>

      
      {/* Trim Comparison Table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Velar Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Range Rover Velar trim levels. P400e PHEV available across all trims.
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
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£48,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£54,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£60,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£68,000</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">19" Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">19"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">20"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">21"</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">22"</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">LED Headlights</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Premium</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Pixel</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Pixel</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pivi Pro Infotainment</td>
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
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Semi-Aniline</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated Front Seats</td>
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
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Meridian Sound System</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Standard</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Surround</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Signature 1,600W</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Adaptive Dynamics</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Head-Up Display</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Soft-Close Doors</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
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
              </tbody>
            </table>
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
                    <span className="text-sm font-medium text-charcoal">Total Cost</span>
                    <span className="text-sm font-bold text-charcoal">
                      {formatCurrency(model.pcpExample.totalCost)}
                    </span>
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
                    <span className="text-sm font-medium text-charcoal">Total Cost</span>
                    <span className="text-sm font-bold text-charcoal">
                      {formatCurrency(model.hpExample.totalCost)}
                    </span>
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
            Representative examples only. Actual rates depend on individual circumstances and credit
            profile. Figures based on a 2026 {model.name} priced from{" "}
            {formatCurrency(model.priceFrom)}.
          </p>
        </div>
      </section>

      {/* Finance Calculator */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-3">
            2026 {model.name} Finance Calculator
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Model your ideal 2026 Velar finance package. Adjust the vehicle price to reflect your
            chosen trim and powertrain, set your deposit, term, and APR to see how different
            configurations affect your monthly commitment.
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

      {/* Key Specifications Grid */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.name} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Body Style</p>
              <p className="text-sm font-semibold text-charcoal">Mid-Size SUV</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">2026 Engines</p>
              <p className="text-sm font-semibold text-charcoal">
                {model.engineOptions.join(", ")}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Seating</p>
              <p className="text-sm font-semibold text-charcoal">{model.seatingCapacity}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Insurance Group</p>
              <p className="text-sm font-semibold text-charcoal">{model.insuranceGroup}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">CO2 Range</p>
              <p className="text-sm font-semibold text-charcoal">36-233 g/km</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Drivetrain</p>
              <p className="text-sm font-semibold text-charcoal">AWD Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensions & Capability */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 Velar Dimensions &amp; Capability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-display text-racing-green mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Length</span>
                  <span className="text-sm font-semibold text-charcoal">4,803 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Width (inc. mirrors)</span>
                  <span className="text-sm font-semibold text-charcoal">2,145 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Height</span>
                  <span className="text-sm font-semibold text-charcoal">1,665 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Wheelbase</span>
                  <span className="text-sm font-semibold text-charcoal">2,874 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Kerb Weight</span>
                  <span className="text-sm font-semibold text-charcoal">1,829 - 2,085 kg</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Boot Capacity</span>
                  <span className="text-sm font-semibold text-charcoal">632 litres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Boot (Seats Folded)</span>
                  <span className="text-sm font-semibold text-charcoal">1,731 litres</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-display text-racing-green mb-4">Off-Road Capability</h3>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Towing Capacity (Braked)</span>
                  <span className="text-sm font-semibold text-charcoal">2,500 kg</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Wading Depth</span>
                  <span className="text-sm font-semibold text-charcoal">650 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Ground Clearance (Standard)</span>
                  <span className="text-sm font-semibold text-charcoal">213 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Ground Clearance (Air Susp.)</span>
                  <span className="text-sm font-semibold text-charcoal">251 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">Terrain Response</span>
                  <span className="text-sm font-semibold text-charcoal">
                    Terrain Response 2
                  </span>
                </div>
                <div className="flex justify-between border-b border-sand/30 pb-2">
                  <span className="text-sm text-slate">PHEV Battery</span>
                  <span className="text-sm font-semibold text-charcoal">17.1 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">PHEV Electric Range</span>
                  <span className="text-sm font-semibold text-charcoal">~33 miles / 53 km</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance a Velar */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Range Rover Velar?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Avant-Garde Design That Holds Its Value
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Velar is the most design-forward vehicle in the Range Rover family. Its
                flush door handles, continuous waistline, and dramatically raked roofline create a
                silhouette that turns heads in a way that more conventional SUV shapes cannot.
                Inside, the dual high-definition touchscreens and minimalist dashboard eliminate
                almost all physical buttons, creating a cabin that feels genuinely futuristic. This
                distinctive aesthetic ages exceptionally well, which directly supports the strong
                residual values that keep PCP payments competitive. Buyers in the used market
                consistently rate the Velar&rsquo;s cabin as one of the most desirable in its class.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                The Financial Sweet Spot in the Range Rover Range
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Velar bridges the gap between the compact Evoque and the larger Sport,
                offering meaningfully more interior space and road presence than the former without
                the premium pricing of the latter. With monthly PCP payments approximately £60 above
                the Evoque and £200 below the Sport, the Velar occupies a financial sweet spot for
                buyers who want more car than the Evoque provides but find the Sport a stretch. The
                boot capacity of 632 litres (1,731 with rear seats folded) is genuinely practical
                for families and active lifestyles, and the 2,874 mm wheelbase delivers generous
                rear legroom.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                Competitive Total Cost of Ownership
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                Beyond the monthly finance payment, the 2026 Velar scores well on total cost of
                ownership. Insurance groups of 34-43 are moderate for the premium SUV segment, and
                servicing costs are predictable through Land Rover&rsquo;s service plan options. The
                D200 diesel achieves 41-44 mpg, making it efficient for longer commutes and
                high-mileage drivers. When you factor in the competitive insurance, fuel, and
                servicing costs alongside manageable PCP payments, the 2026 Velar can be more
                affordable to run than some less prestigious alternatives from BMW, Audi, and
                Mercedes-Benz.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">
                P400e PHEV: Efficiency Meets Tax Efficiency
              </h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Velar P400e plug-in hybrid offers up to 33 miles of electric-only range
                from its 17.1 kWh battery, sufficient for most daily commutes on electric power
                alone. With CO2 emissions from just 36 g/km, it qualifies for very low BIK tax
                rates, making it an exceptionally tax-efficient company car. Home charging overnight
                is simple and inexpensive, costing approximately £1.50 for a full charge. For
                business users, the combination of low BIK, reduced fuel costs, and competitive
                finance rates makes the 2026 PHEV Velar one of the most financially intelligent
                premium SUV choices available today.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Range Rover Velar
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">What Car?</span>
                <span className="text-sand font-bold text-lg">4/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;A refined, luxuriously equipped and seriously appealing SUV. Stick to the cheaper trims and engines for the best value proposition.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/range-rover-velar/estate/review/"
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
                &ldquo;The mid-life update leaves behind a car still well capable of a luxurious air, with improved powertrain options and extensively revised interior technology.&rdquo;
              </p>
              <a
                href="https://www.autocar.co.uk/car-review/land-rover/range-rover-velar"
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
                <span className="text-sand font-bold text-lg">7/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;The Velar occupies a sweet spot in the range, offering more space and prestige than the Evoque whilst being more affordable than the Sport.&rdquo;
              </p>
              <a
                href="https://www.topgear.com/car-reviews/land-rover/range-rover-velar"
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
            Watch Range Rover Velar Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+range+rover+velar+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Velar Full Review</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+range+rover+velar+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Velar In-Depth Review</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection title={`2026 ${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Range Rover Velar?"
        description="Explore PCP, HP and lease options for the avant-garde 2026 Range Rover Velar. Free, no-obligation quotes tailored to your chosen trim and powertrain."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
