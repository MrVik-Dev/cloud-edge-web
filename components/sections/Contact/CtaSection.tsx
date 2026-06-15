import React from "react";

const CtaSection = () => {
  return (
      <section className="py-20 bg-[#0F172A] relative overflow-hidden text-white border-t border-slate-800/60">
        {/* Dynamic Ambient Glow Backdrops */}
        <div
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6557E3] opacity-[0.15] filter blur-[120px] pointer-events-none"
        />
        <div
            className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#32ADE6] opacity-[0.12] filter blur-[100px] pointer-events-none"
        />

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10 max-w-3xl space-y-6">
          {/* Optional Micro-Tag */}
          <div
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
          >
          <span className="text-xs text-[#DDDFF5] font-semibold uppercase tracking-wider">
            Next Cohort Enrolling Now
          </span>
          </div>

          {/* Header content mapped from your original HTML */}
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-white">
            Ready to Start? Let&rsquo;s Talk
          </h2>

          {/* Paragraph text mapped from your original HTML */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
            Browse all 10 SAP and Salesforce courses or reach out directly for personalised guidance from a Cloud Edge training advisor.
          </p>

          {/* Premium Styled CTA Button Row */}
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
              {/* Exactly retained your pristine Green WhatsApp path vector */}
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
              <span>Message Us on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
  );
};

export default CtaSection;