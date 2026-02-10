import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Plane, Car, HardHat, Stethoscope } from "lucide-react"

export const metadata = {
  title: "Human Factors - Tobii",
  description: "Eye tracking for human factors research. Study how people interact with systems and environments.",
}

const domains = [
  { icon: Plane, title: "Aviation & space", desc: "Assess pilot workload, cockpit ergonomics, and situational awareness during flight simulations and real missions." },
  { icon: Car, title: "Automotive", desc: "Evaluate driver attention, HMI design, and ADAS interaction in controlled and on-road environments." },
  { icon: HardHat, title: "Construction & manufacturing", desc: "Identify safety-critical gaze patterns and optimize inspection workflows in industrial settings." },
  { icon: Stethoscope, title: "Healthcare & medical", desc: "Understand visual search strategies of clinicians during surgery, diagnosis, and patient monitoring." },
]

export default function HumanFactorsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/automotive-hero.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Scientific Research</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
            Human factors
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            How humans interact with systems and environments. Eye tracking provides critical insights into visual attention, cognitive load, situational awareness, and human error.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">Industry domains</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {domains.map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <d.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-foreground">Recommended for human factors</h2>
          <p className="mt-3 text-muted-foreground">Tobii Pro Glasses 3 for field studies and Tobii Pro Spectrum for controlled lab environments.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/products/pro-glasses-3" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Tobii Pro Glasses 3</Link>
            <Link href="/products/pro-spectrum" className="rounded-full border border-border bg-transparent px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">Tobii Pro Spectrum</Link>
          </div>
        </div>
      </section>
    </>
  )
}
