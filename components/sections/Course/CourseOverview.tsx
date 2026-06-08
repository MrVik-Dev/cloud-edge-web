import { ICourse } from '@/types'
import Image from 'next/image';
import React from 'react'
import cap from "@/public/icons/cap.svg"
import book from "@/public/icons/book-purple.svg"
import module from "@/public/icons/module.svg"
import WeekModuleCard from '@/components/ui/WeekModuleCard';
import check from "@/public/icons/check-purple.svg"
import india from "@/public/icons/india.svg"
import uk from "@/public/icons/united-kingdom.svg"
import us from "@/public/icons/united-states.svg"
import canada from "@/public/icons/canada.svg"
import CourseEnrollmentCard from '@/components/ui/CourseEnrollmentCard';

interface ICourseOverviewProps {
  course: ICourse;
}

const CourseOverview: React.FC<ICourseOverviewProps> = ({ course }) => {

  const salaryCards = [
    {
      icon: india,
      salary: course.in_avg_salary,
      label: "AVG. SALARY – INDIA",
    },
    {
      icon: uk,
      salary: course.uk_avg_salary,
      label: "AVG. SALARY – UK",
    },
    {
      icon: us,
      salary: course.us_avg_salary,
      label: "AVG. SALARY – USA",
    },
    {
      icon: canada,
      salary: course.ca_avg_salary,
      label: "AVG. SALARY – CANADA",
    },
  ];
  return (
    <div className=' bg-[#F8FAFC] py-16'>
      <div className=' container mx-auto'>
        <div className=' grid grid-cols-12'>
          {/* left */}
          <div className='col-span-7 space-y-4'>
            <div className='bg-[#E3E1FA] rounded-2xl px-4 py-2 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-3 '>
              <Image src={cap} alt='cap' className=' w-5 h-5' />
              {course.label}
            </div>
            <h3 className=' font-bricolage-grotesque font-bold text-4xl'>Course Overview</h3>
            <p className=' text-[#475569] tracking-wide'>{course.overview}</p>
            <div>
              <div className=' flex items-center gap-3'>
                <div className=' flex items-center gap-3'>
                  <Image src={book} alt='book' className=' w-4 h-4' />
                  <div className=' text-[14px] text-[#334155] font-medium'>Full Syllabus</div>
                </div>
                <div className=' flex items-center gap-3'>
                  <Image src={module} alt='module' className=' w-4 h-4' />
                  <div className=' text-[14px] text-[#334155] font-medium'>{course.modules?.length} Modules</div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {course.modules?.map((m) => (
                  <WeekModuleCard
                    key={m.id}
                    label={`WEEK ${m.display_order}`}
                    title={m.title}
                    points={m.points || []}
                  />
                ))}
              </div>

              <div className="mt-16">
                <h3 className="text-3xl font-bold font-bricolage-grotesque mb-6">
                  What You'll Learn
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {course.highlights?.map((highlight, index) => (
                    <div
                      key={highlight.id}
                      className="bg-white border border-[#E2E8F0] rounded-2xl p-5"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-xl font-bold text-[#1E293B] mb-3">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <p className="text-sm text-[#64748B] leading-relaxed">
                            {highlight.text}
                          </p>
                        </div>

                        <div className="shrink-0">
                          <Image
                            src={highlight.icon_media}
                            alt={highlight.text}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-3xl font-bold font-bricolage-grotesque mb-6">
                  Tools & Technologies You'll Work With
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {course.tools?.map((tool) => (
                    <div
                      key={tool.id}
                      className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3 flex items-center gap-3"
                    >
                      <Image
                        src={tool.media}
                        alt={tool.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />

                      <span className="text-sm font-medium text-[#334155]">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


              <div className="mt-16">
                <h3 className="text-3xl font-bold font-bricolage-grotesque mb-6">
                  Career Outcomes
                </h3>

                <div className=' grid grid-cols-2 gap-6'>
                  <div className=' bg-[#F7F7FD] border border-[#EDEDFA] p-6 rounded-2xl'>
                    <h3 className='text-[#6A5CEE] font-bold text-xs tracking-tight uppercase mb-6'>Job Roles You Can Target</h3>
                    <div className=' space-y-4'>
                      {
                        course.outcomes?.map((outcome) => (
                          <div className=' flex items-center justify-start gap-2'>
                            <Image src={check} alt='check' className=' w-4 h-4' />
                            <div className=' text-[#1D1F20] font-medium text-sm'>{outcome}</div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div>
                    <div className="grid grid-cols-2 gap-5">
                      {salaryCards.map((item, index) => (
                        <div
                          key={index}
                          className="border border-[#E2E8F0] rounded-2xl p-4 bg-white flex flex-col gap-4"
                          style={{
                            boxShadow: "0px 1px 3px rgba(0,0,0,0.05)",
                          }}
                        >
                          <Image
                            src={item.icon}
                            alt={item.label}
                            className="w-8 h-8 object-contain"
                          />

                          <div>
                            <div className="font-bold text-[#6557E3] text-lg leading-none">
                              {item.salary}
                            </div>

                            <div className="mt-1 text-[#1D1F20] font-bold uppercase text-[11px] tracking-wide">
                              {item.label}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>


          <div className="col-span-5 pl-10">
            <div className="sticky top-24">
              <CourseEnrollmentCard course={course} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseOverview