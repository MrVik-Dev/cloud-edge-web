
export interface IBatches {
  id?: string;
  name: string;
  description: string;
  course_id: string;
  class_days: string[];
  mode: string;
  max_students?: number;
  is_active?: boolean;
  created_at?: Date;
  timezone?: string;
  courses?: ICourse;
}

export interface ICourse {
  id?: string;
  name: string;
  label?: string;
  description?: string;
  overview?: string;
  media_url?: string;
  duration?: number;
  outcomes?: string[];
  features?: string[];
  in_avg_salary?: string;
  uk_avg_salary?: string;
  us_avg_salary?: string;
  ca_avg_salary?: string;
  is_active?: boolean;
  created_at?: Date;
  is_deleted?: boolean;
}

export interface ICourseModule {
  id?: string;
  course_id: string;
  title: string;
  points: string[];
  display_order: number;
}

export interface ICourseTool {
  id?: string;
  course_id: string;
  name: string;
  media: string;
  display_order: number;
}

export interface ICourseHighlight {
  id?: string;
  course_id: string;
  text: string;
  icon_media: string;
  display_order: number;
}

export interface ICourseFAQ {
  id?: string;
  course_id: string;
  question: string;
  answer: string;
  display_order: number;
}

export interface IBatchRegion {
  id?: string;
  batch_id: string;
  country_code: string;
  price: number;
  currency: string;
  start_date?: string | null;
  timezone?: string | null;
  is_active?: boolean;
  is_deleted?: boolean;
  created_at?: string;
  batches?: IBatches;
}