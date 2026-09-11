"use client";

import React, {
    useEffect,
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
    cover_image_url?: string;
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

    const [bannerFile, setBannerFile] =
        useState<File | null>(null);

    const [bannerPreview, setBannerPreview] =
        useState(
            data?.media_url || ""
        );

    const [coverFile, setCoverFile] =
        useState<File | null>(null);

    const [coverPreview, setCoverPreview] =
        useState(
            data?.cover_image_url || ""
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

    useEffect(() => {
        if (data) {
            setBannerPreview(data.media_url || "");
            setCoverPreview(data.cover_image_url || "");
            setForm({
                title: data.title ?? "",
                description: data.description ?? "",
                is_active: data.is_active ?? true,
                tags: data.tags ?? [],
            });
        }
    }, [data]);

    const handleBannerUpload = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile =
            e.target.files?.[0];

        if (!selectedFile) return;

        setBannerFile(selectedFile);

        setBannerPreview(
            URL.createObjectURL(
                selectedFile
            )
        );
    };

    const handleCoverUpload = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const selectedFile =
            e.target.files?.[0];

        if (!selectedFile) return;

        setCoverFile(selectedFile);

        setCoverPreview(
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

            if (bannerFile) {
                const uploaded = await uploadMedia({
                    file: bannerFile,
                    folder: "blogs",
                });

                mediaUrl = uploaded.url;
            }

            let coverImageUrl =
                data?.cover_image_url || "";

            if (coverFile) {
                const uploaded = await uploadMedia({
                    file: coverFile,
                    folder: "blogs",
                });

                coverImageUrl = uploaded.url;
            }

            const description =
                editorRef.current?.editor?.getContent() || ""

            const payload = {
                title: form.title,
                description,
                media_url: mediaUrl,
                cover_image_url: coverImageUrl,
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

                    <div className="mt-6 grid gap-6 lg:grid-cols-2">
                        <div className="space-y-2">
                            <Label>
                                Banner Image
                            </Label>

                            <label
                                htmlFor="blog-banner-upload"
                                className="group flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center transition-all hover:border-primary/40 hover:bg-muted/40"
                            >
                                <Upload
                                    className="mb-3 h-8 w-8 text-muted-foreground transition-transform group-hover:scale-110"/>

                                <p className="font-medium">
                                    {bannerFile || bannerPreview
                                        ? "Change Banner Image"
                                        : "Upload Banner Image"}
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    PNG, JPG, WEBP
                                </p>

                                {bannerFile && (
                                    <p className="mt-3 text-xs font-medium text-primary">
                                        {bannerFile.name}
                                    </p>
                                )}

                                <input
                                    id="blog-banner-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleBannerUpload}
                                />
                            </label>

                            {bannerPreview && (
                                <div className="mt-4 overflow-hidden rounded-xl border">
                                    <Image
                                        src={bannerPreview}
                                        alt="Banner Preview"
                                        width={1200}
                                        height={630}
                                        className="h-[250px] w-full object-cover"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>
                                Cover Image
                            </Label>

                            <label
                                htmlFor="blog-cover-upload"
                                className="group flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center transition-all hover:border-primary/40 hover:bg-muted/40"
                            >
                                <Upload
                                    className="mb-3 h-8 w-8 text-muted-foreground transition-transform group-hover:scale-110"/>

                                <p className="font-medium">
                                    {coverFile || coverPreview
                                        ? "Change Cover Image"
                                        : "Upload Cover Image"}
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    PNG, JPG, WEBP
                                </p>

                                {coverFile && (
                                    <p className="mt-3 text-xs font-medium text-primary">
                                        {coverFile.name}
                                    </p>
                                )}

                                <input
                                    id="blog-cover-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleCoverUpload}
                                />
                            </label>

                            {coverPreview && (
                                <div className="mt-4 overflow-hidden rounded-xl border">
                                    <Image
                                        src={coverPreview}
                                        alt="Cover Preview"
                                        width={1200}
                                        height={630}
                                        className="h-[250px] w-full object-cover"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
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