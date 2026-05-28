"use client";
import { motion } from "framer-motion";

const bars = [
  { label: "Savings rate", value: 34, color: "#1a9970", display: "34%" },
  { label: "Debt repayment", value: 58, color: "#5b4cf5", display: "58%" },
  { label: "Emergency fund", value: 42, color: "#d97706", display: "2.1 months" },
];

export default function FinancialScoreCard() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6 shadow-xl shadow-black/5">
      {/* Score ring area */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-20 h-20 flex-shrink-0">
          <svg viewBox="0 0 80 80" className="-rotate-90 w-full h-full">
            <circle cx="40" cy="40" r="34" fill="none" stroke="#ede9ff" strokeWidth="7" />
            <motion.circle
              cx="40" cy="40" r="34"
              fill="none" stroke="#5b4cf5" strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray="213"
              initial={{ strokeDashoffset: 213 }}
              animate={{ strokeDashoffset: 213 * (1 - 0.76) }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-xl text-[#5b4cf5]">
            76
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-[var(--ink)] mb-0.5">Financial Health Score</h3>
          <p className="text-xs text-[var(--ink3)]">Good — improving steadily</p>
          <span className="inline-block mt-1 text-xs bg-[#e3f5ee] text-[#1a9970] font-semibold px-2.5 py-0.5 rounded-full">
            ▲ +4 this month
          </span>
        </div>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-3 mb-5">
        {bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-[var(--ink2)]">{bar.label}</span>
              <span style={{ color: bar.color }} className="font-semibold">{bar.display}</span>
            </div>
            <div className="h-1.5 bg-[#ede9ff] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: bar.color }}
                initial={{ width: 0 }}
                animate={{ width: `${bar.value}%` }}
                transition={{ duration: 0.9, delay: 0.5 + i * 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* AI tip */}
      <div className="bg-[#f0eef8] rounded-xl p-3 flex gap-2.5 items-start">
        <span className="text-base mt-0.5">💡</span>
        <p className="text-xs text-[var(--ink2)] leading-relaxed">
          <strong>AI tip:</strong> Move ₹2,000 from unused subscriptions to your emergency fund this month.
        </p>
      </div>
    </div>
  );
}
