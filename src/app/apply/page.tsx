import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Get a Free Range Rover Finance Quote | No Obligation | Quick & Easy",
  description:
    "Get a free, no-obligation Range Rover finance quote in minutes. Compare PCP, HP and lease options from FCA-regulated partners. No credit check to get a quote.",
  openGraph: {
    title: "Get a Free Range Rover Finance Quote | No Obligation",
    description:
      "Get a free, no-obligation Range Rover finance quote in minutes. Compare PCP, HP and lease options from FCA-regulated partners.",
    type: "website",
    url: "https://rangeroverfinance.co.uk/apply",
  },
};

const trustSignals = [
  {
    icon: (
      <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: "No obligation",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    text: "No credit check to get a quote",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    text: "All finance types compared",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: "Expert guidance",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    text: "FCA regulated partners",
  },
];

const applicationFaqs = [
  {
    question: "Is there a credit check when I request a quote?",
    answer:
      "No. When you submit your details through our form, we do not perform a credit check. A soft or hard credit search will only be carried out once you choose to proceed with a specific finance application through one of our lending partners, and you will always be informed before this happens.",
  },
  {
    question: "How long does it take to get a quote?",
    answer:
      "Most quotes are returned within 24 hours. Our finance specialists review your details, match you with suitable lenders, and present you with the best available options. In many cases, you will receive your initial options the same working day.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "We ask for basic contact details, your preferred model and finance type, an indication of your budget and deposit, and your employment status. This allows us to match you with appropriate lenders. You do not need to provide bank details, payslips or proof of address at the quote stage.",
  },
  {
    question: "Am I committed to anything by requesting a quote?",
    answer:
      "Absolutely not. Requesting a quote is completely free and carries no obligation. You are under no pressure to proceed with any offer presented to you. Our role is to find you the best options — the decision is always yours.",
  },
  {
    question: "Can I get finance if I have bad credit?",
    answer:
      "We work with a panel of lenders, including specialists who consider applications from people with imperfect credit histories. While interest rates may be higher, we will always be transparent about the options available to you. Visit our bad credit finance page for more details.",
  },
  {
    question: "Can I use my quote for a used Range Rover?",
    answer:
      "Yes. Our finance options cover both new and used Range Rover, Land Rover and Defender models. Simply indicate the model and approximate value in the form, and we will source appropriate finance options for you.",
  },
];

export default function ApplyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pb-16">
          <Breadcrumbs items={[{ label: "Get a Quote" }]} />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-display text-white mb-4">
              Get Your Free Finance Quote
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Tell us about your ideal Range Rover and we will find the best finance options for you.
              No obligation, no credit check, no hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar Section */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Lead Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:p-10">
                <LeadForm />
              </div>
            </div>

            {/* Trust Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-8">
                <h3 className="text-lg font-display text-charcoal mb-6">Why request a quote with us?</h3>
                <div className="space-y-5">
                  {trustSignals.map((signal, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5">{signal.icon}</div>
                      <p className="text-sm text-charcoal-light leading-relaxed">{signal.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-slate leading-relaxed">
                    We are a credit broker, not a lender. Finance is subject to status. Terms and conditions apply.
                    Applicants must be 18 or over. Written quotations are available on request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal text-center mb-12">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "We Review Your Details",
                description:
                  "Our finance specialists assess your requirements and match you with the most suitable lenders from our panel.",
              },
              {
                step: "2",
                title: "Receive Your Options",
                description:
                  "We present you with the best available finance deals, clearly laid out so you can compare rates, terms and monthly payments.",
              },
              {
                step: "3",
                title: "Choose Your Deal",
                description:
                  "Pick the option that suits you best — or walk away with no obligation. It is entirely your decision, with zero pressure.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-racing-green text-white flex items-center justify-center text-xl font-display mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQSection title="Application FAQs" faqs={applicationFaqs} />
    </>
  );
}
