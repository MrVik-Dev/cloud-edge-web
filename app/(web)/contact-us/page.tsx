import React from 'react';
import ContactContainer from "@/containers/web/ContactContainer";
import {Metadata} from "next";


export const metadata: Metadata = {
  title: "Contact Cloud Edge Solutions | Get in Touch for Course Enquiries & Support",
  description:
      "Contact Cloud Edge Solutions for course information, admissions, corporate training, certification guidance, and support. Reach out to our team for Salesforce, SAP, AWS, Data Science, Java, Power BI, and other IT training programs.",

  keywords: [
    "Cloud Edge Solutions contact",
    "IT training institute contact",
    "Salesforce training enquiry",
    "SAP training support",
    "AWS certification training",
    "Data Science courses",
    "Java training institute",
    "Power BI training",
    "online training support",
    "corporate training",
    "technology courses",
    "contact training institute",
  ],

  authors: [{ name: "Cloud Edge Solutions" }],
  creator: "Cloud Edge Solutions",
  publisher: "Cloud Edge Solutions",

  robots: {
    index: true,
    follow: true,
  },

  category: "Education",
};


const Page = () => {
  return (
      <ContactContainer />
  );
};

export default Page;