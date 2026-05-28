"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Bot, Mic, ChevronLeft } from "lucide-react";
import Link from "next/link";

type Message = { role: "user" | "ai"; text: string; time: string };

const suggested = [
  "How do I start an emergency fund?",
  "Explain SIP in simple words",
  "Should I close my credit card?",
  "What is a good credit score?",
  "How much should I save monthly?",
  "Is gold a good investment?",
];

const getTime = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi! 👋 I'm your WealthPath AI mentor. I can help you with budgeting, savings, debt, investments, scam detection, and more. What's on your mind today?",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text, time: getTime() }]);
    setLoading(true);

    // Call Gemini/OpenAI API here in production
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setMessages((m) => [
      ...m,
      {
        role: "ai",
        text: "Great question! Based on standard financial planning principles, here's what I'd suggest. For detailed advice personalized to your income and expenses, tap your profile to complete your financial health check — it takes 3 minutes and unlocks a fully personalized roadmap.",
        time: getTime(),
      },
    ]);
  };

  return (
    <div className="h-screen flex flex-col bg-[var(--surface)]">
      {/* Header */}
      <header className="bg-[var(--card)] border-b border-[var(--border)] px-6 h-16 flex items-center gap-4 flex-shrink-0">
        <Link href="/dashboard" className="p-1.5 hover:bg-[var(--surface)] rounded-lg transition-colors">
          <ChevronLeft size={20} />
        </Link>
        <div className="w-9 h-9 bg-[#5b4cf5] rounded-full flex items-center justify-center">
          <Bot size={18} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--ink)]">WealthPath AI Mentor</p>
          <p className="text-xs text-[#1a9970] font-medium">● Always online</p>
        </div>
      </header>

      {/* Messages */}
      <div ref={ref} className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[75%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.role === "ai"
                      ? "bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] rounded-tl-sm"
                      : "bg-[#5b4cf5] text-white rounded-tr-sm"
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-xs text-[var(--ink3)] px-1">{m.time}</span>
              </div>
            </motion.div>
          ))}

          {loading && (
            <div className="flex gap-2 items-center bg-[var(--card)] border border-[var(--border)] px-4 py-3 rounded-2xl rounded-tl-sm w-16">
              {[0, 0.2, 0.4].map((d) => (
                <motion.div
                  key={d}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: d }}
                  className="w-2 h-2 rounded-full bg-[#5b4cf5]"
                />
              ))}
            </div>
          )}
        </div>

        {/* Suggested prompts */}
        {messages.length === 1 && (
          <div className="max-w-2xl mx-auto mt-6">
            <p className="text-xs text-[var(--ink3)] mb-3 font-medium">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {suggested.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs bg-[var(--card)] border border-[var(--border)] px-3 py-2 rounded-full hover:border-[#5b4cf5] hover:text-[#5b4cf5] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="bg-[var(--card)] border-t border-[var(--border)] p-4 flex-shrink-0">
        <div className="max-w-2xl mx-auto flex gap-3">
          <button className="p-2.5 rounded-xl border border-[var(--border)] hover:border-[#5b4cf5] transition-colors">
            <Mic size={18} className="text-[var(--ink3)]" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Ask anything about your money..."
            className="flex-1 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm text-[var(--ink)] outline-none focus:border-[#5b4cf5] transition-colors"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="w-10 h-10 bg-[#5b4cf5] rounded-xl flex items-center justify-center text-white hover:bg-[#4338d4] transition-colors disabled:opacity-50"
          >
            <Send size={16} />
          </button>
        </div>
        <p className="text-xs text-[var(--ink3)] text-center mt-2">
          AI provides educational guidance only — not certified financial advice.
        </p>
      </div>
    </div>
  );
}
