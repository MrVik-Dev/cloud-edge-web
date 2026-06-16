import React from 'react';
import { Metadata } from 'next';
import BlogDetailsContainer from "@/containers/web/BlogDetailsContainer";
import { getBlogBySlug } from "@/app/(asgard)/asgard/blogs/actions";
import {IBlogs} from "@/types";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const { slug } = await params;
    const blog = await getBlogBySlug(slug) as IBlogs;

    if (!blog) {
        return {
            title: "Blog Not Found | Cloud Edge Solutions",
            description: "The requested blog article could not be found.",
        };
    }

    return {
        title: `${blog.title} | Cloud Edge Solutions`,
        description:
            blog.description ||
            blog.description ||
            `Read ${blog.title} on the Cloud Edge Solutions blog.`,
        openGraph: {
            title: blog.title,
            description:
                blog.description ||
                blog.description ||
                `Read ${blog.title} on the Cloud Edge Solutions blog.`,
            images: blog.media_url
                ? [
                    {
                        url: blog.media_url,
                        width: 1200,
                        height: 630,
                    },
                ]
                : [],
            type: "article",
        },
    };
}

const Page = async ({ params }: Props) => {
    const { slug } = await params;

    const blogData = await getBlogBySlug(slug);

    return <BlogDetailsContainer blogData={blogData} />;
};

export default Page;