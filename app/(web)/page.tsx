import HomeContainer from '@/containers/web/HomeContainer'
import React from 'react'
import {Metadata} from "next";


export const metadata: Metadata = {
  title:
      "Cloud Edge Solutions - Online Training for Salesforce, SAP, AWS, Data Science, JAVA, Power BI",

  description:
      "Enhance your skills with Cloud Edge Solutions' online training. Explore Salesforce, SAP, AWS, Data Science, Java, Power BI, AI, and cloud computing courses for students and professionals across India, USA, and UK.",

  keywords: [
    "Cloud Edge Solutions",
    "online training",
    "Salesforce training",
    "SAP training",
    "AWS training",
    "Data Science course",
    "Java training",
    "Power BI training",
    "AI courses",
    "Cloud Computing training",
    "IT certification",
    "online certification programs",
    "technology training institute",
    "career development courses",
    "corporate training",
    "professional certification",
  ],

  authors: [{ name: "Cloud Edge Solutions" }],
  creator: "Cloud Edge Solutions",
  publisher: "Cloud Edge Solutions",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://cloudedgesolutions.co.in",
  },
};

const page = () => {

  return (
    <HomeContainer />
  )
}

export default page