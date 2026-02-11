import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Pro Lab - Eye tracking software for behavioral studies | Tobii",
  description: "Tobii Pro Lab is powerful software designed to help you design, record, and analyze eye tracking studies with precision and ease.",
}

export default function ProLabPage() {
  return (
    <ProductPageLayout
      tag="Software"
      name="Tobii Pro Lab"
      headline="Powerful software for eye tracking research."
      description="Tobii Pro Lab is powerful software designed to help you design, record, and analyze eye tracking studies with precision and ease. From experiment setup to advanced visualizations, Pro Lab is the researcher's companion."
      heroImage="/images/solutions-hero.jpg"
      features={[
        { title: "Experiment design", desc: "Create sophisticated experiment timelines with stimuli, events, and instructions in a visual editor." },
        { title: "Real-time recording", desc: "Capture gaze data synchronized with screen recordings, webcam video, and audio." },
        { title: "Advanced visualizations", desc: "Generate heat maps, gaze plots, and areas of interest for intuitive data interpretation." },
        { title: "Statistical analysis", desc: "Export metrics like fixation count, duration, time to first fixation, and more for statistical processing." },
        { title: "Glasses integration", desc: "Analyze data from Tobii Pro Glasses 3 with real-world scene video and gaze overlay." },
        { title: "Third-party export", desc: "Export raw data in open formats for use in MATLAB, R, Python, and other analysis tools." },
      ]}
      specs={[
        { label: "Supported eye trackers", value: "Tobii Pro Spectrum, Fusion, Spark, Glasses 3, Glasses X" },
        { label: "Stimuli types", value: "Images, videos, web pages, screen recordings" },
        { label: "Visualizations", value: "Heat maps, gaze plots, gaze replay, AOI" },
        { label: "Data export formats", value: "TSV, JSON, and raw data formats" },
        { label: "Platform", value: "Windows 10/11" },
        { label: "License", value: "Perpetual or subscription" },
        { label: "Synchronization", value: "TTL, LSL, custom event markers" },
        { label: "Multi-participant", value: "Aggregate data across participants" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Spectrum", desc: "Screen-based eye tracker up to 1200 Hz.", href: "/products/pro-spectrum" },
        { title: "Tobii Pro Glasses 3", desc: "Advanced wearable eye tracker for field research.", href: "/products/pro-glasses-3" },
        { title: "Tobii Pro Spark", desc: "Affordable screen-based eye tracker at 60 Hz.", href: "/products/pro-spark" },
      ]}
    />
  )
}
