import {
  Activity,
  Clock3,
  FileText,
  IndianRupee,
} from "lucide-react";

const features = [
  {
    icon: Clock3,
    title: "Dedicated Team Batches",
    description:
      "Private cohorts scheduled around your timezone — no shared classes with other organisations.",
  },
  {
    icon: FileText,
    title: "Custom Curriculum",
    description:
      "Content tailored to your exact SAP or Salesforce configuration, industry vertical, and business processes.",
  },
  {
    icon: IndianRupee,
    title: "Volume Pricing & Invoicing",
    description:
      "Group rates from 3 seats. PO-based invoicing for corporates, public sector and universities.",
  },
  {
    icon: Activity,
    title: "L&D Progress Reports",
    description:
      "Monthly reporting on attendance, assessment scores and competency milestones for your L&D team.",
  },
];

const tags = [
  "From 3 seats",
  "Invoice billing",
  "Custom curriculum",
  "Public sector welcome",
  "UK & India",
];

export default function CorporateTrainingSection() {
  return (
    <section
      id="corporate-detail"
      className="relative overflow-hidden bg-[#efeefc] py-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-72 -right-44 h-[700px] w-[700px] rounded-full bg-[#5856d6] opacity-10 blur-[140px]" />

      <div className="absolute -bottom-44 -left-36 h-[500px] w-[500px] rounded-full bg-primary opacity-10 blur-[120px]" />

      <div className="relative z-10 mx-auto container mx-auto  px-6">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_400px]">
          {/* Left */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-primary">
              Corporate Training
            </p>

            <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1d1d1f] md:text-5xl">
              Built for teams.
              <br />
              Priced for scale.
            </h2>

            <p className="max-w-xl text-[15px] leading-8 text-[#6e6e73]">
              Whether you're rolling out SAP, moving to Salesforce, or building
              internal ERP capability — Cloud Edge delivers private cohorts that
              fit your team, timeline, and configuration.
            </p>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-[#6e6e73]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="mailto:corporate@cloudedge.in"
              className="mt-10 inline-flex items-center rounded-full bg-primary px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Request a Proposal →
            </a>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(134,94,245,.12)]"
                >
                  {/* Icon */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon size={18} className="text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-2 text-[15px] font-bold text-[#1d1d1f]">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-7 text-[#6e6e73]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}