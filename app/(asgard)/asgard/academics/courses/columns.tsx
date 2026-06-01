"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Course = {
  id: string;
  created_at: string;
  name: string | null;
  description: string | null;
  media_url: string | null;
  is_active: boolean | null;
  is_deleted: boolean | null;
};

export const courseColumns = (
  onEdit: (course: Course) => void,
  onDelete: (id: string) => void
): ColumnDef<Course>[] => [
  {
    accessorKey: "media_url",
    header: "Image",
    cell: ({ row }) =>
      row.original.media_url ? (
        <Image
          src={row.original.media_url}
          alt={row.original.name || "Course"}
          width={80}
          height={48}
          className="rounded-lg border object-cover"
        />
      ) : (
        <span className="text-muted-foreground text-sm">No Image</span>
      ),
  },
  {
    accessorKey: "name",
    header: "Course Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-xs truncate">
        {row.original.description || "-"}
      </div>
    ),
  },
  {
    accessorKey: "is_active",
    header: "Status",
    cell: ({ row }) => (
      <span
        className={`rounded-full px-2 py-1 text-xs font-medium ${
          row.original.is_active
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.original.is_active ? "Active" : "Inactive"}
      </span>
    ),
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