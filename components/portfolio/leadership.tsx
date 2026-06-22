import { Users, SquareCode, Wrench, Sparkles } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const roles = [
  {
    icon: Sparkles,
    role: 'Cultural Coordinator',
    body: 'Planned and led campus cultural events — coordinating teams, budgets, and execution under deadlines.',
  },
  {
    icon: SquareCode,
    role: 'GDSC Co-Leader',
    body: 'Co-led the Google Developer Student Club, organizing technical sessions and mentoring peers.',
  },
  {
    icon: Wrench,
    role: 'Co-Technical Head',
    body: 'Drove technical initiatives and workshops, bridging ideas between members and faculty.',
  },
  {
    icon: Users,
    role: 'Club Member',
    body: 'Active contributor across initiatives, building strong teamwork and communication habits.',
  },
]

export function Leadership() {
  return (
    <section id="leadership" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Leadership"
        title="Initiative, teamwork & communication"
        description="Beyond the code — roles that built leadership, collaboration, and the ability to bring people together."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {roles.map((r, i) => (
          <Reveal key={r.role} delay={i * 80}>
            <article className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/25 transition-transform group-hover:scale-105">
                <r.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-heading font-semibold">{r.role}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
