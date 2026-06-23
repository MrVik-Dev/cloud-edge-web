"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior experience to enrol?",
    answer:
      "No. Our SAP and Salesforce courses are designed for career changers and professionals with no prior ERP experience. A free demo session helps you confirm the right starting point before enrolling.",
  },
  {
    question: "What exactly is the Job Support Programme?",
    answer:
      "Job Support is a post-placement service where a dedicated advisor helps you handle live tasks in your new SAP or Salesforce role. You submit real work scenarios — tickets, config requests, client queries — and your advisor guides you through the solution. It also includes weekly check-ins, client communication coaching, and escalation cover for high-pressure moments like go-lives.",
  },
  {
    question: "Are sessions recorded if I miss one?",
    answer:
      "Yes — all live sessions are recorded and available within 24 hours. Recordings are accessible for 6 months from your course start date so you can review any module as many times as you need.",
  },
  {
    question: "How does the placement service work?",
    answer:
      "After completing your course, your placement advisor works with you on your CV and LinkedIn profile, connects you to our 200+ hiring partner network, and coaches you through interviews. 94% of active job seekers are placed within 6 months. Placement support is included in every course — 12 months.",
  },
  {
    question: "Can we customise the curriculum for our company?",
    answer:
      "Yes. Corporate L&D clients receive a pre-training needs analysis where we map course content to your specific SAP or Salesforce configuration, industry and business objectives.",
  },
  {
    question: "Is 0% EMI available on all courses?",
    answer:
      "Yes — every Cloud Edge course can be split into monthly instalments at 0% interest. Available via UPI and bank EMI in India, and via our finance plan in the UK.",
  },
  {
    question: "Which certifications do your courses prepare for?",
    answer:
      "SAP courses align to official SAP S/4HANA certification exams including C_TS4FI_2023 (FICO) and C_THR81_2311 (SuccessFactors). Salesforce courses prepare for ADM-201 and Platform Developer I certifications.",
  },
  {
    question: "Are Cloud Edge courses officially accredited?",
    answer:
      "Our courses are CPD accredited and aligned to official SAP and Salesforce certification syllabuses. Our 88% first-attempt pass rate reflects that.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            FAQ
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            Everything You Need to Know
          </h2>
        </div>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-[0_10px_40px_rgba(134,94,245,.08)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 p-7 text-left"
                >
                  <span className="text-lg font-semibold text-[#1d1d1f]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-primary transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-black/10 px-7 py-6 text-[15px] leading-8 text-[#6e6e73]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="mb-3 text-lg font-semibold text-[#1d1d1f]">
            💬 Still have questions?
          </div>

          <p className="mb-6 max-w-xl text-sm leading-7 text-[#6e6e73]">
            Our advisors are on WhatsApp Monday to Saturday — we typically
            respond within 60 minutes.
          </p>

          <a
            href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <MessageCircle size={18} />
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}