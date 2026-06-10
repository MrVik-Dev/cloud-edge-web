import React from 'react';
import Image from "next/image";
import aboutUsImage from "@/public/images/about-us.png"
import cap from "@/public/icons/cap.svg";
import calendarBlue from "@/public/icons/calendar-blue.svg";
import groupIcon from "@/public/icons/group.svg";
import calendarOrange from "@/public/icons/calendar-orange.svg";
import moment from "moment/moment";
import verified from "@/public/icons/verified.svg";
import star from "@/public/icons/star-gold.svg";
import enrolled from "@/public/icons/enrolled.png";
import whatsappIcon from "@/public/icons/whatsapp-white.svg";
import play from "@/public/icons/play.svg";
import check from "@/public/icons/check-blue.svg";

const AboutUsContainer = () => {
    return (
        <div
            className="min-h-[900px] pb-12 md:pb-0 bg-[#EFEEFC]" >

            <div className="container mx-auto px-4 sm:px-6 relative z-10">


                <div className="space-y-5 lg:space-y-6 order-1">

                    {/*<div className="bg-[#E3E1FA] rounded-2xl px-4 py-2 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-3">*/}
                    {/*    <Image src={cap} alt="cap" className="w-5 h-5" />*/}
                    {/*    {course.label}*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight lg:leading-14">*/}
                    {/*        Built for <span className={"text-[#3275FC]"}>Careers,</span> Not Just Certificates*/}
                    {/*    </h1>*/}
                    {/*</div>*/}

                    {/*<div>*/}
                    {/*    <p className="text-[#31373D] tracking-tight text-base sm:text-lg">*/}
                    {/*        {course.description}*/}
                    {/*    </p>*/}
                    {/*</div>*/}

                {/*    /!* Cards *!/*/}
                {/*    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">*/}

                {/*        <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px]">*/}
                {/*            <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">*/}
                {/*                <Image*/}
                {/*                    src={calendarBlue}*/}
                {/*                    alt="calendar"*/}
                {/*                    className="w-5 h-5"*/}
                {/*                />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">*/}
                {/*                    {course.duration} Weeks*/}
                {/*                </p>*/}

                {/*                <p className="text-sm font-semibold text-gray-900">*/}
                {/*                    Live Online*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px]">*/}
                {/*            <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">*/}
                {/*                <Image*/}
                {/*                    src={groupIcon}*/}
                {/*                    alt="group"*/}
                {/*                    className="w-5 h-5"*/}
                {/*                />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">*/}
                {/*                    BEGINNER -*/}
                {/*                </p>*/}

                {/*                <p className="text-sm font-semibold text-gray-900">*/}
                {/*                    Intermediate*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px]">*/}
                {/*            <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">*/}
                {/*                <Image*/}
                {/*                    src={calendarOrange}*/}
                {/*                    alt="calendar"*/}
                {/*                    className="w-5 h-5"*/}
                {/*                />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">*/}
                {/*                    Next batch*/}
                {/*                </p>*/}

                {/*                <p className="text-sm font-semibold text-gray-900">*/}
                {/*                    /!* @ts-ignore *!/*/}
                {/*                    {moment(course.nextBatch.start_date).format("DD MMM YYYY")}*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="bg-white p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px]">*/}
                {/*            <div className="bg-[#EFF6FF] p-3 rounded-lg w-fit">*/}
                {/*                <Image*/}
                {/*                    src={verified}*/}
                {/*                    alt="verified"*/}
                {/*                    className="w-5 h-5"*/}
                {/*                />*/}
                {/*            </div>*/}

                {/*            <div>*/}
                {/*                <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">*/}
                {/*                    ADM-201*/}
                {/*                </p>*/}

                {/*                <p className="text-sm font-semibold text-gray-900">*/}
                {/*                    Aligned*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* Stats *!/*/}
                {/*    <div className="flex flex-wrap items-center gap-3 lg:gap-4">*/}

                {/*        <div className="flex items-center gap-2">*/}
                {/*            <div className="flex items-center gap-1">*/}
                {/*                {[...Array(5)].map((_, index) => (*/}
                {/*                    <Image*/}
                {/*                        key={index}*/}
                {/*                        src={star}*/}
                {/*                        alt="star"*/}
                {/*                        className="w-3 h-3"*/}
                {/*                    />*/}
                {/*                ))}*/}
                {/*            </div>*/}

                {/*            <div className="font-bold text-sm">4.8</div>*/}

                {/*            <div className="text-[#94A3B8] text-sm">*/}
                {/*                (312 reviews)*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div className="flex items-center gap-1">*/}
                {/*            <Image*/}
                {/*                src={enrolled}*/}
                {/*                alt="enrolled"*/}
                {/*                className="w-7 h-4"*/}
                {/*            />*/}
                {/*            <span className="font-semibold text-sm">3,400+</span>*/}
                {/*            <span className="text-sm">enrolled</span>*/}
                {/*        </div>*/}

                {/*        <div className="flex items-center gap-2">*/}
                {/*            <div>🌍</div>*/}
                {/*            <span className="text-sm text-[#475569]">*/}
                {/*  India • UK • USA*/}
                {/*</span>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!* CTA Buttons *!/*/}
                {/*    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">*/}

                {/*        <button className="bg-[#4361EE] px-6 py-4 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto">*/}
                {/*            <Image*/}
                {/*                src={whatsappIcon}*/}
                {/*                alt="whatsapp"*/}
                {/*                className="w-5 h-5"*/}
                {/*            />*/}
                {/*            <div className="text-white font-semibold">*/}
                {/*                Enroll via WhatsApp*/}
                {/*            </div>*/}
                {/*        </button>*/}

                {/*        <button className="bg-white px-6 py-4 rounded-full flex items-center justify-center gap-2 border border-[#F3F4F6] w-full sm:w-auto">*/}
                {/*            <Image*/}
                {/*                src={play}*/}
                {/*                alt="play"*/}
                {/*                className="w-3 h-3"*/}
                {/*            />*/}
                {/*            <div className="text-black font-semibold">*/}
                {/*                Book a Free Demo*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*    </div>*/}

                {/*    /!* Features *!/*/}
                {/*    <div className="flex flex-wrap gap-x-6 lg:gap-x-8 gap-y-3 pt-2">*/}
                {/*        {course.features?.slice(0, 3).map((feature, index) => (*/}
                {/*            <div*/}
                {/*                key={index}*/}
                {/*                className="flex items-center gap-2"*/}
                {/*            >*/}
                {/*                <Image*/}
                {/*                    src={check}*/}
                {/*                    alt="check"*/}
                {/*                    className="w-4 h-4"*/}
                {/*                />*/}

                {/*                <span className="text-sm text-[#475569]">*/}
                {/*    {feature}*/}
                {/*  </span>*/}
                {/*            </div>*/}
                {/*        ))}*/}
                {/*    </div>*/}

                </div>


                <div className="relative flex justify-center lg:justify-end order-2">
                    <Image
                        src={aboutUsImage}
                        alt={"About Us"}
                        width={900}
                        height={700}
                        className="w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[700px] h-auto object-contain"
                        priority
                    />
                </div>

            </div>
        </div>
    );
};

export default AboutUsContainer;