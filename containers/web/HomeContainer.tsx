"use clinent"

import ContactUsSection from '@/components/sections/Home/ContactUsSection'
import CtaSection from '@/components/sections/Home/CtaSection'
import EmpoweringLearnerSection from '@/components/sections/Home/EmpoweringLearnerSection'
import ExploreCoursesSection from '@/components/sections/Home/ExploreCoursesSection'
import FaqSection from '@/components/sections/Home/FaqSection'
import HeroSection from '@/components/sections/Home/HeroSection'
import NewsBlogSection from '@/components/sections/Home/NewsBlogSection'
import PlacedAtSection from '@/components/sections/Home/PlacedAtSection'
import TestimonialSection from '@/components/sections/Home/TestimonialSection'
import TrainingBranchesSection from '@/components/sections/Home/TrainingBranchesSection'
import WhatWeProvideSection from '@/components/sections/Home/WhatWeProvideSection'
import WhyChooseUsSection from '@/components/sections/Home/WhyChooseUsSection'
import React from 'react'

const HomeContainer = () => {
  return (
    <div>
      <HeroSection  />
      <div data-aos="fade-up">
        <PlacedAtSection />
      </div>
      <div data-aos="fade-up">
        <WhyChooseUsSection />
      </div>
      <div data-aos="fade-up">
        <EmpoweringLearnerSection />
      </div>
      <div data-aos="fade-up">
        <WhatWeProvideSection />
      </div>
      <div data-aos="fade-up">
        <ExploreCoursesSection />
      </div>
      <div data-aos="fade-up">
        <TrainingBranchesSection />
      </div>
      <div data-aos="fade-up">
        <TestimonialSection />
      </div>
      <div data-aos="fade-up">
        <NewsBlogSection />
      </div>
      <div data-aos="fade-up">
        <CtaSection />
      </div>
      <div data-aos="fade-up">
        <FaqSection />
      </div>
      <div data-aos="fade-up">
        <ContactUsSection />
      </div>
    </div>
  )
}

export default HomeContainer