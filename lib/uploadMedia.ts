import { createClient } from "@/libs/supabase/client";

type UploadMediaOptions = {
  file: File;
  folder?: string;
};

export async function uploadMedia({
  file,
  folder = "uploads",
}: UploadMediaOptions) {
  const supabase = createClient();

  const extension = file.name.split(".").pop();

  const fileName = `${Date.now()}-${crypto.randomUUID()}.${extension}`;

  const filePath = `${folder}/${fileName}`;

  const { error } = await supabase.storage
    .from("media")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from("media")
    .getPublicUrl(filePath);

  return {
    path: filePath,
    url: data.publicUrl,
    name: file.name,
    size: file.size,
    type: file.type,
  };
}