const steps = [
  {
    number: "01",
    label: "Stage 01 — Departure",
    title: "Consult & Enrol",
    description:
      "A course advisor responds within 60 minutes, recommends the right course, and invites you to a free live demo session before you pay anything.",
  },
  {
    number: "02",
    label: "Stage 02 — In Flight",
    title: "Learn Live & Hands-On",
    description:
      "Attend live Zoom sessions, log into a real SAP or Salesforce system every class, and build practical skills with max 15 students per cohort.",
  },
  {
    number: "03",
    label: "Stage 03 — Final Approach",
    title: "Certify",
    description:
      "Complete 3 full timed mock exams and a dedicated exam strategy session. 88% of students pass their official certification on the first attempt.",
  },
  {
    number: "04",
    label: "Stage 04 — Destination",
    title: "Get Hired & Supported",
    description:
      "Placement team handles CV, LinkedIn and interviews. Job Support keeps you covered once you start. 94% of active job seekers placed within 6 months.",
  },
];

export default function LearningJourneySection() {
  return (
    <section className="bg-[#f5f5f7] py-20">
      <div className="mx-auto container mx-auto  px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
            The Learning Journey
          </p>

          <h2 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
            From enquiry to employed in 4 stages.
          </h2>

          <p className="text-[15px] leading-8 text-[#6e6e73]">
            Your structured path into international tier-1 tech consulting —
            the same journey 5,800+ Cloud Edge graduates have taken.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {/* Desktop Line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-black/10 xl:block" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              {/* Circle */}
              <div className="mx-auto mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-black/10 bg-white text-sm font-extrabold text-[#1d1d1f] transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-[0_0_0_5px_rgba(0,113,227,.1)]">
                {step.number}
              </div>

              {/* Label */}
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                {step.label}
              </p>

              {/* Title */}
              <h3 className="mb-3 text-[18px] font-bold tracking-tight text-[#1d1d1f]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-[#6e6e73]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}