import { getCourseById } from '../../actions';
import CreateUpdateCourseContainer from '@/containers/asgard/academics/CreateUpdateCourseContainer';
import React from 'react';
import { notFound } from 'next/navigation';

const UpdateCoursePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  try {
    const { id } = await params
    const course = await getCourseById(id);
    if (!course) {
      return notFound();
    }
    return (
      <CreateUpdateCourseContainer data={course} />
    );
  } catch (error) {
    return notFound();
  }
};

export default UpdateCoursePage;
