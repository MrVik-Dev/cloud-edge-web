"use server"

import { createClient } from "@/libs/supabase/server";
import {createSlug} from "@/utils";


export async function getBlogs(page = 1, pageSize = 10) {

    const supabase = await createClient();

    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const {
        data,
        count,
        error,
    } = await supabase
        .from("blogs")
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


export async function createBlog(payload: {
    title: string;
    description: string;
    media_url?: string;
    is_active: boolean;
    tags: string[];
}) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("blogs")
        .insert({
            ...payload,
            url_slug: createSlug(payload.title),
        });

    if (error) {
        throw new Error(error.message);
    }

    return true;
}

export async function updateBlog(payload: {
    id: number;
    title: string;
    description: string;
    media_url?: string;
    tags: string[];
    is_active: boolean;
}) {
    const supabase = await createClient();

    const { id, ...rest } = payload;

    const { error } = await supabase
        .from("blogs")
        .update({
            ...rest,
            url_slug: createSlug(payload.title),
        })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return true;
}


export async function getBlogById(id: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}



export async function getBlogBySlug(urlSlug: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("url_slug", urlSlug)
        .eq("is_active", true)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function deleteBlog(id: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("blogs")
        .delete()
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    return true;
}