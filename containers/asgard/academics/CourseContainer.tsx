"use client"

import { deleteCourse } from '@/app/(asgard)/asgard/academics/courses/actions';
import { courseColumns } from '@/app/(asgard)/asgard/academics/courses/columns';
import { DataTable } from '@/app/(asgard)/data-table';
import { Button } from '@/components/ui/button';
import { ICourse } from '@/types'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

interface ICourseContainerProps {
  result: {
    data: ICourse[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }
}

const CourseContainer: React.FC<ICourseContainerProps> = ({ result }) => {
  const router = useRouter();

  const handleEdit = (id?: string) => {
    if (!id) return;
    router.push(`/asgard/academics/courses/update/${id}`)
  }

  const handleAdd = () => {
    router.push("/asgard/academics/courses/create")
  }

  const handleDelete = async (id: string) => {
    try {
      if (!confirm("Delete Course?")) return;
      await deleteCourse(id);
      toast.success("Course Deleted.")
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete course.");
    }
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Courses
          </h1>
          <p className="text-sm text-muted-foreground">
            Create, organize, and manage courses with structured content, pricing, and batch assignments.
          </p>
        </div>

        <Button onClick={handleAdd}>
          Add Course
        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={courseColumns(handleEdit, handleDelete)}
          data={result?.data || []}
        />
      </div>
    </div>
  )
}

export default CourseContainer