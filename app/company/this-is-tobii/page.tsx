import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Brain,
  Users,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  BookOpen,
  Monitor,
  Glasses,
  Car,
  Eye,
  Globe,
  Award,
  Building,
  FileText,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "This is Tobii | The global leader in eye tracking since 2001",
  description:
    "We are the global leader in eye tracking, a position we earned through our passion for technology and our ambition to create tech for a better future.",
}

const stats = [
  { label: "Founded", value: "2001" },
  { label: "Tobiians", value: "~500" },
  { label: "Net sales (2024)", value: "857 MSEK" },
  { label: "Listed on Nasdaq Stockholm", value: "TOBII" },
  { label: "Global presence", value: "16 countries" },
  { label: "Patents", value: "1,000+" },
]

const applicationAreas = [
  {
    icon: Brain,
    title: "Cognitive & Psychological Research",
    desc: "Scientific study of the human mind and behavior.",
  },
  {
    icon: Users,
    title: "Human Factors",
    desc: "How humans interact with systems and environments.",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Research & UX",
    desc: "Visualize shopper journey and UX impact.",
  },
  {
    icon: GraduationCap,
    title: "Training & Skills Assessment",
    desc: "Transfer expert skills to new recruits.",
  },
  {
    icon: HeartPulse,
    title: "Medical Research",
    desc: "Explore biomarkers for impaired brain function.",
  },
  {
    icon: BookOpen,
    title: "Education Research",
    desc: "Develop diagnostic tools and learning material.",
  },
]

const integrationCards = [
  {
    icon: Monitor,
    title: "Screen-based Integration Solutions",
    desc: "Seamless eye tracking integration for your products. Whether you're creating software or hardware, Tobii provides flexible solutions designed to fit your needs.",
    href: "/solutions/screen-based",
  },
  {
    icon: Glasses,
    title: "Extended Reality",
    desc: "From wearables and smart glasses to mixed and virtual reality, Tobii's system-on-chip eye tracking enables seamless interaction between users and their devices.",
    href: "/solutions/xr",
  },
  {
    icon: Car,
    title: "Tobii Autosense",
    desc: "Bringing the Tobii mission of harmonizing the connection between humans and machines into the car. Enabling OEMs to build for tomorrow.",
    href: "/solutions/autosense",
  },
]

export default function ThisIsTobiiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/company-hero.jpg"
            alt="Tobii headquarters"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            This is Tobii
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            This is Tobii
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            We are the global leader in eye tracking, a position we earned
            through our passion for technology and our ambition to create tech
            for a better future.
          </p>
        </div>
      </section>

      {/* Pioneer section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Pioneer of attention computing
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our journey began more than 20 years ago when we delivered the
              world&apos;s first remote eye tracker. Since then, we&apos;ve been on a
              mission to build technology that understands human attention and
              intent — what we call attention computing.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Machine learning, artificial intelligence, and advanced signal
              processing lie at the heart of what we do. We decode head and eye
              movements, translate microscopic gestures into accurate gaze
              signals, and generate insights to reveal what captures a
              person&apos;s attention and interpret intent. No matter who, no matter
              where.
            </p>
          </div>
        </div>
      </section>

      {/* Our business - Stats */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold md:text-3xl">Our business</h2>
              <p className="mt-4 text-[hsl(215,16%,70%)] leading-relaxed">
                Tobii is a global company with offices located in Asia, Europe
                and North America, supported by a global network of resellers.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-primary md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[hsl(215,16%,60%)]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            What could attention computing mean for you?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our solutions help you leverage eye tracking and the data brought to
            you by attention computing in research, development, and
            commercialization no matter what your industry.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applicationAreas.map((area) => (
              <Link
                key={area.title}
                href="/solutions"
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <area.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                  {area.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {area.desc}
                </p>
              </Link>
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
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We help integrate our advanced eye tracking expertise for XR
            technologies, automotive interior sensing, and intuitive
            screen-based applications.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {integrationCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vision quote */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            &ldquo;Our vision is a world where technology works in harmony with
            human behavior.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Eye tracking deep dive */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                A deeper look into eye tracking
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Eye tracking is a sensor technology that decodes gaze. It is a
                foundational technology for a broad range of applications,
                including scientific research, behavioral analysis, and
                assistive technology. One of the things that differentiates Tobii
                from other vendors is our dedication to delivering a solution
                that lives up to the everyone, everywhere, every device
                principle.
              </p>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read more about eye tracking
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Attention computing
              </h2>
              <p className="mt-1 text-sm font-medium text-primary">
                Removing the barriers between people and technology
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Attention computing is a set of technologies that enable
                machines and devices to understand people — by interpreting what
                we say, how we move, and what captures our attention. It is a
                part of the next generation of human-computer interaction, which
                today relies on keyboards, mice, and touchscreens but is
                shifting toward intuitive communication using sounds, gestures,
                and movement.
              </p>
              <Link
                href="/solutions"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Learn more about Attention computing
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
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
