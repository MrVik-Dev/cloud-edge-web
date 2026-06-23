import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "The SAP FICO training was genuinely outstanding. Real posting scenarios — not textbook theory. I passed my C_TS4FI_2023 certification first attempt and was placed within eight weeks of finishing.",
    name: "Priya Mehta",
    role: "SAP FI Consultant — Infosys, Ahmedabad",
  },
  {
    quote:
      "Switching careers from finance into Salesforce. The ADM-201 course gave me hands-on Salesforce access from day one, and the placement team sorted my CV and coached me through three interview rounds. Incredible value.",
    name: "James Okafor",
    role: "Salesforce Administrator — Accenture, London",
  },
  {
    quote:
      "The Job Support team was incredible during my first go-live. My advisor joined the stakeholder call and walked me through the UAT signoff process. I'd have struggled without that safety net in month one.",
    name: "Arun Krishnamurthy",
    role: "SAP FICO Consultant — Wipro, Bangalore",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            What Our Students Say
          </p>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            5,800+ students can't be wrong.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
                rounded-[32px]
                border border-black/10
                bg-white
                p-8
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_20px_50px_rgba(134,94,245,.08)]
              "
            >
              {/* Stars */}
              <div className="mb-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[15px] leading-8 text-[#6e6e73]">
                "{item.quote}"
              </p>

              {/* Divider */}
              <div className="my-7 border-t border-black/10" />

              {/* User */}
              <div>
                <h4 className="text-[17px] font-bold text-[#1d1d1f]">
                  {item.name}
                </h4>

                <p className="mt-1 text-sm text-[#86868b]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}