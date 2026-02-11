"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import Link from "next/link"
import {
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Globe,
  ExternalLink,
} from "lucide-react"

/* ─────────────────────────── SVG section icons ─────────────────────────── */

function WearableIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12a4 4 0 0 1 4-4h1" />
      <path d="M22 12a4 4 0 0 0-4-4h-1" />
      <rect x="7" y="6" width="10" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M9 12h-.5" />
      <path d="M15.5 12H15" />
    </svg>
  )
}

function ScreenIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <circle cx="12" cy="10" r="1.5" />
    </svg>
  )
}

function SoftwareIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

/* ─────────────────────────── NAV DATA ─────────────────────────── */

/* Products & Solutions ── Left sidebar */
const productsSidebar = [
  { id: "research", label: "Research & insights" },
  { id: "integrations", label: "Integrations", hasArrow: true },
  { id: "autosense", label: "Autosense" },
  { id: "gaming", label: "Gaming", external: true },
] as const

/* Research tab ── Wearable eye trackers */
const wearableTrackers = [
  { title: "Tobii Pro Glasses 3", desc: "Advanced wearable eye tracker for behavioral research", href: "/products/pro-glasses-3" },
  { title: "Tobii Glasses X", desc: "Easy-to-use wearable eye tracker for commercial and industrial environments", href: "/products/glasses-x" },
]

/* Research tab ── Screen-based eye trackers */
const screenTrackers = [
  { title: "Tobii Pro Spectrum", desc: "Eye tracker with speeds up to 1200 Hz", href: "/products/pro-spectrum" },
  { title: "Tobii Pro Fusion", desc: "Eye tracker with speeds up to 250 Hz", href: "/products/pro-fusion" },
  { title: "Tobii Pro Spark", desc: "Eye tracker with speeds up to 60 Hz", href: "/products/pro-spark" },
]

/* Research tab ── Software */
const softwareItems = [
  { title: "Tobii Pro Lab", desc: "Eye tracking software for behavioral studies", href: "/products/pro-lab" },
  { title: "Glasses Explore", desc: "Eye tracking software for easy insights", href: "/products" },
  { title: "Sticky by Tobii", desc: "Software for ad and packaging testing", href: "/products" },
]

/* Research tab ── Additional Products */
const additionalProducts = [
  { label: "Accessories", href: "/products" },
  { label: "Applications & developer kits", href: "/products" },
  { label: "Open-source software", href: "/products" },
]

/* Integrations tab */
const integrationItems = [
  { title: "Screen-based integration solutions", desc: "Seamless eye tracking integration for your products", href: "/solutions/screen-based" },
  { title: "Extended reality (XR)", desc: "Eye tracking for VR, AR, and smart glasses", href: "/solutions/xr" },
]

/* Autosense tab */
const autosenseItems = [
  { title: "Tobii Autosense", desc: "In-cabin sensing platform for automotive OEMs", href: "/solutions/autosense" },
  { title: "Driver monitoring system", desc: "Real-time driver attention and drowsiness detection", href: "/solutions/automotive" },
  { title: "Occupancy monitoring system", desc: "Intelligent occupant detection and classification", href: "/solutions/automotive" },
]

/* Applications dropdown */
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

/* Resources dropdown */
const resourcesMenu = [
  { title: "Resource center", desc: "Explore our learning material", href: "/resource-center" },
  { title: "Scientific publications", desc: "Published research using Tobii eye tracking", href: "/resource-center" },
  { title: "Customer stories", desc: "How organizations use eye tracking", href: "/resource-center" },
  { title: "Webinars & events", desc: "Upcoming and on-demand events", href: "/resource-center" },
  { title: "Blog", desc: "Insights on eye tracking and attention computing", href: "/company/blog" },
]

/* Company dropdown */
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
  const navRef = useRef<HTMLElement>(null)

  /* Hover helpers */
  const openDropdown = useCallback((id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(id)
    if (id === "products") setProductsTab("research")
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 200)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [])

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setActiveDropdown(null); setSearchOpen(false) }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setActiveDropdown(null)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const closeNav = () => setActiveDropdown(null)

  return (
    <header ref={navRef} className="sticky top-0 z-50 bg-background">
      {/* ── Top utility bar ── */}
      <div className="border-b border-border bg-[hsl(210,20%,97%)]">
        <div className="mx-auto flex h-8 max-w-[1400px] items-center justify-end gap-5 px-4 text-[11px] lg:px-10">
          <Link href="/company/blog" className="text-muted-foreground transition-colors hover:text-foreground">
            Tobii Blog
          </Link>
          <Link href="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            Support
          </Link>
          <a href="https://www.tobii.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            Corporate <ExternalLink className="h-2.5 w-2.5" />
          </a>
          <button type="button" className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            <Globe className="h-3 w-3" /> English
          </button>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="border-b border-border">
        <div className="mx-auto flex h-[60px] max-w-[1400px] items-center justify-between px-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="mr-8 flex shrink-0 items-center" onClick={() => { closeNav(); setMobileOpen(false) }}>
            <TobiiLogo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" role="menubar">
            {/* Products & solutions -- blue pill */}
            <NavDropdownTrigger
              id="products"
              label="Products & solutions"
              isPill
              activeDropdown={activeDropdown}
              onOpen={openDropdown}
              onClose={scheduleClose}
            />
            {/* Applications */}
            <NavDropdownTrigger id="applications" label="Applications" activeDropdown={activeDropdown} onOpen={openDropdown} onClose={scheduleClose} />
            {/* Research consultancy -- plain link */}
            <Link href="/research-consultancy" className="px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:text-primary" onMouseEnter={() => setActiveDropdown(null)}>
              Research consultancy
            </Link>
            {/* Resources */}
            <NavDropdownTrigger id="resources" label="Resources" activeDropdown={activeDropdown} onOpen={openDropdown} onClose={scheduleClose} />
            {/* Company */}
            <NavDropdownTrigger id="company" label="Company" activeDropdown={activeDropdown} onOpen={openDropdown} onClose={scheduleClose} />
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => { setSearchOpen(!searchOpen); closeNav() }} className="rounded-full p-2 text-foreground transition-colors hover:bg-secondary" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/contact" className="hidden rounded-full bg-primary px-5 py-2 text-[13px] font-semibold text-primary-foreground transition-opacity hover:opacity-90 lg:inline-flex">
              Contact us
            </Link>
            <button type="button" onClick={() => { setMobileOpen(!mobileOpen); closeNav() }} className="rounded-full p-2 transition-colors hover:bg-secondary lg:hidden" aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MEGA MENU: Products & Solutions ── */}
      {activeDropdown === "products" && (
        <div className="absolute left-0 right-0 z-50 hidden border-b border-border bg-[hsl(210,20%,98%)] shadow-lg lg:block" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} role="menu">
          <div className="mx-auto flex max-w-[1400px] px-4 lg:px-10">
            {/* LEFT SIDEBAR */}
            <div className="w-52 shrink-0 border-r-2 border-primary py-6 pr-6">
              {productsSidebar.map((tab) => (
                <div key={tab.id}>
                  {tab.external ? (
                    <Link href="/gaming" className={`flex items-center justify-between py-2.5 text-[13px] font-medium transition-colors ${productsTab === tab.id ? "text-primary" : "text-foreground hover:text-primary"}`} onMouseEnter={() => setProductsTab(tab.id)} onClick={closeNav}>
                      {tab.label}
                      <ExternalLink className="h-3 w-3 text-primary" />
                    </Link>
                  ) : (
                    <button type="button" onMouseEnter={() => setProductsTab(tab.id)} className={`flex w-full items-center justify-between py-2.5 text-left text-[13px] font-medium transition-colors ${productsTab === tab.id ? "text-primary" : "text-foreground hover:text-primary"}`}>
                      {tab.label}
                      {tab.hasArrow && <ArrowRight className="h-3 w-3 text-primary" />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* MAIN CONTENT */}
            <div className="min-h-[320px] flex-1 py-6 pl-10 pr-6">
              {/* Research tab */}
              {productsTab === "research" && (
                <div className="flex flex-col gap-7">
                  {/* Wearable */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <WearableIcon className="h-[18px] w-[18px] text-foreground" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">Wearable Eye Trackers</span>
                    </div>
                    <div className="grid grid-cols-2 gap-x-10">
                      {wearableTrackers.map((p) => (
                        <Link key={p.title} href={p.href} className="group py-1.5" onClick={closeNav}>
                          <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{p.title}</span>
                          <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{p.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Screen-based */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <ScreenIcon className="h-[18px] w-[18px] text-foreground" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">Screen-Based Eye Trackers</span>
                    </div>
                    <div className="grid grid-cols-3 gap-x-8">
                      {screenTrackers.map((p) => (
                        <Link key={p.title} href={p.href} className="group py-1.5" onClick={closeNav}>
                          <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{p.title}</span>
                          <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{p.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Software */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <SoftwareIcon className="h-[18px] w-[18px] text-foreground" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground">Software</span>
                    </div>
                    <div className="grid grid-cols-3 gap-x-8">
                      {softwareItems.map((p) => (
                        <Link key={p.title} href={p.href} className="group py-1.5" onClick={closeNav}>
                          <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{p.title}</span>
                          <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{p.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              {/* Integrations tab */}
              {productsTab === "integrations" && (
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-foreground">
                    <ScreenIcon className="h-[18px] w-[18px]" /> Integration Solutions
                  </h4>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    {integrationItems.map((item) => (
                      <Link key={item.title} href={item.href} className="group py-1" onClick={closeNav}>
                        <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                        <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {/* Autosense tab */}
              {productsTab === "autosense" && (
                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-foreground">
                    <ScreenIcon className="h-[18px] w-[18px]" /> Automotive Solutions
                  </h4>
                  <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                    {autosenseItems.map((item) => (
                      <Link key={item.title} href={item.href} className="group py-1" onClick={closeNav}>
                        <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                        <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {/* Gaming tab */}
              {productsTab === "gaming" && (
                <div>
                  <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-foreground">Gaming Products</h4>
                  <p className="max-w-lg text-[13px] leading-relaxed text-muted-foreground">
                    Our gaming offering includes a range of products and solutions that deliver head and eye tracking for in-game immersion, streaming, and esports.
                  </p>
                  <Link href="/gaming" className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:underline" onClick={closeNav}>
                    Explore gaming products <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="w-52 shrink-0 py-6 pl-6">
              {/* CTA card */}
              <Link href="/contact" className="block overflow-hidden rounded-lg" onClick={closeNav}>
                <div className="relative h-32 bg-primary">
                  <div className="absolute inset-0 flex flex-col justify-center p-4">
                    <span className="text-[13px] font-bold leading-tight text-primary-foreground">Need help getting started?</span>
                    <span className="mt-1.5 text-[11px] leading-relaxed text-primary-foreground/90">Our consultants can help manage your entire study.</span>
                  </div>
                </div>
              </Link>
              {/* Additional products */}
              <div className="mt-5">
                <span className="mb-2.5 block text-center text-[10px] font-bold uppercase tracking-wider text-foreground">Additional Products</span>
                <div className="flex flex-col items-center gap-1.5">
                  {additionalProducts.map((item) => (
                    <Link key={item.label} href={item.href} className="text-[12px] text-muted-foreground transition-colors hover:text-primary" onClick={closeNav}>
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
        <div className="absolute left-0 right-0 z-50 hidden border-b border-border bg-[hsl(210,20%,98%)] shadow-lg lg:block" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} role="menu">
          <div className="mx-auto flex max-w-[1400px] gap-16 px-4 py-8 lg:px-10">
            {applicationsMenu.map((group) => (
              <div key={group.category}>
                <h4 className="mb-3 text-[11px] font-bold uppercase tracking-wider text-foreground">{group.category}</h4>
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link key={item.title} href={item.href} className="py-2 text-[13px] text-foreground transition-colors hover:text-primary" onClick={closeNav}>
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
        <div className="absolute left-0 right-0 z-50 hidden border-b border-border bg-[hsl(210,20%,98%)] shadow-lg lg:block" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} role="menu">
          <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-10">
            <div className="grid grid-cols-3 gap-x-10 gap-y-4">
              {resourcesMenu.map((item) => (
                <Link key={item.title} href={item.href} className="group py-1" onClick={closeNav}>
                  <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DROPDOWN: Company ── */}
      {activeDropdown === "company" && (
        <div className="absolute left-0 right-0 z-50 hidden border-b border-border bg-[hsl(210,20%,98%)] shadow-lg lg:block" onMouseEnter={cancelClose} onMouseLeave={scheduleClose} role="menu">
          <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-10">
            <div className="grid grid-cols-3 gap-x-10 gap-y-4">
              {companyMenu.map((item) => (
                <Link key={item.title} href={item.href} className="group py-1" onClick={closeNav}>
                  <span className="text-[13px] font-semibold text-foreground group-hover:text-primary">{item.title}</span>
                  <span className="mt-0.5 block text-[11px] leading-relaxed text-muted-foreground">{item.desc}</span>
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
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
            <input type="text" placeholder="Search tobii.com..." className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground" autoFocus />
            <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      )}

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[calc(60px+32px+2px)] bottom-0 z-40 overflow-y-auto bg-background lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            <MobileAccordion label="Products & solutions" open={mobileSubmenu === "products"} onToggle={() => setMobileSubmenu(mobileSubmenu === "products" ? null : "products")}>
              <div className="flex flex-col gap-0.5">
                <MobileCategory>Wearable</MobileCategory>
                {wearableTrackers.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
                <MobileCategory>Screen-based</MobileCategory>
                {screenTrackers.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
                <MobileCategory>Software</MobileCategory>
                {softwareItems.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
                <MobileCategory>Integrations</MobileCategory>
                {integrationItems.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
                <MobileLink href="/solutions/autosense" onClick={() => setMobileOpen(false)}>Tobii Autosense</MobileLink>
                <MobileLink href="/gaming" onClick={() => setMobileOpen(false)}>Gaming</MobileLink>
              </div>
            </MobileAccordion>

            <MobileAccordion label="Applications" open={mobileSubmenu === "applications"} onToggle={() => setMobileSubmenu(mobileSubmenu === "applications" ? null : "applications")}>
              <div className="flex flex-col gap-0.5">
                {applicationsMenu.map((group) => (
                  <div key={group.category}>
                    <MobileCategory>{group.category}</MobileCategory>
                    {group.items.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
                  </div>
                ))}
              </div>
            </MobileAccordion>

            <Link href="/research-consultancy" className="flex items-center justify-between border-b border-border py-3.5 text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Research consultancy
            </Link>

            <MobileAccordion label="Resources" open={mobileSubmenu === "resources"} onToggle={() => setMobileSubmenu(mobileSubmenu === "resources" ? null : "resources")}>
              <div className="flex flex-col gap-0.5">
                {resourcesMenu.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
              </div>
            </MobileAccordion>

            <MobileAccordion label="Company" open={mobileSubmenu === "company"} onToggle={() => setMobileSubmenu(mobileSubmenu === "company" ? null : "company")}>
              <div className="flex flex-col gap-0.5">
                {companyMenu.map((i) => <MobileLink key={i.title} href={i.href} onClick={() => setMobileOpen(false)}>{i.title}</MobileLink>)}
              </div>
            </MobileAccordion>

            <Link href="/contact" className="mt-6 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground" onClick={() => setMobileOpen(false)}>
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

/* ─────────────────────── DESKTOP TRIGGER ─────────────────────── */

function NavDropdownTrigger({
  id,
  label,
  isPill,
  activeDropdown,
  onOpen,
  onClose,
}: {
  id: string
  label: string
  isPill?: boolean
  activeDropdown: string | null
  onOpen: (id: string) => void
  onClose: () => void
}) {
  const isActive = activeDropdown === id
  return (
    <div onMouseEnter={() => onOpen(id)} onMouseLeave={onClose}>
      <button
        type="button"
        role="menuitem"
        aria-expanded={isActive}
        aria-haspopup="true"
        className={
          isPill
            ? "flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-[13px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            : `flex items-center gap-1 px-4 py-2 text-[13px] font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`
        }
      >
        {label}
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
      </button>
    </div>
  )
}

/* ─────────────────────── MOBILE HELPERS ─────────────────────── */

function MobileAccordion({ label, open, onToggle, children }: { label: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b border-border">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-foreground">
        {label}
        <ChevronRight className={`h-4 w-4 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      {open && <div className="pb-4">{children}</div>}
    </div>
  )
}

function MobileCategory({ children }: { children: React.ReactNode }) {
  return <p className="px-2 pt-3 pb-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{children}</p>
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary" onClick={onClick}>
      {children}
    </Link>
  )
}

/* ─────────────────────── TOBII LOGO ─────────────────────── */

function TobiiLogo() {
  return (
    <svg viewBox="0 0 80 28" className="h-8 w-auto" aria-label="Tobii" role="img">
      <text x="0" y="23" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="28" fill="currentColor" letterSpacing="-0.5" className="text-foreground">
        tobii
      </text>
    </svg>
  )
}
