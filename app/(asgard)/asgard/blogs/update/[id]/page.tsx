import React from 'react';
import {getBlogById} from "@/app/(asgard)/asgard/blogs/actions";
import CreateUpdateBlogContainer from "@/containers/asgard/blogs/CreateUpdateBlogContainer";

const Page = async ({params}: {params: Promise<{id: string}>}) => {

    const { id } = await  params;

    const blog =  await getBlogById(id);

    return (
        <div>
            <CreateUpdateBlogContainer data={blog} />
        </div>
    );
};

export default Page;