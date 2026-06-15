import BadgeLabel from '@/components/shared/BadgeLabel'
import React from 'react'
import devopsImg from "@/public/images/devops.png"
import salesforceImg from "@/public/images/salesforce.png"
import uiuxImg from "@/public/images/ui.png"
import aiImg from "@/public/images/ai.png"
import BlogCard from '@/components/ui/BlogCard'
import SecondaryButton from '@/components/ui/SecondaryButton'


const blogData = [
  {
    image: devopsImg,
    category: "DevOps",
    title: "How to Master DevOps Workflows",
    date: "April 11, 2026",
    categoryBgColor: "#FEEEF9",
    categoryTextColor: "#F232B2"
  },
  {
    image: salesforceImg,
    category: "Salesforce",
    title: "How to Master Salesforce Development",
    date: "April 11, 2026",
    categoryBgColor: "#EEEDFC",
    categoryTextColor: "#6557E3"
  },
  {
    image: uiuxImg,
    category: "UI / UX",
    title: "How to Master UI UX Design",
    date: "April 11, 2026",
    categoryBgColor: "#F8EDEB",
    categoryTextColor: "#B5493B"
  },
  {
    image: aiImg,
    category: "AI",
    title: "How to Master Artificial Intelligence",
    date: "April 11, 2026",
    categoryBgColor: "#E6EAF1",
    categoryTextColor: "#193D83"
  },
];



const NewsBlogSection = () => {
  return (
    <div className=' bg-[#F8F8FA] py-10 relative'>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#F232B2] blur-[300px]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#6557E3] blur-[300px]" />
      <div className=' container mx-auto'>
        <div className=' flex items-center justify-center flex-col'>
          <BadgeLabel label='News & Blogs' theme='light' />
          <div className="text-[#1D1F20] text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl">
            Our Latest Article Feed
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              date={blog.date}
              categoryBgColor={blog.categoryBgColor}
              categoryTextColor={blog.categoryTextColor}
            />
          ))}
        </div>

        <div className=' flex items-center justify-center mt-14 sm:mt-20'>
          <SecondaryButton text='View All Articles' bgColor='#6557E3' borderColor='#6557E3' shadowColor='#3A1078' href={"/courses"}/>
        </div>
      </div>
    </div>
  )
}

export default NewsBlogSection