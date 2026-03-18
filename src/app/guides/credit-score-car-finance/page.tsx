import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "How Your Credit Score Affects Car Finance | Range Rover Finance Guide",
  description:
    "Understand how your credit score affects car finance rates and approval. Learn what lenders look for, how to check your score for free, tips to improve it, and common myths debunked.",
};

const faqs = [
  {
    question: "What is the minimum credit score needed for Range Rover finance?",
    answer:
      "There is no universal minimum credit score for car finance because each lender uses its own scoring criteria. However, as a general guide, prime lenders offering the best rates typically require an Experian score above 700 (or equivalent). Scores between 560 and 700 may qualify with near-prime lenders at slightly higher rates. Scores below 560 will typically require a specialist subprime lender, with rates significantly higher. A larger deposit can help offset a lower credit score.",
  },
  {
    question: "Will checking my credit score affect it?",
    answer:
      "No. Checking your own credit score is recorded as a 'soft search' and has absolutely no impact on your score. You can check your score as many times as you like without any negative consequences. This is true whether you use a free service like ClearScore, Credit Karma, or the Experian app, or request a statutory credit report directly from a credit reference agency.",
  },
  {
    question: "How long do negative marks stay on my credit file?",
    answer:
      "Most negative information remains on your credit file for six years from the date it was recorded. This includes late payments, defaults, CCJs, IVAs, and bankruptcies. However, the impact of negative marks diminishes over time — a default from five years ago carries much less weight than one from six months ago. After six years, the information is removed entirely and no longer affects your score or lending decisions.",
  },
  {
    question: "Can I get car finance with a CCJ?",
    answer:
      "Yes, it is possible to get car finance with a County Court Judgement, though your options will be more limited and interest rates will be higher. Some specialist lenders specifically cater to applicants with CCJs, particularly if the CCJ has been satisfied (paid). A satisfied CCJ is viewed more favourably than an unsatisfied one. The age of the CCJ matters too — older CCJs carry less weight. A larger deposit will also improve your prospects.",
  },
  {
    question: "Does having no credit history make it harder to get finance?",
    answer:
      "Yes, a thin credit file — where you have little or no borrowing history — can be as problematic as a poor credit history. Lenders have no track record to assess your reliability. This commonly affects young adults, people who have always paid cash, and those who have recently moved to the UK. Building credit gradually through a credit builder card or small credit agreements before applying for car finance can help establish a positive history.",
  },
  {
    question: "Should I apply to multiple lenders to compare rates?",
    answer:
      "Applying to multiple lenders simultaneously can result in multiple hard searches on your credit file, which can temporarily lower your score and signal desperation to lenders. A better approach is to use brokers or lenders that offer soft-search pre-approval, which gives you an indicative rate without affecting your score. Only proceed to a full application (hard search) with the lender or offer you intend to accept.",
  },
  {
    question: "How quickly can I improve my credit score?",
    answer:
      "Some improvements can take effect within one to two months — such as reducing credit card balances, getting on the electoral roll, or correcting errors on your credit file. Other improvements take longer: building a positive payment history requires consistent on-time payments over six to twelve months. If you are planning to finance a Range Rover, starting to improve your credit three to six months before applying gives you the best chance of a meaningful score improvement.",
  },
  {
    question: "Does my partner's credit score affect my application?",
    answer:
      "Your partner's credit score does not directly affect your application unless you are applying jointly or have a financial association. A financial association is created when you have joint credit products — such as a joint mortgage, joint bank account, or joint loan. If you are financially associated, lenders may consider your partner's credit file alongside yours. If your partner has poor credit and you have a financial association, it could affect your application.",
  },
];

export default function CreditScoreCarFinance() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "Credit Score & Car Finance" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              How Your Credit Score Affects Car Finance
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Your credit score is one of the most important factors in determining the rate you will be offered on car
              finance — and whether you will be approved at all. This guide explains exactly what lenders look for, how
              to check and improve your score, and debunks common myths that lead to costly mistakes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Credit Score Explained */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">What is a Credit Score?</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  A credit score is a numerical representation of your creditworthiness, generated by credit reference
                  agencies based on the information held on your credit file. It gives lenders a quick way to assess the
                  risk of lending to you. A higher score indicates lower risk and typically results in better interest
                  rates and easier approval.
                </p>
                <p>
                  It is important to understand that there is no single, universal credit score. Each of the three major
                  UK credit reference agencies — Experian, Equifax, and TransUnion — uses its own scoring model, and
                  each lender may weight the information differently according to their own risk appetite.
                </p>
                <p>
                  Your credit score is not fixed. It changes over time as new information is added to your credit file.
                  A missed payment last month will lower your score; six months of perfect payments will raise it. This
                  means you have genuine control over your score and can take steps to improve it before applying for
                  Range Rover finance.
                </p>
              </div>
            </div>

            {/* Score Ranges */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                What the Scores Mean: Experian, Equifax, and TransUnion
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Each credit reference agency uses a different scale, which can be confusing when comparing scores:
                </p>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-cream">
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Rating</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Experian (0-999)</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">Equifax (0-1000)</th>
                        <th className="text-left p-4 font-display text-charcoal border-b border-gray-200">TransUnion (0-710)</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate">
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">Excellent</td>
                        <td className="p-4">961 - 999</td>
                        <td className="p-4">811 - 1000</td>
                        <td className="p-4">628 - 710</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">Good</td>
                        <td className="p-4">881 - 960</td>
                        <td className="p-4">671 - 810</td>
                        <td className="p-4">604 - 627</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium text-charcoal">Fair</td>
                        <td className="p-4">721 - 880</td>
                        <td className="p-4">531 - 670</td>
                        <td className="p-4">566 - 603</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-cream/30">
                        <td className="p-4 font-medium text-charcoal">Poor</td>
                        <td className="p-4">561 - 720</td>
                        <td className="p-4">440 - 530</td>
                        <td className="p-4">551 - 565</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium text-charcoal">Very Poor</td>
                        <td className="p-4">0 - 560</td>
                        <td className="p-4">0 - 439</td>
                        <td className="p-4">0 - 550</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4">
                  For prime car finance rates (typically the best available), you will generally need a score in the
                  &quot;Good&quot; to &quot;Excellent&quot; range. Applicants in the &quot;Fair&quot; range can usually
                  still obtain finance but may face higher interest rates. Those in the &quot;Poor&quot; or
                  &quot;Very Poor&quot; range will need specialist lenders.
                </p>
              </div>
            </div>

            {/* What's on Your Credit File */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">What is on Your Credit File</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Your credit file contains a detailed record of your financial history. Understanding what is included
                  helps you identify areas for improvement:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-charcoal">Personal details:</strong> Name, date of birth, current and previous addresses, electoral roll registration</li>
                  <li><strong className="text-charcoal">Credit accounts:</strong> All current and recently closed credit agreements — credit cards, loans, mortgages, car finance, mobile phone contracts</li>
                  <li><strong className="text-charcoal">Payment history:</strong> A month-by-month record of whether you paid on time, late, or missed a payment entirely</li>
                  <li><strong className="text-charcoal">Outstanding balances:</strong> How much you currently owe on each account</li>
                  <li><strong className="text-charcoal">Credit applications:</strong> A record of every hard search (full application) made on your file in the last 12 months</li>
                  <li><strong className="text-charcoal">Public records:</strong> CCJs, bankruptcies, IVAs, and insolvency records</li>
                  <li><strong className="text-charcoal">Financial associations:</strong> Connections to other individuals through joint financial products</li>
                </ul>
              </div>
            </div>

            {/* How Lenders Use It */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How Lenders Use Your Credit Information</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Lenders do not simply look at your headline credit score and make a decision. They use the underlying
                  data on your credit file as an input to their own internal scoring model. Two lenders looking at the
                  same credit file may reach different conclusions, because they weight different factors according to
                  their own risk appetite.
                </p>
                <p>
                  That said, certain patterns are universally positive: a long history of on-time payments, low credit
                  utilisation, stable addresses, and being registered on the electoral roll. And certain patterns are
                  universally negative: missed payments, defaults, CCJs, high credit utilisation, and multiple recent
                  credit applications.
                </p>
                <p>
                  For high-value finance like a Range Rover, lenders may also consider factors beyond your credit file,
                  such as your income level, employment stability, and overall debt-to-income ratio. A strong income
                  with moderate debt is viewed more favourably than a modest income with heavy existing commitments.
                </p>
              </div>
            </div>

            {/* How to Check for Free */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">How to Check Your Credit Score for Free</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  You can check your credit score and credit report for free using these services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-charcoal">ClearScore:</strong> Free access to your Equifax credit report and score, updated monthly</li>
                  <li><strong className="text-charcoal">Credit Karma:</strong> Free access to your TransUnion credit report and score</li>
                  <li><strong className="text-charcoal">Experian:</strong> Free basic credit score through the Experian app (full report requires a subscription, but the free score is sufficient for monitoring)</li>
                  <li><strong className="text-charcoal">Money Saving Expert Credit Club:</strong> Free Experian credit report and score</li>
                </ul>
                <p>
                  We recommend checking all three agencies, as each may hold slightly different information. Errors do
                  occur, and checking all three ensures you spot and correct any inaccuracies before they affect a
                  finance application.
                </p>
              </div>
            </div>

            {/* Tips to Improve */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                Tips to Improve Your Credit Score Before Applying
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  If you are planning to finance a Range Rover in the coming months, these steps can improve your score
                  and your chances of securing the best rate:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-charcoal">Register on the electoral roll.</strong> This is one of the
                    quickest wins. Lenders use the electoral roll to verify your identity and address. If you are not
                    registered, do so immediately — it can be done online and typically updates within a few weeks.
                  </li>
                  <li>
                    <strong className="text-charcoal">Reduce credit card balances.</strong> Credit utilisation — the
                    percentage of your available credit that you are using — significantly affects your score. Aim to
                    keep utilisation below 30%. If you have a £10,000 credit limit, try to keep the balance below
                    £3,000.
                  </li>
                  <li>
                    <strong className="text-charcoal">Pay all bills on time.</strong> Even a single missed payment can
                    drop your score significantly. Set up direct debits for at least the minimum payment on every credit
                    account.
                  </li>
                  <li>
                    <strong className="text-charcoal">Check for errors and correct them.</strong> Mistakes on credit
                    files are more common than you might expect. Check your file with all three agencies and dispute any
                    inaccuracies through their official process.
                  </li>
                  <li>
                    <strong className="text-charcoal">Avoid multiple applications.</strong> Each hard credit search
                    temporarily lowers your score. If you are shopping around for finance, use soft-search quotation
                    tools rather than submitting full applications to multiple lenders.
                  </li>
                  <li>
                    <strong className="text-charcoal">Close unused credit accounts (selectively).</strong> Having too
                    many open credit accounts can count against you, but closing accounts reduces your total available
                    credit, which can increase utilisation. Close accounts you do not need, but keep one or two older
                    accounts open to maintain your credit history length.
                  </li>
                  <li>
                    <strong className="text-charcoal">Disassociate from ex-partners with poor credit.</strong> If you
                    have financial associations from previous relationships (joint accounts that are now closed, for
                    example), you can request a financial disassociation from the credit reference agencies.
                  </li>
                </ol>
              </div>
            </div>

            {/* Soft vs Hard Search */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Soft Search vs Hard Search</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Understanding the difference between soft and hard credit searches is crucial when shopping for car
                  finance:
                </p>
                <p>
                  <strong className="text-charcoal">Soft search (quotation search):</strong> A soft search is a
                  preliminary check that does not appear on your credit file and does not affect your score. It allows
                  lenders to give you an indicative decision and rate without committing to a full application. Many
                  online finance brokers and comparison tools use soft searches. You can do as many soft searches as
                  you like with no consequences.
                </p>
                <p>
                  <strong className="text-charcoal">Hard search (application search):</strong> A hard search is a full
                  credit check that is recorded on your credit file and is visible to other lenders. Each hard search
                  can temporarily reduce your score by a few points. Multiple hard searches in a short period can signal
                  to lenders that you are desperate for credit, which may lead to declined applications or higher rates.
                </p>
                <p>
                  The smart approach is to use soft-search tools to compare offers and narrow your options, then submit a
                  single full application to the lender whose offer you want to accept. Our{" "}
                  <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                    finance calculator
                  </Link>{" "}
                  can help you estimate payments and compare options before approaching a lender.
                </p>
              </div>
            </div>

            {/* How Applications Affect Score */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                How Finance Applications Affect Your Score
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  When you submit a full car finance application, the lender performs a hard search on your credit file.
                  This search is recorded and visible to other lenders for 12 months. The impact on your score is
                  typically modest — a drop of 5 to 10 points — and temporary, recovering within a few months provided
                  you do not make multiple applications.
                </p>
                <p>
                  If you are approved and take out the finance, the new credit agreement itself appears on your file.
                  Initially, this may lower your score slightly (because you have taken on new debt), but as you make
                  on-time payments, the positive payment history will steadily improve your score. After 12 to 18 months
                  of perfect payments, most borrowers see a net positive effect on their credit profile.
                </p>
                <p>
                  If your application is declined, the hard search is still recorded, but the decline itself is not. Other
                  lenders can see that a search was made but not the outcome. However, if they see multiple searches
                  without corresponding new accounts, they may infer that applications were declined, which can affect
                  their willingness to lend.
                </p>
              </div>
            </div>

            {/* Myths Debunked */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Credit Score Myths Debunked</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <ul className="space-y-4">
                  <li>
                    <strong className="text-charcoal">Myth: There is a universal credit blacklist.</strong> There is no
                    such thing as a credit blacklist. Each lender makes its own independent decision based on its own
                    criteria. Being declined by one lender does not mean you will be declined by all.
                  </li>
                  <li>
                    <strong className="text-charcoal">Myth: Checking your own score lowers it.</strong> Checking your
                    own credit score is always a soft search and has zero impact. Check it regularly — at least
                    quarterly — to stay informed and catch errors early.
                  </li>
                  <li>
                    <strong className="text-charcoal">Myth: Earning more money means a higher credit score.</strong>{" "}
                    Your income is not recorded on your credit file and does not directly affect your credit score.
                    Income is relevant to affordability assessments, which lenders conduct separately, but the score
                    itself is based on your credit behaviour, not your earnings.
                  </li>
                  <li>
                    <strong className="text-charcoal">Myth: You need to be in debt to have a good score.</strong> You
                    do not need to carry debt, but you do need to have a credit history. Using a credit card for regular
                    purchases and paying the balance in full each month — never paying interest — is an excellent way to
                    build a strong credit history without incurring any debt cost.
                  </li>
                  <li>
                    <strong className="text-charcoal">Myth: Previous addresses affect your score.</strong> Your credit
                    file is linked to you as an individual, not to your address. Previous occupants of your home cannot
                    affect your credit score. However, if you lived at a previous address with someone who had poor
                    credit and you had joint financial products, that financial association could follow you.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Estimate Your Finance Payments"
        description="Use our free calculator to explore monthly payment estimates for different Range Rover models, deposits and terms."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
