import { About } from '@/components/ian/about'
import { AdmissionConsult } from '@/components/ian/admission-consult'
import { DietSection } from '@/components/ian/diet-section'
import { DirectorSection } from '@/components/ian/director-section'
import { FacilityGallery } from '@/components/ian/facility-gallery'
import { HealingPrograms } from '@/components/ian/healing-programs'
import { Hero } from '@/components/ian/hero'
import { NaverBanner } from '@/components/ian/naver-banner'
import { LocationFooter } from '@/components/ian/location-footer'
import { QuickMenu } from '@/components/ian/quick-menu'
import { SiteHeader } from '@/components/ian/site-header'
import { TreatmentPrograms } from '@/components/ian/treatment-programs'
import { TrustStats } from '@/components/ian/trust-stats'

export default function Page() {
  return (
    <div className="min-h-screen bg-background pb-16 xl:pb-0">
      <SiteHeader />
      <QuickMenu />
      <main>
        <Hero />
        <About />
        <TrustStats />
        <TreatmentPrograms />
        <HealingPrograms />
        <DietSection />
        <FacilityGallery />
        <DirectorSection />
        <AdmissionConsult />
        <NaverBanner />
        <LocationFooter />
      </main>
    </div>
  )
}
