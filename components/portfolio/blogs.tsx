import { ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const dateFormatter = new Intl.DateTimeFormat('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

export function Blogs() {
  const recentPosts = [...blogPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 4)

  return (
    <section id="blogs" className="relative px-4 py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 top-1/3 -z-10 size-[360px] rounded-full bg-primary/10 blur-[120px]"
      />
      <SectionHeading
        eyebrow="Blogs"
        title="Notes from the data workbench"
        description="Practical ideas on data engineering, analytics, and building products that turn information into action."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
        {recentPosts.map((post, index) => (
          <Reveal key={`${post.publishedAt}-${post.title}`} delay={index * 70}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary ring-1 ring-primary/20">
                  {post.category}
                </span>
                {post.href ? (
                  <a
                    href={post.href}
                    aria-label={`Read ${post.title}`}
                    className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
              </div>

              <h3 className="mt-5 text-balance font-heading text-xl font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" />
                  <time dateTime={post.publishedAt}>
                    {dateFormatter.format(new Date(`${post.publishedAt}T00:00:00Z`))}
                  </time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" />
                  {post.readingTime}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
