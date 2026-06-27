import { Mail, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const socials = [
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
  { icon: Mail, href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <a
            href="#home"
            className="flex items-center justify-center gap-2 font-heading text-lg font-semibold sm:justify-start"
          >
            <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-mono text-sm text-primary ring-1 ring-primary/30">
              MW
            </span>
            Mohit Wat
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with Next.js, React, Python, and FastAPI.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="grid size-10 place-items-center rounded-xl border border-border bg-card/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <s.icon className="size-4" />
            </a>
          ))}
          <a
            href="/Resume_MohitWat.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            <Download className="size-4" />
            Resume
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} Mohit Wat. All rights reserved.
      </p>
    </footer>
  )
}
