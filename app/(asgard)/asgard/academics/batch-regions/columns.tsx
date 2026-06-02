"use client";

import { IBatchRegion } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface IBatchRegionTable extends IBatchRegion {
  batch_name?: string;
}

const countryNames: Record<string, string> = {
  IN: "India",
  UK: "United Kingdom",
  US: "United States",
  CA: "Canada",
};

export const batchRegionColumns = (
  onEdit: (id?: string) => void,
  onDelete: (id: string) => void
): ColumnDef<IBatchRegionTable>[] => [
  {
    accessorKey: "batch_name",
    header: "Batch Name",
    cell: ({ row }) => row.original.batch_name || "-",
  },
  {
    accessorKey: "country_code",
    header: "Country",
    cell: ({ row }) => {
      const code = row.original.country_code;
      const name = countryNames[code] || code;
      return (
        <span className="font-medium">
          {name} ({code})
        </span>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = Number(row.original.price ?? 0);
      const currency = row.original.currency;
      return (
        <span className="font-semibold">
          {price.toFixed(2)} {currency}
        </span>
      );
    },
  },
  {
    accessorKey: "start_date",
    header: "Start Date",
    cell: ({ row }) => {
      const dateVal = row.original.start_date;
      if (!dateVal) return "-";
      try {
        return new Date(dateVal).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
      } catch {
        return dateVal;
      }
    },
  },
  {
    accessorKey: "timezone",
    header: "Timezone",
    cell: ({ row }) => row.original.timezone || "-",
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
            row.original.id && onDelete(row.original.id)
          }
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      </div>
    ),
  },
];
