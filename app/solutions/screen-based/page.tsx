import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Monitor, Laptop, Settings, Code2, Eye, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Screen-based Integration Solutions | Tobii",
  description:
    "Seamless eye tracking integration for your products. Whether you're creating software or hardware, Tobii provides flexible solutions.",
}

const solutions = [
  {
    icon: Laptop,
    title: "Webcam-based Eye Tracking",
    desc: "Bring eye tracking to any device with a standard webcam. Our software-based solution enables gaze tracking without specialized hardware, making it easy to deploy at scale for consumer research, UX testing, and accessibility applications.",
    features: [
      "No specialized hardware required",
      "Works with standard webcams",
      "Easy deployment at scale",
      "Consumer research ready",
      "Remote testing support",
    ],
  },
  {
    icon: Monitor,
    title: "Eye Tracker Integrations",
    desc: "Integrate dedicated eye tracking sensors into your monitor, laptop, or display products. Our compact sensor modules and reference designs make it easy to add high-performance eye tracking to your next device.",
    features: [
      "Compact sensor modules",
      "Reference design support",
      "High-performance tracking",
      "Low latency response",
      "Multi-platform compatibility",
    ],
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    desc: "For unique applications and form factors, our engineering team works with you to develop custom eye tracking solutions. From sensor placement to algorithm optimization, we support your product from concept to production.",
    features: [
      "Custom sensor placement",
      "Algorithm optimization",
      "End-to-end support",
      "Concept to production",
      "Dedicated engineering team",
    ],
  },
]

const devTools = [
  {
    icon: Code2,
    title: "Tobii SDK",
    desc: "Comprehensive development kit with APIs for all major platforms. Build eye tracking features into your applications with clear documentation and code examples.",
  },
  {
    icon: Eye,
    title: "Tobii Aware",
    desc: "Our attention-aware software framework enables device manufacturers to create smart, responsive user experiences driven by eye tracking data.",
  },
  {
    icon: Monitor,
    title: "Integration Support",
    desc: "Our expert integration team provides technical guidance, design reviews, and hands-on support throughout your product development cycle.",
  },
]

export default function ScreenBasedPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/screen-integration.jpg"
            alt="Screen-based eye tracking integration"
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
            <span className="text-primary">Screen-based</span>
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Screen-based Integration Solutions
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Seamless eye tracking integration for your products. Whether
            you&apos;re creating software or hardware, Tobii provides flexible
            solutions designed to fit your needs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, idx) => (
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

      {/* Developer Tools */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Developer tools and support
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[hsl(215,16%,70%)]">
            Everything you need to build eye tracking into your products.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {devTools.map((tool) => (
              <div
                key={tool.title}
                className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Image */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Proven integration expertise
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tobii eye tracking technology powers millions of devices
                worldwide. From consumer laptops to industrial workstations,
                our integration solutions are trusted by the world&apos;s leading
                technology companies to deliver reliable, accurate eye tracking.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact our integration team
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/pro-spectrum.jpg"
                alt="Screen-based eye tracking"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Ready to integrate eye tracking?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Our integration specialists will guide you from concept to
              production.
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
