import React from 'react'
import BlogContainer from "@/containers/asgard/blogs/BlogContainer";
import {getBlogs} from "@/app/(asgard)/asgard/blogs/actions";
import {IBlogs} from "@/types";

const page = async () => {


  const blogs = (await  getBlogs()).data as IBlogs[];

  return (
      <BlogContainer results={blogs} />
  )
}

export default page