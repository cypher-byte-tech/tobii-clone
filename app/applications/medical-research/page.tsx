import Link from "next/link"
import Image from "next/image"
import { ArrowRight, HeartPulse, Brain, Eye, Activity } from "lucide-react"

export const metadata = {
  title: "Medical Research - Tobii",
  description: "Eye tracking as a diagnostic tool and biomarker for neurological conditions.",
}

const areas = [
  { icon: Brain, title: "Neurodegenerative diseases", desc: "Eye movement patterns serve as early biomarkers for Parkinson's, Alzheimer's, and ALS, enabling non-invasive screening and progression tracking." },
  { icon: Eye, title: "Ophthalmology", desc: "Measure visual field, saccadic function, and gaze stability to assess and monitor eye disorders and treatment effectiveness." },
  { icon: Activity, title: "Psychiatric research", desc: "Eye tracking reveals attention biases and social cognition patterns in conditions like autism, ADHD, schizophrenia, and depression." },
  { icon: HeartPulse, title: "Rehabilitation", desc: "Track recovery of eye movement control following stroke, traumatic brain injury, or surgery to quantify patient progress." },
]

export default function MedicalResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/resource-center.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Scientific Research</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">Medical research</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Eye tracking is used as a non-invasive diagnostic tool and biomarker for neurological and psychiatric conditions, offering unprecedented insight into brain function.
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
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <a.icon className="h-5 w-5 text-primary" />
                </div>
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
          <p className="mt-3 text-muted-foreground">Speak with our research experts about integrating eye tracking into your medical research.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Contact us</Link>
        </div>
      </section>
    </>
  )
}
