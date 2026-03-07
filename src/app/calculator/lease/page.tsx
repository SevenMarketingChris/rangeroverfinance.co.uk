import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Range Rover Lease Calculator | Personal Contract Hire Payments UK",
  description:
    "Calculate Range Rover lease payments with our free PCH calculator. Compare personal and business lease costs, mileage options and maintenance packages for all models.",
};

const faqs = [
  {
    question: "What is the difference between personal and business leasing?",
    answer:
      "Personal Contract Hire (PCH) is for private individuals, and the monthly payments include VAT. Business Contract Hire (BCH) is for limited companies, sole traders, and partnerships, with payments quoted excluding VAT, which can be partially or fully reclaimed depending on the vehicle's CO2 emissions and business usage. Business leasing offers significant tax advantages — monthly payments can be offset against corporation tax or income tax as a legitimate business expense, and there is no Benefit in Kind liability on a company lease paid for by the business.",
  },
  {
    question: "What happens if I exceed the mileage limit on my lease?",
    answer:
      "If you exceed the agreed annual mileage allowance, you will be charged an excess mileage fee when you return the vehicle. This is typically between 5p and 20p per mile, depending on the vehicle and the leasing company. On a Range Rover, excess mileage charges tend to be at the higher end of this range. If you realise during the lease that you are going to exceed your mileage, contact the leasing company — it is usually cheaper to increase your mileage allowance mid-contract than to pay the excess charges at the end.",
  },
  {
    question: "Can I include maintenance in my Range Rover lease?",
    answer:
      "Yes, most leasing companies offer a maintenance package that can be added to your monthly payment. This typically covers all scheduled servicing, routine maintenance, replacement tyres, and breakdown cover. A maintenance package turns your motoring costs into a single, predictable monthly figure. For Range Rovers, maintenance packages are particularly valuable because servicing and parts costs are higher than average. The package spreads these costs evenly across the lease term rather than presenting you with large bills when services fall due.",
  },
  {
    question: "What is fair wear and tear on a leased Range Rover?",
    answer:
      "Fair wear and tear covers the normal deterioration that occurs through everyday use of a vehicle. Minor stone chips, light scratches that do not penetrate the primer, small dents within accepted size limits, and normal interior wear are generally acceptable. The British Vehicle Rental and Leasing Association (BVRLA) publishes detailed fair wear and tear guidelines that most leasing companies follow. Damage beyond these standards — such as dented body panels, cracked windscreens, torn upholstery, or alloy wheel kerbing — will result in end-of-lease charges. It is worth reviewing the BVRLA guide before returning your vehicle.",
  },
  {
    question: "Can I end a Range Rover lease early?",
    answer:
      "Early termination of a lease is possible but comes with costs. You will typically be required to pay at least 50% of the remaining rentals as an early termination charge, though some contracts require full payment of all outstanding rentals. Some leasing companies offer more flexible contracts with lower early termination penalties, but these usually come with higher monthly payments. If your circumstances change, speak to your leasing company as early as possible — they may offer solutions such as extending the contract, transferring the lease, or adjusting the terms.",
  },
  {
    question: "Is leasing a Range Rover good value?",
    answer:
      "Leasing can offer excellent value depending on your priorities. If you want to drive a new Range Rover every three to four years without worrying about depreciation, resale hassle, or large capital outlay, leasing provides predictable costs and hassle-free motoring. For business users, the tax advantages can make leasing significantly more cost-effective than buying. However, at the end of the lease you have no asset — you simply return the vehicle. If building equity or long-term ownership matters to you, PCP or HP may be better options. Leasing is best suited to those who view their vehicle as a service rather than an investment.",
  },
];

export default function LeaseCalculatorPage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "Lease Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover Lease Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Calculate Personal Contract Hire payments for any Range Rover or Land Rover model. Leasing offers fixed
              monthly costs with no depreciation risk — simply hand back the vehicle at the end of the agreement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display text-charcoal mb-6">Lease Payment Calculator</h2>
          <FinanceCalculator mode="lease" showModeToggle={false} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">How Range Rover Leasing Works</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Leasing, formally known as Personal Contract Hire (PCH) for private individuals or Business Contract Hire
              (BCH) for companies, is a long-term rental agreement that allows you to drive a new Range Rover for a
              fixed monthly cost. Unlike PCP or HP, you never own the vehicle — you simply use it for an agreed period,
              then return it and, if you wish, take out a new lease on the latest model.
            </p>
            <p>
              The structure is straightforward. You pay an initial rental, typically equivalent to three, six, or nine
              monthly payments, followed by fixed monthly rentals for the duration of the agreement. Common lease terms
              are 24, 36, or 48 months. When the agreement ends, you return the vehicle to the leasing company. There
              is no balloon payment, no option to purchase, and no residual value to worry about.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Personal Contract Hire vs Business Lease</h3>
            <p>
              The distinction between personal and business leasing is primarily one of taxation. Personal Contract
              Hire is designed for private individuals. The monthly rental includes VAT, and there are no tax
              deductions available. PCH is chosen by individuals who want the simplicity and predictability of fixed
              monthly costs without the responsibility of vehicle ownership.
            </p>
            <p>
              Business Contract Hire is available to limited companies, sole traders, partnerships, and LLPs. The
              monthly rentals are quoted excluding VAT, and the business can reclaim 50% of the VAT on the lease
              rental (or 100% if the vehicle is used exclusively for business purposes, which is rare in practice).
              The lease rentals themselves can be offset against taxable profits as a business expense, reducing the
              company&apos;s corporation tax or the individual&apos;s income tax liability. For Range Rover PHEV
              models, the tax advantages are even more significant because the amount that can be offset against tax
              is not limited by the vehicle&apos;s CO2 emissions if it falls below the relevant threshold.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Understanding Mileage Limits</h3>
            <p>
              Every lease agreement includes an annual mileage allowance that you agree at the outset. Common options
              are 5,000, 8,000, 10,000, 15,000, or 20,000 miles per year, though bespoke allowances can be arranged.
              The mileage allowance directly affects your monthly rental — higher mileage means faster depreciation,
              which increases the cost.
            </p>
            <p>
              It is essential to estimate your annual mileage as accurately as possible. Underestimating leads to excess
              mileage charges at the end of the lease, which typically range from 5p to 20p per mile on a Range Rover.
              On a 36-month agreement, exceeding your allowance by just 3,000 miles per year at 15p per mile would
              cost an additional £1,350 at lease end. Overestimating means you pay more each month than necessary.
              Review your recent MOT history for accurate mileage records, and factor in any anticipated changes to
              your driving habits.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Maintenance Packages</h3>
            <p>
              One of the most attractive additions to a Range Rover lease is a maintenance package. This bundles all
              scheduled servicing, routine maintenance, and often replacement tyres and breakdown cover into your
              monthly rental. The result is a single, predictable monthly payment that covers virtually every aspect
              of running your vehicle — the only additional costs are fuel, insurance, and road tax (which is usually
              included in the first year).
            </p>
            <p>
              Maintenance packages are particularly valuable for Range Rover and Land Rover vehicles because their
              servicing and parts costs are higher than the market average. A major service on a Range Rover can cost
              over £500, and a set of replacement tyres for a Range Rover Sport starts at around £800 for quality
              branded rubber. Spreading these costs across the lease term avoids unwelcome surprises and makes
              budgeting considerably easier.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">End of Lease: What to Expect</h3>
            <p>
              When your lease term ends, the process is simple. The leasing company will arrange a collection or ask
              you to return the vehicle to a designated location. Before collection, the vehicle will be inspected
              against the BVRLA fair wear and tear standards. Normal wear — minor scuffs, light stone chips, and
              expected interior wear — is accepted without charge. Damage beyond these standards, such as dented
              panels, deep scratches, torn seats, or significantly kerbed alloy wheels, will result in charges.
            </p>
            <p>
              To avoid end-of-lease charges, it is worth commissioning a pre-return inspection a few weeks before the
              lease end date. This gives you time to address any issues — a smart repair on a scuffed bumper or alloy
              wheel, for instance — at a fraction of the cost the leasing company would charge. Many leasing companies
              offer this pre-inspection service free of charge.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Get a Lease Quote Today"
        description="Compare personal and business lease deals for any Range Rover model. Fixed monthly costs, no depreciation risk."
      />
    </>
  );
}
