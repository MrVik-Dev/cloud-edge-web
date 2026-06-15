import React from 'react';
import ContactHeroSection from "@/components/sections/Contact/ContactHeroSection";
import ConnectChannelsSection from "@/components/sections/Contact/ConnectChannelsSection";
import EnquiryFormSection from "@/components/sections/Contact/EnquiryFormSection";
import ProcessSection from "@/components/sections/Contact/ProcessSection";
import TestimonialsSection from "@/components/sections/Contact/TestimonialsSection";
import CorporateTrainingSection from "@/components/sections/Contact/CorporateTrainingSection";
import FaqSection from "@/components/sections/Contact/FaqSection";
import CtaSection from "@/components/sections/Contact/CtaSection";

const ContactContainer = () => {
  return (
      <div>
        <ContactHeroSection />
        <ConnectChannelsSection />
        <EnquiryFormSection />
        <ProcessSection />
        <TestimonialsSection />
        <CorporateTrainingSection />
        <FaqSection />
        <CtaSection />
      </div>
  );
};

export default ContactContainer;