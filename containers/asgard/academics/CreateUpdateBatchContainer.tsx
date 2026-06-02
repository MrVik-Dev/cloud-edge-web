"use client";

import React, { useState } from "react";

import { IBatches, ICourse } from "@/types";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { ArrowLeft, Check, ChevronsUpDown } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createBatch, updateBatch } from "@/app/(asgard)/asgard/academics/batches/actions";



interface ICreateUpdateBatchContainerProps {
  data?: IBatches;
  courses: ICourse[];
}

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


const modeOptions = [
  { value: "online", label: "Online" },
  { value: "offline", label: "Offline" },
  { value: "hybrid", label: "Hybrid" },
];

const CreateUpdateBatchContainer: React.FC<
  ICreateUpdateBatchContainerProps
> = ({ data, courses }) => {
  const [form, setForm] = useState<IBatches>({
    name: data?.name ?? "",
    description: data?.description ?? "",
    course_id: data?.course_id ?? "",
    class_days: data?.class_days ?? [],
    mode: data?.mode ?? "",
    max_students: data?.max_students,
    is_active: data?.is_active ?? true,
  });

  const [courseOpen, setCourseOpen] = useState(false);

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const selectedCourse = courses.find(
    (course) => course.id === form.course_id
  );

  const toggleDay = (day: string) => {
    setForm((prev) => ({
      ...prev,
      class_days: prev.class_days.includes(day)
        ? prev.class_days.filter(
          (d) => d !== day
        )
        : [...prev.class_days, day],
    }));
  };

  const validate = () => {
    if (!form.name.trim()) {
      toast.error(
        "Batch name is required"
      );
      return false;
    }

    if (!form.course_id) {
      toast.error(
        "Please select a course"
      );
      return false;
    }

    if (!form.mode) {
      toast.error(
        "Please select a mode"
      );
      return false;
    }

    if (
      form.class_days.length === 0
    ) {
      toast.error(
        "Please select at least one class day"
      );
      return false;
    }

    if (
      !form.max_students ||
      form.max_students <= 0
    ) {
      toast.error(
        "Maximum students must be greater than 0"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      if (data?.id) {
        await updateBatch({
          id: data.id,
          ...form,
        });

        toast.success(
          "Batch updated successfully"
        );
      } else {
        await createBatch(form);

        toast.success(
          "Batch created successfully"
        );
      }

      router.push(
        "/asgard/academics/batches"
      );

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" max-w-5xl p-6">
      <div className="mb-8">
        <Button
          type="button"
          variant="ghost"
          className="mb-4 "
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl font-bold tracking-tight">
          {data
            ? "Update Batch"
            : "Create Batch"}
        </h1>

        <p className="mt-1 text-muted-foreground">
          Manage batch schedules,
          students and course allocation.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Basic Info */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Basic Information
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Batch Name</Label>

              <Input
                className="h-11"
                placeholder="Morning Batch"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2 w-full">
              <Label>Course</Label>

              <Popover
                open={courseOpen}
                onOpenChange={setCourseOpen}
              >
                <PopoverTrigger className={"w-full"}>
                  <Button
                    variant="outline"
                    role="combobox"
                    className="h-11 w-full justify-between rounded-lg font-normal "
                  >
                    <span className="truncate text-left">
                      {selectedCourse?.name ??
                        "Select Course"}
                    </span>

                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className="w-[400px] p-0"
                  align="start"
                >
                  <Command>
                    <CommandInput placeholder="Search course..." />

                    <CommandEmpty>
                      No course found.
                    </CommandEmpty>

                    <CommandGroup className="max-h-64 overflow-y-auto">
                      {courses.map((course) => (
                        <CommandItem
                          key={course.id}
                          value={course.name}
                          onSelect={() => {
                            setForm({
                              ...form,
                              course_id: course.id ?? "",
                            });

                            setCourseOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              form.course_id ===
                                course.id
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />

                          <span className="truncate">
                            {course.name}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="mt-5">
            <Label>Description</Label>

            <Textarea
              className="mt-2 min-h-[110px]"
              placeholder="Batch description..."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description:
                    e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Schedule */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Schedule
          </h2>

          <div className="grid gap-4 lg:grid-cols-3">

            <div className="space-y-2">
              <Label>Mode</Label>

              <Select
                value={form.mode}
                onValueChange={(value) =>
                  setForm({
                    ...form,
                    mode: value ?? "",
                  })
                }
              >
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Select Mode">
                    {
                      modeOptions.find(
                        (m) => m.value === form.mode
                      )?.label
                    }
                  </SelectValue>
                </SelectTrigger>

                <SelectContent>
                  {modeOptions.map((mode) => (
                    <SelectItem
                      key={mode.value}
                      value={mode.value}
                    >
                      {mode.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-6">
            <Label>
              Weekly Schedule
            </Label>

            <div className="mt-3 flex flex-wrap gap-2">
              {days.map((day) => {
                const active =
                  form.class_days.includes(
                    day
                  );

                return (
                  <Button
                    key={day}
                    type="button"
                    variant={
                      active
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() =>
                      toggleDay(day)
                    }
                  >
                    {day.slice(0, 3)}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Capacity */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">
            Capacity & Settings
          </h2>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <Label>
                Maximum Students
              </Label>

              <Input
                className="h-11"
                type="number"
                value={form.max_students}
                onChange={(e) =>
                  setForm({
                    ...form,
                    max_students:
                      Number(
                        e.target.value
                      ),
                  })
                }
              />
            </div>

            <div className="flex items-center justify-between rounded-xl border p-4">
              <div>
                <p className="font-medium">
                  Active Batch
                </p>

                <p className="text-sm text-muted-foreground">
                  Students can enroll in
                  this batch.
                </p>
              </div>

              <Switch
                checked={form.is_active}
                onCheckedChange={(
                  checked
                ) =>
                  setForm({
                    ...form,
                    is_active: checked,
                  })
                }
              />
            </div>
          </div>
        </div>

        <Button
          size="lg"
          type="submit"
          disabled={loading}
          className="min-w-[180px]"
        >
          {loading
            ? data
              ? "Updating..."
              : "Creating..."
            : data
              ? "Update Batch"
              : "Create Batch"}
        </Button>
      </form>
    </div>
  );
};

export default CreateUpdateBatchContainer;