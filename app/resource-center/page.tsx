"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, FileText, Video, Download, Search, ChevronRight } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "whitepapers", label: "White papers" },
  { id: "webinars", label: "Webinars" },
  { id: "case-studies", label: "Case studies" },
  { id: "guides", label: "Guides" },
  { id: "videos", label: "Videos" },
]

const resources = [
  {
    title: "The Complete Guide to Eye Tracking Research",
    desc: "Everything you need to know about designing, conducting, and analyzing eye tracking studies. Covers methodology, best practices, and common pitfalls.",
    category: "guides",
    type: "Guide",
    icon: BookOpen,
    image: "/images/solutions-hero.jpg",
  },
  {
    title: "2025 Annual Eye Tracking Research Report",
    desc: "Our comprehensive annual report on the state of eye tracking in scientific research, featuring trends, insights, and the latest developments.",
    category: "whitepapers",
    type: "White paper",
    icon: FileText,
    image: "/images/pro-spectrum.jpg",
  },
  {
    title: "Eye Tracking in Consumer Research: Best Practices",
    desc: "Learn how leading brands use eye tracking to optimize packaging, advertising, and in-store experiences.",
    category: "whitepapers",
    type: "White paper",
    icon: FileText,
    image: "/images/glasses-x.jpg",
  },
  {
    title: "Webinar: The Latest Advancements in Eye Tracking",
    desc: "Join our researchers as they present the latest findings on eye tracking technology and its applications in cognitive science.",
    category: "webinars",
    type: "Webinar",
    icon: Video,
    image: "/images/company-hero.jpg",
  },
  {
    title: "How NASA Uses Tobii for Human Factors Research",
    desc: "Discover how NASA researchers leverage Tobii eye tracking to study operator attention and workload in mission control environments.",
    category: "case-studies",
    type: "Case study",
    icon: FileText,
    image: "/images/hero-eye-tracking.jpg",
  },
  {
    title: "Getting Started with Tobii Pro Glasses 3",
    desc: "A step-by-step video guide to setting up, calibrating, and conducting your first study with Tobii Pro Glasses 3.",
    category: "videos",
    type: "Video",
    icon: Video,
    image: "/images/pro-glasses3.jpg",
  },
  {
    title: "Eye Tracking in Medical Diagnostics",
    desc: "How eye movement analysis is being used as a biomarker for neurological conditions including Parkinson's, autism, and concussion.",
    category: "whitepapers",
    type: "White paper",
    icon: FileText,
    image: "/images/solutions-hero.jpg",
  },
  {
    title: "Alpine Esports: Winning with Eye Tracking",
    desc: "How Alpine Esports used Tobii Eye Tracker 5 to improve driver performance and gain competitive advantage in sim racing.",
    category: "case-studies",
    type: "Case study",
    icon: FileText,
    image: "/images/gaming-hero.jpg",
  },
  {
    title: "Setting Up Your First Screen-Based Study",
    desc: "A comprehensive video tutorial on configuring Tobii Pro Spectrum for screen-based eye tracking experiments.",
    category: "videos",
    type: "Video",
    icon: Video,
    image: "/images/pro-spectrum.jpg",
  },
  {
    title: "Webinar: Eye Tracking for UX Research",
    desc: "Best practices for using eye tracking in UX research, including study design, participant recruitment, and data analysis.",
    category: "webinars",
    type: "Webinar",
    icon: Video,
    image: "/images/contact-hero.jpg",
  },
  {
    title: "Tobii Eye Tracking Product Comparison Guide",
    desc: "A detailed comparison of all Tobii eye trackers to help you choose the right product for your research needs.",
    category: "guides",
    type: "Guide",
    icon: BookOpen,
    image: "/images/products-hero.jpg",
  },
  {
    title: "Automotive Interior Sensing: Technology Overview",
    desc: "Technical overview of Tobii Autosense DMS and OMS capabilities for automotive OEMs and Tier 1 suppliers.",
    category: "whitepapers",
    type: "White paper",
    icon: FileText,
    image: "/images/automotive.jpg",
  },
]

export default function ResourceCenterPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === "all" || r.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/resource-center.jpg"
            alt="Resource Center"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Resource Center
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Explore our learning material
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            From white papers and webinars to case studies and video guides —
            learn from the global leader in eye tracking.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary md:w-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-8 text-sm text-muted-foreground">
            Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((resource) => (
              <Link
                key={resource.title}
                href="/contact"
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(220,20%,10%)]/80 px-3 py-1.5 text-xs font-medium text-[hsl(0,0%,100%)] backdrop-blur">
                      <resource.icon className="h-3 w-3" />
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {resource.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {resource.type === "Video" || resource.type === "Webinar"
                      ? "Watch now"
                      : "Read more"}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">
                No resources found matching your criteria.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all")
                  setSearchQuery("")
                }}
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">
              Stay up to date
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[hsl(210,100%,90%)]">
              Subscribe to receive the latest white papers, webinar invitations,
              and eye tracking research updates.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(0,0%,100%)] px-8 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Subscribe now
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
