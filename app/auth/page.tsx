"use client";
import { useState } from "react";
import { Shield, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Integrate with Supabase Auth here
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[var(--surface)] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--ink3)] mb-8 hover:text-[var(--ink)] transition-colors">
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-8">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-[#5b4cf5] rounded-lg flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-lg">
              <span className="text-[#5b4cf5]">Wealth</span>Path AI
            </span>
          </div>

          {/* Toggle */}
          <div className="flex bg-[var(--surface)] rounded-xl p-1 mb-7">
            {(["signup", "signin"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  mode === m ? "bg-[var(--card)] shadow-sm text-[var(--ink)]" : "text-[var(--ink3)]"
                }`}
              >
                {m === "signup" ? "Create account" : "Sign in"}
              </button>
            ))}
          </div>

          <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-1">
            {mode === "signup" ? "Start your journey" : "Welcome back"}
          </h2>
          <p className="text-sm text-[var(--ink3)] mb-6">
            {mode === "signup"
              ? "Free forever. No credit card required."
              : "Continue to your financial dashboard."}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === "signup" && (
              <div>
                <label className="text-xs font-medium text-[var(--ink2)] block mb-1.5">Full name</label>
                <input
                  type="text"
                  placeholder="Rahul Sharma"
                  required
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[#5b4cf5] transition-colors"
                />
              </div>
            )}
            <div>
              <label className="text-xs font-medium text-[var(--ink2)] block mb-1.5">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                required
                className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[#5b4cf5] transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-[var(--ink2)] block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  required
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-3 pr-11 text-sm bg-[var(--surface)] text-[var(--ink)] outline-none focus:border-[#5b4cf5] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--ink3)] hover:text-[var(--ink)]"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5b4cf5] text-white font-medium py-3.5 rounded-xl hover:bg-[#4338d4] transition-colors disabled:opacity-60 text-sm mt-1"
            >
              {loading ? "Please wait..." : mode === "signup" ? "Create free account" : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-[var(--border)]" />
            <span className="text-xs text-[var(--ink3)]">or</span>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <button className="w-full border border-[var(--border)] rounded-xl py-3 text-sm font-medium hover:border-[#5b4cf5] transition-colors flex items-center justify-center gap-2 text-[var(--ink)]">
            <svg width="16" height="16" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957C.347 6.175 0 7.55 0 9s.348 2.825.957 4.039l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"/></svg>
            Continue with Google
          </button>

          <p className="text-xs text-[var(--ink3)] text-center mt-5 leading-relaxed">
            By continuing, you agree to our{" "}
            <Link href="#" className="underline hover:text-[#5b4cf5]">Terms</Link> and{" "}
            <Link href="#" className="underline hover:text-[#5b4cf5]">Privacy Policy</Link>.
            WealthPath AI is not a SEBI-registered investment advisor.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
