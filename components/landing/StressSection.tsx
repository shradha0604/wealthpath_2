"use client";
import { motion } from "framer-motion";

const scores = [
  { num: 72, label: "Savings stability", status: "Stable", color: "#1a9970", bg: "#e3f5ee", textColor: "#1a9970" },
  { num: 48, label: "Debt pressure index", status: "Moderate", color: "#d97706", bg: "#fef3c7", textColor: "#b45309" },
  { num: 31, label: "Emergency readiness", status: "At risk", color: "#c0392b", bg: "#fdecea", textColor: "#c0392b" },
];

export default function StressSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Financial wellness</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)] max-w-xl mb-3">
          We track your financial health, not just your balance.
        </h2>
        <p className="text-[var(--ink2)]">Most apps show you numbers. We show you how those numbers are affecting your life.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {scores.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-7 text-center"
          >
            <div className="font-display text-5xl font-extrabold mb-2" style={{ color: s.color }}>
              {s.num}
            </div>
            <p className="text-sm text-[var(--ink3)] mb-3">{s.label}</p>
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: s.bg, color: s.textColor }}
            >
              {s.status}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
