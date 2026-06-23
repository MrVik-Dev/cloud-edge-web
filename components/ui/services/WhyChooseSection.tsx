const whyChooseData = [
  {
    icon: "🎓",
    title: "Certified Expert Trainers",
    description:
      "Every trainer is an active SAP or Salesforce consultant with 8–14 years of real project experience at firms like Deloitte, Accenture and IBM.",
    badge: "8–14 yrs avg industry experience",
  },
  {
    icon: "📹",
    title: "Session Recordings",
    description:
      "Every live session is recorded. Access replays for 6 months so you can revise, rewatch and never fall behind — even if you miss a class.",
    badge: "6 months recording access",
  },
  {
    icon: "🤝",
    title: "Placement Assistance",
    description:
      "Resume writing, LinkedIn optimisation, mock interviews and direct referrals to our network of 200+ hiring partners including Deloitte and TCS.",
    badge: "200+ hiring partners",
  },
  {
    icon: "⏰",
    title: "Flexible Batches",
    description:
      "Weekday evening and weekend-only batches designed for working professionals. IST, BST, EST and PST options available across all courses.",
    badge: "India, UK, USA, Canada & UAE",
  },
  {
    icon: "👥",
    title: "Small Batch Sizes",
    description:
      "Maximum 15 students per cohort. More Q&A time, personalised feedback, and direct instructor access than any large-group training provider.",
    badge: "≤15 students per batch",
  },
  {
    icon: "🏆",
    title: "Mock Certification Exams",
    description:
      "500+ exam-quality practice questions curated by certified trainers. 3 full timed mock exams and a dedicated exam strategy session in every course.",
    badge: "88% first-attempt pass rate",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Why Choose Us
          </p>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            The advantage that gets you hired.
          </h2>

          <p className="text-[15px] leading-8 text-[#6e6e73]">
            Six reasons 5,800+ professionals chose Cloud Edge over every other
            provider.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseData.map((item) => (
            <div
              key={item.title}
              className="
                rounded-[28px]
                border border-black/10
                bg-white
                p-7
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-[0_15px_40px_rgba(134,94,245,.08)]
              "
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#1d1d1f]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-7 text-[#6e6e73]">
                {item.description}
              </p>

              {/* Badge */}
              <div className="mt-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                {item.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}