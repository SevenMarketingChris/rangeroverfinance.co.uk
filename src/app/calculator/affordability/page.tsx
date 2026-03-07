import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { AffordabilityCalculator } from "./AffordabilityCalculator";

export const metadata: Metadata = {
  title: "Range Rover Affordability Calculator | What Can You Afford?",
  description:
    "Work backwards from your monthly budget to find which Range Rover you can afford. Enter your budget, deposit and preferred term to see matching models instantly.",
};

const faqs = [
  {
    question: "How is the maximum affordable price calculated?",
    answer:
      "The calculator works backwards from your monthly budget using standard PCP finance formulas. It takes your available monthly payment, deposit, preferred term, and estimated APR to determine the maximum vehicle price you could finance. The calculation assumes a typical balloon payment percentage of 45%, which is representative of the Guaranteed Future Value on most Range Rover and Land Rover models. The result is an estimate — your actual affordability may differ based on your credit profile and the specific lender's criteria.",
  },
  {
    question: "Does this calculator check my credit score?",
    answer:
      "No, this calculator does not perform any credit checks. It is a simple budgeting tool that estimates what you could afford based on the figures you enter. The APR you select should reflect what you expect to be offered based on your credit history. If you have an excellent credit score, you may qualify for rates at the lower end of the scale. If your credit history is less than perfect, use a higher APR to get a more realistic estimate. Only a formal finance application will confirm the exact rate and amount you can borrow.",
  },
  {
    question: "Should I spend the maximum amount I can afford?",
    answer:
      "It is generally advisable to leave some breathing room in your budget rather than stretching to the absolute maximum. Financial circumstances can change — unexpected expenses, changes in employment, or lifestyle adjustments can all affect your ability to meet monthly payments. A good rule of thumb is to ensure your total vehicle finance commitment, including insurance and running costs, does not exceed 15-20% of your monthly take-home pay. This leaves sufficient margin for other financial commitments and unexpected costs.",
  },
  {
    question: "What other costs should I consider beyond the monthly payment?",
    answer:
      "Beyond the monthly finance payment, you should budget for insurance (Range Rovers typically fall in insurance groups 28-50, which can mean premiums of £1,000-£3,000+ per year depending on your profile), road tax, fuel or electricity costs, servicing and maintenance, tyres, and any parking or congestion charges relevant to your location. MOT costs apply once the vehicle is three years old. Some of these costs can be bundled into a maintenance package if leasing, but for PCP and HP they are typically paid separately.",
  },
  {
    question: "Why does the calculator use PCP for affordability?",
    answer:
      "PCP offers the lowest monthly payments of the three main finance types, making it the most relevant basis for affordability calculations. If you can afford a vehicle on PCP, you may also be able to consider HP (with higher monthly payments) or leasing (with similar or lower payments). The calculator gives you the broadest view of what is within reach. If you prefer HP finance, the maximum affordable price would be lower for the same monthly budget because HP payments are higher.",
  },
  {
    question: "Can I afford a Range Rover on a moderate income?",
    answer:
      "The Range Rover and Land Rover lineup spans a wide price range, from the Discovery Sport starting at around £36,000 to the flagship Range Rover at over £100,000. With PCP finance, even the entry-level models can offer surprisingly accessible monthly payments. A Discovery Sport, for example, can be financed from around £349 per month with a reasonable deposit. The key is to be realistic about your total motoring budget, including insurance and running costs, and to choose a model and specification that fits comfortably within your means.",
  },
];

export default function AffordabilityPage() {
  return (
    <>
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Finance Calculator", href: "/calculator" },
              { label: "Affordability Calculator" },
            ]}
          />
          <div className="mt-6 max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display text-charcoal leading-tight">
              Range Rover Affordability Calculator
            </h1>
            <p className="mt-4 text-lg text-slate leading-relaxed">
              Work backwards from your monthly budget to discover which Range Rover and Land Rover models fit within
              your means. Enter your available budget, deposit, preferred term and estimated APR to see the maximum
              vehicle price you could afford and which models match.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AffordabilityCalculator />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display text-charcoal mb-6">Understanding Affordability for Range Rover Finance</h2>
          <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
            <p>
              Determining what you can truly afford is the most important step in the vehicle finance process. It is
              tempting to focus on the monthly payment alone, but responsible borrowing requires a broader view of your
              financial position. Our affordability calculator is designed to help you start that process by translating
              your monthly budget into a maximum vehicle price, giving you a clear and realistic starting point.
            </p>
            <p>
              The calculation works by reversing the standard PCP finance formula. Instead of entering a vehicle price
              and seeing the monthly payment, you enter your monthly budget and the calculator determines the maximum
              price you could finance. It assumes a typical balloon payment percentage of 45%, which is representative
              of the Guaranteed Future Value on most Range Rover and Land Rover models. The result gives you a ceiling
              price that you can use to narrow down your search.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">What Lenders Look at During Affordability Checks</h3>
            <p>
              When you apply for finance, the lender will conduct their own affordability assessment. This goes
              significantly beyond a simple monthly payment calculation. Lenders will review your income, existing
              financial commitments (mortgages, loans, credit cards), essential living expenses, and your credit
              history. They use this information to determine whether you can comfortably afford the monthly payments
              without putting yourself under financial strain.
            </p>
            <p>
              The Financial Conduct Authority (FCA) requires lenders to ensure that finance agreements are affordable
              and sustainable for the borrower. This means lenders must be satisfied that you can meet the payments not
              just today, but throughout the entire term of the agreement. They will consider potential changes in
              circumstances, such as interest rate rises on variable-rate mortgages or foreseeable changes in income.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">Building a Realistic Motoring Budget</h3>
            <p>
              Your monthly finance payment is just one component of the total cost of running a Range Rover. To build
              a realistic budget, you should also account for insurance premiums, which can be substantial for Range
              Rover models in the higher insurance groups. Road tax varies by model and fuel type — PHEV models benefit
              from lower first-year rates, though all vehicles over £40,000 attract the additional rate supplement.
            </p>
            <p>
              Fuel or electricity costs depend on your annual mileage and the engine you choose. Diesel models offer
              the best fuel economy for high-mileage drivers, while PHEV models can deliver dramatically low running
              costs if you have access to home charging and cover most of your miles on electric power. Servicing
              costs for Range Rovers are higher than the industry average, with a minor service typically costing
              £300-£400 and a major service £500-£700. Tyres for these vehicles are also premium-priced, with a full
              set costing £800 to £1,500 or more depending on the model and tyre specification.
            </p>
            <p>
              A prudent approach is to add 30-40% to your monthly finance payment to arrive at an estimated total
              monthly motoring cost. If this figure fits comfortably within your budget with room to spare, you are
              in a strong position. If it stretches your finances, consider a less expensive model or specification,
              or increase your deposit to reduce the monthly payment.
            </p>

            <h3 className="text-xl font-display text-charcoal mt-8 mb-3">The Role of Deposit in Affordability</h3>
            <p>
              Your deposit has a direct and significant impact on affordability. A larger deposit reduces the amount
              financed, which lowers both the monthly payment and the total interest charged. For example, increasing
              your deposit from £5,000 to £10,000 on a £65,000 Range Rover could reduce your monthly PCP payment by
              approximately £80-£100, depending on the term and APR. If a particular model is just outside your monthly
              budget, increasing the deposit may bring it within reach without overextending your finances.
            </p>
            <p>
              Part exchange value from your current vehicle can also serve as part or all of your deposit. If you have
              positive equity in your existing car — that is, it is worth more than any outstanding finance — this
              equity can be applied directly to reduce the amount you need to finance on your new Range Rover.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />

      <CTASection
        title="Find Your Perfect Range Rover"
        description="Speak to our finance specialists to explore the options within your budget. Free, personalised advice with no obligation."
      />
    </>
  );
}
