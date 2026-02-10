import Link from "next/link"
import Image from "next/image"
import { ArrowRight, GraduationCap, BookOpen, Monitor, Users } from "lucide-react"

export const metadata = {
  title: "Education Research - Tobii",
  description: "Develop diagnostic tools and learning material with eye tracking technology.",
}

const areas = [
  { icon: BookOpen, title: "Reading & literacy", desc: "Analyze how students process text, identify reading difficulties, and develop targeted interventions for literacy improvement." },
  { icon: Monitor, title: "Digital learning", desc: "Understand how learners interact with online platforms, videos, and interactive content to optimize instructional design." },
  { icon: Users, title: "Classroom dynamics", desc: "Study teacher-student visual interaction patterns and how physical learning environments affect attention and engagement." },
  { icon: GraduationCap, title: "Assessment design", desc: "Evaluate how students navigate exam questions and identify sources of confusion in test design and layout." },
]

export default function EducationResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/company-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Scientific Research</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">Education research</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Eye tracking helps researchers develop diagnostic tools and learning material by understanding how students read, study, and engage with educational content.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">Research areas</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {areas.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><a.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-foreground">Get started</h2>
          <p className="mt-3 text-muted-foreground">Speak with our experts about integrating eye tracking into your education research.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Contact us</Link>
        </div>
      </section>
    </>
  )
}
