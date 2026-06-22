import { Layers, Plug, Database, TrendingUp, GitBranch, MessageSquare } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const targetRoles = [
  'Data Analyst',
  'BI Developer',
  'Analytics Engineer',
  'Marketing Analytics Specialist',
  'Full-Stack Data Developer',
]

const valueProps = [
  {
    icon: Layers,
    title: 'Full-stack data solutions',
    body: 'Schema to dashboard — I can own the entire data product, not just one slice.',
  },
  {
    icon: Plug,
    title: 'Enterprise API integration',
    body: 'Meta Ads, Google Ads, and CRM systems wired together into clean, reliable data.',
  },
  {
    icon: Database,
    title: 'Data engineering at scale',
    body: 'Pipelines processing millions of rows with accuracy and auditability.',
  },
  {
    icon: TrendingUp,
    title: 'Real business impact',
    body: 'Measurable outcomes: faster reporting, lower cost, higher adoption.',
  },
  {
    icon: GitBranch,
    title: 'End-to-end ownership',
    body: 'From requirements to deployment on Vercel, Render, and Docker.',
  },
  {
    icon: MessageSquare,
    title: 'Strong communication',
    body: 'I translate technical detail into decisions stakeholders trust.',
  },
]

export function CareerGoals() {
  return (
    <section id="goals" className="relative px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 size-[420px] rounded-full bg-accent-blue/10 blur-[130px]"
      />
      <SectionHeading
        eyebrow="Career Goals"
        title="Where I'm headed — and why hire me"
        description="I combine business analytics knowledge, an engineering foundation, production data engineering experience, and strong technical execution."
      />

      <div className="mx-auto mt-10 max-w-5xl">
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2.5">
            {targetRoles.map((r) => (
              <span
                key={r}
                className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground"
              >
                {r}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card/40 p-6">
                <v.icon className="size-5 text-accent-blue" />
                <h3 className="mt-3 font-heading font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
