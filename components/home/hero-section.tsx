import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-eye-tracking.jpg"
          alt="Eye tracking technology visualization"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/80 to-transparent" />
      </div>
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col items-start justify-center px-4 py-24 lg:px-8">
        <h1 className="max-w-2xl text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Eye tracking brings contextual awareness to AI
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
          AI lies at the heart of what we do. Our technology translates head and
          eye movements into insights that reveal real human behavior.
        </p>
        <Link
          href="/company/this-is-tobii"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Explore Tobii and AI
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
