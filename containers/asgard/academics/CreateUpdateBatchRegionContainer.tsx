"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ArrowLeft, Check, ChevronsUpDown } from "lucide-react";
import { IBatchRegion, IBatches } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { createBatchRegion, updateBatchRegion } from "@/app/(asgard)/asgard/academics/batch-regions/actions";

interface ICreateUpdateBatchRegionContainerProps {
  data?: IBatchRegion;
  batches: IBatches[];
}

const countries = [
  {
    name: "India (IN)",
    code: "IN",
    currency: "INR",
    defaultTimezone: "Asia/Kolkata",
    timezones: ["Asia/Kolkata"],
  },
  {
    name: "United Kingdom (UK)",
    code: "UK",
    currency: "GBP",
    defaultTimezone: "Europe/London",
    timezones: ["Europe/London"],
  },
  {
    name: "United States (USA)",
    code: "US",
    currency: "USD",
    defaultTimezone: "America/New_York",
    timezones: [
      "America/New_York",
      "America/Chicago",
      "America/Denver",
      "America/Los_Angeles",
      "America/Phoenix",
      "Pacific/Honolulu",
    ],
  },
  {
    name: "Canada (CA)",
    code: "CA",
    currency: "CAD",
    defaultTimezone: "America/Toronto",
    timezones: [
      "America/Toronto",
      "America/Vancouver",
      "America/Edmonton",
      "America/Winnipeg",
      "America/Halifax",
      "America/St_Johns",
    ],
  },
];

const CreateUpdateBatchRegionContainer: React.FC<
  ICreateUpdateBatchRegionContainerProps
> = ({ data, batches }) => {
  const [form, setForm] = useState<IBatchRegion>({
    batch_id: data?.batch_id ?? "",
    country_code: data?.country_code ?? "",
    price: data?.price ?? 0,
    currency: data?.currency ?? "",
    start_date: data?.start_date ? data.start_date.split("T")[0] : "",
    timezone: data?.timezone ?? "",
    is_active: data?.is_active ?? true,
  });

  const [batchOpen, setBatchOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const selectedBatch = batches.find((batch) => batch.id === form.batch_id);

  // Automatically update currency and timezone when country changes
  const handleCountryChange = (countryCode: string | null) => {
    if (!countryCode) return;
    const selectedCountry = countries.find((c) => c.code === countryCode);
    if (selectedCountry) {
      setForm((prev) => ({
        ...prev,
        country_code: countryCode,
        currency: selectedCountry.currency,
        timezone: selectedCountry.defaultTimezone,
      }));
    }
  };

  const validate = () => {
    if (!form.batch_id) {
      toast.error("Please select a Batch");
      return false;
    }
    if (!form.country_code) {
      toast.error("Please select a Country");
      return false;
    }
    if (form.price === undefined || form.price < 0) {
      toast.error("Price must be greater than or equal to 0");
      return false;
    }
    if (!form.currency) {
      toast.error("Currency is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    try {
      setLoading(true);

      const payload = {
        ...form,
        price: Number(form.price),
        start_date: form.start_date || null,
        timezone: form.timezone || null,
      };

      if (data?.id) {
        await updateBatchRegion({
          id: data.id,
          ...payload,
        });
        toast.success("Batch Region updated successfully");
      } else {
        await createBatchRegion(payload);
        toast.success("Batch Region created successfully");
      }

      router.push("/asgard/academics/batch-regions");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const activeCountry = countries.find((c) => c.code === form.country_code);
  const timezoneOptions = activeCountry?.timezones ?? [];

  return (
    <div className="max-w-5xl p-6">
      <div className="mb-8">
        <Button
          type="button"
          variant="ghost"
          className="mb-4"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <h1 className="text-3xl font-bold tracking-tight">
          {data ? "Update Batch Region" : "Create Batch Region"}
        </h1>

        <p className="mt-1 text-muted-foreground">
          Configure country-specific price, currency, timing, and status settings for a course batch.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Core Settings */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Region & Pricing Settings</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Batch Combobox Popover */}
            <div className="space-y-2 flex flex-col justify-start">
              <Label>Select Batch</Label>
              <Popover open={batchOpen} onOpenChange={setBatchOpen}>
                <PopoverTrigger className="w-full">
                  <Button
                    variant="outline"
                    role="combobox"
                    className="h-11 w-full justify-between rounded-lg font-normal"
                  >
                    <span className="truncate text-left">
                      {selectedBatch?.name ?? "Select Batch"}
                    </span>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[400px] p-0" align="start">
                  <Command>
                    <CommandInput placeholder="Search batch..." />
                    <CommandEmpty>No batch found.</CommandEmpty>
                    <CommandGroup className="max-h-64 overflow-y-auto">
                      {batches.map((batch) => (
                        <CommandItem
                          key={batch.id}
                          value={batch.name}
                          onSelect={() => {
                            setForm((prev) => ({
                              ...prev,
                              batch_id: batch.id || "",
                            }));
                            setBatchOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              form.batch_id === batch.id
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          <span className="truncate">{batch.name}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>

            {/* Country Selector */}
            <div className="space-y-2">
              <Label>Country</Label>
              <Select
                value={form.country_code}
                onValueChange={handleCountryChange}
              >
                <SelectTrigger className="h-11 rounded-lg">
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.code} value={c.code}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Currency Input (Read-only) */}
            <div className="space-y-2">
              <Label>Currency</Label>
              <Input
                className="h-11 bg-muted/50 cursor-not-allowed font-medium"
                value={form.currency}
                placeholder="Select a country to map currency"
                readOnly
                disabled
              />
            </div>

            {/* Price Input */}
            <div className="space-y-2">
              <Label>Price</Label>
              <div className="relative">
                <Input
                  className="h-11 pr-12 font-medium"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.price || ""}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      price: e.target.value ? Number(e.target.value) : 0,
                    }))
                  }
                  placeholder="0.00"
                />
                {form.currency && (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground text-sm font-semibold">
                    {form.currency}
                  </div>
                )}
              </div>
            </div>

            {/* Start Date Input */}
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Input
                className="h-11"
                type="date"
                value={form.start_date || ""}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    start_date: e.target.value,
                  }))
                }
              />
            </div>

            {/* Timezone Select */}
            <div className="space-y-2">
              <Label>Timezone</Label>
              {timezoneOptions.length > 0 ? (
                <Select
                  value={form.timezone || ""}
                  onValueChange={(val) =>
                    setForm((prev) => ({
                      ...prev,
                      timezone: val || "",
                    }))
                  }
                >
                  <SelectTrigger className="h-11 rounded-lg">
                    <SelectValue placeholder="Select Timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timezoneOptions.map((tz) => (
                      <SelectItem key={tz} value={tz}>
                        {tz}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  className="h-11"
                  placeholder="e.g. Asia/Kolkata"
                  value={form.timezone || ""}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      timezone: e.target.value,
                    }))
                  }
                />
              )}
            </div>
          </div>
        </div>

        {/* Visibility Setting */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Settings</h2>
          <div className="flex items-center justify-between rounded-xl border p-4 max-w-xl">
            <div>
              <p className="font-medium">Active Region Settings</p>
              <p className="text-sm text-muted-foreground">
                Enable pricing and timeline settings for this region.
              </p>
            </div>

            <Switch
              checked={form.is_active}
              onCheckedChange={(checked) =>
                setForm((prev) => ({
                  ...prev,
                  is_active: checked,
                }))
              }
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          size="lg"
          type="submit"
          disabled={loading}
          className="min-w-[180px]"
        >
          {loading
            ? data
              ? "Updating..."
              : "Creating..."
            : data
              ? "Update Batch Region"
              : "Create Batch Region"}
        </Button>
      </form>
    </div>
  );
};

export default CreateUpdateBatchRegionContainer;
