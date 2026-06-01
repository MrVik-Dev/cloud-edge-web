"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/libs/supabase/server";

export async function login(formData: FormData): Promise<void> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;


  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not found");
  }

  console.log("check user", user);

  const { data: admin } = await supabase
    .from("admins")
    .select("*")
    .eq("id", user.id)
    .single();

  console.log("admin", admin)

  if (admin) {
    redirect("/asgard/dashboard");
  }

  redirect("/");
}