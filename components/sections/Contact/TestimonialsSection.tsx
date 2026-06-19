import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { getFeaturedTestimonials } from "@/app/(asgard)/asgard/academics/courses/actions";

const colors = [
  "#3275FC",
  "#7C6DFB",
  "#32ADE6",
  "#25D366",
  "#FF9F0A",
  "#E11D48",
];

const TestimonialsSection = async () => {
  const testimonials = await getFeaturedTestimonials();

  return (
    <section className="bg-[#EFEEFC]/50 py-20 sm:py-24 border-b border-[#DDDFF5]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header Block */}
        <div className="text-center max-w-135 mx-auto mb-14 sm:mb-16">
          <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mx-auto mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse" />
            What Students Say
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
            Trusted by Professionals{" "}
            <span className="bg-linear-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
              Across 15+ Countries
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item, idx) => {
            const initials =
              item.person_name
                ?.split(" ")
                .map((word: string) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "NA";

            const avatarColor = colors[idx % colors.length];

            return (
              <div
                key={item.id}
                className="bg-white rounded-[24px] p-6 sm:p-8 border-x border-b border-[#DDDFF5] shadow-xs flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                style={{
                  borderTop: `5px solid ${avatarColor}`,
                }}
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        className="w-5 h-5 text-[#FBBF24]"
                        fill="#FBBF24"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-slate-700 text-sm sm:text-[14.5px] leading-relaxed tracking-tight italic mb-6">
                    &ldquo;{item.review_text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  {item.media_url ? (
                    <img
                      src={item.media_url}
                      alt={item.person_name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      style={{ backgroundColor: avatarColor }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                    >
                      {initials}
                    </div>
                  )}

                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                      {item.person_name}
                    </h4>

                    <p className="text-[11px] font-medium text-slate-500 truncate mt-0.5">
                      {item.person_designation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;