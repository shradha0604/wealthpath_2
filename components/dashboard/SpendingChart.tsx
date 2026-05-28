"use client";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const data = [
  { month: "Jan", saving: 4200, expense: 22800 },
  { month: "Feb", saving: 5100, expense: 21900 },
  { month: "Mar", saving: 3800, expense: 23200 },
  { month: "Apr", saving: 6200, expense: 20800 },
  { month: "May", saving: 7400, expense: 19600 },
  { month: "Jun", saving: 8100, expense: 18900 },
];

const categories = [
  { name: "Housing/Rent", amount: 9500, pct: 35, color: "#5b4cf5" },
  { name: "Food & Groceries", amount: 4800, pct: 18, color: "#1a9970" },
  { name: "Subscriptions", amount: 2100, pct: 8, color: "#d97706" },
  { name: "Transport", amount: 1800, pct: 7, color: "#1a73e8" },
  { name: "Entertainment", amount: 1500, pct: 6, color: "#c0392b" },
  { name: "Others", amount: 7000, pct: 26, color: "#888" },
];

export default function SpendingChart() {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      {/* Savings trend */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6">
        <h3 className="font-display font-bold text-base text-[var(--ink)] mb-1">Savings trend</h3>
        <p className="text-xs text-[var(--ink3)] mb-5">Monthly savings vs expenses (₹)</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={data} barSize={20} barGap={4}>
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: "var(--ink3)" }} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              formatter={(v: number) => `₹${v.toLocaleString("en-IN")}`}
              contentStyle={{ border: "0.5px solid var(--border)", borderRadius: 10, fontSize: 12 }}
            />
            <Bar dataKey="saving" fill="#5b4cf5" radius={[4, 4, 0, 0]} name="Savings" />
            <Bar dataKey="expense" fill="#ede9ff" radius={[4, 4, 0, 0]} name="Expenses" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category breakdown */}
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6">
        <h3 className="font-display font-bold text-base text-[var(--ink)] mb-1">Spending breakdown</h3>
        <p className="text-xs text-[var(--ink3)] mb-5">Where your money went this month</p>
        <div className="flex flex-col gap-3">
          {categories.map((c) => (
            <div key={c.name}>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-[var(--ink2)] font-medium">{c.name}</span>
                <span className="text-[var(--ink3)]">₹{c.amount.toLocaleString("en-IN")} ({c.pct}%)</span>
              </div>
              <div className="h-1.5 bg-[#f0eef8] rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
