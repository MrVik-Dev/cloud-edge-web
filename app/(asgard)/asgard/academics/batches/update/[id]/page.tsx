import React from 'react'
import { getBatchById } from '../../actions';
import { getCourses } from '../../../courses/actions';
import { ICourse } from '@/types';
import CreateUpdateBatchContainer from '@/containers/asgard/academics/CreateUpdateBatchContainer';

const page = async({params}: {params: Promise<{id: string}>}) => {
  const { id } = await params;

  const batch = await getBatchById(id);
  const { data: courses } = await getCourses() as { data: ICourse[] };
  return (
    <CreateUpdateBatchContainer courses={courses} data={batch} />
  )
}

export default page