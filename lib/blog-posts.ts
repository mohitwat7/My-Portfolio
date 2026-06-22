export type BlogPost = {
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  category: string
  href?: string
}

// Add new posts here. The Blogs section sorts by date and displays the latest four.
export const blogPosts: BlogPost[] = [
  {
    title: 'Building a marketing analytics platform from raw APIs to decisions',
    excerpt:
      'The architecture and product choices behind turning fragmented campaign data into a reliable analytics workflow.',
    publishedAt: '2026-06-18',
    readingTime: '7 min read',
    category: 'Data Engineering',
  },
  {
    title: 'What business teams actually need from an analytics dashboard',
    excerpt:
      'A practical framework for moving beyond attractive charts toward metrics people trust and act on.',
    publishedAt: '2026-06-10',
    readingTime: '5 min read',
    category: 'Business Analytics',
  },
  {
    title: 'Designing data pipelines for accuracy, auditability, and scale',
    excerpt:
      'Patterns that keep multi-source reporting dependable as data volume, stakeholders, and complexity grow.',
    publishedAt: '2026-05-28',
    readingTime: '6 min read',
    category: 'Analytics Engineering',
  },
  {
    title: 'From MBA classroom to production-grade data products',
    excerpt:
      'Lessons from combining commercial thinking with hands-on engineering to solve measurable business problems.',
    publishedAt: '2026-05-14',
    readingTime: '4 min read',
    category: 'Career',
  },
]
