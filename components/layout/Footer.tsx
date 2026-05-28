import Link from "next/link";
import { Shield } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Scam Shield", "Pricing", "Education Hub", "Mobile App"],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "AI Disclaimer", "Data Protection", "Refund Policy"],
  Support: ["Help Center", "Community", "Status", "API Docs"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d0d12] text-white/70 mt-0">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#5b4cf5] flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">WealthPath AI</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed">
              Financial freedom, without financial confusion. Built for real people, not finance experts.
            </p>
            <p className="text-xs text-white/25 mt-4">Made with care in India 🇮🇳</p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">
                  {section}
                </h4>
                <ul className="flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-white/40 hover:text-white/80 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <p className="text-xs text-white/30">
              © 2025 WealthPath AI. All rights reserved.
            </p>
            <p className="text-xs text-white/30">
              Not a SEBI-registered investment advisor.
            </p>
          </div>
          <p className="text-xs text-white/20 mt-4 leading-relaxed max-w-3xl">
            ⚠️ Disclaimer: WealthPath AI provides educational financial guidance only and is not a SEBI-registered
            investment advisor. All AI recommendations are for informational purposes only and should not be
            considered certified financial advice. Always consult a licensed professional before major financial decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
