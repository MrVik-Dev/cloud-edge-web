import React from 'react';
import {getBlogs} from "@/app/(asgard)/asgard/blogs/actions";
import BlogContainer from "@/containers/web/BlogContainer";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Blog | Cloud Edge Solutions - IT Training, Career Tips & Technology Insights",
    description:
        "Explore the Cloud Edge Solutions blog for expert insights, career guidance, certification tips, and the latest trends in Salesforce, SAP, AWS, Data Science, Java, Power BI, AI, and emerging technologies.",
};


const Page = async () => {

    const blogs = await getBlogs(1, 4);

    return (
        <BlogContainer blogs={blogs} />
    );
};

export default Page;