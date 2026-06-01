import { createClient } from "@/libs/supabase/client";

export async function deleteMedia(path: string) {
  const supabase = createClient();

  const { error } = await supabase.storage
    .from("media")
    .remove([path]);

  if (error) {
    throw error;
  }
}