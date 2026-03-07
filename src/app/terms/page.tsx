import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | Range Rover Finance",
  description:
    "Terms and conditions for using the Range Rover Finance website. Please read these terms carefully before using our site, calculators and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumbs items={[{ label: "Terms and Conditions" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-display text-white mb-3">Terms and Conditions</h1>
            <p className="text-white/60 text-sm">Last updated: 7 March 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content space-y-8 text-sm text-slate leading-relaxed">

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">1. Acceptance of Terms</h2>
              <p className="mb-3">
                By accessing and using the Range Rover Finance website at rangeroverfinance.co.uk
                (the &ldquo;Site&rdquo;), you agree to be bound by these Terms and Conditions. If you do not agree
                with any part of these terms, you must not use the Site.
              </p>
              <p>
                These terms apply to all visitors, users and others who access or use the Site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">2. Site Purpose</h2>
              <p className="mb-3">
                The Site is provided for informational purposes only. It is designed to help users understand
                and compare vehicle finance options for Range Rover, Land Rover and Defender vehicles.
              </p>
              <p className="mb-3">
                <strong className="text-charcoal">The information on this Site does not constitute financial advice.</strong>{" "}
                We are not authorised to provide regulated financial advice, and nothing on this Site should
                be interpreted as a recommendation to enter into any particular finance agreement.
              </p>
              <p>
                You should seek independent financial advice from a qualified adviser before making any
                financial decisions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">3. Finance Calculators and Tools</h2>
              <p className="mb-3">
                The finance calculators, comparison tools and cost estimates provided on the Site are for
                illustrative purposes only. They are designed to give approximate indications of potential
                monthly payments and total costs based on the parameters you enter.
              </p>
              <p className="mb-3">
                Calculator results are not finance offers, quotations or guarantees. Actual finance terms,
                interest rates and monthly payments will depend on:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Your individual credit profile and circumstances</li>
                <li>The specific vehicle being financed</li>
                <li>The lender&apos;s criteria and prevailing market conditions</li>
                <li>The deposit, term and finance type selected</li>
              </ul>
              <p>
                We make no warranty or representation that the results produced by our calculators will
                reflect the terms available to you from any lender.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">4. Accuracy of Information</h2>
              <p className="mb-3">
                We endeavour to ensure that the information on the Site is accurate and up to date.
                However, we make no representations or warranties of any kind, express or implied, about
                the completeness, accuracy, reliability, suitability or availability of the information,
                products, services or related graphics contained on the Site.
              </p>
              <p className="mb-3">
                Vehicle prices, specifications, finance rates and availability are subject to change without
                notice. The information presented may not reflect the most current market conditions, and
                we cannot guarantee that prices or rates shown on the Site will be available at the time of
                your enquiry.
              </p>
              <p>
                Any reliance you place on information provided on this Site is strictly at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">5. Credit Broker Status</h2>
              <p className="mb-3">
                Range Rover Finance acts as a credit broker, not a lender. We do not provide finance
                directly. When you submit an enquiry through our Site, we may introduce you to FCA-regulated
                third-party finance brokers and lenders.
              </p>
              <p>
                We may receive a commission or fee from these third parties for successful introductions.
                This does not affect the price you pay or the terms offered to you.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">6. Intellectual Property</h2>
              <p className="mb-3">
                The content on the Site — including text, graphics, logos, icons, images, calculators, tools
                and software — is the property of Range Rover Finance or its content suppliers and is
                protected by United Kingdom and international copyright, trademark and other intellectual
                property laws.
              </p>
              <p className="mb-3">
                You may view, download and print pages from the Site for your own personal, non-commercial
                use, provided you do not modify the content and retain all copyright and proprietary notices.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works from, publicly display,
                or exploit any content from the Site for commercial purposes without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">7. Third-Party Links</h2>
              <p className="mb-3">
                The Site may contain links to third-party websites, including those of finance providers,
                vehicle manufacturers and industry bodies. These links are provided for your convenience only.
              </p>
              <p>
                We have no control over the content, privacy policies or practices of third-party websites
                and accept no responsibility or liability for them. Accessing any linked website is entirely
                at your own risk, and we recommend reviewing the terms and privacy policies of any
                third-party site you visit.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">8. Limitation of Liability</h2>
              <p className="mb-3">
                To the fullest extent permitted by law, Range Rover Finance shall not be liable for any
                direct, indirect, incidental, special, consequential or punitive damages, including but
                not limited to loss of profits, data, use, goodwill or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Your use of, or inability to use, the Site</li>
                <li>Any errors or omissions in the Site&apos;s content</li>
                <li>Any decision made or action taken based on information provided on the Site</li>
                <li>Unauthorised access to or alteration of your data</li>
                <li>The conduct or content of any third party connected through the Site</li>
              </ul>
              <p>
                Nothing in these terms shall exclude or limit our liability for death or personal injury
                caused by our negligence, fraud or fraudulent misrepresentation, or any other liability
                that cannot be excluded or limited by law.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">9. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Range Rover Finance, its officers, directors,
                employees and agents from and against any claims, damages, losses, liabilities and expenses
                (including reasonable legal fees) arising out of or in connection with your use of the Site
                or your breach of these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">10. Trademarks</h2>
              <p>
                Range Rover, Land Rover, Defender, Discovery, Evoque and Velar are registered trademarks
                of Jaguar Land Rover Limited. Range Rover Finance is not affiliated with, endorsed by or
                connected to Jaguar Land Rover Limited. All trademarks referenced on this Site are the
                property of their respective owners.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes will be
                effective immediately upon posting to the Site. Your continued use of the Site after any
                changes constitutes acceptance of the modified terms. We recommend reviewing these terms
                periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">12. Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be invalid or unenforceable
                by a court of competent jurisdiction, the remaining provisions shall remain in full force
                and effect.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">13. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of
                England and Wales. Any disputes arising out of or in connection with these terms shall be
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">14. Contact</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <ul className="mt-3 space-y-1">
                <li>Email: info@rangeroverfinance.co.uk</li>
                <li>Post: Range Rover Finance, [Registered Address]</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
