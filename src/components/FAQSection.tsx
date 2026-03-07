"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ title = "Frequently Asked Questions", faqs }: { title?: string; faqs: FAQ[] }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        <h2 className="text-2xl lg:text-3xl font-light tracking-wide text-rr-black text-center mb-12">{title}</h2>
        <div className="divide-y divide-rr-mist border-t border-b border-rr-mist">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[14px] font-normal text-rr-black pr-8 group-hover:text-rr-gunmetal transition-colors">
          {question}
        </span>
        <span className="text-rr-silver shrink-0 text-lg font-light transition-transform duration-300">
          {open ? "\u2212" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[13px] text-rr-silver leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}
