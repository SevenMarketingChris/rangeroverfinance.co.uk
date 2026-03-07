import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Range Rover Finance",
  description:
    "Privacy policy for Range Rover Finance. Learn how we collect, use and protect your personal data in accordance with GDPR and UK data protection law.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-display text-white mb-3">Privacy Policy</h1>
            <p className="text-white/60 text-sm">Last updated: 7 March 2026</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="legal-content space-y-8 text-sm text-slate leading-relaxed">

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">1. Introduction</h2>
              <p className="mb-3">
                Range Rover Finance (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your
                personal data. This privacy policy explains how we collect, use, store and share your personal
                information when you use our website at rangeroverfinance.co.uk (the &ldquo;Site&rdquo;).
              </p>
              <p>
                We comply with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018,
                and the Privacy and Electronic Communications Regulations 2003 (PECR).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">2. Data Controller</h2>
              <p>
                Range Rover Finance is the data controller responsible for your personal data. If you have any
                questions about this policy or our data practices, you can contact us at:
              </p>
              <ul className="mt-3 space-y-1">
                <li>Email: privacy@rangeroverfinance.co.uk</li>
                <li>Post: Range Rover Finance, [Registered Address]</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">3. What Data We Collect</h2>
              <p className="mb-3">We may collect and process the following categories of personal data:</p>

              <h3 className="font-semibold text-charcoal mt-4 mb-2">3.1 Information you provide directly</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Full name (first name and surname)</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Vehicle preferences (model, finance type, budget range)</li>
                <li>Deposit amount and desired monthly budget</li>
                <li>Employment status</li>
                <li>Any additional information you include in free-text fields</li>
              </ul>

              <h3 className="font-semibold text-charcoal mt-4 mb-2">3.2 Information collected automatically</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent on the Site</li>
                <li>Device type and screen resolution</li>
                <li>Cookie identifiers (see Section 8)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">4. How We Use Your Data</h2>
              <p className="mb-3">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>To process your finance enquiry and provide you with relevant quotations</li>
                <li>To share your details with FCA-regulated finance brokers and lenders who can assist with your enquiry</li>
                <li>To communicate with you about your enquiry by telephone, email or other contact method you have provided</li>
                <li>To improve our website, tools and services</li>
                <li>To analyse usage patterns and optimise user experience</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">5. Legal Basis for Processing</h2>
              <p className="mb-3">We process your personal data on the following legal bases:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Consent:</strong> When you submit an enquiry form, you consent to us
                  processing your data for the purposes described. You may withdraw consent at any time.
                </li>
                <li>
                  <strong className="text-charcoal">Legitimate interests:</strong> We have a legitimate interest in analysing
                  Site usage to improve our services, provided this does not override your rights and freedoms.
                </li>
                <li>
                  <strong className="text-charcoal">Legal obligation:</strong> We may process data where required by law,
                  for example to comply with anti-money laundering regulations or FCA requirements.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">6. Third-Party Sharing</h2>
              <p className="mb-3">We may share your personal data with the following categories of third parties:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Finance brokers and lenders:</strong> When you submit a finance
                  enquiry, we share your details with FCA-regulated finance partners who can provide you with
                  quotations. These partners become independent data controllers for the data they receive.
                </li>
                <li>
                  <strong className="text-charcoal">Analytics providers:</strong> We use analytics services (such as
                  Google Analytics) to understand how visitors use our Site. These services may collect data
                  through cookies and similar technologies.
                </li>
                <li>
                  <strong className="text-charcoal">Hosting and technology providers:</strong> Our website is hosted by
                  third-party providers who process data on our behalf under data processing agreements.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell your personal data to third parties. We do not share your data with any party
                for marketing purposes without your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">7. Data Retention</h2>
              <p className="mb-3">We retain your personal data for the following periods:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Finance enquiry data: 36 months from the date of your last interaction with us</li>
                <li>Analytics data: 26 months (in line with Google Analytics default retention)</li>
                <li>Cookie consent records: 12 months from the date consent was given</li>
              </ul>
              <p className="mt-3">
                After the applicable retention period, your data is securely deleted or anonymised. You may
                request earlier deletion at any time (see Section 9).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">8. Cookies</h2>
              <p className="mb-3">
                Our Site uses cookies and similar technologies. Cookies are small text files placed on your
                device when you visit the Site.
              </p>

              <h3 className="font-semibold text-charcoal mt-4 mb-2">8.1 Essential cookies</h3>
              <p className="mb-3">
                These cookies are necessary for the Site to function and cannot be switched off. They are
                typically set in response to actions you take, such as setting your privacy preferences or
                filling in forms.
              </p>

              <h3 className="font-semibold text-charcoal mt-4 mb-2">8.2 Analytics cookies</h3>
              <p className="mb-3">
                These cookies allow us to count visits and traffic sources so we can measure and improve
                Site performance. They help us understand which pages are most popular and how visitors
                navigate the Site. All information collected is aggregated and anonymous.
              </p>

              <h3 className="font-semibold text-charcoal mt-4 mb-2">8.3 Managing cookies</h3>
              <p>
                You can control and manage cookies through your browser settings. Please note that disabling
                certain cookies may affect the functionality of the Site. For more information about cookies,
                visit{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-racing-green underline">
                  www.allaboutcookies.org
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">9. Your Rights</h2>
              <p className="mb-3">Under UK GDPR, you have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong className="text-charcoal">Right of access:</strong> You may request a copy of the personal
                  data we hold about you.
                </li>
                <li>
                  <strong className="text-charcoal">Right to rectification:</strong> You may request that we correct
                  any inaccurate or incomplete data.
                </li>
                <li>
                  <strong className="text-charcoal">Right to erasure:</strong> You may request that we delete your
                  personal data, subject to any legal obligations we may have to retain it.
                </li>
                <li>
                  <strong className="text-charcoal">Right to restrict processing:</strong> You may request that we
                  restrict the processing of your data in certain circumstances.
                </li>
                <li>
                  <strong className="text-charcoal">Right to data portability:</strong> You may request that we
                  provide your data in a structured, commonly used, machine-readable format.
                </li>
                <li>
                  <strong className="text-charcoal">Right to object:</strong> You may object to processing based on
                  legitimate interests or for direct marketing purposes.
                </li>
                <li>
                  <strong className="text-charcoal">Right to withdraw consent:</strong> Where processing is based on
                  consent, you may withdraw that consent at any time without affecting the lawfulness of
                  processing carried out before withdrawal.
                </li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at privacy@rangeroverfinance.co.uk. We will
                respond to your request within one month.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">10. Data Security</h2>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data
                against unauthorised access, alteration, disclosure or destruction. These measures include
                encryption of data in transit (SSL/TLS), access controls, and regular security reviews.
                However, no method of transmission over the internet is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">11. International Transfers</h2>
              <p>
                Your data is primarily processed within the United Kingdom. Where data is transferred outside
                the UK (for example, to analytics providers based in the United States), we ensure appropriate
                safeguards are in place, such as Standard Contractual Clauses or adequacy decisions recognised
                by the UK government.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">12. Children&apos;s Privacy</h2>
              <p>
                Our Site and services are not directed at individuals under the age of 18. We do not knowingly
                collect personal data from children. If you believe a child has provided us with personal data,
                please contact us and we will take steps to delete it.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">13. Complaints</h2>
              <p>
                If you are unhappy with how we have handled your personal data, you have the right to lodge a
                complaint with the Information Commissioner&apos;s Office (ICO):
              </p>
              <ul className="mt-3 space-y-1">
                <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-racing-green underline">ico.org.uk</a></li>
                <li>Telephone: 0303 123 1113</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display text-charcoal mb-3">14. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time to reflect changes in our practices or
                applicable law. Any changes will be posted on this page with an updated &ldquo;last updated&rdquo;
                date. We encourage you to review this policy periodically.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
