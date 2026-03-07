"use client";

import { useState, useMemo } from "react";
import { formatCurrency } from "@/lib/models";

export function PartExchangeCalculator() {
  const [currentValue, setCurrentValue] = useState(20000);
  const [outstandingFinance, setOutstandingFinance] = useState(12000);
  const [newVehiclePrice, setNewVehiclePrice] = useState(65000);
  const [additionalDeposit, setAdditionalDeposit] = useState(0);

  const result = useMemo(() => {
    const equity = currentValue - outstandingFinance;
    const isPositive = equity >= 0;
    const effectiveDeposit = isPositive ? equity + additionalDeposit : additionalDeposit;
    const negativeEquityCarried = isPositive ? 0 : Math.abs(equity);
    const totalToFinance = newVehiclePrice - effectiveDeposit + negativeEquityCarried;

    // Estimate monthly payment on PCP (48 months, 6.9% APR, 45% balloon)
    const apr = 6.9;
    const term = 48;
    const balloonPercent = 0.45;
    const monthlyRate = apr / 100 / 12;
    const balloon = newVehiclePrice * balloonPercent;
    const amountFinanced = totalToFinance;
    const pcpFinanced = amountFinanced - balloon / Math.pow(1 + monthlyRate, term);
    const monthlyPayment =
      monthlyRate > 0
        ? (pcpFinanced * monthlyRate * Math.pow(1 + monthlyRate, term)) /
          (Math.pow(1 + monthlyRate, term) - 1)
        : pcpFinanced / term;

    return {
      equity,
      isPositive,
      effectiveDeposit,
      negativeEquityCarried,
      totalToFinance,
      monthlyPayment: Math.max(0, monthlyPayment),
    };
  }, [currentValue, outstandingFinance, newVehiclePrice, additionalDeposit]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-racing-green px-6 py-4">
        <h2 className="text-lg font-semibold text-white">Part Exchange &amp; Equity Calculator</h2>
      </div>
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Estimated Current Car Value</label>
              <span className="text-sm font-semibold text-racing-green">{formatCurrency(currentValue)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={100000}
              step={500}
              value={currentValue}
              onChange={(e) => setCurrentValue(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>{formatCurrency(0)}</span>
              <span>{formatCurrency(100000)}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Outstanding Finance</label>
              <span className="text-sm font-semibold text-racing-green">{formatCurrency(outstandingFinance)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={80000}
              step={500}
              value={outstandingFinance}
              onChange={(e) => setOutstandingFinance(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>{formatCurrency(0)}</span>
              <span>{formatCurrency(80000)}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">New Vehicle Price</label>
              <span className="text-sm font-semibold text-racing-green">{formatCurrency(newVehiclePrice)}</span>
            </div>
            <input
              type="range"
              min={30000}
              max={250000}
              step={1000}
              value={newVehiclePrice}
              onChange={(e) => setNewVehiclePrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>{formatCurrency(30000)}</span>
              <span>{formatCurrency(250000)}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Additional Cash Deposit</label>
              <span className="text-sm font-semibold text-racing-green">{formatCurrency(additionalDeposit)}</span>
            </div>
            <input
              type="range"
              min={0}
              max={50000}
              step={500}
              value={additionalDeposit}
              onChange={(e) => setAdditionalDeposit(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>{formatCurrency(0)}</span>
              <span>{formatCurrency(50000)}</span>
            </div>
          </div>
        </div>

        {/* Equity result */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className={`p-6 rounded-lg ${
              result.isPositive ? "bg-racing-green/5 border border-racing-green/20" : "bg-red-50 border border-red-200"
            }`}
          >
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-2">
              Your Equity Position
            </h3>
            <p
              className={`text-4xl font-bold font-display ${
                result.isPositive ? "text-racing-green" : "text-red-600"
              }`}
            >
              {result.isPositive ? "+" : "-"}
              {formatCurrency(Math.abs(result.equity))}
            </p>
            <p className="text-sm text-slate mt-2">
              {result.isPositive
                ? "You have positive equity. This can be used as a deposit on your new vehicle."
                : "You have negative equity. This shortfall would need to be covered in the new deal."}
            </p>
          </div>

          <div className="p-6 bg-cream rounded-lg">
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-2">
              Effective Total Deposit
            </h3>
            <p className="text-4xl font-bold text-charcoal font-display">
              {formatCurrency(Math.max(0, result.effectiveDeposit))}
            </p>
            <p className="text-sm text-slate mt-2">
              {result.isPositive && result.equity > 0 && additionalDeposit > 0
                ? `${formatCurrency(result.equity)} equity + ${formatCurrency(additionalDeposit)} cash`
                : result.isPositive && result.equity > 0
                ? "From part exchange equity"
                : additionalDeposit > 0
                ? "From additional cash deposit"
                : "No deposit available"}
            </p>
          </div>
        </div>

        {/* Deal summary */}
        <div className="mt-6 border border-gray-100 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3">
            <h3 className="text-sm font-semibold text-charcoal">New Deal Summary</h3>
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-xs text-slate uppercase tracking-wider mb-1">New Vehicle</p>
                <p className="text-lg font-bold text-charcoal">{formatCurrency(newVehiclePrice)}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate uppercase tracking-wider mb-1">Amount to Finance</p>
                <p className="text-lg font-bold text-charcoal">
                  {formatCurrency(Math.max(0, Math.round(result.totalToFinance)))}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate uppercase tracking-wider mb-1">Est. Monthly (PCP)</p>
                <p className="text-lg font-bold text-racing-green">
                  {formatCurrency(Math.round(result.monthlyPayment))}
                </p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate uppercase tracking-wider mb-1">
                  {result.negativeEquityCarried > 0 ? "Neg. Equity Added" : "Deposit Coverage"}
                </p>
                <p
                  className={`text-lg font-bold ${
                    result.negativeEquityCarried > 0 ? "text-red-600" : "text-charcoal"
                  }`}
                >
                  {result.negativeEquityCarried > 0
                    ? `+${formatCurrency(result.negativeEquityCarried)}`
                    : `${Math.min(100, Math.round((result.effectiveDeposit / newVehiclePrice) * 100))}%`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {result.negativeEquityCarried > 0 && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Negative equity notice:</strong> Your outstanding finance exceeds your vehicle&apos;s value by{" "}
              {formatCurrency(result.negativeEquityCarried)}. This amount has been added to the finance total on the new
              deal. Consider waiting until your equity position improves, increasing your cash deposit, or exploring
              settlement options with your current lender.
            </p>
          </div>
        )}

        <p className="mt-4 text-xs text-slate text-center">
          Monthly payment estimate based on 48-month PCP at 6.9% APR with 45% balloon. Actual figures will vary based
          on your credit profile and lender terms.
        </p>
      </div>
    </div>
  );
}
