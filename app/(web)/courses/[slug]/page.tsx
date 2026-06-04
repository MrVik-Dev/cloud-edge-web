import { getCourseBySlug } from '@/app/(asgard)/asgard/academics/courses/actions';
import CourseDetailsContainer from '@/containers/web/CourseDetailsContainer';
import React from 'react'

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const courseData = await getCourseBySlug(slug);

  return (
    <CourseDetailsContainer data={courseData} />
  )
}

export default page