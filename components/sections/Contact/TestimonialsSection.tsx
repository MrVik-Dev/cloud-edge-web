"use client";

import React from "react";
import {Star} from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "PS",
      name: "Priya Sharma",
      role: "SAP FICO Consultant, Deloitte — India",
      accent: "border-t-[#3275FC]",
      avatarColor: "#3275FC", // Using hexadecimal strings for bulletproof runtime colors
      text: "I messaged Cloud Edge on a Sunday evening not expecting a reply until Monday. I got a detailed response within 30 minutes, a free demo was booked for Tuesday and I enrolled the same week. The whole experience was seamless from start to finish.",
    },
    {
      initials: "RC",
      name: "Robert Clarke",
      role: "Finance Systems Lead — London, UK",
      accent: "border-t-[#7C6DFB]",
      avatarColor: "#7C6DFB",
      text: "I was torn between three different SAP training providers. The Cloud Edge advisor spent 45 minutes on a call, understood my finance background and recommended FICO. That turned out to be exactly the right choice. Got placed at Accenture 5 months later.",
    },
    {
      initials: "AM",
      name: "Ahmed Al-Mansouri",
      role: "IT Manager — Dubai, UAE",
      accent: "border-t-[#25D366]",
      avatarColor: "#32ade6", // Matches your original HTML background spec perfectly
      text: "I enquired from Dubai about the Salesforce Admin course. The team explained fees in AED, arranged a demo within 48 hours and the advisor stayed on the call until every question I had was answered. Exactly the kind of attention that builds trust.",
    },
  ];

  return (
      <section className="bg-[#EFEEFC]/50 py-20 sm:py-24 border-b border-[#DDDFF5]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

          {/* Header Block */}
          <div className="text-center max-w-[540px] mx-auto mb-14 sm:mb-16">
            <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mx-auto mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse" />
              What Students Say
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Trusted by Professionals{" "}
              <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
              Across 15+ Countries
            </span>
            </h2>
          </div>

          {/* Testimonials Adaptive Column Layout Framework */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {testimonials.map((item, idx) => (
                <div
                    key={idx}
                    className={`bg-white rounded-[24px] p-6 sm:p-8 border-t-[5px] border-x border-b border-[#DDDFF5] shadow-xs flex flex-col justify-between transform hover:-translate-y-1 transition-all duration-300 ${item.accent}`}
                >
                  <div>
                    {/* Visual Stars Group Component Grid */}
                    <div className="flex items-center gap-1 mb-4 selection:bg-transparent">
                      {[...Array(5)].map((_, sIdx) => (
                          <Star
                              key={sIdx}
                              className="w-5 h-5 text-[#FBBF24]"
                              fill="#FBBF24"
                          />
                      ))}
                    </div>
                    <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed tracking-tight italic mb-6">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>

                  {/* Author Matrix Profile Row */}
                  <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                    <div
                        style={{ backgroundColor: item.avatarColor }}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-2xs"
                    >
                      {item.initials}
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-slate-900 tracking-tight">{item.name}</h4>
                      <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">{item.role}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>

        </div>
      </section>
  );
};

export default TestimonialsSection;