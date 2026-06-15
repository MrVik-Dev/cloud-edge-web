import React from 'react';
import AboutUsHeroSection from "@/components/sections/About/AboutUsHeroSection";
import WhoWeAreSection from "@/components/sections/About/WhoWeAreSection";
import OurStoryAndMissionSections from "@/components/sections/About/OurStoryAndMissionSections";
import LearningJourneySection from "@/components/sections/About/LearningJourneySection";
import CorporateInfoSections from "@/components/sections/About/CorporateInfoSections";
import CorporateOutcomesAndFaq from "@/components/sections/About/CorporateOutcomesAndFaq";


const AboutUsContainer = () => {
  return (
      <div>
        <AboutUsHeroSection/>
        <WhoWeAreSection/>
        <OurStoryAndMissionSections />
        <LearningJourneySection />
        <CorporateInfoSections />
        <CorporateOutcomesAndFaq />
      </div>
  );
};

export default AboutUsContainer;