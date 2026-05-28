"use client";
import { useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const actions = [
  { text: "Move ₹500 to emergency fund", done: true },
  { text: "Cancel Netflix — save ₹649", done: true },
  { text: "Reduce Swiggy spend by ₹300", done: false },
  { text: "Read: Why SIPs beat lump sum", done: false },
  { text: "Review monthly subscriptions", done: false },
];

export default function WeeklyActionPlan() {
  const [tasks, setTasks] = useState(actions);

  const toggle = (i: number) =>
    setTasks((prev) => prev.map((t, idx) => idx === i ? { ...t, done: !t.done } : t));

  const done = tasks.filter((t) => t.done).length;

  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display font-bold text-base text-[var(--ink)]">This week&apos;s AI action plan</h3>
        <span className="text-xs font-semibold bg-[#ede9ff] text-[#5b4cf5] px-2.5 py-1 rounded-full">{done}/{tasks.length} done</span>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 bg-[#f0eef8] rounded-full mb-5">
        <div
          className="h-full bg-[#5b4cf5] rounded-full transition-all duration-500"
          style={{ width: `${(done / tasks.length) * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-2.5">
        {tasks.map((task, i) => (
          <button
            key={i}
            onClick={() => toggle(i)}
            className="flex items-center gap-3 text-left w-full group"
          >
            {task.done
              ? <CheckCircle2 size={18} className="text-[#1a9970] flex-shrink-0" />
              : <Circle size={18} className="text-[var(--ink3)] group-hover:text-[#5b4cf5] flex-shrink-0 transition-colors" />}
            <span className={`text-sm ${task.done ? "line-through text-[var(--ink3)]" : "text-[var(--ink2)]"}`}>
              {task.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
