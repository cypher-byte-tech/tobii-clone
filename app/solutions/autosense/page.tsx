import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Car, Shield, Users, Camera, Cpu, Eye, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tobii Autosense - In-cabin Sensing for Automotive | Tobii",
  description:
    "Enabling a safer, more intuitive and comfortable in-cabin experience for everyone in the car.",
}

const capabilities = [
  {
    icon: Shield,
    title: "Driver Monitoring System",
    desc: "Real-time monitoring of driver attention, drowsiness, and distraction. Our DMS solution uses eye tracking and head pose estimation to ensure driver safety and regulatory compliance.",
  },
  {
    icon: Users,
    title: "Occupancy Monitoring System",
    desc: "Detect and classify all occupants in the vehicle, including children and pets. Optimize safety systems like airbags and climate control based on who is present.",
  },
  {
    icon: Camera,
    title: "Single Camera Interior Sensing",
    desc: "Combine DMS and OMS in a single compact camera solution. Reduce cost and complexity while maximizing cabin awareness with our unified sensing platform.",
  },
]

const differentiators = [
  {
    icon: Cpu,
    title: "Edge Computing",
    desc: "All processing happens on-device with minimal power and compute requirements, ensuring privacy and real-time responsiveness.",
  },
  {
    icon: Eye,
    title: "25+ Years of Eye Tracking",
    desc: "Built on over two decades of eye tracking research and innovation, delivering unmatched accuracy across diverse conditions.",
  },
  {
    icon: Car,
    title: "OEM-Ready",
    desc: "Production-validated solutions designed for automotive-grade quality standards and seamless integration into vehicle platforms.",
  },
]

export default function AutosensePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/automotive-hero.jpg"
            alt="Tobii Autosense in-cabin sensing"
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
            <span className="text-primary">Autosense</span>
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Tobii Autosense
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Enabling a safer, more intuitive and comfortable in-cabin
            experience — for everyone in the car.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact our team
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
                Harmonizing humans and machines in the car
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tobii Autosense brings the Tobii mission of harmonizing the
                connection between humans and machines into the car. Our
                technology enables OEMs to build for tomorrow, pushing the
                boundaries of what&apos;s possible, and achieve true in-cabin
                differentiation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                With deep expertise in eye tracking and computer vision, we
                deliver interior sensing solutions that understand not just
                where people look, but their state, intent, and presence.
              </p>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/automotive.jpg"
                alt="Autosense technology in vehicle"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Core capabilities
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <cap.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Why choose Tobii Autosense?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <d.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
                  {d.desc}
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
              Build the future of in-cabin experience
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Partner with Tobii to deliver industry-leading interior sensing
              in your vehicles.
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
