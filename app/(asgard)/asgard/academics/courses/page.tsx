import { getCourses } from './actions';
import CourseContainer from '@/containers/asgard/academics/CourseContainer';
import React from 'react';

const CoursesPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = Number(searchParams.page) || 1;
  const result = await getCourses(page, 10);

  return (
    <CourseContainer result={result} />
  );
};

export default CoursesPage;
