import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tobii Blog - Insights on eye tracking and attention computing",
  description:
    "Discover how eye tracking and attention computing are used to understand human behavior. Expert knowledge, advice, and case studies.",
}

const featuredPost = {
  title: "Understanding cognitive load: how eye tracking reveals what the brain is processing",
  desc: "New research shows that pupil dilation patterns, fixation durations, and saccade frequencies can serve as reliable indicators of cognitive workload, opening new avenues for workplace safety and educational design.",
  date: "January 15, 2026",
  category: "Research",
  image: "/images/hero-eye-tracking.jpg",
}

const posts = [
  {
    title: "The science behind the swing: Eye tracking boosts golf performance",
    desc: "How professional golfers are using Tobii Pro Glasses 3 to analyze their gaze patterns during putting and driving, leading to measurable improvements in consistency.",
    date: "December 20, 2025",
    category: "Sports Science",
    image: "/images/pro-glasses3.jpg",
  },
  {
    title: "Gaze matters: Rethinking eye tracking in precision sport",
    desc: "A deep dive into how elite athletes in archery, shooting, and motorsport use visual attention strategies that set them apart from amateurs.",
    date: "November 18, 2025",
    category: "Sports Science",
    image: "/images/glasses-x.jpg",
  },
  {
    title: "How Unilever uses eye tracking to optimize packaging design",
    desc: "Case study: Unilever's global research team deployed Tobii eye tracking across 12 markets to understand how consumers interact with shelf displays.",
    date: "November 5, 2025",
    category: "Consumer Research",
    image: "/images/products-hero.jpg",
  },
  {
    title: "Eye tracking in autonomous driving: the human factor",
    desc: "As vehicles approach Level 3 autonomy, monitoring driver attention becomes critical. Here's how Tobii Autosense is addressing this challenge.",
    date: "October 22, 2025",
    category: "Automotive",
    image: "/images/automotive.jpg",
  },
  {
    title: "What makes Tobii Eye Tracker 5 so immersive?",
    desc: "Tobii Eye Tracker 5 was engineered to enable the most exciting gaming experiences money can buy. Here's the technology behind the magic.",
    date: "October 8, 2025",
    category: "Gaming",
    image: "/images/gaming-hero.jpg",
  },
  {
    title: "Accelerating the game: Alpine Esports' winning vision for sim racing",
    desc: "How Alpine Esports are using Tobii's Eye Tracker 5 to redefine performance and immersion in virtual racing.",
    date: "September 25, 2025",
    category: "Gaming",
    image: "/images/pro-spectrum.jpg",
  },
  {
    title: "Foveated rendering: the eye tracking revolution in XR",
    desc: "Eye tracking enables VR headsets to dramatically reduce rendering workload while maintaining perceived visual quality. Here's how it works.",
    date: "September 10, 2025",
    category: "XR Technology",
    image: "/images/xr-headset.jpg",
  },
  {
    title: "Early detection of neurodegenerative disease through eye movements",
    desc: "Researchers at Karolinska Institute are using Tobii eye tracking to identify early biomarkers for Parkinson's and Alzheimer's disease.",
    date: "August 28, 2025",
    category: "Medical Research",
    image: "/images/solutions-hero.jpg",
  },
  {
    title: "Tobii Glasses X: Designed for the field",
    desc: "Our newest wearable eye tracker brings research-grade precision to demanding industrial and commercial environments.",
    date: "August 15, 2025",
    category: "Product News",
    image: "/images/glasses-x.jpg",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/company-hero.jpg"
            alt="Tobii Blog"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-sm text-[hsl(215,16%,60%)]">
            <Link href="/company" className="hover:text-primary">Company</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary">Blog</span>
          </div>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            The Tobii Blog
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Discover how eye tracking and attention computing are used to
            understand human behavior. We explore the many applications of eye
            tracking, share expert knowledge, advice, and case studies.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/company/blog"
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg md:flex-row"
          >
            <div className="relative aspect-[16/10] md:aspect-auto md:w-1/2">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {featuredPost.date}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-bold text-foreground group-hover:text-primary md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {featuredPost.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read more
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-foreground md:text-3xl">
            Latest articles
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.title}
                href="/company/blog"
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-foreground group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {post.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Never miss an update
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Subscribe to the Tobii blog for the latest insights on eye
              tracking research, product news, and industry trends.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Subscribe
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
