"use client";

import React, { useState } from "react";
import { ICourse, ICourseModule, ICourseTool, ICourseHighlight, ICourseFAQ } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createCourse, updateCourse } from "@/app/(asgard)/asgard/academics/courses/actions";
import { ImageUpload } from "@/components/ui/image-upload";

interface ICreateUpdateCourseContainerProps {
  data?: ICourse & {
    modules?: ICourseModule[];
    tools?: ICourseTool[];
    highlights?: ICourseHighlight[];
    faqs?: ICourseFAQ[];
  };
}

const CreateUpdateCourseContainer: React.FC<ICreateUpdateCourseContainerProps> = ({ data }) => {
  const [form, setForm] = useState<ICourse>({
    name: data?.name ?? "",
    label: data?.label ?? "",
    description: data?.description ?? "",
    overview: data?.overview ?? "",
    media_url: data?.media_url ?? "",
    icon_media_url: data?.icon_media_url ?? "",
    duration: data?.duration ?? 0,
    outcomes: data?.outcomes ?? [],
    features: data?.features ?? [],
    in_avg_salary: data?.in_avg_salary ?? "",
    uk_avg_salary: data?.uk_avg_salary ?? "",
    us_avg_salary: data?.us_avg_salary ?? "",
    ca_avg_salary: data?.ca_avg_salary ?? "",
    is_active: data?.is_active ?? true,
  });

  const [modules, setModules] = useState<ICourseModule[]>(data?.modules ?? []);
  const [tools, setTools] = useState<ICourseTool[]>(data?.tools ?? []);
  const [highlights, setHighlights] = useState<ICourseHighlight[]>(data?.highlights ?? []);
  const [faqs, setFaqs] = useState<ICourseFAQ[]>(data?.faqs ?? []);

  // For dynamic list fields in Course
  const [features, setFeatures] = useState<string[]>(data?.features?.length ? data.features : [""]);
  const [outcomes, setOutcomes] = useState<string[]>(data?.outcomes?.length ? data.outcomes : [""]);
  const [tags, setTags] = useState<string[]>(data?.tags?.length ? data.tags : [""]);

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!form.name.trim()) {
      toast.error("Course name is required");
      return false;
    }
    if (!form.icon_media_url?.trim()) {
      toast.error("Course icon media is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const payload = {
        ...form,
        features: features.filter(f => f.trim() !== ""),
        outcomes: outcomes.filter(o => o.trim() !== ""),
        tags: tags.filter(t => t.trim() !== ""),
        modules: modules.map(m => ({ ...m, points: m.points.filter(p => p.trim() !== "") })),
        tools,
        highlights,
        faqs,
      };

      if (data?.id) {
        await updateCourse({ id: data.id, ...payload });
        toast.success("Course updated successfully");
      } else {
        await createCourse(payload);
        toast.success("Course created successfully");
      }
      router.push("/asgard/academics/courses");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Dynamic Lists helpers
  const handleStringArrayChange = (setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[], index: number, value: string) => {
    const updated = [...array];
    updated[index] = value;
    setter(updated);
  };
  const handleAddStringArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[]) => setter([...array, ""]);
  const handleRemoveStringArrayItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[], index: number) => setter(array.filter((_, i) => i !== index));

  const addModule = () => setModules([...modules, { course_id: "", title: "", points: [""], display_order: modules.length + 1 }]);
  const updateModule = (index: number, field: string, value: any) => {
    const updated = [...modules];
    updated[index] = { ...updated[index], [field]: value };
    setModules(updated);
  };
  const updateModulePoint = (mIndex: number, pIndex: number, value: string) => {
    const updated = [...modules];
    const newPoints = [...(updated[mIndex].points || [])];
    newPoints[pIndex] = value;
    updated[mIndex] = { ...updated[mIndex], points: newPoints };
    setModules(updated);
  };
  const removeModulePoint = (mIndex: number, pIndex: number) => {
    const updated = [...modules];
    updated[mIndex].points = updated[mIndex].points.filter((_, i) => i !== pIndex);
    setModules(updated);
  };
  const addModulePoint = (mIndex: number) => {
    const updated = [...modules];
    updated[mIndex].points = [...(updated[mIndex].points || []), ""];
    setModules(updated);
  };
  const removeModule = (index: number) => setModules(modules.filter((_, i) => i !== index));

  const addTool = () => setTools([...tools, { course_id: "", name: "", media: "", display_order: tools.length + 1 }]);
  const updateTool = (index: number, field: string, value: any) => {
    const updated = [...tools];
    updated[index] = { ...updated[index], [field]: value };
    setTools(updated);
  };
  const removeTool = (index: number) => setTools(tools.filter((_, i) => i !== index));

  const addHighlight = () => setHighlights([...highlights, { course_id: "", text: "", icon_media: "", display_order: highlights.length + 1 }]);
  const updateHighlight = (index: number, field: string, value: any) => {
    const updated = [...highlights];
    updated[index] = { ...updated[index], [field]: value };
    setHighlights(updated);
  };
  const removeHighlight = (index: number) => setHighlights(highlights.filter((_, i) => i !== index));

  const addFaq = () => setFaqs([...faqs, { course_id: "", question: "", answer: "", display_order: faqs.length + 1 }]);
  const updateFaq = (index: number, field: string, value: any) => {
    const updated = [...faqs];
    updated[index] = { ...updated[index], [field]: value };
    setFaqs(updated);
  };
  const removeFaq = (index: number) => setFaqs(faqs.filter((_, i) => i !== index));


  return (
    <div className="max-w-5xl p-6 pb-20">
      <div className="mb-8">
        <Button type="button" variant="ghost" className="mb-4" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{data ? "Update Course" : "Create Course"}</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Basic Information</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Course Name</Label>
                <Input className="h-11" placeholder="Web Development Bootcamp" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Label</Label>
                  <Input className="h-11" placeholder="Best Seller" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Duration (Weeks)</Label>
                  <Input className="h-11" type="number" value={form.duration} onChange={(e) => setForm({ ...form, duration: Number(e.target.value) })} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Media / Thumbnail</Label>
              <ImageUpload value={form.media_url || ""} onChange={(url) => setForm({ ...form, media_url: url })} className="h-[152px]" />
              <Label>Course Icon Media</Label>
              <ImageUpload value={form.icon_media_url || ""} onChange={(url) => setForm({ ...form, icon_media_url: url })} className="h-[152px]" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label>Description</Label>
            <Textarea className="min-h-[100px]" placeholder="Short description..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="mt-5 space-y-2">
            <Label>Overview</Label>
            <Textarea className="min-h-[100px]" placeholder="Detailed overview..." value={form.overview} onChange={(e) => setForm({ ...form, overview: e.target.value })} />
          </div>
        </div>

        {/* Arrays info */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Features, Outcomes & Tags</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Features</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => handleAddStringArrayItem(setFeatures, features)}>
                  <Plus className="h-4 w-4 mr-2" /> Add
                </Button>
              </div>
              <div className="space-y-2">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={f} onChange={(e) => handleStringArrayChange(setFeatures, features, i, e.target.value)} placeholder={`Feature ${i + 1}`} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveStringArrayItem(setFeatures, features, i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                ))}
                {features.length === 0 && <p className="text-sm text-muted-foreground text-center py-4 border rounded-lg border-dashed">No features added</p>}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Outcomes</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => handleAddStringArrayItem(setOutcomes, outcomes)}>
                  <Plus className="h-4 w-4 mr-2" /> Add
                </Button>
              </div>
              <div className="space-y-2">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={o} onChange={(e) => handleStringArrayChange(setOutcomes, outcomes, i, e.target.value)} placeholder={`Outcome ${i + 1}`} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveStringArrayItem(setOutcomes, outcomes, i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                ))}
                {outcomes.length === 0 && <p className="text-sm text-muted-foreground text-center py-4 border rounded-lg border-dashed">No outcomes added</p>}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Tags</Label>
                <Button type="button" variant="outline" size="sm" onClick={() => handleAddStringArrayItem(setTags, tags)}>
                  <Plus className="h-4 w-4 mr-2" /> Add
                </Button>
              </div>
              <div className="space-y-2">
                {tags.map((t, i) => (
                  <div key={i} className="flex gap-2">
                    <Input value={t} onChange={(e) => handleStringArrayChange(setTags, tags, i, e.target.value)} placeholder={`Tag ${i + 1}`} />
                    <Button type="button" variant="ghost" size="icon" onClick={() => handleRemoveStringArrayItem(setTags, tags, i)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                  </div>
                ))}
                {tags.length === 0 && <p className="text-sm text-muted-foreground text-center py-4 border rounded-lg border-dashed">No tags added</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Salaries */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-5 text-lg font-semibold">Average Salaries</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-2">
              <Label>India (IN)</Label>
              <Input className="h-11" placeholder="₹10,00,000" value={form.in_avg_salary} onChange={(e) => setForm({ ...form, in_avg_salary: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>United Kingdom (UK)</Label>
              <Input className="h-11" placeholder="£50,000" value={form.uk_avg_salary} onChange={(e) => setForm({ ...form, uk_avg_salary: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>United States (US)</Label>
              <Input className="h-11" placeholder="$90,000" value={form.us_avg_salary} onChange={(e) => setForm({ ...form, us_avg_salary: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Canada (CA)</Label>
              <Input className="h-11" placeholder="$80,000 CAD" value={form.ca_avg_salary} onChange={(e) => setForm({ ...form, ca_avg_salary: e.target.value })} />
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold">Course Modules</h2>
            <Button type="button" onClick={addModule} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Module</Button>
          </div>
          <div className="space-y-4">
            {modules.map((m, i) => (
              <div key={i} className="flex gap-4 items-start border p-5 rounded-xl bg-muted/10">
                <div className="flex-1 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label>Module Title</Label>
                      <Input value={m.title} onChange={e => updateModule(i, "title", e.target.value)} />
                    </div>
                    <div className="w-24 space-y-2">
                      <Label>Order</Label>
                      <Input type="number" value={m.display_order} onChange={e => updateModule(i, "display_order", Number(e.target.value))} />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label>Module Points</Label>
                      <Button type="button" variant="ghost" size="sm" onClick={() => addModulePoint(i)}>
                        <Plus className="h-3 w-3 mr-1" /> Add Point
                      </Button>
                    </div>
                    {(m.points || []).map((p, pIndex) => (
                      <div key={pIndex} className="flex gap-2">
                        <Input value={p} onChange={e => updateModulePoint(i, pIndex, e.target.value)} placeholder="E.g. Introduction to Variables" />
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeModulePoint(i, pIndex)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
                <Button type="button" variant="destructive" size="icon" className="rounded-full shrink-0" onClick={() => removeModule(i)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            ))}
            {modules.length === 0 && <p className="text-sm text-muted-foreground text-center py-6 border rounded-xl border-dashed">No modules added yet</p>}
          </div>
        </div>

        {/* Tools */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold">Course Tools</h2>
            <Button type="button" onClick={addTool} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Tool</Button>
          </div>
          <div className="space-y-4">
            {tools.map((t, i) => (
              <div key={i} className="flex gap-4 items-center border p-4 rounded-xl bg-muted/10">
                <div className="w-28 shrink-0">
                  <ImageUpload value={t.media} onChange={(url) => updateTool(i, "media", url)} className="h-24 w-24" />
                </div>
                <div className="flex-1 grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <Label>Tool Name</Label>
                    <Input value={t.name} onChange={e => updateTool(i, "name", e.target.value)} placeholder="e.g. VS Code" />
                  </div>
                  <div className="space-y-2">
                    <Label>Order</Label>
                    <Input type="number" value={t.display_order} onChange={e => updateTool(i, "display_order", Number(e.target.value))} />
                  </div>
                </div>
                <Button type="button" variant="destructive" size="icon" className="rounded-full shrink-0" onClick={() => removeTool(i)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            ))}
            {tools.length === 0 && <p className="text-sm text-muted-foreground text-center py-6 border rounded-xl border-dashed">No tools added yet</p>}
          </div>
        </div>

        {/* FAQs */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold">FAQs</h2>
            <Button type="button" onClick={addFaq} size="sm"><Plus className="w-4 h-4 mr-2" /> Add FAQ</Button>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="flex gap-4 items-start border p-4 rounded-xl bg-muted/10">
                <div className="flex-1 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 space-y-2">
                      <Label>Question</Label>
                      <Input value={faq.question} onChange={e => updateFaq(i, "question", e.target.value)} />
                    </div>
                    <div className="w-24 space-y-2">
                      <Label>Order</Label>
                      <Input type="number" value={faq.display_order} onChange={e => updateFaq(i, "display_order", Number(e.target.value))} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Answer</Label>
                    <Textarea className="min-h-[80px]" value={faq.answer} onChange={e => updateFaq(i, "answer", e.target.value)} />
                  </div>
                </div>
                <Button type="button" variant="destructive" size="icon" className="rounded-full shrink-0 mt-8" onClick={() => removeFaq(i)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            ))}
            {faqs.length === 0 && <p className="text-sm text-muted-foreground text-center py-6 border rounded-xl border-dashed">No FAQs added yet</p>}
          </div>
        </div>

        {/* Highlights */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-lg font-semibold">Highlights (What You'll Learn)</h2>
            <Button type="button" onClick={addHighlight} size="sm"><Plus className="w-4 h-4 mr-2" /> Add Highlight</Button>
          </div>
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex gap-4 items-center border p-4 rounded-xl bg-muted/10">
                <div className="w-28 shrink-0">
                  <ImageUpload value={h.icon_media} onChange={(url) => updateHighlight(i, "icon_media", url)} className="h-24 w-24" />
                </div>
                <div className="flex-1 grid gap-4 grid-cols-2">
                  <div className="space-y-2">
                    <Label>Highlight Text</Label>
                    <Input value={h.text} onChange={e => updateHighlight(i, "text", e.target.value)} placeholder="e.g. 100% Job Assistance" />
                  </div>
                  <div className="space-y-2">
                    <Label>Order</Label>
                    <Input type="number" value={h.display_order} onChange={e => updateHighlight(i, "display_order", Number(e.target.value))} />
                  </div>
                </div>
                <Button type="button" variant="destructive" size="icon" className="rounded-full shrink-0" onClick={() => removeHighlight(i)}><Trash2 className="w-4 h-4" /></Button>
              </div>
            ))}
            {highlights.length === 0 && <p className="text-sm text-muted-foreground text-center py-6 border rounded-xl border-dashed">No highlights added yet</p>}
          </div>
        </div>

        {/* Capacity & Settings */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between rounded-xl border p-4 max-w-sm">
            <div>
              <p className="font-medium">Active Course</p>
              <p className="text-sm text-muted-foreground">Course will be visible to students.</p>
            </div>
            <Switch checked={form.is_active} onCheckedChange={(checked) => setForm({ ...form, is_active: checked })} />
          </div>
        </div>

        <Button size="lg" type="submit" disabled={loading} className="min-w-[180px]">
          {loading ? (data ? "Updating..." : "Creating...") : (data ? "Update Course" : "Create Course")}
        </Button>
      </form>
    </div>
  );
};

export default CreateUpdateCourseContainer;
