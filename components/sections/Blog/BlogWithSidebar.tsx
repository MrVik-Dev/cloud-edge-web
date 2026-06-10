// BlogWithSidebar.tsx
'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Loader2, Search } from "lucide-react";
import moment from "moment";
import placeholder from "@/public/images/placeholder.jpg"
import { useRouter } from "next/navigation";
import {IBlogs, IResponse} from "@/types";
import SecondaryButton from "@/components/ui/SecondaryButton";

interface IProps {
    blogs: IResponse
}

const BlogWithSidebar: React.FC<IProps> = ({ blogs: blogData }) => {

    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [blogList, setBlogList] = useState<IResponse>(blogData);
    const totalPages = blogList?.total || 0;
    const router = useRouter()

    console.log('firstBlogList', blogList)

    // const fetchBlogs = async (page: number, limit: number, search?: string) => {
    //     try {
    //         setLoading(true);
    //         const resp = await sharedStore.fetchBlogs(page, limit, search);
    //         if (resp.success) {
    //             setBlogList(resp.data);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const truncateHTML = (html: any, limit = 200) => {
        const text = html.replace(/<[^>]*>/g, ""); // remove tags
        return text.length > limit
            ? text.slice(0, limit) + "..."
            : text;
    };

    // const renderPaginationNumbers = () => {
    //     return generatePaginationNumbers(currentPage, totalAssets);
    // };


    const onPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            // fetchBlogs(currentPage - 1, 4)
        }
    };

    const onNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            // fetchBlogs(currentPage + 1, 4)
        }
    };

    const onPage = (page: number) => {
        if (page !== currentPage) {
            setCurrentPage(page);
            // fetchBlogs(page, 4, search)
        }
    };

    const getPages = () => {
        const pages: (number | string)[] = []

        if (totalPages <= 5) {
            // show all if pages are small
            for (let i = 1; i <= totalPages; i++) pages.push(i)
            return pages
        }

        pages.push(1) // first page

        if (currentPage > 3) pages.push("...")

        const start = Math.max(2, currentPage - 1)
        const end = Math.min(totalPages - 1, currentPage + 1)

        for (let i = start; i <= end; i++) {
            pages.push(i)
        }

        if (currentPage < totalPages - 2) pages.push("...")

        pages.push(totalPages) // last page

        return pages
    }

    // const debouncedSearch = React.useMemo(
    //     () =>
    //         debounce((value: string) => {
    //             setCurrentPage(1);
    //             fetchBlogs(1, 4, value);
    //         }, 500),
    //     []
    // );
    // useEffect(() => {
    //     return () => {
    //         debouncedSearch.cancel();
    //     };
    // }, [debouncedSearch]);
    //
    // const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const value = e.target.value;
    //     setSearch(value);
    //     debouncedSearch(value);
    // };

    return (
        <section className="w-full py-6 md:py-10">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)] gap-6 lg:gap-8">
                {/* Left column: main posts */}

                <div className="space-y-8 relative">

                    {loading && (
                        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex justify-center items-center z-10">
                            <Loader2 className="h-10 w-10 animate-spin text-secondary" />
                        </div>
                    )}

                    {!loading && blogList?.data?.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-xl font-semibold text-gray-700">
                                No Articles Found
                            </h3>
                            <p className="text-gray-500 mt-2">
                                Try searching with a different keyword.
                            </p>
                        </div>
                    )}

                    {!loading && blogList.data && blogList.data.map((post) => (
                        <article
                            key={post.id}
                            className="bg-[#FFFFFF] border border-gray-200 rounded-4xl"
                        >
                            {/* Top banner image */}
                            <div onClick={() => router.push(`/blogs/${post.url_slug}`)} className="cursor-pointer rounded-4xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] overflow-hidden relative w-full h-[220px] md:h-[280px] lg:h-[450px]">

                                <Image
                                    src={post.media_url ?? placeholder}
                                    alt={post.media_alt}
                                    fill
                                    className="object-cover overflow-hidden rounded-4xl"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 65vw, 700px"
                                />
                            </div>

                            {/* Content */}
                            <div className="px-5 md:px-6 lg:px-5 pt-4 pb-6">
                                {/* Date */}
                                <div className="flex justify-start items-center mb-4">
                                    <CalendarDays size={18} className="text-darkGray" />
                                    <p className="flex items-center gap-1 text-[11px] md:text-sm text-[#6B7280] ">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondtext-secondary" />
                                        {moment(post.created_at).format("MMMM DD, YYYY")}
                                    </p>
                                </div>

                                {/* Title */}
                                <h2 onClick={() => router.push(`/blogs/${post.url_slug}`)} className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-2 cursor-pointer ">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <div className="text-xs md:text-sm leading-relaxed text-darkGray mb-4" dangerouslySetInnerHTML={{
                                    __html: truncateHTML(post.description, 200),
                                }} />

                                {/* Read more button */}
                                {/*<WebPrimaryButton*/}
                                {/*    href={`/blogs/${post.url_slug}`}*/}
                                {/*    label="Read More"*/}
                                {/*    className="bg-secondary px-4 py-2 text-white gap-2 rounded-full hover:scale-[1.05]"*/}
                                {/*    src={rightArrow}*/}
                                {/*    imgClassName="h-4 w-4"*/}
                                {/*/>*/}
                                <SecondaryButton text={"Read More"} href={`/blogs/${post.url_slug}`} />
                            </div>
                        </article>
                    ))}
                    <div className="mt-4 md:mt-8 lg:mt-16">
                        {!loading && blogList?.data?.length > 0 && totalPages > 1 && (
                            <div className="flex items-center justify-center gap-4 py-12">

                                {/* LEFT ARROW */}
                                <button
                                    onClick={onPreviousPage}
                                    disabled={loading || currentPage === 1}
                                    className="w-12 h-12 rounded-full border border-gray-200
        flex items-center justify-center
        disabled:opacity-40 hover:bg-gray-200 transition"
                                >
                                    <ChevronLeft size={20} color="black" />
                                </button>

                                {/* PAGES */}
                                {getPages().map((page, index) =>
                                    page === "..." ? (
                                        <div
                                            key={index}
                                            className="w-12 h-12 rounded-full border border-gray-200
            flex items-center justify-center text-xl text-gray-600"
                                        >
                                            …
                                        </div>
                                    ) : (
                                        <button
                                            key={index}
                                            onClick={() => onPage(page as number)}
                                            className={`w-12 h-12 rounded-full font-semibold transition
              ${currentPage === page
                                                ? "bg-[#F5B841] text-white"
                                                : "border border-gray-200 text-gray-800 hover:bg-gray-100"
                                            }`}
                                        >
                                            {String(page).padStart(2, "0")}
                                        </button>
                                    )
                                )}

                                {/* RIGHT ARROW */}
                                <button
                                    onClick={onNextPage}
                                    disabled={currentPage === totalPages}
                                    className="w-12 h-12 rounded-full border border-gray-200
        flex items-center justify-center
        disabled:opacity-40 hover:bg-gray-200 transition"
                                >
                                    <ChevronRight size={20} color="black" />
                                </button>
                            </div>
                        )}
                    </div>

                </div>

                {/* Right column: sidebar */}
                <aside className="space-y-5 lg:space-y-6">
                    {/* Search */}
                    {/*<div className="bg-[#FFFFFF] border border-gray-100 rounded-xl shadow-[0_18px_32px_rgba(15,23,42,0.05)] px-5 py-4">*/}
                    {/*    <h3 className="text-sm md:text-base font-bold text-black mb-3">*/}
                    {/*        Search*/}
                    {/*    </h3>*/}
                    {/*</div>*/}

                    {/* Related posts */}
                    {/* <div className="bg-[#FFFFFF] border border-gray-100 rounded-xl shadow-[0_18px_32px_rgba(15,23,42,0.05)] px-5 py-4">
                        <h3 className="text-sm md:text-base font-bold text-black mb-3">
                            Related Posts
                        </h3>
                        <div className="space-y-3">
                            {relatedPosts.map((post) => (
                                <div key={post.id} className="flex gap-3">
                                    <div className="relative flex-shrink-0 w-[64px] h-[54px] rounded-[10px] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-[10px] text-[#9CA3AF] mb-0.5">
                                            {post.date}
                                        </p>
                                        <p className="text-[11px] leading-snug text-[#111827] line-clamp-2">
                                            {post.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Categories */}
                    {/* <div className="bg-[#FFFFFF] border border-gray-100 rounded-xl shadow-[0_18px_32px_rgba(15,23,42,0.05)] px-5 py-4">
                        <h3 className="text-sm md:text-base font-bold text-[#111827] mb-3">
                            Categories
                        </h3>
                        <ul className="space-y-2 text-xs md:text-sm">
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className="flex items-center justify-between text-darkGray"
                                >
                                    <span>{cat}</span>
                                    <span className="text-secondary">›</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* CTA card */}
                    <div className="sticky top-24">
                        <div className="bg-[#F7F6F9] rounded-2xl shadow-[0_18px_32px_rgba(15,23,42,0.05)] px-5 py-6 text-center">
                            <p className="text-md font-semibold uppercase tracking-wide text-secondary mb-2">
                                Contact Eduleem
                            </p>
                            <h3 className="text-base md:text-3xl font-bold text-[#111827] mb-2">
                                Start Your Journey
                                <br />
                                with Expert Guidance
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-darkGray mb-4 capitalize">
                                Connect with our experts to explore courses, admissions, and career opportunities.
                            </p>
                            <div className="flex justify-center items-center">
                                {/*<WebPrimaryButton*/}
                                {/*    label="Get In Touch"*/}
                                {/*    className="bg-black px-6 py-3 text-white gap-2 rounded-full hover:scale-[1.05]"*/}
                                {/*    src={rightArrow}*/}
                                {/*    href="/contact-us"*/}
                                {/*/>*/}
                                <SecondaryButton text={"Get In Touch"} bgColor={"#6557E3"} shadowColor={"#3A1078"}  href={"/contact-us"}/>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default BlogWithSidebar;