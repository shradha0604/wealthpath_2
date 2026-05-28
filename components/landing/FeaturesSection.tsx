"use client";
import { motion } from "framer-motion";
import { Shield, Bot, Target, Clock, AlertTriangle, Users, BarChart2, BookOpen } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Scam Shield AI",
    desc: "Upload a screenshot or paste any investment message. Our AI detects Ponzi schemes, fake returns, MLM fraud, and phishing instantly.",
    featured: true,
    tag: "⚡ Our biggest USP",
    iconBg: "bg-white/20",
    iconColor: "text-white",
  },
  {
    icon: Bot,
    title: "AI Mentor Chat",
    desc: "Ask anything in plain English. Get honest, jargon-free guidance — never pushy advice.",
    iconBg: "bg-[#ede9ff]",
    iconColor: "text-[#5b4cf5]",
  },
  {
    icon: Target,
    title: "Goal-Based Savings",
    desc: "Create financial goals. AI builds a step-by-step savings plan with monthly milestones.",
    iconBg: "bg-[#e3f5ee]",
    iconColor: "text-[#1a9970]",
  },
  {
    icon: Clock,
    title: "Life Decision Simulator",
    desc: "Simulate 'What if I take a loan?' before you act.",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#d97706]",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Mode",
    desc: "One-tap crisis mode for job loss, medical emergency, or debt crisis.",
    iconBg: "bg-[#fdecea]",
    iconColor: "text-[#c0392b]",
  },
  {
    icon: Users,
    title: "Family Finance Mode",
    desc: "Shared goals, joint budgeting, and family emergency planning — together.",
    iconBg: "bg-[#e3f5ee]",
    iconColor: "text-[#1a9970]",
  },
  {
    icon: BarChart2,
    title: "Financial Stress Score",
    desc: "Track anxiety, debt pressure, and burnout risk — not just your balance.",
    iconBg: "bg-[#ede9ff]",
    iconColor: "text-[#5b4cf5]",
  },
  {
    icon: BookOpen,
    title: "Education Hub",
    desc: "Bite-sized lessons on SIP, credit scores, mutual funds — gamified.",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#d97706]",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Features</p>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[var(--ink)]">
          Every tool you need. Nothing you don&apos;t.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-2xl p-6 border cursor-default transition-all hover:-translate-y-1 hover:shadow-lg ${
                f.featured
                  ? "bg-[#5b4cf5] text-white border-[#5b4cf5] lg:col-span-2"
                  : "bg-[var(--card)] border-[var(--border)] hover:shadow-black/5"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                <Icon size={20} className={f.iconColor} />
              </div>
              <h3 className={`font-display font-bold text-base mb-2 ${f.featured ? "text-white" : "text-[var(--ink)]"}`}>
                {f.title}
              </h3>
              <p className={`text-sm leading-relaxed ${f.featured ? "text-white/75" : "text-[var(--ink2)]"}`}>
                {f.desc}
              </p>
              {f.tag && (
                <span className="inline-block mt-3 text-xs bg-white/20 text-white px-3 py-1 rounded-full font-medium">
                  {f.tag}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
