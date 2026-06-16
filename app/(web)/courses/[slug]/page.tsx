import { Metadata } from "next";
import { getCourseBySlug } from "@/app/(asgard)/asgard/academics/courses/actions";
import CourseDetailsContainer from "@/containers/web/CourseDetailsContainer";
import {ICourse} from "@/types";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
  const { slug } = await params;

  const course = await getCourseBySlug(slug) as ICourse;

  if (!course) {
    return {
      title: "Course Not Found | Cloud Edge Solutions",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.name} Training & Certification | Cloud Edge Solutions`,
    description:
        course.description ||
        `Enroll in ${course.name} online training and certification program with expert instructors at Cloud Edge Solutions.`,
    keywords: course.tags || "",
    openGraph: {
      title: `${course.name} Training & Certification`,
      description:
          course.description ||
          `Learn ${course.name} with industry-focused online training.`,
      images: course.media_url
          ? [
            {
              url: course.media_url,
              width: 1200,
              height: 630,
            },
          ]
          : [],
      type: "website",
    },
    alternates: {
      canonical: `https://cloudedgesolutions.co.in/courses/${slug}`,
    },
  };
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;

  const courseData = await getCourseBySlug(slug);

  return <CourseDetailsContainer data={courseData} />;
};

export default Page;