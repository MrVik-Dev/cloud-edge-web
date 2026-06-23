import React from 'react';
import Image from "next/image";
import Link from "next/link";
import whoWeAreIcon from "@/public/icons/who-we-are-icon.svg"

import liveSession from "@/public/icons/live-session.svg"
import instruction from "@/public/icons/instruction.svg"
import cert from "@/public/icons/cert.svg"
import studentTrained from "@/public/icons/students-trained.svg"
import rate from "@/public/icons/rate.svg"
import pass from "@/public/icons/pass.svg"
import calendarBadge from "@/public/icons/calendar-badge.svg"
import starWhite from "@/public/icons/star-white.svg"
import starGold from "@/public/icons/star-gold.svg"
import india from "@/public/icons/IN.svg"
import unitedKingdom from "@/public/icons/GB.svg"
import unitedStates from "@/public/icons/US.svg"
import canada from "@/public/icons/CA.svg"
import uae from "@/public/icons/AE.svg"
import whatsappIcon from "@/public/icons/whatsapp-icon.svg"
import nextArrow from "@/public/icons/next-aroow.svg"
import { getWhatsAppLink } from "@/utils";


const features = [
  {
    icon: liveSession,
    title: "Live Online - Every Session",
    description:
        "No pre-recorded videos. Every Cloud Edge class is live on Zoom with your instructor, classmates and real SAP or Salesforce system access.",
  },
  {
    icon: instruction,
    title: "Instructors Who Work in the Field",
    description:
        "Every instructor holds active certifications and 8–14 years of SAP or Salesforce consulting experience at firms like Deloitte, Accenture and IBM.",
  },
  {
    icon: cert,
    title: "Certification & Career Built In",
    description:
        "3 full mock exams, exam strategy sessions and 12-month placement support are included in every course. 94% of active job seekers are placed.",
  },
];
const stats = [
  {
    icon: studentTrained,
    value: "5,800+",
    color: "#6B46F2",
    title: "Students Trained",
    description: "India, UK, UAE,\nUSA & Canada",
  },
  {
    icon: rate,
    value: "94%",
    color: "#14B88A",
    title: "Placement Rate",
    description: "Active job seekers,\nwithin 6 months",
  },
  {
    icon: pass,
    value: "88%",
    color: "#1F76D2",
    title: "First-Attempt Pass",
    description: "SAP & Salesforce\ncertification exams",
  },
  {
    icon: calendarBadge,
    value: "2019",
    color: "#F2A62B",
    title: "Est. London &",
    description: "Ahmedabad",
  },
];
const countries = [
  {
    flag: india,
    name: "India",
  },
  {
    flag: unitedKingdom,
    name: "UK",
  },
  {
    flag: unitedStates,
    name: "USA",
  },
  {
    flag: canada,
    name: "Canada",
  },
  {
    flag: uae,
    name: "UAE",
  },
];

const WhoWeAreSection = () => {
  return (
      <div className={"bg-white py-12"}>
        <div className={"container mx-auto"}>
          <div className={"flex items-center justify-center flex-col"}>
            <div
                className={"flex items-center justify-around w-fit bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-2 rounded-4xl gap-2"}>
              <Image src={whoWeAreIcon} alt={"Who WeAre"} className={"w-4 h-4"}/>
              <span className={"text-sm text-[#8B79FD] font-medium"}>Who We Are</span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight max-w-6xl text-center mt-5">
              The live SAP & Salesforce training company for
              <span className="text-[#6557E3]"> India, UK & beyond</span>
            </h2>
            <p className={" text-[#64748B] text-center max-w-4xl mt-5"}>Founded in 2019 by working SAP and Salesforce
              consultants, Cloud Edge delivers live, instructor-led training to professionals across India, the UK, the
              UAE, the USA and Canada — with real system access, certification exam prep and 12-month placement support
              built into every course.</p>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {features.map((item, index) => (
                  <div
                      key={index}
                      className="rounded-[24px] border border-[#E6E8F5] bg-white p-8 transition-all duration-300"
                  >
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECEAFC]">
                        <Image
                            src={item.icon}
                            alt={item.title}
                            className="h-7 w-7"
                        />
                      </div>

                      <h3 className="max-w-[220px] text-[26px] font-semibold leading-tight text-[#1E293B]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-[15px] leading-7 text-[#64748B]">
                      {item.description}
                    </p>
                  </div>
              ))}
            </div>

            <div
                className="mt-16 w-full rounded-[32px] border border-[#DDE3F5] bg-[#FAFAFD] px-6 py-8 lg:px-12 lg:py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center px-4 lg:px-6 ${
                            index !== stats.length - 1
                                ? "lg:border-r lg:border-[#DDE3F5]"
                                : ""
                        }`}
                    >
                      <Image
                          src={item.icon}
                          alt={item.title}
                          className="w-[52px] h-[52px] object-contain"
                      />

                      <h3
                          className="mt-4 text-[38px] font-bold leading-none"
                          style={{color: item.color}}
                      >
                        {item.value}
                      </h3>

                      <h4 className="mt-2 text-[18px] font-semibold text-[#2A2A2A]">
                        {item.title}
                      </h4>

                      <p className="mt-1 whitespace-pre-line text-[15px] leading-6 text-[#7A869A]">
                        {item.description}
                      </p>
                    </div>
                ))}
              </div>
            </div>

            <div className="mt-10 w-full rounded-[28px] border border-[#DDE3F5] bg-[#FAFAFD] px-6 py-4 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
                {/* Rating Section */}
                <div className="flex items-center gap-4">
                  <div className={"bg-[#6557E3] p-4 rounded-full"}>
                    <Image
                        src={starWhite}
                        alt="Rating"
                        className="h-4 w-4"
                    />
                  </div>

                  <div className="flex items-center gap-1 text-[16px] text-[#2A2A2A]">
                    <span className="font-bold">4.8</span>

                    <Image
                        src={starGold}
                        alt="Star"
                        className="h-5 w-5"
                    />

                    <span>from 1,100+ reviews</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden h-11 w-px bg-[#DDE3F5] lg:block"/>

                {/* Countries */}
                <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
                  {countries.map((country, index) => (
                      <React.Fragment key={country.name}>
                        <div className="flex items-center gap-2">
                          <Image
                              src={country.flag}
                              alt={country.name}
                              className="h-6 w-8 object-contain"
                          />

                          <span className="text-[16px] font-medium text-[#2A2A2A]">
                  {country.name}
                </span>
                        </div>

                        {index !== countries.length - 1 && (
                            <span className="text-[#2A2A2A]">•</span>
                        )}
                      </React.Fragment>
                  ))}
                </div>
              </div>
            </div>


            <div className="mt-10 w-fit rounded-[30px] bg-[#F3F0FB] p-4">
              <div className="flex flex-col gap-3 md:flex-row md:justify-center">

                {/* WhatsApp Button */}
                <a
                    href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like to enroll.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex items-center justify-center gap-2
        rounded-full
        bg-[#25D366]
        px-8 py-4
        text-white
        font-semibold
        text-base
        transition-all duration-300
        hover:scale-[1.02]
      "
                >
                  <Image
                      src={whatsappIcon}
                      alt="whatsapp icon"
                      className="w-5 h-5"
                  />
                  WhatsApp to Enroll
                </a>

                {/* Browse Courses Button */}
                <Link
                    href="/courses"
                    className="
        flex items-center justify-center gap-2
        rounded-full
        bg-[#4361EE]
        px-8 py-4
        text-white
        font-semibold
        text-base
        transition-all duration-300
        hover:scale-[1.02]
      "
                >
                  Browse All Courses
                  <Image
                      src={nextArrow}
                      alt="next icon"
                      className="w-5 h-5"
                  />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default WhoWeAreSection;
