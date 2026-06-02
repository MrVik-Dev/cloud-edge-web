import CreateUpdateBatchContainer from '@/containers/asgard/academics/CreateUpdateBatchContainer'
import React from 'react'
import { getCourses } from '../../courses/actions';
import { ICourse } from '@/types';

const page = async() => {
  const { data: courses } = await getCourses() as { data: ICourse[] };
  return (
    <CreateUpdateBatchContainer courses={courses} />
  )
}

export default page