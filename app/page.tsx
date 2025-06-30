import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { CallToActionSection } from "@/components/call-to-action-section" // New import
import { NewsletterSection } from "@/components/newsletter-section" // New import

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <CallToActionSection /> {/* New section */}
      <NewsletterSection /> {/* New section */}
    </div>
  )
}
