import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Finance Disclaimer | Range Rover Finance",
  description:
    "Important finance disclaimer for Range Rover Finance. We act as a credit broker, not a lender. Finance is subject to status. Read our full regulatory disclosures.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumbs items={[{ label: "Finance Disclaimer" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-display text-white mb-3">Finance Disclaimer</h1>
            <p className="text-white/60 text-sm">Last updated: 7 March 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content space-y-8 text-sm text-slate leading-relaxed">

            <div className="bg-cream rounded-lg p-6 border border-cream-dark">
              <p className="text-charcoal font-semibold mb-3">Important Information</p>
              <p>
                Please read this disclaimer carefully. It contains important information about the nature
                of our service and your obligations when considering vehicle finance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">1. Credit Broker, Not a Lender</h2>
              <p className="mb-3">
                Range Rover Finance acts as a credit broker, not a lender. We do not provide finance directly.
                We introduce customers to a panel of FCA-regulated finance providers who may be able to
                assist with your vehicle finance requirements.
              </p>
              <p>
                We may receive a commission or fee from finance providers for successful introductions.
                Commission arrangements do not affect the interest rate or terms offered to you by a lender.
                The amount of commission we receive may vary depending on the lender and the product selected.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">2. FCA Regulation</h2>
              <p className="mb-3">
                All finance providers on our panel are authorised and regulated by the Financial Conduct
                Authority (FCA). You can verify any firm&apos;s FCA registration status on the Financial
                Services Register at{" "}
                <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-racing-green underline">
                  register.fca.org.uk
                </a>.
              </p>
              <p>
                Range Rover Finance is not authorised to provide regulated financial advice. The information
                on our website is for informational purposes only and should not be treated as financial
                advice or a recommendation to enter into any particular finance agreement.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">3. Representative APR Examples</h2>
              <p className="mb-3">
                Where representative APR figures or example monthly payments are shown on this website,
                they are for illustration purposes only and based on the following assumptions unless
                otherwise stated:
              </p>
              <div className="bg-cream rounded-lg p-5 my-4">
                <p className="text-charcoal font-semibold mb-3">Representative Example (PCP)</p>
                <ul className="space-y-1">
                  <li>Vehicle price: £50,000</li>
                  <li>Deposit: £7,500 (15%)</li>
                  <li>Amount of credit: £42,500</li>
                  <li>Term: 48 months</li>
                  <li>48 monthly payments of £449.00</li>
                  <li>Optional final payment (balloon): £22,500</li>
                  <li>Total amount payable: £51,552</li>
                  <li>Representative APR: 6.9% APR</li>
                  <li>Fixed rate of interest: 6.9% p.a.</li>
                </ul>
              </div>
              <p className="mb-3">
                At least 51% of applications must receive the representative APR or a lower rate for this
                rate to be advertised. The actual rate you receive may differ and will depend on your
                individual circumstances and credit profile.
              </p>
              <p>
                Rates and payments shown on calculators and comparison tools are estimated figures only
                and may not reflect the actual rates available to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">4. Finance Subject to Status</h2>
              <p className="mb-3">
                All finance is subject to status. This means that approval for finance and the terms
                offered (including interest rate, deposit requirements and term length) will depend on
                your individual circumstances, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Your credit history and credit score</li>
                <li>Your income and employment status</li>
                <li>Your existing financial commitments</li>
                <li>Your residential status and address history</li>
                <li>The age and value of the vehicle being financed</li>
              </ul>
              <p>
                Submitting an enquiry does not guarantee that you will be offered finance, nor does it
                guarantee any particular terms or rate.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">5. Written Quotations</h2>
              <p>
                Written quotations are available on request from our finance partners. Before signing any
                finance agreement, you will receive a pre-contract credit information document and a credit
                agreement setting out the full terms and conditions. We strongly recommend reading these
                documents in full before proceeding.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">6. Eligibility Requirements</h2>
              <p className="mb-3">To be eligible for vehicle finance, applicants must typically meet the following criteria:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Be aged 18 or over (21 or over for some lenders)</li>
                <li>Be a UK resident</li>
                <li>Hold a valid UK driving licence</li>
                <li>Be able to demonstrate an ability to make the agreed monthly payments</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">7. Guarantors</h2>
              <p>
                Some finance applications may require a guarantor. A guarantor is a person who agrees to
                make the payments if the primary borrower is unable to do so. Your finance provider will
                advise you if a guarantor is required as part of your application. Guarantors should be
                aware that they will be liable for the full amount of the agreement if the borrower defaults.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">8. Vehicle Insurance</h2>
              <p>
                If you finance a vehicle through PCP, HP or lease, you will be required to maintain
                comprehensive motor insurance for the duration of the agreement. This is a condition of
                virtually all finance agreements. Failure to maintain adequate insurance may constitute
                a breach of your finance contract.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">9. Early Termination</h2>
              <p className="mb-3">
                You have a legal right to end most regulated finance agreements early. Under the Consumer
                Credit Act 1974, you can voluntarily terminate a Hire Purchase or PCP agreement once you
                have paid at least half the total amount payable. The vehicle must be returned in good
                condition.
              </p>
              <p className="mb-3">
                Early settlement (paying off the finance early rather than terminating) is also an option.
                Your lender will provide a settlement figure on request, which may include an early
                settlement fee.
              </p>
              <p>
                Lease agreements (PCH) have different termination provisions. Early termination of a lease
                typically incurs significant penalties. Check the specific terms of your agreement before
                committing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">10. Mileage and Condition</h2>
              <p className="mb-3">
                PCP and lease agreements include annual mileage limits. If you exceed the agreed mileage,
                you will be charged an excess mileage fee (typically between 5p and 30p per mile for
                premium vehicles) when the vehicle is returned.
              </p>
              <p>
                Vehicles must be returned in a condition consistent with fair wear and tear as defined
                by the BVRLA Fair Wear and Tear Guide. Charges may apply for damage beyond fair wear
                and tear.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">11. Cooling-Off Period</h2>
              <p>
                Under the Consumer Credit Act 1974, you have a 14-day cooling-off period from the date
                you sign a regulated finance agreement. During this period, you may withdraw from the
                agreement without giving a reason. You must repay the credit and any interest accrued
                within 30 days of giving notice of withdrawal.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">12. Complaints</h2>
              <p className="mb-3">
                If you have a complaint about the service provided by Range Rover Finance, please contact
                us at complaints@rangeroverfinance.co.uk. We will acknowledge your complaint within 3
                working days and aim to resolve it within 8 weeks.
              </p>
              <p>
                If you are dissatisfied with our response, or if we have not resolved your complaint within
                8 weeks, you may refer your complaint to the Financial Ombudsman Service:
              </p>
              <ul className="mt-3 space-y-1">
                <li>Website: <a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-racing-green underline">financial-ombudsman.org.uk</a></li>
                <li>Telephone: 0800 023 4567</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">13. Trademark Notice</h2>
              <p>
                Range Rover, Land Rover, Defender, Discovery, Evoque and Velar are registered trademarks
                of Jaguar Land Rover Limited. Range Rover Finance is an independent service and is not
                affiliated with, endorsed by or connected to Jaguar Land Rover Limited or any of its
                subsidiaries or authorised dealerships.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
