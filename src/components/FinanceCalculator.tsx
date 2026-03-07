"use client";

import { useState, useMemo } from "react";
import { formatCurrency } from "@/lib/models";

interface CalculatorProps {
  defaultPrice?: number;
  defaultDeposit?: number;
  defaultTerm?: number;
  defaultApr?: number;
  defaultBalloonPercent?: number;
  mode?: "pcp" | "hp" | "lease";
  showModeToggle?: boolean;
}

export function FinanceCalculator({
  defaultPrice = 65000,
  defaultDeposit = 8000,
  defaultTerm = 48,
  defaultApr = 6.9,
  defaultBalloonPercent = 45,
  mode: initialMode = "pcp",
  showModeToggle = true,
}: CalculatorProps) {
  const [mode, setMode] = useState(initialMode);
  const [price, setPrice] = useState(defaultPrice);
  const [deposit, setDeposit] = useState(defaultDeposit);
  const [term, setTerm] = useState(defaultTerm);
  const [apr, setApr] = useState(defaultApr);
  const [balloonPercent, setBalloonPercent] = useState(defaultBalloonPercent);
  const [annualMileage, setAnnualMileage] = useState(10000);

  const result = useMemo(() => {
    const amountFinanced = price - deposit;
    const monthlyRate = apr / 100 / 12;

    if (mode === "pcp") {
      const balloon = price * (balloonPercent / 100);
      const pcpFinanced = amountFinanced - balloon / Math.pow(1 + monthlyRate, term);
      const monthly =
        monthlyRate > 0
          ? (pcpFinanced * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
          : pcpFinanced / term;
      const totalPayable = deposit + monthly * term + balloon;
      const totalInterest = totalPayable - price;
      return { monthly, totalPayable, totalInterest, balloon };
    }

    if (mode === "hp") {
      const monthly =
        monthlyRate > 0
          ? (amountFinanced * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
          : amountFinanced / term;
      const totalPayable = deposit + monthly * term;
      const totalInterest = totalPayable - price;
      return { monthly, totalPayable, totalInterest, balloon: 0 };
    }

    const depreciationPerMonth = (price * 0.55) / term;
    const financeCharge = (price + price * 0.45) * (monthlyRate / 2);
    const monthly = depreciationPerMonth + financeCharge;
    const initialRental = monthly * 3;
    const totalPayable = initialRental + monthly * (term - 1);
    return { monthly, totalPayable, totalInterest: 0, balloon: 0, initialRental };
  }, [mode, price, deposit, term, apr, balloonPercent]);

  return (
    <div className="bg-white border border-rr-mist overflow-hidden">
      {showModeToggle && (
        <div className="flex border-b border-rr-mist">
          {(["pcp", "hp", "lease"] as const).map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`flex-1 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 ${
                mode === m
                  ? "bg-rr-black text-white"
                  : "bg-rr-frost text-rr-silver hover:text-rr-black hover:bg-rr-mist"
              }`}
            >
              {m === "pcp" ? "PCP" : m === "hp" ? "HP" : "LEASE"}
            </button>
          ))}
        </div>
      )}

      <div className="p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SliderInput label="Vehicle Price" value={price} onChange={setPrice} min={15000} max={250000} step={500} format="currency" />
          {mode !== "lease" && (
            <SliderInput label="Deposit" value={deposit} onChange={setDeposit} min={0} max={Math.floor(price * 0.5)} step={500} format="currency" />
          )}
          <SliderInput label="Term" value={term} onChange={setTerm} min={12} max={60} step={6} format="months" />
          <SliderInput label="APR" value={apr} onChange={setApr} min={0} max={20} step={0.1} format="percent" />
          {mode === "pcp" && (
            <SliderInput label="Balloon / GFV" value={balloonPercent} onChange={setBalloonPercent} min={20} max={60} step={1} format="percent" />
          )}
          {mode === "lease" && (
            <SliderInput label="Annual Mileage" value={annualMileage} onChange={setAnnualMileage} min={5000} max={30000} step={1000} format="miles" />
          )}
        </div>

        {/* Results */}
        <div className="mt-10 pt-10 border-t border-rr-mist">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ResultCard label="Monthly Payment" value={formatCurrency(Math.round(result.monthly))} highlight />
            <ResultCard label="Total Payable" value={formatCurrency(Math.round(result.totalPayable))} />
            {mode === "pcp" && <ResultCard label="Balloon Payment" value={formatCurrency(Math.round(result.balloon))} />}
            {mode !== "lease" && <ResultCard label="Total Interest" value={formatCurrency(Math.round(result.totalInterest))} />}
            {mode === "lease" && result.initialRental && (
              <ResultCard label="Initial Rental" value={formatCurrency(Math.round(result.initialRental))} />
            )}
          </div>
        </div>

        <p className="mt-8 text-[11px] text-rr-pewter text-center tracking-wide">
          Estimates only. Actual quotes may differ based on individual circumstances.
        </p>
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: "currency" | "months" | "percent" | "miles";
}) {
  const displayValue =
    format === "currency"
      ? formatCurrency(value)
      : format === "months"
        ? `${value} months`
        : format === "percent"
          ? `${value}%`
          : `${value.toLocaleString()} miles`;

  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <label className="text-[11px] tracking-[0.15em] text-rr-silver uppercase">{label}</label>
        <span className="text-[15px] font-light text-rr-black">{displayValue}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function ResultCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] text-rr-silver uppercase mb-2">{label}</p>
      <p className={`text-2xl lg:text-3xl font-light ${highlight ? "text-rr-black" : "text-rr-gunmetal"}`}>
        {value}
      </p>
    </div>
  );
}
