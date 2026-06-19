import React from "react";
import Image, { StaticImageData } from "next/image";
import star from "@/public/icons/star.svg";
import emptyStar from "@/public/icons/empty-star.svg";

interface TestimonialCardProps {
  comment: string;
  name: string;
  image: StaticImageData | string;
  rating: number;
  person_designation?:string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  comment,
  name,
  image,
  rating,
  person_designation
}) => {
  const safeRating = Math.max(0, Math.min(5, rating));

  return (
    <div
      className="
        rounded-[22px] sm:rounded-[30px]
        w-full
        h-[320px] sm:h-[380px]
        border border-white/15
        px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-10
        bg-[#FFFFFF12]
        flex flex-col
        items-center
        justify-between
        text-center
      "
      style={{
        background:
          "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
        boxShadow:
          "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
      }}
    >
      {/* Comment */}
      <p
        className="
          text-white
          text-sm sm:text-base
          leading-6 sm:leading-7
          line-clamp-5 sm:line-clamp-6
        "
      >
        {comment}
      </p>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1.5">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
          >
            <Image
              src={index < safeRating ? star : emptyStar}
              alt="rating star"
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* User */}
      <div className="flex flex-col items-center gap-2">
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-white/20">
          <Image
            src={image ? image : emptyStar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <h4 className="text-white text-sm sm:text-lg font-semibold">
          {name}
        </h4>
        <p  className="text-white text-sm ">{person_designation}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;