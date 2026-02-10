import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Building2,
  Globe,
  Handshake,
  Store,
  Shield,
  FileText,
  PenLine,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Learn more about us and where we are in the world | Tobii",
  description:
    "Tobii is the global leader in eye tracking, a position we earned through our passion for technology and our ambition to create tech for a better future.",
}

const aboutCards = [
  {
    icon: Building2,
    title: "This is Tobii",
    desc: "Find out everything you need to know about Tobii. Discover why we believe in eye tracking and attention computing, and how these technologies will help build a better future.",
    href: "/company/this-is-tobii",
  },
  {
    icon: Globe,
    title: "Our global offices and hubs",
    desc: "Our team of people work out of our headquarters in Stockholm and locations across Asia, Europe, North America.",
    href: "/company/this-is-tobii",
  },
  {
    icon: Handshake,
    title: "Our partner network",
    desc: "Our trusted partners around the globe integrate and make use of our technology in their solutions, develop compatible applications, or provide us with accessories.",
    href: "/company",
  },
  {
    icon: Store,
    title: "Tobii resellers",
    desc: "We work with an extensive network of resellers around the world. Find the one nearest you.",
    href: "/company",
  },
  {
    icon: FileText,
    title: "Data transparency policy",
    desc: "If you are developing an application that stores or transfers Tobii eye tracking data, your application must comply with our data transparency policy.",
    href: "/company",
  },
  {
    icon: Shield,
    title: "Certifications",
    desc: "We pride ourselves on our awarded certifications. We hold ISO9001, ISO14001 and ISO27001 certificates.",
    href: "/company",
  },
]

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/company-hero.jpg"
            alt="Tobii company headquarters"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Company
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Company
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Tobii is the global leader in eye tracking, a position we earned
            through our passion for technology and our ambition to create tech
            for a better future.
          </p>
        </div>
      </section>

      {/* About us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            About us
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
            Our journey began more than 20 years ago when we delivered the
            world&apos;s first remote eye tracker. Since then, we&apos;ve been on a
            mission to build technology that understands human attention and
            intent — what we call attention computing.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutCards.map((card) => (
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
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog promo */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="flex-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <PenLine className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Check out our blog
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                Discover how eye tracking and attention computing are used to
                understand human behavior. We explore the many applications of
                eye tracking as an assessment and research tool, share expert
                knowledge, advice and case studies.
              </p>
              <Link
                href="/company"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                The Tobii Blog
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex-1">
              {/* Blog preview cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    title: "Understanding cognitive load with Tobii eye tracking",
                    date: "January 2026",
                  },
                  {
                    title: "The science behind the swing: Eye tracking boosts golf performance",
                    date: "December 2025",
                  },
                  {
                    title: "Gaze matters: Rethinking eye tracking in precision sport",
                    date: "November 2025",
                  },
                ].map((post) => (
                  <Link
                    key={post.title}
                    href="/company/blog"
                    className="group rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                  >
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <h3 className="mt-1 text-sm font-semibold text-foreground group-hover:text-primary">
                      {post.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Get in touch with Tobii
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Have a question about eye tracking? We&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Contact us
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
