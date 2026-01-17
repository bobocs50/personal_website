import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingOrbs from "@/components/layout/FloatingOrbs"
import { Hero, Experience, Projects, Skills, Education, Contact } from "@/components/sections"

const Index = () => (
  <main className="min-h-screen bg-background relative">
    <FloatingOrbs />
    <div className="fixed inset-0 bg-gradient-radial pointer-events-none" />
    <div className="fixed inset-0 bg-gradient-bottom pointer-events-none" />
    <div className="fixed inset-0 bg-grid pointer-events-none z-20" />

    <div className="relative z-30">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  </main>
);

export default Index;
