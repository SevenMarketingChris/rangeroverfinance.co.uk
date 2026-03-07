import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Settling Car Finance Early: Your Complete Guide | Range Rover Finance",
  description:
    "Your rights to settle car finance early, how settlement figures are calculated, voluntary termination vs early settlement, penalty charges, and when it makes financial sense.",
};

const faqs = [
  {
    question: "How do I get my settlement figure?",
    answer:
      "Contact your finance company by phone, email, or through their online portal and request a settlement figure. Under the Consumer Credit Act 1974, they are legally required to provide this within 12 working days. The settlement figure is typically valid for 28 days from the date of calculation, after which you would need to request a new one (the figure may be slightly lower due to the additional payments made in the interim).",
  },
  {
    question: "Is there a penalty for settling car finance early?",
    answer:
      "Under EU regulations adopted into UK law, lenders can charge up to 1% of the amount repaid early if there are more than 12 months remaining on the agreement, or 0.5% if there are 12 months or fewer remaining. However, many UK car finance lenders do not charge an early settlement fee at all. Your finance agreement will state whether a fee applies. In practice, the interest rebate you receive for settling early usually far exceeds any penalty.",
  },
  {
    question: "What is the difference between voluntary termination and early settlement?",
    answer:
      "Voluntary termination (VT) is a statutory right under Section 99 of the Consumer Credit Act, available once you have paid 50% of the total amount payable. You return the vehicle and owe nothing further. Early settlement means paying off the remaining balance in full and taking ownership of the vehicle. With VT, you walk away without the car; with early settlement, you keep the car. VT costs you nothing beyond what you have already paid; early settlement requires a potentially substantial lump sum.",
  },
  {
    question: "Can I settle my finance early and sell the car privately?",
    answer:
      "Yes. You request a settlement figure, pay it to the finance company, and the vehicle becomes yours. You are then free to sell it privately, which typically achieves a higher price than a dealer trade-in. This approach makes sense when the vehicle's private sale value exceeds the settlement figure — the difference is your equity, which you keep. Be aware that you need the funds to pay the settlement before completing the private sale.",
  },
  {
    question: "Will settling early affect my credit score?",
    answer:
      "Settling car finance early is generally viewed positively by credit reference agencies and future lenders. The account will be marked as 'settled' on your credit file, which shows you have fulfilled your obligation. Your overall debt level decreases, which can improve your debt-to-income ratio. The only minor consideration is that a longer track record of on-time payments builds a stronger positive history, but this is a marginal factor compared to the benefits of reducing your total debt.",
  },
  {
    question: "Can I refinance my car finance to a better deal?",
    answer:
      "Yes. If interest rates have dropped or your credit score has improved since you took out your original agreement, you may be able to settle the existing finance and take out a new agreement at a lower rate. Calculate the total cost of the new deal (including any early settlement fee on the old one) against the remaining cost of the existing deal to ensure refinancing genuinely saves you money. Our finance specialists can help you compare the numbers.",
  },
];

export default function EarlySettlement() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Early Settlement" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Settling Car Finance Early: Your Complete Guide
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Whether you have received a windfall, want to sell your Range Rover, or simply want to clear the debt
              ahead of schedule, you have the legal right to settle your car finance early. This guide explains exactly
              how the process works, what it costs, and when it makes financial sense.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Right to Settle Early */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Your Right to Settle Early</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Under the Consumer Credit Act 1974 (as amended by the Consumer Credit Directive), you have an
                  absolute legal right to settle any regulated credit agreement early. This applies to PCP, HP, and
                  personal loans used for vehicle purchase. The finance company cannot refuse an early settlement
                  request.
                </p>
                <p>
                  When you settle early, you are entitled to a rebate on future interest — you should not have to pay
                  interest for the remaining term that you are not using. The finance company must calculate a fair
                  settlement figure that reflects this rebate. This figure will always be less than the sum of all
                  remaining payments.
                </p>
                <p>
                  There is no minimum period before you can request a settlement. You could theoretically settle one
                  month into a 48-month agreement, though whether this makes financial sense depends on your specific
                  circumstances and any applicable early settlement fee.
                </p>
              </div>
            </div>

            {/* How Settlement Figures Are Calculated */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How Settlement Figures Are Calculated
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  There are two methods that lenders use to calculate early settlement figures. The method used
                  significantly affects how much you save by settling early.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Actuarial Method</h3>
                <p>
                  The actuarial method is the fairer approach and is now required by regulation for all agreements taken
                  out after 1 February 2011. It calculates interest on the outstanding balance, reducing as the balance
                  reduces. When you settle early, you receive a genuine proportional rebate of the remaining interest.
                  The earlier you settle, the more interest you save.
                </p>
                <p>
                  For example, on a 48-month PCP with total interest of £12,000, settling at month 24 would save you
                  approximately half the interest — but slightly more than half, because the outstanding balance (and
                  therefore the interest accruing) is higher in the earlier months.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Rule of 78</h3>
                <p>
                  The Rule of 78 is an older method that front-loads interest charges, making early settlement less
                  beneficial for the borrower. Under this method, a disproportionately large share of the total interest
                  is allocated to the early months of the agreement. If you settle early, you receive a smaller rebate
                  than you would under the actuarial method.
                </p>
                <p>
                  The Rule of 78 has been banned for new agreements exceeding 12 months since 2011, but it may still
                  apply to older agreements. If your agreement pre-dates 2011, check which method applies — the
                  documentation will specify this. For any agreement taken out recently on a Range Rover, the actuarial
                  method will apply, and you will receive a fair interest rebate.
                </p>
              </div>
            </div>

            {/* Requesting a Settlement Figure */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Requesting a Settlement Figure</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The process for requesting a settlement figure is straightforward:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    Contact your finance company. Most allow you to request a settlement figure by phone, email, online
                    portal, or in writing. Some providers have a dedicated settlement team.
                  </li>
                  <li>
                    The finance company has up to 12 working days to provide the figure, though most provide it within
                    a few days.
                  </li>
                  <li>
                    The settlement figure will state the amount due and the date by which it must be paid (usually
                    valid for 28 days). It will include the outstanding capital, any accrued interest, the balloon
                    payment (on PCP), minus your interest rebate.
                  </li>
                  <li>
                    If you agree to settle, you pay the stated amount by the stated date. The finance company then
                    releases their interest in the vehicle, and you receive the V5C registration document (if the
                    finance company held it) or confirmation that the finance lien has been removed.
                  </li>
                </ol>
                <p>
                  Keep a copy of the settlement confirmation letter or email — this is proof that the finance has been
                  fully discharged and is useful if you plan to sell the vehicle, as buyers and dealers may want to
                  verify that there is no outstanding finance.
                </p>
              </div>
            </div>

            {/* VT vs Early Settlement */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Voluntary Termination vs Early Settlement: The Key Difference
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  These two terms are often confused, but they are fundamentally different options with very different
                  outcomes:
                </p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="text-lg font-display text-charcoal mb-3">Voluntary Termination (VT)</h3>
                    <ul className="space-y-2 text-sm text-slate">
                      <li>Available once you have paid 50% of total amount payable</li>
                      <li>You return the vehicle to the lender</li>
                      <li>You do not keep the car</li>
                      <li>No further payments required</li>
                      <li>Cannot be refused by the lender</li>
                      <li>Vehicle must be in reasonable condition</li>
                      <li>Excess mileage charges do not apply</li>
                    </ul>
                  </div>
                  <div className="bg-cream rounded-xl p-6">
                    <h3 className="text-lg font-display text-charcoal mb-3">Early Settlement</h3>
                    <ul className="space-y-2 text-sm text-slate">
                      <li>Available at any time during the agreement</li>
                      <li>You pay off the remaining balance</li>
                      <li>You keep the car — it becomes yours</li>
                      <li>Lump sum payment required</li>
                      <li>Cannot be refused by the lender</li>
                      <li>Interest rebate applied</li>
                      <li>Small early settlement fee may apply</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4">
                  On a{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    PCP agreement
                  </Link>, the 50% threshold for voluntary termination includes the balloon payment in the total
                  amount payable. This means you often need to have paid considerably more than 50% of your monthly
                  payments before VT becomes available. For example, on a deal with a total amount payable of £90,000,
                  you need to have paid £45,000 — but if the balloon is £35,000, your monthly payments only total
                  £55,000, so you would need to have paid through approximately 80% of your monthly payment term before
                  reaching the VT threshold.
                </p>
              </div>
            </div>

            {/* Penalty Charges */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Early Settlement Fees</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Under UK law (derived from the EU Consumer Credit Directive), lenders can charge a maximum early
                  settlement fee of:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-charcoal">1% of the amount repaid early</strong> if more than 12 months remain on the agreement</li>
                  <li><strong className="text-charcoal">0.5% of the amount repaid early</strong> if 12 months or fewer remain</li>
                </ul>
                <p>
                  In practice, many UK car finance providers do not charge an early settlement fee at all. Check your
                  finance agreement documentation — the fee (or absence of one) will be stated in the terms and
                  conditions. Even when a fee applies, it is typically modest relative to the interest savings. On a
                  £40,000 early settlement with 18 months remaining, a 1% fee would be £400 — but the interest saving
                  could be several thousand pounds.
                </p>
              </div>
            </div>

            {/* When It Makes Sense */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                When Early Settlement Makes Financial Sense
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Early settlement is not always the right move. Here are the scenarios where it typically makes good
                  financial sense:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-charcoal">You have received a lump sum:</strong> An inheritance, bonus, or
                    other windfall that you want to use to eliminate debt. Paying off car finance avoids the remaining
                    interest charges, which on a high-value Range Rover could be substantial.
                  </li>
                  <li>
                    <strong className="text-charcoal">You want to sell the vehicle:</strong> If you are selling
                    privately or trading in, you need to clear the finance first. If the vehicle&apos;s value exceeds the
                    settlement figure, you have equity — settle, sell, and pocket the difference.
                  </li>
                  <li>
                    <strong className="text-charcoal">Interest rates have dropped:</strong> If rates have fallen
                    significantly since you took out your agreement, settling and refinancing at a lower rate could save
                    you money overall (accounting for any early settlement fee).
                  </li>
                  <li>
                    <strong className="text-charcoal">Your credit score has improved:</strong> If your credit profile is
                    now significantly better than when you took out the agreement, you may qualify for a materially lower
                    rate. Settling the old deal and refinancing could reduce your monthly payments or total cost.
                  </li>
                  <li>
                    <strong className="text-charcoal">You are approaching a major credit application:</strong> If you
                    are about to apply for a mortgage, clearing car finance reduces your outstanding commitments, which
                    can improve your mortgage affordability assessment.
                  </li>
                </ul>
              </div>
            </div>

            {/* Refinancing */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Refinancing to a Better Deal</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Refinancing involves settling your existing car finance and replacing it with a new agreement at
                  better terms. This can make sense if:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Market interest rates have fallen significantly since your original agreement</li>
                  <li>Your{" "}
                    <Link href="/guides/credit-score-car-finance" className="text-racing-green underline hover:text-racing-green-light">
                      credit score has improved
                    </Link>, qualifying you for a lower rate
                  </li>
                  <li>You want to change the agreement structure (e.g., convert a PCP balloon into HP payments)</li>
                  <li>You want to extend the term to reduce monthly payments</li>
                </ul>
                <p>
                  Before refinancing, calculate the total cost carefully. Add together the early settlement fee (if
                  any), the total cost of the new agreement, and compare this against the remaining cost of your
                  existing agreement. The savings need to be meaningful to justify the administrative effort and any
                  short-term credit score impact of opening a new account.
                </p>
                <p>
                  Our finance specialists can run these numbers for you and advise whether refinancing would genuinely
                  save you money. In some cases, the savings can be significant — particularly if rates have moved
                  materially or your credit profile has improved substantially.
                </p>
              </div>
            </div>

            {/* Impact on Credit */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Impact on Your Credit Score</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Settling car finance early is generally a positive action from a credit perspective. Your credit file
                  will show the account as &quot;settled,&quot; which demonstrates responsible debt management. Your overall
                  outstanding debt decreases, improving your debt-to-income ratio.
                </p>
                <p>
                  The only minor consideration is that a longer history of consistent on-time payments can build a
                  slightly stronger credit profile than a shorter one. However, this marginal benefit rarely outweighs
                  the practical advantages of clearing a debt that you no longer want or need. Reducing your total
                  outstanding credit is almost always viewed favourably by future lenders.
                </p>
                <p>
                  If you refinance (settle and take out a new agreement), there will be a hard credit search for the new
                  application, which may temporarily reduce your score by a few points. This recovers within a few
                  months and is a minor factor in the overall decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Thinking About Settling or Refinancing?"
        description="Our finance specialists can review your current agreement and advise on whether settling early or refinancing would save you money."
      />
    </>
  );
}
