'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Download, Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#blogs', label: 'Blogs' },
  { href: '#goals', label: 'Career Goals' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const nextTheme = root.classList.contains('dark') ? 'light' : 'dark'

    root.classList.remove('light', 'dark')
    root.classList.add(nextTheme)
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {}
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex w-[calc(100%-2rem)] max-w-[1800px] items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6',
          scrolled
            ? 'glass shadow-lg shadow-black/10 dark:shadow-black/30'
            : 'border border-transparent',
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-primary/15 font-mono text-sm text-primary ring-1 ring-primary/30">
            MW
          </span>
          <span className="hidden sm:inline">Mohit Wat</span>
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-0 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            className="hidden items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            <Download className="size-4" />
            Resume
          </a>
          <button
            type="button"
            aria-label="Toggle light and dark theme"
            onClick={toggleTheme}
            className="grid size-10 place-items-center rounded-lg border border-border bg-card/60 text-foreground transition-colors hover:bg-card"
          >
            <Moon className="size-4 dark:hidden" />
            <Sun className="hidden size-4 dark:block" />
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border bg-card/60 text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass mx-4 mt-2 rounded-2xl p-3 xl:hidden">
          <ul id="mobile-navigation" className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
