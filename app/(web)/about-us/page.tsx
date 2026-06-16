import React from 'react';
import AboutUsContainer from "@/containers/web/AboutUsContainer";
import {Metadata} from "next";


export const metadata: Metadata = {
    title: "About Cloud Edge Solutions | Leading Online IT Training & Certification Programs",
    description:
        "Learn more about Cloud Edge Solutions, a trusted provider of online IT training and certification programs. Empowering learners worldwide with expert-led courses in Salesforce, SAP, AWS, Data Science, Java, Power BI, and emerging technologies.",
};

const Page = () => {
    return (
        <AboutUsContainer />
    );
};

export default Page;