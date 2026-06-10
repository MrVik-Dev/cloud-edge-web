"use server"

import {createClient} from "@/libs/supabase/server"; // Assuming "@/libs/supabase/server" is the correct path
import {ICourse, ICourseModule, ICourseTool, ICourseHighlight, ICourseFAQ, ICourseTestimonial} from "@/types";
import {createSlug} from "@/utils";
import {revalidatePath} from "next/cache";

export async function getCourses(page = 1, pageSize = 10) {
    const supabase = await createClient();
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const {data, count, error} = await supabase
        .from("courses")
        .select(
            `
      *,
      batches (
        *,
        batch_regions (
          *
        )
      )
    `,
            {count: "exact"}
        )
        .eq("is_deleted", false)
        .range(from, to)
        .order("created_at", {ascending: false});

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

    const {data: course, error: courseError} = await supabase
        .from("courses")
        .select("*")
        .eq("id", id)
        .eq("is_deleted", false)
        .single();

    if (courseError) throw new Error(courseError.message);

    const [
        modulesRes,
        toolsRes,
        highlightsRes,
        faqsRes,
        testimonialsRes,
        relatedCoursesRes,
    ] = await Promise.all([
        supabase
            .from("course_modules")
            .select("*")
            .eq("course_id", id)
            .order("display_order"),

        supabase
            .from("course_tools")
            .select("*")
            .eq("course_id", id)
            .order("display_order"),

        supabase
            .from("course_highlights")
            .select("*")
            .eq("course_id", id)
            .order("display_order"),

        supabase
            .from("course_faqs")
            .select("*")
            .eq("course_id", id)
            .order("display_order"),

        supabase
            .from("course_testimonials")
            .select("*")
            .eq("course_id", id),

        supabase
            .from("related_courses")
            .select(`
    related_course_id,
    related_course:courses!related_courses_related_course_id_fkey (
      id,
      name,
      label,
      url_slug,
      media_url,
      icon_media_url,
      description,
      duration,
      tags,
      is_featured,
      in_avg_salary,
      uk_avg_salary,
      us_avg_salary,
      ca_avg_salary
    )
  `)
            .eq("course_id", id)
    ]);

    return {
        ...course,
        modules: modulesRes.data || [],
        tools: toolsRes.data || [],
        highlights: highlightsRes.data || [],
        faqs: faqsRes.data || [],
        testimonials: testimonialsRes.data || [],
        related_courses: relatedCoursesRes.data || [],
    };
}

export async function getCourseBySlug(slug: string) {
    const supabase = await createClient();

    const {data: course, error: courseError} = await supabase
        .from("courses")
        .select("*")
        .eq("url_slug", slug)
        .eq("is_deleted", false)
        .single();

    if (courseError) throw new Error(courseError.message);

    const courseId = course.id;

    const [
        modulesRes,
        toolsRes,
        highlightsRes,
        faqsRes,
        testimonialsRes,
        relatedCoursesRes, // Added related courses
        batchesRes,
    ] = await Promise.all([
        supabase
            .from("course_modules")
            .select("*")
            .eq("course_id", courseId)
            .order("display_order"),

        supabase
            .from("course_tools")
            .select("*")
            .eq("course_id", courseId)
            .order("display_order"),

        supabase
            .from("course_highlights")
            .select("*")
            .eq("course_id", courseId)
            .order("display_order"),

        supabase
            .from("course_faqs")
            .select("*")
            .eq("course_id", courseId)
            .order("display_order"),

        supabase
            .from("course_testimonials")
            .select("*")
            .eq("course_id", courseId),

        supabase
            .from("related_courses")
            .select(`
        related_course_id,
        related_course:courses!related_courses_related_course_id_fkey (
          id,
          name,
          label,
          url_slug,
          media_url,
          icon_media_url,
          description,
          duration,
          batches (
            *,
            batch_regions (*)
          )
        )
      `)
            .eq("course_id", courseId),

        supabase
            .from("batches")
            .select(`
        *,
        batch_regions (*)
      `)
            .eq("course_id", courseId)
            .eq("is_active", true)
            .eq("is_deleted", false),
    ]);

    const nextBatchRegion = batchesRes.data
        ?.flatMap(batch =>
            (batch.batch_regions || []).map((region: any) => ({
                ...region,
                batch,
            }))
        )
        .filter(
            region =>
                region.is_active &&
                !region.is_deleted &&
                region.start_date &&
                new Date(region.start_date) >= new Date()
        )
        .sort(
            (a, b) =>
                new Date(a.start_date).getTime() -
                new Date(b.start_date).getTime()
        )[0];


    const countryPricing = {
        IN: null,
        UK: null,
        US: null,
        CA: null,
    };


    (batchesRes.data || []).forEach((batch) => {
        (batch.batch_regions || []).forEach((region: any) => {
            const code = region.country_code?.toUpperCase();

            if (["IN", "INDIA"].includes(code)) {
                countryPricing.IN = region;
            }

            if (["UK", "GB", "GBR"].includes(code)) {
                countryPricing.UK = region;
            }

            if (["US", "USA"].includes(code)) {
                countryPricing.US = region;
            }

            if (["CA", "CAN"].includes(code)) {
                countryPricing.CA = region;
            }
        });
    });


    const relatedCoursesWithPricing =
        (relatedCoursesRes.data || []).map((item: any) => {
            const course = item.related_course;

            const countryPricing = {
                IN: null,
                UK: null,
                US: null,
                CA: null,
            };

            (course?.batches || []).forEach((batch: any) => {
                (batch.batch_regions || []).forEach((region: any) => {
                    const code = region.country_code?.toUpperCase();

                    if (["IN", "INDIA"].includes(code)) {
                        countryPricing.IN = region;
                    }

                    if (["UK", "GB", "GBR"].includes(code)) {
                        countryPricing.UK = region;
                    }

                    if (["US", "USA"].includes(code)) {
                        countryPricing.US = region;
                    }

                    if (["CA", "CAN"].includes(code)) {
                        countryPricing.CA = region;
                    }
                });
            });

            return {
                ...item,
                related_course: {
                    ...course,
                    countryPricing,
                },
            };
        });


    return {
        ...course,
        modules: modulesRes.data || [],
        tools: toolsRes.data || [],
        highlights: highlightsRes.data || [],
        faqs: faqsRes.data || [],
        testimonials: testimonialsRes.data || [],
        related_courses: relatedCoursesWithPricing,
        nextBatch: nextBatchRegion,
        batches: batchesRes.data || [],
        countryPricing,
    };
}

export async function createCourse(
    payload: ICourse & {
        modules: ICourseModule[];
        tools: ICourseTool[];
        highlights: ICourseHighlight[];
        faqs: ICourseFAQ[];
        testimonials?: ICourseTestimonial[];
        related_courses?: { related_course_id: string }[]; // Added related courses
    }
) {
    const supabase = await createClient();
    const {modules, tools, highlights, faqs, testimonials, related_courses, ...courseData} = payload; // Destructure related_courses

    const {data: course, error} = await supabase
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
            prerequisites: courseData.prerequisites,
            is_featured: courseData.is_featured,
            in_avg_salary: courseData.in_avg_salary,
            uk_avg_salary: courseData.uk_avg_salary,
            us_avg_salary: courseData.us_avg_salary,
            ca_avg_salary: courseData.ca_avg_salary,
            is_active: courseData.is_active,
            url_slug: createSlug(courseData.name)
        })
        .select()
        .single();

    if (error) throw new Error(error.message);

    const courseId = course.id;

    if (modules?.length) {
        const {error: modErr} = await supabase.from("course_modules").insert(
            modules.map(({id, course_id, ...rest}) => ({...rest, course_id: courseId}))
        );
        if (modErr) throw new Error(modErr.message);
    }
    if (tools?.length) {
        const {error: toolErr} = await supabase.from("course_tools").insert(
            tools.map(({id, course_id, ...rest}) => ({...rest, course_id: courseId}))
        );
        if (toolErr) throw new Error(toolErr.message);
    }
    if (highlights?.length) {
        const {error: hlErr} = await supabase.from("course_highlights").insert(
            highlights.map(({id, course_id, ...rest}) => ({...rest, course_id: courseId}))
        );
        if (hlErr) throw new Error(hlErr.message);
    }
    if (faqs?.length) {
        const {error: faqErr} = await supabase.from("course_faqs").insert(
            faqs.map(({id, course_id, ...rest}) => ({...rest, course_id: courseId}))
        );
        if (faqErr) throw new Error(faqErr.message);
    }
    if (testimonials?.length) {
        const {error: tErr} = await supabase.from("course_testimonials").insert(
            testimonials.map(({id, course_id, ...rest}) => ({...rest, course_id: courseId}))
        );
        if (tErr) throw new Error(tErr.message);
    }
    // Insert related courses
    if (related_courses?.length) {
        const {error: rcErr} = await supabase.from("related_courses").insert(
            related_courses.map((rc) => ({...rc, course_id: courseId}))
        );
        if (rcErr) throw new Error(rcErr.message);
    }

    revalidatePath("/asgard/academics/courses");
    return {success: true};
}

export async function updateCourse(
    payload: ICourse & {
        id: string;
        modules: ICourseModule[];
        tools: ICourseTool[];
        highlights: ICourseHighlight[];
        faqs: ICourseFAQ[];
        testimonials?: ICourseTestimonial[];
        related_courses?: { related_course_id: string }[]; // Added related courses
    }
) {
    const supabase = await createClient();
    const {id, modules, tools, highlights, faqs, testimonials, related_courses, ...courseData} = payload; // Destructure related_courses

    const {error} = await supabase
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
            prerequisites: courseData.prerequisites,
            is_featured: courseData.is_featured,
            in_avg_salary: courseData.in_avg_salary,
            uk_avg_salary: courseData.uk_avg_salary,
            us_avg_salary: courseData.us_avg_salary,
            ca_avg_salary: courseData.ca_avg_salary,
            is_active: courseData.is_active,
            url_slug: courseData.url_slug
        })
        .eq("id", id);

    if (error) throw new Error(error.message);

    // Simple approach: delete existing children and recreate them
    await supabase.from("course_modules").delete().eq("course_id", id);
    await supabase.from("course_tools").delete().eq("course_id", id);
    await supabase.from("course_highlights").delete().eq("course_id", id);
    await supabase.from("course_faqs").delete().eq("course_id", id);
    await supabase.from("course_testimonials").delete().eq("course_id", id);
    await supabase.from("related_courses").delete().eq("course_id", id); // Delete existing related courses

    if (modules?.length) {
        const {error: modErr} = await supabase.from("course_modules").insert(
            modules.map(({id: _id, course_id: _cid, ...rest}) => ({...rest, course_id: id}))
        );
        if (modErr) throw new Error(modErr.message);
    }
    if (tools?.length) {
        const {error: toolErr} = await supabase.from("course_tools").insert(
            tools.map(({id: _id, course_id: _cid, ...rest}) => ({...rest, course_id: id}))
        );
        if (toolErr) throw new Error(toolErr.message);
    }
    if (highlights?.length) {
        const {error: hlErr} = await supabase.from("course_highlights").insert(
            highlights.map(({id: _id, course_id: _cid, ...rest}) => ({...rest, course_id: id}))
        );
        if (hlErr) throw new Error(hlErr.message);
    }
    if (faqs?.length) {
        const {error: faqErr} = await supabase.from("course_faqs").insert(
            faqs.map(({id: _id, course_id: _cid, ...rest}) => ({...rest, course_id: id}))
        );
        if (faqErr) throw new Error(faqErr.message);
    }
    if (testimonials?.length) {
        const {error: tErr} = await supabase.from("course_testimonials").insert(
            testimonials.map(({id: _id, course_id: _cid, ...rest}) => ({...rest, course_id: id}))
        );
        if (tErr) throw new Error(tErr.message);
    }
    // Insert related courses
    if (related_courses?.length) {
        const {error: rcErr} = await supabase.from("related_courses").insert(
            related_courses.map((rc) => ({...rc, course_id: id}))
        );
        if (rcErr) throw new Error(rcErr.message);
    }

    revalidatePath("/asgard/academics/courses");
    return {success: true};
}

export async function deleteCourse(id: string) {
    const supabase = await createClient();

    const {error} = await supabase
        .from("courses")
        .update({is_deleted: true, is_active: false})
        .eq("id", id);

    if (error) throw new Error(error.message);

    revalidatePath("/asgard/academics/courses");
    return {success: true};
}

export async function getFeaturedCourses() {
    const supabase = await createClient();

    const {data, error} = await supabase
        .from("courses")
        .select(`
      *,
      batches (
        *,
        batch_regions (
          *
        )
      )
    `)
        .eq("is_active", true)
        .eq("is_deleted", false)
        .eq("is_featured", true);

    if (error) throw new Error(error.message);

    return data || [];
}