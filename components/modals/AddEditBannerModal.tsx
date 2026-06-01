"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { uploadMedia } from "@/lib/uploadMedia";
import { Label } from "../ui/label";

export type BannerForm = {
  id?: string;
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  image_url?: string;
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  banner?: BannerForm | null;
  onSubmit: (
    values: BannerForm,
    file: File | null
  ) => Promise<void>;
}

export function AddEditBannerModal({
  open,
  onOpenChange,
  banner,
  onSubmit,
}: Props) {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const [preview, setPreview] = useState("");

  const [form, setForm] = useState<BannerForm>({
    title: "",
    description: "",
    btn_text: "",
    btn_link: "",
  });

  useEffect(() => {
    if (banner) {
      setForm(banner);
      setPreview(banner.image_url || "");
      setFile(null);
    } else {
      setForm({
        title: "",
        description: "",
        btn_text: "",
        btn_link: "",
      });

      setPreview("");
      setFile(null);
    }
  }, [banner]);

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);

    setPreview(
      URL.createObjectURL(selectedFile)
    );
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await onSubmit(form, file);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="h-[85vh] max-h-[900px] overflow-y-auto sm:max-w-3xl rounded-2xl border-0 p-8 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {banner
              ? "Edit Banner"
              : "Create Banner"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">

          <div className="space-y-2">
            <Label htmlFor="title">
              Banner Title
            </Label>
            <Input
              id="title"
              placeholder="Master {{Cloud Computing}} in 12 Weeks"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />
            <p className="mt-1 text-xs text-muted-foreground">
              Wrap text in{" "}
              <span className="rounded bg-muted px-1 font-mono text-foreground">
                {"{{ }}"}
              </span>{" "}
              to highlight it in the banner title.
              Example:
              <span className="ml-1 font-mono text-primary">
                Welcome to {"{{Cloud Edge}}"}
              </span>
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description
            </Label>

            <Input
              id="description"
              placeholder="Get industry-recognized certifications and hands-on training from experts."
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description: e.target.value,
                })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="btn_text">
                Button Text
              </Label>

              <Input
                id="btn_text"
                placeholder="Enroll Now"
                value={form.btn_text}
                onChange={(e) =>
                  setForm({
                    ...form,
                    btn_text: e.target.value,
                  })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="btn_link">
                Button Link
              </Label>

              <Input
                id="btn_link"
                placeholder="/courses/cloud-computing"
                value={form.btn_link}
                onChange={(e) =>
                  setForm({
                    ...form,
                    btn_link: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>
              Banner Image
            </Label>

            <label
              htmlFor="banner-upload"
              className="group flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/20 bg-muted/20 p-8 text-center transition-all hover:border-primary/40 hover:bg-muted/40"
            >
              <Upload className="mb-3 h-8 w-8 text-muted-foreground transition-transform group-hover:scale-110" />

              <p className="font-medium">
                {file
                  ? "Change Banner Image"
                  : "Upload Banner Image"}
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
                id="banner-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          {preview && (
            <div className="overflow-hidden rounded-2xl border">
              <Image
                src={preview}
                alt="Banner Preview"
                width={300}
                height={150}
                className="h-56 w-full object-contain"
              />
            </div>
          )}

          <Button
            disabled={loading}
            className="h-11 w-full rounded-xl"
            onClick={handleSubmit}
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : banner ? (
              "Update Banner"
            ) : (
              "Create Banner"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}