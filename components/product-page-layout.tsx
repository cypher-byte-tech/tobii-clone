import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductFeature {
  title: string
  desc: string
}

export interface RelatedProduct {
  title: string
  desc: string
  href: string
}

export interface ProductPageProps {
  tag: string
  name: string
  headline: string
  description: string
  heroImage: string
  features: ProductFeature[]
  specs: ProductSpec[]
  relatedProducts: RelatedProduct[]
  highlights?: string[]
}

export function ProductPageLayout({
  tag,
  name,
  headline,
  description,
  heroImage,
  features,
  specs,
  relatedProducts,
  highlights,
}: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image src={heroImage} alt={name} fill className="object-cover opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-28 lg:flex lg:items-center lg:gap-16 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{tag}</p>
            <p className="text-sm font-medium text-[hsl(215,16%,70%)]">{name}</p>
            <h1 className="mt-2 max-w-xl text-balance text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">{headline}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(215,16%,75%)]">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
                Request a quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[hsl(0,0%,100%)]/30 bg-[hsl(0,0%,100%)]/10 px-7 py-3 text-sm font-semibold text-[hsl(0,0%,100%)] backdrop-blur transition-colors hover:bg-[hsl(0,0%,100%)]/20">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Why choose {name}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <section className="border-y border-border bg-secondary py-16">
          <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Verified excellence</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="text-sm leading-relaxed text-foreground">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Specs */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Technical specifications</h2>
          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            {specs.map((s, i) => (
              <div key={s.label} className={`flex items-start justify-between gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}>
                <span className="text-sm font-medium text-foreground">{s.label}</span>
                <span className="text-right text-sm text-muted-foreground">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(220,20%,10%)] py-16 text-[hsl(0,0%,100%)]">
        <div className="mx-auto max-w-[1400px] px-4 text-center lg:px-10">
          <h2 className="text-2xl font-bold md:text-3xl">Interested in {name}?</h2>
          <p className="mx-auto mt-4 max-w-xl text-[hsl(215,16%,70%)]">
            Fill out the form and one of our experts will reach out to you.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-10">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Pairs perfectly with these products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <Link key={p.title} href={p.href} className="group rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-md">
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
