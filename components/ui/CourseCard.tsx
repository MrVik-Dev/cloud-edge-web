import React from 'react'
import Image, { StaticImageData } from 'next/image'
import SecondaryButton from './SecondaryButton'

interface CourseCardProps {
  icon: string | StaticImageData
  category: string
  categoryColor: string
  title: string
  description: string
  oldPrice: string
  price: string
  buttonText?: string;
  url: string;
}

const CourseCard = ({
  icon,
  category,
  categoryColor,
  title,
  description,
  oldPrice,
  price,
  url,
  buttonText = "Enroll Now",
}: CourseCardProps) => {
  return (
    <div
      className='bg-[#FFFFFF73] backdrop-blur-[11.797298431396484px] w-full p-5 rounded-4xl space-y-6 transition-all duration-300 ease-out hover:-translate-y-1'
      style={{
        border: "0.98px solid rgba(255, 255, 255, 1)",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div className='flex items-center justify-between'>
        <Image
          src={icon}
          alt={title}
          width={52}
          height={52}
          className='w-[52px] h-[52px] object-contain'
        />

        <span
          className='text-xs uppercase bg-white p-1 rounded font-bold'
          style={{
            color: categoryColor,
          }}
        >
          {category}
        </span>
      </div>

      <div className='pr-5 space-y-3'>
        <h3 className='font-semibold text-xl tracking-tight line-clamp-1'>
          {title}
        </h3>

        <h4 className='text-[#5A5B62] line-clamp-3 min-h-[72px]'>
          {description}
        </h4>

        <div className='flex items-center justify-between mt-7'>
          <div>
            {/* <div className='text-sm text-[#938F9F] line-through'>
              {oldPrice}
            </div> */}

            <div className='text-primary font-bold text-3xl'>
              {price}
            </div>
          </div>

          <SecondaryButton text={buttonText} href={url} />
        </div>
      </div>
    </div>
  )
}

export default CourseCard;