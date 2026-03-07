import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "GAP Insurance for Range Rovers: Is It Worth It? | Expert Guide",
  description:
    "Find out if GAP insurance is worth buying for your Range Rover. Covers types of GAP insurance, costs, where to buy, the claim process, and exclusions to watch for.",
};

const faqs = [
  {
    question: "How much does GAP insurance cost for a Range Rover?",
    answer:
      "GAP insurance for a Range Rover typically costs between £150 and £400 for a three-year policy when purchased from an independent provider. Dealers may charge significantly more — sometimes £500 to £800 or beyond — for equivalent cover. The exact cost depends on the vehicle's value, the type of GAP cover selected, and the length of the policy. Independent providers offer substantially better value in almost every case.",
  },
  {
    question: "Can I buy GAP insurance after I have collected the car?",
    answer:
      "Yes. Most independent GAP insurance providers allow you to purchase a policy within 180 days of collecting your vehicle (some allow up to 365 days). You do not have to buy it at the dealership on the day of purchase. In fact, taking time to compare independent providers will almost certainly save you money. The FCA requires dealers to inform you that you have the right to shop around.",
  },
  {
    question: "Does GAP insurance cover negative equity?",
    answer:
      "Standard GAP insurance does not cover negative equity from a previous finance agreement that was rolled into your current deal. It covers the gap between the vehicle's market value and the original purchase price (or invoice price). If you rolled £5,000 of negative equity into your current finance, that amount would not be covered. Some specialist policies may offer negative equity cover as an add-on, but it is not standard.",
  },
  {
    question: "What is the difference between return to invoice and return to value GAP insurance?",
    answer:
      "Return to invoice (RTI) pays the difference between your insurer's settlement (market value) and the original invoice price you paid for the vehicle. Return to value (RTV) pays the difference between the insurer's settlement and the current outstanding finance balance. For Range Rover buyers who put down a large deposit, RTI may offer better cover; for those with a small deposit, RTV may be more appropriate as the finance balance could exceed the original price once interest is factored in.",
  },
  {
    question: "Is GAP insurance regulated by the FCA?",
    answer:
      "Yes. GAP insurance is regulated by the Financial Conduct Authority (FCA). Following a review in 2015, the FCA introduced rules requiring dealers to provide a clear explanation of what GAP covers, to inform customers they can buy elsewhere, and to allow a cooling-off period. Any provider selling GAP insurance must be FCA-authorised. Always check the FCA register if you are unsure about a provider.",
  },
  {
    question: "Do I need GAP insurance if I have a large deposit on my Range Rover?",
    answer:
      "A large deposit does reduce the risk of negative equity and therefore reduces the likelihood of needing a GAP payout. However, GAP insurance is not just about covering finance shortfalls — return to invoice GAP protects your entire purchase price. Even with a 30% deposit, if your Range Rover is written off after two years, your standard insurer might pay £55,000 for a vehicle you paid £85,000 for. RTI GAP would cover the £30,000 difference.",
  },
];

export default function GAPInsurance() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "GAP Insurance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              GAP Insurance for Range Rovers: Is It Worth It?
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Range Rovers are among the highest-value vehicles on UK roads, which makes them among the most exposed to
              the financial gap between what your insurer pays out and what you actually paid or owe. This guide explains
              what GAP insurance is, how it works, and whether it makes sense for your Range Rover.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What is GAP Insurance */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">What is GAP Insurance?</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  GAP stands for Guaranteed Asset Protection. It is a supplementary insurance product that covers the
                  financial shortfall between what your standard motor insurer pays out if your vehicle is written off or
                  stolen and either the original price you paid or the amount you still owe on finance.
                </p>
                <p>
                  When a vehicle is declared a total loss, your motor insurer pays the current market value of the
                  vehicle — not what you paid for it. Due to depreciation, this market value is almost always less than
                  the purchase price, and it may also be less than the outstanding finance balance. GAP insurance
                  bridges this gap.
                </p>
                <p>
                  For Range Rover owners, the numbers involved can be substantial. A new Range Rover purchased for
                  £110,000 could depreciate to a market value of £75,000 within two years. If the vehicle is written off
                  at that point, the standard motor insurer pays £75,000. Without GAP insurance, you would either be
                  £35,000 out of pocket (if you paid cash) or still owe money to the finance company (if the outstanding
                  balance exceeds £75,000).
                </p>
              </div>
            </div>

            {/* Types of GAP Insurance */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Types of GAP Insurance</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  There are three main types of GAP insurance, each covering a different shortfall. Understanding which
                  type suits your situation is important.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Return to Invoice (RTI)</h3>
                <p>
                  The most comprehensive and popular form. RTI GAP pays the difference between your insurer&apos;s
                  settlement and the original invoice price you paid for the vehicle. This is particularly valuable for
                  Range Rover buyers because the gap between current value and purchase price can be tens of thousands
                  of pounds.
                </p>
                <p>
                  Example: You paid £95,000 for a Range Rover Sport. Two years later, it is stolen and your insurer
                  pays £65,000 (the current market value). RTI GAP pays the remaining £30,000, returning you to the
                  position you were in on the day you bought the car.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Return to Value (RTV) / Finance GAP</h3>
                <p>
                  RTV GAP (sometimes called Finance GAP) pays the difference between your insurer&apos;s settlement and the
                  outstanding finance balance. This protects you from owing money to the finance company if the car is
                  written off while you still owe more than it is worth.
                </p>
                <p>
                  This type is most relevant for buyers with a small deposit or a long finance term, where the
                  outstanding balance can exceed the vehicle&apos;s market value for an extended period. On a{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    PCP agreement
                  </Link>, the outstanding balance includes the balloon payment, so the exposure can be significant.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Vehicle Replacement Insurance (VRI)</h3>
                <p>
                  VRI GAP pays the difference between your insurer&apos;s settlement and the cost of replacing the vehicle
                  with a brand-new equivalent at today&apos;s prices. This is the most generous form of GAP insurance
                  because vehicle prices tend to increase over time, meaning the replacement cost may exceed your
                  original purchase price.
                </p>
                <p>
                  VRI is more expensive than RTI or RTV, but for Range Rover owners who want the security of knowing
                  they can step straight into an equivalent new vehicle regardless of depreciation, it offers the
                  strongest protection.
                </p>
              </div>
            </div>

            {/* Why Important for Range Rovers */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Why GAP Insurance is Particularly Important for Range Rovers
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The case for GAP insurance strengthens as the vehicle&apos;s value increases. A £15,000 hatchback might
                  depreciate by £4,000 in its first year — a manageable loss. A £100,000 Range Rover could depreciate by
                  £20,000 to £30,000 in the same period. The financial exposure is on an entirely different scale.
                </p>
                <p>
                  Range Rovers are also among the most targeted vehicles for theft in the UK. While Land Rover has
                  significantly improved security in recent model years, the theft risk remains a relevant factor when
                  considering GAP cover. If your vehicle is stolen and not recovered, your insurer pays the market
                  value — which may be substantially less than what you paid.
                </p>
                <p>
                  The high value also means that the gap between finance balance and market value can persist for longer.
                  On a PCP agreement with a 10% deposit, the outstanding balance (including the balloon) on a £100,000
                  Range Rover could exceed the market value for 18 to 24 months. During that window, a total loss event
                  without GAP insurance would leave you significantly out of pocket.
                </p>
              </div>
            </div>

            {/* Cost vs Benefit */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Cost vs Benefit Analysis</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  GAP insurance for a Range Rover typically costs between £150 and £400 for a three-year policy from an
                  independent provider. Dealers often charge significantly more — sometimes £500 to £800 or beyond —
                  for what may be identical or even inferior cover.
                </p>
                <p>
                  Consider the potential payout against the premium. On a Range Rover purchased for £90,000, the
                  depreciation gap after two years could easily be £25,000 to £30,000. A £250 GAP insurance premium to
                  protect against a potential £30,000 loss represents extraordinary value for money. The cost-to-coverage
                  ratio on premium vehicles like Range Rovers makes GAP insurance one of the most compelling value
                  propositions in vehicle-related insurance.
                </p>
                <p>
                  The question is not really whether GAP insurance is worth it on a Range Rover — it almost certainly
                  is. The question is which type to buy and where to buy it.
                </p>
              </div>
            </div>

            {/* When to Buy */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">When to Buy GAP Insurance</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The ideal time to arrange GAP insurance is at or shortly after the point of purchase, while the
                  vehicle is still new (or nearly new). Most independent providers allow you to buy GAP within 180 days
                  of taking delivery, and some extend this to 365 days.
                </p>
                <p>
                  Do not feel pressured into buying GAP at the dealership on the day you collect your car. The FCA
                  requires dealers to inform you that you can buy GAP insurance elsewhere and that you do not have to
                  buy it on the day. Take the time to compare quotes from independent specialists — the savings can be
                  significant.
                </p>
                <p>
                  GAP insurance typically runs for three to five years. If your PCP agreement is 48 months, a
                  four-year GAP policy aligned with your finance term provides seamless coverage. Some policies can be
                  set to match your finance term exactly.
                </p>
              </div>
            </div>

            {/* Where to Buy */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Where to Buy: Dealer vs Independent
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The dealer will almost certainly offer you GAP insurance when you buy your Range Rover. It is a
                  significant profit centre for dealerships, and the convenience factor means many buyers accept the
                  dealer&apos;s price without comparing alternatives.
                </p>
                <p>
                  Independent GAP insurance providers — available online — typically offer the same or better cover for
                  30% to 60% less than dealer prices. The cover is provided by the same underwriters in many cases; the
                  only difference is the distribution cost. A dealer might charge £750 for a policy that an independent
                  provider offers for £250.
                </p>
                <p>
                  Before buying from a dealer, ask for the policy documents, the name of the underwriter, and the
                  maximum payout limit. Then compare these details with quotes from independent providers. The FCA
                  mandates a 14-day cooling-off period on insurance products, so even if you buy at the dealership, you
                  can cancel within 14 days for a full refund if you find a better deal.
                </p>
              </div>
            </div>

            {/* Claim Process */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How the Claim Process Works</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  If your Range Rover is written off or stolen and not recovered, the GAP insurance claim process
                  typically works as follows:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    Your standard motor insurer assesses the claim and makes a settlement offer based on the
                    vehicle&apos;s current market value.
                  </li>
                  <li>
                    You accept the motor insurer&apos;s settlement. This payment goes to the finance company if you have
                    outstanding finance, or to you if you own the vehicle outright.
                  </li>
                  <li>
                    You then submit a GAP insurance claim, providing the motor insurer&apos;s settlement figure, the
                    original purchase invoice, and (if applicable) the finance settlement figure.
                  </li>
                  <li>
                    The GAP insurer calculates the shortfall and pays the difference — either to you or directly to the
                    finance company, depending on the policy and claim type.
                  </li>
                </ol>
                <p>
                  GAP claims typically take two to four weeks to process once all documentation is provided. Having your
                  original purchase invoice and finance agreement readily accessible will speed up the process.
                </p>
              </div>
            </div>

            {/* Exclusions */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Exclusions to Watch For</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Like all insurance products, GAP policies have exclusions. Before purchasing, check the policy
                  wording carefully for these common exclusions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-charcoal">Maximum payout cap:</strong> Many policies have a maximum payout
                    limit, often £25,000 or £50,000. For high-value Range Rovers, ensure the cap is sufficient to cover
                    the potential gap. A £25,000 cap may not be enough on a £120,000 vehicle.
                  </li>
                  <li>
                    <strong className="text-charcoal">Negative equity from previous finance:</strong> If you rolled
                    negative equity from a previous vehicle into your current finance, most GAP policies will not cover
                    that rolled amount.
                  </li>
                  <li>
                    <strong className="text-charcoal">Modifications and accessories:</strong> Aftermarket
                    modifications may not be covered. If you have added significant accessories, check whether the
                    policy covers the vehicle as modified or only in standard specification.
                  </li>
                  <li>
                    <strong className="text-charcoal">Valid motor insurance:</strong> Your GAP claim will only be
                    honoured if you have a valid, comprehensive motor insurance policy in place at the time of the
                    incident. Third-party-only cover is typically insufficient.
                  </li>
                  <li>
                    <strong className="text-charcoal">Vehicle age or mileage limits:</strong> Some policies exclude
                    vehicles over a certain age or mileage at the point of purchase. This is mainly relevant for used
                    vehicles.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Protect Your Range Rover Investment"
        description="Our finance specialists can advise on the right level of protection for your vehicle. Get in touch for a no-obligation discussion."
      />
    </>
  );
}
