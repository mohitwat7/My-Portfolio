import { TrendingUp, ShieldCheck, Zap, Database, IndianRupee, PiggyBank, Users } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const outcomes = [
  { icon: Zap, value: '75%', label: 'Faster reporting' },
  { icon: ShieldCheck, value: '98%', label: 'Data accuracy' },
  { icon: TrendingUp, value: '90%', label: 'Manual work eliminated' },
  { icon: Database, value: '~3M', label: 'Rows processed' },
  { icon: IndianRupee, value: '₹4.85 Cr+', label: 'Revenue tracked' },
  { icon: PiggyBank, value: '₹2.5 L/yr', label: 'Cost saved' },
  { icon: Users, value: '100%', label: 'User adoption' },
]

export function Experience() {
  return (
    <section id="experience" className="relative px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 -z-10 size-[420px] rounded-full bg-primary/10 blur-[130px]"
      />
      <SectionHeading
        eyebrow="Experience"
        title="Real business impact, not just an internship"
        description="My flagship role turned scattered marketing and revenue data into a single source of truth used across an entire organization."
      />

      <div className="mx-auto mt-12 max-w-5xl space-y-6">
        <Reveal>
          <article className="glass glow-purple rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
                  Flagship Role
                </span>
                <h3 className="mt-2 font-heading text-xl font-semibold sm:text-2xl">
                  Data Analytics Intern · Full-Stack Data Analytics Developer
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Grow Medico — building{' '}
                  <span className="text-foreground">GMATOOL</span>, an
                  enterprise marketing analytics platform
                </p>
              </div>
              <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                Production system
              </span>
            </div>

            <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              I designed and shipped a platform that consolidates Meta Ads,
              Google Ads, TeleCRM, and revenue data into one dashboard with
              role-based access control — replacing fragile spreadsheets with an
              automated, auditable system the whole team relies on.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
              {outcomes.map((o) => (
                <div
                  key={o.label}
                  className="rounded-2xl border border-border bg-card/40 p-4 text-center"
                >
                  <o.icon className="mx-auto size-4 text-accent-blue" />
                  <p className="mt-2 font-heading text-lg font-semibold text-gradient">
                    {o.value}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-heading text-lg font-semibold">
                  Calibration Engineering Intern
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Hands-on exposure to instrumentation, measurement accuracy,
                  and quality processes in a technical environment.
                </p>
              </div>
              <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                Earlier role
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
