import { ICourse } from '@/types'
import React from 'react'
import moment from 'moment';
import cap from "@/public/icons/cap.svg"
import Image from 'next/image';
import calendarBlue from "@/public/icons/calendar-blue.svg"
import groupIcon from "@/public/icons/group.svg"
import calendarOrange from "@/public/icons/calendar-orange.svg"
import verified from "@/public/icons/verified.svg"
import star from "@/public/icons/star-gold.svg"
import enrolled from "@/public/icons/enrolled.png"
import whatsappIcon from "@/public/icons/whatsapp-white.svg"

interface ICourseHeroSectionProps {
  course: ICourse;
}

const CourseHeroSection: React.FC<ICourseHeroSectionProps> = ({ course }) => {
  return (
    <div className='min-h-[900px]' style={{
      background: "radial-gradient(85.12% 123.04% at 70% 30%, rgba(219, 234, 254, 0.6) 0%, #F8FBFF 70%)"
    }}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className=' max-w-xl pt-28 md:pt-32 space-y-6'>
          <div className='bg-[#E3E1FA] rounded-2xl px-4 py-2 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-3 '>
            <Image src={cap} alt='cap' className=' w-5 h-5' />
            {course.label}
          </div>
          <div>
            <h1 className=' font-bold text-5xl font-bricolage-grotesque tracking-tight leading-14'>{course.name}</h1>
          </div>
          <div>
            <p className=' text-[#31373D] tracking-tight text-lg '>
              {course.description}
            </p>
          </div>
          <div className=' grid grid-cols-4 gap-6'>
            <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[130px]">
              <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">
                <Image
                  src={calendarBlue}
                  alt="calendar"
                  className="w-5 h-5"
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
                  {course.duration} Weeks
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  Live Online
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[130px]">
              <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">
                <Image
                  src={groupIcon}
                  alt="group"
                  className="w-5 h-5"
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
                  BEGINNER -
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  Intermediate
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[130px]">
              <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">
                <Image
                  src={calendarOrange}
                  alt="calendar"
                  className="w-5 h-5"
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
                  Next batch
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  {/* @ts-ignore */}
                  {moment(course.nextBatch.start_date).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[130px]">
              <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">
                <Image
                  src={verified}
                  alt="verified"
                  className="w-5 h-5"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
                  ADM-201
                </p>

                <p className="text-sm font-semibold text-gray-900">
                  Aligned
                </p>
              </div>
            </div>
          </div>
          <div className=' flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Image
                    key={index}
                    src={star}
                    alt="star"
                    className="w-3 h-3"
                  />
                ))}
              </div>
              <div className=' font-bold text-sm'>4.8</div>
              <div className=' text-[#94A3B8] text-sm'>(312 reviews)</div>
            </div>
            <div className='flex items-center gap-1'>
              <Image src={enrolled} alt='enrolled' className=' w-7 h-4' />
              <span className=' font-semibold text-sm'>3,400+</span>
              <span className='text-sm'>enrolled</span>
            </div>
            <div className='flex items-center gap-2'>
              <div>
                🌍
              </div>
              <span className='text-sm text-[#475569]'>India • UK • USA</span>
            </div>
          </div>
          <div className=' flex items-center gap-4'>
            <button className='bg-[#4361EE] px-6 py-4 rounded-full flex items-center gap-2'>
              <Image src={whatsappIcon} alt='whatsapp' className=' w-5 h-5'  />
              <div className=' text-white font-semibold'>Enrol via WhatsApp</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHeroSection