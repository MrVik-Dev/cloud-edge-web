import CourseContainer from '@/containers/asgard/academics/CourseContainer'
import React from 'react'
import { getCourses } from './actions';


type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Page({
  searchParams,
}: Props) {
  const params = await searchParams;

  const currentPage = Number(params.page ?? "1");

  const result = await getCourses(currentPage);
  return (
    <CourseContainer result={result} />
  )
}

