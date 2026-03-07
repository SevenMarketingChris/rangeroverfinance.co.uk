"use client";

import { useState, useMemo } from "react";
import { models, formatCurrency } from "@/lib/models";
import Link from "next/link";

export function AffordabilityCalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(600);
  const [deposit, setDeposit] = useState(8000);
  const [term, setTerm] = useState(48);
  const [apr, setApr] = useState(6.9);

  const result = useMemo(() => {
    const monthlyRate = apr / 100 / 12;
    const balloonPercent = 0.45;

    // Reverse PCP formula to find max price from monthly budget
    // monthly = (pcpFinanced * r * (1+r)^n) / ((1+r)^n - 1)
    // pcpFinanced = amountFinanced - balloon / (1+r)^n
    // amountFinanced = price - deposit
    // balloon = price * balloonPercent
    // So: pcpFinanced = (price - deposit) - (price * balloonPercent) / (1+r)^n
    // monthly * ((1+r)^n - 1) / (r * (1+r)^n) = pcpFinanced
    // Let A = monthly * ((1+r)^n - 1) / (r * (1+r)^n)  [present value of annuity]
    // A = price - deposit - price * balloonPercent / (1+r)^n
    // A = price * (1 - balloonPercent / (1+r)^n) - deposit
    // price = (A + deposit) / (1 - balloonPercent / (1+r)^n)

    const compoundFactor = Math.pow(1 + monthlyRate, term);

    let maxPrice: number;
    if (monthlyRate > 0) {
      const annuityPV = (monthlyBudget * (compoundFactor - 1)) / (monthlyRate * compoundFactor);
      maxPrice = (annuityPV + deposit) / (1 - balloonPercent / compoundFactor);
    } else {
      maxPrice = (monthlyBudget * term + deposit) / (1 - balloonPercent);
    }

    maxPrice = Math.max(0, Math.round(maxPrice));

    const matchingModels = models.filter((m) => m.priceFrom <= maxPrice);

    return { maxPrice, matchingModels };
  }, [monthlyBudget, deposit, term, apr]);

  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-racing-green px-6 py-4">
          <h2 className="text-lg font-semibold text-white">Your Budget</h2>
        </div>
        <div className="p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-charcoal">Monthly Budget</label>
                <span className="text-sm font-semibold text-racing-green">{formatCurrency(monthlyBudget)}/mo</span>
              </div>
              <input
                type="range"
                min={200}
                max={3000}
                step={50}
                value={monthlyBudget}
                onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
              />
              <div className="flex justify-between text-xs text-slate mt-1">
                <span>{formatCurrency(200)}</span>
                <span>{formatCurrency(3000)}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-charcoal">Available Deposit</label>
                <span className="text-sm font-semibold text-racing-green">{formatCurrency(deposit)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={50000}
                step={500}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
              />
              <div className="flex justify-between text-xs text-slate mt-1">
                <span>{formatCurrency(0)}</span>
                <span>{formatCurrency(50000)}</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-charcoal">Preferred Term</label>
                <span className="text-sm font-semibold text-racing-green">{term} months</span>
              </div>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-racing-green/20 focus:border-racing-green"
              >
                <option value={24}>24 months (2 years)</option>
                <option value={36}>36 months (3 years)</option>
                <option value={48}>48 months (4 years)</option>
                <option value={60}>60 months (5 years)</option>
              </select>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-charcoal">Estimated APR</label>
                <span className="text-sm font-semibold text-racing-green">{apr}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={15}
                step={0.1}
                value={apr}
                onChange={(e) => setApr(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
              />
              <div className="flex justify-between text-xs text-slate mt-1">
                <span>0%</span>
                <span>15%</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-cream rounded-lg text-center">
            <p className="text-xs text-slate uppercase tracking-wider mb-2">Maximum Vehicle Price You Could Afford</p>
            <p className="text-4xl lg:text-5xl font-bold text-racing-green font-display">
              {formatCurrency(result.maxPrice)}
            </p>
            <p className="text-xs text-slate mt-2">Based on PCP finance with 45% balloon payment</p>
          </div>

          <p className="mt-4 text-xs text-slate text-center">
            This is an estimate only. Your actual affordability depends on your credit profile, income, and existing
            financial commitments.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-display text-charcoal mb-2">
          Models Within Your Budget
        </h3>
        <p className="text-sm text-slate mb-6">
          {result.matchingModels.length > 0
            ? `Based on your budget of ${formatCurrency(monthlyBudget)}/month, these models have starting prices within your estimated maximum of ${formatCurrency(result.maxPrice)}.`
            : `No models match your current budget. Try increasing your monthly budget, deposit, or term length.`}
        </p>

        {result.matchingModels.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.matchingModels.map((model) => (
              <Link
                key={model.slug}
                href={`/models/${model.slug}`}
                className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-sand hover:shadow-md transition-all"
              >
                <h4 className="text-lg font-display text-charcoal group-hover:text-racing-green transition-colors">
                  {model.name}
                </h4>
                <p className="text-xs text-slate mt-1 mb-3">{model.tagline}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Price from</span>
                    <span className="font-semibold text-charcoal">{formatCurrency(model.priceFrom)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Typical monthly</span>
                    <span className="font-semibold text-racing-green">{formatCurrency(model.typicalMonthly)}/mo</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate">Body type</span>
                    <span className="text-charcoal">{model.bodyType}</span>
                  </div>
                </div>
                {model.priceFrom <= result.maxPrice && model.priceTo > result.maxPrice && (
                  <p className="mt-3 text-xs text-sand font-medium">
                    Some specifications may exceed your budget
                  </p>
                )}
                {model.priceTo <= result.maxPrice && (
                  <p className="mt-3 text-xs text-racing-green font-medium">
                    All specifications within budget
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}

        {result.matchingModels.length === 0 && (
          <div className="bg-cream rounded-xl p-8 text-center">
            <svg
              className="w-12 h-12 text-slate/40 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-slate font-medium">No matching models found</p>
            <p className="text-sm text-slate mt-2">
              Try adjusting your budget, increasing your deposit, or extending the finance term to see which models
              become available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
