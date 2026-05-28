"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, Shield } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Scam Shield", href: "#scam-shield" },
  { label: "Pricing", href: "#pricing" },
  { label: "Education", href: "/education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-[#0f0f14]/90 backdrop-blur-md shadow-sm border-b border-black/5 dark:border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <span className="font-display font-800 text-lg tracking-tight">
              <span className="text-[#5b4cf5]">Wealth</span>
              <span className="text-[var(--ink)]">Path AI</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[var(--ink2)] hover:text-[var(--ink)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center hover:bg-[var(--card)] transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}
            <Link
              href="/auth"
              className="text-sm font-medium px-4 py-2 rounded-full border border-[var(--border)] hover:border-[#5b4cf5] transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/auth?mode=signup"
              className="text-sm font-medium px-4 py-2 rounded-full bg-[#5b4cf5] text-white hover:bg-[#4338d4] transition-colors"
            >
              Get started free
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[var(--card)] border-b border-[var(--border)] p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/auth?mode=signup"
              className="text-sm font-medium px-4 py-3 rounded-xl bg-[#5b4cf5] text-white text-center mt-2"
            >
              Get started free
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
