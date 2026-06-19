"use client";

import BadgeLabel from "@/components/shared/BadgeLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

import janesmith from "@/public/images/jane-smith.png";
import tomWilliams from "@/public/images/tom-williams.png";
import saraJohnson from "@/public/images/sara-johnson.png";

import leftArrow from "@/public/icons/back-arrow.svg";
import rightArrow from "@/public/icons/forward-arrow.svg";

import Image from "next/image";
import { getRandomTestimonials } from "@/app/(asgard)/asgard/academics/courses/actions";

const staticTestimonials = [
  {
    comment:
      "Salesforce Admin Training: Cloud Edge Excellence - Cloud Edge's Salesforce Admin course exceeded expectations. Great training, expert support, and real skill improvement. Highly recommended!",
    name: "Jane Smith",
    rating: 5,
    image: janesmith,
  },
  {
    comment:
      "Salesforce Training: Cloud Edge Learning Hub - The training was well-structured and easy to follow. Hands-on sessions helped me gain confidence and grow my career.",
    name: "Tom Williams",
    rating: 3,
    image: tomWilliams,
  },
  {
    comment:
      "Master Salesforce Lightning: Practical & Powerful - Excellent course with real-world projects. The guidance was top-notch and helped me boost my skills quickly.",
    name: "Sarah Johnson",
    rating: 5,
    image: saraJohnson,
  },
];

const TestimonialSection = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [testimonials, setTestimonials] = useState<any[]>(staticTestimonials);

  useEffect(() => {
    getRandomTestimonials(6)
      .then((data) => {
        console.log("getRandomTestimonials response:", data);
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load testimonials", err);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#06042E] py-14 overflow-hidden relative">

      <div className="absolute top-[130px] left-[40px] bg-[#7635D6] w-[350px] h-[350px] rounded-full blur-[200px]" />
      <div className="absolute top-[130px] right-[40px] bg-[#7635D6] w-[350px] h-[350px] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-2/2 bg-[#7635D6] w-[250px] h-[250px] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/9 -translate-x-2/2 bg-[#7635D6] w-[250px] h-[250px] rounded-full blur-[200px]" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center flex-col">
          <BadgeLabel label="Testimonials" theme="dark" />
          <div className="text-white text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl">
            What Our Students Say
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10 overflow-hidden">
          <div className="mx-[-12px]">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <TestimonialCard
                    comment={testimonial.review_text || testimonial.comment || ""}
                    name={testimonial.person_name || testimonial.name || ""}
                    rating={testimonial.rating || 5}
                    image={testimonial.media_url.src || testimonial.image || janesmith}
                    person_designation={testimonial.person_designation || ""}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Left Button */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border cursor-pointer border-white/15 flex items-center justify-center bg-[#FFFFFF12] backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
              boxShadow: "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
            }}
          >
            <Image src={leftArrow} alt="Previous" className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border cursor-pointer border-white/15 flex items-center justify-center bg-[#FFFFFF12] backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
              boxShadow: "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
            }}
          >
            <Image src={rightArrow} alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;