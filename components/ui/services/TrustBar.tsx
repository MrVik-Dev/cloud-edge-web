const trustItems = [
  "5,800+ Professionals Trained",
  "94% Placement Rate",
  "8–14 Yrs Instructor Experience",
  "Live Online — Globally Available",
  "0% EMI on Every Course",
];

export default function TrustBar() {
  return (
    <section className="bg-[#efeefc] py-6">
      <div className="mx-auto container mx-auto  px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {trustItems.map((item) => (
            <div
              key={item}
              className="
                flex items-center gap-2
                rounded-full
                border border-black/10
                bg-white
                px-5 py-3
                text-xs font-medium text-[#6e6e73]
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:border-primary/20
                hover:shadow-[0_8px_20px_rgba(134,94,245,.08)]
              "
            >
              <div className="h-[6px] w-[6px] rounded-full bg-primary" />

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}