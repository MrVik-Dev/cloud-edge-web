"use client";

import { IBatches } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";


export interface IBatchTable extends IBatches {
  course_name?: string;
}
export const batchColumns = (
  onEdit: (id?: string) => void,
  onDelete: (id: string) => void
): ColumnDef<IBatchTable>[] => [
    {
      accessorKey: "name",
      header: "Batch Name",
    },

    {
      accessorKey: "course_name",
      header: "Course",
      cell: ({ row }) =>
        row.original.course_name || "-",
    },

    {
      accessorKey: "class_days",
      header: "Days",
      cell: ({ row }) => (
        <div className="max-w-[140px] truncate">
          {row.original.class_days.join(", ")}
        </div>
      ),
    },

    {
      accessorKey: "start_date",
      header: "Start Date",
      // cell: ({ row }) =>
      //   new Date(
      //     row.original.start_date
      //   ).toLocaleDateString(),
    },

    {
      accessorKey: "end_date",
      header: "End Date",
      // cell: ({ row }) =>
      //   new Date(
      //     row.original.end_date
      //   ).toLocaleDateString(),
    },

    {
      id: "max_students",
      header: "Max Students",
      cell: ({ row }) => (
        <span>
          {row.original.max_students ?? 0}
        </span>
      ),
    },

    {
      accessorKey: "mode",
      header: "Mode",
      cell: ({ row }) => (
        <span className="capitalize">
          {row.original.mode}
        </span>
      ),
    },

    {
      accessorKey: "status",
      header: "Status",
      // cell: ({ row }) => {
      //   const status =
      //     row.original.status ?? "upcoming";

      //   const styles = {
      //     upcoming:
      //       "bg-blue-100 text-blue-700",
      //     ongoing:
      //       "bg-green-100 text-green-700",
      //     completed:
      //       "bg-gray-100 text-gray-700",
      //     cancelled:
      //       "bg-red-100 text-red-700",
      //   };

      //   return (
      //     <span
      //       className={`rounded-full px-2 py-1 text-xs font-medium ${styles[
      //         status as keyof typeof styles
      //         ] ??
      //         "bg-gray-100 text-gray-700"
      //         }`}
      //     >
      //       {status}
      //     </span>
      //   );
      // },
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
          {row.original.is_active
            ? "Active"
            : "Inactive"}
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
            onClick={() =>
              row.original.id &&
              onDelete(row.original.id)
            }
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ),
    },
  ];