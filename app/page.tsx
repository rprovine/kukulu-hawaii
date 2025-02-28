import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import KeyStats from "@/components/key-stats"
import AboutSection from "@/components/about-section"
import HowItWorks from "@/components/how-it-works"
import CareerDevelopment from "@/components/career-development"
import CommunitySection from "@/components/community-section"
import EmployersSection from "@/components/employers-section"
import JobSeekersSection from "@/components/job-seekers-section"
import EconomicEmpowerment from "@/components/economic-empowerment"
import Testimonials from "@/components/testimonials"
import FeaturedEmployers from "@/components/featured-employers"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <KeyStats />
      <section id="about">
        <AboutSection />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="career-development">
        <CareerDevelopment />
      </section>
      <section id="community">
        <CommunitySection />
      </section>
      <section id="employers">
        <EmployersSection />
      </section>
      <section id="job-seekers">
        <JobSeekersSection />
      </section>
      <section id="economic">
        <EconomicEmpowerment />
      </section>
      <Testimonials />
      <FeaturedEmployers />
      <CtaSection />
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </main>
  )
}

