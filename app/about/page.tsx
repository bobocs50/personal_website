import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import OdeToDesign from "@/components/ode-to-design"
import ValuesSection from "@/components/values-section"
import SmallJoys from "@/components/small-joys"
import FailuresSection from "@/components/failures-section"
import TravelSection from "@/components/travel-section"
import BigJoys from "@/components/big-joys"
import FooterSection from "@/components/footer-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <OdeToDesign />
      <FailuresSection />
      <ValuesSection />
      <SmallJoys />
      <TravelSection />
      <BigJoys />
      <FooterSection />
    </main>
  )
}
