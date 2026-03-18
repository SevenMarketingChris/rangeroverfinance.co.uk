import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { ModelCard } from "@/components/ModelCard";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { models } from "@/lib/models";
import { OrganizationSchema, WebsiteSchema, FAQSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Range Rover Finance UK | Compare PCP, HP & Lease Deals | Free Calculator",
  description:
    "Compare Range Rover finance deals across PCP, HP and lease options. Free calculator for all models including Range Rover, Sport, Evoque, Velar, Discovery and Defender.",
  openGraph: {
    title: "Range Rover Finance UK | Compare PCP, HP & Lease Deals",
    description:
      "Compare Range Rover finance deals across PCP, HP and lease options. Free calculator for all models.",
    type: "website",
    url: "https://rangeroverfinance.co.uk",
  },
};

const homepageFaqs = [
  {
    question: "What types of finance are available for a Range Rover?",
    answer:
      "The three main finance options are PCP (Personal Contract Purchase), HP (Hire Purchase) and lease (PCH/BCH). PCP offers lower monthly payments with a balloon payment at the end, HP lets you own the vehicle outright once all payments are made, and leasing provides fixed monthly costs with no ownership. Each has distinct advantages depending on your circumstances.",
  },
  {
    question: "How much deposit do I need for Range Rover finance?",
    answer:
      "Deposit requirements typically range from 10% to 20% of the vehicle price. Some PCP and lease deals are available with lower initial payments. A larger deposit reduces monthly payments and may secure a better interest rate. Our calculator lets you adjust the deposit to see how it affects your payments.",
  },
  {
    question: "What credit score do I need to finance a Range Rover?",
    answer:
      "Most mainstream lenders require a good to excellent credit score for Range Rover finance given the high vehicle values. Specialist lenders may offer finance to those with less-than-perfect credit at higher interest rates. Income, employment stability and existing commitments also play a significant role in approval decisions.",
  },
  {
    question: "Is PCP or HP better for a Range Rover?",
    answer:
      "PCP is the most popular choice because it offers lower monthly payments and flexibility at the end of the term. You can hand the car back, part-exchange, or pay the balloon to own it. HP costs more per month but means you own the car outright with no balloon payment. PCP suits those who change cars every 3-4 years; HP is better for long-term ownership.",
  },
  {
    question: "Can I finance a used Range Rover?",
    answer:
      "Yes, PCP and HP finance are both available on used Range Rovers. Used deals can offer excellent value, particularly on models 1-2 years old where initial depreciation has already occurred. Interest rates on used vehicles may be slightly higher, but the lower purchase price often results in more affordable monthly payments.",
  },
  {
    question: "Are the calculator results an actual finance quote?",
    answer:
      "No, our calculator provides estimates to help you understand approximate monthly payments and total costs. Actual finance terms depend on your individual circumstances, credit profile, the specific vehicle, and lender criteria. Use the calculator as a research tool to compare options and understand what different finance structures might cost before approaching lenders or dealers directly.",
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebsiteSchema />
      <FAQSchema faqs={homepageFaqs} />

      {/* Hero */}
      <section className="relative bg-rr-black overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-rr-black via-rr-black-light/50 to-rr-black" />
        <div className="absolute inset-0 hero-lineup-ambient" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-16">
          <div className="relative">
            {/* Text content — left */}
            <div className="lg:w-[50%] relative z-10">
              <p className="text-[11px] tracking-[0.4em] text-rr-accent uppercase mb-6">
                Finance Comparison
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-light text-white leading-[1.1] tracking-tight">
                Range Rover
                <br />
                Finance
              </h1>
              <p className="mt-8 text-[15px] text-white/40 leading-relaxed max-w-lg">
                Compare PCP, HP and lease options across the complete Range Rover
                and Land Rover lineup. Free calculator and guides.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/calculator"
                  className="inline-flex items-center justify-center px-10 py-4 bg-white text-rr-black text-[11px] tracking-[0.25em] uppercase hover:bg-rr-frost transition-colors duration-300"
                >
                  Use Calculator
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center px-10 py-4 border border-white/15 text-white text-[11px] tracking-[0.25em] uppercase hover:bg-white/5 transition-all duration-300"
                >
                  Read Guides
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-16 lg:gap-20 mt-14">
                {[
                  { value: "7", label: "Models" },
                  { value: "3", label: "Finance Types" },
                  { value: "Free", label: "Calculator" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl lg:text-4xl font-light text-white">{stat.value}</p>
                    <p className="text-[10px] tracking-[0.3em] text-white/25 mt-2 uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Range Rover — right, absolutely positioned so it doesn't push into text */}
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[5%] w-[40%] h-[420px]">
              <div className="hero-car-slot hero-car-hero absolute bottom-0 right-0 w-full h-full" style={{ animationDelay: "0.1s" }}>
                <Image src="/images/models/range-rover.png" alt="Range Rover" fill className="object-contain object-right-bottom" sizes="35vw" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 lg:py-28 bg-rr-frost">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] text-rr-silver uppercase mb-4">Tools</p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-rr-black">
              Calculate Your Monthly Payment
            </h2>
            <p className="mt-4 text-[15px] text-rr-silver max-w-xl mx-auto leading-relaxed">
              Adjust vehicle price, deposit, term and interest rate to see estimated
              payments across PCP, HP and lease options.
            </p>
          </div>
          <FinanceCalculator />
        </div>
      </section>

      {/* Models */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.4em] text-rr-silver uppercase mb-4">The Range</p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-rr-black">
              Finance Across Every Model
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-rr-mist border border-rr-mist">
            {models.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-rr-frost border-y border-rr-mist">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.4em] text-rr-silver uppercase mb-4">Process</p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-rr-black">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-rr-mist">
            {[
              {
                step: "01",
                title: "Choose Your Model",
                description:
                  "Browse the full lineup to find the model that suits your lifestyle and budget.",
              },
              {
                step: "02",
                title: "Calculate Payment",
                description:
                  "Use our calculator to compare PCP, HP and lease payments. Adjust to suit your needs.",
              },
              {
                step: "03",
                title: "Compare Options",
                description:
                  "Review PCP, HP and lease side by side. Use our guides to understand which option suits you best.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center px-8 lg:px-12 py-8 md:py-0">
                <span className="text-[11px] tracking-[0.4em] text-rr-accent">{item.step}</span>
                <h3 className="text-[17px] font-light text-rr-black mt-4 mb-3 tracking-wide">{item.title}</h3>
                <p className="text-[13px] text-rr-silver leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.4em] text-rr-silver uppercase mb-4">Why Us</p>
            <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-rr-black">
              Straightforward. Transparent. Tailored.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rr-mist">
            {[
              {
                title: "Completely Free",
                description: "All our tools, calculators and guides are free to use with no sign-up required.",
              },
              {
                title: "All Finance Types",
                description: "Compare PCP, HP and lease options side by side in one place.",
              },
              {
                title: "Every Model",
                description: "Full coverage from the Evoque to the flagship Range Rover.",
              },
              {
                title: "In-Depth Guides",
                description: "Clear, detailed guides to help you understand every finance option.",
              },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-10 text-center">
                <h3 className="text-[13px] tracking-[0.15em] text-rr-black uppercase mb-3">{feature.title}</h3>
                <p className="text-[13px] text-rr-silver leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection title="Frequently Asked Questions" faqs={homepageFaqs} />
      <CTASection
        title="Ready to Research Your Finance Options?"
        description="Try our free calculator to estimate monthly payments across PCP, HP and lease."
        buttonText="Use Calculator"
        buttonHref="/calculator"
      />
    </>
  );
}
