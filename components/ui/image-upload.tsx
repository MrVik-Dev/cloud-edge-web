"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload, Loader2, X } from "lucide-react";
import { uploadMedia } from "@/lib/uploadMedia";
import { Button } from "./button";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
  className?: string;
}

export function ImageUpload({ value, onChange, folder = "courses", className }: ImageUploadProps) {
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const res = await uploadMedia({ file, folder });
      onChange(res.url);
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (value) {
    return (
      <div className={`relative overflow-hidden rounded-xl border bg-muted/20 flex items-center justify-center ${className || "h-40 w-full"}`}>
        <Image src={value} alt="Uploaded media" fill className="object-contain p-2" />
        <Button 
          type="button" 
          variant="destructive" 
          size="icon" 
          className="absolute top-2 right-2 h-6 w-6 rounded-full" 
          onClick={() => onChange("")}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <label className={`group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-muted-foreground/20 bg-muted/10 text-center transition-all hover:border-primary/40 hover:bg-muted/30 ${className || "h-40 w-full"}`}>
      {loading ? (
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      ) : (
        <>
          <Upload className="mb-2 h-6 w-6 text-muted-foreground transition-transform group-hover:scale-110" />
          <p className="text-sm font-medium">Upload Image</p>
          <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP</p>
        </>
      )}
      <input type="file" accept="image/*" className="hidden" disabled={loading} onChange={handleImageUpload} />
    </label>
  );
}
