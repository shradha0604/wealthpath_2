"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is my financial data actually safe?",
    a: "Yes. All data is end-to-end encrypted at rest and in transit using AES-256 encryption. We never store your raw credentials and will never sell your data to third parties — this is in our legal Terms of Service, not just marketing copy.",
  },
  {
    q: "Is this real investment advice?",
    a: "No — and we're proud of that transparency. WealthPath AI provides educational financial guidance and personalized planning tools. We are not a SEBI-registered investment advisor. Our AI never guarantees returns, never recommends specific stocks, and always encourages you to verify major decisions with a licensed professional.",
  },
  {
    q: "I'm terrible at finance. Can I still use this?",
    a: "This was literally built for you. Every feature uses plain language — no jargon. The AI explains concepts like 'SIP is like planting money seeds monthly.' We have a dedicated No Jargon Mode and beginner micro-lessons that take under 2 minutes each.",
  },
  {
    q: "How does the scam detection work?",
    a: "Our AI has been trained on thousands of real scam messages, Ponzi scheme structures, MLM recruitment patterns, and fraud language. When you paste a message or upload a screenshot, it runs NLP analysis to identify red flags like unrealistic return promises, artificial urgency, and referral chains.",
  },
  {
    q: "Does it work in regional languages?",
    a: "We currently support English and Hindi, with Kannada, Tamil, Telugu, and Marathi in active development. Voice input support in regional languages is coming to make the platform accessible to rural and semi-urban users.",
  },
  {
    q: "What if I lose my job? Can WealthPath help?",
    a: "Yes — Emergency Mode is built exactly for this. One tap gives you a survival budget, expense reduction plan, government scheme finder, and mental health resources. The AI adapts your entire financial plan instantly to your new situation.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">FAQ</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)]">Questions we love to answer.</h2>
      </motion.div>

      <div className="border border-[var(--border)] rounded-2xl overflow-hidden divide-y divide-[var(--border)]">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-[var(--card)]">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-[var(--surface)] transition-colors"
            >
              <span className="text-sm font-semibold text-[var(--ink)] pr-4">{faq.q}</span>
              <ChevronDown
                size={18}
                className={`text-[var(--ink3)] flex-shrink-0 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-[var(--ink2)] leading-relaxed">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
