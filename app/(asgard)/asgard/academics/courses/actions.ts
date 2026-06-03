"use server"

import { createClient } from "@/libs/supabase/server";
import { ICourse, ICourseModule, ICourseTool, ICourseHighlight, ICourseFAQ } from "@/types";
import { revalidatePath } from "next/cache";

export async function getCourses(page = 1, pageSize = 10) {
  const supabase = await createClient();
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("courses")
    .select("*", { count: "exact" })
    .eq("is_deleted", false)
    .range(from, to)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return {
    data,
    total: count ?? 0,
    page,
    pageSize,
    totalPages: Math.ceil((count ?? 0) / pageSize),
  };
}

export async function getCourseById(id: string) {
  const supabase = await createClient();

  // Fetch the course and its related entities
  const { data: course, error: courseError } = await supabase
    .from("courses")
    .select("*")
    .eq("id", id)
    .eq("is_deleted", false)
    .single();

  if (courseError) throw new Error(courseError.message);

  const { data: modules } = await supabase.from("course_modules").select("*").eq("course_id", id).order("display_order");
  const { data: tools } = await supabase.from("course_tools").select("*").eq("course_id", id).order("display_order");
  const { data: highlights } = await supabase.from("course_highlights").select("*").eq("course_id", id).order("display_order");
  const { data: faqs } = await supabase.from("course_faqs").select("*").eq("course_id", id).order("display_order");

  return {
    ...course,
    modules: modules || [],
    tools: tools || [],
    highlights: highlights || [],
    faqs: faqs || [],
  };
}

export async function createCourse(
  payload: ICourse & {
    modules: ICourseModule[];
    tools: ICourseTool[];
    highlights: ICourseHighlight[];
    faqs: ICourseFAQ[];
  }
) {
  const supabase = await createClient();
  const { modules, tools, highlights, faqs, ...courseData } = payload;

  const { data: course, error } = await supabase
    .from("courses")
    .insert({
      name: courseData.name,
      label: courseData.label,
      description: courseData.description,
      overview: courseData.overview,
      media_url: courseData.media_url,
      icon_media_url: courseData.icon_media_url,
      duration: courseData.duration,
      outcomes: courseData.outcomes,
      features: courseData.features,
      tags: courseData.tags,
      in_avg_salary: courseData.in_avg_salary,
      uk_avg_salary: courseData.uk_avg_salary,
      us_avg_salary: courseData.us_avg_salary,
      ca_avg_salary: courseData.ca_avg_salary,
      is_active: courseData.is_active,
    })
    .select()
    .single();

  if (error) throw new Error(error.message);

  const courseId = course.id;

  if (modules?.length) {
    const { error: modErr } = await supabase.from("course_modules").insert(
      modules.map(({ id, course_id, ...rest }) => ({ ...rest, course_id: courseId }))
    );
    if (modErr) throw new Error(modErr.message);
  }
  if (tools?.length) {
    const { error: toolErr } = await supabase.from("course_tools").insert(
      tools.map(({ id, course_id, ...rest }) => ({ ...rest, course_id: courseId }))
    );
    if (toolErr) throw new Error(toolErr.message);
  }
  if (highlights?.length) {
    const { error: hlErr } = await supabase.from("course_highlights").insert(
      highlights.map(({ id, course_id, ...rest }) => ({ ...rest, course_id: courseId }))
    );
    if (hlErr) throw new Error(hlErr.message);
  }
  if (faqs?.length) {
    const { error: faqErr } = await supabase.from("course_faqs").insert(
      faqs.map(({ id, course_id, ...rest }) => ({ ...rest, course_id: courseId }))
    );
    if (faqErr) throw new Error(faqErr.message);
  }

  revalidatePath("/asgard/academics/courses");
  return { success: true };
}

export async function updateCourse(
  payload: ICourse & {
    id: string;
    modules: ICourseModule[];
    tools: ICourseTool[];
    highlights: ICourseHighlight[];
    faqs: ICourseFAQ[];
  }
) {
  const supabase = await createClient();
  const { id, modules, tools, highlights, faqs, ...courseData } = payload;

  const { error } = await supabase
    .from("courses")
    .update({
      name: courseData.name,
      label: courseData.label,
      description: courseData.description,
      overview: courseData.overview,
      media_url: courseData.media_url,
      icon_media_url: courseData.icon_media_url,
      duration: courseData.duration,
      outcomes: courseData.outcomes,
      features: courseData.features,
      tags: courseData.tags,
      in_avg_salary: courseData.in_avg_salary,
      uk_avg_salary: courseData.uk_avg_salary,
      us_avg_salary: courseData.us_avg_salary,
      ca_avg_salary: courseData.ca_avg_salary,
      is_active: courseData.is_active,
    })
    .eq("id", id);

  if (error) throw new Error(error.message);

  // Simple approach: delete existing children and recreate them
  await supabase.from("course_modules").delete().eq("course_id", id);
  await supabase.from("course_tools").delete().eq("course_id", id);
  await supabase.from("course_highlights").delete().eq("course_id", id);
  await supabase.from("course_faqs").delete().eq("course_id", id);

  if (modules?.length) {
    const { error: modErr } = await supabase.from("course_modules").insert(
      modules.map(({ id: _id, course_id: _cid, ...rest }) => ({ ...rest, course_id: id }))
    );
    if (modErr) throw new Error(modErr.message);
  }
  if (tools?.length) {
    const { error: toolErr } = await supabase.from("course_tools").insert(
      tools.map(({ id: _id, course_id: _cid, ...rest }) => ({ ...rest, course_id: id }))
    );
    if (toolErr) throw new Error(toolErr.message);
  }
  if (highlights?.length) {
    const { error: hlErr } = await supabase.from("course_highlights").insert(
      highlights.map(({ id: _id, course_id: _cid, ...rest }) => ({ ...rest, course_id: id }))
    );
    if (hlErr) throw new Error(hlErr.message);
  }
  if (faqs?.length) {
    const { error: faqErr } = await supabase.from("course_faqs").insert(
      faqs.map(({ id: _id, course_id: _cid, ...rest }) => ({ ...rest, course_id: id }))
    );
    if (faqErr) throw new Error(faqErr.message);
  }

  revalidatePath("/asgard/academics/courses");
  return { success: true };
}

export async function deleteCourse(id: string) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("courses")
    .update({ is_deleted: true, is_active: false })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/asgard/academics/courses");
  return { success: true };
}