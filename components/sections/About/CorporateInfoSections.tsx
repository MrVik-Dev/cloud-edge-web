import React from 'react';

// DATA STRUCTURES
const principles = [
  {
    title: "Practitioners as Teachers",
    description: "Every instructor holds active certifications and works on real implementations. Your trainer is a practitioner with 8–14 years of field experience — not someone who only teaches.",
    icon: (
        <svg className="w-6 h-6 text-[#6557E3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
        </svg>
    )
  },
  {
    title: "Live & Hands-On Always",
    description: "No pre-recorded content. Every session is live on Zoom with real SAP or Salesforce system access so students practise in the same environment they will use on the job.",
    icon: (
        <svg className="w-6 h-6 text-[#4361EE]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
  },
  {
    title: "Certification Outcomes",
    description: "We measure success by exam passes, not completions. Every programme includes dedicated exam prep, full mock tests and a structured exam strategy session.",
    icon: (
        <svg className="w-6 h-6 text-[#14B88A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.119l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
    )
  },
  {
    title: "Truly Global Community",
    description: "Students from India, UK, UAE, USA and Canada share the same classroom. That diversity enriches every discussion and builds a genuine global professional network.",
    icon: (
        <svg className="w-6 h-6 text-[#32ADE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
    )
  },
  {
    title: "Career-First Philosophy",
    description: "Course completion is the beginning. Our 12-month placement support, resume guidance and mock interview coaching are built into every programme at no extra cost.",
    icon: (
        <svg className="w-6 h-6 text-[#E02424]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    )
  },
  {
    title: "Accessible Pricing",
    description: "World-class training should not require a world-class budget. We price in local currency for India, UK, USA and Canada and offer 0% EMI on every single course.",
    icon: (
        <svg className="w-6 h-6 text-[#FF9F0A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    )
  }
];

const instructors = [
  {
    name: "Arun Reddy",
    role: "Lead SAP FICO Instructor",
    meta: "12 years · Deloitte · Infosys",
    bio: "12 years of SAP FICO consulting across BFSI, manufacturing and retail. Delivered S/4HANA Finance implementations at Deloitte. Certified in SAP S/4HANA Finance and Controlling.",
    tags: ["SAP FICO", "S/4HANA", "Controlling"],
    color: "bg-[#4361EE]"
  },
  {
    name: "Sunita Kapoor",
    role: "SAP MM & Basis Instructor",
    meta: "10 years · IBM · Accenture",
    bio: "10 years in SAP Supply Chain and Basis administration across FMCG, oil & gas and pharmaceuticals in the UK and India. Former SAP consultant at IBM and Accenture.",
    tags: ["SAP MM", "SAP Basis", "S/4HANA"],
    color: "bg-[#32ADE6]"
  },
  {
    name: "Pradeep Mehta",
    role: "SAP ABAP Developer Lead",
    meta: "14 years · TCS · Cognizant",
    bio: "14 years of ABAP development across ECC and S/4HANA. Expert in CDS Views, RAP Model and Fiori. Previously Technical Lead at TCS and Cognizant on global SAP rollouts.",
    tags: ["ABAP", "RAP", "CDS", "Fiori"],
    color: "bg-[#5856d6]"
  },
  {
    name: "Rohit Verma",
    role: "Salesforce Lead Instructor",
    meta: "9 years · 8× Certified · London",
    bio: "8-time certified Salesforce professional. 9 years consulting including FTSE 100 implementations from London. Certified in Admin, PD1, PD2, App Builder and Service Cloud.",
    tags: ["SF Admin", "PD1/PD2", "LWC", "Integration"],
    color: "bg-[#6557E3]"
  },
  {
    name: "Divya Sharma",
    role: "Salesforce LWC & Marketing Cloud",
    meta: "7 years · SF specialist",
    bio: "Marketing Cloud and LWC specialist with 7 years of Salesforce front-end development. Co-led Experience Cloud implementations for e-commerce and financial services clients.",
    tags: ["Marketing Cloud", "LWC", "Experience Cloud"],
    color: "bg-[#BF5AF2]"
  },
  {
    name: "Neha Pillai",
    role: "SAP SuccessFactors Instructor",
    meta: "9 years · HCM specialist",
    bio: "SAP SuccessFactors EC and Recruiting specialist with 9 years in cloud HCM. Delivered SF implementations for global enterprises across UK, Middle East and Asia-Pacific.",
    tags: ["SuccessFactors", "Employee Central", "Cloud HCM"],
    color: "bg-[#FF9F0A]"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Salesforce Admin, TechCorp",
    text: "Cleared ADM-201 on my first attempt. The hands-on org access and mock exams gave me real confidence. I had a Salesforce Admin role offer within 5 weeks of finishing.",
    color: "border-t-[#4361EE]",
    avatarBg: "bg-[#4361EE]",
    initials: "PS"
  },
  {
    name: "Kavya Menon",
    role: "SAP FICO Consultant, Deloitte",
    text: "The SAP FICO course was the best investment of my career. Real S/4HANA access from day one, an instructor who has actually delivered SAP projects, and thorough exam prep.",
    color: "border-t-[#32ADE6]",
    avatarBg: "bg-[#32ADE6]",
    initials: "KM"
  },
  {
    name: "Mark Evans",
    role: "Salesforce Developer, Dublin",
    text: "I came from a Java background. The LWC course bridged the gap perfectly. The instructor drew direct parallels between React patterns and LWC which made the learning curve so much gentler.",
    color: "border-t-[#5856d6]",
    avatarBg: "bg-[#5856d6]",
    initials: "ME"
  },
  {
    name: "David Walsh",
    role: "Procurement Manager, Dublin",
    text: "The SAP MM Procure-to-Pay module was taught with real-world scenarios. By week 4 I was processing complete P2P cycles independently. The course I wish I had found 3 years ago.",
    color: "border-t-[#32ADE6]",
    avatarBg: "bg-[#32ADE6]",
    initials: "DW"
  },
  {
    name: "Nitesh Sharma",
    role: "SAP Technical Lead, TCS",
    text: "14 years of ABAP experience and I still learned new things in the CDS and RAP modules. This is genuinely current S/4HANA development content, not ECC topics renamed. Exceptional quality.",
    color: "border-t-[#5856d6]",
    avatarBg: "bg-[#5856d6]",
    initials: "NS"
  },
  {
    name: "Preethi Nair",
    role: "SAP SF Consultant, Deloitte",
    text: "Cleared C_THR81 SuccessFactors first attempt. The Employee Central deep dive and MDF configuration were exactly what the exam needed. Placement support found me 3 job postings in week one.",
    color: "border-t-[#ff9f0a]",
    avatarBg: "bg-[#ff9f0a]",
    initials: "PN"
  }
];

const industries = [
  {
    name: "Banking & Financial Services",
    desc: "SAP FICO and Salesforce CRM are core to banks, insurers and fintech. High demand for certified professionals in UK and India BFSI sectors.",
    icon: (
        <svg className="w-6 h-6 text-[#4361EE]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    )
  },
  {
    name: "Manufacturing & Automotive",
    desc: "SAP MM, PP and FICO are mission-critical in automotive and consumer goods. Among the largest SAP user bases globally.",
    icon: (
        <svg className="w-6 h-6 text-[#6557E3]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    )
  },
  {
    name: "Healthcare & Pharmaceuticals",
    desc: "NHS, hospital trusts and pharma companies increasingly use Salesforce Health Cloud and SAP for HR and supply chain.",
    icon: (
        <svg className="w-6 h-6 text-[#E02424]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    )
  },
  {
    name: "Retail & E-commerce",
    desc: "Salesforce Commerce Cloud, Marketing Cloud and SAP S/4HANA power the largest retail chains and e-commerce platforms.",
    icon: (
        <svg className="w-6 h-6 text-[#14B88A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    )
  },
  {
    name: "Oil, Gas & Energy",
    desc: "SAP MM, PM and Basis are deeply embedded in the energy sector. High demand in the Middle East, UK North Sea and India.",
    icon: (
        <svg className="w-6 h-6 text-[#FF9F0A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
        </svg>
    )
  },
  {
    name: "IT Services & Consulting",
    desc: "Infosys, TCS, Wipro, Accenture, Capgemini and IBM are among the largest hirers of Cloud Edge graduates globally.",
    icon: (
        <svg className="w-6 h-6 text-[#32ADE6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    )
  }
];

const CorporateInfoSections = () => {
  return (
      <div className="bg-white">

        {/* 1. VALUES SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#8B79FD] font-semibold uppercase tracking-wider">What We Stand For</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
                Six Principles That Drive Everything We Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((item, index) => (
                  <div key={index} className="bg-[#FAFAFD] border border-[#E6E8F5] rounded-3xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-[#ECEAFC] flex items-center justify-center mb-5 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-bricolage-grotesque text-lg font-bold text-[#1E293B] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. INSTRUCTORS SECTION */}
        <section className="py-20 bg-[#FAFAFD] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#EFEEFC]/60 via-[#FAFAFD] to-white pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-14 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#DDDFF5] px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#6557E3] font-semibold uppercase tracking-wider">The People Behind the Courses</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
                Meet Our Instructors
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] max-w-xl leading-relaxed">
                Every instructor is an active practitioner with at least 8 years of hands-on consulting experience and a current certification in what they teach.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {instructors.map((instructor, idx) => (
                  <div key={idx} className="bg-white border border-[#E6E8F5] rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm ${instructor.color}`}>
                          {instructor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h3 className="font-bricolage-grotesque text-base font-bold text-[#1E293B]">
                            {instructor.name}
                          </h3>
                          <div className="text-xs text-[#6557E3] font-semibold">{instructor.role}</div>
                          <div className="text-[11px] text-[#94A3B8] font-medium mt-0.5">{instructor.meta}</div>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-[#64748B] mb-5">
                        {instructor.bio}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#F1F1FD]">
                      {instructor.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-[10px] font-bold uppercase tracking-wider bg-[#FAFAFD] border border-[#DDE3F5] text-[#1E293B] px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TESTIMONIALS SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#8B79FD] font-semibold uppercase tracking-wider">Student Success Stories</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
                5,800+ Students Can’t Be Wrong
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testi, idx) => (
                  <div key={idx} className={`bg-[#FAFAFD] border border-[#E6E8F5] ${testi.color} border-t-[3px] rounded-3xl p-6 transition-all duration-300 hover:shadow-md flex flex-col justify-between`}>
                    <div>
                      <div className="text-[#FF9F0A] text-sm mb-3">★★★★★</div>
                      <p className="text-sm leading-relaxed text-[#1E293B] italic mb-6">
                        &ldquo;{testi.text}&rdquo;
                      </p>
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-[#E6E8F5]/60">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${testi.avatarBg}`}>
                        {testi.initials}
                      </div>
                      <div>
                        <h4 className="font-bricolage-grotesque text-sm font-bold text-[#1E293B]">
                          {testi.name}
                        </h4>
                        <p className="text-xs text-[#64748B]">{testi.role}</p>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. INDUSTRIES SECTION */}
        <section className="py-20 bg-[#FAFAFD] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FAFAFD] to-[#EFEEFC]/40 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 bg-[#E3E1FA] border border-[#DDDFF5] px-4 py-1.5 rounded-full">
                <span className="text-xs text-[#6557E3] font-semibold uppercase tracking-wider">Sector Coverage</span>
              </div>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-[#1E293B]">
                Industries Our Students Work In
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, idx) => (
                  <div key={idx} className="bg-white border border-[#E6E8F5] rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#ECEAFC] flex items-center justify-center shrink-0">
                      {ind.icon}
                    </div>
                    <div>
                      <h3 className="font-bricolage-grotesque text-base font-bold text-[#1E293B] mb-1.5 tracking-tight">
                        {ind.name}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#64748B]">
                        {ind.desc}
                      </p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

      </div>
  );
};

export default CorporateInfoSections;