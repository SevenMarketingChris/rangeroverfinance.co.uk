"use client";

import { useState, useMemo } from "react";
import { formatCurrency } from "@/lib/models";

export function BalloonCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(80000);
  const [gfvPercent, setGfvPercent] = useState(45);
  const [term, setTerm] = useState(48);

  const result = useMemo(() => {
    const balloonAmount = vehiclePrice * (gfvPercent / 100);
    const depreciationTotal = vehiclePrice - balloonAmount;
    const monthlyDepreciation = depreciationTotal / term;
    const yearlyDepreciation = depreciationTotal / (term / 12);
    const depreciationPercent = ((depreciationTotal / vehiclePrice) * 100).toFixed(1);

    return {
      balloonAmount,
      depreciationTotal,
      monthlyDepreciation,
      yearlyDepreciation,
      depreciationPercent,
    };
  }, [vehiclePrice, gfvPercent, term]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      <div className="bg-racing-green px-6 py-4">
        <h2 className="text-lg font-semibold text-white">Balloon Payment Calculator</h2>
      </div>
      <div className="p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Vehicle Price</label>
              <span className="text-sm font-semibold text-racing-green">{formatCurrency(vehiclePrice)}</span>
            </div>
            <input
              type="range"
              min={20000}
              max={250000}
              step={1000}
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>{formatCurrency(20000)}</span>
              <span>{formatCurrency(250000)}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">GFV / Balloon (%)</label>
              <span className="text-sm font-semibold text-racing-green">{gfvPercent}%</span>
            </div>
            <input
              type="range"
              min={20}
              max={65}
              step={1}
              value={gfvPercent}
              onChange={(e) => setGfvPercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-racing-green"
            />
            <div className="flex justify-between text-xs text-slate mt-1">
              <span>20%</span>
              <span>65%</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-charcoal">Agreement Term</label>
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
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-cream rounded-lg">
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Balloon Payment</h3>
            <p className="text-4xl font-bold text-racing-green font-display mb-1">
              {formatCurrency(Math.round(result.balloonAmount))}
            </p>
            <p className="text-xs text-slate">
              {gfvPercent}% of {formatCurrency(vehiclePrice)} vehicle price
            </p>
          </div>

          <div className="p-6 bg-cream rounded-lg">
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Depreciation Covered</h3>
            <p className="text-4xl font-bold text-charcoal font-display mb-1">
              {formatCurrency(Math.round(result.depreciationTotal))}
            </p>
            <p className="text-xs text-slate">
              {result.depreciationPercent}% depreciation over {term} months
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-slate uppercase tracking-wider mb-1">Monthly Depreciation</p>
            <p className="text-lg font-bold text-charcoal">{formatCurrency(Math.round(result.monthlyDepreciation))}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-slate uppercase tracking-wider mb-1">Yearly Depreciation</p>
            <p className="text-lg font-bold text-charcoal">{formatCurrency(Math.round(result.yearlyDepreciation))}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-slate uppercase tracking-wider mb-1">Vehicle Value at End</p>
            <p className="text-lg font-bold text-racing-green">{formatCurrency(Math.round(result.balloonAmount))}</p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-slate uppercase tracking-wider mb-1">Value Retained</p>
            <p className="text-lg font-bold text-racing-green">{gfvPercent}%</p>
          </div>
        </div>

        <div className="mt-8 border border-gray-100 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3">
            <h3 className="text-sm font-semibold text-charcoal">Your 3 Options at the End of the Agreement</h3>
          </div>
          <div className="divide-y divide-gray-100">
            <div className="px-6 py-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-racing-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-bold text-racing-green">1</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Pay the Balloon and Own It</p>
                <p className="text-sm text-slate mt-1">
                  Pay {formatCurrency(Math.round(result.balloonAmount))} to become the outright owner. You can pay from
                  savings or refinance this amount through a new loan or HP agreement.
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-racing-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-bold text-racing-green">2</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Hand Back the Keys</p>
                <p className="text-sm text-slate mt-1">
                  Return the vehicle with nothing more to pay, provided it is within the agreed mileage and condition
                  standards. The {formatCurrency(Math.round(result.balloonAmount))} balloon is cancelled.
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-racing-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-sm font-bold text-racing-green">3</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">Use Equity Towards Your Next Vehicle</p>
                <p className="text-sm text-slate mt-1">
                  If the market value exceeds the balloon of {formatCurrency(Math.round(result.balloonAmount))}, the
                  difference is your equity. Use it as a deposit on your next Range Rover PCP deal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-xs text-slate text-center">
          This calculator shows the balloon payment and depreciation only. Your actual monthly PCP payments will also
          include interest charges based on the APR offered.
        </p>
      </div>
    </div>
  );
}
