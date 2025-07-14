import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import NewsSection from '@/components/home/NewsSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import TeachersSection from '@/components/home/TeachersSection'
import CertificatesSection from '@/components/home/CertificatesSection'
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <NewsSection />
      <TeachersSection />
      <TestimonialsSection />
      <CertificatesSection />
    </>
  )
}
