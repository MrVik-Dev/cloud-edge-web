import React from 'react';
import Image from "next/image";

// Reusing matching icons from your existing package structure
import nextArrow from "@/public/icons/next-aroow.svg";
import whatsappIcon from "@/public/icons/whatsapp-icon.svg";
import whoWeAreIcon from "@/public/icons/who-we-are-icon.svg";
import liveSession from "@/public/icons/live-session.svg";
import instruction from "@/public/icons/instruction.svg";
import cert from "@/public/icons/cert.svg";

const timelineData = [
  {
    year: "2019",
    title: "Founded in London & Ahmedabad",
    description: "Launched with two Salesforce courses by working SAP and Salesforce consultants who saw that professionals in India and the UK had no access to live, affordable ERP training.",
    badge: "🌟 First batch: 12 students",
    isPrimary: true,
  },
  {
    year: "2021",
    title: "Full SAP Curriculum Launched",
    description: "Added SAP FICO, MM and Basis aligned to official SAP certification exams — meeting rising demand from finance, supply chain and IT professionals across India and the UK.",
    badge: "📚 3 SAP courses added",
    isPrimary: false,
  },
  {
    year: "2023",
    title: "2,000 Graduates & Truly Global",
    description: "Crossed 2,000 completions with students from UAE, USA, Canada and Australia joining the same live classrooms. Launched SAP ABAP and SAP SuccessFactors HCM.",
    badge: "🌏 Students in 12+ countries",
    isPrimary: false,
  },
  {
    year: "2025",
    title: "5,800+ Students & Still Growing",
    description: "10 certification courses, 94% placement rate, and a global community at Deloitte, Accenture, TCS, Infosys, Wipro and Capgemini. ADM-201, PD1, C_TS4FI_2023 and C_THR81_2311 students certifying every week.",
    badge: "⚡ 94% placement rate",
    isPrimary: true,
  },
];

const differentiators = [
  {
    icon: liveSession,
    title: "Live Online — Every Single Session",
    description: "No pre-recorded videos. Every class is live on Zoom with your instructor, your cohort and real SAP or Salesforce system access from day one.",
    borderTopColor: "border-t-[#4361EE]"
  },
  {
    icon: instruction,
    title: "Instructors Who Work in the Field",
    description: "Every instructor is an active SAP or Salesforce consultant with 8–14 years of real project experience at Deloitte, Accenture, IBM, TCS and Capgemini.",
    borderTopColor: "border-t-[#6557E3]"
  },
  {
    icon: cert,
    title: "Certification & Placement Built In",
    description: "3 full mock exams, exam strategy coaching and 12-month placement support are included in every course. 94% of active job seekers placed within 6 months.",
    borderTopColor: "border-t-[#14B88A]"
  }
];

// Array renamed correctly to clear the TypeScript error
const accreditations = [
  "CPD Accredited",
  "ISO 9001",
  "SAP Curriculum Aligned",
  "Salesforce Aligned"
];

const OurStoryAndMissionSections = () => {
  return (
      <div className="bg-white">
        {/* SECTION 1: OUR STORY (TIMELINE) */}
        <section className="bg-gradient-to-b from-[#EFEEFC] to-white pt-20 pb-16 overflow-hidden relative">
          {/* Decorative Blurred Circle Background */}
          <div className="absolute top-0 left-1/3 w-[400px] h-[300px] rounded-full bg-[#6557E3] opacity-10 blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <div className="mb-14 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#E0E7FF] px-4 py-2 rounded-full mb-4">
                <span className="text-xs text-[#6557E3] font-semibold tracking-wider uppercase">Our Story</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight text-[#1E293B]">
                From 2 courses to 5,800+ professionals <br />
                <span className="text-[#64748B]">trained across 15 countries</span>
              </h2>
            </div>

            {/* Horizontal Timeline Container */}
            <div className="relative">
              {/* Connecting Timeline Line */}
              <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[2px] bg-[#DDDFF5]" />

              {/* Timeline Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-5 pb-6 relative group">
                      {/* Year Node */}
                      <div className="flex items-center gap-3 relative z-10">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bricolage-grotesque text-sm font-extrabold shadow-sm border-4 border-white transition-all duration-300
                      ${item.isPrimary
                            ? "bg-[#6557E3] text-white"
                            : "bg-[#FAFAFD] text-[#6557E3] border-[#DDDFF5]"
                        }`}
                        >
                          {item.year}
                        </div>
                        {/* Tiny connecting bridge for mobile layouts */}
                        <div className="lg:hidden flex-1 h-[1px] bg-[#DDDFF5]" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1">
                        <h3 className="font-bricolage-grotesque text-lg font-bold text-[#1E293B] mb-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#64748B] leading-relaxed mb-4">
                          {item.description}
                        </p>

                        {/* Metric Badge */}
                        <div className={`mt-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold w-fit
                      ${item.isPrimary
                            ? "bg-[#EFEEFC] border border-[#DDDFF5] text-[#6557E3]"
                            : "bg-[#FAFAFD] border border-[#E6E8F5] text-[#64748B]"
                        }`}
                        >
                          {item.badge}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR MISSION */}
        <section className="py-16 bg-white border-t border-[#F1F1FD]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* Left Content Column */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-2 rounded-full">
                  <Image src={whoWeAreIcon} alt="Who We Are" className="w-4 h-4"/>
                  <span className="text-xs text-[#8B79FD] font-semibold uppercase tracking-wider">Our Mission</span>
                </div>

                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-[#1E293B] leading-tight">
                  Closing the Gap Between Learning and Employment
                </h2>

                <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
                  Cloud Edge exists to make career transformation in SAP and Salesforce genuinely accessible — live, practical and taught by people who use these platforms in client engagements every single day.
                </p>

                {/* Pull Quote Card */}
                <blockquote className="bg-[#FAFAFD] border-l-4 border-[#6557E3] rounded-r-2xl p-5 shadow-sm space-y-2">
                  <p className="text-base text-[#1E293B] font-semibold italic leading-relaxed">
                    &ldquo;What does this student need to know to get hired and succeed in the role?&rdquo;
                  </p>
                  <footer className="text-xs text-[#94A3B8] font-medium tracking-wide uppercase">
                    The question every Cloud Edge course is designed to answer
                  </footer>
                </blockquote>

                {/* Accreditations Layout */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-2">
                    {accreditations.map((text, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFAFD] border border-[#DDE3F5] rounded-full text-xs font-bold text-[#1E293B]">
                      <svg className="w-3 h-3 text-[#14B88A]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                          {text}
                    </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Pillars/Differentiators Column */}
              <div className="flex flex-col gap-4 w-full">
                {differentiators.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#FAFAFD] border border-[#E6E8F5] ${item.borderTopColor} border-t-[3px] rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5`}
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ECEAFC] shrink-0">
                          <Image
                              src={item.icon}
                              alt={item.title}
                              className="h-6 w-6"
                          />
                        </div>
                        <h3 className="text-lg font-bricolage-grotesque font-bold text-[#1E293B] tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748B] pl-0 sm:pl-16">
                        {item.description}
                      </p>
                    </div>
                ))}
              </div>

            </div>
          </div>
        </section>
      </div>
  );
};

export default OurStoryAndMissionSections;