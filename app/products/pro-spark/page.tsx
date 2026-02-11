import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Pro Spark - Affordable eye tracker at 60 Hz | Tobii",
  description: "A powerful screen-based eye tracker capturing gaze data at 60 Hz. With this affordable system, anyone can easily enhance their research.",
}

export default function ProSparkPage() {
  return (
    <ProductPageLayout
      tag="Screen-Based Eye Tracker"
      name="Tobii Pro Spark"
      headline="Accessible eye tracking for everyone."
      description="A powerful screen-based eye tracker, capturing gaze data at 60 Hz. With this affordable system, anyone can easily enhance their research with data that illuminates human attention and intent."
      heroImage="/images/pro-spectrum.jpg"
      features={[
        { title: "Affordable entry point", desc: "Make eye tracking accessible to students, startups, and researchers with limited budgets." },
        { title: "60 Hz sampling", desc: "Reliable fixation-based tracking at 60 Hz for attention, reading, and usability studies." },
        { title: "Compact & portable", desc: "Small, lightweight design that clips easily to laptops and monitors." },
        { title: "Plug and play", desc: "USB connection with simple setup means you can start collecting data in minutes." },
        { title: "Tobii Pro Lab compatible", desc: "Full support for experiment design, recording, and analysis in Tobii Pro Lab." },
        { title: "Mobile testing ready", desc: "Use with the Mobile Testing Accessory for smartphone and tablet usability research." },
      ]}
      specs={[
        { label: "Sampling rate", value: "60 Hz" },
        { label: "Eye tracking technique", value: "Corneal reflection, dark pupil" },
        { label: "Accuracy", value: "0.3\u00b0" },
        { label: "Binocular tracking", value: "Yes" },
        { label: "Head movement box", value: "32 \u00d7 21 cm at 65 cm" },
        { label: "Operating distance", value: "45 - 85 cm" },
        { label: "Weight", value: "90 grams" },
        { label: "Connection", value: "USB 2.0" },
        { label: "Compatible screens", value: "Up to 24 inches" },
        { label: "Dimensions", value: "170 \u00d7 15 \u00d7 15 mm" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Fusion", desc: "Portable eye tracker with speeds up to 250 Hz.", href: "/products/pro-fusion" },
        { title: "Mobile Testing Accessory", desc: "Mount for conducting eye tracking on mobile devices.", href: "/products" },
        { title: "Tobii Pro Lab", desc: "Analysis software for behavioral studies.", href: "/products/pro-lab" },
      ]}
    />
  )
}
