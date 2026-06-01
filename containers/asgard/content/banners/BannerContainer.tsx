"use client";

import { createBanner, deleteBanner, updateBanner } from '@/app/(asgard)/asgard/content/banners/actions';
import { Banner, bannerColumns } from '@/app/(asgard)/asgard/content/banners/columns'
import { DataTable } from '@/app/(asgard)/data-table'
import { AddEditBannerModal } from '@/components/modals/AddEditBannerModal';
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'

interface IBannerContainerProps {
  result: any
}

const BannerContainer: React.FC<IBannerContainerProps> = ({ result }) => {
  const [open, setOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const handleEdit = (banner: Banner) => {
    setSelectedBanner(banner);
    setOpen(true);
  };

  const handleAdd = () => {
    setSelectedBanner(null);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete banner?")) return;

    await deleteBanner(id);
  };

  const handleSubmit = async (
    values: any,
    file: File | null
  ) => {
    if (selectedBanner) {
      await updateBanner(
        selectedBanner.id,
        values,
        file
      );
    } else {
      await createBanner(values, file);
    }

    setOpen(false);
  };


  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Banners
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage homepage banners and promotions.
          </p>
        </div>

        <Button onClick={handleAdd}>
          Add Banner

        </Button>
      </div>

      <div className="rounded-2xl border bg-card shadow-sm">
        <DataTable
          columns={bannerColumns(
            handleEdit,
            handleDelete
          )}
          data={result.data}
        />
      </div>

      <AddEditBannerModal
        open={open}
        onOpenChange={setOpen}
        banner={selectedBanner}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default BannerContainer