import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Negative Equity on Car Finance: How to Handle It | Range Rover Finance",
  description:
    "Understand what negative equity means on car finance, how to check if you are in negative equity, your options for dealing with it, and how to avoid it on your next Range Rover.",
};

const faqs = [
  {
    question: "How do I check if I am in negative equity?",
    answer:
      "Request a settlement figure from your finance company — they must provide this within 12 working days. Then get your vehicle valued using online tools such as Auto Trader, Motorway, or WeBuyAnyCar, or request a valuation from a local dealer. If the settlement figure exceeds the vehicle's market value, you are in negative equity. The difference between the two figures is the amount of negative equity.",
  },
  {
    question: "Can I still change my car if I am in negative equity?",
    answer:
      "Yes, but you need to cover the shortfall somehow. The most common approach is rolling the negative equity into a new finance agreement, but this is risky because it increases the amount you owe on the new vehicle. Alternatively, you can pay the shortfall from savings, make extra payments to reduce the balance before changing, or wait until the equity position improves naturally.",
  },
  {
    question: "Is negative equity more common with PCP or HP?",
    answer:
      "Negative equity is more common and tends to persist longer with PCP because the lower monthly payments mean you build equity more slowly. With HP, the higher monthly payments reduce the outstanding balance faster, so the period of negative equity — if it occurs at all — is typically shorter. A small or zero deposit increases the risk on both finance types.",
  },
  {
    question: "Does negative equity affect my credit score?",
    answer:
      "Negative equity itself does not directly affect your credit score. Your credit file shows the outstanding balance and your payment history, but it does not reflect the vehicle's market value. However, if negative equity leads to financial difficulty — such as struggling to make payments on a new deal with rolled negative equity — that could indirectly impact your credit through missed payments or higher debt levels.",
  },
  {
    question: "Can GAP insurance help with negative equity?",
    answer:
      "GAP insurance can help if your vehicle is written off or stolen while you are in negative equity. Finance GAP (return to value) specifically covers the difference between the insurer's payout and the outstanding finance balance, ensuring you do not owe money to the finance company after a total loss. However, GAP insurance does not help if you simply want to change vehicles while in negative equity — it only applies in the event of a total loss.",
  },
  {
    question: "How long does negative equity typically last on a Range Rover?",
    answer:
      "With a 10% deposit on PCP, negative equity on a Range Rover typically lasts for 12 to 24 months, depending on the specific model and market conditions. Range Rovers generally hold their value well, which helps. With a 20% or larger deposit, most buyers avoid negative equity entirely. On HP with a 10% deposit, the period is usually shorter — around 6 to 12 months — because the higher payments reduce the balance faster.",
  },
];

export default function NegativeEquity() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Negative Equity" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Negative Equity on Car Finance: How to Handle It
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Negative equity is one of the most common concerns among car finance customers. It can affect your ability
              to change vehicles, leave you exposed if your car is written off, and limit your options if your
              circumstances change. This guide explains what it is, how to check your position, and what you can do
              about it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* What is Negative Equity */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">What is Negative Equity?</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Negative equity occurs when the amount you owe on your car finance exceeds the vehicle&apos;s current
                  market value. In other words, if you were to settle your finance today, the settlement figure would be
                  higher than what the car could be sold for. The difference between these two figures is the amount of
                  negative equity.
                </p>
                <p>
                  For example, suppose you have a Range Rover Velar on PCP with a settlement figure of £42,000, but the
                  vehicle&apos;s current market value is only £37,000. You are in negative equity to the tune of £5,000.
                  If you wanted to end the agreement early and clear the finance, you would need to find that £5,000
                  from somewhere, because selling the car would not cover the full settlement.
                </p>
                <p>
                  Negative equity is not a reflection of poor financial decisions — it is a natural consequence of how
                  car finance and depreciation interact. All new vehicles depreciate, and in the early months of a
                  finance agreement, the outstanding balance can outpace the rate of depreciation, creating a temporary
                  negative equity window.
                </p>
              </div>
            </div>

            {/* How it Happens */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How Negative Equity Happens</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Negative equity is driven by the mismatch between two curves: the rate at which you pay down your
                  finance balance, and the rate at which the vehicle depreciates.
                </p>
                <p>
                  <strong className="text-charcoal">Depreciation front-loading:</strong> New vehicles depreciate most
                  steeply in the first 12 to 24 months. A new Range Rover Sport priced at £85,000 might be worth
                  £65,000 after just one year — a depreciation of £20,000. If your monthly payments have only reduced
                  the finance balance by £12,000 in that period, you are £8,000 in negative equity.
                </p>
                <p>
                  <strong className="text-charcoal">Low deposits:</strong> A small or zero deposit means you start with
                  no equity cushion. On a zero-deposit deal, you are in negative equity from day one, because the car
                  depreciates the moment it leaves the showroom but you have not yet made any payments.
                </p>
                <p>
                  <strong className="text-charcoal">PCP structure:</strong> On{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    PCP agreements
                  </Link>, the lower monthly payments mean the balance reduces more slowly than on HP. The balloon
                  payment sitting at the end keeps the outstanding balance high throughout the agreement. This makes PCP
                  buyers more susceptible to negative equity than HP buyers.
                </p>
                <p>
                  <strong className="text-charcoal">Market shifts:</strong> If the used car market weakens
                  unexpectedly — due to economic conditions, changes in government policy (such as scrappage schemes
                  favouring electric vehicles), or an influx of similar vehicles from fleet de-fleets — your vehicle may
                  depreciate faster than predicted, pushing you into negative equity even if the finance structure was
                  sound.
                </p>
              </div>
            </div>

            {/* How to Check */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How to Check if You Are in Negative Equity
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Checking your equity position is straightforward and involves two steps:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-charcoal">Get your settlement figure:</strong> Contact your finance company
                    and request a settlement figure. Under the Consumer Credit Act, they must provide this within 12
                    working days. The settlement figure is the amount you would need to pay today to clear the finance
                    completely. It includes the remaining payments, the balloon (on PCP), and any applicable interest
                    rebate for early settlement.
                  </li>
                  <li>
                    <strong className="text-charcoal">Get your vehicle valued:</strong> Obtain a realistic valuation of
                    your vehicle using multiple sources. Online valuation tools from Auto Trader, Motorway, and
                    WeBuyAnyCar provide instant estimates. For a more accurate figure, request a formal appraisal from a
                    franchised dealer or specialist. Use the lower end of your valuations to be conservative.
                  </li>
                </ol>
                <p>
                  If your settlement figure is higher than the valuation, you are in negative equity. If the valuation
                  exceeds the settlement, you have positive equity — the vehicle is worth more than you owe.
                </p>
              </div>
            </div>

            {/* Options for Dealing With It */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Options for Dealing With Negative Equity
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 1: Wait It Out</h3>
                <p>
                  In many cases, the simplest solution is to continue making your payments and wait for the equity
                  position to improve. As you pay down the balance and the rate of depreciation slows (vehicles
                  depreciate less in years two and three than in year one), the gap between your settlement figure and
                  the car&apos;s value will narrow. For most Range Rover buyers with a reasonable deposit, the equity
                  position crosses into positive territory within 18 to 24 months.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 2: Make Overpayments</h3>
                <p>
                  If your finance agreement permits overpayments (check the terms and conditions, or ask your lender),
                  making additional payments reduces the outstanding balance faster. This accelerates the point at which
                  you cross from negative to positive equity. Even modest overpayments — an extra £100 or £200 per
                  month — can make a meaningful difference over six to twelve months.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Option 3: Settle and Save</h3>
                <p>
                  If you want to change vehicles and you have savings available, you can pay the negative equity
                  shortfall from savings. Request your settlement figure, sell or trade in the vehicle, and pay the
                  difference. This is a clean solution that avoids rolling debt into a new agreement. For a full
                  explanation of the settlement process, see our{" "}
                  <Link href="/guides/early-settlement" className="text-racing-green underline hover:text-racing-green-light">
                    early settlement guide
                  </Link>.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">
                  Option 4: Roll Into a New Deal (With Caution)
                </h3>
                <p>
                  The most common — but also the most risky — approach is rolling the negative equity into a new finance
                  agreement. The dealer settles your existing finance, and the shortfall is added to the amount financed
                  on the new vehicle. For example, if you are £4,000 in negative equity and you buy a new Range Rover
                  for £90,000, you would finance £94,000 (plus interest on the higher amount).
                </p>
                <p>
                  <strong className="text-charcoal">This approach carries significant risks.</strong> You start the new
                  agreement already £4,000 in negative equity on top of normal depreciation. If you need to change
                  vehicles again during the new agreement, the negative equity problem could be even worse. Rolling
                  negative equity compounds over time — it is a debt spiral that becomes increasingly difficult to
                  escape. If you are considering this option, proceed with extreme caution and ensure the monthly
                  payments are genuinely affordable.
                </p>
              </div>
            </div>

            {/* How to Avoid It */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How to Avoid Negative Equity on Your Next Range Rover
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Prevention is far better than cure. Several strategies can reduce or eliminate the risk of negative
                  equity:
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Put Down a Larger Deposit</h3>
                <p>
                  The most effective way to avoid negative equity is to make a larger deposit. A 20% deposit on a
                  £90,000 Range Rover (£18,000) creates an immediate equity cushion of £18,000 against depreciation. It
                  is extremely unlikely that the vehicle would depreciate faster than you pay down the balance with a
                  deposit of this size. Our{" "}
                  <Link href="/guides/deposit-guide" className="text-racing-green underline hover:text-racing-green-light">
                    deposit guide
                  </Link>{" "}
                  explores how deposit size affects your overall finance position.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Choose a Shorter Term</h3>
                <p>
                  Shorter finance terms mean higher monthly payments, which reduces the balance faster. On a 24-month HP
                  agreement, you are paying down the balance twice as fast as on a 48-month agreement. The negative
                  equity window, if it exists at all, is much shorter.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Keep Mileage Low</h3>
                <p>
                  Higher mileage accelerates depreciation. If you keep your annual mileage moderate — say 8,000 to
                  10,000 miles per year — the vehicle will retain its value better than a high-mileage equivalent. This
                  helps your equity position and also gives you a better chance of being in positive equity if you want
                  to change vehicles early.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Consider HP Over PCP</h3>
                <p>
                  If avoiding negative equity is a priority,{" "}
                  <Link href="/guides/pcp-vs-hp" className="text-racing-green underline hover:text-racing-green-light">
                    HP is inherently safer than PCP
                  </Link>{" "}
                  because the higher monthly payments build equity faster. The trade-off is higher monthly outgoings,
                  but the equity position is always stronger.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Maintain the Vehicle Well</h3>
                <p>
                  A well-maintained Range Rover with a full service history will command a higher resale value than a
                  neglected example. Keep up with scheduled servicing, address cosmetic issues promptly, and maintain
                  the interior to a high standard. These steps preserve the vehicle&apos;s value and improve your equity
                  position.
                </p>
              </div>
            </div>

            {/* GAP Insurance */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                The Role of GAP Insurance
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  While negative equity itself is not an insurable event,{" "}
                  <Link href="/guides/gap-insurance" className="text-racing-green underline hover:text-racing-green-light">
                    GAP insurance
                  </Link>{" "}
                  protects you from the worst-case scenario: having your vehicle written off or stolen while in negative
                  equity. Without GAP insurance, your motor insurer would pay the market value, which would not cover
                  the outstanding finance — leaving you to pay the shortfall from your own pocket while no longer having
                  a vehicle.
                </p>
                <p>
                  Finance GAP (return to value) is specifically designed for this scenario, covering the difference
                  between the insurer&apos;s payout and the outstanding finance balance. Given the relatively modest cost
                  of GAP insurance compared to the potential exposure on a Range Rover, it is a sensible safeguard for
                  anyone concerned about negative equity risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Concerned About Your Equity Position?"
        description="Our finance specialists can review your current agreement and help you understand your options. Get in touch for free, confidential advice."
      />
    </>
  );
}
