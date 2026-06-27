import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const coreSkills = [
  { name: 'SQL', level: 92 },
  { name: 'Python', level: 88 },
  { name: 'PostgreSQL', level: 88 },
  { name: 'FastAPI', level: 82 },
  { name: 'Next.js / React', level: 85 },
  { name: 'ETL Pipelines', level: 84 },
  { name: 'API Integration', level: 86 },
  { name: 'Power BI', level: 80 },
]

const tools = [
  'Tailwind CSS',
  'Recharts',
  'Excel / VBA',
  'Git',
  'Docker',
  'Postman',
  'Supabase',
  'SAP Analytics Cloud',
  'SAS',
  'TanStack Table',
  'Pandas',
  'NumPy',
]

const studying = [
  'Cloud (AWS / GCP)',
  'Machine Learning',
  'Advanced Python',
  'Data Modeling',
]

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack data toolkit"
        description="Strongest first — the languages and systems I reach for to build, move, and visualize data end to end."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 grid-cols-1 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7">
            <h3 className="font-heading text-lg font-semibold">Core skills</h3>
            <div className="mt-5 space-y-4">
              {coreSkills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{s.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {s.level}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent-blue"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={100}>
            <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-7">
              <h3 className="font-heading text-lg font-semibold">
                Tools &amp; Technologies
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="glass rounded-3xl p-6 sm:p-7">
              <div className="flex items-center gap-2">
                <span className="size-2 animate-pulse rounded-full bg-accent-blue" />
                <h3 className="font-heading text-lg font-semibold">
                  Currently studying
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {studying.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1.5 text-sm text-accent-blue"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
