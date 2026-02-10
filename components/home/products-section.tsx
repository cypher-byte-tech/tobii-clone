"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const tabs = [
  { id: "hardware", label: "Hardware" },
  { id: "software", label: "Software" },
  { id: "apps", label: "Applications & Development" },
  { id: "accessories", label: "Accessories" },
  { id: "services", label: "Services" },
]

const tabContent: Record<string, { title: string; desc: string; products: { name: string; desc: string; image: string }[] }> = {
  hardware: {
    title: "Eye Trackers",
    desc: "Advanced screen-based and wearable eye trackers for research, commercial, industry, and gaming.",
    products: [
      {
        name: "Tobii Pro Glasses 3",
        desc: "Advanced wearable eye tracker for real-world behavioral research.",
        image: "/images/pro-glasses3.jpg",
      },
      {
        name: "Tobii Glasses X",
        desc: "Versatile wearable for UX, sports, consumer, and industrial environments.",
        image: "/images/glasses-x.jpg",
      },
      {
        name: "Tobii Pro Spectrum",
        desc: "High-performance screen-based, capturing gaze data at up to 1200 Hz.",
        image: "/images/pro-spectrum.jpg",
      },
    ],
  },
  software: {
    title: "Software",
    desc: "Our data analysis tools provide deep insights into the data our eye trackers deliver.",
    products: [
      {
        name: "Behavior Research Software",
        desc: "Deep insights and data analysis tools for your eye tracking research.",
        image: "/images/pro-spectrum.jpg",
      },
      {
        name: "Consumer Research Software",
        desc: "Remote testing software for ad, packaging, or usability testing.",
        image: "/images/solutions-hero.jpg",
      },
    ],
  },
  apps: {
    title: "Applications & Developer Kits",
    desc: "Our applications help you set up and configure your eye tracker. Together with our SDKs, you can be up and running in hours.",
    products: [
      {
        name: "Developer SDK",
        desc: "Set up, configure, and build custom integrations with eye tracking.",
        image: "/images/xr-headset.jpg",
      },
    ],
  },
  accessories: {
    title: "Accessories",
    desc: "Corrective lenses, protective lenses, motion capture, tripod stands, and more.",
    products: [
      {
        name: "Corrective Lenses",
        desc: "Snap-on corrective lenses for wide population range data capture.",
        image: "/images/glasses-x.jpg",
      },
      {
        name: "Protective Lenses",
        desc: "Safeguard your glasses from glare, dust, and damage.",
        image: "/images/pro-glasses3.jpg",
      },
    ],
  },
  services: {
    title: "Services",
    desc: "Research services, training, consulting, and integration support from our expert team.",
    products: [
      {
        name: "Tobii Insight Services",
        desc: "Create and customize full-service eye tracking studies.",
        image: "/images/solutions-hero.jpg",
      },
      {
        name: "Training & Education",
        desc: "Interactive online sessions, onsite training, and e-learning.",
        image: "/images/company-hero.jpg",
      },
    ],
  },
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState("hardware")
  const content = tabContent[activeTab]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Our products
        </h2>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8">
          <p className="max-w-2xl text-muted-foreground">{content.desc}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.products.map((product) => (
              <Link
                key={product.name}
                href="/products"
                className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {product.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
