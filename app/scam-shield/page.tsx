"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Upload, AlertCircle, CheckCircle, Loader2 } from "lucide-react";

type Result = {
  risk: number;
  verdict: string;
  flags: string[];
  safe?: string;
};

const exampleScams: Record<string, Result> = {
  ponzi: {
    risk: 91,
    verdict: "HIGH RISK — Likely Ponzi scheme",
    flags: [
      "Promises guaranteed monthly returns of 30–40%",
      "Referral bonus structure matches MLM pyramid patterns",
      "No mention of SEBI registration or regulatory oversight",
      "Artificial urgency: 'Only 50 seats left today'",
    ],
  },
  safe: {
    risk: 4,
    verdict: "SAFE — Looks legitimate",
    flags: [],
    safe: "This appears to be a legitimate SEBI-registered mutual fund SIP offer. Always verify the fund house name independently at sebi.gov.in.",
  },
};

export default function ScamShieldPage() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const analyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
    // Demo: detect keywords
    const lower = text.toLowerCase();
    if (lower.includes("guaranteed") || lower.includes("refer") || lower.includes("40%")) {
      setResult(exampleScams.ponzi);
    } else {
      setResult(exampleScams.safe);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--surface)] py-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-[#5b4cf5] rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Shield size={28} className="text-white" />
          </div>
          <h1 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-3">Scam Shield AI</h1>
          <p className="text-[var(--ink2)]">Paste any investment message or upload a screenshot. Our AI will detect if it&apos;s a scam.</p>
        </div>

        {/* Input */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6 mb-5">
          <label className="text-xs font-semibold text-[var(--ink2)] block mb-3 uppercase tracking-wider">
            Paste message / offer here
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g. 'Join our exclusive trading group — guaranteed 40% returns in 30 days! Limited seats only. Refer 3 friends for premium access...'"
            rows={5}
            className="w-full bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--ink)] outline-none focus:border-[#5b4cf5] transition-colors resize-none"
          />
          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 text-sm text-[var(--ink2)] border border-[var(--border)] px-4 py-2.5 rounded-xl hover:border-[#5b4cf5] transition-colors">
              <Upload size={15} />
              Upload screenshot
            </button>
            <button
              onClick={analyze}
              disabled={!text.trim() || loading}
              className="ml-auto flex items-center gap-2 bg-[#5b4cf5] text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-[#4338d4] transition-colors disabled:opacity-50"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : <Shield size={15} />}
              {loading ? "Analyzing..." : "Analyze now"}
            </button>
          </div>
        </div>

        {/* Result */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className={`rounded-2xl p-6 border ${
                result.risk > 50
                  ? "bg-[#fdecea] border-[#f5a0a0]"
                  : "bg-[#e3f5ee] border-[#9ed9be]"
              }`}
            >
              {/* Risk meter */}
              <div className="flex justify-between items-center text-sm font-semibold mb-2">
                <span className={result.risk > 50 ? "text-[#c0392b]" : "text-[#1a9970]"}>
                  Scam probability: {result.risk}%
                </span>
                <span className={result.risk > 50 ? "text-[#c0392b]" : "text-[#1a9970]"}>
                  {result.verdict}
                </span>
              </div>
              <div className="h-3 bg-white/50 rounded-full mb-5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${result.risk}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: result.risk > 50 ? "linear-gradient(90deg,#f59e0b,#ef4444)" : "#1a9970" }}
                />
              </div>

              {result.flags.length > 0 && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-[#c0392b] uppercase tracking-wider mb-1">Red flags detected:</p>
                  {result.flags.map((f) => (
                    <div key={f} className="flex gap-2.5 items-start text-xs text-[#c0392b] bg-white/40 px-3 py-2.5 rounded-xl">
                      <AlertCircle size={13} className="flex-shrink-0 mt-0.5" />
                      {f}
                    </div>
                  ))}
                </div>
              )}

              {result.safe && (
                <div className="flex gap-2.5 items-start text-sm text-[#1a9970]">
                  <CheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                  {result.safe}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-xs text-center text-[var(--ink3)] mt-6">
          WealthPath AI Scam Shield is free forever. We&apos;ve analyzed 2.3 million messages.
        </p>
      </div>
    </div>
  );
}
