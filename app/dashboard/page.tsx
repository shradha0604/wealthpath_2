"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Bot, Shield, Target, Zap, BookOpen, Users, Settings, LogOut, Bell, Menu
} from "lucide-react";
import Link from "next/link";
import FinancialScoreCard from "@/components/dashboard/FinancialScoreCard";
import WeeklyActionPlan from "@/components/dashboard/WeeklyActionPlan";
import SpendingChart from "@/components/dashboard/SpendingChart";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: true },
  { icon: Bot, label: "AI Mentor", href: "/chat" },
  { icon: Shield, label: "Scam Shield", href: "/scam-shield" },
  { icon: Target, label: "Goals", href: "/goals" },
  { icon: Zap, label: "Simulator", href: "/simulator" },
  { icon: BookOpen, label: "Education", href: "/education" },
  { icon: Users, label: "Family", href: "/family" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[var(--surface)]">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-60" : "w-16"} flex-shrink-0 bg-[var(--card)] border-r border-[var(--border)] flex flex-col transition-all duration-300 hidden md:flex`}>
        <div className="p-4 border-b border-[var(--border)] flex items-center gap-2">
          <div className="w-8 h-8 bg-[#5b4cf5] rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield size={16} className="text-white" />
          </div>
          {sidebarOpen && <span className="font-display font-bold text-sm text-[#5b4cf5]">WealthPath AI</span>}
        </div>
        <nav className="flex-1 p-3">
          {navItems.map(({ icon: Icon, label, href, active }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 text-sm font-medium transition-colors ${
                active
                  ? "bg-[#ede9ff] text-[#5b4cf5]"
                  : "text-[var(--ink2)] hover:bg-[var(--surface)] hover:text-[var(--ink)]"
              }`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {sidebarOpen && label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-[var(--border)]">
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[var(--ink2)] hover:bg-[var(--surface)]">
            <Settings size={18} />
            {sidebarOpen && "Settings"}
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-[#c0392b] hover:bg-[#fdecea]">
            <LogOut size={18} />
            {sidebarOpen && "Sign out"}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-[var(--surface)]/80 backdrop-blur-md border-b border-[var(--border)] px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-[var(--card)]">
              <Menu size={18} />
            </button>
            <div>
              <p className="text-xs text-[var(--ink3)]">Good morning</p>
              <h1 className="font-display font-bold text-base text-[var(--ink)]">Rahul Sharma 👋</h1>
            </div>
          </div>
          <button className="relative p-2 rounded-xl border border-[var(--border)] hover:bg-[var(--card)]">
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#c0392b] rounded-full" />
          </button>
        </header>

        {/* Content */}
        <div className="p-6 max-w-5xl">
          {/* Alert */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#fdecea] border border-[#f5a0a0] rounded-xl px-5 py-3.5 flex items-center gap-3 mb-6"
          >
            <Shield size={18} className="text-[#c0392b] flex-shrink-0" />
            <div className="text-sm">
              <strong className="text-[#c0392b]">Scam Alert:</strong>{" "}
              <span className="text-[var(--ink2)]">A suspicious investment message was detected in your linked WhatsApp. <Link href="/scam-shield" className="text-[#5b4cf5] font-medium underline">View report →</Link></span>
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <FinancialScoreCard />
            <WeeklyActionPlan />
          </div>
          <SpendingChart />
        </div>
      </main>
    </div>
  );
}
