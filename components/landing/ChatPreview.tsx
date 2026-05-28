"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const suggestedQuestions = [
  "Can I afford a ₹15,000 bike EMI?",
  "Should I close my loan or start SIP?",
  "How do I save ₹5,000/month?",
  "How much emergency fund do I need?",
];

type Message = { role: "ai" | "user"; text: string };

const initialMessages: Message[] = [
  {
    role: "ai",
    text: "Hi! 👋 I'm your AI financial mentor. Ask me anything about saving, investing, loans, or scam protection — in plain language, no judgement.",
  },
];

const quickReplies: Record<string, string> = {
  "Can I afford a ₹15,000 bike EMI?":
    "Based on healthy budgeting, EMIs should be under 40% of take-home pay. If ₹15,000 is under 15% of your income AND you have a 2-month emergency fund, it's manageable. Otherwise, wait 2–3 months first. 🏍️",
  "Should I close my loan or start SIP?":
    "If your loan rate is above 12%, close the loan first — guaranteed savings beat most SIP returns. If below 10%, do both. A small ₹500 SIP builds the habit while you repay. Never pay only the minimum on high-interest debt. 💰",
  "How do I save ₹5,000/month?":
    "On most salaries: (1) Cancel unused subscriptions ~₹800, (2) Cook 4 meals/week instead of ordering, (3) Move ₹2,000 on payday before you spend it. Start with ₹2,500 if ₹5,000 feels hard — consistency beats perfection. 📈",
  "How much emergency fund do I need?":
    "For salaried employees: 3 months of expenses minimum. If you support family or have EMIs: aim for 6 months. Calculate: rent + food + EMIs + bills = your monthly survival number. Keep it in a liquid savings account. 🛡️",
};

export default function ChatPreview() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const reply =
        quickReplies[text] ||
        "Great question! For a full personalized answer based on your income and expenses, sign up free — the AI mentor has access to your complete financial profile.";
      setMessages((m) => [...m, { role: "ai", text: reply }]);
    }, 1500);
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">AI mentor</p>
          <h2 className="font-display text-3xl font-extrabold text-[var(--ink)] mb-4">
            Ask anything about your money. In plain English.
          </h2>
          <p className="text-[var(--ink2)] mb-6 leading-relaxed">
            No judgement. No jargon. No toxic advice. Just clear, honest guidance that sounds like a smart friend who actually knows finance.
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="text-xs font-medium bg-[#ede9ff] text-[#5b4cf5] px-3 py-2 rounded-full border border-[#d0c8fa] hover:bg-[#e0daf8] transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden shadow-xl shadow-black/5"
        >
          {/* Header */}
          <div className="bg-[#f4f2ff] dark:bg-[#1a1a2e] px-5 py-4 border-b border-[var(--border)] flex items-center gap-3">
            <div className="w-9 h-9 bg-[#5b4cf5] rounded-full flex items-center justify-center text-white font-display font-bold text-sm">W</div>
            <div>
              <p className="text-sm font-semibold text-[var(--ink)]">WealthPath AI Mentor</p>
              <p className="text-xs text-[#1a9970] font-medium">● Online — always here for you</p>
            </div>
          </div>

          {/* Messages */}
          <div ref={bodyRef} className="p-4 flex flex-col gap-3 h-72 overflow-y-auto">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "ai"
                    ? "bg-[#f0eef8] text-[var(--ink)] rounded-tl-sm self-start"
                    : "bg-[#5b4cf5] text-white rounded-tr-sm self-end"
                }`}
              >
                {m.text}
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex gap-1.5 items-center bg-[#f0eef8] px-4 py-3 rounded-2xl rounded-tl-sm w-14 self-start">
                {[0, 0.2, 0.4].map((d) => (
                  <motion.div
                    key={d}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                    className="w-1.5 h-1.5 rounded-full bg-[#5b4cf5]"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[var(--border)] flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Ask about your money..."
              className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-2 text-sm outline-none focus:border-[#5b4cf5] text-[var(--ink)] transition-colors"
            />
            <button
              onClick={() => sendMessage(input)}
              className="w-9 h-9 bg-[#5b4cf5] rounded-full flex items-center justify-center text-white hover:bg-[#4338d4] transition-colors"
            >
              <Send size={14} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
