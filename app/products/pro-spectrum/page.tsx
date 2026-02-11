import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Pro Spectrum - High-performance eye tracker up to 1200 Hz | Tobii",
  description: "This high-performance research system captures gaze data at speeds up to 1200 Hz for extensive research from fixation-based studies to micro-saccades.",
}

export default function ProSpectrumPage() {
  return (
    <ProductPageLayout
      tag="Screen-Based Eye Tracker"
      name="Tobii Pro Spectrum"
      headline="High-performance eye tracking up to 1200 Hz."
      description="This high-performance research system captures gaze data at speeds up to 1200 Hz. A screen-based eye tracker for extensive research from fixation-based studies to micro-saccades."
      heroImage="/images/pro-spectrum.jpg"
      features={[
        { title: "Up to 1200 Hz", desc: "Capture the fastest eye movements with sampling rates up to 1200 Hz for micro-saccade and tremor research." },
        { title: "Large head movement box", desc: "Generous tracking area allows participants to move naturally during experiments." },
        { title: "Bright & dark pupil", desc: "Dual-mode illumination ensures robust tracking across diverse participant groups." },
        { title: "External stimulus display", desc: "Use your own monitor for stimulus presentation with flexible mounting options." },
        { title: "TTL sync port", desc: "Synchronize with EEG, EMG, GSR, and other physiological data streams with hardware precision." },
        { title: "Tobii Pro Lab compatible", desc: "Seamlessly integrates with Tobii Pro Lab for experiment design, recording, and analysis." },
      ]}
      highlights={[
        "The most capable screen-based eye tracker in Tobii's research portfolio.",
        "Used in over 500 research publications worldwide.",
        "Trusted by leading neuroscience and psychology departments globally.",
        "Supports both fixation-based and saccade-based research paradigms.",
      ]}
      specs={[
        { label: "Sampling rates", value: "60, 120, 150, 300, 600, 1200 Hz" },
        { label: "Eye tracking technique", value: "Corneal reflection, bright and dark pupil" },
        { label: "Accuracy", value: "0.3\u00b0" },
        { label: "Precision", value: "0.01\u00b0 RMS at 1200 Hz" },
        { label: "Binocular tracking", value: "Yes" },
        { label: "Head movement box", value: "40 \u00d7 40 cm at 70 cm" },
        { label: "Operating distance", value: "55 - 80 cm" },
        { label: "Screen size", value: "Up to 24.5 inches (included) or external" },
        { label: "TTL sync port", value: "Yes (BNC connector)" },
        { label: "Pupil measurement", value: "Yes, absolute" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Lab", desc: "Advanced analysis software for behavioral studies.", href: "/products/pro-lab" },
        { title: "Chin Rest", desc: "Hold a participant's head in place during experiments.", href: "/products" },
        { title: "StimTracker", desc: "Synchronize stimuli events with eye tracking data.", href: "/products" },
      ]}
    />
  )
}
