"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, Menu, X, ChevronDown, ChevronRight, ArrowRight, Globe, ExternalLink } from "lucide-react"

/* ─────────────────────────── DATA ─────────────────────────── */

// Products & Solutions left sidebar tabs
const productsSidebarTabs = [
  { id: "research", label: "Research & insights", href: "/products" },
  { id: "integrations", label: "Integrations", href: "/solutions/screen-based", hasArrow: true },
  { id: "autosense", label: "Autosense", href: "/solutions/autosense" },
  { id: "gaming", label: "Gaming", href: "/gaming", external: true },
] as const

// Research & insights tab content
const wearableTrackers = [
  {
    title: "Tobii Pro Glasses 3",
    desc: "Advanced wearable eye tracker for behavioral research",
    href: "/products/pro-glasses-3",
  },
  {
    title: "Tobii Glasses X",
    desc: "Easy-to-use wearable eye tracker for commercial and industrial environments",
    href: "/products/glasses-x",
  },
]

const screenBasedTrackers = [
  {
    title: "Tobii Pro Spectrum",
    desc: "Eye tracker with speeds up to 1200 Hz",
    href: "/products/pro-spectrum",
  },
  {
    title: "Tobii Pro Fusion",
    desc: "Eye tracker with speeds up to 250 Hz",
    href: "/products/pro-fusion",
  },
  {
    title: "Tobii Pro Spark",
    desc: "Eye tracker with speeds up to 60 Hz",
    href: "/products/pro-spark",
  },
]

const softwareProducts = [
  {
    title: "Tobii Pro Lab",
    desc: "Eye tracking software for behavioral studies",
    href: "/products/pro-lab",
  },
  {
    title: "Glasses Explore",
    desc: "Eye tracking software for easy insights",
    href: "/products/glasses-explore",
  },
  {
    title: "Sticky by Tobii",
    desc: "Software for ad and packaging testing",
    href: "/products/sticky",
  },
]

const additionalProducts = [
  { label: "Accessories", href: "/products/accessories" },
  { label: "Applications & developer kits", href: "/products/developer-kits" },
  { label: "Open-source software", href: "/products/open-source" },
]

// Integrations tab content
const integrationItems = [
  {
    title: "Screen-based integration solutions",
    desc: "Seamless eye tracking integration for your products",
    href: "/solutions/screen-based",
  },
  {
    title: "Extended reality (XR)",
    desc: "Eye tracking for VR, AR, and smart glasses",
    href: "/solutions/xr",
  },
]

// Autosense tab content
const autosenseItems = [
  {
    title: "Tobii Autosense",
    desc: "In-cabin sensing platform for automotive OEMs",
    href: "/solutions/autosense",
  },
  {
    title: "Driver monitoring system",
    desc: "Real-time driver attention and drowsiness detection",
    href: "/solutions/automotive",
  },
  {
    title: "Occupancy monitoring system",
    desc: "Intelligent occupant detection and classification",
    href: "/solutions/automotive",
  },
]

// Applications dropdown
const applicationsMenu = [
  {
    category: "SCIENTIFIC RESEARCH",
    items: [
      { title: "Cognitive & psychological research", href: "/applications/cognitive-research" },
      { title: "Human factors", href: "/applications/human-factors" },
      { title: "Medical research", href: "/applications/medical-research" },
      { title: "Education research", href: "/applications/education-research" },
    ],
  },
  {
    category: "COMMERCIAL & INDUSTRY",
    items: [
      { title: "Training & skills assessment", href: "/applications/training" },
      { title: "Consumer research & UX", href: "/applications/consumer-research" },
    ],
  },
]

// Resources dropdown
const resourcesMenu = [
  { title: "Resource center", desc: "Explore our learning material", href: "/resource-center" },
  { title: "Scientific publications", desc: "Published research using Tobii eye tracking", href: "/resource-center" },
  { title: "Customer stories", desc: "How organizations use eye tracking", href: "/resource-center" },
  { title: "Webinars & events", desc: "Upcoming and on-demand events", href: "/resource-center" },
  { title: "Blog", desc: "Insights on eye tracking and attention computing", href: "/company/blog" },
]

// Company dropdown
const companyMenu = [
  { title: "This is Tobii", desc: "Our story, mission, and technology", href: "/company/this-is-tobii" },
  { title: "Our global offices", desc: "Stockholm headquarters with global presence", href: "/company" },
  { title: "Partner network", desc: "Trusted partners around the globe", href: "/company" },
  { title: "Tobii resellers", desc: "Find a reseller near you", href: "/company" },
  { title: "Certifications", desc: "ISO9001, ISO14001 and ISO27001", href: "/company" },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [productsTab, setProductsTab] = useState<string>("research")
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openDropdown = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(id)
    if (id === "products") setProductsTab("research")
  }

  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

  // close dropdown on escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
        setSearchOpen(false)
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* ── Top utility bar ── */}
      <div className="border-b border-border bg-secondary/50">
        <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-end gap-5 px-4 lg:px-10">
          <Link href="/company/blog" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Tobii Blog
          </Link>
          <Link href="/contact" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
            Support
          </Link>
          <a
            href="https://www.tobii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Corporate
            <ExternalLink className="h-3 w-3" />
          </a>
          <button type="button" className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <Globe className="h-3.5 w-3.5" />
            English
          </button>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="mr-8 flex shrink-0 items-center">
            <TobiiLogo />
          </Link>

          {/* Desktop nav items */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {/* Products & solutions (blue pill) */}
            <div
              onMouseEnter={() => openDropdown("products")}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeDropdown === "products"
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Products & solutions
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Applications */}
            <div
              onMouseEnter={() => openDropdown("applications")}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/applications"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Applications
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Research consultancy */}
            <Link
              href="/research-consultancy"
              className="px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              onMouseEnter={() => setActiveDropdown(null)}
            >
              Research consultancy
            </Link>

            {/* Resources */}
            <div
              onMouseEnter={() => openDropdown("resources")}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/resource-center"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Resources
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Company */}
            <div
              onMouseEnter={() => openDropdown("company")}
              onMouseLeave={scheduleClose}
            >
              <Link
                href="/company"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                Company
                <ChevronDown className="h-3.5 w-3.5" />
              </Link>
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSearchOpen(!searchOpen)
                setActiveDropdown(null)
              }}
              className="rounded-full p-2 transition-colors hover:bg-secondary"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-foreground" />
            </button>

            <Link
              href="/contact"
              className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex"
            >
              Contact us
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 transition-colors hover:bg-secondary lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MEGA DROPDOWN: Products & solutions ── */}
      {activeDropdown === "products" && (
        <div
          className="absolute left-0 right-0 z-50 hidden border-b border-border bg-background shadow-lg lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto flex max-w-[1400px] px-4 py-6 lg:px-10">
            {/* LEFT SIDEBAR */}
            <div className="w-56 shrink-0 border-r border-border pr-6">
              {productsSidebarTabs.map((tab) => (
                <div key={tab.id}>
                  {tab.external ? (
                    <Link
                      href={tab.href}
                      className={`flex items-center justify-between py-2.5 text-sm font-medium transition-colors ${
                        productsTab === tab.id ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                      onMouseEnter={() => setProductsTab(tab.id)}
                    >
                      {tab.label}
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onMouseEnter={() => setProductsTab(tab.id)}
                      className={`flex w-full items-center justify-between py-2.5 text-left text-sm font-medium transition-colors ${
                        productsTab === tab.id ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      {tab.label}
                      {tab.hasArrow && <ArrowRight className="h-3.5 w-3.5" />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* MAIN CONTENT */}
            <div className="flex-1 pl-8 pr-8">
              {productsTab === "research" && (
                <div className="space-y-6">
                  {/* Wearable */}
                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                      Wearable Eye Trackers
                    </h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                      {wearableTrackers.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group py-1.5"
                        >
                          <div className="text-sm font-medium text-foreground group-hover:text-primary">
                            {item.title}
                          </div>
                          <div className="text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Screen-based */}
                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                      Screen-Based Eye Trackers
                    </h4>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                      {screenBasedTrackers.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group py-1.5"
                        >
                          <div className="text-sm font-medium text-foreground group-hover:text-primary">
                            {item.title}
                          </div>
                          <div className="text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Software */}
                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                      Software
                    </h4>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                      {softwareProducts.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="group py-1.5"
                        >
                          <div className="text-sm font-medium text-foreground group-hover:text-primary">
                            {item.title}
                          </div>
                          <div className="text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {productsTab === "integrations" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Integration Solutions
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {integrationItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group py-1.5"
                      >
                        <div className="text-sm font-medium text-foreground group-hover:text-primary">
                          {item.title}
                        </div>
                        <div className="text-xs leading-relaxed text-muted-foreground">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {productsTab === "autosense" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Automotive Solutions
                  </h4>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                    {autosenseItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group py-1.5"
                      >
                        <div className="text-sm font-medium text-foreground group-hover:text-primary">
                          {item.title}
                        </div>
                        <div className="text-xs leading-relaxed text-muted-foreground">
                          {item.desc}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {productsTab === "gaming" && (
                <div className="space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Gaming Products
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our gaming offering includes a range of products and solutions that deliver head and eye tracking for in-game immersion, streaming, and esports.
                  </p>
                  <Link
                    href="/gaming"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    Explore gaming products <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-56 shrink-0 space-y-6">
              {/* Help CTA card */}
              <div className="overflow-hidden rounded-lg bg-primary">
                <div className="relative h-20">
                  <Image
                    src="/images/contact-hero.jpg"
                    alt="Consultants helping with eye tracking"
                    fill
                    className="object-cover opacity-60"
                  />
                </div>
                <div className="px-4 py-3">
                  <h4 className="text-sm font-bold text-primary-foreground">
                    Need help getting started?
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80">
                    Our consultants can help manage your entire study.
                  </p>
                </div>
              </div>

              {/* Additional Products */}
              <div>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                  Additional Products
                </h4>
                <div className="flex flex-col gap-2">
                  {additionalProducts.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DROPDOWN: Applications ── */}
      {activeDropdown === "applications" && (
        <div
          className="absolute left-0 right-0 z-50 hidden border-b border-border bg-background shadow-lg lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto flex max-w-[1400px] gap-12 px-4 py-6 lg:px-10">
            {applicationsMenu.map((group) => (
              <div key={group.category}>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
                  {group.category}
                </h4>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="py-1.5 text-sm text-foreground transition-colors hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── DROPDOWN: Resources ── */}
      {activeDropdown === "resources" && (
        <div
          className="absolute left-0 right-0 z-50 hidden border-b border-border bg-background shadow-lg lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-10">
            <div className="grid grid-cols-3 gap-x-8 gap-y-3">
              {resourcesMenu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group py-1.5"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-primary">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DROPDOWN: Company ── */}
      {activeDropdown === "company" && (
        <div
          className="absolute left-0 right-0 z-50 hidden border-b border-border bg-background shadow-lg lg:block"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div className="mx-auto max-w-[1400px] px-4 py-6 lg:px-10">
            <div className="grid grid-cols-3 gap-x-8 gap-y-3">
              {companyMenu.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group py-1.5"
                >
                  <div className="text-sm font-medium text-foreground group-hover:text-primary">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {item.desc}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Search overlay ── */}
      {searchOpen && (
        <div className="border-b border-border bg-background px-4 py-4">
          <div className="mx-auto flex max-w-2xl items-center gap-3">
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tobii.com..."
              className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
              autoFocus
            />
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[calc(3.5rem+2rem+1px+1px)] bottom-0 z-40 overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {/* Products & solutions */}
            <MobileAccordion
              label="Products & solutions"
              open={mobileSubmenu === "products"}
              onToggle={() => setMobileSubmenu(mobileSubmenu === "products" ? null : "products")}
            >
              <div className="flex flex-col gap-0.5">
                <p className="px-2 pt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Wearable</p>
                {wearableTrackers.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
                <p className="px-2 pt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Screen-based</p>
                {screenBasedTrackers.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
                <p className="px-2 pt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Software</p>
                {softwareProducts.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
                <p className="px-2 pt-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Integrations</p>
                {integrationItems.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
                <MobileLink href="/solutions/autosense" onClick={() => setMobileOpen(false)}>
                  Tobii Autosense
                </MobileLink>
                <MobileLink href="/gaming" onClick={() => setMobileOpen(false)}>
                  Gaming
                </MobileLink>
              </div>
            </MobileAccordion>

            {/* Applications */}
            <MobileAccordion
              label="Applications"
              open={mobileSubmenu === "applications"}
              onToggle={() => setMobileSubmenu(mobileSubmenu === "applications" ? null : "applications")}
            >
              <div className="flex flex-col gap-0.5">
                {applicationsMenu.map((group) => (
                  <div key={group.category}>
                    <p className="px-2 pt-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {group.category}
                    </p>
                    {group.items.map((i) => (
                      <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                        {i.title}
                      </MobileLink>
                    ))}
                  </div>
                ))}
              </div>
            </MobileAccordion>

            {/* Research consultancy */}
            <Link
              href="/research-consultancy"
              className="flex items-center justify-between border-b border-border py-3.5 text-sm font-medium text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Research consultancy
            </Link>

            {/* Resources */}
            <MobileAccordion
              label="Resources"
              open={mobileSubmenu === "resources"}
              onToggle={() => setMobileSubmenu(mobileSubmenu === "resources" ? null : "resources")}
            >
              <div className="flex flex-col gap-0.5">
                {resourcesMenu.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
              </div>
            </MobileAccordion>

            {/* Company */}
            <MobileAccordion
              label="Company"
              open={mobileSubmenu === "company"}
              onToggle={() => setMobileSubmenu(mobileSubmenu === "company" ? null : "company")}
            >
              <div className="flex flex-col gap-0.5">
                {companyMenu.map((i) => (
                  <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>
                    {i.title}
                  </MobileLink>
                ))}
              </div>
            </MobileAccordion>

            <Link
              href="/contact"
              className="mt-6 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ─────────────────────── MOBILE HELPERS ─────────────────────── */

function MobileAccordion({
  label,
  open,
  onToggle,
  children,
}: {
  label: string
  open: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-foreground"
      >
        {label}
        <ChevronRight className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}

function MobileLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

/* ─────────────────────── TOBII LOGO ─────────────────────── */

function TobiiLogo() {
  return (
    <svg viewBox="0 0 100 32" className="h-7 w-auto" aria-label="Tobii" role="img">
      <text
        x="0"
        y="24"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="28"
        fill="currentColor"
        letterSpacing="-1"
        className="text-foreground"
      >
        tobii
      </text>
    </svg>
  )
}
