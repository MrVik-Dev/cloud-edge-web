"use client"

import { deleteBatch } from '@/app/(asgard)/asgard/academics/batches/actions';
import { batchColumns } from '@/app/(asgard)/asgard/academics/batches/columns';
import { DataTable } from '@/app/(asgard)/data-table';
import { Button } from '@/components/ui/button';
import { IBatches } from '@/types'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';


interface IBatchContainer {
  result: IBatches[];
}

const BatchContainer: React.FC<IBatchContainer> = ({ result }) => {
  const router = useRouter();

  const handleEdit = (id?: string) => {
    if (!id) return;
    router.push(`/asgard/academics/batches/update/${id}`)
  }

  const tableData =
    result?.map((batch) => ({
      ...batch,
      course_name: batch.courses?.name,
    })) ?? [];

  const handleDelete = async (id: string) => {
    try {
      if (!confirm("Delete Batch?")) return;

      await deleteBatch(id);

      toast.success("Batch Deleted.")

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Batches
          </h1>
          <p className="text-sm text-muted-foreground">
            Create and manage course batches, schedules, enrollment capacity, and student allocations.
          </p>
        </div>

        <Button onClick={() => router.push("/asgard/academics/batches/create")}>
          Add Batch
        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={batchColumns(
            handleEdit,
            handleDelete
          )}
          data={tableData}
        />
      </div>
    </div>
  )
}

export default BatchContainer