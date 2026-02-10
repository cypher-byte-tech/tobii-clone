export function TrustedBy() {
  const companies = [
    "NASA",
    "Unilever",
    "Meta",
    "Heathrow",
    "Kubota",
    "Denso",
    "Alpine",
    "Karolinska",
  ]

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          The global leader in eye tracking and pioneer of attention computing
        </h2>
        <p className="mt-4 text-muted-foreground">
          Trusted by the world&apos;s leading companies and academic institutes
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-12 items-center justify-center"
            >
              <span className="text-lg font-bold tracking-wide text-muted-foreground/60">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
