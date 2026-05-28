"use client";
import { motion } from "framer-motion";

const problems = [
  {
    emoji: "😰",
    title: "Salary-to-salary stress",
    stat: "73% of urban earners have less than 1 month of expenses saved.",
    accent: "#e74c3c",
  },
  {
    emoji: "🎭",
    title: "Scam culture explosion",
    stat: "Indians lost ₹11,000 crore to investment scams in 2023 alone.",
    accent: "#f39c12",
  },
  {
    emoji: "📚",
    title: "Finance jargon barrier",
    stat: "SIP, CAGR, NAV — most people give up before even starting.",
    accent: "#3498db",
  },
  {
    emoji: "🕳️",
    title: "No retirement plan",
    stat: "68% of working Indians have zero formal retirement savings.",
    accent: "#5b4cf5",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">The real problem</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--ink)] mb-4 max-w-xl">
          Most people are one crisis away from financial disaster.
        </h2>
        <p className="text-[var(--ink2)] max-w-lg mb-12">
          Not because they earn too little — but because no one ever taught them how to manage money honestly.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 relative overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: p.accent }}
            />
            <div className="text-3xl mb-3">{p.emoji}</div>
            <h3 className="font-display font-bold text-sm text-[var(--ink)] mb-2">{p.title}</h3>
            <p className="text-xs text-[var(--ink3)] leading-relaxed">{p.stat}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
