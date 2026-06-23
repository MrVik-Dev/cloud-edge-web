import { IBatches } from '@/types'
import moment from 'moment';
import React from 'react'
import group from "@/public/icons/group-white.svg"
import Image from 'next/image';
import groupGreen from "@/public/icons/group-green.svg"
import calendarBlue from "@/public/icons/calender-blue.svg"
import { getWhatsAppLink } from '@/utils';


interface ICourseBatchSectionProps {
  batches: IBatches[];
  duration: number
}

const CourseBatchSection: React.FC<ICourseBatchSectionProps> = ({ batches, duration }) => {

  const today = new Date();

  const runningBatches = batches.filter(batch => {
    const region = batch.batch_regions?.[0];

    if (!region?.start_date) return false;

    const weeksPassed =
      (today.getTime() -
        new Date(region.start_date).getTime()) /
      (1000 * 60 * 60 * 24 * 7);

    return weeksPassed >= 0 && weeksPassed <= duration;
  });

  const upcomingBatches = batches.filter(batch => {
    const region = batch.batch_regions?.[0];

    if (!region?.start_date) return false;

    return new Date(region.start_date) > today;
  });

  return (
    <section className="bg-[#0D162C] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-12">
          <div>
            <div className="bg-white rounded-full px-4 py-2 text-xs w-fit mb-4 flex items-center justify-center gap-1 text-[#21A99D] font-medium">
              <div className='bg-[#21A99D] w-2 h-2 rounded-full ' /> Live Online Training
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 font-bricolage-grotesque leading-tight">
              Batch Schedule
            </h2>

            <p className="text-[#B4BBC8]">
              All batches are 100% live online via Zoom
            </p>

            <p className="text-[#B4BBC8] mt-2">
              🌍 India • UK • USA • Canada
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-6 flex items-center gap-4 lg:gap-5">
              <div className=' bg-[#21A99D33] w-16 h-16 rounded-xl flex items-center justify-center'>
                <Image src={groupGreen} alt='group' className=' w-8 h-8' />
              </div>
              <div>
                <div className="text-white text-3xl font-bold">
                  {runningBatches.length}
                </div>
                <div className="text-[#8FA3BF] text-xs">
                  Currently Running
                </div>

              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 lg:p-6 flex items-center gap-4 lg:gap-5">
              <div className=' bg-[#2563EB33] w-16 h-16 rounded-xl flex items-center justify-center'>
                <Image src={calendarBlue} alt='calendar' className=' w-8 h-8' />
              </div>
              <div>
                <div className="text-white text-3xl font-bold">
                  {upcomingBatches.length}
                </div>
                <div className="text-[#8FA3BF] text-xs">
                  Upcoming Batches
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* GRID */}
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

          {/* RUNNING */}
          <div>
            <div className="flex items-center gap-3 w-full mb-7">
              <h3 className="text-[#4AD3FF] font-semibold whitespace-nowrap">
                IN SESSION
              </h3>
              <div className="grow h-[1px] bg-[#394B75]" />
            </div>
            <div className="space-y-4">
              {runningBatches.map(batch => {
                const region = batch.batch_regions?.[0];
                if (!region?.start_date) return null;
                const startDate = new Date(
                  region.start_date
                );

                const week =
                  Math.min(
                    duration,
                    Math.ceil(
                      (today.getTime() -
                        startDate.getTime()) /
                      (1000 *
                        60 *
                        60 *
                        24 *
                        7)
                    )
                  ) || 1;

                const progress =
                  (week / duration) * 100;

                return (
                  <div
                    key={batch.id}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6"
                  >

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#2563EB52] flex items-center justify-center p-2 rounded-xl shrink-0">
                        <Image src={group} alt='group' className=' w-8 h-8' />
                      </div>

                      <div className=' flex-1'>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                          <div>
                            <div className=' bg-white text-[#2563EB] px-4 py-1 text-xs w-fit rounded-lg font-bold mb-2'>
                              IN SESSION
                            </div>
                            <div className="text-white text-lg sm:text-xl font-bold">
                              {batch.name}
                            </div>

                            <div className="text-slate-400">
                              {batch.class_days?.join(
                                "/"
                              )}
                            </div>
                          </div>

                          <div className="bg-[#2563EB] text-white px-4 py-2 rounded-lg text-xs self-start whitespace-nowrap">
                            Week {week} of {duration}
                          </div>
                        </div>

                        <div className="w-full h-3 rounded-full bg-white/20 overflow-hidden">
                          <div
                            className="h-full bg-cyan-400"
                            style={{
                              width: `${progress}%`,
                            }}
                          />
                        </div>

                        <div className="text-right text-slate-400 text-sm mt-2">
                          {Math.round(progress)}%
                          complete
                        </div>

                      </div>

                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* UPCOMING */}
          <div>
            <div className="flex items-center gap-3 w-full mb-7">
              <h3 className="text-[#B599FF] font-semibold whitespace-nowrap">
                OPEN FOR ENROLMENT
              </h3>
              <div className="grow h-[1px] bg-[#394B75]" />
            </div>
            <div className="space-y-4">
              {upcomingBatches.map(batch => {
                const region = batch.batch_regions?.[0];

                return (
                  <div
                    key={batch.id}
                    className="bg-white rounded-3xl p-5"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">

                      <div className="bg-slate-100 rounded-xl py-3 px-4 sm:py-4 sm:px-6 text-center shrink-0">
                        <div className="font-bold text-[#6557E3]">
                          {moment(
                            region.start_date
                          ).format("DD")}
                        </div>

                        <div className="text-xs text-[#6557E3] font-bold">
                          {moment(
                            region.start_date
                          ).format("MMM")
                          }
                        </div>
                      </div>


                      <div>
                        <div className="text-[#64748B] text-sm">
                          Live Online • Zoom
                        </div>

                        <div className="font-bold text-base sm:text-lg">
                          {batch.name}
                        </div>
                        {/* 
                        <div className="text-sm text-slate-500 mt-1">
                          Starts{" "}
                          {moment(
                            region.start_date
                          ).format("DD MMM YYYY")}
                        </div> */}
                      </div>
                    </div>

                    <a
                      href={getWhatsAppLink(`Hi Cloud Edge Solutions, I want to enroll for the ${batch.name} batch.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center w-full mt-5 border border-[#6557E3] bg-[#E9EEFC] text-[#6557E3] rounded-full py-3 font-semibold text-sm transition-all hover:bg-[#6557E3] hover:text-white"
                    >
                      Enroll for this batch →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CourseBatchSection
