import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MarqueeStrip from "@/components/ui/MarqueeStrip";
import SectionWrapper from "@/components/ui/SectionWrapper";

import HeroSection from "@/components/home/HeroSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import ServicesSection from "@/components/home/ServicesSection";
import DestinationSection from "@/components/home/DestinationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

/**
 * Page section order (optimised for travel UX conversion flow):
 *
 * 1. Hero          — First impression, CTA
 * 2. Marquee       — Instant trust signals
 * 3. Who We Are    — Brand story & credibility
 * 4. Why Us        — Differentiators (personalised / 24/7 / transparent)
 * 5. Services      — What we offer
 * 6. Destinations  — Browse packages (the "product")
 * 7. Testimonials  — Social proof before final CTA
 * 8. Footer        — Contact, links, newsletter
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-forest text-white">
      <Navbar />

      {/* 1. Hero – no wrapper, animates itself */}
      <HeroSection />

      {/* 2. Marquee trust strip – no wrapper, always visible */}
      <MarqueeStrip />

      {/* 3. Brand story */}
      <SectionWrapper>
        <WhoWeAreSection />
      </SectionWrapper>

      {/* 4. Differentiators */}
      <SectionWrapper delay={0.05}>
        <WhyUsSection />
      </SectionWrapper>

      {/* 5. Services */}
      <SectionWrapper delay={0.05}>
        <ServicesSection />
      </SectionWrapper>

      {/* 6. Destination carousel */}
      <SectionWrapper delay={0.05}>
        <DestinationSection />
      </SectionWrapper>

      {/* 7. Testimonials / social proof */}
      <SectionWrapper delay={0.05}>
        <TestimonialsSection />
      </SectionWrapper>

      {/* 8. Footer */}
      <SectionWrapper delay={0}>
        <Footer />
      </SectionWrapper>

      {/* Floating WhatsApp CTA */}
      <WhatsAppButton />
    </main>
  );
}
