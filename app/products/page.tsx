import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Glasses,
  Monitor,
  Code2,
  Wrench,
  HeadphonesIcon,
  Car,
  Gamepad2,
  Eye,
  Layers,
  Settings,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Eye tracking products for research and integrations | Tobii",
  description:
    "Our products include research graded eye trackers, analysis software, gaming solutions and eye tracking platforms for integration.",
}

const wearables = [
  {
    name: "Tobii Pro Glasses 3",
    tag: "Wearables",
    desc: "Designed for the real world, our advanced wearable eye tracker allows you to conduct behavioral research in a wide range of settings.",
    image: "/images/pro-glasses3.jpg",
  },
  {
    name: "Tobii Glasses X",
    tag: "Wearables",
    desc: "A versatile wearable eye tracker suitable for UX, sports, consumer, and industrial environments. Designed to deliver reliable insights in dynamic, high-movement settings.",
    image: "/images/glasses-x.jpg",
  },
]

const screenBased = [
  {
    name: "Tobii Pro Spectrum",
    tag: "Screen based",
    desc: "This high-performance research system captures gaze data at speeds up to 1200 Hz. A screen-based eye tracker for extensive research from fixation-based studies to micro-saccades.",
    image: "/images/pro-spectrum.jpg",
  },
  {
    name: "Tobii Pro Fusion",
    tag: "Screen based",
    desc: "Screen-based eye tracker, capturing gaze data at speeds up to 250 Hz. This powerful research system supports from fixation to saccade-based research outside of the lab.",
    image: "/images/pro-spectrum.jpg",
  },
  {
    name: "Tobii Pro Spark",
    tag: "Screen based",
    desc: "A powerful screen-based eye tracker, capturing gaze data at 60 Hz. With this affordable system, anyone can easily enhance their research.",
    image: "/images/pro-spectrum.jpg",
  },
]

const software = [
  {
    name: "Behavior Research Software",
    tag: "Software",
    desc: "Our data analysis tools provide deep insights into the data our eye trackers deliver.",
    icon: Monitor,
  },
  {
    name: "Consumer Research Software",
    tag: "Software",
    desc: "We offer two kinds of remote testing software depending on what you are studying. Ad, packaging, or usability testing.",
    icon: Eye,
  },
  {
    name: "Applications & Developer Kits",
    tag: "Applications",
    desc: "Our applications help you to set up and configure your eye tracker. Together with our SDKs, you can be up and running in a few hours.",
    icon: Code2,
  },
]

const integrations = [
  {
    name: "Screen-based Integration Solutions",
    tag: "Integrations",
    desc: "Seamless eye tracking integration for your products. Whether you're creating software or hardware, Tobii provides flexible solutions.",
    image: "/images/pro-spectrum.jpg",
  },
  {
    name: "Extended Reality (XR)",
    tag: "Extended reality",
    desc: "From wearables and smart glasses to mixed and virtual reality, Tobii's system-on-chip eye tracking enables seamless interaction.",
    image: "/images/xr-headset.jpg",
  },
]

const accessories = [
  { name: "Corrective Lenses", desc: "Snap-on corrective lenses for wide population range data capture." },
  { name: "Protective Lenses", desc: "Safeguard your glasses from glare, dust, scratching, and damage." },
  { name: "Motion Capture", desc: "Combine Tobii Pro Glasses 3 with motion capture systems." },
  { name: "Mobile Testing Accessory", desc: "A mounting solution for eye tracking tests with Tobii Pro Spark." },
  { name: "Shimmer3R GSR Sensor", desc: "Galvanic skin response sensor for measuring psychological arousal." },
  { name: "Tripod Stand", desc: "A solution for mounting Tobii eye trackers." },
  { name: "StimTracker", desc: "Device by Cedrus for synchronizing stimuli events with eye tracking data." },
  { name: "Chin Rest", desc: "Hold a participant's head in place during experiments." },
]

const services = [
  {
    name: "Tobii Insight Services",
    icon: HeadphonesIcon,
    desc: "Our research experts help you create and customize your own full-service eye tracking study.",
  },
  {
    name: "Funding Support Services",
    icon: Layers,
    desc: "Designed to assist researchers looking to integrate eye tracking into their methodology with grant funding applications.",
  },
  {
    name: "Customer Integration",
    icon: Settings,
    desc: "Collaboration and knowledge sharing is the best way to introduce eye tracking to your new products and applications.",
  },
  {
    name: "Training & Education Services",
    icon: Wrench,
    desc: "Interactive online sessions, onsite training, and our e-learning platform help you operate your eye tracking system.",
  },
]

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/products-hero.jpg"
            alt="Eye tracking products"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Products
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Our products include research graded eye trackers and analysis
            software, gaming solutions and eye tracking platforms for integration
            into XR headsets, PCs, as well as custom-built vehicle solutions,
            EdTech, and Healthcare technology products.
          </p>
        </div>
      </section>

      {/* Wearable Eye Trackers */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Wearable eye trackers
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {wearables.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Screen-based Eye Trackers */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Screen-based eye trackers
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {screenBased.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Software, applications and developer kits
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {software.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary">{item.tag}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Integrations
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {integrations.map((item) => (
              <ProductCard key={item.name} {...item} tag={item.tag} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Accessories
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accessories.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaming */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
              <Gamepad2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Gaming</h2>
              <p className="text-[hsl(215,16%,65%)]">
                Head and eye tracking for in-game immersion, streaming, and esports.
              </p>
            </div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <Image
              src="/images/gaming-hero.jpg"
              alt="Tobii Gaming"
              width={1200}
              height={500}
              className="w-full object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/gaming"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore Gaming Products
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Automotive */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Tobii Autosense
              </h2>
              <p className="mt-4 max-w-lg text-muted-foreground leading-relaxed">
                Tobii Autosense brings the Tobii mission of harmonizing the
                connection between humans and machines into the car. Our
                technology enables OEMs to build for tomorrow, pushing the
                boundaries of what&apos;s possible, and achieve true in-cabin
                differentiation.
              </p>
              <Link
                href="/solutions/autosense"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-2xl">
              <Image
                src="/images/automotive.jpg"
                alt="Tobii Autosense"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Consultancy services
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.desc}</p>
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
              Get started with eye tracking
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Our team are ready to help you start your eye tracking adventure!
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

function ProductCard({
  name,
  tag,
  desc,
  image,
}: {
  name: string
  tag: string
  desc: string
  image: string
}) {
  return (
    <Link
      href="/products"
      className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-primary">{tag}</span>
        <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-primary">
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </Link>
  )
}
