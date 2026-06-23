import CareerOutcomesSection from '@/components/ui/services/CareerOutcomesSection'
import CorporateTrainingSection from '@/components/ui/services/CorporateTrainingSection'
import CTASection from '@/components/ui/services/CTASection'
import FAQSection from '@/components/ui/services/FAQSection'
import Hero from '@/components/ui/services/Hero'
import JobSupportSection from '@/components/ui/services/JobSupportSection'
import LearningJourneySection from '@/components/ui/services/LearningJourneySection'
import NewsletterSection from '@/components/ui/services/NewsletterSection'
import PricingSection from '@/components/ui/services/PricingSection'
import TestimonialsSection from '@/components/ui/services/TestimonialsSection'
import TrustBar from '@/components/ui/services/TrustBar'
import WhyChooseSection from '@/components/ui/services/WhyChooseSection'

const ServicesContainer = () => {
    return (
        <div>
            <Hero />
            <TrustBar />
            <WhyChooseSection />
            <LearningJourneySection />
            <JobSupportSection />
            <CorporateTrainingSection />
            <CareerOutcomesSection />
            <PricingSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
            <NewsletterSection />
        </div>
    )
}

export default ServicesContainer