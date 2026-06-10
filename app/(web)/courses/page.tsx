import React from 'react';
import CourseListingContainer from "@/containers/web/CourseListingContainer";
import {getCourses} from "@/app/(asgard)/asgard/academics/courses/actions";

const Page = async () => {

    const courses = await  getCourses();

    return (
        <CourseListingContainer courses={courses.data} />
    );
};

export default Page;