import React from 'react';
import {IBlogs, IResponse} from "@/types";
import BadgeLabel from "@/components/shared/BadgeLabel";
import BlogWithSidebar from "@/components/sections/Blog/BlogWithSidebar";


interface IBlogContainerProps {
    blogs: IResponse;
}

const BlogContainer: React.FC<IBlogContainerProps> = ({blogs}) => {
    return (
        <div className={""}>
            <div className="relative overflow-hidden bg-[#F4F4F4] py-12 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-40">
                    <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-100 blur-3xl" />
                </div>

                <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
                    <BadgeLabel label="Our Articles" theme="light" />

                    <h1 className="mt-6 max-w-4xl font-bricolage-grotesque font-bold tracking-tight text-[#1D1F20] leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        Education & Career
                        <span className="block text-[#632AA6]">Insights</span>
                    </h1>

                    <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-[#667085] leading-relaxed">
                        Explore expert guidance, industry trends, career advice, and learning
                        resources to help you grow professionally and achieve your goals.
                    </p>
                </div>
            </div>

            <div className='bg-white'>
                <div className='container mx-auto'>
                    <BlogWithSidebar blogs={blogs}  />
                </div>
            </div>
        </div>
    );
};

export default BlogContainer;