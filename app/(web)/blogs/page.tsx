import React from 'react';
import {getBlogs} from "@/app/(asgard)/asgard/blogs/actions";
import BlogContainer from "@/containers/web/BlogContainer";

const Page = async () => {

    const blogs = await getBlogs(1, 4);

    return (
        <BlogContainer blogs={blogs} />
    );
};

export default Page;