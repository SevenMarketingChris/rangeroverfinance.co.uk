import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "How Car Finance Works: A Beginner's Guide | Range Rover Finance",
  description:
    "A complete introduction to car finance for beginners. Learn about PCP, HP, PCH, personal loans, APR, the application process, and your consumer rights.",
};

const faqs = [
  {
    question: "Do I need a good credit score to get car finance?",
    answer:
      "A good credit score helps you secure better interest rates and a wider choice of lenders, but it is not an absolute requirement. There are specialist lenders who cater to applicants with impaired credit, though the rates will be higher. A larger deposit can also improve your chances of approval. Our credit score guide explains how your score affects your options in detail.",
  },
  {
    question: "Can I get car finance if I am self-employed?",
    answer:
      "Yes. Self-employed applicants can obtain car finance, but the process may require additional documentation. Lenders typically want to see at least two years of accounts or tax returns to verify your income. Some lenders specialise in self-employed applicants and may be more flexible in their requirements. A finance broker can help identify the most suitable lenders for your situation.",
  },
  {
    question: "How long does the car finance application process take?",
    answer:
      "A straightforward application can be approved within minutes if you apply online or through a dealer with an automated decisioning system. More complex applications — such as those involving self-employment or non-standard credit histories — may take one to three working days as they require manual underwriting. Having all your documentation ready before you apply speeds up the process considerably.",
  },
  {
    question: "What is the difference between a car finance broker and a dealer?",
    answer:
      "A dealer typically offers finance through one or two lenders (usually the manufacturer's captive finance company and perhaps one alternative). A finance broker searches the whole market — sometimes dozens of lenders — to find the best rate and terms for your circumstances. Brokers are particularly useful for applicants with non-standard credit profiles or those financing high-value vehicles like Range Rovers.",
  },
  {
    question: "Can I get car finance for a used vehicle?",
    answer:
      "Yes, all major finance types — PCP, HP, and personal loans — are available for used vehicles. Many franchised dealers offer approved pre-owned finance with competitive rates. Interest rates on used vehicles tend to be slightly higher than on new vehicles, but the lower purchase price means the monthly payments can be very attractive. There may be age and mileage limits on which used vehicles qualify for finance.",
  },
  {
    question: "What happens if I miss a payment on my car finance?",
    answer:
      "Missing a payment will result in a late payment marker on your credit file, which can affect your credit score for up to six years. The finance company will contact you to arrange payment. If you continue to miss payments, the lender can ultimately repossess the vehicle — though this is a last resort. If you are struggling, contact your lender immediately; they are obliged to treat you fairly and may offer a payment holiday or restructured terms.",
  },
  {
    question: "Is car finance the same as a car loan?",
    answer:
      "Not exactly. A car loan (personal loan) is an unsecured loan from a bank or building society that you use to buy a car — you own the vehicle from day one. Car finance products like PCP and HP are secured against the vehicle, meaning the finance company retains ownership (or has a lien) until the finance is fully paid. Each approach has pros and cons, which we cover in detail in this guide.",
  },
  {
    question: "Do I have to buy the car from a dealer to get finance?",
    answer:
      "For PCP and HP through a dealership, yes — the finance is arranged as part of the purchase. However, you can arrange a personal loan independently and use it to buy from any seller, including private individuals. Some online finance brokers also offer PCP and HP for private sales, though this is less common. Buying from a dealer offers additional consumer protections under the Consumer Rights Act 2015.",
  },
];

export default function HowCarFinanceWorks() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: "How Car Finance Works" }]} />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              How Car Finance Works: A Beginner&apos;s Guide
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              If you are new to car finance or simply want to understand your options before committing to a Range Rover,
              this guide covers everything from the different finance types to the application process, your legal rights,
              and what to watch out for.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Types of Finance */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Types of Car Finance</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  There are four main ways to finance a vehicle in the UK. Each works differently and suits different
                  circumstances. Understanding the key differences is the first step to making a smart finance decision.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Personal Contract Purchase (PCP)</h3>
                <p>
                  PCP is the most popular form of new car finance in the UK, accounting for around 80% of new car
                  finance agreements. You pay a deposit, make fixed monthly payments over a term (usually 24 to 48
                  months), and at the end, you choose whether to pay an optional balloon payment to own the vehicle,
                  hand it back, or trade in. Monthly payments are lower than HP because you are only paying the
                  depreciation, not the full vehicle cost. Mileage limits and condition requirements apply.
                  Our{" "}
                  <Link href="/guides/pcp-explained" className="text-racing-green underline hover:text-racing-green-light">
                    complete PCP guide
                  </Link>{" "}
                  covers this in depth.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Hire Purchase (HP)</h3>
                <p>
                  HP is the most straightforward finance option. You pay a deposit and fixed monthly payments. Once
                  every payment is made, the vehicle is yours. There is no balloon payment, no mileage limits, and no
                  conditions about the vehicle&apos;s condition. Monthly payments are higher than PCP because you are
                  paying the full cost, but you build equity with every payment and own an asset at the end. Read our{" "}
                  <Link href="/guides/pcp-vs-hp" className="text-racing-green underline hover:text-racing-green-light">
                    PCP vs HP comparison
                  </Link>{" "}
                  to understand the differences.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Personal Contract Hire (PCH / Leasing)</h3>
                <p>
                  PCH is a long-term rental. You pay an initial rental (usually three to six months upfront) followed by
                  fixed monthly rentals. At the end, you return the vehicle — you never own it. There is no option to
                  buy. Leasing suits drivers who want predictable costs, always want a new vehicle, and do not mind
                  never building equity. Business users often favour leasing because rentals can be offset against tax.
                  Mileage limits and condition requirements apply.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Personal Loan</h3>
                <p>
                  A personal loan from a bank or building society is an unsecured loan that you use to buy the car. You
                  own the vehicle outright from day one — there is no lien or retention of title by the lender. Rates on
                  personal loans can be very competitive, especially for borrowers with excellent credit. However,
                  personal loans typically max out at around £25,000 to £50,000, which may not cover a new Range Rover.
                  For higher amounts, you may need to combine a personal loan with savings or a deposit.
                </p>
              </div>
            </div>

            {/* Application Process */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                The Application Process: Step by Step
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong className="text-charcoal">Choose your vehicle and finance type.</strong> Decide which Range
                    Rover model you want and which finance type best suits your needs. Use our{" "}
                    <Link href="/calculator" className="text-racing-green underline hover:text-racing-green-light">
                      finance calculator
                    </Link>{" "}
                    to estimate monthly payments and compare options.
                  </li>
                  <li>
                    <strong className="text-charcoal">Get a quotation.</strong> Request a quote from the dealer, a
                    finance broker, or directly from a lender. At this stage, many providers will perform a soft credit
                    search, which does not affect your credit score but gives them enough information to provide an
                    indicative rate and decision.
                  </li>
                  <li>
                    <strong className="text-charcoal">Submit a full application.</strong> If you are happy with the
                    quote, you proceed to a full application. This involves providing personal details, employment
                    information, income details, and consenting to a hard credit search. The lender will verify your
                    identity and assess your creditworthiness and affordability.
                  </li>
                  <li>
                    <strong className="text-charcoal">Receive a decision.</strong> The lender will either approve your
                    application, decline it, or approve it with conditions (such as a larger deposit or lower amount).
                    Automated decisions can come through in minutes; manual underwriting may take one to three days.
                  </li>
                  <li>
                    <strong className="text-charcoal">Review and sign the agreement.</strong> If approved, you will
                    receive a pre-contract information document and the finance agreement itself. Read these carefully.
                    You are not obliged to sign — take as much time as you need. Pay particular attention to the APR,
                    total amount payable, and any fees.
                  </li>
                  <li>
                    <strong className="text-charcoal">Cooling-off period.</strong> Once you have signed, you have a
                    14-day cooling-off period during which you can withdraw from the agreement without penalty. This is
                    a statutory right under the Consumer Credit Act.
                  </li>
                </ol>
              </div>
            </div>

            {/* What Lenders Check */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">What Lenders Check</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  Lenders assess three main areas when evaluating a car finance application:
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Credit History</h3>
                <p>
                  Your credit file shows your borrowing history, including current and past credit agreements, payment
                  history, any defaults or CCJs, and your credit utilisation. Lenders use this to assess how reliably
                  you manage credit. A strong credit history with no missed payments will secure the best rates. Our{" "}
                  <Link href="/guides/credit-score-car-finance" className="text-racing-green underline hover:text-racing-green-light">
                    credit score guide
                  </Link>{" "}
                  explains this in detail.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Affordability</h3>
                <p>
                  Since 2014, the FCA has required lenders to conduct affordability assessments. This means the lender
                  must be satisfied that you can comfortably afford the monthly payments without financial hardship. They
                  consider your income, existing financial commitments (rent, mortgage, other credit), and essential
                  living costs. Simply having a good credit score is not enough — the lender must be confident that the
                  payments are sustainable for you.
                </p>

                <h3 className="text-lg font-display text-charcoal mt-6 mb-2">Employment and Stability</h3>
                <p>
                  Lenders prefer applicants with stable employment. Being in permanent employment for 12 months or more
                  is viewed favourably. Self-employed applicants are typically asked for two or more years of accounts
                  or tax returns. Contract workers may need to demonstrate a track record of continuous contracts.
                  The address history is also considered — frequent moves can be seen as a risk factor.
                </p>
              </div>
            </div>

            {/* Documentation Needed */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Documentation You Will Need</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  While requirements vary by lender, you should have the following ready:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valid UK driving licence (full or provisional)</li>
                  <li>Proof of address (utility bill, bank statement, or council tax bill dated within the last three months)</li>
                  <li>Proof of income (three months of payslips for employed applicants, or two years of accounts/SA302 tax computations for self-employed applicants)</li>
                  <li>Bank statements (typically the last three months, showing income and outgoings)</li>
                  <li>Details of existing financial commitments (mortgage/rent, other loans, credit cards)</li>
                </ul>
                <p>
                  Having these documents prepared before you apply ensures a smooth process and avoids delays in
                  underwriting.
                </p>
              </div>
            </div>

            {/* APR Explained */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">APR Explained: What It Really Means</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  APR stands for Annual Percentage Rate. It is the standardised measure of the total cost of borrowing,
                  expressed as a yearly rate. APR includes the interest rate plus any mandatory fees, making it the most
                  reliable figure for comparing finance offers from different providers.
                </p>
                <p>
                  <strong className="text-charcoal">Flat rate vs APR:</strong> Some dealers and lenders quote a
                  &quot;flat rate&quot; rather than an APR. A flat rate applies the interest to the original loan amount
                  for the entire term, ignoring the fact that you are paying down the balance each month. As a result, a
                  flat rate always appears lower than the equivalent APR. For example, a flat rate of 3.5% is roughly
                  equivalent to an APR of 6.5% to 7%. Always ask for the APR — it is the legally required comparison
                  measure and gives you the true cost.
                </p>
                <p>
                  <strong className="text-charcoal">Representative vs personal APR:</strong> When a lender advertises a
                  rate, it is typically the &quot;representative APR&quot; — the rate that at least 51% of successful
                  applicants will receive. The remaining 49% may receive a higher rate based on their individual credit
                  profile. Until you apply and receive a personal quote, you will not know your exact rate.
                </p>
              </div>
            </div>

            {/* Fixed vs Variable */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Fixed vs Variable Rates</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The vast majority of car finance agreements in the UK use fixed interest rates. This means your
                  monthly payment is set at the start and does not change throughout the term, regardless of what
                  happens to the Bank of England base rate or market interest rates. Fixed rates provide certainty and
                  make budgeting straightforward.
                </p>
                <p>
                  Variable rate car finance exists but is uncommon. With a variable rate, your monthly payment can
                  change if the underlying benchmark rate moves. While variable rates may start lower than fixed rates,
                  they carry the risk of increases. For a high-value vehicle like a Range Rover, where monthly payments
                  are already substantial, most buyers prefer the predictability of a fixed rate.
                </p>
              </div>
            </div>

            {/* Role of the FCA */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">
                The Role of the FCA
              </h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The Financial Conduct Authority (FCA) regulates consumer car finance in the UK. All lenders, brokers,
                  and dealers who arrange finance must be authorised by the FCA. This regulation provides important
                  protections:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lenders must conduct affordability assessments to ensure you can sustain the payments</li>
                  <li>Pre-contract information must be provided so you understand the terms before signing</li>
                  <li>Advertisements must show representative APR and the total cost of credit</li>
                  <li>Complaints can be escalated to the Financial Ombudsman Service if not resolved by the lender</li>
                  <li>Firms must treat customers fairly, particularly those in financial difficulty</li>
                </ul>
                <p>
                  You can check whether a finance provider is FCA-authorised by searching the Financial Services
                  Register on the FCA website. Never enter into a finance agreement with an unregulated firm.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">Your Rights as a Consumer</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  As a car finance customer, you have several important legal rights:
                </p>
                <ul className="list-disc pl-6 space-y-3">
                  <li>
                    <strong className="text-charcoal">14-day cooling-off period:</strong> After signing a finance
                    agreement, you have 14 days to change your mind and withdraw without penalty. The finance company
                    will expect any funds already advanced to be repaid, but there is no early termination charge.
                  </li>
                  <li>
                    <strong className="text-charcoal">Voluntary termination:</strong> Under Section 99 of the Consumer
                    Credit Act 1974, you can voluntarily terminate a PCP or HP agreement once you have paid 50% of the
                    total amount payable. You return the vehicle and owe nothing further (subject to fair condition).
                  </li>
                  <li>
                    <strong className="text-charcoal">Early settlement:</strong> You have the right to{" "}
                    <Link href="/guides/early-settlement" className="text-racing-green underline hover:text-racing-green-light">
                      settle your finance early
                    </Link>{" "}
                    at any time. The lender must provide a settlement figure within 12 working days of your request, and
                    you are entitled to a rebate on future interest.
                  </li>
                  <li>
                    <strong className="text-charcoal">Section 75 protection:</strong> If you pay your deposit by credit
                    card (even a small portion), you gain additional protection under Section 75 of the Consumer Credit
                    Act. The credit card company becomes jointly liable with the dealer for any breach of contract or
                    misrepresentation.
                  </li>
                  <li>
                    <strong className="text-charcoal">Fair treatment:</strong> If you experience financial difficulty
                    during your agreement, the lender is required to treat you fairly and consider options such as
                    reduced payments, payment holidays, or extended terms.
                  </li>
                </ul>
              </div>
            </div>

            {/* The Cooling-Off Period */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-4">The Cooling-Off Period</h2>
              <div className="space-y-4 text-sm text-slate leading-relaxed">
                <p>
                  The 14-day cooling-off period is one of the most valuable consumer protections in car finance. It
                  applies to all regulated credit agreements, including PCP, HP, and personal loans. During this period,
                  you can withdraw from the agreement for any reason — you do not need to provide justification.
                </p>
                <p>
                  If you withdraw within the cooling-off period, you must repay any funds advanced (i.e., the amount
                  the lender paid to the dealer for the vehicle) plus interest accrued up to the date of repayment. You
                  will not be charged any early termination fees. In practice, this means you would need to either
                  return the vehicle and arrange alternative funding, or pay the full purchase price from other sources.
                </p>
                <p>
                  The cooling-off period is particularly useful if you feel you made a hasty decision, if you received
                  a better finance offer from another provider, or if your circumstances changed shortly after signing.
                  It provides a genuine safety net that removes the pressure of making an irreversible decision at the
                  point of sale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Explore Your Finance Options?"
        description="Whether you are a first-time buyer or an experienced motorist, our specialists can help you find the right finance for your Range Rover."
      />
    </>
  );
}
