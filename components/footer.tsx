import Link from "next/link"

const footerLinks = {
  Products: [
    { label: "Eye Trackers", href: "/products" },
    { label: "Software", href: "/products" },
    { label: "Integrations", href: "/products" },
    { label: "Accessories", href: "/products" },
    { label: "Gaming", href: "/gaming" },
    { label: "Automotive", href: "/solutions/autosense" },
    { label: "Services", href: "/products" },
  ],
  Solutions: [
    { label: "Cognitive & Psychological Research", href: "/solutions" },
    { label: "Human Factors", href: "/solutions" },
    { label: "Training & Skills Assessment", href: "/solutions" },
    { label: "Consumer Research & UX", href: "/solutions" },
    { label: "Medical Research", href: "/solutions" },
    { label: "Education Research", href: "/solutions" },
    { label: "Automotive", href: "/solutions/automotive" },
  ],
  Company: [
    { label: "This is Tobii", href: "/company/this-is-tobii" },
    { label: "Our Global Offices", href: "/company" },
    { label: "Partner Network", href: "/company" },
    { label: "Resellers", href: "/company" },
    { label: "Certifications", href: "/company" },
    { label: "Blog", href: "/company/blog" },
  ],
  Support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Resource Center", href: "/resource-center" },
    { label: "Tobii Connect", href: "/contact" },
    { label: "Tobii Academy", href: "/company" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-[hsl(220,20%,14%)] text-[hsl(0,0%,85%)]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <svg viewBox="0 0 100 32" className="mb-6 h-8 w-auto" aria-label="Tobii" role="img">
              <text
                x="0"
                y="24"
                fontFamily="Inter, sans-serif"
                fontWeight="700"
                fontSize="28"
                fill="white"
                letterSpacing="-1"
              >
                tobii
              </text>
            </svg>
            <p className="text-sm leading-relaxed text-[hsl(215,16%,60%)]">
              The global leader in eye tracking and pioneer of attention computing.
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-[hsl(215,16%,60%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-[hsl(215,16%,60%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="X / Twitter" className="text-[hsl(215,16%,60%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-sm font-semibold text-[hsl(0,0%,100%)]">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[hsl(215,16%,60%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[hsl(220,15%,22%)] pt-8 sm:flex-row">
          <p className="text-xs text-[hsl(215,16%,50%)]">
            {"© 2026 Tobii AB. All rights reserved."}
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[hsl(215,16%,50%)] hover:text-[hsl(0,0%,100%)]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[hsl(215,16%,50%)] hover:text-[hsl(0,0%,100%)]">
              Cookie Policy
            </Link>
            <Link href="#" className="text-xs text-[hsl(215,16%,50%)] hover:text-[hsl(0,0%,100%)]">
              Terms of Use
            </Link>
            <Link href="#" className="text-xs text-[hsl(215,16%,50%)] hover:text-[hsl(0,0%,100%)]">
              Data Transparency
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
