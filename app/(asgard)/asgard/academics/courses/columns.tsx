"use client";

import { ICourse } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const courseColumns = (
  onEdit: (id?: string) => void,
  onDelete: (id: string) => void
): ColumnDef<ICourse>[] => [
    {
      accessorKey: "name",
      header: "Course Name",
    },
    {
      accessorKey: "label",
      header: "Label",
      cell: ({ row }) => row.original.label || "-",
    },
    {
      accessorKey: "duration",
      header: "Duration (Weeks)",
      cell: ({ row }) => (
        <span>{row.original.duration ?? "-"}</span>
      ),
    },
    {
      accessorKey: "is_active",
      header: "Active",
      cell: ({ row }) => (
        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${row.original.is_active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
            }`}
        >
          {row.original.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <div className="flex justify-end gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onEdit(row.original?.id)}
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => row.original.id && onDelete(row.original.id)}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ),
    },
  ];