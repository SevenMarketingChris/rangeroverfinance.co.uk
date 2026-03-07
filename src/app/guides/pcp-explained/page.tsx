import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "PCP Finance Explained: The Complete Guide for Range Rover Buyers",
  description:
    "Everything you need to know about PCP finance for Range Rovers. How GFV is calculated, mileage limits, voluntary termination rights, end-of-term options, and more.",
};

const faqs = [
  {
    question: "What does PCP stand for?",
    answer:
      "PCP stands for Personal Contract Purchase. It is a form of car finance where you pay a deposit and fixed monthly payments over an agreed term, with a large optional final payment (the balloon or GFV) deferred to the end. It is the most popular way to finance a new car in the UK, accounting for around 80% of new car finance agreements.",
  },
  {
    question: "How is the Guaranteed Future Value calculated?",
    answer:
      "The GFV is set by the lender at the start of the agreement based on predicted future values from industry data providers such as CAP HPI and Glass's Guide. They consider the vehicle's make, model, age at end of term, agreed mileage, and current market conditions. For Range Rovers, the GFV is typically between 35% and 50% of the original price on a 36-month agreement, reflecting their relatively strong residual values.",
  },
  {
    question: "Can I negotiate the GFV on a PCP deal?",
    answer:
      "The GFV itself is generally non-negotiable because it is set by the lender's residual value team, not the dealer. However, you can negotiate other elements of the PCP deal, including the vehicle price, any dealer contribution to the deposit, and sometimes the interest rate. A lower vehicle price indirectly benefits you because it means you are financing less.",
  },
  {
    question: "What happens if my car is worth less than the GFV at the end?",
    answer:
      "This is where the 'guaranteed' part of Guaranteed Future Value protects you. If the vehicle's market value has dropped below the GFV, you can simply hand the car back with nothing more to pay (subject to mileage and condition requirements). The lender bears the risk of the car being worth less than predicted. You are never obliged to pay the balloon payment.",
  },
  {
    question: "Can I use PCP on a used Range Rover?",
    answer:
      "Yes, PCP is available on used vehicles, including approved pre-owned Range Rovers. The structure works the same way — deposit, monthly payments, and a balloon at the end. However, interest rates on used PCP tend to be slightly higher than on new vehicles, and the GFV will be lower because the car has already undergone its steepest depreciation period.",
  },
  {
    question: "What is the 50% rule for voluntary termination?",
    answer:
      "Under Section 99 of the Consumer Credit Act 1974, you have the right to voluntarily terminate a PCP agreement once you have paid 50% of the total amount payable. The total amount payable includes the deposit, all monthly payments, interest, fees, and the balloon payment. On a PCP, because the balloon is included in this calculation, you often need to make additional payments beyond 50% of your monthly instalments to reach the threshold.",
  },
  {
    question: "Do I have to use the same finance company as the dealer?",
    answer:
      "No. While dealers will typically offer finance through their manufacturer's captive finance company (such as Land Rover Financial Services), you are free to arrange finance independently through a bank, building society, or specialist broker. Comparing multiple offers is always advisable — our finance specialists can search the whole market on your behalf.",
  },
  {
    question: "What excess mileage charges should I expect on a Range Rover PCP?",
    answer:
      "Excess mileage charges on Range Rover PCP agreements typically range from 10p to 25p per mile, depending on the model and lender. On a flagship Range Rover, charges tend to be at the higher end. If you exceed your limit by 10,000 miles at 20p per mile, that is £2,000 in additional charges. It is crucial to set a realistic mileage limit at the outset — overestimating is safer than underestimating.",
  },
];

export default function PCPExplained() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "PCP Explained" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              PCP Finance Explained: The Complete Guide
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Personal Contract Purchase is the most popular way to finance a new Range Rover. This comprehensive guide
              explains exactly how PCP works, what determines your monthly payment, your rights throughout the agreement,
              and what happens at the end.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Structure of a PCP Deal */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                The Structure of a PCP Deal
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  A PCP agreement has three financial components: the deposit you pay upfront, the monthly payments you
                  make over the term, and the optional final payment (known as the balloon or Guaranteed Future Value)
                  that sits at the end. Understanding how these three elements interact is key to evaluating any PCP
                  offer.
                </p>
                <p>
                  <strong className="text-charcoal">The deposit</strong> is the initial payment you make when the agreement
                  begins. Most lenders require a minimum of around 10% of the vehicle&apos;s on-the-road price, though
                  some promotional deals may offer lower minimums. A larger deposit reduces the amount you need to
                  finance, which lowers your monthly payments and the total interest you pay. On a Range Rover priced at
                  £100,000, a 10% deposit is £10,000 — a figure that many buyers fund through part exchange of their
                  current vehicle. Our{" "}
                  <Link href="/guides/deposit-guide" className="text-racing-green underline hover:text-racing-green-light">
                    deposit guide
                  </Link>{" "}
                  covers this in more detail.
                </p>
                <p>
                  <strong className="text-charcoal">Monthly payments</strong> cover the predicted depreciation of the
                  vehicle over the term, plus interest on the amount financed. Because the balloon payment is deferred to
                  the end, you are not paying off the full vehicle cost each month — only the difference between the
                  purchase price (minus deposit) and the predicted future value. This is why PCP monthly payments are
                  significantly lower than{" "}
                  <Link href="/guides/pcp-vs-hp" className="text-racing-green underline hover:text-racing-green-light">
                    Hire Purchase
                  </Link>{" "}
                  payments.
                </p>
                <p>
                  <strong className="text-charcoal">The balloon payment (GFV)</strong> is the amount the lender
                  predicts the vehicle will be worth at the end of the agreement. It is &quot;guaranteed&quot; in the sense
                  that if the car is worth less than this amount, you can hand it back without penalty (subject to
                  mileage and condition). The GFV is not a payment you are obliged to make — it is an option. Read our{" "}
                  <Link href="/guides/balloon-payment-explained" className="text-racing-green underline hover:text-racing-green-light">
                    balloon payment guide
                  </Link>{" "}
                  for a deeper understanding.
                </p>
              </div>
            </div>

            {/* How GFV is Calculated */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How the Guaranteed Future Value is Calculated
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The GFV is not an arbitrary figure. Lenders use sophisticated residual value forecasting data from
                  organisations such as CAP HPI and Glass&apos;s Guide, combined with their own historical data on the
                  specific make and model. Several factors influence the GFV:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-charcoal">Make, model and specification:</strong> Range Rovers generally hold
                    their value well, which means higher GFVs and lower monthly payments compared to vehicles that
                    depreciate faster.
                  </li>
                  <li>
                    <strong className="text-charcoal">Agreement length:</strong> A longer term means more depreciation, so
                    the GFV will be lower on a 48-month deal than a 24-month deal.
                  </li>
                  <li>
                    <strong className="text-charcoal">Annual mileage:</strong> Higher mileage agreements result in a lower
                    GFV because a higher-mileage vehicle is worth less at the end.
                  </li>
                  <li>
                    <strong className="text-charcoal">Market conditions:</strong> Supply and demand in the used car market
                    influence residual value predictions. During periods of strong used car demand, GFVs tend to be higher.
                  </li>
                </ul>
                <p>
                  Lenders deliberately set GFVs conservatively — slightly below what they genuinely expect the vehicle
                  to be worth. This protects them if the market dips, but it also benefits you: when the car is worth
                  more than the GFV at the end of your agreement, the difference is equity that you can use towards your
                  next vehicle.
                </p>
              </div>
            </div>

            {/* What Affects Monthly Payment */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                What Affects Your Monthly Payment
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Your PCP monthly payment is determined by several variables, all of which you can explore using our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-charcoal">Vehicle price:</strong> The higher the price, the more you need to
                    finance, and the higher your monthly payment. Negotiating a better price on the vehicle itself is one
                    of the most effective ways to reduce your monthly cost.
                  </li>
                  <li>
                    <strong className="text-charcoal">Deposit size:</strong> A larger deposit reduces the financed amount
                    directly. Every additional £1,000 in deposit typically reduces monthly payments by £25 to £35
                    depending on the term and rate.
                  </li>
                  <li>
                    <strong className="text-charcoal">Interest rate (APR):</strong> The APR determines how much the
                    credit costs you. Even small differences in APR have a significant impact on a high-value vehicle like
                    a Range Rover. A 1% difference in APR on a £70,000 financed amount over 48 months can change the
                    total interest by over £1,500.
                  </li>
                  <li>
                    <strong className="text-charcoal">Term length:</strong> Longer terms mean lower monthly payments but
                    more interest paid overall. A 48-month term will have lower monthly costs than a 24-month term, but
                    the total cost of finance will be higher.
                  </li>
                  <li>
                    <strong className="text-charcoal">GFV / balloon payment:</strong> A higher GFV means more of the
                    vehicle&apos;s cost is deferred, resulting in lower monthly payments. However, a higher balloon also means
                    a larger lump sum if you want to buy the vehicle at the end.
                  </li>
                </ul>
              </div>
            </div>

            {/* Mileage Limits */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Mileage Limits and Excess Charges
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Every PCP agreement includes an annual mileage allowance, typically ranging from 6,000 to 20,000 miles
                  per year. The most common allowances are 8,000, 10,000, and 15,000 miles per year. When you set up
                  your agreement, you choose a mileage limit that reflects your expected driving habits.
                </p>
                <p>
                  If you exceed the agreed mileage by the end of the term and choose to hand the vehicle back, you will
                  be charged for every excess mile. These charges vary by lender and vehicle but typically range from 5p
                  to 25p per mile. On a premium vehicle like a Range Rover, charges tend to be towards the upper end of
                  this range.
                </p>
                <p>
                  Choosing a higher mileage allowance does increase your monthly payment slightly, because the higher
                  mileage reduces the predicted residual value (and therefore the GFV). However, the monthly increase is
                  almost always cheaper than paying excess mileage charges after the fact. If in doubt, err on the side
                  of a higher allowance.
                </p>
                <p>
                  It is worth noting that mileage limits only matter if you hand the vehicle back or trade it in through
                  the finance company. If you pay the balloon payment and take ownership, the mileage becomes irrelevant
                  — you own the car and its mileage is your concern.
                </p>
              </div>
            </div>

            {/* Condition Requirements */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Condition Requirements: BVRLA Fair Wear and Tear
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  When you return a vehicle at the end of a PCP agreement, it will be inspected against the BVRLA
                  (British Vehicle Rental and Leasing Association) fair wear and tear standards. These guidelines define
                  what constitutes acceptable use versus damage that you would be charged for.
                </p>
                <p>
                  Fair wear and tear includes minor scratches and stone chips that are consistent with the vehicle&apos;s
                  age and mileage, light scuffing on wheels, and normal interior wear. It does not include dents, deep
                  scratches, burns, tears in upholstery, cracked or chipped windscreens, or damaged alloy wheels beyond
                  light kerbing.
                </p>
                <p>
                  For Range Rover owners, particular attention should be paid to alloy wheels (large-diameter wheels are
                  expensive to refurbish), leather interiors (which can show wear if not maintained), and bodywork (the
                  large panels are costly to repair or repaint). Keeping up with regular maintenance and addressing minor
                  issues before the end-of-term inspection can save you hundreds or even thousands in charges.
                </p>
              </div>
            </div>

            {/* Three Options at End */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Your Three Options at the End of PCP
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  When your PCP agreement reaches its end date, you have three distinct choices. There is no obligation
                  to decide in advance — you make your choice when the time comes, based on your circumstances and the
                  vehicle&apos;s market value at that point.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 1: Pay the Balloon and Own the Vehicle</h3>
                <p>
                  If you love the car and want to keep it, you can pay the GFV (balloon payment) and take full
                  ownership. You can pay this from savings, or you could refinance the balloon with a personal loan or
                  new HP agreement. Once paid, the vehicle is yours — no mileage or condition assessments, and no
                  further monthly payments.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 2: Hand the Vehicle Back</h3>
                <p>
                  If you no longer want the car, you can return it to the finance company. Provided the vehicle is
                  within the agreed mileage limit and meets the BVRLA fair wear and tear standards, there is nothing
                  more to pay. This option gives you a clean break and the freedom to walk away, buy a different car, or
                  take a break from vehicle ownership entirely.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 3: Use Equity Towards a New Vehicle</h3>
                <p>
                  If the vehicle is worth more than the GFV — which happens frequently with Range Rovers — the
                  difference is equity that belongs to you. For example, if the GFV is £35,000 but the car is worth
                  £40,000, you have £5,000 of equity. Most buyers use this equity as a deposit (or part of the deposit)
                  on their next PCP agreement, creating a rolling cycle of vehicle upgrades. This is the option most
                  Range Rover PCP customers choose.
                </p>
              </div>
            </div>

            {/* Voluntary Termination */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Voluntary Termination: The 50% Rule
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Under Section 99 of the Consumer Credit Act 1974, you have a statutory right to voluntarily terminate
                  your PCP agreement once you have paid 50% of the &quot;total amount payable.&quot; This is an important
                  consumer protection that many people are unaware of.
                </p>
                <p>
                  The total amount payable includes your deposit, all monthly payments, all interest and fees, and the
                  balloon payment. On a PCP deal where the total amount payable is £90,000, you would need to have paid
                  £45,000 before you can exercise voluntary termination. Because the balloon is included in the
                  calculation but is paid last, reaching the 50% threshold on PCP often requires additional payments
                  beyond your regular monthly instalments.
                </p>
                <p>
                  If you voluntarily terminate, you return the vehicle and owe nothing further — provided the car is in
                  reasonable condition. The finance company cannot charge you for excess mileage on voluntary termination
                  (though they can charge for damage beyond fair wear and tear). This is different from{" "}
                  <Link href="/guides/early-settlement" className="text-racing-green underline hover:text-racing-green-light">
                    early settlement
                  </Link>, where you pay off the outstanding balance in full. Voluntary termination is a right, not a
                  privilege, and the finance company cannot refuse it once the conditions are met.
                </p>
              </div>
            </div>

            {/* Negative Equity Risk */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Understanding Negative Equity Risk on PCP
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Negative equity occurs when the outstanding finance on your vehicle exceeds its market value. On PCP,
                  this risk is elevated in the early stages of the agreement because monthly payments are lower and
                  therefore equity builds more slowly. If you need to end the agreement early — due to a change in
                  circumstances, for example — you may find that the settlement figure is higher than the car is worth.
                </p>
                <p>
                  Range Rovers mitigate this risk to some extent because of their relatively strong residual values, but
                  no vehicle is immune from market fluctuations. A larger deposit significantly reduces the risk of
                  negative equity because it creates an equity cushion from day one. Our{" "}
                  <Link href="/guides/negative-equity" className="text-racing-green underline hover:text-racing-green-light">
                    negative equity guide
                  </Link>{" "}
                  explains this topic in full.
                </p>
              </div>
            </div>

            {/* PCP on Used Cars */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">PCP on Used Range Rovers</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  PCP is not limited to new vehicles. Many franchised dealers and independent finance providers offer PCP
                  on approved pre-owned and used Range Rovers. The mechanics work identically — deposit, monthly
                  payments, and a balloon at the end — but there are some differences to be aware of.
                </p>
                <p>
                  Interest rates on used PCP tend to be slightly higher than on new vehicles, reflecting the increased
                  risk to the lender. The GFV will be lower in absolute terms because the vehicle has already undergone
                  its steepest depreciation. However, the gap between the purchase price and the GFV may be smaller on a
                  used vehicle, which can keep monthly payments very competitive.
                </p>
                <p>
                  Used PCP can be an excellent way to access a higher-specification Range Rover at a lower monthly cost.
                  A two-year-old Range Rover Sport that originally cost £85,000 might be available for £55,000 on a used
                  PCP deal, with monthly payments substantially lower than a new equivalent. Use our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    calculator
                  </Link>{" "}
                  to model the numbers for any price point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Explore PCP for Your Range Rover?"
        description="Our specialists compare PCP deals from across the market to find the best rate and terms for your circumstances."
      />
    </>
  );
}
