"use client";

import React, {useMemo, useState} from "react";
import CourseCard from "@/components/ui/CourseCard";
import {getNearestBatch} from "@/components/sections/Home/ExploreCoursesSection";

interface CourseListingContainerProps {
    courses: any[];
}

const CourseListingContainer = ({
                                    courses,
                                }: CourseListingContainerProps) => {
    const [search, setSearch] = useState("");

    const filteredCourses = useMemo(() => {
        if (!search) return courses;

        return courses?.filter(
            (course) =>
                course.name?.toLowerCase().includes(search.toLowerCase()) ||
                course.description?.toLowerCase().includes(search.toLowerCase()) ||
                course.label?.toLowerCase().includes(search.toLowerCase())
        );
    }, [courses, search]);

    return (
        <section className="container mx-auto px-4 py-12 pt-24 md:pt-28 lg:pt-32">
            {/* Header */}
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-bricolage-grotesque">
                        Explore Courses
                    </h1>
                    <p className="text-muted-foreground mt-2">
                        Discover industry-ready programs to accelerate your career.
                    </p>
                </div>

                {/* Search */}
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="h-12 w-full md:w-[320px] rounded-xl border border-gray-200 px-4 outline-none focus:border-primary"
                />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => {


                    const nearestRegion = getNearestBatch(course);

                    const currencySymbol =
                        nearestRegion?.currency === "INR"
                            ? "₹"
                            : nearestRegion?.currency === "GBP"
                                ? "£"
                                : "$";

                    const price = nearestRegion
                        ? `${currencySymbol}${(
                            nearestRegion.discounted_price ||
                            nearestRegion.price
                        ).toLocaleString()}`
                        : "";

                        return (
                            <CourseCard
                                key={course.id}
                                icon={course.icon_media_url || "/images/course-placeholder.png"}
                                category={course.label || "Course"}
                                categoryColor="#632AA6"
                                title={course.name}
                                description={course.description}
                                price={price || ""}
                                url={`/courses/${course.url_slug}`}
                            />

                        )
                    }
                )}
            </div>

            {filteredCourses.length === 0 && (
                <div className="py-20 text-center">
                    <h3 className="text-xl font-semibold">No courses found</h3>
                    <p className="mt-2 text-muted-foreground">
                        Try searching with a different keyword.
                    </p>
                </div>
            )}
        </section>
    );
};

export default CourseListingContainer;