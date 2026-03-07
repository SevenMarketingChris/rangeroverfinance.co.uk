import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { BalloonCalculator } from "./BalloonCalculator";

export const metadata: Metadata = {
  title: "Balloon Payment Calculator for Range Rover | GFV & Optional Final Payment",
  description:
    "Calculate the balloon payment on your Range Rover PCP deal. Understand Guaranteed Future Value, monthly depreciation, and your three options at the end of a PCP agreement.",
};

const faqs = [
  {
    question: "What exactly is a balloon payment?",
    answer:
      "A balloon payment is a large lump sum due at the end of a PCP finance agreement. It is formally known as the Guaranteed Future Value (GFV) or Optional Final Payment. The amount is set by the finance company at the start of the deal and represents their prediction of what the vehicle will be worth at the end of the agreement. You only need to pay it if you want to keep the vehicle — if you hand the car back, the balloon payment is simply written off.",
  },
  {
    question: "Who sets the Guaranteed Future Value on a Range Rover?",
    answer:
      "The Guaranteed Future Value is set by the finance company, typically in conjunction with data from the manufacturer and independent vehicle valuation services. It is based on the specific model, specification, agreed annual mileage, and the length of the agreement. The GFV is fixed at the start of the deal and cannot change during the agreement, regardless of how the used market moves. This guarantee protects you — if the vehicle is worth less than the GFV at the end, you can hand it back without liability.",
  },
  {
    question: "Can the balloon payment change during my agreement?",
    answer:
      "No, the balloon payment is fixed at the start of your PCP agreement and cannot change during the term. This is one of the key protections of PCP finance — the Guaranteed Future Value is exactly that, a guarantee. Whether the used car market rises or falls during your agreement, the amount you would need to pay to own the vehicle remains the same. If the market value exceeds the GFV, you benefit from positive equity. If it falls below, you are protected because you can hand the car back.",
  },
  {
    question: "What happens if my Range Rover is worth more than the balloon payment?",
    answer:
      "If your Range Rover is worth more than the Guaranteed Future Value at the end of the agreement, the difference is positive equity that belongs to you. For example, if the balloon payment is £40,000 but the vehicle is valued at £46,000, you have £6,000 in equity. You can use this equity as a deposit on your next vehicle, which is the most common approach. Alternatively, some dealers will offer to purchase the vehicle from you, settling the balloon payment and giving you the difference in cash. Range Rovers frequently have positive equity at lease end due to their strong residual values.",
  },
  {
    question: "Can I finance the balloon payment instead of paying it in cash?",
    answer:
      "Yes, if you want to keep your Range Rover at the end of the PCP agreement but do not have the cash to pay the balloon payment outright, you can refinance it. This is sometimes called a 'balloon refinance' and involves taking out a new loan, typically an HP agreement, to pay off the GFV. Your existing lender may offer this, or you can arrange finance through a different provider. The payments on the refinanced amount will depend on the interest rate and term you choose. Be aware that refinancing means you will pay additional interest on the balloon amount.",
  },
  {
    question: "Does higher annual mileage increase the balloon payment?",
    answer:
      "No, higher annual mileage actually decreases the balloon payment. This is because a vehicle with higher mileage depreciates more, so its predicted future value is lower. A lower GFV means your monthly payments will be higher (because you are financing more of the depreciation) but the final lump sum is smaller. Conversely, lower annual mileage results in a higher GFV and lower monthly payments. When choosing your mileage allowance, balance the monthly payment impact against the risk of excess mileage charges if you underestimate your annual driving.",
  },
];

export default function BalloonPaymentPage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "Balloon Payment Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Balloon Payment Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Understand exactly what the balloon payment means on your Range Rover PCP deal. Calculate the Guaranteed
              Future Value, see monthly depreciation figures, and learn about your options when the agreement ends.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BalloonCalculator />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">Understanding Balloon Payments on Range Rover Finance</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              The balloon payment is arguably the most misunderstood element of PCP finance, yet it is the mechanism
              that makes low monthly payments possible. In simple terms, the balloon payment is the amount the finance
              company predicts your vehicle will be worth at the end of the agreement. By deferring this amount to the
              end, your monthly payments only cover the depreciation and interest — not the full value of the vehicle.
            </p>
            <p>
              For Range Rover buyers, understanding the balloon payment is particularly important because these
              vehicles command higher prices than average, meaning the balloon payment itself can be a substantial
              figure. On a Range Rover Sport with a list price of £80,000 and a GFV of 50%, the balloon payment
              would be £40,000. That is a significant sum, and knowing your options for dealing with it is essential
              for making an informed finance decision.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">How the GFV Is Calculated</h3>
            <p>
              The Guaranteed Future Value is not an arbitrary figure. Finance companies use sophisticated data models
              that analyse historical depreciation patterns, current market conditions, expected future supply and
              demand, and the specific characteristics of the vehicle in question. Factors that influence the GFV
              include the model, trim level, engine choice, colour, optional equipment, agreed annual mileage, and
              the length of the agreement.
            </p>
            <p>
              Range Rovers consistently perform well in GFV calculations because they depreciate more slowly than many
              competitors. The Defender, in particular, has shown remarkable residual value retention since the new
              model launched. Strong GFVs are a direct benefit to PCP customers — a higher GFV means less depreciation
              to finance, which translates into lower monthly payments.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">The Optional Final Payment Explained</h3>
            <p>
              The balloon payment is described as an &quot;optional&quot; final payment because you are never obligated to pay
              it. At the end of your PCP agreement, you choose whether to pay it or not. If you pay it, the vehicle
              becomes yours. If you do not pay it, you return the vehicle, and the finance company takes it back at
              the guaranteed value. This optionality is the defining feature of PCP and the reason it offers such
              flexibility compared to HP, where ownership is the only outcome.
            </p>
            <p>
              It is worth noting that the balloon payment typically includes an &quot;option to purchase&quot; fee, usually
              around £10, which is a nominal charge for the legal transfer of ownership. This fee is separate from the
              GFV itself but is part of the total amount due if you choose to buy the vehicle.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Your Three Options at End of Agreement</h3>
            <p>
              <strong>Pay the balloon and keep your Range Rover.</strong> If you have grown attached to your vehicle
              or it suits your needs perfectly, you can pay the GFV and become the outright owner. You can pay from
              savings, arrange a separate loan, or refinance the balloon payment through the existing or a new lender.
              Once paid, the vehicle is yours with no further obligations.
            </p>
            <p>
              <strong>Return the vehicle and walk away.</strong> If you no longer want the vehicle, or if you simply
              want a clean break, you can hand back the keys. Provided the vehicle is within the agreed mileage and
              meets the fair wear and tear standards, there is nothing more to pay. The finance company takes the
              vehicle, and the balloon payment is effectively cancelled. This option provides a safety net — if the
              vehicle has depreciated more than expected, you are not left out of pocket.
            </p>
            <p>
              <strong>Trade in and roll equity into a new deal.</strong> This is the most popular option among Range
              Rover owners. If the market value of your vehicle exceeds the balloon payment, you have positive equity.
              The dealer settles your existing finance, and the equity (the difference between what the car is worth
              and the GFV) is applied as a deposit on your next vehicle. This can significantly reduce the deposit
              needed on a new PCP agreement, creating a cost-effective cycle of ownership that keeps you in a new
              Range Rover every few years.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Balloon Payment and Total Cost of Finance</h3>
            <p>
              While the balloon payment reduces monthly costs, it is important to understand its impact on the total
              cost of finance. Throughout the PCP term, you pay interest on the full financed amount — including the
              portion that will eventually become the balloon payment. This means the total interest paid on a PCP
              deal is higher than on an equivalent HP deal if you ultimately choose to buy the vehicle. However, the
              trade-off is substantially lower monthly payments during the agreement, plus the flexibility to walk
              away if the vehicle no longer suits your needs.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Need Help Understanding Your PCP Deal?"
        description="Our finance specialists can explain balloon payments, GFV, and help you decide the best option at the end of your agreement."
      />
    </>
  );
}
