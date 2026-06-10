import React from 'react';
import BlogContainer from "@/containers/web/BlogContainer";
import BlogDetailsContainer from "@/containers/web/BlogDetailsContainer";
import {getBlogById, getBlogBySlug} from "@/app/(asgard)/asgard/blogs/actions";

const Page = async ({params}: { params: Promise<{ slug: string }> }) => {

    const {slug} = await params;

    const blogData = await getBlogBySlug(slug);

    return (
        <BlogDetailsContainer blogData={blogData}/>
    );
};

export default Page;