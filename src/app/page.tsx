import CTASection from "@/components/cta-section";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navbar from "@/components/navbar";
import ProblemTargetSection from "@/components/problem-target-section";
import ReviewsSection from "@/components/reviews-section";
import WhyChooseCleverBook from "@/components/why-choose-cleverbook";

export default function Home() {
  return (
    <main className="min-h-screen antialiased">
      <div className="bg-gray-100">
        <Navbar />
        <HeroSection />
        <Features />
      </div>
      <WhyChooseCleverBook />
      <ReviewsSection />
      <ProblemTargetSection />
      <div className="grainy-black wave-top relative min-h-screen pt-28">
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}
