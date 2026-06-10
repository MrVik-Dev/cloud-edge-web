"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/(asgard)/data-table";

import { IBlogs } from "@/types";
import { blogColumnns } from "@/app/(asgard)/asgard/blogs/columns";
import { deleteBlog } from "@/app/(asgard)/asgard/blogs/actions";

interface IBlogContainerProps {
    results: IBlogs[];
}

const BlogContainer: React.FC<IBlogContainerProps> = ({
                                                          results,
                                                      }) => {
    const router = useRouter();

    const handleEdit = (blog: IBlogs) => {
        router.push(
            `/asgard/blogs/update/${blog.id}`
        );
    };

    const handleDelete = async (
        blog: IBlogs
    ) => {
        const confirmed =
            window.confirm(
                `Delete "${blog.title}"?`
            );

        if (!confirmed) return;

        try {
            await deleteBlog(blog.id ?? "");

            toast.success(
                "Blog deleted successfully"
            );

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to delete blog"
            );
        }
    };

    return (
        <div className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-semibold tracking-tight">
                        Blogs
                    </h1>

                    <p className="text-sm text-muted-foreground">
                        Create, manage, and publish
                        blog posts, update content,
                        and organize articles for
                        your audience.
                    </p>
                </div>

                <Button
                    onClick={() =>
                        router.push(
                            "/asgard/blogs/create"
                        )
                    }
                >
                    Add Blog
                </Button>
            </div>

            <div className="rounded-2xl border bg-card shadow-sm">
                <DataTable
                    columns={blogColumnns(
                        handleEdit,
                        handleDelete
                    )}
                    data={results}
                />
            </div>
        </div>
    );
};

export default BlogContainer;