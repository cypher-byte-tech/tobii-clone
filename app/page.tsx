import { HeroSection } from "@/components/home/hero-section"
import { GlassesXBanner } from "@/components/home/glasses-x-banner"
import { InsightBanner } from "@/components/home/insight-banner"
import { TrustedBy } from "@/components/home/trusted-by"
import { AISection } from "@/components/home/ai-section"
import { ProductsSection } from "@/components/home/products-section"
import { IntegrationsSection } from "@/components/home/integrations-section"
import { SuccessStories } from "@/components/home/success-stories"
import { BlogTeaser } from "@/components/home/blog-teaser"
import { ApplicationAreas } from "@/components/home/application-areas"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlassesXBanner />
      <InsightBanner />
      <TrustedBy />
      <AISection />
      <ProductsSection />
      <IntegrationsSection />
      <SuccessStories />
      <BlogTeaser />
      <ApplicationAreas />
      <CTASection />
    </>
  )
}
