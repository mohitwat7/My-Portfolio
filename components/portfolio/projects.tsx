import { ExternalLink, FileCode, Check } from 'lucide-react'
import { GithubIcon } from './brand-icons'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const flagshipTech = [
  'Next.js 14',
  'TypeScript',
  'Tailwind CSS',
  'Recharts',
  'TanStack Table',
  'FastAPI',
  'SQLAlchemy',
  'Pandas',
  'NumPy',
  'PostgreSQL',
  'Supabase',
  'Meta Ads API',
  'Google Ads API',
  'TeleCRM',
  'Vercel',
  'Render',
  'Docker',
  'Git',
]

const flagshipFeatures = [
  '53-table PostgreSQL schema',
  'Automated ETL pipeline',
  'Revenue attribution engine',
  '14 customizable KPIs',
  'Role-based access control',
  'Unified multi-source dashboard',
]

const projects = [
  {
    title: 'EagleEye Attendance Management System',
    problem:
      'Manual attendance tracking was slow, error-prone, and hard to audit across groups.',
    features: [
      'Automated check-in / check-out',
      'Real-time reporting dashboard',
      'Role-based records & exports',
    ],
    tech: ['Python', 'PostgreSQL', 'React', 'REST API'],
    outcome: 'Cut attendance processing time and removed manual errors.',
  },
  {
    title: 'Solar-based Smart Grass Cutter',
    problem:
      'Conventional grass cutters are fuel-dependent and need constant manual operation.',
    features: [
      'Solar-powered autonomous operation',
      'Obstacle-aware navigation',
      'Low-maintenance hardware design',
    ],
    tech: ['Embedded C', 'Microcontroller', 'Solar', 'Sensors'],
    outcome: 'Demonstrated a sustainable, low-cost autonomous prototype.',
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Work that ships and scales"
        description="From a production analytics platform to embedded systems — each project pairs a clear problem with measurable outcomes."
      />

      <div className="mx-auto mt-12 max-w-5xl space-y-6">
        {/* Flagship */}
        <Reveal>
          <article className="glass glow-purple overflow-hidden rounded-3xl">
            <div className="border-b border-border/60 bg-primary/10 px-6 py-3 sm:px-8">
              <span className="font-mono text-xs uppercase tracking-widest text-accent-blue">
                Flagship Project
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
                  GMATOOL
                </h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-transform hover:scale-[1.04]"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-card"
                  >
                    <GithubIcon className="size-3.5" />
                    GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card/50 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-card"
                  >
                    <FileCode className="size-3.5" />
                    API Docs
                  </a>
                </div>
              </div>

              <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                An enterprise-grade marketing analytics platform that unifies
                Meta Ads, Google Ads, TeleCRM, and revenue data into a single,
                role-aware dashboard. Built end-to-end — schema, pipeline,
                attribution, and UI.
              </p>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {flagshipFeatures.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 rounded-xl border border-border bg-card/40 px-3 py-2.5 text-sm"
                  >
                    <Check className="size-4 shrink-0 text-accent-blue" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {flagshipTech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card/40 p-6 transition-colors hover:border-primary/40">
                <h3 className="font-heading text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.problem}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-foreground/90"
                    >
                      <span className="size-1.5 rounded-full bg-accent-blue" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card/50 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-5 text-sm font-medium text-gradient">
                  {p.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
