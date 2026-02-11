import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Pro Fusion - Portable eye tracker up to 250 Hz | Tobii",
  description: "Screen-based eye tracker capturing gaze data at speeds up to 250 Hz. A powerful research system that supports fixation to saccade-based research outside of the lab.",
}

export default function ProFusionPage() {
  return (
    <ProductPageLayout
      tag="Screen-Based Eye Tracker"
      name="Tobii Pro Fusion"
      headline="Portable precision at up to 250 Hz."
      description="Screen-based eye tracker capturing gaze data at speeds up to 250 Hz. This powerful research system supports from fixation to saccade-based research outside of the lab."
      heroImage="/images/pro-spectrum.jpg"
      features={[
        { title: "Up to 250 Hz", desc: "High sampling rate captures saccades and fixations with precision for demanding research." },
        { title: "Portable design", desc: "Compact form factor allows you to conduct research in the lab, field, or anywhere in between." },
        { title: "Flexible mounting", desc: "Attach to laptops, monitors, or use with a tripod for versatile experimental setups." },
        { title: "Large head movement box", desc: "Generous tracking volume lets participants move naturally during tasks." },
        { title: "USB-C connectivity", desc: "Simple single-cable connection for easy setup with any computer." },
        { title: "Multi-monitor support", desc: "Track gaze across multiple screens for complex experimental designs." },
      ]}
      specs={[
        { label: "Sampling rates", value: "60, 120, 250 Hz" },
        { label: "Eye tracking technique", value: "Corneal reflection, dark pupil" },
        { label: "Accuracy", value: "0.3\u00b0" },
        { label: "Binocular tracking", value: "Yes" },
        { label: "Head movement box", value: "32 \u00d7 21 cm at 65 cm" },
        { label: "Operating distance", value: "50 - 80 cm" },
        { label: "Weight", value: "280 grams" },
        { label: "Connection", value: "USB-C" },
        { label: "Pupil measurement", value: "Yes" },
        { label: "Compatible screens", value: "Up to 24 inches" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Spectrum", desc: "High-performance eye tracker with speeds up to 1200 Hz.", href: "/products/pro-spectrum" },
        { title: "Tobii Pro Lab", desc: "Analysis software for behavioral studies.", href: "/products/pro-lab" },
        { title: "Tobii Pro Spark", desc: "Affordable eye tracker at 60 Hz.", href: "/products/pro-spark" },
      ]}
    />
  )
}
