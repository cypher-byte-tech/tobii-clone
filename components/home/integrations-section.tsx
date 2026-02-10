import Link from "next/link"
import Image from "next/image"
import { Monitor, Glasses, Car } from "lucide-react"

const integrations = [
  {
    icon: Glasses,
    title: "XR Solutions",
    desc: "Elevate your XR products with Tobii eye tracking technologies — essential for true immersive experiences.",
    items: ["Smart glasses", "Augmented reality", "Mixed and virtual reality", "Foveation technology"],
    href: "/solutions/xr",
    image: "/images/xr-headset.jpg",
  },
  {
    icon: Monitor,
    title: "Screen-based Solutions",
    desc: "Seamless eye tracking integration for your products. Whether you're creating software or hardware, Tobii provides flexible solutions.",
    items: ["Webcam eye tracking", "Eye tracker integrations", "Custom integrations"],
    href: "/solutions/screen-based",
    image: "/images/pro-spectrum.jpg",
  },
  {
    icon: Car,
    title: "Autosense",
    desc: "Enabling a safer, more intuitive and comfortable in-cabin experience — for everyone in the car.",
    items: ["Driver monitoring system", "Occupancy monitoring system", "Single camera interior sensing"],
    href: "/solutions/autosense",
    image: "/images/automotive.jpg",
  },
]

export function IntegrationsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Integrations
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From XR technology to intelligent screen-based integrations and
          in-cabin sensing — our solutions deliver seamless eye tracking across
          immersive, interactive, and in-cabin experiences.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {integrations.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {item.items.map((li) => (
                    <li key={li} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {li}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
