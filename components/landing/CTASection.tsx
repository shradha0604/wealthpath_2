"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#5b4cf5] rounded-3xl p-12 text-white"
        >
          <h2 className="font-display text-4xl font-extrabold mb-4 leading-tight">
            Start your financial freedom journey today.
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Join 50,000+ users who stopped being confused about money.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/auth?mode=signup"
              className="flex items-center gap-2 bg-white text-[#5b4cf5] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
            >
              Get started free <ArrowRight size={16} />
            </Link>
            <Link
              href="#scam-shield"
              className="flex items-center gap-2 border border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:border-white/60 transition-colors"
            >
              Try Scam Shield free
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-6">No credit card · No hidden charges · Cancel anytime</p>
        </motion.div>
      </div>
    </section>
  );
}
