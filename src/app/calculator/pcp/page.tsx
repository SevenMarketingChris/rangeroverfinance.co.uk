import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FinanceCalculator } from "@/components/FinanceCalculator";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "PCP Calculator for Range Rover | Personal Contract Purchase Payments",
  description:
    "Calculate PCP monthly payments for any Range Rover model. Understand balloon payments, GFV, and your three options at the end of a Personal Contract Purchase agreement.",
};

const faqs = [
  {
    question: "What is the balloon payment on a Range Rover PCP deal?",
    answer:
      "The balloon payment, also known as the Guaranteed Future Value (GFV), is the amount the lender predicts your Range Rover will be worth at the end of the PCP agreement. It is set at the start of the deal and guaranteed by the finance company, meaning they take on the depreciation risk. For a Range Rover, the balloon payment is typically between 40% and 55% of the original price, reflecting the strong residual values these vehicles command. You only need to pay this amount if you decide to keep the vehicle at the end of the agreement.",
  },
  {
    question: "What happens at the end of a Range Rover PCP deal?",
    answer:
      "At the end of your PCP agreement, you have three options. First, you can pay the balloon payment (the Guaranteed Future Value) and own the vehicle outright. Second, you can hand the vehicle back with nothing more to pay, provided it is within the agreed mileage and condition limits. Third, if the vehicle is worth more than the balloon payment — which is common with Range Rovers due to strong residual values — you can use that positive equity as a deposit on your next vehicle.",
  },
  {
    question: "How much deposit do I need for a Range Rover PCP deal?",
    answer:
      "Most lenders require a minimum deposit of around 10% of the vehicle price for a PCP deal, though this varies. For a Range Rover Sport starting at around £79,500, that would mean a minimum deposit of approximately £7,950. A larger deposit reduces the amount financed and lowers your monthly payments. Some manufacturer promotions may offer lower deposit requirements, particularly at the end of a model year or during special events.",
  },
  {
    question: "Are there mileage limits on Range Rover PCP deals?",
    answer:
      "Yes, PCP agreements include a mileage allowance agreed at the start of the deal. Common allowances are 8,000, 10,000, or 15,000 miles per year. If you exceed this limit, you will be charged an excess mileage fee when you return the vehicle, typically between 5p and 15p per mile depending on the agreement. It is important to estimate your annual mileage accurately when setting up the deal. If your driving habits change, many lenders allow you to adjust the mileage allowance during the agreement, though this will affect your monthly payment.",
  },
  {
    question: "Can I end my Range Rover PCP deal early?",
    answer:
      "You can end a PCP agreement early through voluntary termination, settlement, or part-exchange. Under the Consumer Credit Act, you have the right to voluntarily terminate the agreement once you have paid at least half of the total amount payable, including the balloon payment. Alternatively, you can request a settlement figure from the lender and pay it off in full. If you want to change your vehicle before the agreement ends, a dealer may offer to settle your existing finance as part of a new deal. Be aware that early termination may leave you with nothing to show for your payments, so it is worth calculating the figures carefully.",
  },
  {
    question: "Is PCP better than HP for a Range Rover?",
    answer:
      "PCP offers lower monthly payments than HP because you are only financing the depreciation rather than the full value of the vehicle. This makes PCP the more affordable option on a monthly basis. However, at the end of a PCP deal, you do not own the vehicle unless you pay the balloon payment. HP has higher monthly payments but you own the vehicle outright once all payments are made. PCP is generally better if you like to change vehicles regularly, while HP suits buyers who want to keep their Range Rover for many years. Most Range Rover buyers choose PCP because it aligns with the typical ownership cycle of three to four years.",
  },
];

export default function PCPCalculatorPage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "PCP Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover PCP Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Calculate your estimated monthly payments on a Personal Contract Purchase agreement for any Range Rover or
              Land Rover model. Adjust the vehicle price, deposit, term, APR and balloon percentage to see how each
              variable affects your monthly cost.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display text-charcoal mb-6">PCP Finance Calculator</h2>
          <FinanceCalculator mode="pcp" showModeToggle={false} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">How PCP Finance Works for Range Rovers</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Personal Contract Purchase, commonly known as PCP, is the most popular method of financing a new Range
              Rover in the United Kingdom. It is favoured by approximately 80% of new Range Rover buyers, and for good
              reason: it offers the lowest monthly payments of any traditional finance product while providing
              considerable flexibility at the end of the agreement.
            </p>
            <p>
              A PCP agreement is structured around the concept of the Guaranteed Future Value, or GFV. When you take
              out a PCP deal, the lender sets a guaranteed minimum value for the vehicle at the end of the agreement.
              This figure is based on the projected depreciation of the vehicle over the term, taking into account the
              model, specification, and agreed annual mileage. The key advantage of this structure is that your monthly
              payments only cover the difference between the vehicle price (minus your deposit) and the GFV, plus
              interest. You are not paying off the entire value of the vehicle each month, which is why PCP payments
              are substantially lower than HP.
            </p>
            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Understanding the Guaranteed Future Value</h3>
            <p>
              The GFV, also referred to as the balloon payment or optional final payment, is the cornerstone of every
              PCP deal. It represents the amount the finance company guarantees your Range Rover will be worth at the
              end of the agreement. This guarantee protects you from unexpected depreciation — if the vehicle is worth
              less than the GFV when the agreement ends, you can simply hand it back and the finance company absorbs
              the loss.
            </p>
            <p>
              Range Rovers and Land Rovers are particularly well-suited to PCP finance because they hold their value
              exceptionally well compared to many competitors. A typical Range Rover Sport retains around 50-55% of its
              value after three years, and Defenders can retain even more. Strong residual values translate directly
              into lower monthly payments because the GFV is set higher, meaning there is less depreciation for you to
              finance each month.
            </p>
            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Your Three Options at the End</h3>
            <p>
              When your PCP agreement reaches its end date, you are not locked into any single outcome. You have three
              distinct choices, and the right one depends on your circumstances at that point.
            </p>
            <p>
              <strong>Option one: pay the balloon and own the vehicle.</strong> If you have grown attached to your Range
              Rover and want to keep it, you can pay the GFV amount and the vehicle becomes yours. Many owners finance
              this final payment through a separate loan or personal savings.
            </p>
            <p>
              <strong>Option two: hand back the keys.</strong> If you no longer want the vehicle or you would prefer to
              move on, you can return it to the finance company with nothing more to pay. The vehicle must be within the
              agreed mileage limit and in fair condition, accounting for reasonable wear and tear.
            </p>
            <p>
              <strong>Option three: use your equity.</strong> If the market value of your Range Rover exceeds the GFV —
              which frequently happens with well-maintained, low-mileage examples — the difference is equity that
              belongs to you. You can use this equity as a deposit on your next vehicle, effectively rolling it into a
              new PCP agreement. This is the most common path for Range Rover owners, who often cycle through a new
              vehicle every three to four years.
            </p>
            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Pros and Cons of PCP for Range Rovers</h3>
            <p>
              The principal advantages of PCP are clear: lower monthly payments, flexibility at the end, protection
              against depreciation through the guaranteed future value, and the ability to drive a premium vehicle for
              less than the equivalent HP cost. For Range Rover buyers, there is an additional benefit — the strong
              residual values of these vehicles mean that PCP deals are often more competitive than for rival brands.
            </p>
            <p>
              The drawbacks are worth understanding too. You do not own the vehicle during the agreement, which means
              you cannot sell it privately without first settling the finance. There are mileage restrictions, and
              exceeding them incurs charges. The vehicle must be returned in good condition, and any damage beyond fair
              wear and tear will result in additional charges. Finally, while monthly payments are lower, the total
              amount payable over the term is higher than HP if you ultimately choose to buy the vehicle, because you
              pay interest on the balloon payment throughout the term.
            </p>
            <p>
              Despite these considerations, PCP remains overwhelmingly the preferred choice for Range Rover buyers. The
              combination of lower monthly costs, built-in flexibility, and strong residual values makes it an
              intelligent way to enjoy Range Rover ownership without committing to the full purchase price upfront.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Explore More Finance Tools"
        description="Compare PCP, HP and lease options side by side for any Range Rover model with our free calculators."
      />
    </>
  );
}
