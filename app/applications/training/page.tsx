import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Target, Clock, Award } from "lucide-react"

export const metadata = {
  title: "Training & Skills Assessment - Tobii",
  description: "Transfer expert skills and improve safety with eye tracking technology.",
}

const benefits = [
  { icon: Target, title: "Capture hidden expertise", desc: "Eye tracking reveals the visual strategies expert professionals use but cannot easily articulate, making tacit knowledge transferable to trainees." },
  { icon: Clock, title: "Reduce training time", desc: "By showing trainees exactly where to look and what to prioritize, eye tracking accelerates the learning curve and reduces time-to-competency." },
  { icon: Award, title: "Objective assessment", desc: "Move beyond subjective evaluation. Eye tracking data provides quantifiable metrics for visual search efficiency, fixation patterns, and task performance." },
  { icon: Users, title: "Scale expertise", desc: "Record expert gaze patterns and create training materials that can be reused across locations, teams, and experience levels." },
]

export default function TrainingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/contact-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Commercial & Industry</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">Training & skills assessment</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Transfer expert skills and improve safety. Eye tracking captures the visual strategies of experienced professionals, making expertise visible and transferable.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">How eye tracking transforms training</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><b.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-foreground">Recommended product</h2>
          <p className="mt-3 text-muted-foreground">Tobii Pro Glasses 3 is ideal for capturing expert gaze in real-world environments.</p>
          <Link href="/products/pro-glasses-3" className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Tobii Pro Glasses 3</Link>
        </div>
      </section>
    </>
  )
}
