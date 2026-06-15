"use client";

import React from "react";
import { Users, FileText, DollarSign, BarChart3, ArrowRight } from "lucide-react";

const CorporateTrainingSection = () => {
  const corporateFeatures = [
    {
      icon: <Users className="w-5 h-5 text-[#4361EE]" />,
      title: "Dedicated Team Batches",
      desc: "Private cohorts scheduled around your team's working hours and timezone.",
    },
    {
      icon: <FileText className="w-5 h-5 text-[#4361EE]" />,
      title: "Custom Curriculum",
      desc: "Curriculum tailored to your specific SAP or Salesforce configuration and industry context.",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-[#4361EE]" />,
      title: "Volume Pricing & Invoicing",
      desc: "Group rates from 3 seats. Invoice billing for corporates and public sector organisations.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#4361EE]" />,
      title: "L&D Progress Reports",
      desc: "Attendance tracking, assessment results and monthly performance summaries for your L&D team.",
    },
  ];

  return (
      <section className="bg-white py-20 sm:py-24 relative overflow-hidden">
        {/* Visual background matching details decoration element */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7C6DFB]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* LEFT SUB-COLUMN LAYOUT DESCRIPTIVES */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse" />
                For Organisations
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Corporate &amp;{" "}
                <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
                Group Training
              </span>
              </h2>

              <p className="text-[#4A5568] tracking-tight text-sm sm:text-base leading-relaxed">
                Upskill your team in SAP or Salesforce with a programme designed around your business systems, timelines and sector. We deliver group training for teams of 3 to 300+ across the UK, India, UAE and USA.
              </p>

              <div className="pt-2 space-y-3">
                <a
                    href="mailto:corporate@cloudedge.in?subject=Corporate Training Enquiry"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#4361EE] hover:bg-[#3652D1] text-white font-semibold text-sm rounded-full py-3.5 px-7 shadow-md shadow-[#4361ee]/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full sm:w-auto group"
                >
                  <span>Request a Proposal</span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
                </a>

                <p className="text-xs text-slate-400 font-medium pl-1">
                  Or direct corporate contact:{" "}
                  <a href="mailto:corporate@cloudedge.in" className="text-[#4361EE] font-bold hover:underline">
                    corporate@cloudedge.in
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT MATRIX CARDS GRID PANEL (7 Column equivalent) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {corporateFeatures.map((feat, idx) => (
                  <div
                      key={idx}
                      className="group flex gap-4 bg-[#EFEEFC]/30 hover:bg-white border border-[#E6E8FA] hover:border-[#DDDFF5] rounded-[22px] p-5 shadow-3xs hover:shadow-xs transition-all duration-300"
                  >
                    {/* Soft Icon Wrapper Pill block */}
                    <div className="w-11 h-11 rounded-xl bg-white shadow-3xs flex items-center justify-center shrink-0 border border-[#EFEEFC] group-hover:scale-105 transition-transform">
                      {feat.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-1">
                        {feat.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </section>
  );
};

export default CorporateTrainingSection;