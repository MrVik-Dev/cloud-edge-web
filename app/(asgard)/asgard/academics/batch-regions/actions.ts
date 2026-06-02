"use server";

import { createClient } from "@/libs/supabase/server";
import { IBatchRegion } from "@/types";
import { revalidatePath } from "next/cache";

export async function getBatchRegions(
  page = 1,
  pageSize = 10
) {
  const supabase = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("batch_regions")
    .select(
      `
      *,
      batches (
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

export async function getBatchRegionById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("batch_regions")
    .select("*")
    .eq("id", id)
    .eq("is_deleted", false)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function createBatchRegion(
  payload: IBatchRegion
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batch_regions")
    .insert({
      batch_id: payload.batch_id,
      country_code: payload.country_code,
      price: payload.price,
      currency: payload.currency,
      start_date: payload.start_date || null,
      timezone: payload.timezone || null,
      is_active: payload.is_active ?? true,
    });

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batch-regions");

  return {
    success: true,
  };
}

export async function updateBatchRegion(
  payload: IBatchRegion
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batch_regions")
    .update({
      batch_id: payload.batch_id,
      country_code: payload.country_code,
      price: payload.price,
      currency: payload.currency,
      start_date: payload.start_date || null,
      timezone: payload.timezone || null,
      is_active: payload.is_active ?? true,
    })
    .eq("id", payload.id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batch-regions");

  return {
    success: true,
  };
}

export async function deleteBatchRegion(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("batch_regions")
    .update({
      is_deleted: true,
      is_active: false,
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/asgard/academics/batch-regions");

  return {
    success: true,
  };
}

export async function getAllBatches() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("batches")
    .select("id, name")
    .eq("is_deleted", false)
    .order("name");

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}
