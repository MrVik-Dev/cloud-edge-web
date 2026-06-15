"use client"

import React, {useState} from 'react';
import IN from "@/public/icons/IN.svg"
import GB from "@/public/icons/GB.svg"
import CA from "@/public/icons/CA.svg"
import AE from "@/public/icons/AE.svg"
import US from "@/public/icons/US.svg"
import whatsapp from "@/public/icons/whatsapp.svg"
import Image from "next/image";

// DATA STRUCTURES
const companies = [
  "Deloitte", "Accenture", "Infosys", "TCS", "Wipro", "Capgemini",
  "IBM", "Cognizant", "HCL Technologies", "Salesforce", "SAP",
  "PwC", "KPMG", "EY", "NHS", "Barclays", "Amazon", "Microsoft",
  "JP Morgan", "Lloyds Banking Group"
];

const regions = [
  {flag: IN, country: "India", stats: "3,200+ students", meta: "INR pricing · IST batches"},
  {flag: GB, country: "United Kingdom", stats: "1,100+ students", meta: "GBP pricing · BST batches"},
  {flag: US, country: "United States", stats: "620+ students", meta: "USD pricing · EST/PST"},
  {flag: CA, country: "Canada", stats: "380+ students", meta: "CAD pricing · Weekend batches"},
  {flag: AE, country: "UAE & Gulf", stats: "500+ students", meta: "USD/AED · Evening batches"}
];

const faqsData = [
  {
    q: "Are Cloud Edge courses officially accredited?",
    a: "Our courses are CPD accredited and aligned to official SAP and Salesforce certification syllabuses. We are not an official SAP or Salesforce authorised training partner but our curriculum is built directly from official exam guides, and our pass rates reflect that."
  },
  {
    q: "How long to get a job after completing a course?",
    a: "94% of our graduates who actively apply for SAP or Salesforce roles secure one within 6 months. Most students with strong interview preparation receive offers within 2–3 months of certification."
  },
  {
    q: "Do I need prior SAP or Salesforce experience?",
    a: "No prior experience is required for beginner courses (FICO, MM, SF Administrator). Some courses (ABAP, LWC, Integration) benefit from a basic programming background. Each course page specifies the exact prerequisites."
  },
  {
    q: "What is the difference between SAP and Salesforce careers?",
    a: "SAP is dominant in large enterprises across manufacturing, BFSI and the public sector. Salesforce leads in CRM, sales and customer service. Both have strong global demand and clear career paths. Your existing background typically points naturally to one or the other."
  },
  {
    q: "Are sessions recorded if I miss one?",
    a: "Yes. Every live session is recorded and available in your student portal within 24 hours. Recordings are accessible for 6 months from the course start date."
  },
  {
    q: "What is the available payment options?",
    a: "Bank transfer, UPI and card in India; BACS and card in the UK; wire transfer and card in the USA and Canada. 0% EMI available in all regions. Contact us for the exact payment options for your country and course."
  },
  {
    q: "Do you provide a certificate on completion?",
    a: "Yes. All students who complete the course receive a Cloud Edge Solutions certificate of completion. This is separate from the official SAP or Salesforce certification, which you sit independently after our exam prep."
  },
  {
    q: "Can I take both SAP and Salesforce courses?",
    a: "Yes. Many students start with one platform and later add the other. We recommend completing one course and gaining work experience before adding a second. Talk to our advisors for a personalised recommendation."
  }
];

const CorporateOutcomesAndFaq = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
      <div className="bg-white">

        {/* 1. EMPLOYERS & OUTCOMES SECTION (DARK THEME) */}
        <section className="py-20 bg-[#0F172A] relative overflow-hidden text-white">
          {/* Decorative Glow Ring */}
          <div
              className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#6557E3] opacity-20 filter blur-[100px] pointer-events-none"/>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#DDDFF5] font-semibold uppercase tracking-wider">Career Outcomes</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-white">
                Where Our Graduates Work
              </h2>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Cloud Edge graduates have gone on to roles at some of the world’s leading organisations.
              </p>
            </div>

            {/* Scrolling Ticker Layout / Cloud Badge Grid */}
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto mb-16">
              {companies.map((company, i) => (
                  <span key={i}
                        className="text-xs sm:text-sm font-medium bg-slate-800/60 border border-slate-700/50 text-slate-300 px-4 py-2 rounded-xl transition-colors duration-200 hover:bg-slate-800 hover:text-white">
                {company}
              </span>
              ))}
            </div>

            {/* Outcome Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-slate-800 pt-12">
              <div className="text-center space-y-2 p-4">
                <div
                    className="text-4xl sm:text-5xl font-extrabold text-[#6557E3] font-bricolage-grotesque tracking-tight">94%
                </div>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                  of active job seekers placed within 6 months of completing their course
                </p>
              </div>
              <div className="text-center space-y-2 p-4 border-y md:border-y-0 md:border-x border-slate-800/80">
                <div
                    className="text-4xl sm:text-5xl font-extrabold text-white font-bricolage-grotesque tracking-tight">₹8.5
                  LPA
                </div>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                  average first SAP / Salesforce salary for India-based graduates
                </p>
              </div>
              <div className="text-center space-y-2 p-4">
                <div
                    className="text-4xl sm:text-5xl font-extrabold text-[#32ADE6] font-bricolage-grotesque tracking-tight">£52k
                </div>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
                  average first SAP / Salesforce salary for UK-based graduates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. GLOBAL REACH SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div
                  className="inline-flex items-center gap-2 bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#8B79FD] font-semibold uppercase tracking-wider">Our Reach</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
                One Classroom, Five Countries
              </h2>
              <p className="text-sm text-[#64748B] max-w-md mx-auto leading-relaxed">
                The same expert instructor teaches students from five countries in the same live session simultaneously.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {regions.map((reach, idx) => (
                  <div key={idx}
                       className="bg-[#FAFAFD] border border-[#E6E8F5] rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-sm">
                    {/*<div className="text-3xl mb-2 select-none">{reach.flag}</div>*/}
                    <Image
                        src={reach.flag}
                        alt={reach.country}
                        className="w-7 h-7 mb-2"
                    />
                    <h3 className="font-bricolage-grotesque text-sm font-bold text-[#1E293B] mb-1">
                      {reach.country}
                    </h3>
                    <div className="text-[11px] text-[#64748B] leading-relaxed font-medium">
                      <span className="text-[#6557E3] font-semibold block mb-0.5">{reach.stats}</span>
                      {reach.meta}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. FAQ SECTION */}
        <section className="py-20 bg-[#FAFAFD] border-t border-[#E6E8F5]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Column: List Layout Questions */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <div
                      className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#DDDFF5] px-4 py-1.5 rounded-full mb-3">
                    <span
                        className="text-xs text-[#6557E3] font-semibold uppercase tracking-wider">Questions &amp; Answers</span>
                  </div>
                  <h2 className="font-bold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-[#1E293B] mb-2">
                    Everything You Need to Know
                  </h2>
                  <p className="text-sm text-[#64748B]">
                    Still have questions? <a href="/contact" className="text-[#6557E3] font-semibold hover:underline">Contact
                    us</a> directly.
                  </p>
                </div>

                <div className="space-y-3">
                  {faqsData.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                        <div key={idx}
                             className="bg-white border border-[#E6E8F5] rounded-2xl overflow-hidden transition-all duration-200">
                          <button
                              onClick={() => setOpenFaq(isOpen ? null : idx)}
                              className="w-full flex items-center justify-between p-5 text-left font-bricolage-grotesque font-bold text-sm sm:text-base text-[#1E293B] hover:text-[#6557E3] transition-colors focus:outline-none"
                          >
                            <span>{faq.q}</span>
                            <svg
                                className={`w-4 h-4 text-[#94A3B8] transform transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-[#6557E3]' : ''}`}
                                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                          </button>

                          <div
                              className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-[#F1F1FD]' : 'max-h-0'}`}>
                            <div className="p-5 text-xs sm:text-sm text-[#64748B] leading-relaxed bg-[#FAFAFD]/40">
                              {faq.a}
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
                  <div
                      className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#6557E3] opacity-20 filter blur-xl"/>
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
                      {/* Embedded Whatsapp Vector */}
                      <Image src={whatsapp} alt={"whatsapp-logo"} className={"w-5 h-5"}/>
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

        {/* 4. CTA BANNER BAND */}
        <section className="py-20 bg-[#0F172A] relative overflow-hidden text-white border-t border-slate-800/60">
          {/* Dynamic Ambient Glow Backdrops */}
          <div
              className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6557E3] opacity-[0.15] filter blur-[120px] pointer-events-none"/>
          <div
              className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#32ADE6] opacity-[0.12] filter blur-[100px] pointer-events-none"/>

          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-3xl space-y-6">
            {/* Optional Micro-Tag */}
            <div
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              <span
                  className="text-xs text-[#DDDFF5] font-semibold uppercase tracking-wider">Next Cohort Enrolling Now</span>
            </div>

            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-white">
              Ready to Transform Your Career?
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
              Browse all 10 SAP and Salesforce courses, book a free demo session, or message us on WhatsApp for
              personalised guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                  href="/courses"
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0F172A] font-bold text-sm rounded-full shadow-lg hover:bg-slate-100 transition-all duration-150 transform hover:scale-[1.01] active:scale-[0.99] text-center"
              >
                Browse All Courses &rarr;
              </a>

              <a
                  href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 bg-slate-800/80 border border-slate-700/60 text-white font-bold text-sm rounded-full backdrop-blur-sm hover:bg-slate-800 hover:border-slate-600 transition-all duration-150 transform hover:scale-[1.01] active:scale-[0.99]"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </div>
  );
};

export default CorporateOutcomesAndFaq;