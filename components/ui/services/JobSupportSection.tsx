import {
  Briefcase,
  FileText,
  MessageSquare,
  Pencil,
  Phone,
} from "lucide-react";

const stats = [
  {
    value: "94",
    suffix: "%",
    label: "of Job Support students pass their probation period",
  },
  {
    value: "48",
    suffix: "h",
    label: "maximum response time on any submitted task query",
  },
  {
    value: "6",
    suffix: "mo",
    label: "standard support duration, extendable as needed",
  },
  {
    value: "10",
    suffix: "+",
    label: "SAP and Salesforce modules covered by our advisor team",
  },
];

const timeline = [
  {
    title: "Onboarding call",
    description:
      "We match you with a module-specific advisor (FICO, MM, SF Admin, etc.) and map your new role, client environment, and task types before you start.",
  },
  {
    title: "Submit real tasks",
    description:
      "Send live tickets, config requests or client queries and we'll guide you through them step by step.",
  },
  {
    title: "Weekly check-in sessions",
    description:
      "30-minute weekly calls to review progress and improve client communication skills.",
  },
  {
    title: "Escalation cover",
    description:
      "Complex UAT or stakeholder meetings? Your advisor is there when it matters.",
  },
  {
    title: "Exit & profile update",
    description:
      "Refresh your CV with real project experience and prepare for your next opportunity.",
  },
];

const covers = [
  {
    icon: Briefcase,
    title: "SAP Support",
    desc: "FICO, MM, Basis, ABAP, SuccessFactors guidance from experts.",
  },
  {
    icon: Pencil,
    title: "Salesforce Support",
    desc: "Admin, LWC, Apex debugging, Flow and Integration support.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    desc: "Email templates and stakeholder communication best practices.",
  },
  {
    icon: FileText,
    title: "Docs & Contracting",
    desc: "Timesheets, SOW review and project documentation guidance.",
  },
];

export default function JobSupportSection() {
  return (
    <section className="bg-[#f5f5f7] py-20">
      <div className="mx-auto container mx-auto  px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Job Support Programme
          </p>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            We stay with you after you start.
          </h2>

          <p className="text-[15px] leading-8 text-[#6e6e73]">
            Landing the job is only half the challenge. Our Job Support
            Programme gives freshers and career switchers a safety net during
            the hardest part — the first months of a live SAP or Salesforce
            role.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/10 bg-white p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              <h3 className="text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
                {item.value}
                <span className="text-lg text-[#6e6e73]">{item.suffix}</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6e6e73]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 grid gap-16 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              How It Works
            </p>

            <div className="relative border-l border-primary/20 pl-8">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative mb-10">
                  <div className="absolute -left-[50px] flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {index + 1}
                  </div>

                  <h4 className="mb-2 text-lg font-bold text-[#1d1d1f]">
                    {item.title}
                  </h4>

                  <p className="text-sm leading-7 text-[#6e6e73]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Covers */}
          <div>
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.15em] text-primary">
              What's Covered
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {covers.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d1d1f] text-white">
                      <Icon size={18} />
                    </div>

                    <h4 className="mb-2 font-bold text-[#1d1d1f]">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-6 text-[#6e6e73]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-6 flex gap-4 rounded-2xl border border-black/10 bg-white p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1d1d1f] text-white">
                <Phone size={18} />
              </div>

              <div>
                <h4 className="mb-2 text-lg font-bold text-[#1d1d1f]">
                  Interested in Job Support?
                </h4>

                <p className="mb-4 text-sm leading-7 text-[#6e6e73]">
                  Message us with your module, role and start date.
                </p>

                <a
                  href="https://wa.me/447442586325"
                  target="_blank"
                  className="inline-flex items-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}