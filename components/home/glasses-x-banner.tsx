import Link from "next/link"
import Image from "next/image"

export function GlassesXBanner() {
  return (
    <section className="bg-[hsl(220,80%,50%)] text-[hsl(0,0%,100%)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-20 lg:flex-row lg:px-8">
        <div className="flex-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[hsl(210,100%,85%)]">
            New
          </p>
          <h2 className="text-balance text-3xl font-bold leading-tight md:text-4xl">
            Introducing Tobii Glasses X
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-[hsl(210,100%,90%)]">
            Our latest wearable eye tracker — easy-to-use in all environments.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-[hsl(220,80%,50%)] transition-opacity hover:opacity-90"
          >
            Discover it now
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/glasses-x.jpg"
              alt="Tobii Glasses X wearable eye tracker"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
