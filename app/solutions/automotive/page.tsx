import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Car, Shield, Eye, Gauge, Users, Cpu, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions for the vehicle lifecycle | Tobii Automotive",
  description:
    "Eye tracking technology is central to developing safer, more intuitive vehicles through driver monitoring and interior sensing.",
}

const solutions = [
  {
    icon: Shield,
    title: "Driver Monitoring System (DMS)",
    desc: "Our DMS technology tracks the driver's gaze direction, head position, and eyelid closure to determine their level of attention and alertness. It detects signs of drowsiness, distraction, and inattention — and alerts the driver or triggers safety interventions in real time.",
    features: [
      "Gaze direction tracking",
      "Drowsiness detection",
      "Distraction monitoring",
      "Euro NCAP compliance",
      "Night vision IR-based tracking",
    ],
  },
  {
    icon: Users,
    title: "Occupancy Monitoring System (OMS)",
    desc: "Our OMS solution detects and classifies all occupants in the vehicle cabin — including children, adults, and pets. It determines seating position, posture, and seatbelt status to optimize airbag deployment and safety features.",
    features: [
      "Passenger detection",
      "Child presence detection",
      "Seatbelt status monitoring",
      "Airbag optimization",
      "Posture classification",
    ],
  },
  {
    icon: Eye,
    title: "Interior Sensing",
    desc: "Tobii Autosense brings full interior sensing capabilities by combining DMS and OMS into a single-camera solution. One camera replaces multiple sensors, reducing cost and complexity while providing comprehensive cabin awareness.",
    features: [
      "Single camera solution",
      "Combined DMS + OMS",
      "Cost-effective integration",
      "Compact form factor",
      "Plug-and-play design",
    ],
  },
]

const useCases = [
  {
    icon: Gauge,
    title: "Research and Development",
    desc: "Eye tracking provides detailed insights into driver behavior, enabling engineers to design safer vehicles and more intuitive human-machine interfaces.",
  },
  {
    icon: Car,
    title: "Production Vehicles",
    desc: "Integrated DMS and OMS solutions that meet the highest safety standards, including Euro NCAP and upcoming regulatory requirements.",
  },
  {
    icon: Cpu,
    title: "Autonomous Driving",
    desc: "As vehicles move toward higher levels of automation, monitoring driver readiness to take over control becomes critical. Tobii technology enables seamless handover transitions.",
  },
]

export default function AutomotivePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/automotive-hero.jpg"
            alt="Automotive interior sensing"
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
            <span className="text-primary">Automotive</span>
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Solutions for the vehicle lifecycle
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            From research, UX/design and production to buyer and driver
            experiences. Eye tracking technology is central to developing safer,
            more intuitive vehicles through driver monitoring and interior
            sensing.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact automotive team
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Tobii Autosense
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tobii Autosense brings the Tobii mission of harmonizing the
                connection between humans and machines into the car. Our
                technology enables OEMs to build for tomorrow, pushing the
                boundaries of what&apos;s possible, and achieve true in-cabin
                differentiation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With upcoming Euro NCAP and regulatory requirements mandating
                driver monitoring, Tobii Autosense positions automakers to
                exceed compliance while delivering superior user experience.
              </p>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/automotive.jpg"
                alt="Tobii Autosense technology"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      {solutions.map((solution, idx) => (
        <section
          key={solution.title}
          className={idx % 2 === 0 ? "bg-secondary py-20" : "py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
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

      {/* Use Cases */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Use cases across the vehicle lifecycle
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <uc.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{uc.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
                  {uc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Ready to explore automotive solutions?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Contact our automotive team to learn how Tobii Autosense can
              enhance your next vehicle program.
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
