"use client";

import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IBatchRegion } from "@/types";
import { DataTable } from "@/app/(asgard)/data-table";
import { Button } from "@/components/ui/button";
import { deleteBatchRegion } from "@/app/(asgard)/asgard/academics/batch-regions/actions";
import { batchRegionColumns } from "@/app/(asgard)/asgard/academics/batch-regions/columns";

interface IBatchRegionContainerProps {
  result: IBatchRegion[];
}

const BatchRegionContainer: React.FC<IBatchRegionContainerProps> = ({
  result,
}) => {
  const router = useRouter();

  const handleEdit = (id?: string) => {
    if (!id) return;
    router.push(`/asgard/academics/batch-regions/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      if (!confirm("Delete Batch Region?")) return;

      await deleteBatchRegion(id);
      toast.success("Batch Region Deleted.");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete Batch Region.");
    }
  };

  const tableData =
    result?.map((region) => ({
      ...region,
      batch_name: region.batches?.name,
    })) ?? [];

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Batch Regions
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage pricing, currency, timeline, and timezone settings for batches across different countries.
          </p>
        </div>

        <Button
          onClick={() => router.push("/asgard/academics/batch-regions/create")}
        >
          Add Batch Region
        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={batchRegionColumns(handleEdit, handleDelete)}
          data={tableData}
        />
      </div>
    </div>
  );
};

export default BatchRegionContainer;
