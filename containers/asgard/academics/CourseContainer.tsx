"use client"
import { courseColumns } from '@/app/(asgard)/asgard/academics/courses/columns';
import { DataTable } from '@/app/(asgard)/data-table';
import { Button } from '@/components/ui/button';
import React from 'react'


interface ICourseContainerProps {
  result: any
}

const CourseContainer: React.FC<ICourseContainerProps> = ({ result }) => {
  const handleEdit = () => {
  };

  const handleAdd = () => {
  };

  const handleDelete = async () => {
  };

  const handleSubmit = async (
    values: any,
    file: File | null
  ) => {
  };


  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Courses
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage Courses.
          </p>
        </div>

        <Button onClick={handleAdd}>
          Add Course
        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={courseColumns(
            handleEdit,
            handleDelete
          )}
          data={result.data}
        />
      </div>

      {/* <AddEditBannerModal
        open={open}
        onOpenChange={setOpen}
        banner={selectedBanner}
        onSubmit={handleSubmit}
      /> */}
    </div>
  )
}

export default CourseContainer