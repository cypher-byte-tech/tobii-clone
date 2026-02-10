import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Eye, BarChart3, Lightbulb } from "lucide-react"

export const metadata = {
  title: "Cognitive & Psychological Research - Tobii",
  description: "Understand mental processes through eye tracking. Explore perception, memory, attention, and decision-making research.",
}

const useCases = [
  {
    icon: Eye,
    title: "Visual attention",
    desc: "Map what people look at, in what order, and for how long. Understand top-down and bottom-up attention drivers in complex visual scenes.",
  },
  {
    icon: Brain,
    title: "Cognitive load",
    desc: "Pupil dilation and fixation patterns reveal mental effort during tasks, offering a window into cognitive demand without interrupting the participant.",
  },
  {
    icon: BarChart3,
    title: "Decision making",
    desc: "Track how people visually compare options before making choices. Eye tracking exposes the information processing behind each decision.",
  },
  {
    icon: Lightbulb,
    title: "Reading & language processing",
    desc: "Analyze fixations and saccades during reading to understand how text difficulty, layout, and language proficiency affect comprehension.",
  },
]

const recommendedProducts = [
  { title: "Tobii Pro Spectrum", desc: "Up to 1200 Hz for micro-saccade research", href: "/products/pro-spectrum" },
  { title: "Tobii Pro Fusion", desc: "Portable 250 Hz for flexible setups", href: "/products/pro-fusion" },
  { title: "Tobii Pro Lab", desc: "Analysis software for behavioral studies", href: "/products/pro-lab" },
]

export default function CognitiveResearchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/solutions-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Scientific Research
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
            Cognitive & psychological research
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Eye tracking provides unmatched insight into the mental processes behind perception, memory, attention, and decision-making. Measure what participants truly attend to -- without relying on self-reporting.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">
            Key research areas
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Eye tracking is applied across many areas of cognitive and psychological science to reveal the mechanisms behind human behavior.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {useCases.map((uc) => (
              <div key={uc.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <uc.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{uc.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground">Recommended products</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {recommendedProducts.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
