import React from "react";
import CtaImg from "@/public/images/home-cta.png";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Image from "next/image";

const CtaSection = () => {
  return (
    <section className="bg-[#090430] py-10 sm:py-20 relative">

      <div className="absolute left-20  bottom-0 w-[200px] h-[200px] bg-[#6557E3] blur-[300px]" />
      <div className="absolute right-0  top-0 w-[300px] h-[300px] bg-[#FFC224] blur-[300px]" />
      <div className="container mx-auto px-4">
        <div
          className="overflow-hidden rounded-[24px] sm:rounded-[30px] border border-white/15"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
            boxShadow:
              "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">

            {/* Left Content */}
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
              <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl leading-[1.2] max-w-[620px]">
                Get Quality Skills Certificate From the{" "}
                <span className="text-primary">CloudEdge</span>
              </h2>

              <p className="mt-5 text-sm sm:text-base text-white/80 leading-7 max-w-[560px]">
                If you were unable to attend the live session, you can access
                past session recordings for free on the Cloud Edge platform.
              </p>

              <div className="mt-7 flex justify-center lg:justify-start w-full">
                <SecondaryButton
                  text="Enroll Now"
                  bgColor="#6557E3"
                  shadowColor="#3A2FA0"
                  href="/courses"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex items-center justify-center">
              <Image
                src={CtaImg}
                alt="cta"
                className="w-full max-w-[440px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
