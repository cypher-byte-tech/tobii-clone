import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Brain,
  Users,
  GraduationCap,
  ShoppingCart,
  HeartPulse,
  BookOpen,
  Car,
  Gamepad2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Application areas | Tobii",
  description:
    "Our solutions help you implement eye tracking and attention computing and leverage the data — whatever your industry.",
}

const applicationAreas = [
  {
    icon: Brain,
    title: "Cognitive and psychological research",
    desc: "Academic research in psychology is a broad and dynamic field that encompasses the scientific study of the human mind and behavior. Eye tracking reveals where attention is directed during complex cognitive tasks, providing objective data that complements traditional methods like self-reports and behavioral measures.",
    highlights: [
      "Visual perception and attention studies",
      "Reading and language processing",
      "Decision-making and problem-solving",
      "Developmental psychology",
      "Social cognition research",
    ],
  },
  {
    icon: Users,
    title: "Human factors",
    desc: "Human factors research is a multidisciplinary field that studies how humans interact with systems, products, tools, environments, or technologies. Eye tracking data provides objective measures of visual attention, cognitive workload, and situation awareness in complex environments.",
    highlights: [
      "Cockpit and control room design",
      "Workstation ergonomics",
      "Safety-critical systems analysis",
      "Operator performance monitoring",
      "Interface design optimization",
    ],
  },
  {
    icon: GraduationCap,
    title: "Training and skills assessment",
    desc: "Transfer skills from experts to new recruits and systematically shape operating procedures for improved safety and efficiency. Eye tracking captures the gaze patterns of expert performers, revealing tacit knowledge that can be documented and taught to trainees.",
    highlights: [
      "Expert-novice comparison studies",
      "Quality inspection training",
      "Surgical skills assessment",
      "Manufacturing process optimization",
      "Real-time performance feedback",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Consumer research and user experience",
    desc: "With eye tracking, you can visualize the impact of your shopper journey, packaging design, advertising, or user experience, empowering you to attract more customers. Understand what truly captures consumer attention and drives purchase decisions.",
    highlights: [
      "Shopper behavior analysis",
      "Package design testing",
      "Ad effectiveness measurement",
      "Website and app UX testing",
      "Point-of-sale optimization",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medical research",
    desc: "Medical researchers use eye tracking to explore biomarkers for impaired brain function, enabling new tools for diagnosis, rehabilitation, and treatment. Eye movement patterns can serve as early indicators for a wide range of neurological conditions.",
    highlights: [
      "Neurological disorder screening",
      "Autism spectrum research",
      "Parkinson's disease diagnosis",
      "Concussion assessment",
      "Rehabilitation monitoring",
    ],
  },
  {
    icon: BookOpen,
    title: "Education research",
    desc: "Eye tracking data help researchers develop diagnostic tools and instruction material for innovative learning. Understanding how students process visual information leads to more effective educational designs and interventions.",
    highlights: [
      "Reading comprehension studies",
      "STEM learning research",
      "Multimedia learning effectiveness",
      "Classroom attention analysis",
      "E-learning optimization",
    ],
  },
  {
    icon: Car,
    title: "Automotive",
    desc: "Solutions for the vehicle lifecycle from research, UX/design and production to buyer and driver experiences. Eye tracking technology is central to developing safer, more intuitive vehicles through driver monitoring and interior sensing.",
    highlights: [
      "Driver monitoring systems",
      "In-cabin sensing technology",
      "HMI design and evaluation",
      "Autonomous driving research",
      "Vehicle safety testing",
    ],
    href: "/solutions/automotive",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    desc: "Our attention computing technology enables newly available actions in a range of games, providing an improved and immersive gaming experience. Eye and head tracking add entirely new dimensions to how players interact with virtual worlds.",
    highlights: [
      "Gaze-based game interactions",
      "Head tracking for extended view",
      "Esports performance analysis",
      "Streamer content creation",
      "Immersive VR experiences",
    ],
    href: "/gaming",
  },
]

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/solutions-hero.jpg"
            alt="Application areas for eye tracking"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Application areas
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Application areas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Our solutions help you implement eye tracking and attention computing
            and leverage the data these technologies deliver, in research, in
            development, and in commercialization — whatever your industry.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Eye tracking can be used in these diverse fields of use
          </h2>
        </div>
      </section>

      {/* Application areas grid */}
      {applicationAreas.map((area, index) => (
        <section
          key={area.title}
          className={index % 2 === 0 ? "bg-secondary py-20" : "py-20"}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <area.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {area.title}
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
                  {area.desc}
                </p>
                <Link
                  href={area.href || "/contact"}
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
                    Key applications
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {area.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
