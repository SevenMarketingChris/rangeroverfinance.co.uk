"use client";

import { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { models } from "@/lib/models";
import Link from "next/link";

const pageTitle = "Compare Finance Options Side by Side";
const pageDescription =
  "Compare PCP, HP and lease finance side by side for any Range Rover model. See monthly payments, total costs and key differences to find the best option for you.";

// Metadata must be exported from a server component, so we use head tags for client pages
// For actual metadata, we'll use generateMetadata pattern via a separate layout or head export

function calculateMonthlyPayment(principal: number, annualRate: number, termMonths: number): number {
  if (annualRate === 0) return principal / termMonths;
  const monthlyRate = annualRate / 100 / 12;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

function formatCurrencyFull(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(amount);
}

export default function ComparePage() {
  const [selectedModel, setSelectedModel] = useState(models[0].slug);
  const [price, setPrice] = useState(models[0].priceFrom);
  const [deposit, setDeposit] = useState(models[0].typicalDeposit);
  const [term, setTerm] = useState(48);
  const [apr, setApr] = useState(6.9);

  const handleModelChange = (slug: string) => {
    setSelectedModel(slug);
    const model = models.find((m) => m.slug === slug);
    if (model) {
      setPrice(model.priceFrom);
      setDeposit(model.typicalDeposit);
    }
  };

  const calculations = useMemo(() => {
    const amountToFinance = price - deposit;

    // PCP: balloon = 45% of vehicle price, monthly payments on remainder
    const balloon = Math.round(price * 0.45);
    const pcpFinanced = amountToFinance - balloon;
    const pcpMonthly = pcpFinanced > 0 ? calculateMonthlyPayment(pcpFinanced, apr, term) : 0;
    const pcpTotalPayments = pcpMonthly * term;
    const pcpTotalCost = deposit + pcpTotalPayments + balloon;
    const pcpTotalInterest = pcpTotalCost - price;

    // HP: standard amortization on full financed amount
    const hpMonthly = calculateMonthlyPayment(amountToFinance, apr, term);
    const hpTotalPayments = hpMonthly * term;
    const hpTotalCost = deposit + hpTotalPayments;
    const hpTotalInterest = hpTotalCost - price;

    // Lease: depreciation + finance charge estimate
    const residualValue = price * 0.4;
    const depreciation = (price - residualValue) / term;
    const financeCharge = ((price + residualValue) * (apr / 100)) / 24;
    const leaseMonthly = depreciation + financeCharge;
    const leaseTotalCost = deposit + leaseMonthly * term;

    return {
      pcp: {
        monthly: pcpMonthly,
        totalCost: pcpTotalCost,
        totalInterest: pcpTotalInterest,
        balloon,
      },
      hp: {
        monthly: hpMonthly,
        totalCost: hpTotalCost,
        totalInterest: hpTotalInterest,
      },
      lease: {
        monthly: leaseMonthly,
        totalCost: leaseTotalCost,
      },
    };
  }, [price, deposit, term, apr]);

  return (
    <>
      <head>
        <title>{pageTitle} | Range Rover Finance</title>
        <meta name="description" content={pageDescription} />
      </head>

      {/* Hero */}
      <section className="bg-racing-green-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pb-16">
          <Breadcrumbs items={[{ label: "Compare Finance" }]} />
          <div className="mt-8 text-center max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-5xl font-display text-white mb-4">{pageTitle}</h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Adjust the details below and instantly see how PCP, HP and lease compare for your chosen model.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Inputs */}
      <section className="bg-cream py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-display text-charcoal mb-6">Configure Your Comparison</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-2">Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => handleModelChange(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sand/50 focus:border-sand"
                >
                  {models.map((m) => (
                    <option key={m.slug} value={m.slug}>{m.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-2">Vehicle Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  min={10000}
                  max={300000}
                  step={500}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sand/50 focus:border-sand"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-2">Deposit</label>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  min={0}
                  max={price}
                  step={500}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sand/50 focus:border-sand"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-2">Term (months)</label>
                <select
                  value={term}
                  onChange={(e) => setTerm(Number(e.target.value))}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sand/50 focus:border-sand"
                >
                  <option value={24}>24 months</option>
                  <option value={36}>36 months</option>
                  <option value={48}>48 months</option>
                  <option value={60}>60 months</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate uppercase tracking-wide mb-2">APR (%)</label>
                <input
                  type="number"
                  value={apr}
                  onChange={(e) => setApr(Number(e.target.value))}
                  min={0}
                  max={30}
                  step={0.1}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-sand/50 focus:border-sand"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-display text-charcoal text-center mb-10">
            Your Finance Comparison
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* PCP Column */}
            <div className="rounded-xl border-2 border-sand bg-cream/30 p-6">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-sand/20 text-sand text-xs font-semibold uppercase tracking-wide mb-3">
                  Most Popular
                </span>
                <h3 className="text-xl font-display text-charcoal">PCP</h3>
                <p className="text-xs text-slate mt-1">Personal Contract Purchase</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-display text-racing-green">{formatCurrencyFull(calculations.pcp.monthly)}</p>
                <p className="text-xs text-slate mt-1">per month</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Deposit</span>
                  <span className="text-charcoal font-medium">{formatCurrency(deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Balloon Payment</span>
                  <span className="text-charcoal font-medium">{formatCurrency(calculations.pcp.balloon)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Cost</span>
                  <span className="text-charcoal font-medium">{formatCurrency(Math.round(calculations.pcp.totalCost))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Interest</span>
                  <span className="text-charcoal font-medium">{formatCurrency(Math.round(calculations.pcp.totalInterest))}</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-slate">Ownership</span>
                  <span className="text-charcoal font-medium">Optional</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Mileage Limits</span>
                  <span className="text-charcoal font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Modifications</span>
                  <span className="text-charcoal font-medium">Restricted</span>
                </div>
              </div>
            </div>

            {/* HP Column */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-slate text-xs font-semibold uppercase tracking-wide mb-3">
                  Own Outright
                </span>
                <h3 className="text-xl font-display text-charcoal">HP</h3>
                <p className="text-xs text-slate mt-1">Hire Purchase</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-display text-racing-green">{formatCurrencyFull(calculations.hp.monthly)}</p>
                <p className="text-xs text-slate mt-1">per month</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Deposit</span>
                  <span className="text-charcoal font-medium">{formatCurrency(deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Balloon Payment</span>
                  <span className="text-charcoal font-medium">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Cost</span>
                  <span className="text-charcoal font-medium">{formatCurrency(Math.round(calculations.hp.totalCost))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Interest</span>
                  <span className="text-charcoal font-medium">{formatCurrency(Math.round(calculations.hp.totalInterest))}</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-slate">Ownership</span>
                  <span className="text-charcoal font-medium">Yes, at end</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Mileage Limits</span>
                  <span className="text-charcoal font-medium">No</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Modifications</span>
                  <span className="text-charcoal font-medium">Allowed</span>
                </div>
              </div>
            </div>

            {/* Lease Column */}
            <div className="rounded-xl border border-gray-200 p-6">
              <div className="text-center mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-slate text-xs font-semibold uppercase tracking-wide mb-3">
                  Fixed Cost
                </span>
                <h3 className="text-xl font-display text-charcoal">Lease</h3>
                <p className="text-xs text-slate mt-1">Personal Contract Hire</p>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-display text-racing-green">{formatCurrencyFull(calculations.lease.monthly)}</p>
                <p className="text-xs text-slate mt-1">per month</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate">Initial Rental</span>
                  <span className="text-charcoal font-medium">{formatCurrency(deposit)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Balloon Payment</span>
                  <span className="text-charcoal font-medium">None</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Cost</span>
                  <span className="text-charcoal font-medium">{formatCurrency(Math.round(calculations.lease.totalCost))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Total Interest</span>
                  <span className="text-charcoal font-medium">N/A</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between">
                  <span className="text-slate">Ownership</span>
                  <span className="text-charcoal font-medium">No</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Mileage Limits</span>
                  <span className="text-charcoal font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate">Modifications</span>
                  <span className="text-charcoal font-medium">Not allowed</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate text-center mt-6">
            These figures are estimates for illustration purposes only. Actual rates and payments will depend on your
            individual circumstances, credit profile and the lender&apos;s criteria. Representative APR may differ.
          </p>
        </div>
      </section>

      {/* Key Differences Content */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-display text-charcoal mb-8">
            Key Differences Explained
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                PCP: Best for Lower Monthly Payments and Flexibility
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-2">
                Personal Contract Purchase is the most popular way to finance a Range Rover. A significant
                portion of the vehicle&apos;s value is deferred to a &ldquo;balloon payment&rdquo; at the end of the
                term, which dramatically reduces your monthly outgoings. At the end of the agreement, you
                have three choices: pay the balloon to own the car, hand it back with nothing more to pay
                (subject to mileage and condition), or part-exchange for a new model.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                PCP suits drivers who like to change their vehicle every few years, those who want the
                lowest possible monthly payment, and anyone who values flexibility at the end of the term.
                The trade-off is annual mileage limits (typically 8,000 to 15,000 miles) and restrictions
                on modifications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                HP: Best for Outright Ownership
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-2">
                Hire Purchase is the most straightforward form of car finance. You pay a deposit followed
                by fixed monthly payments over an agreed term. Once the final payment is made, the vehicle
                is yours — no balloon payment, no surprises. Monthly payments are higher than PCP because
                you are paying off the entire value of the vehicle.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                HP is ideal for drivers who plan to keep their Range Rover for the long term, those who
                cover high mileage, and anyone who wants to modify their vehicle. There are no mileage
                limits and no condition concerns at the end. For a vehicle you intend to keep for many
                years, HP is typically the most cost-effective option overall.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">
                Lease: Best for Hassle-Free Motoring
              </h3>
              <p className="text-sm text-slate leading-relaxed mb-2">
                A personal lease (PCH) is essentially a long-term rental. You pay an initial rental
                followed by fixed monthly payments, and you hand the vehicle back at the end. You never
                own the car. Lease deals often include maintenance packages, and monthly costs are fully
                predictable.
              </p>
              <p className="text-sm text-slate leading-relaxed">
                Leasing suits drivers who always want to be in a new vehicle, prefer predictable monthly
                costs, and are happy not to own the car. It is also popular with business users, as lease
                payments can often be offset against tax. The key restrictions are mileage limits and the
                requirement to return the vehicle in good condition.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/calculator"
              className="inline-block px-10 py-4 bg-racing-green text-white font-semibold rounded-lg hover:bg-racing-green-light transition-colors text-lg"
            >
              Use Calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
