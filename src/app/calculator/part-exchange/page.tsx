import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { PartExchangeCalculator } from "./PartExchangeCalculator";

export const metadata: Metadata = {
  title: "Part Exchange Calculator for Range Rover | Equity & Trade-In Value",
  description:
    "Calculate your part exchange equity position before trading in. See how your current car's value and outstanding finance affect the deposit on your new Range Rover.",
};

const faqs = [
  {
    question: "How do I find out what my current car is worth?",
    answer:
      "Several free online tools can give you an estimate of your vehicle's value. Auto Trader's valuation tool, Parkers, and CAP valuations are all widely used in the UK motor trade. For the most accurate figure, get valuations from multiple sources and consider the condition, mileage, and service history of your specific vehicle. Dealers may offer a slightly lower figure than private sale value because they need margin to resell the vehicle. Getting a written valuation from a dealer before negotiating is advisable.",
  },
  {
    question: "What is negative equity and how does it affect my new deal?",
    answer:
      "Negative equity occurs when your outstanding finance balance is higher than your vehicle's current market value. For example, if your car is worth £15,000 but you still owe £18,000 on the finance, you have £3,000 of negative equity. This shortfall needs to be covered — it is typically added to the amount financed on your new deal, increasing your monthly payments. While negative equity can be dealt with, it makes the new deal more expensive. If possible, it may be worth waiting until your equity position improves before changing vehicles.",
  },
  {
    question: "Can I part exchange a car that is still on finance?",
    answer:
      "Yes, it is common to part exchange a vehicle that still has outstanding finance. The dealer will settle the existing finance on your behalf as part of the transaction. If the car is worth more than the settlement figure, the positive equity is applied as a deposit contribution on your new vehicle. If the car is worth less (negative equity), the shortfall can usually be added to the new finance agreement, though this will increase your monthly payments.",
  },
  {
    question: "Should I sell privately or part exchange when buying a Range Rover?",
    answer:
      "Selling privately typically yields a higher price than part exchanging because you cut out the dealer's margin. However, private sale involves more effort — advertising, handling enquiries, arranging viewings, and managing the paperwork. Part exchange is convenient and quick; the dealer handles everything, and the transaction happens simultaneously with your new purchase. For high-value vehicles like Range Rovers, the convenience of part exchange is often preferred, particularly when the equity contributes meaningfully to the deposit on the new vehicle.",
  },
  {
    question: "How does part exchange equity affect my PCP deposit?",
    answer:
      "Positive equity from your part exchange is treated the same as a cash deposit. It reduces the amount you need to finance, which lowers your monthly payments. For example, if you have £8,000 in positive equity from your trade-in, you could use this as your entire deposit without needing to contribute any additional cash. Alternatively, you could add cash to the equity to create an even larger deposit for lower monthly payments. The more deposit (whether cash or equity), the less you borrow and the less interest you pay.",
  },
  {
    question: "What if the dealer offers less than I think my car is worth?",
    answer:
      "Dealer part exchange valuations are typically lower than private sale values because the dealer needs room to recondition and resell the vehicle at a profit. If you feel the offer is too low, get valuations from multiple dealers — including online buying services like WeBuyAnyCar or Motorway — to establish a fair range. You can negotiate by presenting these competing valuations. Remember, some dealers build part exchange margin into the price discount on the new vehicle, so the overall deal may be better than the part exchange figure alone suggests. Always evaluate the total cost of the transaction, not just the trade-in value.",
  },
];

export default function PartExchangePage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "Part Exchange Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Part Exchange &amp; Equity Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Calculate your equity position before trading in your current vehicle. See whether you have positive or
              negative equity and understand exactly how it affects the deposit and monthly payments on your new Range
              Rover.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <PartExchangeCalculator />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">Understanding Part Exchange and Equity</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              When you trade in your current vehicle as part of a new Range Rover purchase, the financial outcome
              depends on your equity position — the difference between what your car is currently worth and what you
              still owe on any existing finance. Understanding this figure before you visit a dealership puts you in a
              stronger negotiating position and helps you plan the finance on your new vehicle with confidence.
            </p>
            <p>
              Positive equity means your vehicle is worth more than your outstanding finance. This surplus acts as a
              deposit contribution on your new deal, reducing the amount you need to finance and lowering your monthly
              payments. Negative equity means you owe more than the vehicle is worth — a common situation if you are
              changing vehicles earlier than originally planned, or if the vehicle has depreciated faster than the
              finance has been repaid.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Getting an Accurate Valuation</h3>
            <p>
              The accuracy of your equity calculation depends entirely on the accuracy of your vehicle valuation. There
              are several approaches to establishing what your current vehicle is worth, and using multiple sources will
              give you the most reliable picture.
            </p>
            <p>
              Online valuation tools from Auto Trader, Parkers, and CAP are widely used and provide instant estimates
              based on the vehicle&apos;s registration, mileage, and condition. These tools draw on extensive market data
              and are generally reliable for mainstream vehicles. For premium or specialist vehicles, the actual value
              can vary more widely depending on specification, colour, and optional equipment.
            </p>
            <p>
              Online buying services such as Motorway, WeBuyAnyCar, and Cinch offer guaranteed purchase prices that
              are typically valid for a set period. These give you a concrete figure that you can present to a dealer
              as a benchmark. If the dealer cannot match or better the online offer, you have the option of selling
              directly to the buying service and using the cash as a deposit on your new vehicle.
            </p>
            <p>
              Dealer valuations are often the most conservative because the dealer needs to factor in reconditioning
              costs and their own profit margin on resale. However, some dealers may offer a higher part exchange value
              if it helps close the deal on a new vehicle — effectively subsidising the trade-in through the margin on
              the new sale. This is why it is important to evaluate the total transaction cost rather than focusing
              solely on the part exchange figure.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Dealing with Negative Equity</h3>
            <p>
              Negative equity is more common than many people realise, particularly among buyers who change vehicles
              frequently or who took out finance with a small deposit. If you find yourself in a negative equity
              position, you have several options.
            </p>
            <p>
              The most common approach is to roll the negative equity into the new finance agreement. The shortfall is
              added to the amount financed on the new vehicle, which increases your monthly payments. While this gets
              you into your new Range Rover immediately, it means you start the new agreement owing more than the
              vehicle is worth — effectively carrying negative equity forward.
            </p>
            <p>
              Alternatively, you can pay off the negative equity in cash, clearing the shortfall before starting the
              new deal on a clean basis. This is the financially prudent option if you have the available funds,
              because it avoids paying interest on the shortfall over the new agreement term.
            </p>
            <p>
              A third option is simply to wait. If you continue making payments on your current finance, your equity
              position will naturally improve as the balance reduces. At some point, you will cross into positive
              equity, and this may happen sooner than you expect — particularly if the used car market strengthens or
              if your vehicle holds its value well. Waiting six to twelve months can make a meaningful difference to
              your equity position.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Maximising Your Trade-In Value</h3>
            <p>
              Several straightforward steps can help you achieve the best possible part exchange value. Ensure the
              vehicle is clean inside and out — a professional valet costing £50-£100 can add hundreds to the perceived
              value. Address minor cosmetic issues such as scuffed alloy wheels or stone chips, which are inexpensive
              to repair but can disproportionately affect valuations. Ensure the service history is complete and up to
              date, and have all keys, handbooks, and locking wheel nut keys available. A vehicle with a full service
              history and two keys will always command a premium over one without.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Ready to Part Exchange?"
        description="Get a free valuation on your current vehicle and see how it works as a deposit on your new Range Rover."
        buttonText="Get Your Free Valuation"
      />
    </>
  );
}
