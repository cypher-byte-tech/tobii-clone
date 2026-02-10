import Link from "next/link"
import { Lightbulb, Calendar } from "lucide-react"

export function InsightBanner() {
  return (
    <section className="bg-secondary py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 lg:px-8">
        {/* Tobii Insight */}
        <div className="rounded-2xl bg-background p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Need help getting started?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Partner with us through tailored research services, expert
            consulting, or full-scale studies — designed to turn eye tracking
            data into meaningful results.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Tobii Insight
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Webinar */}
        <div className="rounded-2xl bg-background p-8 shadow-sm">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <p className="mb-2 text-xs font-medium text-muted-foreground">
            February 19, 2026
          </p>
          <h3 className="text-xl font-bold text-foreground">
            The latest advancements in eye tracking research
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Join us for the 2025 Annual Research Report webinar, where we will
            unveil the latest findings on the uses of eye tracking in scientific
            research over the past year.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Sign up for the webinar
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
