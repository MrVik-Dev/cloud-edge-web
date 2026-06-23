"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

// Mocking the image element/import as requested by the layout design
// If you have a custom asset, replace this with your local import path.
const WHATSAPP_LOGO_SVG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='white'><path d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z'/></svg>";

const FaqSection = () => {
  // Track open state for any item. Stored by array index.
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first one open

  const faqs = [
    {
      question: "How quickly will you respond to my enquiry?",
      answer: "All WhatsApp messages get a response within 60 minutes on weekdays and Saturday mornings. Email responses arrive within 2 working hours. We never leave an enquiry unanswered.",
    },
    {
      question: "Can I attend a free demo before paying?",
      answer: "Yes — always. We offer free live demo sessions for every single course. You will meet your instructor, access the SAP or Salesforce system and ask any question before committing.",
    },
    {
      question: "Do you offer corporate or group training?",
      answer: "Yes. We run dedicated group cohorts for companies of any size, with custom curriculum and invoice-based billing. Email corporate@cloudedge.in for a tailored proposal.",
    },
    {
      question: "Which countries do you serve?",
      answer: "Our live online training is available globally. We have active student communities in India, UK, UAE, USA and Canada with local pricing in INR, GBP, USD and CAD.",
    },
    {
      question: "I'm not sure which course to choose — can you help?",
      answer: "This is one of the most common reasons people contact us. Message us on WhatsApp with your background, current role and career goal and our advisor will recommend the right path.",
    },
    {
      question: "Is 0% EMI available?",
      answer: "Yes. Every Cloud Edge course is available on a 0% EMI plan, typically over 6 monthly instalments. Available in India (UPI/bank EMI) and the UK (finance plan). Contact us for exact terms.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
      <section className="py-20 bg-[#FAFAFD] border-t border-[#E6E8F5]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: List Layout Questions */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#DDDFF5] px-4 py-1.5 rounded-full mb-3">
                <span className="text-xs text-[#6557E3] font-semibold uppercase tracking-wider">
                  Questions &amp; Answers
                </span>
                </div>
                <h2 className="font-bold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-[#1E293B] mb-2">
                  Everything You Need to Know
                </h2>
                <p className="text-sm text-[#64748B]">
                  Still have questions?{" "}
                  <a href="/contact-us" className="text-[#6557E3] font-semibold hover:underline">
                    Contact us
                  </a>{" "}
                  directly.
                </p>
              </div>

              {/* Accordion Container */}
              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                      <div
                          key={idx}
                          className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                              isOpen ? "border-[#6557E3]/40 shadow-sm" : "border-[#E6E8F5]"
                          }`}
                      >
                        {/* Trigger Button Row */}
                        <button
                            type="button"
                            onClick={() => toggleFaq(idx)}
                            className="w-full flex items-center justify-between p-5 text-left font-bricolage-grotesque font-bold text-sm sm:text-base text-[#1E293B] hover:text-[#6557E3] transition-colors focus:outline-none cursor-pointer select-none"
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                              className={`w-4 h-4 text-[#94A3B8] transform transition-all duration-200 shrink-0 ml-4 ${
                                  isOpen ? "rotate-180 text-[#6557E3]" : ""
                              }`}
                          />
                        </button>

                        {/* Smooth Dynamic Grid Accordion Height Transition */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${
                                isOpen
                                    ? "grid-rows-[1fr] opacity-100 border-t border-[#F1F1FD]"
                                    : "grid-rows-[0fr] opacity-0 pointer-events-none"
                            }`}
                        >
                          <div className="overflow-hidden">
                            <div className="p-5 text-xs sm:text-sm text-[#64748B] leading-relaxed bg-[#FAFAFD]/40">
                              {faq.answer}
                            </div>
                          </div>
                        </div>
                      </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Cards Widget Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-6 space-y-4 lg:mt-16">

              {/* Box 1: Support Channel */}
              <div className="bg-[#0F172A] rounded-3xl p-6 text-white relative overflow-hidden shadow-sm">
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#6557E3] opacity-20 filter blur-xl" />
                <div className="relative z-10 space-y-4">
                  <div className="text-3xl">💬</div>
                  <div>
                    <h3 className="font-bricolage-grotesque text-base font-bold tracking-tight mb-1">
                      Still Have Questions?
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Our advisors are on WhatsApp Monday to Saturday. We typically respond within 60 minutes.
                    </p>
                  </div>
                  <a
                      href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#25D366] text-white rounded-full text-xs font-bold transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                  >
                    <img src={WHATSAPP_LOGO_SVG} alt="whatsapp-logo" className="w-4 h-4" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Box 2: Callout Voucher */}
              <div className="bg-white border border-[#E6E8F5] rounded-3xl p-6 text-center space-y-3 shadow-sm">
                <div className="text-3xl">🎓</div>
                <div>
                  <h4 className="font-bricolage-grotesque text-sm font-bold text-[#1E293B] mb-1">
                    Free Demo Class
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed max-w-xs mx-auto">
                    Attend a live session for free before you commit. No payment, no obligation.
                  </p>
                </div>
                <a
                    href="mailto:info@cloudedge.in?subject=Free Demo Class Request"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#0F172A] text-white rounded-full text-xs font-semibold transition-colors duration-150 hover:bg-slate-800"
                >
                  <span>Book a Demo</span>
                  <span>&rarr;</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
  );
};

export default FaqSection;
