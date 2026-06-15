import React from 'react';
import Image from "next/image";

// Reusing matching icons from your existing package structure
import whatsappIcon from "@/public/icons/whatsapp-icon.svg";

const stages = [
  {
    id: "01",
    phase: "Stage 01 — Departure",
    title: "Consult & Enroll",
    description: "A course advisor responds within 60 minutes, listens to your background and recommends the right SAP or Salesforce course. Attend a free demo class before paying anything.",
    tags: ["⏰ Reply in 60 min", "📚 Free demo class", "💰 0% EMI plan"],
    icon: (
        <svg className="w-5 h-5 text-[#4361EE] rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
    ),
    isLeft: true
  },
  {
    id: "02",
    phase: "Stage 02 — In Flight",
    title: "Learn Live & Hands-On",
    description: "Attend live Zoom sessions twice a week. Log into a real SAP or Salesforce system every class — not a demo environment. Ask questions, get instructor feedback, build real skills.",
    tags: ["⚡ Live — never recorded", "💻 Real system access", "🎬 6-month recordings"],
    icon: (
        <svg className="w-5 h-5 text-[#6557E3]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
    ),
    isLeft: false
  },
  {
    id: "03",
    phase: "Stage 03 — Final Approach",
    title: "Certify",
    description: "Complete 3 full timed mock exams and a dedicated exam strategy session. Sit the official SAP or Salesforce certification exam with confidence — 88% of students pass on their first attempt.",
    tags: ["✍️ 3 full mock exams", "🎯 Exam strategy session", "🎓 88% first-attempt"],
    icon: (
        <svg className="w-5 h-5 text-[#32ADE6]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 19h19v2h-19zm7.18-1.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-4.77-.93.25.87 3.09-3.79-1.01-.99-1.72-.93.25.71 4.36 2.69.29z"/>
        </svg>
    ),
    isLeft: true
  },
  {
    id: "04",
    phase: "Stage 04 — Destination",
    title: "Get Hired",
    description: "Resume review, LinkedIn optimization and mock interview coaching from your placement team. We connect you directly with hiring companies — Deloitte, Accenture, TCS, Infosys and more. 94% of active job seekers placed within 6 months.",
    tags: ["📄 Resume & LinkedIn", "🏆 Mock interviews", "✅ 94% placed in 6 months"],
    icon: (
        <svg className="w-5 h-5 text-[#14B88A]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
    ),
    isLeft: false
  }
];

const LearningJourneySection = () => {
  return (
      <section className="py-20 relative overflow-hidden bg-[#FAFAFD]">
        {/* Dynamic Purplish Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EFEEFC]/60 via-[#FAFAFD] to-white pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#DDDFF5] px-4 py-2 rounded-full">
              <span className="text-xs text-[#6557E3] font-semibold uppercase tracking-wider">The Learning Journey</span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
              From Enquiry to Employed in <span className="text-[#6557E3]">4 Steps</span>
            </h2>
            <p className="text-base text-[#64748B] max-w-xl mx-auto">
              Your structured path into international tier-1 tech consulting ecosystems.
            </p>
          </div>

          {/* Timeline Map Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* Center Vertical Track Line (Desktop Only) */}
            <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[2px] bg-[#DDDFF5]" />

            {/* Timeline Stack */}
            <div className="space-y-12 md:space-y-20">
              {stages.map((stage, idx) => (
                  <div
                      key={idx}
                      className="flex flex-col md:grid md:grid-cols-11 items-center w-full"
                  >
                    {/* LEFT SIDE: Card (on Stage 1 & 3) OR Giant Number (on Stage 2 & 4) */}
                    <div className="w-full md:col-span-5 order-2 md:order-1">
                      {stage.isLeft ? (
                          /* Stage 1 & 3: Content Card Elements */
                          <div className="bg-white border border-[#E6E8F5] rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md md:text-right">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                              {stage.phase}
                            </div>
                            <h3 className="font-bricolage-grotesque text-xl font-bold text-[#1E293B] mb-3">
                              {stage.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#64748B] mb-5">
                              {stage.description}
                            </p>
                            <div className="flex flex-wrap gap-2 md:justify-end justify-start">
                              {stage.tags.map((tag, tagIdx) => (
                                  <span key={tagIdx} className="text-xs bg-[#FAFAFD] border border-[#DDE3F5] px-3 py-1.5 rounded-full font-medium text-[#1E293B]">
                            {tag}
                          </span>
                              ))}
                            </div>
                          </div>
                      ) : (
                          /* Stage 2 & 4: Opposite Giant Number Stamp */
                          <div className="hidden md:block font-bricolage-grotesque text-7xl lg:text-8xl font-extrabold text-[#E0E7FF] opacity-60 select-none md:text-right md:pr-12">
                            {stage.id}
                          </div>
                      )}
                    </div>

                    {/* CENTER COLUMN: Central Core Timeline Node Ring */}
                    <div className="md:col-span-1 order-1 md:order-2 flex justify-center items-center my-4 md:my-0 relative z-20 w-full">
                      <div className="w-14 h-14 rounded-full bg-white border-4 border-[#EFEEFC] shadow-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                        {stage.icon}
                      </div>
                    </div>

                    {/* RIGHT SIDE: Giant Number (on Stage 1 & 3) OR Card (on Stage 2 & 4) */}
                    <div className="w-full md:col-span-5 order-3">
                      {!stage.isLeft ? (
                          /* Stage 2 & 4: Content Card Elements */
                          <div className="bg-white border border-[#E6E8F5] rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-md text-left">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                              {stage.phase}
                            </div>
                            <h3 className="font-bricolage-grotesque text-xl font-bold text-[#1E293B] mb-3">
                              {stage.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#64748B] mb-5">
                              {stage.description}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-start">
                              {stage.tags.map((tag, tagIdx) => (
                                  <span key={tagIdx} className="text-xs bg-[#FAFAFD] border border-[#DDE3F5] px-3 py-1.5 rounded-full font-medium text-[#1E293B]">
                            {tag}
                          </span>
                              ))}
                            </div>
                          </div>
                      ) : (
                          /* Stage 1 & 3: Opposite Giant Number Stamp */
                          <div className="hidden md:block font-bricolage-grotesque text-7xl lg:text-8xl font-extrabold text-[#E0E7FF] opacity-60 select-none text-left md:pl-12">
                            {stage.id}
                          </div>
                      )}
                    </div>

                  </div>
              ))}
            </div>
          </div>

          {/* Action Engagement Block */}
          <div className="text-center mt-20">
            <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#4361EE] px-10 py-4 text-white font-semibold text-base transition-all duration-300 hover:scale-[1.02] hover:bg-[#3651D1] shadow-md"
            >
              <Image src={whatsappIcon} alt="whatsapp icon" className="w-5 h-5 filter brightness-0 invert" />
              Begin Your Journey &rarr;
            </a>
          </div>

        </div>
      </section>
  );
};

export default LearningJourneySection;