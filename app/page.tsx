import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustStrip from "@/components/landing/TrustStrip";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ChatPreview from "@/components/landing/ChatPreview";
import ScamShieldSection from "@/components/landing/ScamShieldSection";
import StressSection from "@/components/landing/StressSection";
import SimulatorSection from "@/components/landing/SimulatorSection";
import GoalsSection from "@/components/landing/GoalsSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <FeaturesSection />
      <ChatPreview />
      <ScamShieldSection />
      <StressSection />
      <SimulatorSection />
      <GoalsSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
