import type { Metadata } from "next"
import { ProductPageLayout } from "@/components/product-page-layout"

export const metadata: Metadata = {
  title: "Tobii Pro Glasses 3 - Advanced wearable eye tracker | Tobii",
  description: "Tobii Pro Glasses 3 is an advanced wearable eye tracker built for research which helps you study behavior where it naturally occurs.",
}

export default function ProGlasses3Page() {
  return (
    <ProductPageLayout
      tag="Wearable Eye Tracker"
      name="Tobii Pro Glasses 3"
      headline="Real-world behavior. Captured with precision."
      description="Tobii Pro Glasses 3 is an advanced wearable eye tracker built for research which helps you study behavior where it naturally occurs. Capture detailed eye tracking data in real time with scientific-grade precision."
      heroImage="/images/pro-glasses3.jpg"
      features={[
        { title: "Real-world data", desc: "Study attention in everyday environments, including classrooms, hospitals, streets, stores and more." },
        { title: "High precision & accuracy", desc: "Industry-leading calibration and tracking robustness, even in motion and complex environments." },
        { title: "Lightweight & unobtrusive", desc: "Minimal interference with subjects' behavior thanks to ergonomic, modern design weighing just 76.5g." },
        { title: "Multimodal synchronization", desc: "Integrates with EEG, motion capture, biometrics, and video for advanced experimental setups." },
        { title: "Robust software ecosystem", desc: "Analyze data with Tobii Pro Lab or export to third-party platforms for customized analysis." },
        { title: "Field-tested versatility", desc: "Trusted by leading institutions including Harvard, MIT, Stanford, Oxford, NASA, and Unilever." },
      ]}
      highlights={[
        "Over 300 scientific publications featuring Tobii Pro Glasses 3.",
        "Used by leading institutions and companies including Harvard, MIT, Stanford, Oxford, NASA, Unilever, Nielsen, P&G, Heathrow Airport and the Chicago Cubs.",
        "Validated in complex field environments, from surgery rooms and sports arenas to urban mobility studies.",
        "Based on Tobii's patented 3D eye model technology, ensuring tracking integrity across diverse subjects and conditions.",
      ]}
      specs={[
        { label: "Eye tracking technique", value: "Corneal reflection, dark pupil, stereo geometry" },
        { label: "Sampling rate", value: "50 Hz or 100 Hz" },
        { label: "Accuracy", value: "0.6\u00b0" },
        { label: "Binocular eye tracking", value: "Yes" },
        { label: "Calibration", value: "One point or automatic calibration" },
        { label: "Pupil measurement", value: "Yes, absolute measure" },
        { label: "Scene camera resolution", value: "1920 \u00d7 1080 @ 25 fps" },
        { label: "Scene camera FOV", value: "106\u00b0 diagonal (95\u00b0 H / 63\u00b0 V)" },
        { label: "Frame weight", value: "76.5 grams (including cable)" },
        { label: "Battery recording time", value: "105 minutes" },
        { label: "Sensors", value: "Gyroscope, Accelerometer (100 Hz), Magnetometer (10 Hz)" },
        { label: "Audio", value: "16-bit mono, integrated microphone" },
      ]}
      relatedProducts={[
        { title: "Tobii Pro Lab", desc: "Advanced analysis software for post-study behavioral insights.", href: "/products/pro-lab" },
        { title: "Corrective Lenses", desc: "Snap-on lenses for wide population range data capture.", href: "/products" },
        { title: "Motion Capture Integration", desc: "Combine Pro Glasses 3 with motion capture systems.", href: "/products" },
      ]}
    />
  )
}
