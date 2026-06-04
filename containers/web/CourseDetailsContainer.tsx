import CourseHeroSection from '@/components/sections/Course/CourseHeroSection';
import { ICourse } from '@/types'
import React from 'react'


interface ICourseDetailsContainer {
  data: ICourse;
}

const CourseDetailsContainer: React.FC<ICourseDetailsContainer> = ({data}) => {
  return (
    <div>
      <CourseHeroSection course={data} />
    </div>
  )
}

export default CourseDetailsContainer