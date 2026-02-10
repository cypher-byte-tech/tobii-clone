import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, HeartPulse, GraduationCap, Users, ShieldCheck, ShoppingCart } from "lucide-react"

export const metadata = {
  title: "Application areas - Tobii",
  description: "Discover how eye tracking is applied across scientific research, commercial, and industry sectors.",
}

const applications = [
  {
    icon: Brain,
    title: "Cognitive & psychological research",
    desc: "Understanding mental processes such as perception, memory, attention, and decision-making through eye tracking provides powerful insights into how the human mind works.",
    href: "/applications/cognitive-research",
    image: "/images/solutions-hero.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Human factors",
    desc: "Eye tracking reveals how humans interact with systems and environments, providing critical data on visual attention, cognitive load, and situational awareness.",
    href: "/applications/human-factors",
    image: "/images/automotive-hero.jpg",
  },
  {
    icon: HeartPulse,
    title: "Medical research",
    desc: "Eye tracking is used as a diagnostic tool and biomarker for neurological conditions, providing non-invasive measures of brain function.",
    href: "/applications/medical-research",
    image: "/images/resource-center.jpg",
  },
  {
    icon: GraduationCap,
    title: "Education research",
    desc: "Develop diagnostic tools and learning material by understanding how students read, study, and engage with educational content.",
    href: "/applications/education-research",
    image: "/images/company-hero.jpg",
  },
  {
    icon: Users,
    title: "Training & skills assessment",
    desc: "Transfer expert skills and improve safety by capturing and analyzing the visual strategies of experienced professionals.",
    href: "/applications/training",
    image: "/images/contact-hero.jpg",
  },
  {
    icon: ShoppingCart,
    title: "Consumer research & UX",
    desc: "Visualize your shopper journey and UX impact. Understand what truly captures attention and drives purchase decisions.",
    href: "/applications/consumer-research",
    image: "/images/screen-integration.jpg",
  },
]

export default function ApplicationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-foreground py-20 lg:py-28">
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary-foreground/60">
            Application areas
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">
            Where eye tracking makes an impact
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Our solutions help you implement eye tracking and leverage the data it delivers -- whatever your industry or research domain.
          </p>
        </div>
      </section>

      {/* Application cards */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <Link
                key={app.title}
                href={app.href}
                className="group overflow-hidden rounded-xl border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <app.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {app.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
            Get started with eye tracking
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Our team is ready to help you find the right solution for your application.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
