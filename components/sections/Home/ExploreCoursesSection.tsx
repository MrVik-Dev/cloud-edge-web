"use client";

import BadgeLabel from '@/components/shared/BadgeLabel'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import checkIcon from "@/public/icons/check.svg"
import Image from 'next/image'
import SecondaryButton from '@/components/ui/SecondaryButton'
import CourseCard from '@/components/ui/CourseCard'

import codeIcon from "@/public/icons/code.svg"
import salesforceIcon from "@/public/icons/salesforce.svg"
import marketingIcon from "@/public/icons/marketing.svg"
import awsIcon from "@/public/icons/aws.svg"
import sapIcon from "@/public/icons/sap.svg"
import javaIcon from "@/public/icons/java.svg"
import { getFeaturedCourses } from '@/app/(asgard)/asgard/academics/courses/actions'

const staticCourses = [
  {
    id: "static-1",
    icon: salesforceIcon,
    category: "Salesforce",
    categoryColor: "#0165E0",
    title: "Salesforce Administrator",
    description:
      "Master customisation, data management, automation, and expert platform navigation. The most in-demand Salesforce role.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "Beginner to Advanced",
      "Real Projects Included",
      "Certification Provided",
      "Job Assistance",
    ],
    badges: [
      "⏳ Limited Seats Available",
      "🏅 Salesforce Certified Program",
    ],
  },
  {
    id: "static-2",
    icon: codeIcon,
    category: "Development",
    categoryColor: "#7535D4",
    title: "Full Stack Web Development",
    description:
      "Advanced front-end and back-end development, modern frameworks, and real-world applications.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "React + Next.js",
      "Backend APIs",
      "Database Projects",
      "Deployment Training",
    ],
    badges: [
      "🔥 Most Popular Course",
      "🚀 Real World Projects Included",
    ],
  },
  {
    id: "static-3",
    icon: salesforceIcon,
    category: "Salesforce",
    categoryColor: "#0165E0",
    title: "Salesforce Development",
    description:
      "Advanced Salesforce development with Apex, LWC, integrations, and enterprise-level implementations.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "Apex + LWC",
      "Real CRM Projects",
      "Integration Training",
      "Career Guidance",
    ],
    badges: [
      "🏅 Salesforce Expert Track",
      "📈 High Salary Domain",
    ],
  },
  {
    id: "static-4",
    icon: marketingIcon,
    category: "Marketing",
    categoryColor: "#F3663B",
    title: "Digital Marketing Mastery",
    description:
      "Advanced marketing strategies, performance campaigns, and data-driven techniques for business growth.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "SEO + Meta Ads",
      "Google Ads",
      "Analytics Training",
      "Live Campaigns",
    ],
    badges: [
      "📊 Performance Marketing",
      "💼 Freelancing Ready",
    ],
  },
  {
    id: "static-5",
    icon: awsIcon,
    category: "DEVELOPMENT",
    categoryColor: "#FB9701",
    title: "AWS Solutions Architect",
    description:
      "Comprehensive cloud training. Get certified and unlock high-paying cloud roles globally.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "AWS Cloud Practitioner",
      "Hands-on Labs",
      "DevOps Basics",
      "Interview Preparation",
    ],
    badges: [
      "☁️ Cloud Career Ready",
      "🚀 High Demand Skills",
    ],
  },
  {
    id: "static-6",
    icon: sapIcon,
    category: "SAP",
    categoryColor: "#00B1EB",
    title: "SAP Training",
    description:
      "FICO, SD, MM modules. Industry-recognised certification with full placement support.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "SAP FICO",
      "SAP MM",
      "SAP SD",
      "Placement Assistance",
    ],
    badges: [
      "🏢 Enterprise Training",
      "📈 Corporate Ready",
    ],
  },
  {
    id: "static-7",
    icon: javaIcon,
    category: "DEVELOPMENT",
    categoryColor: "#EA2D2E",
    title: "Java Full Stack",
    description:
      "Frontend, backend, and database. Build robust full-stack apps with modern Java frameworks.",
    oldPrice: "$120.00",
    price: "$99.00",
    features: [
      "Spring Boot",
      "React Integration",
      "MySQL Database",
      "Industry Projects",
    ],
    badges: [
      "☕ Backend Mastery",
      "💼 Job Focused Program",
    ],
  },
]

export const getNearestBatch = (course: any) => {
  if (!course?.batches?.length) return null;

  return course.batches
    .flatMap((batch: any) => batch.batch_regions || [])
    .filter(
      (region: any) =>
        region.is_active &&
        !region.is_deleted
    )
    .sort(
      (a: any, b: any) =>
        new Date(a.start_date).getTime() -
        new Date(b.start_date).getTime()
    )[0] || null;
};

const getCourseIcon = (course: any) => {
  if (course.icon_media_url) return course.icon_media_url;
  if (course.icon) return course.icon;

  const label = (course.label || "").toLowerCase();
  const name = (course.name || "").toLowerCase();

  if (name.includes("salesforce") || label.includes("salesforce")) return salesforceIcon;
  if (name.includes("aws") || name.includes("cloud") || label.includes("cloud")) return awsIcon;
  if (name.includes("marketing") || label.includes("marketing")) return marketingIcon;
  if (name.includes("sap") || label.includes("sap")) return sapIcon;
  if (name.includes("java") || label.includes("java")) return javaIcon;

  return codeIcon;
};

const getCourseCategory = (course: any) => {
  return course.label || course.category || "Development";
};

const getCourseCategoryColor = (course: any) => {
  if (course.categoryColor) return course.categoryColor;
  const cat = getCourseCategory(course).toLowerCase();
  if (cat.includes("salesforce")) return "#0165E0";
  if (cat.includes("marketing")) return "#F3663B";
  if (cat.includes("aws") || cat.includes("cloud")) return "#FB9701";
  if (cat.includes("sap")) return "#00B1EB";
  if (cat.includes("java")) return "#EA2D2E";
  return "#7535D4";
};

const getCourseTitle = (course: any) => {
  return course.name || course.title;
};

const getCourseFeatures = (course: any) => {
  if (course.features && course.features.length > 0) return course.features;
  return [
    "Beginner to Advanced",
    "Real Projects Included",
    "Certification Provided",
    "Job Assistance",
  ];
};

const getCourseTags = (course: any) => {
  if (course.tags && course.tags.length > 0) return course.tags;
  if (course.badges && course.badges.length > 0) return course.badges;
  return [
    "⏳ Limited Seats Available",
    "🏅 Industry Certified Program",
  ];
};

export const getCoursePrice = (course: any) => {
  if (course.price !== undefined) {
    return { price: course.price, oldPrice: course.oldPrice };
  }

  const nearestRegion = getNearestBatch(course);
  if (nearestRegion) {
    const currencySymbol = nearestRegion.currency === "INR" ? "₹" : nearestRegion.currency === "GBP" ? "£" : "$";
    return {
      price: `${currencySymbol}${nearestRegion.price.toLocaleString()}`,
      oldPrice: `${currencySymbol}${Math.round(nearestRegion.price * 1.2)}`
    };
  }

  if (course.batches) {
    for (const batch of course.batches) {
      if (batch.batch_regions) {
        for (const region of batch.batch_regions) {
          if (region.price) {
            const currencySymbol = region.currency === "INR" ? "₹" : region.currency === "GBP" ? "£" : "$";
            return {
              price: `${currencySymbol}${region.price}`,
              oldPrice: `${currencySymbol}${Math.round(region.price * 1.2)}`
            };
          }
        }
      }
    }
  }

  return {
    price: "$99.00",
    oldPrice: "$120.00"
  };
};

const AUTO_ADVANCE_DURATION = 5000 // ms per course

const ExploreCoursesSection = () => {
  const [coursesList, setCoursesList] = useState<any[]>(staticCourses);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    batchDateText: "To Be Announced",
  });

  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const selectedCourse = coursesList[selectedIndex] ?? coursesList[0];

  // ── Load dynamic courses ──────────────────────────────────────────────────
  useEffect(() => {
    getFeaturedCourses()
      .then((data) => {
        if (data && data.length > 0) {
          console.log("data", data);
          setCoursesList(data);
          setSelectedIndex(0);
        }
      })
      .catch((err) => {
        console.error("Failed to load featured courses", err);
      });
  }, []);

  // ── Batch countdown timer ─────────────────────────────────────────────────
  useEffect(() => {
    if (!selectedCourse) return;
    const nearest = getNearestBatch(selectedCourse);
    if (!nearest || !nearest.start_date) {
      setTimeLeft({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
        batchDateText: "To Be Announced",
      });
      return;
    }

    const startDate = new Date(nearest.start_date);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    const dateText = startDate.toLocaleDateString('en-US', options);

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = startDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00", batchDateText: `Next Batch: ${dateText}` });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0'),
        batchDateText: `Next Batch: ${dateText}`,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [selectedCourse]);

  // ── Progress bar & auto-advance ───────────────────────────────────────────
  const stopRaf = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const startProgress = useCallback((fromPct = 0) => {
    stopRaf();
    const remaining = AUTO_ADVANCE_DURATION * (1 - fromPct / 100);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - (startTimeRef.current ?? now);
      const pct = Math.min(fromPct + (elapsed / remaining) * (100 - fromPct), 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // fade out → advance → fade in
        setContentVisible(false);
        setTimeout(() => {
          setSelectedIndex((prev) => (prev + 1) % coursesList.length);
          setProgress(0);
          setContentVisible(true);
        }, 280);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [stopRaf, coursesList.length]);

  // restart progress bar whenever selected index changes
  useEffect(() => {
    setProgress(0);
    startProgress(0);
    return stopRaf;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, coursesList.length]);

  // ── Manual card click ─────────────────────────────────────────────────────
  const handleCardClick = (course: any) => {
    const idx = coursesList.findIndex((c) => c.id === course.id);
    if (idx === selectedIndex) return;

    stopRaf();
    setContentVisible(false);
    setTimeout(() => {
      setSelectedIndex(idx);
      setProgress(0);
      setContentVisible(true);
    }, 280);
  };

  return (
    <div className='bg-white py-10 relative overflow-hidden'>

      <div className='absolute w-102.75 h-97.5 top-12.5 right-0 bg-[#6557E3] blur-[300px]' />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-77.75 h-72.5 bg-[#F232B2] blur-[300px]" />

      <div className='container mx-auto px-4 sm:px-6'>

        {/* HEADING */}
        <div className='flex items-center justify-center flex-col'>
          <BadgeLabel label='Top Class Courses' theme='light' />
          <div className='text-[#1D1F20] text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl'>
            Explore Our World's Best Courses
          </div>
        </div>

        {/* GRID */}
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 mt-12'>

          {/* LEFT BIG CARD */}
          <div
            className='
              bg-[#272040]
              lg:col-span-5 lg:row-span-3
              border border-[#4C4760]
              rounded-3xl lg:rounded-4xl
              flex flex-col justify-between
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-[0_24px_60px_rgba(101,87,227,0.30)]
              group
              overflow-hidden
            '
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
          >

            {/* ── PROGRESS BAR ── */}
            <div className='relative w-full h-0.75 bg-[#FFFFFF15] overflow-hidden shrink-0'>
              <div
                className='absolute left-0 top-0 h-full rounded-full'
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #6557E3 0%, #F232B2 60%, #fff 100%)',
                  boxShadow: '0 0 8px 2px rgba(242,50,178,0.5)',
                  transition: 'none',
                }}
              />
              {/* glowing head dot */}
              <div
                className='absolute top-1/2 -translate-y-1/2 w-1.75 h-1.75 rounded-full'
                style={{
                  left: `calc(${progress}% - 3.5px)`,
                  background: '#fff',
                  boxShadow: '0 0 6px 3px #F232B2',
                  opacity: progress > 0 && progress < 100 ? 1 : 0,
                  transition: 'opacity 0.2s',
                }}
              />
            </div>

            {/* ── CARD CONTENT with fade/slide animation ── */}
            <div
              className='p-5 sm:p-7 lg:p-10 flex flex-col justify-between flex-1'
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0px)' : 'translateY(12px)',
                transition: 'opacity 0.28s ease, transform 0.28s ease',
              }}
            >

              <div className='space-y-6'>

                {/* TOP */}
                <div className='flex items-start justify-between gap-4'>
                  <div className='transition-transform duration-300 group-hover:scale-105' style={{ display: 'inline-flex' }}>
                    <img
                      src={
                        typeof getCourseIcon(selectedCourse) === "string"
                          ? getCourseIcon(selectedCourse)
                          : getCourseIcon(selectedCourse).src
                      }
                      alt={getCourseTitle(selectedCourse)}
                      width={76}
                      height={76}
                      className="w-15 h-15 sm:w-19 sm:h-19 object-contain"
                    />
                  </div>
                  <span className='bg-[#FFFFFF33] py-1 px-3 backdrop-blur-sm text-white uppercase rounded-[100px] text-[10px] sm:text-xs font-bold whitespace-nowrap'>
                    {getCourseCategory(selectedCourse)}
                  </span>
                </div>

                {/* TITLE */}
                <div className='font-semibold text-2xl sm:text-3xl text-white leading-tight'>
                  {getCourseTitle(selectedCourse)}
                </div>

                {/* DESC */}
                <div className='text-white text-base sm:text-lg leading-6 tracking-wide line-clamp-3'>
                  {selectedCourse.description}
                </div>

                {/* FEATURES */}
                <div className='space-y-2'>
                  {getCourseFeatures(selectedCourse).map((item: string) => (
                    <div
                      key={item}
                      className='flex items-center gap-3 transition-all duration-200 hover:translate-x-1'
                    >
                      <Image src={checkIcon} alt='check' className='w-10 h-10 sm:w-12 sm:h-12' />
                      <span className='text-white text-base sm:text-lg tracking-tight'>{item}</span>
                    </div>
                  ))}
                </div>

                {/* BADGES */}
                <div className='flex flex-wrap items-center gap-3 sm:gap-4'>
                  {getCourseTags(selectedCourse).map((badge: string) => (
                    <div
                      key={badge}
                      className="text-white w-fit backdrop-blur-sm rounded-3xl px-4 py-2 border border-transparent bg-[#FFFFFF0D] text-xs sm:text-sm transition-all duration-200 hover:bg-[#FFFFFF1A] hover:scale-105"
                      style={{ backgroundClip: "padding-box", position: "relative" }}
                    >
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          padding: "0.61px",
                          background: "linear-gradient(109.31deg, #FFFFFF 2.19%, rgba(255,255,255,0) 96.74%)",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                      {badge}
                    </div>
                  ))}
                </div>

                {/* TIMER BOX */}
                {getNearestBatch(selectedCourse) && (
                  <div>
                    <div
                      className="text-white w-full backdrop-blur-sm rounded-3xl p-5 sm:p-7 border border-transparent bg-[#FFFFFF0D] text-sm"
                      style={{ backgroundClip: "padding-box", position: "relative" }}
                    >
                      <div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        style={{
                          padding: "0.61px",
                          background: "linear-gradient(109.31deg, #FFFFFF 2.19%, rgba(255,255,255,0) 96.74%)",
                          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          WebkitMaskComposite: "xor",
                          maskComposite: "exclude",
                        }}
                      />
                      <div className='mb-4 text-sm sm:text-base'>
                        📅 {timeLeft.batchDateText}
                      </div>
                      <div className='grid grid-cols-4 gap-2 sm:gap-4'>
                        {[
                          { value: timeLeft.days, label: "Days" },
                          { value: timeLeft.hours, label: "Hours" },
                          { value: timeLeft.minutes, label: "Mins" },
                          { value: timeLeft.seconds, label: "Secs" },
                        ].map((item) => (
                          <div
                            key={item.label}
                            className="text-white w-full backdrop-blur-sm rounded px-2 sm:px-5 py-2 border border-transparent bg-[#FFFFFF0D] text-[10px] sm:text-sm transition-all duration-200 hover:bg-[#FFFFFF1A]"
                            style={{ backgroundClip: "padding-box", position: "relative" }}
                          >
                            <div
                              className="absolute inset-0 rounded pointer-events-none"
                              style={{
                                padding: "0.61px",
                                background: "linear-gradient(109.31deg, #FFFFFF 2.19%, rgba(255,255,255,0) 96.74%)",
                                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                              }}
                            />
                            <div className='space-y-1'>
                              <div className='font-bold text-sm sm:text-lg text-center'>{item.value}</div>
                              <div className='uppercase text-center text-[9px] sm:text-sm leading-none'>{item.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

              </div>

              {/* FOOTER */}
              <div className='w-full'>
                <hr className='w-full border-t border-[#4C4760] mt-10 lg:mt-20 mb-7' />
                <div className='flex flex-col sm:flex-row gap-5 sm:gap-0 sm:items-center sm:justify-between'>
                  <div>
                    {/* <div className='text-sm text-[#938F9F] line-through'>
                      {getCoursePrice(selectedCourse).oldPrice}
                    </div> */}
                    <div className='text-white font-bold text-3xl'>
                      {getCoursePrice(selectedCourse).price}
                    </div>
                  </div>
                  <SecondaryButton text='Enroll Now' href={`/courses/${selectedCourse.url_slug}`} />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='lg:col-span-7 lg:col-start-6 flex flex-col gap-6 lg:gap-7'>
            {coursesList
              .filter((course) => course.id !== selectedCourse.id)
              .slice(0, 3)
              .map((course) => {
                const isActive = coursesList.findIndex((c) => c.id === course.id) === selectedIndex;
                return (
                  <div
                    key={course.id}
                    onClick={() => handleCardClick(course)}
                    className={`
                      cursor-pointer
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_36px_rgba(101,87,227,0.22)]
                      rounded-2xl
                      ${isActive ? 'ring-2 ring-[#6557E3] shadow-[0_0_20px_rgba(101,87,227,0.3)]' : ''}
                    `}
                  >
                    <CourseCard
                      icon={getCourseIcon(course)}
                      category={getCourseCategory(course)}
                      categoryColor={getCourseCategoryColor(course)}
                      title={getCourseTitle(course)}
                      description={course.description || ""}
                      oldPrice={getCoursePrice(course).oldPrice}
                      price={getCoursePrice(course).price}
                      url={`/courses/${course.url_slug}`}
                    />
                  </div>
                );
              })}
          </div>

          {/* BOTTOM CARDS */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:col-span-12'>
            {coursesList
              .filter((course) => course.id !== selectedCourse.id)
              .slice(3)
              .map((course) => {
                const isActive = coursesList.findIndex((c) => c.id === course.id) === selectedIndex;
                return (
                  <div
                    key={course.id}
                    onClick={() => handleCardClick(course)}
                    className={`
                      cursor-pointer
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-[0_12px_36px_rgba(101,87,227,0.22)]
                      rounded-2xl
                      ${isActive ? 'ring-2 ring-[#6557E3] shadow-[0_0_20px_rgba(101,87,227,0.3)]' : ''}
                    `}
                  >
                    <CourseCard
                      icon={getCourseIcon(course)}
                      category={getCourseCategory(course)}
                      categoryColor={getCourseCategoryColor(course)}
                      title={getCourseTitle(course)}
                      description={course.description || ""}
                      oldPrice={getCoursePrice(course).oldPrice}
                      price={getCoursePrice(course).price}
                      url={`/courses/${course.url_slug}`}
                    />
                  </div>
                );
              })}
          </div>

        </div>

        <div className='flex items-center justify-center mt-14 sm:mt-20'>
          <SecondaryButton
            text='View All Courses'
            bgColor='#6557E3'
            shadowColor='#3A1078'
            borderColor='#6557E3'
            href="/courses"
          />
        </div>

      </div>

    </div>
  )
}

export default ExploreCoursesSection
