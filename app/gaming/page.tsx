import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Gamepad2, Eye, Monitor, Tv, Zap, Trophy } from "lucide-react"

export const metadata: Metadata = {
  title: "Tobii eye tracking products enhance your gaming experience | Tobii",
  description:
    "Our gaming offering includes a range of products and solutions that deliver head and eye tracking for in-game immersion, streaming, and Esports.",
}

const gamingProducts = [
  {
    name: "Tobii Eye Tracker 5",
    desc: "The next generation of head tracking and eye tracking, engineered specifically for PC users to enhance the experience of each and every game.",
    image: "/images/pro-spectrum.jpg",
    features: [
      "Natural Light eye tracking sensor",
      "16.3 cm sensor for freedom of movement",
      "USB-C connectivity",
      "133 Hz tracking speed",
      "Works with 200+ games",
    ],
  },
  {
    name: "Tobii IS5 Integration Platform",
    desc: "A compact, multimodality platform, bringing superior eye tracking functionality as well as biometric performance data to machines and applications.",
    image: "/images/pro-spectrum.jpg",
    features: [
      "System-on-chip design",
      "Low power consumption",
      "OEM integration ready",
      "Multi-modal sensing",
      "Enterprise-grade reliability",
    ],
  },
]

const gamingFeatures = [
  {
    icon: Eye,
    title: "Gaze-based interactions",
    desc: "Look at enemies to aim, navigate menus with your eyes, and interact with game elements naturally through gaze.",
  },
  {
    icon: Monitor,
    title: "Extended View",
    desc: "Use head tracking to naturally look around in games. Turn your head to pan the camera for a more immersive experience.",
  },
  {
    icon: Tv,
    title: "Streaming & Content",
    desc: "Show your audience exactly where you're looking with gaze overlays. Create engaging content that stands out.",
  },
  {
    icon: Trophy,
    title: "Esports Performance",
    desc: "Analyze your gaze patterns to improve reaction times, map awareness, and decision-making in competitive gaming.",
  },
  {
    icon: Zap,
    title: "Dynamic Light & Effects",
    desc: "Games respond to where you look with dynamic lighting, depth of field effects, and responsive environments.",
  },
  {
    icon: Gamepad2,
    title: "200+ Supported Games",
    desc: "From AAA titles to indie games, Tobii eye tracking is supported in a growing library of over 200 games.",
  },
]

const blogPosts = [
  {
    title: "What makes Tobii Eye Tracker 5 so immersive?",
    desc: "Tobii Eye Tracker 5 was engineered to enable the most exciting gaming experiences money can buy.",
    tag: "blog",
  },
  {
    title: "Accelerating the game: Alpine Esports' winning vision for sim racing",
    desc: "How Alpine Esports are using Tobii's Eye Tracker 5 to redefine performance and immersion in virtual racing.",
    tag: "Customer stories",
  },
  {
    title: "Command the seas of Skull & Bones with Tobii Eye Tracking",
    desc: "Tobii Head & Eye Tracking support available at the launch of Skull & Bones.",
    tag: "blog",
  },
  {
    title: "Tobii Horizon — gearless head tracking",
    desc: "Tobii Horizon is a software alternative to head tracking — no hats, no reflectors, no additional hardware.",
    tag: "blog",
  },
  {
    title: "Elevate your War Thunder experience with Tobii eye and head tracking",
    desc: "Extended View and Camera Boost features in War Thunder combats.",
    tag: "blog",
  },
  {
    title: "FAR CRY 6 will support Tobii eye tracking at launch",
    desc: "Extended view, aim at gaze and several other popular eye tracking features enabled at launch.",
    tag: "blog",
  },
]

export default function GamingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/gaming-hero.jpg"
            alt="Tobii Gaming"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Tobii Gaming
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Gaming
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Our gaming offering includes a range of products and solutions that
            deliver head and eye tracking for in-game immersion, streaming, and
            Esports.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Our products
          </h2>

          <div className="mt-12 flex flex-col gap-16">
            {gamingProducts.map((product, idx) => (
              <div
                key={product.name}
                className={`flex flex-col gap-10 lg:items-center ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative flex-1 overflow-hidden rounded-2xl">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {product.desc}
                  </p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                        <svg className="h-4 w-4 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[hsl(220,20%,10%)] py-20 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            How eye tracking enhances your gaming
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[hsl(215,16%,70%)]">
            Eye and head tracking add entirely new dimensions to how you interact
            with virtual worlds.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gamingFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-[hsl(220,15%,22%)] bg-[hsl(220,20%,14%)] p-8 transition-colors hover:border-primary/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(215,16%,65%)]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related content / Blog */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Related content
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                href="/company"
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {post.tag}
                </span>
                <h3 className="mt-4 text-sm font-bold text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {post.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Ready to level up your gaming?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Discover the full range of Tobii gaming products and start your eye
              tracking journey today.
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
