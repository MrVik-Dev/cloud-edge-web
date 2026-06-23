import { Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    tier: "Individual",
    title: "Course Enrol",
    price: "Contact us",
    note: "for local pricing in your currency",
    description:
      "Join an upcoming open cohort. 0% EMI available in India and UK.",
    features: [
      "Live instructor-led sessions",
      "Sandbox system access every class",
      "Recordings for 6 months",
      "3 full mock certification exams",
      "12-month placement support",
      "Student community access",
    ],
    buttonText: "Browse Courses",
    buttonLink: "/courses",
    featured: false,
  },
  {
    tier: "Individual+",
    title: "Course + Job Support",
    price: "Contact us",
    note: "for local pricing in your currency",
    description:
      "Full course plus placement support and 3 months of job support once you start — so you land the role and thrive in it.",
    features: [
      "Everything in Course Enrol",
      "CV & LinkedIn optimisation",
      "Mock interviews with instructors",
      "200+ employer network access",
      "Job Support Programme — 3 months",
      "Weekly advisor check-ins on the job",
    ],
    buttonText: "Enquire on WhatsApp",
    buttonLink:
      "https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions",
    featured: true,
  },
  {
    tier: "Business",
    title: "Corporate L&D",
    price: "Custom",
    note: "from 3 seats · invoice billing",
    description:
      "Bespoke pricing for teams and organisations, with volume discounts and PO invoicing.",
    features: [
      "Private dedicated cohort",
      "Custom curriculum",
      "Monthly L&D progress reports",
      "Post-delivery instructor access",
      "Public sector invoicing accepted",
    ],
    buttonText: "Request Proposal",
    buttonLink: "mailto:corporate@cloudedge.in",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#f5f5f7] py-24">
      <div className="mx-auto container mx-auto  px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-primary">
            Pricing
          </p>

          <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-[#1d1d1f] md:text-5xl">
            Transparent pricing. Flexible payment.
          </h2>

          <p className="text-[15px] leading-8 text-[#6e6e73]">
            All courses available in INR, GBP, USD and CAD. 0% EMI available on
            every plan.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-[32px] border p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? "border-primary bg-primary text-white shadow-[0_20px_50px_rgba(134,94,245,.18)]"
                  : "border-black/10 bg-white hover:border-primary/20 hover:shadow-[0_15px_40px_rgba(134,94,245,.08)]"
              }`}
            >
              {/* Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-md">
                  Most Popular
                </div>
              )}

              <p
                className={`text-xs font-bold uppercase tracking-[0.15em] ${
                  plan.featured ? "text-white/80" : "text-primary"
                }`}
              >
                {plan.tier}
              </p>

              <h3
                className={`mt-3 text-2xl font-bold tracking-tight ${
                  plan.featured ? "text-white" : "text-[#1d1d1f]"
                }`}
              >
                {plan.title}
              </h3>

              <div
                className={`mt-5 text-4xl font-extrabold ${
                  plan.featured ? "text-white" : "text-[#1d1d1f]"
                }`}
              >
                {plan.price}
              </div>

              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-white/70" : "text-[#86868b]"
                }`}
              >
                {plan.note}
              </p>

              <p
                className={`mt-6 text-sm leading-7 ${
                  plan.featured ? "text-white/80" : "text-[#6e6e73]"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`my-8 border-t ${
                  plan.featured ? "border-white/20" : "border-black/10"
                }`}
              />

              {/* Features */}
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      plan.featured ? "text-white/90" : "text-[#6e6e73]"
                    }`}
                  >
                    <Check
                      size={18}
                      className={plan.featured ? "text-white" : "text-primary"}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                {plan.buttonLink.startsWith("/") ? (
                  <Link
                    href={plan.buttonLink}
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                      plan.featured
                        ? "bg-white text-primary"
                        : "bg-primary text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                ) : (
                  <a
                    href={plan.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
                      plan.featured
                        ? "bg-white text-primary"
                        : "bg-primary text-white"
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}