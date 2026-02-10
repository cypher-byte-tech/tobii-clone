import Link from "next/link"
import { Brain, Cpu, BarChart3 } from "lucide-react"

export function AISection() {
  return (
    <section className="bg-[hsl(220,20%,10%)] py-24 text-[hsl(0,0%,100%)]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            Part of the AI revolution since 2001
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[hsl(215,16%,70%)]">
            Artificial intelligence has shaped our work since the beginning.
            Machine learning, AI, and advanced signal processing have been part
            of our product development for decades.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Machine Learning</h3>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
              We decode head and eye movements using advanced ML models,
              translating microscopic gestures into accurate gaze signals.
            </p>
          </div>
          <div className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Signal Processing</h3>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
              Advanced algorithms process eye tracking data in real-time,
              enabling seamless integration across devices and environments.
            </p>
          </div>
          <div className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Behavioral Insights</h3>
            <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
              Generate insights that reveal what captures a person&apos;s attention
              and interpret intent. No matter who, no matter where.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/company/this-is-tobii"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Tobii and AI
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
