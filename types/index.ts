
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

  batch_regions: IBatchRegion[]
}


export interface IRelatedCourse {

  related_course_id: string;
  
}

export interface ICourse {
  id?: string;
  name: string;
  label?: string;
  description?: string;
  overview?: string;
  media_url?: string;
  icon_media_url?: string;
  duration?: number;
  outcomes?: string[];
  features?: string[];
  tags?: string[];
  prerequisites?: string[];
  is_featured?: boolean;
  in_avg_salary?: string;
  uk_avg_salary?: string;
  us_avg_salary?: string;
  ca_avg_salary?: string;
  is_active?: boolean;
  created_at?: Date;
  is_deleted?: boolean;
  url_slug?: string;

  highlights: ICourseHighlight[];
  tools: ICourseTool[];
  testimonials?: ICourseTestimonial[];

  nextBatch?: IBatches;
  batches?: IBatches[]; 
  modules?: ICourseModule[];
  faqs?: ICourseFAQ[];

  related_courses?: IRelatedCourse[];
}

export interface ICourseTestimonial {
  id?: string;
  course_id: string;
  review_text?: string;
  person_name?: string;
  person_designation?: string;
  is_active?: boolean;
  is_deleted?: boolean;
  created_at?: Date;
  media_url?: string;
  is_featured?: boolean;
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

export  interface  IBlogs {
  id?: string
  title?: string
  description?: string
  url_slug?: string
  media_url?: string
  tags?: string[]
  created_at?: Date
}

export  interface  IResponse {
  data: any[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}