const employers = [
  "Deloitte",
  "Accenture",
  "Infosys",
  "TCS",
  "Wipro",
  "Capgemini",
  "IBM",
  "Cognizant",
  "HCL Technologies",
  "PwC",
  "KPMG",
  "EY",
  "Salesforce",
  "SAP",
  "NHS",
  "Barclays",
  "Lloyds Banking Group",
  "JP Morgan",
  "Amazon",
  "Microsoft",
];

const stats = [
  {
    value: "94%",
    label:
      "of active job seekers placed within 6 months of completing their course",
  },
  {
    value: "₹8.5 LPA",
    label:
      "average first SAP/Salesforce salary for India-based graduates",
  },
  {
    value: "£52k",
    label:
      "average first SAP/Salesforce salary for UK-based graduates",
  },
];

export default function CareerOutcomesSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Career Outcomes
          </p>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            Where our graduates work.
          </h2>

          <p className="text-[15px] leading-8 text-[#6e6e73]">
            Cloud Edge graduates have gone on to roles at some of the world's
            leading organisations — hired directly through our 200+ partner
            network.
          </p>
        </div>

        {/* Employers */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {employers.map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border border-black/10
                bg-white
                px-5 py-3
                text-sm font-semibold text-[#1d1d1f]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:shadow-[0_10px_30px_rgba(134,94,245,.08)]
              "
            >
              {item}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.value}
              className="
                rounded-3xl
                border border-black/10
                bg-white
                p-8
                text-center
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_15px_40px_rgba(134,94,245,.08)]
              "
            >
              <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-primary">
                {item.value}
              </h3>

              <p className="text-sm leading-7 text-[#6e6e73]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}