import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Glasses, Cpu, Eye, Zap, Layers, Monitor, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Extended Reality (XR) Solutions | Tobii",
  description:
    "From wearables and smart glasses to mixed and virtual reality, Tobii eye tracking enables seamless interaction.",
}

const xrSolutions = [
  {
    icon: Glasses,
    title: "Smart Glasses",
    desc: "Lightweight, low-power eye tracking designed for next-generation smart glasses. Our system-on-chip solution enables natural gaze-based interaction without compromising on form factor or battery life.",
    features: [
      "Ultra-low power consumption",
      "Compact sensor design",
      "Natural gaze interaction",
      "All-day wearability",
    ],
  },
  {
    icon: Monitor,
    title: "Virtual Reality",
    desc: "Eye tracking in VR headsets enables foveated rendering, dramatically improving visual quality while reducing GPU load. Gaze-based navigation and social presence create truly immersive experiences.",
    features: [
      "Foveated rendering support",
      "Gaze-based interaction",
      "Social presence in VR",
      "Performance optimization",
    ],
  },
  {
    icon: Layers,
    title: "Mixed & Augmented Reality",
    desc: "Seamlessly blend digital content with the real world using eye tracking. Our technology ensures AR overlays appear exactly where users are looking, creating intuitive and natural experiences.",
    features: [
      "Precise gaze overlay",
      "Context-aware content",
      "Natural interaction",
      "Spatial awareness",
    ],
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Foveated Rendering",
    desc: "Reduce GPU workload by up to 50% by rendering at full resolution only where the user looks, maintaining visual quality while improving performance.",
  },
  {
    icon: Eye,
    title: "Gaze Interaction",
    desc: "Enable intuitive hands-free navigation, selection, and control using natural eye movements — making XR experiences more accessible and immersive.",
  },
  {
    icon: Cpu,
    title: "System-on-Chip",
    desc: "Our integrated SoC solution provides enterprise-grade eye tracking in a compact, power-efficient package designed for mass-market XR devices.",
  },
]

export default function XRPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/xr-hero.jpg"
            alt="Extended Reality eye tracking"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-[hsl(215,16%,60%)]">
            <Link href="/solutions" className="hover:text-primary">Solutions</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">Extended Reality</span>
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Extended Reality (XR)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            From wearables and smart glasses to mixed and virtual reality,
            Tobii&apos;s system-on-chip eye tracking enables seamless interaction
            between users and their devices.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Explore XR solutions
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Solutions */}
      {xrSolutions.map((solution, idx) => (
        <section
          key={solution.title}
          className={idx % 2 === 0 ? "py-20" : "bg-secondary py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className={`flex flex-col gap-12 lg:items-start ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {solution.title}
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                  {solution.desc}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Key capabilities
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                        <svg className="h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Benefits */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Why eye tracking for XR?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* XR Image showcase */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/xr-headset.jpg"
                alt="XR headset with eye tracking"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Designed for the next generation of XR
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tobii&apos;s eye tracking technology is already integrated into
                leading XR devices from major technology companies. Our
                platform-agnostic approach means we work with any hardware
                architecture, enabling partners to bring eye tracking to their
                products faster.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Partner with us
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Ready to integrate eye tracking into your XR device?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Our team of integration specialists are ready to support your
              product development.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Get in touch
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
