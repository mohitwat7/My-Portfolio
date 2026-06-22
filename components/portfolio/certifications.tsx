import { Award, LoaderCircle, CircleCheck } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const completed = [
  { title: 'Data Analytics & Visualization', issuer: 'Professional Certificate' },
  { title: 'SQL for Data Analysis', issuer: 'Database Certification' },
  { title: 'Python for Data Science', issuer: 'Applied Programming' },
  { title: 'Business Analytics Fundamentals', issuer: 'BIMM, SBUP' },
]

const inProgress = [
  { title: 'Cloud Data Engineering', issuer: 'In progress' },
  { title: 'Machine Learning Specialization', issuer: 'In progress' },
]

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Certifications"
        title="Always leveling up"
        description="Completed credentials alongside ongoing learning that keeps the toolkit current."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold">
              <CircleCheck className="size-5 text-accent-blue" />
              Completed
            </h3>
            <ul className="mt-5 space-y-3">
              {completed.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card/40 p-4"
                >
                  <Award className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-muted-foreground">{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="glass rounded-3xl p-6 sm:p-7">
            <h3 className="flex items-center gap-2 font-heading text-lg font-semibold">
              <LoaderCircle className="size-5 animate-spin text-accent-blue" />
              In progress
            </h3>
            <ul className="mt-5 space-y-3">
              {inProgress.map((c) => (
                <li
                  key={c.title}
                  className="flex items-start gap-3 rounded-2xl border border-accent-blue/30 bg-accent-blue/5 p-4"
                >
                  <span className="mt-1 size-2 animate-pulse rounded-full bg-accent-blue" />
                  <div>
                    <p className="font-medium">{c.title}</p>
                    <p className="text-sm text-accent-blue">{c.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
