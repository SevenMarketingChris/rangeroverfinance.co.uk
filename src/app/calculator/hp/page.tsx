import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Range Rover HP Calculator | Hire Purchase Monthly Payments",
  description:
    "Calculate Hire Purchase monthly payments for any Range Rover. HP gives you full ownership with no balloon payment. Compare terms, deposits and APR to find your ideal deal.",
};

const faqs = [
  {
    question: "Do I own the Range Rover during an HP agreement?",
    answer:
      "During an HP agreement, the vehicle is owned by the finance company until you make the final payment. However, once all payments have been made — including any option-to-purchase fee — full ownership transfers to you automatically. Unlike PCP, there is no separate balloon payment to worry about. From the moment the last instalment is paid, the Range Rover is legally yours to sell, modify, or keep for as long as you wish.",
  },
  {
    question: "Can I pay off my Range Rover HP early?",
    answer:
      "Yes, you can settle an HP agreement early at any time. Contact your lender to request a settlement figure, which will include the remaining balance minus a rebate on future interest charges. Under the Consumer Credit Act, you are entitled to a reduction in interest if you repay early. There is no penalty for early settlement, making HP a flexible option if your financial circumstances change or you receive a lump sum you wish to put towards the vehicle.",
  },
  {
    question: "Is HP more expensive than PCP for a Range Rover?",
    answer:
      "HP monthly payments are higher than PCP because you are repaying the full value of the vehicle (minus your deposit) over the agreement term. With PCP, a significant portion of the value is deferred as a balloon payment, reducing monthly costs. However, the total amount payable with HP is often lower than PCP if you intend to keep the vehicle, because you are not paying interest on a balloon payment. HP is the more cost-effective option for buyers who plan to own their Range Rover beyond the finance term.",
  },
  {
    question: "Are there mileage limits on Range Rover HP deals?",
    answer:
      "No, there are no mileage restrictions on HP agreements. Because you are purchasing the vehicle rather than returning it, you are free to drive as many miles as you wish. This makes HP an excellent choice for high-mileage drivers who would face significant excess mileage charges under a PCP or lease agreement. Whether you use your Range Rover for a daily commute, long-distance touring, or regular towing, HP imposes no limits on your usage.",
  },
  {
    question: "What deposit do I need for Range Rover HP finance?",
    answer:
      "Most lenders require a minimum deposit of around 10% for an HP agreement, though some may accept less depending on your credit profile and the vehicle in question. For a Range Rover with a price of £65,000, a 10% deposit would be £6,500. A larger deposit will reduce both your monthly payments and the total interest charged over the term. Some buyers put down 20-30% to keep monthly costs manageable while still benefiting from the ownership advantages of HP.",
  },
  {
    question: "When is HP a better choice than PCP for a Range Rover?",
    answer:
      "HP is the better choice when you intend to keep the vehicle for many years, when you cover high annual mileage, or when outright ownership matters to you. It is also preferable if you want the simplicity of a fixed repayment schedule with no decisions to make at the end — once the final payment is made, the vehicle is yours. HP is popular with buyers who modify their vehicles, as there are no condition restrictions at the end of the term. If you plan to keep your Range Rover as a long-term asset, HP typically offers better value than PCP over the full ownership period.",
  },
];

export default function HPCalculatorPage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "HP Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover HP Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Calculate Hire Purchase monthly payments for any Range Rover or Land Rover model. HP offers a
              straightforward path to full vehicle ownership with no balloon payment and no mileage restrictions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display text-charcoal mb-6">Hire Purchase Calculator</h2>
          <FinanceCalculator mode="hp" showModeToggle={false} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">How Hire Purchase Works for Range Rovers</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Hire Purchase is the most traditional form of vehicle finance and the most straightforward to understand.
              You agree on a price for the Range Rover, pay a deposit, and then repay the remaining balance in equal
              monthly instalments over a fixed term. Once the final payment is made, the vehicle belongs to you. There
              is no balloon payment, no optional final payment, and no ambiguity about ownership.
            </p>
            <p>
              The simplicity of HP is its greatest strength. Every payment you make builds your equity in the vehicle.
              From the very first instalment, you are working towards full ownership, and you know exactly when that
              ownership will be achieved. This predictability appeals to buyers who prefer clarity over the flexibility
              offered by PCP, and who value the certainty of knowing that their Range Rover will be fully theirs at the
              end of the agreement.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">How HP Differs from PCP</h3>
            <p>
              The fundamental difference between HP and PCP is what you are paying for. With PCP, your monthly payments
              cover only the depreciation of the vehicle — the difference between its current price and its predicted
              value at the end of the term. A large portion of the vehicle&apos;s value is deferred as a balloon
              payment. With HP, you are paying off the entire balance. This means higher monthly payments, but no lump
              sum at the end and no decisions to make about what to do with the vehicle when the term concludes.
            </p>
            <p>
              Another significant difference is the absence of mileage restrictions. PCP agreements include an annual
              mileage allowance, and exceeding it results in excess mileage charges. HP has no such limitation. You can
              drive your Range Rover as far and as often as you wish without incurring any additional costs. This makes
              HP particularly attractive for buyers who cover high annual mileage, use their vehicle for towing, or
              simply do not want the constraint of watching their odometer.
            </p>
            <p>
              Condition requirements differ too. With PCP, the vehicle must be returned in good condition at the end of
              the term if you choose to hand it back. With HP, there are no condition requirements because you are
              buying the vehicle — you can modify it, personalise it, and use it as you see fit without worrying about
              return standards.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">When HP Is the Better Choice</h3>
            <p>
              HP is typically the better choice in several specific scenarios. If you plan to keep your Range Rover for
              many years — perhaps five, seven, or even ten years — HP makes more financial sense than PCP because you
              will own the vehicle outright and can enjoy years of payment-free motoring once the agreement ends.
            </p>
            <p>
              High-mileage drivers benefit from HP because there are no excess mileage charges. If you regularly cover
              more than 15,000 miles per year, the mileage charges on a PCP deal can add up to thousands of pounds.
              With HP, every mile is free.
            </p>
            <p>
              Buyers who value outright ownership for personal or practical reasons will prefer HP. Once the agreement
              is complete, the vehicle is an asset that belongs to you. You can sell it at any time, use it as security
              for other purposes, or simply enjoy the peace of mind that comes with having no ongoing financial
              commitment to a vehicle.
            </p>
            <p>
              Those who modify their vehicles — whether fitting off-road accessories, upgrading wheels, or adding
              bespoke touches — will find HP more suitable because there are no condition requirements at the end.
              Land Rover Defenders, in particular, are frequently customised by their owners, making HP the natural
              finance choice for that model.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Understanding the Total Cost</h3>
            <p>
              While HP monthly payments are higher than PCP, the total cost of ownership can be lower. With PCP, if you
              exercise the option to purchase at the end by paying the balloon, you will have paid interest on that
              balloon amount throughout the entire term — even though you did not benefit from it until the final
              payment. With HP, the interest is calculated on a balance that reduces with every payment, and there is
              no deferred lump sum accruing interest in the background.
            </p>
            <p>
              For buyers who know from the outset that they want to own their Range Rover, HP almost always represents
              the most cost-effective path to ownership. The higher monthly payments are the trade-off for lower total
              expenditure and the security of guaranteed ownership at a known date.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Explore More Finance Tools"
        description="Compare Hire Purchase costs for any Range Rover model. Fixed payments, full ownership, no balloon payment."
      />
    </>
  );
}
