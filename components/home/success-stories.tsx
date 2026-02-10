"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const stories = [
  {
    quote:
      "With eye tracking we can pinpoint exactly where passengers face confusion in their journeys and what signage is being ignored or misinterpreted.",
    title: "How Heathrow Airport used eye tracking to improve wayfinding in Terminal 5",
    company: "Heathrow Airport",
  },
  {
    quote:
      "Seeing that first-person view allows us to pinpoint exactly where an inspector needs support, rather than retraining an entire process.",
    title: "How Kubota improved inspection training with eye tracking",
    company: "Kubota",
  },
  {
    quote:
      "Understanding human behavior will benefit aviation safety, space exploration, and enable safe, autonomous flight.",
    title: "Studying human performance and attention at NASA Langley Research Center",
    company: "NASA",
  },
  {
    quote:
      "The accuracy and efficiency of the inspection process has been improved, the eye tracker has proven useful for training — we have halved the training time for new hires.",
    title: "Denso halves training time thanks to eye tracking",
    company: "Denso",
  },
  {
    quote:
      "Using eye tracking gives you the opportunity to look through the consumer's eyes, so instead of only listening to an opinion we now see the analysis.",
    title: "Improving package design for Unilever",
    company: "Unilever",
  },
  {
    quote:
      "Eye tracking provides marketers with unbiased and accurate insight on what commercials need to have to be more compelling and relevant to the public.",
    title: "TV advertising research for Facebook",
    company: "Meta / Facebook",
  },
]

export function SuccessStories() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % stories.length)
  const prev = () => setCurrent((prev) => (prev - 1 + stories.length) % stories.length)

  const story = stories[current]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Success stories from our valued customers
        </h2>

        <div className="mt-12 rounded-2xl border border-border bg-secondary p-8 md:p-12">
          <Quote className="mb-6 h-10 w-10 text-primary/30" />
          <blockquote className="text-xl font-medium leading-relaxed text-foreground md:text-2xl">
            &ldquo;{story.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-foreground">{story.company}</p>
            <Link
              href="/company"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              {story.title}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-background"
              aria-label="Previous story"
            >
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <span className="text-sm text-muted-foreground">
              {current + 1} / {stories.length}
            </span>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-background"
              aria-label="Next story"
            >
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
