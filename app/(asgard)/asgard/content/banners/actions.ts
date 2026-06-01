"use server";

import { createClient } from "@/libs/supabase/server";
import { revalidatePath } from "next/cache";

export async function getBanners(page = 1, pageSize = 10) {

  const supabase = await createClient();

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const {
    data,
    count,
    error,
  } = await supabase
    .from("banners")
    .select("*", { count: "exact" })
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return {
    data,
    total: count ?? 0,
    page,
    pageSize,
    totalPages: Math.ceil((count ?? 0) / pageSize),
  };
}


export async function createBanner(
  values: any,
  file: File | null
) {
  const supabase = await createClient();

  let image_url = "";

  if (file) {
    const ext =
      file.name.split(".").pop();

    const fileName =
      `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const filePath =
      `banners/${fileName}`;

    const arrayBuffer =
      await file.arrayBuffer();

    const { error: uploadError } =
      await supabase.storage
        .from("media")
        .upload(
          filePath,
          Buffer.from(arrayBuffer),
          {
            contentType: file.type,
          }
        );

    if (uploadError)
      throw uploadError;

    const { data } =
      supabase.storage
        .from("media")
        .getPublicUrl(filePath);

    image_url = data.publicUrl;
  }

  const { error } = await supabase
    .from("banners")
    .insert({
      ...values,
      image_url,
    });

  if (error) throw error;

  revalidatePath(
    "/asgard/content/banners"
  );
}

export async function updateBanner(
  id: string,
  values: any,
  file: File | null
) {
  const supabase = await createClient();

  let payload = {
    ...values,
  };

  if (file) {
    const ext =
      file.name.split(".").pop();

    const fileName =
      `${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const filePath =
      `banners/${fileName}`;

    const arrayBuffer =
      await file.arrayBuffer();

    const { error: uploadError } =
      await supabase.storage
        .from("media")
        .upload(
          filePath,
          Buffer.from(arrayBuffer),
          {
            contentType: file.type,
          }
        );

    if (uploadError)
      throw uploadError;

    const { data } =
      supabase.storage
        .from("media")
        .getPublicUrl(filePath);

    payload = {
      ...payload,
      image_url: data.publicUrl,
    };
  }

  const { error } = await supabase
    .from("banners")
    .update(payload)
    .eq("id", id);

  if (error) throw error;

  revalidatePath(
    "/asgard/content/banners"
  );
}

export async function deleteBanner(id: string) {
  const supabase = await createClient();

  // Get banner image
  const { data: banner, error: fetchError } = await supabase
    .from("banners")
    .select("image_url")
    .eq("id", id)
    .single();

  if (fetchError) {
    throw fetchError;
  }

  // Delete image from storage
  if (banner?.image_url) {
    const path = banner.image_url.split("/media/")[1];

    if (path) {
      const { error: storageError } = await supabase.storage
        .from("media")
        .remove([path]);

      if (storageError) {
        throw storageError;
      }
    }
  }

  // Delete banner record
  const { error } = await supabase
    .from("banners")
    .delete()
    .eq("id", id);

  if (error) {
    throw error;
  }

  revalidatePath("/asgard/content/banners");
}