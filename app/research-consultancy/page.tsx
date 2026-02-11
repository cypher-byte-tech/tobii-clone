import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Users, BarChart3, FileText, Lightbulb, Target, Headphones } from "lucide-react"

export const metadata: Metadata = {
  title: "Research consultancy - Tobii Insight Services | Tobii",
  description:
    "Partner with us through tailored research services, expert consulting, or full-scale studies designed to turn eye tracking data into meaningful results.",
}

const services = [
  {
    icon: Target,
    title: "Full-service studies",
    desc: "We design, execute, and deliver complete eye tracking studies tailored to your research questions. From participant recruitment to final insights report.",
  },
  {
    icon: Users,
    title: "Expert consulting",
    desc: "Our experienced researchers provide guidance on study design, methodology, and analysis to help you get the most from your eye tracking data.",
  },
  {
    icon: BarChart3,
    title: "Data analysis",
    desc: "Let our team handle the complex analysis. We transform raw gaze data into actionable insights with advanced visualizations and statistical reporting.",
  },
  {
    icon: FileText,
    title: "Funding support",
    desc: "Designed to assist researchers looking to integrate eye tracking into their methodology with their applications for grant funding.",
  },
  {
    icon: Lightbulb,
    title: "Training & education",
    desc: "Interactive online sessions, onsite training, and our e-learning platform help you and your team operate your eye tracking system effectively.",
  },
  {
    icon: Headphones,
    title: "Customer integration",
    desc: "Collaboration and knowledge sharing is the best way to introduce eye tracking to your new products and applications.",
  },
]

const steps = [
  { num: "01", title: "Consultation", desc: "We discuss your research objectives and determine the best approach for your study." },
  { num: "02", title: "Study design", desc: "Our experts design a rigorous methodology tailored to your specific research questions." },
  { num: "03", title: "Data collection", desc: "We handle participant recruitment, eye tracking sessions, and quality assurance." },
  { num: "04", title: "Analysis & reporting", desc: "Receive comprehensive analysis with visualizations, statistics, and actionable insights." },
]

export default function ResearchConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image src="/images/contact-hero.jpg" alt="Research consultancy" fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-28 lg:px-10 lg:py-32">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">Tobii Insight Services</p>
          <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            Research consultancy
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[hsl(215,16%,75%)] lg:text-lg">
            Partner with us through tailored research services, expert consulting, or full-scale studies -- designed to turn eye tracking data into meaningful results.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Talk to an expert <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">How we can help</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Our research experts help you create and customize your own full-service eye tracking study. A flexible way to understand behavior, turning insights into impact.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">How it works</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num}>
                <span className="text-3xl font-bold text-primary">{step.num}</span>
                <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <div className="rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-2xl font-bold md:text-3xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Tell us about your research goals and our team will help you find the right approach.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90">
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
