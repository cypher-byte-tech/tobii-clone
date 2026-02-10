import Link from "next/link"
import { PenLine, ChevronRight } from "lucide-react"

const posts = [
  {
    title: "Understanding cognitive load with eye tracking",
    date: "January 2026",
  },
  {
    title: "The science behind the swing: Eye tracking boosts golf performance",
    date: "December 2025",
  },
  {
    title: "Gaze matters: Rethinking eye tracking in precision sport",
    date: "November 2025",
  },
]

export function BlogTeaser() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <PenLine className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                From the blog
              </h2>
              <p className="text-sm text-muted-foreground">
                Latest insights on eye tracking
              </p>
            </div>
          </div>
          <Link
            href="/company/blog"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            View all articles
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href="/company/blog"
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <p className="text-xs text-muted-foreground">{post.date}</p>
              <h3 className="mt-2 text-sm font-semibold text-foreground group-hover:text-primary">
                {post.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                Read more
                <ChevronRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
