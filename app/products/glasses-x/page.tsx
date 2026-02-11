import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Glasses X - Wearable eye tracker for commercial environments | Tobii",
  description: "A versatile wearable eye tracker suitable for UX, sports, consumer, and industrial environments.",
}

export default function GlassesXPage() {
  return (
    <ProductPageLayout
      tag="Wearable Eye Tracker"
      name="Tobii Glasses X"
      headline="Easy-to-use eye tracking in all environments."
      description="A versatile wearable eye tracker suitable for UX, sports, consumer, and industrial environments. Designed to deliver reliable insights in dynamic, high-movement settings."
      heroImage="/images/glasses-x.jpg"
      features={[
        { title: "Versatile design", desc: "Suitable for UX, sports, consumer, and industrial environments with a robust, comfortable form factor." },
        { title: "High-movement tracking", desc: "Designed to deliver reliable insights in dynamic settings where participants are actively moving." },
        { title: "Easy setup", desc: "Simplified calibration and recording workflow means less time configuring and more time collecting data." },
        { title: "Real-time gaze overlay", desc: "View gaze data in real time to monitor participant behavior as it happens." },
        { title: "Lightweight comfort", desc: "Modern, lightweight design ensures participants can wear the glasses for extended periods without discomfort." },
        { title: "Flexible data export", desc: "Export gaze data for analysis in Tobii Pro Lab or third-party tools." },
      ]}
      specs={[
        { label: "Eye tracking technique", value: "Corneal reflection, dark pupil" },
        { label: "Sampling rate", value: "50 Hz" },
        { label: "Scene camera", value: "Full HD 1080p" },
        { label: "Binocular tracking", value: "Yes" },
        { label: "Design", value: "Lightweight, modern eyewear form factor" },
        { label: "Connectivity", value: "USB-C" },
        { label: "Compatibility", value: "Tobii Pro Lab, third-party tools" },
        { label: "Use environments", value: "Indoor and outdoor" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Glasses 3", desc: "Advanced wearable eye tracker for behavioral research.", href: "/products/pro-glasses-3" },
        { title: "Protective Lenses", desc: "Safeguard your glasses from glare, dust, and damage.", href: "/products" },
        { title: "Tobii Pro Lab", desc: "Analysis software for behavioral studies.", href: "/products/pro-lab" },
      ]}
    />
  )
}
