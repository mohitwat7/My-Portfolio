import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Skills } from '@/components/portfolio/skills'
import { Certifications } from '@/components/portfolio/certifications'
import { Leadership } from '@/components/portfolio/leadership'
import { Blogs } from '@/components/portfolio/blogs'
import { CareerGoals } from '@/components/portfolio/career-goals'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-6xl">
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Leadership />
        <SectionDivider />
        <Blogs />
        <SectionDivider />
        <CareerGoals />
        <SectionDivider />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-border to-transparent"
    />
  )
}
