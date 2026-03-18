import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Disclaimer | Range Rover Finance",
  description:
    "Important disclaimer for Range Rover Finance. This website provides information and tools for research purposes only. We do not provide financial advice or arrange finance.",
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumbs items={[{ label: "Disclaimer" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-display text-white mb-3">Disclaimer</h1>
            <p className="text-white/60 text-sm">Last updated: 18 March 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content space-y-8 text-sm text-slate leading-relaxed">

            <div className="bg-cream rounded-lg p-6 border border-cream-dark">
              <p className="text-charcoal font-semibold mb-3">Important Information</p>
              <p>
                This website provides information and tools for research purposes only. We do not provide
                financial advice or arrange finance. Please read this disclaimer carefully before using
                the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">1. Information Only</h2>
              <p className="mb-3">
                Range Rover Finance is an informational website providing educational content, guides, and
                calculators to help users research and understand vehicle finance options. We do not provide
                financial advice, arrange finance agreements, or act as a credit broker or intermediary.
              </p>
              <p>
                The content on this website is intended for general informational and educational purposes
                only. It should not be treated as financial advice or a recommendation to enter into any
                particular finance agreement. You should seek independent financial advice from a qualified
                adviser before making any financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">2. No Finance Services</h2>
              <p className="mb-3">
                We do not provide finance directly or indirectly. We do not introduce customers to lenders,
                process finance applications, or receive commissions from finance providers. Our tools and
                calculators are provided for estimation and research purposes only.
              </p>
              <p>
                If you wish to obtain vehicle finance, you should approach lenders, dealers, or
                FCA-authorised brokers directly. You can verify any firm&apos;s FCA registration status
                on the Financial Services Register at{" "}
                <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-racing-green underline">
                  register.fca.org.uk
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">3. Calculator Estimates</h2>
              <p className="mb-3">
                Where estimated monthly payments, APR figures, or example calculations are shown on this
                website, they are for illustration purposes only. Calculator results are not finance offers,
                quotations, or guarantees. Actual finance terms, interest rates, and monthly payments will
                depend on your individual circumstances, credit profile, and the specific lender and
                product selected.
              </p>
              <p>
                We make no warranty or representation that the results produced by our calculators will
                reflect the terms available to you from any lender.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">4. Accuracy of Information</h2>
              <p className="mb-3">
                We endeavour to ensure that the information on this website is accurate and up to date.
                However, vehicle prices, specifications, finance rates, tax rates, and regulatory
                information are subject to change without notice.
              </p>
              <p>
                Any reliance you place on information provided on this website is strictly at your own risk.
                We accept no liability for any loss or damage arising from the use of information on this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">5. Finance Subject to Status</h2>
              <p>
                All vehicle finance is subject to status. Approval and terms depend on individual
                circumstances including credit history, income, employment status, and the vehicle
                being financed. The information on this website does not guarantee that any particular
                finance product or rate will be available to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">6. Vehicle Insurance</h2>
              <p>
                If you finance a vehicle through PCP, HP, or lease, you will typically be required to
                maintain comprehensive motor insurance for the duration of the agreement. This is a
                standard condition of most finance agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">7. Early Termination</h2>
              <p className="mb-3">
                Under the Consumer Credit Act 1974, you have a legal right to end most regulated finance
                agreements early. You can voluntarily terminate a Hire Purchase or PCP agreement once you
                have paid at least half the total amount payable. The vehicle must be returned in good
                condition.
              </p>
              <p>
                Lease agreements (PCH) have different termination provisions. Always check the specific
                terms of any agreement before committing.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">8. Mileage and Condition</h2>
              <p className="mb-3">
                PCP and lease agreements include annual mileage limits. If you exceed the agreed mileage,
                excess mileage fees may apply when the vehicle is returned. Vehicles must be returned in
                a condition consistent with fair wear and tear as defined by the BVRLA Fair Wear and
                Tear Guide.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">9. Trademark Notice</h2>
              <p>
                Range Rover, Land Rover, Defender, Discovery, Evoque and Velar are registered trademarks
                of Jaguar Land Rover Limited. Range Rover Finance is an independent website and is not
                affiliated with, endorsed by, or connected to Jaguar Land Rover Limited or any of its
                subsidiaries or authorised dealerships.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">10. Contact</h2>
              <p>
                If you have any questions about this disclaimer, please contact us at
                info@rangeroverfinance.co.uk.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
