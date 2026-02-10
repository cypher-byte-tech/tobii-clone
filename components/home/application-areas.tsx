import Link from "next/link"
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

const areas = [
  {
    icon: Brain,
    title: "Cognitive & Psychological Research",
    desc: "Scientific study of the human mind and behavior.",
    href: "/solutions",
  },
  {
    icon: Users,
    title: "Human Factors",
    desc: "How humans interact with systems and environments.",
    href: "/solutions",
  },
  {
    icon: GraduationCap,
    title: "Training & Skills Assessment",
    desc: "Transfer expert skills and improve safety.",
    href: "/solutions",
  },
  {
    icon: ShoppingCart,
    title: "Consumer Research & UX",
    desc: "Visualize shopper journey and UX impact.",
    href: "/solutions",
  },
  {
    icon: HeartPulse,
    title: "Medical Research",
    desc: "Explore biomarkers for impaired brain function.",
    href: "/solutions",
  },
  {
    icon: BookOpen,
    title: "Education Research",
    desc: "Develop diagnostic tools and learning material.",
    href: "/solutions",
  },
  {
    icon: Car,
    title: "Automotive",
    desc: "Solutions for the vehicle lifecycle.",
    href: "/solutions/automotive",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    desc: "Immersive gaming with eye tracking.",
    href: "/gaming",
  },
]

export function ApplicationAreas() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Application areas
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Our solutions help you implement eye tracking and leverage the data it
          delivers — whatever your industry.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.title}
              href={area.href}
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
  )
}
