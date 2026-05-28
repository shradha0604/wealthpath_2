"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, AlertTriangle } from "lucide-react";
import FinancialScoreCard from "@/components/dashboard/FinancialScoreCard";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#ede9ff] text-[#5b4cf5] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-[#d0c8fa]">
            <Shield size={12} />
            Trusted by 50,000+ users across India
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-extrabold text-[var(--ink)] leading-[1.05] mb-5">
            Financial freedom,<br />
            without{" "}
            <span className="text-[#5b4cf5] relative">
              financial
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#5b4cf5]/30 rounded-full" />
            </span>
            <br />confusion.
          </h1>

          <p className="text-lg text-[var(--ink2)] mb-8 leading-relaxed max-w-md">
            Your AI-powered money mentor that helps you save smarter, avoid scams,
            reduce stress, and build real wealth — safely and ethically.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/auth?mode=signup"
              className="flex items-center gap-2 bg-[#5b4cf5] text-white font-medium px-6 py-3 rounded-full hover:bg-[#4338d4] transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#5b4cf5]/30"
            >
              Start your journey <ArrowRight size={16} />
            </Link>
            <Link
              href="#features"
              className="flex items-center gap-2 border border-[var(--border)] text-[var(--ink)] font-medium px-6 py-3 rounded-full hover:border-[#5b4cf5] transition-colors"
            >
              See all features
            </Link>
          </div>

          <p className="text-xs text-[var(--ink3)]">
            No credit card required · Free forever plan · No hidden charges
          </p>
        </motion.div>

        {/* Right: Dashboard card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Floating pills */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 right-6 z-10 bg-white dark:bg-[#1a1a22] border border-[var(--border)] rounded-full px-3 py-2 flex items-center gap-2 shadow-md text-xs font-medium text-[#1a9970]"
          >
            <div className="w-2 h-2 bg-[#1a9970] rounded-full" />
            Saved ₹12,400 this month
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-2 -left-4 z-10 bg-white dark:bg-[#1a1a22] border border-[var(--border)] rounded-full px-3 py-2 flex items-center gap-2 shadow-md text-xs font-medium text-[#c0392b]"
          >
            <Shield size={12} className="text-[#c0392b]" />
            Scam blocked!
          </motion.div>

          <FinancialScoreCard />
        </motion.div>
      </div>
    </section>
  );
}
