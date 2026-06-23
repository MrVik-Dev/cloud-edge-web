import React from 'react';
import Image from "next/image";
import Link from "next/link";
import aboutUsImage from "@/public/images/about-us.png";
import whatsappIcon from "@/public/icons/whats-app.svg";
import play from "@/public/icons/play.svg";
import nextArrow from "@/public/icons/next-aroow.svg"
import foundedIcon from "@/public/icons/foundedIcon.svg"
import locationIcon from "@/public/icons/locationIcon.svg"
import countriesIcon from "@/public/icons/countriesIcon.svg"
import cpdIcon from "@/public/icons/cpdIcon.svg"
import { getWhatsAppLink } from "@/utils";


const AboutUsHeroSection = () => {
  return (
      <div className="bg-[#EFEEFC] pb-16">
        <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

            {/* Left Content */}
            <div className="space-y-5 lg:space-y-6 order-1 lg:w-1/2">
              <div
                  className="bg-[#E3E1FA] rounded-2xl px-4 py-2 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-3">
                🌟 Our Story — Est. 2019
              </div>

              <div>
                <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl font-bricolage-grotesque tracking-tight leading-tight max-w-lg">
                  Built for{" "}
                  <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
                        Careers,
                    </span>{" "}
                  Not Just Certificates
                </h1>
              </div>

              <div>
                <p className="text-[#31373D] tracking-tight text-base sm:text-lg max-w-xl">
                  Live, practical SAP and Salesforce training taught by people who work in the field every day. That
                  conviction launched Cloud Edge in 2019 — and drives every course we run.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

                <Link
                    href="/courses"
                    className="bg-[#4361EE] px-6 py-4 rounded-full flex items-center justify-center gap-3 w-full sm:w-auto">
                  <div className="text-white font-semibold">
                    Browse All Courses
                  </div>
                  <Image
                      src={nextArrow}
                      alt="next arrow"
                      className="w-5 h-5"
                  />
                </Link>

                <a
                    href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like to talk to an advisor.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-6 py-4 rounded-full flex items-center justify-center gap-2 border border-[#F3F4F6] w-full sm:w-auto">
                  <Image
                      src={whatsappIcon}
                      alt="whatsapp-icon"
                      className="w-4 h-4"
                  />
                  <div className="text-[#25D366] font-semibold">
                    Talk to an Advisor
                  </div>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end order-2 lg:w-1/2">
              <div
                  className="relative w-full flex justify-center lg:justify-end"
                  style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 70%, transparent 100%)",
                  }}
              >
                <Image
                    src={aboutUsImage}
                    alt="About Us"
                    width={900}
                    height={700}
                    className="w-full max-w-[800px] lg:max-w-[900px] h-auto object-contain"
                    priority
                />
              </div>
            </div>

          </div>
        </div>


        {/* Stats Section */}
        <div className="mt-2 container mx-auto">
          <div className="bg-white rounded-[20px] border border-[#DDDFF5] px-6 md:px-10 py-6">
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-[#E5E7EB]">

              {/* Founded */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-16 h-16 rounded-2xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={foundedIcon} alt="Founded" className="w-8 h-8"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Founded</p>
                  <p className="text-[#6557E3] font-semibold text-2xl">2019</p>
                </div>
              </div>

              {/* Based */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-16 h-16 rounded-2xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={locationIcon} alt="Location" className="w-8 h-8"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Based</p>
                  <p className="text-[#6557E3] font-semibold text-xl">
                    India & UK
                  </p>
                </div>
              </div>

              {/* Countries */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-16 h-16 rounded-2xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={countriesIcon} alt="Countries" className="w-8 h-8"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Countries</p>
                  <p className="text-[#6557E3] font-semibold text-2xl">15+</p>
                </div>
              </div>

              {/* CPD */}
              <div className="flex items-center gap-4 py-5 lg:px-6">
                <div className="w-16 h-16 rounded-2xl bg-[#EFEEFC] flex items-center justify-center shrink-0">
                  <Image src={cpdIcon} alt="CPD" className="w-8 h-8"/>
                </div>
                <div>
                  <p className="text-xs text-[#94A3B8]">Accredited</p>
                  <p className="text-[#6557E3] font-semibold text-2xl">CPD</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
};

export default AboutUsHeroSection;
