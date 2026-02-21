import Navigation from "@/components/navigation"
import WorksHero from "@/components/works-hero"
import FeaturedWorks from "@/components/featured-works"
import FooterSection from "@/components/footer-section"

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <WorksHero />
      <FeaturedWorks />
      <FooterSection />
    </main>
  )
}
