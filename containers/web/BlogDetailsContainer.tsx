"use client"
import { CalendarDays } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { FC, useRef, useState } from 'react'
import placeholder from "@/public/images/placeholder.jpg"
import {IBlogs} from "@/types";
import BadgeLabel from "@/components/shared/BadgeLabel";


interface IProps {
    blogData: IBlogs
}


const BlogDetailsContainer: FC<IProps> = ({ blogData }) => {

    return (
        <>
            <div className="bg-[#F4F4F4] pt-20 md:pt-28 xl:pt-36">
                <div className="flex justify-center items-center pb-16 xl:pb-28">
                    <BadgeLabel label="Blog Detail" theme="light" />
                </div>
            </div>
            <div className=' text-black md:-mt-14 xl:-mt-20'>
                <main className="container mx-auto flex justify-center px-3 sm:px-4 py-3 md:py-6">
                    <div className="w-full ">
                        {/* Hero */}
                        <div className="relative">
                            <div className=''>
                                <Image
                                    src={blogData.media_url ?? placeholder}
                                    alt={blogData.title ?? ""}
                                    width={1600}
                                    height={900}
                                    className="w-full h-[220px] sm:h-[260px] md:h-[400px] object-cover rounded-2xl"
                                    priority
                                />
                            </div>
                            {/* <div className="absolute inset-0 flex items-center justify-center px-4">
                                <div className="text-center text-white drop-shadow-md">
                                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                        Best Interior Design Course in Bangalore
                                    </h1>
                                    <p className="mt-1 text-sm sm:text-base">
                                        Live Projects | Tools Training | 100% Practical
                                    </p>
                                </div>
                            </div> */}
                        </div>

                        {/* Body */}
                        <div className="pb-10">
                            <div className="mt-6 flex gap-4">

                                <div className="flex-1">
                                    {/* Tag + date */}
                                    <div className="flex flex-wrap items-center justify-end gap-3">
                                        {/* <button className="px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                                            Interior Design
                                        </button> */}
                                        <div className="flex justify-start items-center mb-4">
                                            <CalendarDays size={18} className="text-darkGray" />
                                            <p className="flex items-center gap-1 text-[11px] md:text-sm text-[#6B7280] ">
                                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondtext-secondary" />
                                                {moment(blogData.created_at).format("MMMM DD, YYYY")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='text-4xl font-semibold'>
                                        {blogData.title}
                                    </div>
                                    <section className="">
                                        <div
                                            className="blog-detail mx-auto"
                                            // @ts-ignore
                                            dangerouslySetInnerHTML={{ __html: blogData.description }}
                                        />
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </>
    )
}

export default BlogDetailsContainer