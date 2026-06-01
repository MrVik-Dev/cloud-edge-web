"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Banner = {
  id: string;
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  image_url: string;
  created_at: string;
};

export const bannerColumns = (
  onEdit: (banner: Banner) => void,
  onDelete: (id: string) => void
): ColumnDef<Banner>[] => [
  {
    accessorKey: "image_url",
    header: "Banner",
    cell: ({ row }) => (
      <Image
        src={row.original.image_url}
        alt={row.original.title}
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
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "btn_text",
    header: "Button",
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) =>
      new Date(row.original.created_at).toLocaleDateString(),
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
          onClick={() => onDelete(row.original.id)}
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    ),
  },
];