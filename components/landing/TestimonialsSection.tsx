"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer, Bangalore",
    initials: "PS",
    color: "#5b4cf5",
    text: "Finally, a finance app that speaks like a human. I used to be terrified of the word 'investment'. WealthPath AI made me understand SIPs in 5 minutes.",
  },
  {
    name: "Rahul Mehta",
    role: "Freelancer, Mumbai",
    initials: "RM",
    color: "#1a9970",
    text: "The Scam Shield feature saved me from losing ₹50,000 to a fake trading scheme. I almost fell for it. This feature alone is worth everything.",
  },
  {
    name: "Ananya Krishnan",
    role: "Student, Chennai",
    initials: "AK",
    color: "#d97706",
    text: "I'm a college student with no finance knowledge. WealthPath AI helped me build my first emergency fund on ₹8,000/month stipend. Incredible.",
  },
  {
    name: "Suresh & Kavita Patel",
    role: "Middle-class family, Ahmedabad",
    initials: "SP",
    color: "#c0392b",
    text: "Family mode changed how we think about money together. Now we have shared goals, a joint emergency plan, and less money fights at home.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5b4cf5] mb-3">Testimonials</p>
        <h2 className="font-display text-3xl font-extrabold text-[var(--ink)]">
          Real stories from real people.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-6"
          >
            <p className="text-sm text-[var(--ink2)] leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold font-display"
                style={{ background: t.color }}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                <p className="text-xs text-[var(--ink3)]">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
