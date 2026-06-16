"use client";

import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

import PrimaryButton from "@/components/ui/PrimaryButton";
import {getBanners} from "@/app/(asgard)/asgard/content/banners/actions";

import heroImage from "@/public/images/hero-image.png";
import heroImage2 from "@/public/images/hero-image-2.png"
import heroImage3 from "@/public/images/hero-image-3.png"

const heroSlides = [
  {
    id: 1,
    titleTop: "Built For Smart,",
    titleBottom: "Future Ready",
    highlight: "Learning",
    description:
        "Transform your career with industry-focused IT training, live mentorship, and practical project experience designed for real-world success.",
    image: heroImage,
    primaryBtn: "View Courses",
    secondaryBtn: "Contact Us",
  },
  {
    id: 2,
    titleTop: "Create Skills That",
    titleBottom: "Companies Need",
    highlight: "Today",
    description:
        "Learn cutting-edge technologies through hands-on sessions, interactive workshops, and job-oriented learning paths built by experts.",
    image: heroImage2,
    primaryBtn: "Explore Programs",
    secondaryBtn: "Get Started",
  },
  {
    id: 3,
    titleTop: "Turn Passion Into",
    titleBottom: "Tech Careers",
    highlight: "Faster",
    description:
        "Build powerful portfolios, gain mentorship from professionals, and prepare yourself for high-growth opportunities in the tech industry.",
    image: heroImage3,
    primaryBtn: "Start Journey",
    secondaryBtn: "Talk To Team",
  },
];

const HeroSection = () => {
  const [slides, setSlides] = useState<any[]>([{
    id: "placeholder",
    title: "",
    description: "",
    image_url: "",
    btn_text: "",
    btn_link: "",
  }]);
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await getBanners(1, 10);
        if (response.data && response.data.length > 0) {
          setSlides(response.data);
        }
      } catch (error) {
        console.error("Failed to fetch banners", error);
      }
    };
    fetchBanners();
  }, []);

  const settings = {
    dots: false,
    infinite: slides.length > 1,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: slides.length > 1,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
  };
  return (
      <section className="relative bg-[#F7F2FF] overflow-x-clip">
        <Slider {...settings}>
          {slides.map((slide) => {
            const titleMatch = (slide.title || "").match(/([\s\S]*?)\{\{([\s\S]*?)\}\}([\s\S]*)/);
            let before = slide.title || "";
            let highlight = "";
            let after = "";

            if (titleMatch) {
              before = titleMatch[1];
              highlight = titleMatch[2];
              after = titleMatch[3];
            }

            return (
                <div key={slide.id}>
                  <div className="relative">
                    <div className={"md:min-h-[900px]"}>
                      {/* blur effects */}
                      <div
                          className="bg-primary w-48 h-48 absolute bottom-1/4 right-1/4 -translate-x-1/2 blur-[200px]"/>
                      <div
                          className="bg-primary w-40 h-40 absolute bottom-1/3 right-1/2 -translate-x-1/2 blur-[200px]"/>

                      <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <div
                            className="flex items-center justify-center flex-col gap-8 md:gap-12 pt-28 md:pt-32 pb-72 sm:pb-80 md:pb-[420px]">
                          <h1 className="text-[42px] sm:text-[58px] lg:text-[82px] font-bold leading-[1.05] lg:leading-24 text-black text-center">
                            {before.split('\n').map((line: string, i: number, arr: string[]) => (
                                <React.Fragment key={`before-${i}`}>
                                  {line}
                                  {i < arr.length - 1 && <br/>}
                                </React.Fragment>
                            ))}

                            {highlight && (
                                <span className="relative inline-block rotate-[-3.08deg] ml-3 sm:ml-4 lg:ml-6 mt-3">
                          {/* TOP */}
                                  <span
                                      className="absolute pointer-events-none"
                                      style={{
                                        top: "-10px",
                                        left: "-18px",
                                        width: "calc(100% + 42px)",
                                        height: "1px",
                                        backgroundImage:
                                            "repeating-linear-gradient(to right, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 10.775px, transparent 10.775px, transparent 21.55px)",
                                        backgroundSize: "21.55px 1px",
                                      }}
                                  />

                                  {/* BOTTOM */}
                                  <span
                                      className="absolute pointer-events-none"
                                      style={{
                                        bottom: "-10px",
                                        left: "-18px",
                                        width: "calc(100% + 42px)",
                                        height: "1px",
                                        backgroundImage:
                                            "repeating-linear-gradient(to right, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 10.775px, transparent 10.775px, transparent 21.55px)",
                                        backgroundSize: "21.55px 1px",
                                      }}
                                  />

                                  {/* LEFT */}
                                  <span
                                      className="absolute pointer-events-none"
                                      style={{
                                        top: "-18px",
                                        left: "-10px",
                                        width: "1px",
                                        height: "calc(100% + 42px)",
                                        backgroundImage:
                                            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 10.775px, transparent 10.775px, transparent 21.55px)",
                                        backgroundSize: "1px 21.55px",
                                      }}
                                  />

                                  {/* RIGHT */}
                                  <span
                                      className="absolute pointer-events-none"
                                      style={{
                                        top: "-18px",
                                        right: "-10px",
                                        width: "1px",
                                        height: "calc(100% + 42px)",
                                        backgroundImage:
                                            "repeating-linear-gradient(to bottom, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 10.775px, transparent 10.775px, transparent 21.55px)",
                                        backgroundSize: "1px 21.55px",
                                      }}
                                  />

                                  {/* TEXT */}
                                  <div className="bg-white px-2 py-[2px] leading-none">
                            <span
                                className="relative inline-block tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3.23px] pb-[4px] sm:pb-[6px]"
                                style={{
                                  backgroundImage:
                                      "linear-gradient(90deg, #3562F1 0%, #A25DE2 50%, #F2326F 100%)",
                                  WebkitBackgroundClip: "text",
                                  WebkitTextFillColor: "transparent",
                                  lineHeight: "1",
                                }}
                            >
                              {highlight}
                            </span>
                          </div>
                        </span>
                            )}

                            {after.split('\n').map((line: string, i: number, arr: string[]) => (
                                <React.Fragment key={`after-${i}`}>
                                  {line}
                                  {i < arr.length - 1 && <br/>}
                                </React.Fragment>
                            ))}
                          </h1>

                          <h2 className="text-base sm:text-lg lg:text-2xl max-w-xl text-center leading-relaxed px-2">
                            {slide.description}
                          </h2>

                          <div className="flex flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
                            {slide.btn_text && (
                            <PrimaryButton
                                label={slide.btn_text || "View Courses"}
                                href={slide.btn_link || "/"}
                                className="md:px-8! md:py-4! text-sm! md:text-base! shadow-primary! shadow-lg! w-full sm:w-auto"
                            />
                            )}

                            {slide.secondaryBtn && (
                                <Link
                                    href="/"
                                    className="
                        relative overflow-hidden
                        w-full sm:w-auto
                        px-6 py-3 md:px-8 md:py-4
                        rounded-[100px]
                        border border-transparent
                        inline-flex items-center justify-center
                        text-sm md:text-base
                        transition-all duration-300 ease-out
                        hover:scale-105
                        hover:-translate-y-1
                        active:scale-[0.98]
                        hover:shadow-[0_10px_30px_rgba(255,255,255,0.25)]
                        before:absolute before:inset-0
                        before:rounded-[100px]
                        before:bg-white/10
                        before:opacity-0
                        hover:before:opacity-100
                        before:transition-opacity before:duration-300 cursor-pointer
                      "
                                    style={{
                                      background: `
                          linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%) padding-box,
                          linear-gradient(
                            90deg,
                            rgba(255, 255, 255, 0.24) 0%,
                            #FFFFFF 50%,
                            rgba(255, 255, 255, 0.24) 100%
                          ) border-box
                        `,
                                      boxShadow:
                                          "0px 0px 6px 3px rgba(255, 255, 255, 0.64) inset",
                                    }}
                                >
                          <span className="relative z-10">
                            {slide.secondaryBtn}
                          </span>
                                </Link>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* image */}
                      {slide.image_url && (
                          <div
                              className="pointer-events-none absolute bottom-0 md:-bottom-14 left-1/2 -translate-x-1/2 w-full flex justify-center px-4"
                          >
                            <Image
                                src={slide.image_url}
                                alt="hero image"
                                width={1200}
                                height={800}
                                unoptimized={typeof slide.image_url === "string"}
                                priority
                                className="object-contain w-[700px] md:w-[950px] xl:w-3xl h-auto"
                            />
                          </div>
                      )}

                    </div>
                  </div>
                </div>
            );
          })}
        </Slider>
      </section>
  );
};

export default HeroSection;