import { Metadata } from "next";
import Image from "next/image";
import { getModelBySlug, formatCurrency } from "@/lib/models";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { VehicleFinanceSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";

const model = getModelBySlug("range-rover")!;

export const metadata: Metadata = {
  title: model.metaTitle,
  description: model.metaDescription,
};

const faqs = [
  {
    question: "What is the cheapest way to finance a new 2026 Range Rover?",
    answer: "PCP (Personal Contract Purchase) typically offers the lowest monthly payments for a 2026 Range Rover because a significant portion of the cost is deferred to the optional balloon payment at the end. With strong residual values of 55-60% after three years, the balloon on a Range Rover PCP is substantial, which keeps monthly instalments lower than HP. A larger deposit will further reduce your monthly outgoings.",
  },
  {
    question: "Can I get a 2026 Range Rover PHEV on finance and benefit from lower BIK tax?",
    answer: "Yes, the 2026 Range Rover P460e and P510e plug-in hybrid models qualify for significantly reduced Benefit in Kind (BIK) tax rates. With CO2 emissions as low as 18 g/km, PHEV Range Rovers currently attract a BIK rate of around 5%, compared to 37% for petrol and diesel variants. For a 40% taxpayer, this can mean savings of over £800 per month compared to an equivalent petrol model taken as a company car.",
  },
  {
    question: "Is the 2026 Range Rover Long Wheelbase worth the extra cost on finance?",
    answer: "The LWB adds approximately £10,000-£15,000 to the purchase price, which translates to around £100-£150 more per month on a typical PCP deal. However, LWB models hold their value exceptionally well due to limited supply and strong demand, particularly in the luxury chauffeur and executive market. The additional rear legroom and optional Executive Class rear seats make it a worthwhile investment if rear passenger comfort is a priority.",
  },
  {
    question: "What deposit do I need for 2026 Range Rover finance?",
    answer: "There is no fixed minimum deposit for Range Rover finance, though most lenders prefer at least 10% of the vehicle price. On a £105,000 2026 Range Rover SE, a typical deposit of £10,500-£20,000 would be expected. A larger deposit reduces your monthly payments and the total amount of interest paid over the term. Some lenders offer zero-deposit deals, though these will result in higher monthly payments and potentially higher APR rates.",
  },
  {
    question: "How does Range Rover finance compare to buying outright?",
    answer: "Buying outright avoids interest charges but ties up significant capital. A £115,000 Range Rover financed over 48 months at 6.9% APR costs approximately £15,000-£20,000 in interest. However, PCP finance allows you to invest that capital elsewhere, potentially earning returns that offset the interest cost. Additionally, PCP provides flexibility at the end of the term to hand the vehicle back, refinance, or pay the balloon. For many buyers, the flexibility and cash flow advantages of finance outweigh the interest cost.",
  },
  {
    question: "Can I finance a used or approved Range Rover?",
    answer: "Absolutely. Approved used Range Rovers can be financed through PCP, HP, or personal loan arrangements. Used models typically carry slightly higher APR rates than new vehicle finance, but the lower purchase price means monthly payments can be significantly reduced. A two-year-old Range Rover might cost £70,000-£85,000, potentially saving £300-£500 per month compared to financing a new equivalent model. Land Rover's Approved Used programme also includes warranty coverage and vehicle history checks.",
  },
  {
    question: "Which 2026 Range Rover engine is the best value on finance?",
    answer: "For private buyers prioritising monthly cost, the D350 diesel offers the best balance of performance and fuel economy, keeping running costs low alongside your finance payments. For company car drivers, the P460e or P510e PHEV models are overwhelmingly the best value when BIK tax savings are factored in. The P530 V8 Twin Turbo commands a premium but delivers supercar-rivalling performance from a full-size luxury SUV.",
  },
  {
    question: "What are the differences between the 2026 Range Rover trim levels?",
    answer: "The 2026 Range Rover is available in four trim levels: SE (from £105,000), HSE (from £115,000), Autobiography (from £130,000), and SV (from £165,000). Each step up adds significant luxury features. The SE is generously equipped with 23-inch alloys, air suspension, and a Meridian sound system. The HSE adds a head-up display and soft-close doors. Autobiography brings semi-aniline leather and the 1,600W Meridian Signature system with 35 speakers. The SV is hand-finished with bespoke interior options and exclusive styling.",
  },
];

export default function RangeRoverPage() {
  return (
    <>
      <VehicleFinanceSchema
        modelName="Range Rover"
        priceFrom={model.priceFrom}
        monthlyFrom={model.typicalMonthly}
        apr={model.typicalApr}
        url="https://www.rangeroverfinance.co.uk/range-rover"
      />
      <BreadcrumbSchema items={[{ name: "Range Rover", url: "https://www.rangeroverfinance.co.uk/range-rover" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-racing-green via-racing-green-light to-racing-green py-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: model.name }]} />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-display text-white leading-tight">
                2026 {model.name} Finance
              </h1>
              <p className="mt-3 text-xl text-sand font-display">
                The definitive luxury SUV. Compare PCP, HP and lease deals on the 2026 model year Range Rover.
              </p>
              <p className="mt-6 text-lg text-white/80 leading-relaxed max-w-2xl">
                {model.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg px-6 py-4">
                  <p className="text-sm text-white/60 uppercase tracking-wider">2026 Price From</p>
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
                  src="/images/models/range-rover.png"
                  alt="Range Rover SV in Santorini Black - front three-quarter view"
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
              The 2026 Range Rover: A New Standard in Luxury
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              The 2026 Range Rover, built on the MLA-Flex platform as part of the fifth-generation L460 series,
              represents the most technologically advanced and luxurious Range Rover ever produced. Since its
              launch in 2022, the L460 generation has redefined what a full-size luxury SUV can be, combining
              a strikingly modern design language with peerless refinement, genuine off-road capability, and
              a breadth of powertrain choice that spans from efficient diesel to plug-in hybrid and twin-turbo V8
              performance. For the 2026 model year, the Range Rover continues to set the benchmark against which
              rivals from Bentley, Mercedes-Maybach, and BMW are measured.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              Available in both Standard Wheelbase (SWB) and Long Wheelbase (LWB) configurations, the 2026
              Range Rover caters to owners who drive themselves and those who prefer to be driven. The LWB
              variant, stretching to over 5.25 metres in length, offers optional Executive Class rear seating
              with airline-style reclining chairs, deployable tables, and individual 11.4-inch entertainment
              screens -- a genuine mobile office or first-class lounge. This versatility, paired with the
              Range Rover's legendary all-terrain ability including a 900mm wading depth, means the 2026
              model year delivers capability that no traditional luxury saloon can match.
            </p>
            <p className="text-slate leading-relaxed">
              From a financial perspective, the 2026 Range Rover occupies a compelling position. Its exceptional
              residual value performance -- first-generation L460 models consistently retain 55-60% of their
              original value after three years -- is the foundation of affordable PCP finance. Meanwhile, the
              P460e and P510e plug-in hybrid variants offer transformative tax efficiency for company car drivers,
              with BIK rates a fraction of those applied to petrol or diesel equivalents. Whether you are
              financing a 2026 Range Rover SE as an aspirational first step into flagship ownership or
              specifying an SV with hand-finished bespoke interior, understanding the finance landscape is
              essential to making the right choice.
            </p>
          </div>
        </div>
      </section>

      {/* Body Styles: SWB vs LWB */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Body Styles
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            The 2026 Range Rover is available in two body configurations, each offering a distinct ownership experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SWB */}
            <div className="bg-cream rounded-xl p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-2">Standard Wheelbase (SWB)</h3>
              <p className="text-sm text-sand font-semibold mb-4">The driver's Range Rover</p>
              <p className="text-sm text-slate leading-relaxed mb-6">
                The SWB Range Rover is the more agile of the two body styles, favoured by owners who drive
                themselves. At just over five metres long, it remains commanding on the road while being
                manageable in urban environments. Available with 4 or 5 seats, the SWB offers a boot capacity
                of 725 litres with the rear seats upright.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Length</span>
                  <span className="text-sm font-semibold text-charcoal">5,052 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Width</span>
                  <span className="text-sm font-semibold text-charcoal">2,209 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Height</span>
                  <span className="text-sm font-semibold text-charcoal">1,870 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Wheelbase</span>
                  <span className="text-sm font-semibold text-charcoal">2,997 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Seating</span>
                  <span className="text-sm font-semibold text-charcoal">4 or 5 seats</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Boot Capacity</span>
                  <span className="text-sm font-semibold text-charcoal">725 litres</span>
                </div>
              </div>
            </div>

            {/* LWB */}
            <div className="bg-cream rounded-xl p-8 border border-sand/30">
              <h3 className="text-xl font-display text-racing-green mb-2">Long Wheelbase (LWB)</h3>
              <p className="text-sm text-sand font-semibold mb-4">The chauffeur-grade luxury choice</p>
              <p className="text-sm text-slate leading-relaxed mb-6">
                The LWB adds 200mm to both the overall length and wheelbase, transforming rear passenger
                space into a first-class cabin. Available with 5 or 7 seats (optional third row), or
                the exclusive Executive Class configuration with individually reclining airline-style rear
                seats, deployable tables, and 11.4-inch entertainment screens. Boot capacity grows to 867 litres.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Length</span>
                  <span className="text-sm font-semibold text-charcoal">5,252 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Width</span>
                  <span className="text-sm font-semibold text-charcoal">2,209 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Height</span>
                  <span className="text-sm font-semibold text-charcoal">1,870 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Wheelbase</span>
                  <span className="text-sm font-semibold text-charcoal">3,197 mm</span>
                </div>
                <div className="flex justify-between border-b border-sand/20 pb-2">
                  <span className="text-sm text-slate">Seating</span>
                  <span className="text-sm font-semibold text-charcoal">5 or 7 seats</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-slate">Boot Capacity</span>
                  <span className="text-sm font-semibold text-charcoal">867 litres</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            LWB models add approximately £10,000-£15,000 to the equivalent SWB trim price. Executive Class rear seats available on LWB Autobiography and SV only.
          </p>
        </div>
      </section>

      {/* 2026 Powertrain Lineup */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Powertrain Lineup
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Five powertrains spanning diesel, mild hybrid petrol, twin-turbo V8, and plug-in hybrid technology.
            Every 2026 Range Rover engine is paired with an 8-speed ZF automatic gearbox and permanent all-wheel drive.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold">Engine</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold">Power</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold">Torque</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold">CO2 (g/km)</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold">MPG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-sand/20">
                  <td className="py-4 px-3 font-semibold text-charcoal">D350 Diesel</td>
                  <td className="py-4 px-3 text-center text-charcoal">346 PS</td>
                  <td className="py-4 px-3 text-center text-charcoal">700 Nm</td>
                  <td className="py-4 px-3 text-center text-charcoal">199-209</td>
                  <td className="py-4 px-3 text-center text-charcoal">35-37</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-4 px-3 font-semibold text-charcoal">P400 Mild Hybrid</td>
                  <td className="py-4 px-3 text-center text-charcoal">400 PS</td>
                  <td className="py-4 px-3 text-center text-charcoal">550 Nm</td>
                  <td className="py-4 px-3 text-center text-charcoal">231-243</td>
                  <td className="py-4 px-3 text-center text-charcoal">26-28</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-4 px-3 font-semibold text-charcoal">P530 V8 Twin Turbo</td>
                  <td className="py-4 px-3 text-center text-charcoal">530 PS</td>
                  <td className="py-4 px-3 text-center text-charcoal">750 Nm</td>
                  <td className="py-4 px-3 text-center text-charcoal">283-298</td>
                  <td className="py-4 px-3 text-center text-charcoal">22-23</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-4 px-3 font-semibold text-charcoal">
                    P460e PHEV
                    <span className="ml-2 text-xs text-sand font-normal">Low BIK</span>
                  </td>
                  <td className="py-4 px-3 text-center text-charcoal">460 PS</td>
                  <td className="py-4 px-3 text-center text-charcoal">620 Nm</td>
                  <td className="py-4 px-3 text-center text-sand font-semibold">18-24</td>
                  <td className="py-4 px-3 text-center text-charcoal">353-404</td>
                </tr>
                <tr>
                  <td className="py-4 px-3 font-semibold text-charcoal">
                    P510e PHEV
                    <span className="ml-2 text-xs text-sand font-normal">Low BIK</span>
                  </td>
                  <td className="py-4 px-3 text-center text-charcoal">510 PS</td>
                  <td className="py-4 px-3 text-center text-charcoal">700 Nm</td>
                  <td className="py-4 px-3 text-center text-sand font-semibold">18-22</td>
                  <td className="py-4 px-3 text-center text-charcoal">353-404</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate text-center mt-6">
            PHEV models feature a 31.8 kWh battery with an electric-only range of up to 113 km (70 miles). MPG figures for PHEV are WLTP weighted combined. All figures are manufacturer-stated for the 2026 model year.
          </p>
        </div>
      </section>

      {/* Trim Levels */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Trim Levels
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Four distinct specifications, each defining a different level of luxury. All prices shown are for the SWB configuration; LWB adds approximately £10,000-£15,000 to each trim.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30 flex flex-col">
              <h3 className="text-lg font-display text-racing-green mb-1">SE</h3>
              <p className="text-2xl font-bold text-charcoal mb-4">From £105,000</p>
              <ul className="space-y-2 text-sm text-slate flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>23-inch alloy wheels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Electronic air suspension</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Meridian sound system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Pivi Pro infotainment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Leather interior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Heated &amp; cooled front seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>LED headlights</span>
                </li>
              </ul>
            </div>

            {/* HSE */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30 flex flex-col">
              <h3 className="text-lg font-display text-racing-green mb-1">HSE</h3>
              <p className="text-2xl font-bold text-charcoal mb-4">From £115,000</p>
              <ul className="space-y-2 text-sm text-slate flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Everything in SE, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Upgraded leather upholstery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Heated rear seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Head-up display</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Soft-close doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Dynamic Response air suspension</span>
                </li>
              </ul>
            </div>

            {/* Autobiography */}
            <div className="bg-cream rounded-xl p-6 border border-sand/30 flex flex-col">
              <h3 className="text-lg font-display text-racing-green mb-1">Autobiography</h3>
              <p className="text-2xl font-bold text-charcoal mb-4">From £130,000</p>
              <ul className="space-y-2 text-sm text-slate flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Everything in HSE, plus:</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Semi-aniline leather</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Executive Class rear seats (LWB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>4-zone climate control</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Meridian Signature 1,600W / 35 speakers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Pixel LED headlights</span>
                </li>
              </ul>
            </div>

            {/* SV */}
            <div className="bg-racing-green rounded-xl p-6 border border-sand/30 flex flex-col">
              <h3 className="text-lg font-display text-sand mb-1">SV</h3>
              <p className="text-2xl font-bold text-white mb-4">From £165,000</p>
              <ul className="space-y-2 text-sm text-white/80 flex-1">
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Hand-finished SV Bespoke interior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Ceramic controls throughout</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Choice of 4 or 5 seats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Exclusive SV paint options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>SV-specific exterior styling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sand mt-0.5">&#10003;</span>
                  <span>Ultimate luxury specification</span>
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
            2026 Range Rover Trim Comparison
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Compare specifications and standard equipment across all 2026 Range Rover trim levels. Prices shown for SWB. LWB adds approximately £10,000-£15,000.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-sand/40">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-slate font-semibold min-w-[160px]">Feature</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">SE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">HSE</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">Autobiography</th>
                  <th className="text-center py-4 px-3 text-xs uppercase tracking-wider text-slate font-semibold min-w-[120px]">SV</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-sand/30 bg-racing-green/5">
                  <td className="py-4 px-4 font-semibold text-charcoal">Starting Price</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£105,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£115,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£130,000</td>
                  <td className="py-4 px-3 text-center font-bold text-sand">£165,000</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">23" Alloy Wheels</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Electronic Air Suspension</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Meridian Sound System</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Signature 1,600W</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Signature 1,600W</td>
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
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Upgraded</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">Semi-Aniline</td>
                  <td className="py-3 px-3 text-center text-sm text-charcoal">SV Bespoke</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Heated & Cooled Front Seats</td>
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
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Soft-Close Doors</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Dynamic Response Suspension</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
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
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Pixel LED Headlights</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Executive Class Rear Seats (LWB)</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20 bg-white/50">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">Ceramic Controls</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-slate/30">&mdash;</td>
                  <td className="py-3 px-3 text-center text-sand text-lg">&#10003;</td>
                </tr>
                <tr className="border-b border-sand/20">
                  <td className="py-3 px-4 text-sm text-charcoal font-medium">SV Bespoke Paint Options</td>
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
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Compare 2026 {model.name} Finance Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* PCP */}
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

            {/* HP */}
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

            {/* Lease */}
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
            a 2026 {model.name} priced from {formatCurrency(model.priceFrom)}.
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
            Adjust the sliders to explore monthly payment options for your 2026 Range Rover. Compare PCP,
            HP and lease costs across every trim level and powertrain to find the finance structure that suits your budget.
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
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            2026 {model.name} Key Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Body Type</p>
              <p className="text-sm font-semibold text-charcoal">{model.bodyType}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Engines</p>
              <p className="text-sm font-semibold text-charcoal">{model.engineOptions.join(", ")}</p>
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
              <p className="text-xs text-slate uppercase tracking-wider mb-2">CO2 Emissions</p>
              <p className="text-sm font-semibold text-charcoal">{model.co2Range}</p>
            </div>
            <div className="bg-white rounded-lg p-5 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Fuel Economy</p>
              <p className="text-sm font-semibold text-charcoal">{model.fuelEconomy}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dimensions & Capability */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            2026 Range Rover Dimensions &amp; Capability
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Beyond luxury, the 2026 Range Rover remains one of the most capable off-road vehicles money can buy.
            These are the figures that set it apart from every luxury saloon rival.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Towing Capacity</p>
              <p className="text-xl font-bold text-racing-green">3,500 kg</p>
              <p className="text-xs text-slate mt-1">Braked trailer</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Wading Depth</p>
              <p className="text-xl font-bold text-racing-green">900 mm</p>
              <p className="text-xs text-slate mt-1">With wade sensing</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Ground Clearance</p>
              <p className="text-xl font-bold text-racing-green">295 mm</p>
              <p className="text-xs text-slate mt-1">Off-road ride height</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Kerb Weight</p>
              <p className="text-xl font-bold text-racing-green">2,395-2,710 kg</p>
              <p className="text-xs text-slate mt-1">Depending on variant</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Boot (SWB)</p>
              <p className="text-xl font-bold text-racing-green">725 litres</p>
              <p className="text-xs text-slate mt-1">Seats upright</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Boot (LWB)</p>
              <p className="text-xl font-bold text-racing-green">867 litres</p>
              <p className="text-xs text-slate mt-1">Seats upright</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">Fuel Tank</p>
              <p className="text-xl font-bold text-racing-green">80-90 litres</p>
              <p className="text-xs text-slate mt-1">ICE models</p>
            </div>
            <div className="bg-cream rounded-lg p-6 text-center">
              <p className="text-xs text-slate uppercase tracking-wider mb-2">PHEV Battery</p>
              <p className="text-xl font-bold text-racing-green">31.8 kWh</p>
              <p className="text-xs text-slate mt-1">Up to 70 miles EV range</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance a Range Rover */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-10 text-center">
            Why Finance a 2026 Range Rover?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Exceptional Residual Values</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Range Rover consistently holds its value better than most luxury SUVs. Retaining
                55-60% of its value after three years means the gap between what you finance and what
                the car is worth at the end of the term is smaller. This directly translates to lower
                PCP monthly payments, making the flagship Range Rover more affordable on finance than
                many buyers expect.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">PHEV Tax Advantages</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 P460e and P510e plug-in hybrids offer a compelling financial case for company car
                drivers. With CO2 emissions as low as 18 g/km, BIK rates are dramatically lower than
                petrol or diesel equivalents. A company car driver could save over £10,000 per year in
                tax compared to a conventional Range Rover, making the PHEV the most tax-efficient
                luxury SUV available in the UK.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Long Wheelbase Prestige</h3>
              <p className="text-sm text-slate leading-relaxed">
                The 2026 Range Rover LWB and SV models occupy a unique position in the market, competing
                directly with chauffeur-grade luxury saloons from Bentley and Rolls-Royce. Optional
                Executive Class rear seats with airline-style recline, deployable tables, and 11.4-inch
                entertainment screens make the LWB a boardroom on wheels. These high-specification models
                command strong premiums on the used market, supporting excellent PCP terms.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-lg font-display text-racing-green mb-3">Flagship Ownership Experience</h3>
              <p className="text-sm text-slate leading-relaxed">
                Beyond the vehicle itself, 2026 Range Rover ownership includes access to Land Rover's
                premium service network, courtesy car provision, and comprehensive warranty packages.
                Finance customers can roll service plans and extended warranties into their monthly
                payment, creating a single predictable cost of ownership. The Range Rover's legendary
                capability in all conditions provides genuine year-round usability that few rivals can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Expert Reviews */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-4 text-center">
            What the Experts Say About the 2026 Range Rover
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            Independent reviews from the UK&apos;s most trusted automotive journalists.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream rounded-xl p-6 border border-sand/30">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-racing-green text-lg">Top Gear</span>
                <span className="text-sand font-bold text-lg">9/10</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;There are other expensive SUVs but there's only one Range Rover. And it's better than ever. Wonderful exterior design, interior arguably even better, strong hybrid powertrain, massive breadth of capabilities.&rdquo;
              </p>
              <a
                href="https://www.topgear.com/car-reviews/land-rover/range-rover"
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
                <span className="text-sand font-bold text-lg">4.5/5</span>
              </div>
              <p className="text-slate text-sm leading-relaxed mb-4">
                &ldquo;One of the most comfortable cars money can buy. The P550e performs impressively.&rdquo;
              </p>
              <a
                href="https://www.autocar.co.uk/car-review/land-rover/range-rover"
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
                &ldquo;The Range Rover is supremely comfortable, packed with luxury features and has a commanding road presence.&rdquo;
              </p>
              <a
                href="https://www.whatcar.com/land-rover/range-rover/4x4/review/"
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
                &ldquo;One of the best luxury SUVs in the game thanks to its smooth drive, posh interior and fantastic looks. It scored five out of five in Euro NCAP safety testing.&rdquo;
              </p>
              <a
                href="https://www.carwow.co.uk/land-rover/range-rover"
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
            Watch Range Rover Reviews
          </h2>
          <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
            In-depth video reviews from leading automotive channels to help you decide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="https://www.youtube.com/results?search_query=carwow+range+rover+2024+review"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Review - The Ultimate Luxury SUV?</p>
                <p className="text-slate text-sm">Carwow</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=what+car+range+rover+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover In-Depth Review</p>
                <p className="text-slate text-sm">What Car?</p>
              </div>
            </a>
            <a
              href="https://www.youtube.com/results?search_query=auto+express+range+rover+review+2024"
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
                <p className="text-charcoal font-semibold group-hover:text-sand transition-colors">Range Rover Road Test</p>
                <p className="text-slate text-sm">Auto Express</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* FAQs */}
      <FAQSection title={`2026 ${model.name} Finance FAQs`} faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance Your 2026 Range Rover?"
        description="Speak to our specialists about PCP, HP and lease options for the 2026 Range Rover. Free, no-obligation quotes tailored to your budget across all trims from SE to SV."
        buttonText="Get Your Free Quote"
        buttonHref="/apply"
      />
    </>
  );
}
