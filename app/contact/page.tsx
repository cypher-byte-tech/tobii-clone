"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Headphones, Gamepad2, ExternalLink } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    interest: "",
    message: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry! A sales representative will contact you shortly.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      country: "",
      interest: "",
      message: "",
    })
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[hsl(220,20%,10%)] text-[hsl(0,0%,100%)]">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-hero.jpg"
            alt="Contact Tobii"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,10%)] via-[hsl(220,20%,10%)]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
            Contact us
          </p>
          <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">
            Contact us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[hsl(215,16%,75%)]">
            Fill out the form below if you have any questions about our research
            and integration products or would like to talk to one of our sales
            specialists.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#sales"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact sales
            </a>
            <a
              href="#support"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(0,0%,100%)]/30 bg-[hsl(0,0%,100%)]/10 px-8 py-3.5 text-sm font-semibold text-[hsl(0,0%,100%)] backdrop-blur transition-colors hover:bg-[hsl(0,0%,100%)]/20"
            >
              Contact support
            </a>
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section id="sales" className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-16 lg:flex-row">
            {/* Form */}
            <div className="flex-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                Contact sales
              </h2>
              <p className="mt-4 text-muted-foreground">
                Interested in finding out more about eye tracking, our products
                or how we can help you with your research study? Fill out the
                form and a local sales representative will contact you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-foreground">
                      First name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-foreground">
                      Last name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Business email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
                    Company / Organization *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-foreground">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="DE">Germany</option>
                    <option value="SE">Sweden</option>
                    <option value="JP">Japan</option>
                    <option value="CN">China</option>
                    <option value="KR">South Korea</option>
                    <option value="FR">France</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="interest" className="mb-1.5 block text-sm font-medium text-foreground">
                    Area of interest
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select area of interest</option>
                    <option value="research">Research</option>
                    <option value="commercial">Commercial / Industrial</option>
                    <option value="integration">Integration</option>
                    <option value="gaming">Gaming</option>
                    <option value="automotive">Automotive</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  By submitting this form, you agree to our privacy policy and
                  consent to being contacted by Tobii about our products and
                  services.
                </p>
                <button
                  type="submit"
                  className="w-fit rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80">
              <div className="rounded-2xl border border-border bg-secondary p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Interested in screen-based integration?
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Please visit our Get Started page for more information and to
                  contact our integration sales specialists.
                </p>
                <Link
                  href="/products"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Get Started
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section id="support" className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Contact support
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Do you need help with your gaming or research products? Or maybe you
            have questions about a Tobii Dynavox assistive technology product?
            Either way we have you covered.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Research support */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Research support
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Need help with your research eye tracker — Tobii Pro Spectrum,
                Tobii Pro Fusion, or Tobii Pro Spark? Or software Tobii Pro Lab?
                Get in touch with our customer care team by logging in to our
                support portal — Tobii Connect.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact Customer Care
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Gaming support */}
            <div className="rounded-2xl border border-border bg-background p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Gamepad2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Gaming support
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For questions about your gaming eye tracker and applications —
                Tobii Eye Tracker 5, Tobii Ghost, and Tobii Horizon — or
                inquiries about our device integrations, Tobii Aware, contact
                our helpful experts.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Contact our Help Center
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
