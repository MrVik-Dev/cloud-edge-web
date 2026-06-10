import React from 'react'
import Image from 'next/image'

import lightIcon from "@/public/icons/light-icon.svg"
import cta from "@/public/images/cta.svg"

const CourseCtaSection = () => {
  return (
    <section className="container mx-auto my-12">
      <div
        className="relative overflow-hidden rounded-[31.46px] px-8 py-7 md:px-12 md:py-12"
        style={{
          background:
            "linear-gradient(95.59deg, #632AA6 -1.65%, #3D2A87 40.67%, #090D36 98.93%)",
        }}
      >
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
          {/* Left Content */}
          <div className="max-w-[560px]">
            {/* Icon */}
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Image
                src={lightIcon}
                alt="Light Icon"
                width={24}
                height={24}
              />
            </div>

            <h2 className="text-3xl font-bold leading-tight text-white md:text-[44px]">
              Ready to accelerate your Salesforce career?
            </h2>

            <p className="mt-4 text-base text-white/85">
              Enroll today and take the first step towards a high-growth,
              high-demand career.
            </p>

            <button
              className="mt-7 flex h-14 items-center gap-3 rounded-xl bg-white px-8 text-sm font-semibold text-[#0F172A] transition-all hover:scale-[1.02]"
              style={{
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Start Learning Today
              <span>→</span>
            </button>

            <p className="mt-4 text-sm text-white/60">
              7-Day Free Trial • Cancel Anytime
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src={cta}
              alt="Rocket Illustration"
              className="w-[200px] md:w-[280px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseCtaSection