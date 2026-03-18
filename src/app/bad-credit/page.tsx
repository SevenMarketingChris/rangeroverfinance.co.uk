import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { formatCurrency } from "@/lib/models";

export const metadata: Metadata = {
  title: "Bad Credit Range Rover Finance | Specialist Lenders | Options Available",
  description:
    "Explore Range Rover finance options with bad credit. Understand how CCJs, defaults and low credit scores affect your options. Specialist lenders, practical advice, and honest guidance on improving your chances of approval.",
  openGraph: {
    title: "Bad Credit Range Rover Finance | Specialist Lenders | Options Available",
    description:
      "Explore Range Rover finance options with bad credit. Specialist lenders, practical advice, and honest guidance on your options.",
    type: "website",
    url: "https://www.rangeroverfinance.co.uk/bad-credit",
  },
};

const faqs = [
  {
    question: "Can I really get Range Rover finance with bad credit?",
    answer:
      "Yes, it is possible, but it depends on the nature and severity of your credit issues, your current income, and the amount you wish to borrow. Specialist lenders exist specifically to serve customers with impaired credit histories. However, the terms will be different from mainstream finance — expect higher APRs, potentially larger deposit requirements, and possibly shorter terms. A used Range Rover at a lower price point will be significantly easier to finance than a new flagship model.",
  },
  {
    question: "What credit score do I need for Range Rover finance?",
    answer:
      "There is no single credit score threshold, as different lenders use different scoring models and criteria. Mainstream lenders typically require a score of 'good' or above (roughly 670+ on Experian, 420+ on Equifax). Specialist lenders may consider applicants with scores below these levels, but the interest rate and terms will reflect the additional risk. Beyond the headline score, lenders also assess your income, employment stability, existing financial commitments, and the specific nature of any adverse credit history.",
  },
  {
    question: "How much extra will I pay in interest with bad credit?",
    answer:
      "Interest rates for bad credit finance are significantly higher than standard rates. While a customer with excellent credit might secure 5-7% APR on a Range Rover, subprime rates typically range from 15% to 30% APR, and in some cases higher. On a used Range Rover Evoque at 22,000 pounds over 48 months, the difference between 7% and 20% APR would add approximately 6,000 to 7,000 pounds to the total cost of the agreement. This is a substantial premium, and it is important to weigh this against your need and ability to improve your credit before borrowing.",
  },
  {
    question: "Will applying for finance affect my credit score?",
    answer:
      "There are two types of credit search: soft and hard. A soft search (also called a quotation search) does not appear on your credit file and has no impact on your score. Many brokers and lenders now offer initial eligibility checks using soft searches, allowing you to understand your options without risk. A hard search (or application search) is recorded on your credit file and can temporarily reduce your score. Multiple hard searches in a short period can signal financial distress to lenders. Always ask whether an initial assessment uses a soft or hard search.",
  },
  {
    question: "What types of bad credit can specialist lenders work with?",
    answer:
      "Specialist lenders can typically work with a range of credit issues including missed payments, defaults, County Court Judgements (CCJs), Individual Voluntary Arrangements (IVAs), and even discharged bankruptcies. The key factors are the age of the adverse credit (older issues carry less weight), the amounts involved, whether issues are satisfied or outstanding, and your current financial stability. Recent, large, unsatisfied CCJs or an active IVA will be the most challenging to work around.",
  },
  {
    question: "Will a larger deposit help me get approved with bad credit?",
    answer:
      "Yes, a larger deposit significantly improves your chances of approval and will likely secure better terms. A larger deposit reduces the lender's risk — they are lending less money against the vehicle's value, meaning better loan-to-value ratio. For bad credit applications, a deposit of 20-30% is often recommended compared to the 10-15% typical for mainstream finance. On a used Range Rover at 25,000 pounds, a 5,000 deposit versus a 7,500 deposit could make the difference between approval and decline.",
  },
  {
    question: "Should I use a guarantor for Range Rover finance?",
    answer:
      "A guarantor — someone with good credit who agrees to cover payments if you default — can significantly strengthen a bad credit application. The guarantor provides the lender with additional security, potentially unlocking lower interest rates and better terms than you would receive on your own. However, this is a serious commitment for the guarantor: they are legally liable for the full debt if you fail to pay. Ensure both you and your guarantor fully understand the obligations involved.",
  },
  {
    question: "How can I improve my credit score before applying for Range Rover finance?",
    answer:
      "Several practical steps can improve your score over time: register on the electoral roll at your current address, ensure all existing credit commitments are paid on time, reduce outstanding credit card balances (aim for below 30% utilisation), close unused credit accounts, check your credit file for errors and dispute any inaccuracies, avoid making multiple credit applications in a short period, and consider a credit-building credit card used responsibly for small purchases paid off in full each month. Meaningful score improvements typically take 3-6 months of consistent positive behaviour.",
  },
];

export default function BadCreditPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Bad Credit Finance", url: "https://www.rangeroverfinance.co.uk/bad-credit" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-racing-green-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-racing-green-dark via-racing-green to-racing-green-light opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(196,169,125,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Breadcrumbs items={[{ label: "Bad Credit Finance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display text-white leading-tight tracking-tight">
              Range Rover Finance
              <span className="block text-sand mt-2">with Bad Credit</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-white/70 leading-relaxed max-w-2xl">
              A less-than-perfect credit history does not automatically disqualify you from Range Rover finance.
              Specialist lenders, larger deposits, and the right approach can open doors. Here is an honest,
              practical guide to your options.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Bad Credit */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal mb-8">
            Understanding Bad Credit and How It Affects Finance
          </h2>
          <div className="prose prose-lg max-w-none text-slate leading-relaxed space-y-6">
            <p>
              The term &ldquo;bad credit&rdquo; is broad and covers a wide spectrum of financial situations. At one end,
              it might mean a single missed payment on a mobile phone contract several years ago. At the other end,
              it could encompass multiple County Court Judgements, an Individual Voluntary Arrangement, or a
              discharged bankruptcy. The impact on your ability to finance a Range Rover varies enormously depending
              on where you sit on this spectrum, how recent the issues are, and what your current financial
              circumstances look like.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              What Counts as Bad Credit?
            </h3>
            <p>
              Lenders assess credit history through a combination of credit scores (from agencies like Experian,
              Equifax and TransUnion) and detailed examination of your credit file. The following items are
              considered adverse credit markers, listed roughly from least to most severe:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Late payments:</strong> One or two payments made a few days late may have minimal impact,
                particularly if they occurred more than two years ago. A pattern of late payments, or payments more
                than 30 days overdue, is more concerning.
              </li>
              <li>
                <strong>Missed payments:</strong> Payments missed entirely and recorded as defaults have a more
                significant impact. Each missed payment remains on your credit file for six years.
              </li>
              <li>
                <strong>Defaults:</strong> When a creditor formally closes an account due to non-payment and
                records a default. This is a serious mark that significantly affects your score and remains on
                file for six years from the date of default.
              </li>
              <li>
                <strong>County Court Judgements (CCJs):</strong> A court order to repay a debt. CCJs remain on
                your credit file for six years, whether satisfied (paid) or not. Unsatisfied CCJs are viewed
                far more negatively than satisfied ones.
              </li>
              <li>
                <strong>Individual Voluntary Arrangements (IVAs):</strong> A formal insolvency arrangement.
                An IVA remains on your credit file for six years from the date it was registered, and many
                mainstream lenders will not consider applications while an IVA is active.
              </li>
              <li>
                <strong>Bankruptcy:</strong> The most severe adverse credit event. A bankruptcy remains on your
                credit file for six years from the date of the bankruptcy order, and many lenders will not consider
                applications for several years after discharge.
              </li>
            </ul>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              How Bad Credit Affects Range Rover Finance
            </h3>
            <p>
              The practical impact of bad credit on a Range Rover finance application manifests in several ways.
              First and most obviously, the interest rate will be higher — sometimes significantly so. Where a
              customer with excellent credit might secure 5-7% APR, a subprime borrower could face rates from
              15% to 30% or more. On a high-value vehicle like a Range Rover, this translates into a substantial
              increase in total cost.
            </p>
            <p>
              Second, lenders may require a larger deposit — typically 20-30% rather than the standard 10-15%.
              This serves to reduce the lender&apos;s exposure and demonstrates your financial commitment to the
              agreement. Third, available terms may be shorter, and some finance products (particularly
              manufacturer-backed PCP deals with promotional rates) may not be available. Finally, there is
              a practical upper limit on the value of vehicle that subprime lenders will finance — a
              {formatCurrency(200000)} flagship Range Rover is extremely unlikely to be approved for a bad credit
              customer, whereas a used Evoque at {formatCurrency(20000)} to {formatCurrency(25000)} is a far more
              realistic proposition.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Specialist Lenders and Subprime Finance
            </h3>
            <p>
              The UK motor finance market includes a number of specialist lenders who specifically cater to
              customers with impaired credit histories. These lenders — sometimes called subprime or
              non-standard lenders — use different underwriting criteria from mainstream providers. Rather than
              relying solely on credit scores, they take a more holistic view of your circumstances, considering
              factors such as current income, employment stability, affordability, and the trajectory of your
              credit behaviour (are things improving or getting worse?).
            </p>
            <p>
              When searching for finance with impaired credit, it is worth researching specialist lenders who
              may consider your circumstances. Comparing offers from multiple providers — ideally using
              soft-search eligibility checks first — helps you find the best available terms without
              further damaging your score through multiple hard credit searches.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Practical Steps to Improve Your Chances
            </h3>
            <p>
              If Range Rover ownership is your goal but your credit is currently holding you back, there are
              concrete steps you can take to strengthen your position:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 not-prose">
              {[
                {
                  title: "Increase Your Deposit",
                  description:
                    "The single most effective lever. A 25-30% deposit significantly improves approval chances and may unlock better rates. Save aggressively if possible.",
                },
                {
                  title: "Consider an Older Model",
                  description:
                    "A 3-5 year old Range Rover at a lower price point is far more achievable than a new model. Lower borrowing amounts are easier to approve.",
                },
                {
                  title: "Shorten the Term",
                  description:
                    "A shorter finance term (24-36 months) reduces the lender's risk exposure and may improve approval chances, though monthly payments will be higher.",
                },
                {
                  title: "Address Credit File Errors",
                  description:
                    "Check your credit file with all three agencies. Errors and outdated information are more common than you might think. Dispute and correct any inaccuracies.",
                },
                {
                  title: "Demonstrate Stability",
                  description:
                    "Being registered on the electoral roll, having a stable address history, and showing consistent employment all strengthen your application.",
                },
                {
                  title: "Build Credit Gradually",
                  description:
                    "A credit-building credit card used for small purchases and paid off in full each month can meaningfully improve your score over 3-6 months.",
                },
              ].map((step) => (
                <div key={step.title} className="p-6 bg-cream rounded-lg">
                  <h4 className="text-sm font-semibold text-charcoal mb-2">{step.title}</h4>
                  <p className="text-sm text-slate leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              Soft Search vs Hard Search: Protecting Your Score
            </h3>
            <p>
              Understanding the difference between soft and hard credit searches is crucial when you have bad
              credit. A soft search (also called a quotation search or eligibility check) allows a lender or
              broker to review your credit profile without leaving a visible footprint on your file. Only you
              can see soft searches on your record — other lenders cannot. This means you can check your
              eligibility with multiple providers without any impact on your credit score.
            </p>
            <p>
              A hard search (application search or credit search) is recorded on your credit file and is visible
              to other lenders for 12 months. Multiple hard searches in a short period can signal financial
              distress or desperation to borrow, which further damages your score and reduces your chances of
              approval. This is why it is essential to work with a broker who uses soft searches for initial
              assessments, only proceeding to a full application (hard search) when there is a reasonable
              prospect of approval.
            </p>

            <h3 className="text-2xl font-display text-charcoal mt-10 mb-4">
              A Realistic Assessment
            </h3>
            <p>
              It is important to be realistic. Financing a new, fully specified Range Rover on a bad credit
              basis is extremely challenging and, in most cases, inadvisable even if approval were possible. The
              combination of high vehicle value, high interest rates, and substantial monthly payments creates
              a significant financial burden that could worsen an already fragile credit position.
            </p>
            <p>
              However, a used Range Rover Evoque, Discovery Sport, or older Velar at a price point of
              {formatCurrency(15000)} to {formatCurrency(30000)} is a far more realistic and sensible target.
              With a meaningful deposit, a specialist lender, and a clear plan to improve your credit over the
              term of the agreement, Range Rover ownership can be achievable — and the discipline of making
              regular payments on time will itself help rebuild your credit score for the future.
            </p>
          </div>
        </div>
      </section>

      {/* Credit Score Factors */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-display text-charcoal text-center mb-12">
            What Lenders Look at Beyond Your Credit Score
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Income & Affordability",
                description:
                  "Your gross and net income, and whether the proposed monthly payment is affordable relative to your existing outgoings. Most lenders cap finance payments at 25-35% of net income.",
              },
              {
                title: "Employment Status",
                description:
                  "Permanent employment is preferred, with at least 6-12 months in your current role. Self-employed applicants may need to provide 2-3 years of accounts or tax returns.",
              },
              {
                title: "Residential Stability",
                description:
                  "Time at your current address matters. Lenders prefer to see at least 3 years of address history. Being on the electoral roll at your current address is important.",
              },
              {
                title: "Existing Commitments",
                description:
                  "Your total monthly financial commitments — mortgages, loans, credit cards, other finance agreements — are assessed against your income to determine affordability.",
              },
            ].map((factor) => (
              <div key={factor.title} className="p-8 rounded-xl bg-white border border-gray-100">
                <h3 className="text-lg font-display text-charcoal mb-3">{factor.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Bad Credit Finance FAQs" faqs={faqs} />

      {/* CTA */}
      <CTASection
        title="Estimate Your Finance Payments"
        description="Use our free calculator to explore monthly payment estimates for different Range Rover models at various price points and deposit levels."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
