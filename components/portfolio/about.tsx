import { Cpu, ChartLine, Database, Briefcase } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Cpu,
    title: 'Engineering foundation',
    body: 'A completed degree in Electronics & Telecommunication gives me a systems-level way of thinking — from data pipelines to deployment.',
  },
  {
    icon: ChartLine,
    title: 'Business analytics lens',
    body: 'My MBA in Data Science & Business Analytics at BIMM, SBUP trains me to connect metrics to decisions, not just dashboards.',
  },
  {
    icon: Database,
    title: 'Data engineering at scale',
    body: 'I design schemas, build ETL pipelines, and integrate APIs — turning raw Meta, Google, and CRM data into trustworthy numbers.',
  },
  {
    icon: Briefcase,
    title: 'Production experience',
    body: 'I have already delivered a real, adopted analytics platform that saves time, money, and manual effort for a live business.',
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="About"
        title="A rare technical + business hybrid"
        description="I bridge analytics, SQL, Python, and APIs with business decision-making — the kind of profile that ships data products and explains why they matter."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
