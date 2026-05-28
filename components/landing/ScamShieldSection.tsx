"use client";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle } from "lucide-react";

const redFlags = [
  '"Guaranteed returns" — no legitimate investment guarantees profits',
  "Referral chain matches MLM/Ponzi patterns",
  'Artificial urgency ("2 hours") designed to prevent thinking',
  "40% monthly = 480% annual — mathematically impossible",
];

export default function ScamShieldSection() {
  return (
    <section id="scam-shield" className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-[var(--card)] border border-[var(--border)] rounded-3xl p-10 md:p-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Scam shield AI</p>
            <h2 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-4">
              Real people lose real money to scams every day. We stop that.
            </h2>
            <p className="text-[var(--ink2)] mb-6 leading-relaxed">
              Paste any message or upload a screenshot. Our AI scans for Ponzi schemes, fake trading gurus, MLM fraud, and loan app scams.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Telegram & WhatsApp scam detection",
                "Screenshot upload with OCR analysis",
                "Explains WHY something is dangerous",
                "100% free, forever",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[var(--ink2)]">
                  <CheckCircle size={16} className="text-[#1a9970] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--surface)] rounded-2xl p-6"
          >
            <p className="text-xs text-[var(--ink3)] font-medium mb-3">Message analyzed:</p>
            <div className="bg-[#fff8f0] border-2 border-[#fbbf24] rounded-xl p-4 mb-5 text-sm text-[var(--ink2)] leading-relaxed">
              🔥 <strong>EXCLUSIVE OPPORTUNITY!</strong> Join our{" "}
              <mark className="bg-[#fee2e2] text-[#991b1b] rounded px-0.5 font-medium not-italic">
                guaranteed 40% monthly returns
              </mark>{" "}
              trading program.{" "}
              <mark className="bg-[#fee2e2] text-[#991b1b] rounded px-0.5 font-medium">
                Limited seats only
              </mark>{" "}
              — deposit ₹10,000 and get ₹14,000 back in 30 days!{" "}
              <mark className="bg-[#fee2e2] text-[#991b1b] rounded px-0.5 font-medium">
                Refer 3 friends to unlock premium tier.
              </mark>{" "}
              DM now —{" "}
              <mark className="bg-[#fee2e2] text-[#991b1b] rounded px-0.5 font-medium">
                offer expires in 2 hours!
              </mark>
            </div>

            {/* Risk bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-medium mb-1.5">
                <span className="text-[var(--ink2)]">Scam probability</span>
                <span className="text-[#c0392b] font-bold">83% HIGH RISK</span>
              </div>
              <div className="h-2.5 bg-[#f0eef8] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #f59e0b, #ef4444)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "83%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Red flags */}
            <div className="flex flex-col gap-2">
              {redFlags.map((flag) => (
                <div
                  key={flag}
                  className="flex gap-2.5 items-start text-xs text-[#c0392b] bg-[#fdecea] px-3 py-2.5 rounded-xl"
                >
                  <AlertCircle size={13} className="flex-shrink-0 mt-0.5" />
                  {flag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
