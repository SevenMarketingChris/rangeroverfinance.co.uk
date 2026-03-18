import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "PCP vs HP Finance: Which is Right for Your Range Rover? | Complete Comparison",
  description:
    "Compare PCP and HP finance for Range Rovers with worked examples, side-by-side comparison tables, and expert guidance on which option suits your circumstances.",
};

const faqs = [
  {
    question: "Is PCP or HP cheaper overall for a Range Rover?",
    answer:
      "HP is almost always cheaper in total cost because you pay less interest overall and there is no balloon payment inflating the finance charge. However, PCP offers significantly lower monthly payments, which is why most Range Rover buyers choose it. The right answer depends on whether you prioritise low monthly outgoings or minimising the total amount you repay.",
  },
  {
    question: "Can I modify my Range Rover on PCP?",
    answer:
      "PCP agreements typically require you to return the vehicle in its original specification. Modifications that can be reversed — such as aftermarket alloy wheels, if you keep the originals — are generally acceptable. Permanent modifications like exhaust changes, suspension lifts, or bodywork alterations may result in charges at the end of the agreement. With HP, you own the vehicle once payments are complete, so modifications are entirely your choice after that point.",
  },
  {
    question: "What happens if I exceed my mileage limit on PCP?",
    answer:
      "You will be charged for every mile over your agreed limit, typically between 5p and 30p per mile depending on the lender and vehicle. On a Range Rover, excess mileage charges tend to be at the higher end. If you exceed your limit by 5,000 miles at 15p per mile, that is an additional £750 to pay. HP has no mileage restrictions whatsoever.",
  },
  {
    question: "Can I end my PCP or HP agreement early?",
    answer:
      "Yes, both PCP and HP agreements can be ended early. You have two main options: voluntary termination (available once you have paid 50% of the total amount payable, including interest and fees) or early settlement (paying off the remaining balance, which may include an early settlement fee). Our guide on early settlement explains this in detail.",
  },
  {
    question: "Do I need GAP insurance with PCP or HP?",
    answer:
      "GAP insurance is worth considering with both finance types, but it is arguably more important with PCP. Because PCP monthly payments are lower, you build equity more slowly, meaning there is a longer period during which the outstanding finance could exceed the vehicle's market value. If the car is written off or stolen during this window, GAP insurance covers the shortfall. With HP, you build equity faster, so the risk period is shorter.",
  },
  {
    question: "Which finance type is better for business use?",
    answer:
      "For sole traders and partnerships, HP may offer capital allowances on the vehicle purchase. For limited companies, leasing (PCH or business contract hire) is often more tax-efficient because rentals can be offset against profits. PCP sits somewhere in between. We recommend speaking to your accountant, as the best option depends on your specific tax position and how the vehicle will be used.",
  },
  {
    question: "Can I switch from PCP to HP mid-agreement?",
    answer:
      "You cannot convert an existing PCP agreement into HP mid-term. However, you can settle your PCP early and then take out a new HP agreement on the same or a different vehicle. Be aware that early settlement may involve fees, and if you are in negative equity you would need to cover the shortfall. It is usually more cost-effective to wait until your agreement ends naturally.",
  },
  {
    question: "Is it harder to get approved for PCP than HP?",
    answer:
      "Approval criteria are broadly similar for both PCP and HP, as both are regulated credit agreements. Lenders assess your credit history, income, and affordability in the same way. However, because PCP monthly payments are lower, some applicants find it easier to pass affordability checks on PCP. Conversely, the balloon payment at the end of PCP is a liability that some lenders factor into their assessment.",
  },
];

export default function PCPvsHP() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "PCP vs HP" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              PCP vs HP: Which Finance Option is Right for Your Range Rover?
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Personal Contract Purchase and Hire Purchase are the two most popular ways to finance a Range Rover in the
              UK. Both are regulated credit agreements, but they work very differently. This guide breaks down exactly
              how each option works, compares them side by side, and helps you decide which is the better fit for your
              circumstances.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* How PCP Works */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How PCP Works</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Personal Contract Purchase, commonly known as PCP, is the most popular way to finance a new Range
                  Rover in the UK. Around 80% of new car buyers choose PCP, and for good reason — it offers lower
                  monthly payments than any other form of secured car finance.
                </p>
                <p>
                  With PCP, you pay an initial deposit (typically 10% of the vehicle price), followed by fixed monthly
                  payments over a term of 24 to 48 months. The key difference from HP is that your monthly payments do
                  not cover the full cost of the vehicle. Instead, they cover the predicted depreciation plus interest.
                  The remaining value — known as the Guaranteed Future Value, or GFV — is deferred to the end of the
                  agreement as an optional balloon payment.
                </p>
                <p>
                  At the end of your PCP agreement, you have three choices. You can pay the balloon payment and take
                  full ownership of the vehicle. You can hand the car back with nothing further to pay, provided it is
                  within the agreed mileage and condition limits. Or, if the vehicle is worth more than the GFV — which
                  is common with Range Rovers due to their strong residual values — you can use that equity as a deposit
                  towards your next vehicle.
                </p>
                <p>
                  PCP agreements come with an annual mileage limit, typically between 8,000 and 15,000 miles per year.
                  Exceeding this limit incurs excess mileage charges, which can be significant. The vehicle must also be
                  returned in good condition, in line with the BVRLA fair wear and tear guidelines. For a deeper dive
                  into PCP mechanics, see our{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    complete PCP guide
                  </Link>.
                </p>
              </div>
            </div>

            {/* How HP Works */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How HP Works</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Hire Purchase is the more traditional form of car finance. It is straightforward: you pay a deposit,
                  make fixed monthly payments over an agreed term, and once the final payment is made, the vehicle is
                  yours. There is no balloon payment, no mileage restrictions, and no conditions about how the car
                  should look at the end.
                </p>
                <p>
                  Because you are financing the entire cost of the vehicle (minus your deposit), monthly payments on HP
                  are considerably higher than PCP. However, you are building equity with every single payment. By the
                  end of the agreement, you own a Range Rover outright — an asset that, depending on the model and
                  market conditions, could still be worth a substantial sum.
                </p>
                <p>
                  HP is regulated by the Financial Conduct Authority (FCA) in exactly the same way as PCP. You are
                  protected by the Consumer Credit Act 1974, which gives you the right to voluntary termination once you
                  have paid 50% of the total amount payable. You also have a 14-day cooling-off period after signing the
                  agreement.
                </p>
                <p>
                  The simplicity of HP makes it appealing to buyers who dislike complexity. There are no end-of-term
                  decisions to make, no mileage anxiety, and no risk of excess charges. You know from day one exactly
                  what you will pay and when you will own the vehicle.
                </p>
              </div>
            </div>

            {/* Comparison Table */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-6">Side-by-Side Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-cream">
                      <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Feature</th>
                      <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">PCP</th>
                      <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">HP</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate">
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium text-charcoal">Monthly Payments</td>
                      <td className="p-4">Lower — you only pay the depreciation plus interest</td>
                      <td className="p-4">Higher — you pay the full vehicle cost plus interest</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-cream/30">
                      <td className="p-4 font-medium text-charcoal">Ownership</td>
                      <td className="p-4">Optional — pay the balloon at end to own, or hand back</td>
                      <td className="p-4">Guaranteed — you own the vehicle after the final payment</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium text-charcoal">Mileage Limits</td>
                      <td className="p-4">Yes — agreed upfront, excess charges apply</td>
                      <td className="p-4">No — drive as many miles as you like</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-cream/30">
                      <td className="p-4 font-medium text-charcoal">Modifications</td>
                      <td className="p-4">Restricted — vehicle must be returned in original spec</td>
                      <td className="p-4">Unrestricted once fully paid off</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium text-charcoal">End-of-Term Flexibility</td>
                      <td className="p-4">High — three options (buy, return, or trade in)</td>
                      <td className="p-4">Simple — you own it, sell it or keep it</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-cream/30">
                      <td className="p-4 font-medium text-charcoal">Negative Equity Risk</td>
                      <td className="p-4">Higher — slow equity build means longer exposure</td>
                      <td className="p-4">Lower — equity builds steadily from day one</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 font-medium text-charcoal">Total Cost of Finance</td>
                      <td className="p-4">Higher total interest paid due to balloon</td>
                      <td className="p-4">Lower total interest — no deferred balance</td>
                    </tr>
                    <tr className="border-b border-gray-100 bg-cream/30">
                      <td className="p-4 font-medium text-charcoal">Deposit Required</td>
                      <td className="p-4">Typically 10% minimum</td>
                      <td className="p-4">Typically 10% minimum</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-charcoal">Best For</td>
                      <td className="p-4">Drivers who change vehicles every 3-4 years</td>
                      <td className="p-4">Buyers who want to keep the vehicle long-term</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Worked Example */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Worked Example: Range Rover Sport at £80,000
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  To illustrate the real-world difference between PCP and HP, let us look at a worked example using a
                  Range Rover Sport with an on-the-road price of £80,000. We will assume a 10% deposit (£8,000), a
                  48-month term, and an APR of 6.9% for both options.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cream rounded-xl p-6">
                  <h3 className="text-lg font-display text-charcoal mb-4">PCP Example</h3>
                  <ul className="space-y-2 text-sm text-slate">
                    <li className="flex justify-between"><span>Vehicle price</span><span className="font-medium text-charcoal">£80,000</span></li>
                    <li className="flex justify-between"><span>Deposit (10%)</span><span className="font-medium text-charcoal">£8,000</span></li>
                    <li className="flex justify-between"><span>Amount financed</span><span className="font-medium text-charcoal">£72,000</span></li>
                    <li className="flex justify-between"><span>Term</span><span className="font-medium text-charcoal">48 months</span></li>
                    <li className="flex justify-between"><span>APR</span><span className="font-medium text-charcoal">6.9%</span></li>
                    <li className="flex justify-between"><span>GFV / Balloon (40%)</span><span className="font-medium text-charcoal">£32,000</span></li>
                    <li className="border-t border-gray-200 pt-2 flex justify-between"><span>Monthly payment (est.)</span><span className="font-medium text-charcoal">£1,018</span></li>
                    <li className="flex justify-between"><span>Total monthly payments</span><span className="font-medium text-charcoal">£48,864</span></li>
                    <li className="flex justify-between"><span>Total cost if you buy</span><span className="font-medium text-charcoal">£88,864</span></li>
                    <li className="flex justify-between"><span>Total interest paid</span><span className="font-medium text-charcoal">£8,864</span></li>
                  </ul>
                </div>

                <div className="bg-cream rounded-xl p-6">
                  <h3 className="text-lg font-display text-charcoal mb-4">HP Example</h3>
                  <ul className="space-y-2 text-sm text-slate">
                    <li className="flex justify-between"><span>Vehicle price</span><span className="font-medium text-charcoal">£80,000</span></li>
                    <li className="flex justify-between"><span>Deposit (10%)</span><span className="font-medium text-charcoal">£8,000</span></li>
                    <li className="flex justify-between"><span>Amount financed</span><span className="font-medium text-charcoal">£72,000</span></li>
                    <li className="flex justify-between"><span>Term</span><span className="font-medium text-charcoal">48 months</span></li>
                    <li className="flex justify-between"><span>APR</span><span className="font-medium text-charcoal">6.9%</span></li>
                    <li className="flex justify-between"><span>Balloon payment</span><span className="font-medium text-charcoal">£0</span></li>
                    <li className="border-t border-gray-200 pt-2 flex justify-between"><span>Monthly payment (est.)</span><span className="font-medium text-charcoal">£1,721</span></li>
                    <li className="flex justify-between"><span>Total monthly payments</span><span className="font-medium text-charcoal">£82,608</span></li>
                    <li className="flex justify-between"><span>Total cost</span><span className="font-medium text-charcoal">£90,608</span></li>
                    <li className="flex justify-between"><span>Total interest paid</span><span className="font-medium text-charcoal">£10,608</span></li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The PCP monthly payment is roughly £700 less than HP — a significant difference that could free up
                  cash flow for other expenses. However, at the end of 48 months, the PCP buyer still does not own the
                  vehicle. To take ownership, they would need to pay the £32,000 balloon, bringing the total outlay to
                  £88,864.
                </p>
                <p>
                  The HP buyer pays more per month but owns the vehicle outright after 48 payments. If the Range Rover
                  Sport is worth £35,000 at that point — a reasonable estimate for a four-year-old model — the HP buyer
                  has an asset they can sell or continue to drive without any ongoing payments.
                </p>
                <p>
                  If the PCP buyer hands the vehicle back instead of paying the balloon, they have effectively paid
                  £56,864 (deposit plus monthly payments) for four years of motoring. Whether that represents good value
                  depends on how you view vehicle ownership. Try running your own numbers with our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>.
                </p>
              </div>
            </div>

            {/* When PCP is Better */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">When PCP is the Better Choice</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  PCP tends to suit buyers who like to change their Range Rover every few years. If you enjoy driving the
                  latest model with the newest technology, PCP makes this accessible without requiring you to sell or
                  trade in privately. The handback process is straightforward, and any equity in the vehicle rolls
                  seamlessly into your next deposit.
                </p>
                <p>
                  PCP is also the better option if monthly cash flow is a priority. The lower payments leave more room
                  in your budget for insurance, maintenance, and fuel — all of which can be significant costs on a Range
                  Rover. If your income fluctuates or you prefer to keep liquid savings available, PCP keeps your
                  committed monthly outgoings lower.
                </p>
                <p>
                  Range Rovers are particularly well-suited to PCP because they hold their value comparatively well
                  within the luxury SUV segment. Strong residual values mean lower balloon payments and more potential
                  equity at the end of the term, which benefits PCP buyers directly.
                </p>
              </div>
            </div>

            {/* When HP is Better */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">When HP is the Better Choice</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  HP is ideal if you plan to keep your Range Rover for the long term. Once the finance is paid off, you
                  own the vehicle outright and have no further monthly payments. If you keep the vehicle for several more
                  years beyond the end of the HP term, the cost per year of ownership drops significantly, making HP the
                  most economical option over a long horizon.
                </p>
                <p>
                  High-mileage drivers should strongly consider HP. If you cover more than 15,000 miles per year — which
                  is common for Range Rover owners who use their vehicle for both daily commuting and weekend
                  countryside driving — the excess mileage charges on PCP can add up quickly. With HP, there are no
                  mileage restrictions whatsoever.
                </p>
                <p>
                  If you intend to modify your Range Rover — whether with off-road accessories, performance upgrades, or
                  cosmetic changes — HP is the only sensible option. PCP requires the vehicle to be returned in standard
                  specification, which rules out any permanent modifications. HP gives you complete freedom once the
                  vehicle is paid off.
                </p>
                <p>
                  HP is also worth considering if you dislike the idea of perpetual car payments. With PCP, many buyers
                  roll from one agreement into the next, never actually owning a vehicle. HP has a definitive end point:
                  the final payment, after which the car is yours and the monthly outgoing disappears entirely.
                </p>
              </div>
            </div>

            {/* Impact on Credit */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Impact on Your Credit Score</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Both PCP and HP are recorded on your credit file as outstanding credit commitments. Lenders report
                  your payment history monthly, so keeping up with payments on either type of finance will build a
                  positive credit history over time.
                </p>
                <p>
                  The main difference lies in how the outstanding balance appears. With PCP, the balance shown on your
                  credit file includes the balloon payment, meaning the total commitment looks larger even though your
                  monthly payments are lower. This can affect your debt-to-income ratio if you apply for a mortgage or
                  other credit during the agreement. Some mortgage lenders will factor in the full PCP commitment,
                  including the balloon, when assessing affordability.
                </p>
                <p>
                  With HP, the outstanding balance reduces steadily with each payment. There is no balloon inflating the
                  total, so the commitment on your credit file decreases in a linear and predictable way. For a more
                  detailed look at how finance affects your credit, read our{" "}
                  <Link href="/guides/credit-score-car-finance" className="text-racing-green underline hover:text-racing-green-light">
                    credit score guide
                  </Link>.
                </p>
              </div>
            </div>

            {/* Making Your Decision */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Making Your Decision</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The right choice between PCP and HP comes down to how you plan to use the vehicle, how long you intend
                  to keep it, and how you prefer to manage your finances. Neither option is universally better — each
                  has genuine strengths depending on your situation.
                </p>
                <p>
                  Before committing, use our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>{" "}
                  to compare monthly payments and total costs for your specific vehicle and deposit. Consider your annual
                  mileage honestly, factor in how long you realistically plan to keep the vehicle, and think about
                  whether the flexibility of PCP or the simplicity of HP better matches your temperament.
                </p>
                <p>
                  If you are still unsure, try our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>{" "}
                  to compare PCP and HP payments side by side for your chosen model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection />
    </>
  );
}
