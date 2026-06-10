"use client";

import React, {
    useRef,
    useState,
} from "react";

import Image from "next/image";
import {useRouter} from "next/navigation";

import {ArrowLeft, Upload} from "lucide-react";

import toast from "react-hot-toast";

import {Editor} from "@hugerte/hugerte-react";


import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";

import {uploadMedia} from "@/lib/uploadMedia";
import {createBlog, updateBlog} from "@/app/(asgard)/asgard/blogs/actions";
import TextEditor from "@/components/shared/TextEditor";


export interface IBlog {
    id?: number;
    title?: string;
    description?: string;
    media_url?: string;
    is_active?: boolean;
    tags?: string[];
}

interface Props {
    data?: IBlog;
}

const CreateUpdateBlogContainer = ({
                                       data,
                                   }: Props) => {
    const router = useRouter();

    const editorRef =
        useRef<Editor | null>(null);

    const [loading, setLoading] =
        useState(false);

    const [file, setFile] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState(
            data?.media_url || ""
        );

    const [tagInput, setTagInput] = useState("");

    const [form, setForm] = useState({
        title: data?.title ?? "",
        description:
            data?.description ?? "",
        is_active:
            data?.is_active ?? true,
        tags: data?.tags ?? [],
    });

    const handleImageUpload = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile =
            e.target.files?.[0];

        if (!selectedFile) return;

        setFile(selectedFile);

        setPreview(
            URL.createObjectURL(
                selectedFile
            )
        );
    };

    const generateSlug = (
        title: string
    ) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");
    };

    const validate = () => {
        if (!form.title.trim()) {
            toast.error(
                "Blog title is required"
            );
            return false;
        }

        return true;
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            let mediaUrl =
                data?.media_url || "";

            if (file) {
                const uploaded = await uploadMedia({
                    file,
                    folder: "blogs",
                });

                mediaUrl = uploaded.url;
            }

            const description =
                editorRef.current?.editor?.getContent() || ""

            const payload = {
                title: form.title,
                description,
                media_url: mediaUrl,
                is_active:
                form.is_active,
                tags: form.tags,
            };

            if (data?.id) {
                await updateBlog({
                    id: data.id,
                    ...payload,
                });

                toast.success(
                    "Blog updated successfully"
                );
            } else {
                await createBlog(payload);

                toast.success(
                    "Blog created successfully"
                );
            }

            router.push(
                "/asgard/blogs"
            );

            router.refresh();
        } catch (error) {
            toast.error(
                error instanceof Error
                    ? error.message
                    : "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };


    const addTag = () => {
        const tag = tagInput.trim();

        if (!tag) return;

        if (form.tags.includes(tag)) {
            setTagInput("");
            return;
        }

        setForm((prev) => ({
            ...prev,
            tags: [...prev.tags, tag],
        }));

        setTagInput("");
    };

    const removeTag = (tag: string) => {
        setForm((prev) => ({
            ...prev,
            tags: prev.tags.filter(
                (t) => t !== tag
            ),
        }));
    };

    return (
        <div className="max-w-7xl p-6">
            <div className="mb-8">
                <Button
                    variant="ghost"
                    className="mb-4"
                    onClick={() =>
                        router.back()
                    }
                >
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Back
                </Button>

                <h1 className="text-3xl font-bold tracking-tight">
                    {data
                        ? "Update Blog"
                        : "Create Blog"}
                </h1>

                <p className="mt-1 text-muted-foreground">
                    Create and manage blog
                    articles, content, SEO slug,
                    and visibility.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="mb-5 text-lg font-semibold">
                        Blog Information
                    </h2>

                    <div className="grid gap-4 lg:grid-cols-2">
                        <div className="space-y-2">
                            <Label>
                                Blog Title
                            </Label>

                            <Input
                                value={form.title}
                                placeholder="Complete Guide to AWS Cloud Computing"
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        title:
                                        e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className=" space-y-3">
                            <Label>Tags</Label>

                            <div className="flex gap-2">
                                <Input
                                    value={tagInput}
                                    placeholder="Cloud, AWS, DevOps..."
                                    onChange={(e) =>
                                        setTagInput(
                                            e.target.value
                                        )
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            addTag();
                                        }
                                    }}
                                />

                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={addTag}
                                >
                                    Add
                                </Button>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {form.tags.map((tag) => (
                                    <div
                                        key={tag}
                                        className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm"
                                    >
                                        <span>{tag}</span>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeTag(tag)
                                            }
                                            className="text-destructive"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <p className="text-xs text-muted-foreground">
                                Press Enter or click Add to create a tag.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <Label>
                            Featured Image
                        </Label>

                        <label
                            htmlFor="blog-upload"
                            className="group flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center transition-all hover:border-primary/40 hover:bg-muted/40"
                        >
                            <Upload
                                className="mb-3 h-8 w-8 text-muted-foreground transition-transform group-hover:scale-110"/>

                            <p className="font-medium">
                                {file
                                    ? "Change Featured Image"
                                    : "Upload Featured Image"}
                            </p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                PNG, JPG, WEBP
                            </p>

                            {file && (
                                <p className="mt-3 text-xs font-medium text-primary">
                                    {file.name}
                                </p>
                            )}

                            <input
                                id="blog-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>

                    {preview && (
                        <div className="mt-4 overflow-hidden rounded-xl border">
                            <Image
                                src={preview}
                                alt="Blog Preview"
                                width={1200}
                                height={630}
                                className="h-[350px] w-full object-cover"
                            />
                        </div>
                    )}
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <h2 className="mb-5 text-lg font-semibold">
                        Blog Content
                    </h2>

                    <TextEditor
                        ref={editorRef}
                        data={
                            form.description
                        }
                    />
                </div>

                <div className="rounded-2xl border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium">
                                Active Blog
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                Blog will be visible
                                on the website.
                            </p>
                        </div>

                        <Switch
                            checked={
                                form.is_active
                            }
                            onCheckedChange={(
                                checked
                            ) =>
                                setForm({
                                    ...form,
                                    is_active:
                                    checked,
                                })
                            }
                        />
                    </div>
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="min-w-[180px]"
                >
                    {loading
                        ? data
                            ? "Updating..."
                            : "Creating..."
                        : data
                            ? "Update Blog"
                            : "Create Blog"}
                </Button>
            </form>
        </div>
    );
};

export default CreateUpdateBlogContainer;