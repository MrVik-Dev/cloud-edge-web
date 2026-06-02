"use server"

import { createClient } from "@/libs/supabase/server";
import { IBatches } from "@/types";
import { revalidatePath } from "next/cache";

export async function getBatches(
  page = 1,
  pageSize = 10
) {
  const supabase = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("batches")
    .select(
      `
      *,
      courses (
        id,
        name
      )
    `,
      { count: "exact" }
    )
    .eq("is_deleted", false)
    .range(from, to)
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return {
    data,
    total: count ?? 0,
    page,
    pageSize,
    totalPages: Math.ceil(
      (count ?? 0) / pageSize
    ),
  };
}

export async function getBatchById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("batches")
    .select("*")
    .eq("id", id)
    .eq("is_deleted", false)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}


export async function createBatch(
  payload: IBatches
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batches")
    .insert({
      name: payload.name,
      description: payload.description,
      course_id: payload.course_id,
      class_days: payload.class_days,
      mode: payload.mode,
      max_students: payload.max_students,
      is_active: payload.is_active,
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batches");

  return {
    success: true,
  };
}

export async function updateBatch(
  payload: IBatches
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batches")
    .update({
      name: payload.name,
      description: payload.description,
      course_id: payload.course_id,
      class_days: payload.class_days,
      mode: payload.mode,
      max_students: payload.max_students,
      is_active: payload.is_active,
    })
    .eq("id", payload.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batches");

  return {
    success: true,
  };
}

export async function deleteBatch(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batches")
    .update({
      is_deleted: true,
      is_active: false,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batches");

  return {
    success: true,
  };
}