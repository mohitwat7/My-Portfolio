import Image from 'next/image'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { Reveal } from './reveal'

const metrics = [
  { value: '₹4.85 Cr+', label: 'Revenue tracked' },
  { value: '3M+', label: 'Rows processed' },
  { value: '75%', label: 'Faster reporting' },
  { value: '98%', label: 'Data accuracy' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:pt-40"
    >
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-40 -z-10 size-[420px] rounded-full bg-accent-blue/15 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-blue opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-blue" />
              </span>
              Open to Data & Analytics roles · 2026
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              Mohit Wat
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-4 text-balance font-heading text-lg font-medium text-gradient sm:text-2xl">
              MBA in Data Science &amp; Business Analytics · Full-Stack Data
              Developer · Analytics Engineer
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I sit at the intersection of engineering and business — turning
              messy, multi-source data into production analytics platforms that
              leaders actually use. I&apos;ve already shipped{' '}
              <span className="text-foreground">GMATOOL</span>, an
              enterprise-grade marketing analytics system tracking{' '}
              <span className="text-foreground">₹4.85 Cr+</span> in revenue.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/Resume_MohitWat.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-medium transition-colors hover:bg-card"
              >
                <Download className="size-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-accent-blue" />
              Pune, India
            </p>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-primary/40 via-accent-blue/30 to-transparent blur-xl"
            />
            <div className="glass glow-purple relative aspect-[4/5] overflow-hidden rounded-[1.75rem] p-2">
              <Image
                src="/mohit-portrait-light.jpg"
                alt="Portrait of Mohit Wat"
                fill
                sizes="(max-width: 1024px) 384px, 32vw"
                priority
                className="rounded-[1.4rem] object-cover object-center dark:hidden"
              />
              <Image
                src="/mohit-portrait-dark.jpg"
                alt="Portrait of Mohit Wat"
                fill
                sizes="(max-width: 1024px) 384px, 32vw"
                priority
                className="hidden rounded-[1.4rem] object-cover object-center dark:block"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={360}>
        <dl className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="glass rounded-2xl px-4 py-5 text-center"
            >
              <dt className="sr-only">{m.label}</dt>
              <dd className="font-heading text-2xl font-semibold text-gradient sm:text-3xl">
                {m.value}
              </dd>
              <p className="mt-1 text-xs text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
