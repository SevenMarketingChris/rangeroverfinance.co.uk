import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { models, formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Used Range Rover Finance | Second Hand Deals | Approved Used",
  description:
    "Finance a used Range Rover with competitive PCP and HP deals. Explore approved used programmes, typical prices by model and age, and how to secure the best used finance rates. Expert guidance on second-hand Range Rover purchases.",
  openGraph: {
    title: "Used Range Rover Finance | Second Hand Deals | Approved Used",
    description:
      "Finance a used Range Rover with competitive PCP and HP deals. Approved used programmes, typical prices and expert guidance.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/used-finance",
  },
};

const usedPriceData = [
  { model: "Range Rover", oneYear: "£82,000 - £165,000", twoYear: "£65,000 - £135,000", threeYear: "£52,000 - £110,000" },
  { model: "Range Rover Sport", oneYear: "£62,000 - £98,000", twoYear: "£48,000 - £80,000", threeYear: "£38,000 - £65,000" },
  { model: "Range Rover Evoque", oneYear: "£28,000 - £42,000", twoYear: "£22,000 - £35,000", threeYear: "£18,000 - £28,000" },
  { model: "Range Rover Velar", oneYear: "£36,000 - £55,000", twoYear: "£28,000 - £45,000", threeYear: "£22,000 - £36,000" },
  { model: "Discovery", oneYear: "£44,000 - £64,000", twoYear: "£35,000 - £52,000", threeYear: "£28,000 - £42,000" },
  { model: "Discovery Sport", oneYear: "£26,000 - £40,000", twoYear: "£20,000 - £32,000", threeYear: "£16,000 - £26,000" },
  { model: "Defender", oneYear: "£48,000 - £100,000", twoYear: "£42,000 - £90,000", threeYear: "£38,000 - £78,000" },
];

const faqs = [
  {
    question: "Can I get PCP finance on a used Range Rover?",
    answer:
      "Yes, PCP finance is widely available on used Range Rovers, typically for vehicles up to around 5-6 years old with fewer than 60,000-70,000 miles. The GFV (balloon payment) will be lower on a used vehicle than a new one, reflecting the reduced residual value, but monthly payments can still be very competitive. Many approved used Range Rovers come with manufacturer-backed PCP offers at preferential rates.",
  },
  {
    question: "Are interest rates higher on used Range Rover finance?",
    answer:
      "Generally, yes. Used vehicle finance typically carries a slightly higher APR than new vehicle finance. New Range Rovers may be available at promotional rates as low as 3.9% to 5.9%, while used vehicles typically attract rates from 6.9% to 12.9% depending on the vehicle's age, mileage, and your credit profile. However, the significantly lower purchase price of a used vehicle often more than compensates for the higher APR, resulting in lower monthly payments overall.",
  },
  {
    question: "What is the Land Rover Approved Used programme?",
    answer:
      "Land Rover Approved Used is the manufacturer's certified pre-owned programme. Vehicles must pass a comprehensive multi-point inspection and meet strict standards for age and mileage. Approved used vehicles come with a manufacturer warranty (typically 12-24 months), breakdown cover, a full vehicle history check, and access to JLR's finance offers. Buying approved used provides peace of mind and may offer more competitive finance rates than independent used vehicle finance.",
  },
  {
    question: "What should I check before financing a used Range Rover?",
    answer:
      "Key checks include: full service history (ideally with Land Rover main dealers), HPI check for outstanding finance, insurance write-offs, or stolen status, MOT history for recurring issues, the vehicle's specification and optional extras (which significantly affect value), and any warranty coverage remaining. For Range Rovers specifically, check for evidence of regular maintenance — particularly on models with air suspension, supercharged engines, or complex electrical systems that require specialist care.",
  },
  {
    question: "Is there a maximum age or mileage for used Range Rover finance?",
    answer:
      "Most lenders have limits on the age and mileage of vehicles they will finance. A common restriction is that the vehicle must be no older than 8-10 years at the end of the finance term, and must have fewer than 100,000 miles. Some specialist lenders may be more flexible. Approved used finance typically requires the vehicle to be under 5 years old with fewer than 60,000 miles. These limits vary between lenders, so it is worth comparing options.",
  },
  {
    question: "Should I buy a 1-year-old or 3-year-old used Range Rover?",
    answer:
      "A 1-year-old Range Rover (often called 'nearly new') offers the benefit of the latest model with significant depreciation already absorbed — typically 15-25% off the new price. You will often still have manufacturer warranty remaining. A 3-year-old model offers even greater savings (30-45% off new), but you will need to factor in the cost of an extended warranty if the manufacturer warranty has expired. The right choice depends on your budget and how important having the very latest technology and styling is to you.",
  },
  {
    question: "Can I part-exchange my current car against a used Range Rover on finance?",
    answer:
      "Yes, you can use your current vehicle as a part-exchange. Its value will be set against the purchase price of the used Range Rover, reducing the amount you need to finance. If your current car has outstanding finance, this will need to be settled from the part-exchange value before any remaining equity is applied to the new deal. Using a part-exchange as a deposit equivalent can improve your chances of finance approval and reduce monthly payments.",
  },
  {
    question: "Is a personal loan better than PCP or HP for a used Range Rover?",
    answer:
      "A personal loan from a bank or building society can sometimes offer a lower interest rate than dealer finance, particularly for borrowers with excellent credit scores. The advantage of a personal loan is that you own the vehicle outright from day one, and the loan is unsecured against the car. However, dealer finance (PCP or HP) offers the benefit of the vehicle acting as security, which can make approval easier, and PCP provides the flexibility of a balloon payment and hand-back option. Compare the total cost of each option before deciding.",
  },
];

export default function UsedFinancePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "Used Finance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Used Range Rover Finance
              <span className="block text-sand mt-2">Premium for Less</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              A used Range Rover offers exceptional value — the same luxury, capability and presence at a
              fraction of the new price. With competitive PCP and HP finance available on approved used vehicles,
              premium Range Rover ownership is more accessible than ever.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Used Finance */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            Why Finance a Used Range Rover?
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              The financial case for buying a used Range Rover is compelling. New Range Rovers command premium
              prices — from around {formatCurrency(36000)} for a Discovery Sport to well over {formatCurrency(200000)}
              for a fully specified flagship Range Rover. These are substantial sums that put new ownership beyond
              the reach of many buyers. However, the used market tells a different story. Range Rovers, like all
              vehicles, depreciate most heavily in their first one to three years. A one-year-old Range Rover Sport
              can typically be purchased for 15-25% less than its new price, while a three-year-old example may be
              available at 30-45% below the original list price. This represents a saving of tens of thousands of
              pounds on a vehicle that is, in practical terms, virtually identical to a new one.
            </p>
            <p>
              The second major advantage of used finance is the reduced rate of depreciation. A new Range Rover
              Sport at {formatCurrency(79500)} might lose {formatCurrency(15000)} to {formatCurrency(20000)} in its
              first year alone. A three-year-old example purchased at {formatCurrency(48000)} might depreciate by
              only {formatCurrency(5000)} to {formatCurrency(8000)} over the following year. This slower depreciation
              rate means the total cost of ownership — the gap between what you pay and what the vehicle is worth
              when you come to sell or trade it — is often lower on a used vehicle than a new one, despite the
              higher interest rates typically associated with used finance.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Land Rover Approved Used Programme
            </h3>
            <p>
              JLR operates a comprehensive Approved Used programme that offers the closest experience to buying new.
              Vehicles in the programme must meet strict criteria for age and mileage, and each one undergoes a
              rigorous multi-point inspection by trained Land Rover technicians. Approved used vehicles come with
              a manufacturer-backed warranty (typically 12 to 24 months, with the option to extend), breakdown
              cover, and a full vehicle history check covering outstanding finance, insurance write-offs, mileage
              discrepancies, and theft.
            </p>
            <p>
              Crucially, approved used vehicles often qualify for JLR&apos;s own finance offers, which can be more
              competitive than third-party used vehicle finance. Manufacturer-backed PCP and HP deals on approved
              used stock may offer lower APRs, deposit contributions, and more favourable terms than you would find
              through an independent broker or bank loan. The combination of manufacturer warranty, certified
              quality, and competitive finance makes the approved used programme an attractive proposition.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              What to Check Before Financing a Used Range Rover
            </h3>
            <p>
              Due diligence is essential when financing any used vehicle, and Range Rovers warrant particular
              attention given their complexity and the cost of repairs if issues arise. Start with the service
              history: a full, stamped service book (ideally with Land Rover main dealers or reputable independent
              specialists) is non-negotiable. Regular servicing is critical for Range Rovers, which have complex
              electronic systems, air suspension, and high-performance engines that demand proper maintenance.
            </p>
            <p>
              Run a comprehensive vehicle history check — services like HPI and Experian AutoCheck will confirm
              whether the vehicle has outstanding finance (which must be settled before a new finance agreement
              can be placed), has been declared an insurance write-off, has a mileage discrepancy, or has been
              reported stolen. These checks cost a small amount but can save you from a catastrophic mistake.
            </p>
            <p>
              Specification matters enormously with used Range Rovers. A well-specified example with desirable
              options — panoramic roof, premium audio, driver assistance pack, tow bar — will hold its value
              significantly better than a base-specification model. Conversely, unusual colour combinations or
              niche options may limit resale appeal. Think about the specification not just in terms of what you
              want, but what will be easy to sell or part-exchange when you come to the end of your finance term.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Finance Options for Used Range Rovers
            </h3>
            <p>
              The same three main finance products available on new vehicles — PCP, HP, and personal loan — are
              all available for used Range Rovers, each with their own characteristics in the used context.
            </p>
            <p>
              <strong>Used PCP:</strong> Available on vehicles typically up to 5-6 years old with fewer than
              60,000-70,000 miles. The GFV will be lower than on a new vehicle, reflecting the reduced residual
              value, but monthly payments remain competitive. Used PCP is particularly attractive on models with
              strong residual values like the Defender, where the GFV remains proportionally high even on used
              examples.
            </p>
            <p>
              <strong>Used HP:</strong> Available on a wider range of vehicles, including older models that may
              not qualify for PCP. HP has fewer restrictions on vehicle age and mileage because there is no
              residual value calculation involved — you are simply paying off the full balance. This makes HP
              the go-to choice for older or higher-mileage used Range Rovers.
            </p>
            <p>
              <strong>Personal loan:</strong> A bank or building society personal loan can offer competitive
              rates for borrowers with excellent credit. The advantage is immediate ownership — the vehicle
              is yours from day one, not security for the loan. However, personal loans may not be available for
              the full purchase price of a used Range Rover, and you lose the consumer protections that come with
              regulated vehicle finance agreements.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Understanding Higher APRs on Used Finance
            </h3>
            <p>
              It is important to understand why used vehicle finance typically carries higher APRs than new. The
              primary reason is risk: used vehicles have shorter expected lifespans, potentially higher maintenance
              costs, and less predictable residual values. Finance companies price this additional risk into the
              interest rate. However, the headline APR is only part of the picture. A used Range Rover Sport at
              {formatCurrency(48000)} financed at 8.9% APR will cost less per month — and less in total — than
              a new Range Rover Sport at {formatCurrency(79500)} financed at 5.9% APR. The lower purchase price
              more than compensates for the higher interest rate in most scenarios.
            </p>

            <div className="mt-8 p-6 bg-cream rounded-lg border border-sand/30">
              <p className="text-charcoal font-semibold mb-2">Calculate your used Range Rover payments</p>
              <p className="text-sm text-slate mb-4">
                Use our free finance calculator to estimate monthly payments on a used Range Rover at any price point.
                Simply adjust the vehicle price to the used value you are considering.
              </p>
              <Link
                href="/calculator"
                className="inline-block px-6 py-3 bg-racing-green text-white font-semibold rounded-lg hover:bg-racing-green-light transition-colors text-sm"
              >
                Open Finance Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Used Price Guide Table */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display text-charcoal">
              Typical Used Range Rover Prices by Age
            </h2>
            <p className="mt-4 text-lg text-slate max-w-2xl mx-auto">
              Guide prices for used Range Rover and Land Rover models at 1, 2 and 3 years old.
              Prices vary significantly based on specification, mileage and condition.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-100">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-charcoal">Model</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">1 Year Old</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">2 Years Old</th>
                  <th className="text-right px-6 py-4 text-sm font-semibold text-charcoal">3 Years Old</th>
                </tr>
              </thead>
              <tbody>
                {usedPriceData.map((row, i) => (
                  <tr key={row.model} className={i % 2 === 0 ? "bg-white" : "bg-cream/30"}>
                    <td className="px-6 py-4 text-sm font-semibold text-charcoal">{row.model}</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{row.oneYear}</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{row.twoYear}</td>
                    <td className="text-right px-6 py-4 text-sm text-slate">{row.threeYear}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate text-center">
            Prices are approximate guides based on typical market values and vary by specification, mileage, condition
            and market demand. Actual prices may differ significantly. Data reflects market conditions as of early 2026.
          </p>
        </div>
      </section>

      {/* Key Considerations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal text-center mb-12">
            Key Considerations for Used Range Rover Finance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Extended Warranty",
                description:
                  "If manufacturer warranty has expired, consider an extended warranty from a reputable provider. Range Rover repairs can be costly, and warranty cover provides peace of mind against unexpected bills.",
              },
              {
                title: "Service History",
                description:
                  "A full service history is essential. Missed services can void warranty claims and indicate potential neglect. Land Rover main dealer history is ideal, but reputable independent specialists are also acceptable.",
              },
              {
                title: "Vehicle Age Limits",
                description:
                  "Most lenders require the vehicle to be under 8-10 years old at the end of the finance term. A 5-year-old Range Rover on a 4-year HP agreement would be 9 years old at completion — check this falls within limits.",
              },
              {
                title: "Mileage Thresholds",
                description:
                  "Finance companies typically set maximum mileage limits of 80,000-100,000 miles. Higher-mileage vehicles may require specialist lenders or a personal loan. Used PCP may not be available above 60,000 miles.",
              },
              {
                title: "Specification Value",
                description:
                  "Well-specified used Range Rovers hold their value better. Premium colours, panoramic roof, upgraded audio, and tow bars all add desirability. Avoid vehicles with unusual specs that may limit future resale.",
              },
              {
                title: "GAP Insurance",
                description:
                  "GAP insurance covers the shortfall between an insurance payout and your finance settlement if the vehicle is written off or stolen. It is especially valuable in the early years when depreciation outpaces equity.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-xl border border-gray-100 hover:border-sand/50 hover:shadow-md transition-all duration-300">
                <h3 className="text-lg font-display text-charcoal mb-3">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Used Range Rover Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Finance a Used Range Rover?"
        description="Get a free, no-obligation quote for used Range Rover finance. Our specialists can source competitive PCP and HP deals on approved used and independently sourced vehicles."
        buttonText="Get Your Used Finance Quote"
        buttonHref="/apply"
      />
    </>
  );
}
