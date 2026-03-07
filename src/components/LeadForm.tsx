"use client";

import { useState } from "react";
import { models } from "@/lib/models";

const inputClass =
  "w-full px-4 py-3.5 border border-rr-mist bg-rr-frost text-[13px] text-rr-black placeholder:text-rr-pewter focus:outline-none focus:border-rr-black transition-colors duration-300";

const selectClass =
  "w-full px-4 py-3.5 border border-rr-mist bg-rr-frost text-[13px] text-rr-black focus:outline-none focus:border-rr-black transition-colors duration-300 appearance-none";

export function LeadForm({ preselectedModel }: { preselectedModel?: string }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    model: preselectedModel || "",
    financeType: "",
    budget: "",
    deposit: "",
    employmentStatus: "",
    message: "",
    consent: false,
  });

  const update = (field: string, value: string | boolean) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-rr-mist p-10 lg:p-14 text-center">
        <div className="w-12 h-12 border border-rr-black flex items-center justify-center mx-auto mb-8">
          <svg className="w-5 h-5 text-rr-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-light tracking-wide text-rr-black mb-3">Thank You</h3>
        <p className="text-[13px] text-rr-silver max-w-md mx-auto leading-relaxed">
          Your enquiry has been received. A finance specialist will be in touch within 24 hours
          to discuss your options.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-rr-mist overflow-hidden">
      {/* Step indicator */}
      <div className="flex border-b border-rr-mist">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`flex-1 py-4 text-center text-[11px] tracking-[0.2em] uppercase transition-all duration-300 ${
              step === s
                ? "bg-rr-black text-white"
                : step > s
                  ? "bg-rr-graphite text-white/60"
                  : "bg-rr-frost text-rr-pewter"
            }`}
          >
            {s === 1 ? "Vehicle" : s === 2 ? "Details" : "Finance"}
          </div>
        ))}
      </div>

      <div className="p-8 lg:p-10">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Model</label>
              <select value={formData.model} onChange={(e) => update("model", e.target.value)} className={selectClass} required>
                <option value="">Select a model</option>
                {models.map((m) => (
                  <option key={m.slug} value={m.slug}>{m.fullName}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Finance Type</label>
              <select value={formData.financeType} onChange={(e) => update("financeType", e.target.value)} className={selectClass}>
                <option value="">Not sure yet</option>
                <option value="pcp">PCP (Personal Contract Purchase)</option>
                <option value="hp">HP (Hire Purchase)</option>
                <option value="lease">Lease</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Monthly Budget</label>
                <select value={formData.budget} onChange={(e) => update("budget", e.target.value)} className={selectClass}>
                  <option value="">Select</option>
                  <option value="under-300">Under £300/mo</option>
                  <option value="300-500">£300 - £500/mo</option>
                  <option value="500-800">£500 - £800/mo</option>
                  <option value="800-1200">£800 - £1,200/mo</option>
                  <option value="1200-plus">£1,200+/mo</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Deposit</label>
                <select value={formData.deposit} onChange={(e) => update("deposit", e.target.value)} className={selectClass}>
                  <option value="">Select</option>
                  <option value="none">No deposit</option>
                  <option value="under-5000">Under £5,000</option>
                  <option value="5000-10000">£5,000 - £10,000</option>
                  <option value="10000-20000">£10,000 - £20,000</option>
                  <option value="20000-plus">£20,000+</option>
                </select>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full py-4 bg-rr-black text-white text-[11px] tracking-[0.25em] uppercase hover:bg-rr-graphite transition-colors duration-300"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">First Name</label>
                <input type="text" value={formData.firstName} onChange={(e) => update("firstName", e.target.value)} className={inputClass} required />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Last Name</label>
                <input type="text" value={formData.lastName} onChange={(e) => update("lastName", e.target.value)} className={inputClass} required />
              </div>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Email</label>
              <input type="email" value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} required />
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Phone</label>
              <input type="tel" value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} required />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-rr-mist text-[11px] tracking-[0.25em] text-rr-black uppercase hover:bg-rr-frost transition-colors duration-300"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 py-4 bg-rr-black text-white text-[11px] tracking-[0.25em] uppercase hover:bg-rr-graphite transition-colors duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Employment</label>
              <select value={formData.employmentStatus} onChange={(e) => update("employmentStatus", e.target.value)} className={selectClass}>
                <option value="">Select status</option>
                <option value="employed">Employed (Full-time)</option>
                <option value="self-employed">Self-Employed</option>
                <option value="part-time">Employed (Part-time)</option>
                <option value="retired">Retired</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] tracking-[0.15em] text-rr-silver uppercase mb-2">Additional Info</label>
              <textarea
                value={formData.message}
                onChange={(e) => update("message", e.target.value)}
                rows={3}
                className={`${inputClass} resize-none`}
                placeholder="Part exchange details, specific requirements..."
              />
            </div>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-0.5 accent-rr-black"
                required
              />
              <span className="text-[11px] text-rr-pewter leading-relaxed">
                I consent to my data being processed to receive a finance quotation.
                See our <a href="/privacy-policy" className="text-rr-black underline">Privacy Policy</a>.
              </span>
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 py-4 border border-rr-mist text-[11px] tracking-[0.25em] text-rr-black uppercase hover:bg-rr-frost transition-colors duration-300"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-4 bg-rr-black text-white text-[11px] tracking-[0.25em] uppercase hover:bg-rr-graphite transition-colors duration-300"
              >
                Get My Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
