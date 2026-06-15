"use client";

import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      num: "1",
      title: "Send Your Enquiry",
      desc: "WhatsApp, email or fill the form. Tell us about your background and the course you are interested in. Takes 2 minutes.",
    },
    {
      num: "2",
      title: "Free Consultation",
      desc: "A Cloud Edge advisor contacts you within 60 minutes. We listen, assess your background and recommend the right course and batch for you.",
    },
    {
      num: "3",
      title: "Free Demo Class",
      desc: "Before you pay anything, attend a live session for free. See the instructor, the SAP or Salesforce system and the teaching style. Then decide.",
    },
  ];

  return (
      <section className="bg-white py-20 sm:py-24 border-b border-[#DDDFF5]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

          {/* Header Block */}
          <div className="text-align:center text-center max-w-[540px] mx-auto mb-16 sm:mb-20">
            <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mx-auto mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse" />
              Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              What Happens After{" "}
              <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
              You Contact Us
            </span>
            </h2>
          </div>

          {/* Steps Linear Grid Array */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, idx) => (
                <div key={idx} className="relative group flex flex-col items-center text-center sm:items-start sm:text-left bg-[#EFEEFC]/30 border border-[#E6E8FA] p-8 rounded-3xl shadow-3xs hover:bg-white hover:border-[#DDDFF5] transition-all duration-300">
                  {/* Process Card Floating Index Number Indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-[#4361EE] text-white font-bold text-lg flex items-center justify-center shadow-md shadow-[#4361ee]/20 mb-5 group-hover:scale-105 transition-transform">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed tracking-tight">
                    {step.desc}
                  </p>
                </div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default ProcessSection;