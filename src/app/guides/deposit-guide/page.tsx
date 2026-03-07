import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "How Much Deposit Do You Need for Range Rover Finance? | Complete Guide",
  description:
    "Everything you need to know about deposits on Range Rover finance. Minimum requirements, how deposit size affects monthly payments, zero-deposit options, and using part exchange.",
};

const faqs = [
  {
    question: "What is the minimum deposit for Range Rover finance?",
    answer:
      "Most lenders require a minimum deposit of around 10% of the vehicle's on-the-road price for PCP and HP agreements. On a Range Rover priced at £100,000, that means a minimum deposit of approximately £10,000. Some promotional offers or specialist lenders may accept lower deposits, and zero-deposit deals occasionally appear, though they are uncommon on vehicles at this price point.",
  },
  {
    question: "Can I use my current car as a deposit?",
    answer:
      "Yes, using your current vehicle as a part exchange is one of the most common ways to fund a deposit on a Range Rover. The dealer values your existing car and applies that amount towards the deposit on the new vehicle. If your part exchange is worth more than the required deposit, the excess can sometimes be taken as cash or used to reduce the financed amount further. If you have outstanding finance on your existing vehicle, the dealer can settle it — and any equity above the settlement figure counts towards your deposit.",
  },
  {
    question: "Is it better to put down a large deposit or keep cash in savings?",
    answer:
      "This depends on the interest rate on the finance versus the return you can earn on your savings. If the finance APR is 6.9% and your savings earn 4%, you save more in finance interest by increasing your deposit than you earn by keeping the cash in savings. However, you should always maintain an emergency fund and not stretch yourself financially to maximise a deposit. Our finance vs cash guide explores this trade-off in detail.",
  },
  {
    question: "Does a larger deposit mean I will definitely be approved?",
    answer:
      "A larger deposit improves your chances because it reduces the amount the lender needs to advance and demonstrates your financial commitment. However, it does not guarantee approval. Lenders still assess your credit history and affordability independently. A 30% deposit with a very poor credit history may still result in a declined application, while a 10% deposit with an excellent credit profile will typically be approved without issue.",
  },
  {
    question: "Can I pay the deposit on a credit card?",
    answer:
      "Many dealers accept credit card payments for part or all of the deposit, though some impose a limit (often £1,000 to £3,000) due to the merchant fees they incur. Paying even a small portion of the deposit by credit card can be advantageous because it triggers Section 75 protection under the Consumer Credit Act, making the credit card company jointly liable with the dealer for any breach of contract or misrepresentation.",
  },
  {
    question: "What happens to my deposit if I hand the car back at the end of PCP?",
    answer:
      "Your deposit is non-refundable. It is applied to the purchase price at the start of the agreement and reduces the amount you finance. If you hand the vehicle back at the end of a PCP agreement, you do not get the deposit back — it has already been used. However, if the vehicle has equity (is worth more than the GFV), that equity effectively replaces your deposit for the next agreement, meaning you may not need to put down additional cash next time around.",
  },
];

export default function DepositGuide() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Deposit Guide" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              How Much Deposit Do You Need for Range Rover Finance?
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              The deposit is one of the most important decisions in any finance agreement. It affects your monthly
              payments, total cost, approval chances, and equity position throughout the agreement. This guide explains
              everything you need to know about deposits on Range Rover finance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Deposit by Finance Type */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Deposit Requirements by Finance Type
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Different finance types have different deposit structures. Understanding these differences helps you
                  plan your finances effectively.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">PCP (Personal Contract Purchase)</h3>
                <p>
                  PCP agreements typically require a minimum deposit of around 10% of the vehicle price. On a{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    PCP deal
                  </Link>{" "}
                  for a Range Rover Sport at £85,000, the minimum deposit would be approximately £8,500. Manufacturer
                  promotions sometimes include a deposit contribution (see below), which can reduce the amount you need
                  to find from your own funds. The deposit directly reduces the amount financed, lowering both your
                  monthly payments and the total interest paid.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">HP (Hire Purchase)</h3>
                <p>
                  HP deposit requirements are similar to PCP — typically around 10% minimum. Because{" "}
                  <Link href="/guides/pcp-vs-hp" className="text-racing-green underline hover:text-racing-green-light">
                    HP monthly payments are higher than PCP
                  </Link>, a larger deposit has an even more pronounced effect on affordability. On a £100,000 Range
                  Rover, increasing the deposit from 10% to 20% reduces the financed amount by £10,000, which could
                  lower monthly payments by £250 to £300 depending on the term and rate.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">PCH (Personal Contract Hire / Leasing)</h3>
                <p>
                  Leasing uses a different deposit structure. Instead of a percentage of the vehicle price, you pay an
                  initial rental — typically expressed as a multiple of the monthly rental. Common structures include 3+47
                  (three months upfront plus 47 monthly payments), 6+47, or 9+47. The higher the initial rental, the
                  lower the monthly rental. There is no percentage-based minimum in the same way as PCP or HP.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Personal Loan</h3>
                <p>
                  Personal loans do not have a deposit requirement — you borrow the full amount you need. However, if
                  the vehicle costs more than the maximum loan amount available to you (typically £25,000 to £50,000),
                  you will need to fund the balance from savings, which functions as a de facto deposit.
                </p>
              </div>
            </div>

            {/* Typical Deposits for Range Rovers */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Typical Deposits for Range Rover Models
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  To give you a realistic sense of the deposit amounts involved, here are typical ranges based on
                  current model pricing:
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cream">
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Model</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Typical Price</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">10% Deposit</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">20% Deposit</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate">
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">Range Rover Evoque</td>
                        <td className="p-4">£42,000 - £58,000</td>
                        <td className="p-4">£4,200 - £5,800</td>
                        <td className="p-4">£8,400 - £11,600</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">Range Rover Velar</td>
                        <td className="p-4">£50,000 - £72,000</td>
                        <td className="p-4">£5,000 - £7,200</td>
                        <td className="p-4">£10,000 - £14,400</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">Range Rover Sport</td>
                        <td className="p-4">£72,000 - £120,000</td>
                        <td className="p-4">£7,200 - £12,000</td>
                        <td className="p-4">£14,400 - £24,000</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">Range Rover</td>
                        <td className="p-4">£105,000 - £200,000+</td>
                        <td className="p-4">£10,500 - £20,000+</td>
                        <td className="p-4">£21,000 - £40,000+</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-charcoal">Defender</td>
                        <td className="p-4">£52,000 - £115,000</td>
                        <td className="p-4">£5,200 - £11,500</td>
                        <td className="p-4">£10,400 - £23,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How Deposit Affects Payments */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How Deposit Size Affects Your Monthly Payments
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The relationship between deposit size and monthly payment is straightforward: a larger deposit means
                  less to finance, which means lower monthly payments. But the exact impact depends on the finance type,
                  term, and interest rate.
                </p>
                <p>
                  Here is a worked example using a Range Rover Sport at £85,000 on a 48-month PCP at 6.9% APR with a
                  40% GFV (£34,000 balloon):
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cream">
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Deposit</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Amount</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Financed</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Est. Monthly</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate">
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">5%</td>
                        <td className="p-4">£4,250</td>
                        <td className="p-4">£80,750</td>
                        <td className="p-4">~£1,190</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">10%</td>
                        <td className="p-4">£8,500</td>
                        <td className="p-4">£76,500</td>
                        <td className="p-4">~£1,082</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">15%</td>
                        <td className="p-4">£12,750</td>
                        <td className="p-4">£72,250</td>
                        <td className="p-4">~£974</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">20%</td>
                        <td className="p-4">£17,000</td>
                        <td className="p-4">£68,000</td>
                        <td className="p-4">~£866</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-charcoal">30%</td>
                        <td className="p-4">£25,500</td>
                        <td className="p-4">£59,500</td>
                        <td className="p-4">~£650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  The difference between a 10% and a 20% deposit is approximately £216 per month — or £10,368 over the
                  full 48-month term when you include saved interest. Use our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>{" "}
                  to model different deposit scenarios for your preferred vehicle.
                </p>
              </div>
            </div>

            {/* Zero Deposit Options */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Zero Deposit Options</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Zero-deposit or low-deposit finance deals do exist, though they are less common on premium vehicles
                  like Range Rovers. When available, they typically come from manufacturer promotional campaigns or
                  specialist lenders willing to finance 100% of the vehicle price.
                </p>
                <p>
                  While the appeal of not having to find a lump sum upfront is obvious, zero-deposit deals come with
                  significant trade-offs:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-charcoal">Higher monthly payments:</strong> You are financing the entire vehicle price, so monthly payments are substantially higher</li>
                  <li><strong className="text-charcoal">More interest paid:</strong> Interest is charged on a larger balance, increasing the total cost of finance</li>
                  <li><strong className="text-charcoal">Negative equity risk:</strong> With no deposit as a buffer, you are in{" "}
                    <Link href="/guides/negative-equity" className="text-racing-green underline hover:text-racing-green-light">
                      negative equity
                    </Link>{" "}
                    from day one, which can persist for a year or more
                  </li>
                  <li><strong className="text-charcoal">Higher interest rates:</strong> Lenders may charge a higher APR on zero-deposit deals to reflect the increased risk</li>
                </ul>
                <p>
                  For most Range Rover buyers, putting down at least 10% is advisable. It creates an equity cushion,
                  reduces monthly outgoings, and demonstrates financial commitment to the lender.
                </p>
              </div>
            </div>

            {/* Part Exchange as Deposit */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Using Part Exchange as a Deposit</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Part exchange is the most popular way to fund a deposit on a new Range Rover. You trade in your
                  existing vehicle, and its value is applied towards the deposit on the new one. This avoids the need to
                  find a large cash lump sum.
                </p>
                <p>
                  If your current vehicle has outstanding finance, the dealer will settle it as part of the part exchange
                  process. The key question is whether there is equity in your current vehicle:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-charcoal">Positive equity:</strong> If your car is worth more than the
                    outstanding finance, the surplus is your deposit. For example, if your current Range Rover Evoque is
                    worth £22,000 and the settlement figure is £15,000, you have £7,000 of equity to use as a deposit.
                  </li>
                  <li>
                    <strong className="text-charcoal">Negative equity:</strong> If the outstanding finance exceeds the
                    car&apos;s value, you have negative equity. The shortfall would need to be covered — either from savings
                    or by rolling it into the new finance agreement (which we generally advise against, as discussed in
                    our{" "}
                    <Link href="/guides/negative-equity" className="text-racing-green underline hover:text-racing-green-light">
                      negative equity guide
                    </Link>).
                  </li>
                </ul>
                <p>
                  Before trading in, get your vehicle valued independently using online tools or by visiting multiple
                  dealers. The first offer from a single dealer may not reflect the best available price. Competition
                  between dealers, and the option of selling privately, gives you leverage to negotiate a fair trade-in
                  value.
                </p>
              </div>
            </div>

            {/* Dealer Deposit Contributions */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Deposit Contributions from Dealers</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Manufacturers and dealers periodically offer deposit contributions — sometimes called deposit
                  allowances — as part of promotional finance offers. These contributions are essentially discounts
                  applied as a deposit, reducing the amount the customer needs to fund.
                </p>
                <p>
                  For example, Land Rover might offer a £3,000 deposit contribution on a Range Rover Velar for a
                  limited period. This £3,000 is added to whatever deposit you put down yourself, reducing the financed
                  amount and lowering monthly payments.
                </p>
                <p>
                  Deposit contributions are typically funded by the manufacturer (not the dealer) and are tied to
                  specific finance products — usually the manufacturer&apos;s own PCP deal through their captive finance
                  company. They may not be available if you arrange finance independently. These offers are time-limited
                  and often coincide with quarter-end sales targets, new model launches, or run-out stock clearances.
                </p>
                <p>
                  While deposit contributions are attractive, always compare the overall deal — including the interest
                  rate — against independent finance offers. A £3,000 deposit contribution on a manufacturer PCP at
                  8.9% APR may be less valuable overall than a broker-sourced PCP at 5.9% APR with no contribution.
                </p>
              </div>
            </div>

            {/* Deposit and Negative Equity */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Deposit and Negative Equity</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Your deposit plays a crucial role in determining your exposure to{" "}
                  <Link href="/guides/negative-equity" className="text-racing-green underline hover:text-racing-green-light">
                    negative equity
                  </Link>. The deposit creates an immediate equity cushion — the difference between the vehicle&apos;s value
                  and the amount you owe to the finance company.
                </p>
                <p>
                  On a zero-deposit deal, you owe the full price of the vehicle from day one, but the vehicle is already
                  worth less than that price the moment it leaves the showroom (due to immediate depreciation). You are
                  in negative equity immediately and may remain so for 18 months or more.
                </p>
                <p>
                  With a 20% deposit, your finance balance starts at 80% of the vehicle price. Even after immediate
                  depreciation, the vehicle&apos;s value is likely still above your finance balance, keeping you in positive
                  equity. This protects you if you need to change vehicles unexpectedly and ensures you are not left
                  with a shortfall if the vehicle is written off (though{" "}
                  <Link href="/guides/gap-insurance" className="text-racing-green underline hover:text-racing-green-light">
                    GAP insurance
                  </Link>{" "}
                  provides additional protection regardless).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Work Out Your Ideal Deposit"
        description="Use our finance calculator to see how different deposit amounts affect your monthly payments, or speak to our specialists for personalised advice."
        buttonText="Try the Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
