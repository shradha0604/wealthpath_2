"use client";
import { motion } from "framer-motion";

const goals = [
  { emoji: "🏍️", title: "Bike", target: "₹85,000", saved: "₹52,700", progress: 62, months: "4 months left", color: "#1a73e8", bg: "#e8f0fe" },
  { emoji: "✈️", title: "Goa trip", target: "₹25,000", saved: "₹22,000", progress: 88, months: "1 month left", color: "#d97706", bg: "#fef3c7" },
  { emoji: "🛡️", title: "Emergency fund", target: "3 months expenses", saved: "1.2 months built", progress: 40, months: "On track", color: "#1a9970", bg: "#e3f5ee" },
  { emoji: "🏠", title: "Home down payment", target: "₹5L target", saved: "₹90,000 saved", progress: 18, months: "38 months left", color: "#c0392b", bg: "#fdecea" },
];

export default function GoalsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Goal-based savings</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)]">
          Every goal has a path. AI helps you walk it.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {goals.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: g.bg }}>
                {g.emoji}
              </div>
              <div>
                <p className="text-sm font-bold text-[var(--ink)]">{g.title}</p>
                <p className="text-xs text-[var(--ink3)]">{g.target}</p>
              </div>
            </div>
            <div className="h-1.5 bg-[#f0eef8] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: g.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${g.progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between text-xs text-[var(--ink3)]">
              <span>{g.saved}</span>
              <span>{g.months}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
