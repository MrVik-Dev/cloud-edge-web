"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {IBlogs} from "@/types";


export const blogColumnns = (
    onEdit: (blog: IBlogs) => void,
    onDelete: (blog: IBlogs) => void
): ColumnDef<IBlogs>[] => [
    {
        accessorKey: "cover_image_url",
        header: "Media",
        cell: ({ row }) => (
            <Image
                src={row.original.cover_image_url || row.original.media_url || "/images/blog-placeholder.png"}
                alt={row.original.title ?? ""}
                width={80}
                height={48}
                className="rounded-lg border object-cover"
            />
        ),
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        id: "actions",
        header: "",
        cell: ({ row }) => (
            <div className="flex justify-end gap-2">
                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onEdit(row.original)}
                >
                    <Pencil className="h-4 w-4" />
                </Button>

                <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => onDelete(row.original)}
                >
                    <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
            </div>
        ),
    },
];