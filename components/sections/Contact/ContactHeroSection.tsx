import React from 'react';
import Image from "next/image";
import {Phone, Mail, Clock, ArrowRight} from "lucide-react";

// ASSET IMPORTS
import foundedIcon from "@/public/icons/foundedIcon.svg";
import locationIcon from "@/public/icons/locationIcon.svg";
import countriesIcon from "@/public/icons/countriesIcon.svg";
import cpdIcon from "@/public/icons/cpdIcon.svg";
import ContactHero from "@/public/images/contact-hero.png";

import IN from "@/public/icons/IN.svg"
import GB from "@/public/icons/GB.svg"
import CA from "@/public/icons/CA.svg"
import AE from "@/public/icons/AE.svg"
import US from "@/public/icons/US.svg"

const ContactHeroSection = () => {

  const regions = [
    {name: "India", flag: IN},
    {name: "UK", flag: GB},
    {name: "USA", flag: US},
    {name: "Canada", flag: CA},
    {name: "UAE", flag: AE},
  ];

  return (
      <div className="bg-[#EFEEFC] pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

            {/* LEFT CONTENT BLOCK */}
            <div className="space-y-6 order-1 lg:w-1/2 w-full">

              {/* Status Badge */}
              <div
                  className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse"/>
                Get In Touch
              </div>

              {/* Typography Heading */}
              <div>
                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] max-w-xl text-slate-900">
                  We'd Love to{" "}
                  <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
                  Hear From You
                </span>
                </h1>
              </div>

              {/* Body Copy Description */}
              <div>
                <p className="text-[#4A5568] tracking-tight text-base sm:text-lg max-w-xl leading-relaxed">
                  Questions about a course, group corporate training, or unsure which SAP or Salesforce path suits you?
                  Our expert career advisors typically respond within 60 minutes on weekdays.
                </p>
              </div>

              {/* Live Badging Matrix */}
              <div className="flex flex-wrap gap-2 pt-1 max-w-md">
                {['Reply in 60 minutes', 'Free demo class', 'No obligation', '0% EMI available'].map((badge, idx) => (
                    <span key={idx}
                          className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-white/80 border border-[#DDDFF5] px-3.5 py-1.5 rounded-full backdrop-blur-xs shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4361EE]"/>
                      {badge}
                </span>
                ))}
              </div>

              {/* Immediate Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <a
                    href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#4361EE] px-7 py-4 rounded-full flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-[#3652D1] transition-all shadow-md shadow-[#4361ee]/20 hover:shadow-lg transform hover:-translate-y-0.5 group"
                >
                <span className="text-white font-semibold text-sm tracking-wide">
                  Chat on WhatsApp
                </span>
                  <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform"/>
                </a>

                <a
                    href="mailto:info@cloudedge.in"
                    className="bg-white px-7 py-4 rounded-full flex items-center justify-center gap-2 border border-[#DDDFF5] w-full sm:w-auto hover:bg-slate-50 transition-all shadow-xs transform hover:-translate-y-0.5"
                >
                <span className="text-[#1E293B] font-semibold text-sm tracking-wide">
                  Email Advisors
                </span>
                </a>
              </div>

              {/* Cleaned & Structured Metadata Channels */}
              <div className="pt-6 border-t border-[#DDDFF5] max-w-xl space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Voice Line Link card */}
                  <a href="tel:+447442586325"
                     className="group flex items-center gap-3 bg-white/50 hover:bg-white border border-[#E6E8FA] rounded-2xl p-3 transition-all shadow-2xs">
                    <div
                        className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-600 shrink-0 group-hover:scale-105 transition-transform border border-[#EFEEFC]">
                      <Phone className="w-4 h-4 text-[#4361EE]"/>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Direct Line</p>
                      <p className="text-sm font-semibold text-slate-800 tracking-tight">+44 744 258 6325</p>
                    </div>
                  </a>

                  {/* Mail inbox card */}
                  <a href="mailto:info@cloudedge.in"
                     className="group flex items-center gap-3 bg-white/50 hover:bg-white border border-[#E6E8FA] rounded-2xl p-3 transition-all shadow-2xs">
                    <div
                        className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center text-slate-600 shrink-0 group-hover:scale-105 transition-transform border border-[#EFEEFC]">
                      <Mail className="w-4 h-4 text-[#4361EE]"/>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Support Mail</p>
                      <p className="text-sm font-semibold text-slate-800 tracking-tight">info@cloudedge.in</p>
                    </div>
                  </a>

                </div>

                {/* Operating Timeline details */}
                <div className="flex items-start gap-3 px-1">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5"/>
                  <p className="text-xs font-medium text-slate-500 leading-normal">
                    <span className="text-slate-700 font-semibold">Advisory Hours:</span> Mon–Sat 9 AM–7 PM
                    BST &middot; Global student routing active.
                  </p>
                </div>

                {/* Regional Flag Pill Index */}
                <div className="flex items-center gap-2 pt-1 flex-wrap pl-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">Regions:</span>
                  {regions.map((country, idx) => (
                      <span
                          key={idx}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/80 border border-[#E6E8FA] px-2.5 py-1 rounded-lg shadow-2xs"
                      >
                      <Image
                          src={country.flag}
                          alt={country.name}
                          className="w-4 h-4"
                      />
                        {country.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: HERO IMAGE FRAME */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:w-1/2 w-full pt-4 lg:pt-0">
              {/* Ambient Background Glow Effect */}
              <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#4361EE] opacity-15 blur-3xl rounded-full pointer-events-none"/>

              {/* Image Container with Custom Float Animation */}
              <div
                  className="relative w-full max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] animate-[bounce_5s_infinite_ease-in-out] style={{ animationDuration: '6s' }}">
                <Image
                    src={ContactHero}
                    alt="Cloud Edge Contact Advisor Hero Representation"
                    priority
                    className="w-full h-auto object-contain drop-shadow-2xl selection:bg-transparent"
                />
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER CORE METRICS DISPLAY BLOCK */}
        <div className="mt-2 container mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-[20px] border border-[#DDDFF5] px-6 md:px-10 py-2 shadow-xs">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]">

              {/* Metric Unit 1: Avg Response */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-14 h-14 rounded-xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={foundedIcon} alt="Response Speed" className="w-7 h-7"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Response Rate</p>
                  <p className="text-[#6557E3] font-bold text-xl sm:text-2xl">&lt; 60 Min</p>
                </div>
              </div>

              {/* Metric Unit 2: Location Support */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-14 h-14 rounded-xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={locationIcon} alt="Support Availability" className="w-7 h-7"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Availability</p>
                  <p className="text-[#6557E3] font-bold text-xl sm:text-2xl">Mon &ndash; Sat</p>
                </div>
              </div>

              {/* Metric Unit 3: Global Students */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-14 h-14 rounded-xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={countriesIcon} alt="Enrolled Learners" className="w-7 h-7"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Global Alumni</p>
                  <p className="text-[#6557E3] font-bold text-xl sm:text-2xl">5,800+</p>
                </div>
              </div>

              {/* Metric Unit 4: Certified Track */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-14 h-14 rounded-xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={cpdIcon} alt="Placement Track" className="w-7 h-7"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8] font-medium mb-0.5">Placement</p>
                  <p className="text-[#6557E3] font-bold text-xl sm:text-2xl">94% Rate</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactHeroSection;