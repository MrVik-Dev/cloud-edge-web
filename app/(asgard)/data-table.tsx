"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  minRows?: number; // how many empty rows to pad to
}

export function DataTable<TData, TValue>({
  columns,
  data,
  minRows = 8,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getRowModel().rows;
  const paddingRows = Math.max(0, minRows - rows.length);

  return (
    <div className="flex flex-col min-h-[520px] rounded-xl border border-border/40 overflow-hidden bg-background">

      {/* Table */}
      <div className="flex-1 overflow-x-auto">
        <Table className="border-collapse w-full h-full">

          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-border/40 hover:bg-transparent"
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-10 px-5 text-[11px] font-medium uppercase tracking-widest text-muted-foreground/50 bg-muted/20 select-none"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {rows.length ? (
              <>
                {/* Data rows */}
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    className="group border-b border-border/30 last:border-none transition-colors duration-150 hover:bg-muted/30 data-[state=selected]:bg-muted/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        className="px-5 py-3.5 text-sm text-foreground/75 align-middle transition-colors duration-150 group-hover:text-foreground"
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}

                {/* Ghost rows to fill height */}
                {Array.from({ length: paddingRows }).map((_, i) => (
                  <TableRow
                    key={`ghost-${i}`}
                    className="border-b border-border/20 last:border-none hover:bg-transparent"
                  >
                    {columns.map((_, j) => (
                      <TableCell key={j} className="px-5 py-3.5">
                        <span className="invisible">—</span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            ) : (
              <>
                {/* Empty state row */}
                <TableRow className="hover:bg-transparent border-none">
                  <TableCell colSpan={columns.length} className="h-52 text-center">
                    <div className="mx-auto flex max-w-xs flex-col items-center justify-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/40 bg-muted/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-muted-foreground/60"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">No data found yet</p>
                        <p className="mt-0.5 text-xs text-muted-foreground/70">
                          Add a data to get started.
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>

                {/* Ghost rows below empty state */}
                {Array.from({ length: minRows - 1 }).map((_, i) => (
                  <TableRow
                    key={`empty-ghost-${i}`}
                    className="border-b border-border/20 last:border-none hover:bg-transparent"
                  >
                    {columns.map((_, j) => (
                      <TableCell key={j} className="px-5 py-3.5">
                        <span className="invisible">—</span>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border/30 bg-muted/10 px-5 py-2.5">
        <span className="text-xs text-muted-foreground/50">
          {rows.length} {rows.length === 1 ? "result" : "results"}
        </span>
        <div className="flex items-center gap-1.5">
          <button className="rounded-md border border-border/30 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground">
            Previous
          </button>
          <button className="rounded-md border border-border/30 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}