import { Lock, Shield, EyeOff, BadgeCheck, Wifi } from "lucide-react";

const items = [
  { icon: Lock, label: "End-to-end encrypted" },
  { icon: Shield, label: "No hidden charges" },
  { icon: EyeOff, label: "We never sell your data" },
  { icon: BadgeCheck, label: "Ethical AI certified" },
  { icon: Wifi, label: "Offline mode available" },
];

export default function TrustStrip() {
  return (
    <div className="bg-[var(--card)] border-y border-[var(--border)] py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-3">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm text-[var(--ink2)] font-medium">
            <div className="w-7 h-7 rounded-full bg-[#e3f5ee] flex items-center justify-center">
              <Icon size={13} className="text-[#1a9970]" />
            </div>
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
