"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const scenarios = [
  {
    key: "iphone",
    emoji: "📱",
    title: "Buy iPhone 15 Pro",
    sub: "₹1,34,900 upfront or EMI",
    impacts: [
      { label: "Monthly savings reduction", value: "-₹4,497/mo (EMI)", type: "neg" },
      { label: "Emergency fund impact", value: "-2.3 months setback", type: "neg" },
      { label: "Retirement delay", value: "+1.2 years", type: "neg" },
      { label: "Better alternative", value: "₹60K phone + ₹75K invested", type: "pos" },
    ],
  },
  {
    key: "loan",
    emoji: "🏦",
    title: "Take ₹5L education loan",
    sub: "3 years, 12% interest",
    impacts: [
      { label: "Monthly EMI burden", value: "-₹16,607/mo", type: "neg" },
      { label: "Total interest paid", value: "₹97,852 extra", type: "neg" },
      { label: "Income boost potential", value: "+₹15K–40K/mo post-degree", type: "pos" },
      { label: "Net verdict", value: "Worthwhile if ROI is clear", type: "pos" },
    ],
  },
  {
    key: "quit",
    emoji: "🚪",
    title: "Quit job, freelance",
    sub: "Variable income risk",
    impacts: [
      { label: "Stable income lost", value: "-₹35,000/mo certainty", type: "neg" },
      { label: "Emergency fund needed", value: "6 months minimum first", type: "neg" },
      { label: "Freelance potential", value: "₹20K–80K/mo variable", type: "pos" },
      { label: "AI advice", value: "Build ₹2L safety net first", type: "pos" },
    ],
  },
  {
    key: "sip",
    emoji: "📈",
    title: "Start ₹3K/month SIP",
    sub: "Equity mutual fund",
    impacts: [
      { label: "Monthly impact", value: "-₹3,000 (manageable)", type: "neg" },
      { label: "Value in 10 years", value: "~₹6.9L (at 12% CAGR)", type: "pos" },
      { label: "Value in 20 years", value: "~₹29.9L (at 12% CAGR)", type: "pos" },
      { label: "Verdict", value: "Best decision in this list!", type: "pos" },
    ],
  },
];

export default function SimulatorSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const active = scenarios.find((s) => s.key === selected);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Life decision simulator</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-3">
          Think before you act. Simulate before you decide.
        </h2>
        <p className="text-[var(--ink2)]">Pick a life decision and see how it affects your financial future.</p>
      </motion.div>

      <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6">
        <p className="text-xs text-[var(--ink3)] mb-4 font-medium">Choose a scenario to simulate:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {scenarios.map((s) => (
            <button
              key={s.key}
              onClick={() => setSelected(s.key)}
              className={`text-left border rounded-xl p-4 transition-all ${
                selected === s.key
                  ? "border-[#5b4cf5] bg-[#ede9ff]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[#5b4cf5]"
              }`}
            >
              <span className="text-2xl block mb-2">{s.emoji}</span>
              <span className="text-xs font-semibold text-[var(--ink)] block mb-1">{s.title}</span>
              <span className="text-xs text-[var(--ink3)]">{s.sub}</span>
            </button>
          ))}
        </div>

        {active && (
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#f0eef8] rounded-xl p-5"
          >
            <h4 className="text-sm font-bold text-[#5b4cf5] mb-4">AI projection: {active.title}</h4>
            <div className="flex flex-col gap-2">
              {active.impacts.map((imp) => (
                <div key={imp.label} className="flex justify-between items-center text-sm border-b border-[#5b4cf5]/10 pb-2 last:border-0 last:pb-0">
                  <span className="text-[var(--ink2)]">{imp.label}</span>
                  <span className={`font-semibold ${imp.type === "neg" ? "text-[#c0392b]" : "text-[#1a9970]"}`}>
                    {imp.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {!active && (
          <div className="text-center py-8 text-sm text-[var(--ink3)]">
            Select a scenario above to see AI financial projections →
          </div>
        )}
      </div>
    </section>
  );
}
