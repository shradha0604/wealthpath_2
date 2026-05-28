"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free forever",
    price: "₹0",
    period: "/mo",
    desc: "For anyone getting started",
    featured: false,
    features: [
      { text: "Basic budgeting & expense tracking", included: true },
      { text: "Scam detection (5/month)", included: true },
      { text: "AI chat (10 messages/day)", included: true },
      { text: "2 savings goals", included: true },
      { text: "Life decision simulator", included: false },
      { text: "Family mode", included: false },
    ],
    cta: "Start free",
    href: "/auth?mode=signup",
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/mo",
    desc: "For serious wealth builders",
    featured: true,
    features: [
      { text: "Everything in Free", included: true },
      { text: "Unlimited scam detection", included: true },
      { text: "Unlimited AI mentor", included: true },
      { text: "Life decision simulator", included: true },
      { text: "AI weekly action plans", included: true },
      { text: "10 savings goals", included: true },
    ],
    cta: "Get Pro →",
    href: "/auth?mode=signup&plan=pro",
  },
  {
    name: "Family",
    price: "₹349",
    period: "/mo",
    desc: "For families planning together",
    featured: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Up to 5 family members", included: true },
      { text: "Shared family goals", included: true },
      { text: "Family emergency mode", included: true },
      { text: "Joint budget dashboard", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Get Family →",
    href: "/auth?mode=signup&plan=family",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Pricing</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-3">
          Affordable. Always.
        </h2>
        <p className="text-[var(--ink2)]">Because financial advice shouldn&apos;t be a luxury.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-5">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`relative rounded-2xl p-7 ${
              plan.featured
                ? "border-2 border-[#5b4cf5]"
                : "border border-[var(--border)] bg-[var(--card)]"
            }`}
          >
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#5b4cf5] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
                Most popular
              </div>
            )}
            <p className="text-sm text-[var(--ink3)] mb-2">{plan.name}</p>
            <div className="font-display text-4xl font-extrabold text-[var(--ink)] mb-1">
              {plan.price}<span className="text-base font-normal text-[var(--ink3)]">{plan.period}</span>
            </div>
            <p className="text-xs text-[var(--ink3)] mb-6">{plan.desc}</p>
            <ul className="flex flex-col gap-2.5 mb-7">
              {plan.features.map((f) => (
                <li key={f.text} className="flex items-center gap-2.5 text-sm">
                  {f.included
                    ? <Check size={14} className="text-[#1a9970] flex-shrink-0" />
                    : <X size={14} className="text-[var(--ink3)] flex-shrink-0" />}
                  <span className={f.included ? "text-[var(--ink2)]" : "text-[var(--ink3)]"}>{f.text}</span>
                </li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`block text-center text-sm font-medium py-3 rounded-xl transition-colors ${
                plan.featured
                  ? "bg-[#5b4cf5] text-white hover:bg-[#4338d4]"
                  : "border border-[var(--border)] hover:border-[#5b4cf5] text-[var(--ink)]"
              }`}
            >
              {plan.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
