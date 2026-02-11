import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingCart, Package, Monitor, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Consumer Research & UX - Tobii",
  description: "Eye tracking for shopper insights, UX testing, and ad research.",
}

const areas = [
  { icon: Package, title: "Package design testing", desc: "Understand which design elements capture attention on the shelf and drive purchase intent. Optimize packaging for maximum visibility and appeal." },
  { icon: Monitor, title: "UX & usability testing", desc: "See exactly how users navigate websites and apps. Identify usability friction, missed CTAs, and optimize digital experiences based on real gaze data." },
  { icon: ShoppingCart, title: "Shopper research", desc: "Map the complete shopper journey in-store or online. Understand what attracts attention, drives consideration, and triggers purchase decisions." },
  { icon: BarChart3, title: "Ad & media testing", desc: "Measure ad effectiveness by tracking visual attention across print, digital, video, and social media formats. Optimize creative assets for engagement." },
]

export default function ConsumerResearchPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/screen-integration.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 lg:px-10">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">Commercial & Industry</p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight text-primary-foreground lg:text-5xl">Consumer research & UX</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Visualize your shopper journey and UX impact. Eye tracking reveals what truly captures attention and drives decisions -- because eyes do not lie.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Talk to an expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">Research areas</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {areas.map((a) => (
              <div key={a.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><a.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="text-lg font-semibold text-foreground">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-foreground">Recommended products</h2>
          <p className="mt-3 text-muted-foreground">Tobii Pro Spark for affordable UX testing, and Sticky by Tobii for remote ad and packaging studies.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/products/pro-spark" className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">Tobii Pro Spark</Link>
            <Link href="/products" className="rounded-full border border-border bg-transparent px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">Sticky by Tobii</Link>
          </div>
        </div>
      </section>
    </>
  )
}
