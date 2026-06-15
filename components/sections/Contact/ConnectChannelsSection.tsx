import React from "react";
import { MessageCircle, Mail, Phone, BookOpen } from "lucide-react";
import whatsapp from "@/public/images/whatsapp.svg"
import email from "@/public/images/email.svg"
import phone from "@/public/images/phone.svg"
import ticket from "@/public/images/ticket.svg"
import Image from "next/image";

const ConnectChannelsSection = () => {
  return (
      <section className="bg-slate-50 py-20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6557E3]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mx-auto mb-4 shadow-3xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3]" />
              How to Reach Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-bricolage-grotesque tracking-tight text-slate-900">
              Four Ways to Connect
            </h2>

            <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed">
              Have questions about modules or timelines? Get in touch with our live advisors right now through any channel below.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

            {/* WHATSAPP */}
            <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between bg-white border border-[#DDDFF5] rounded-2xl p-6 transition-all duration-300 shadow-3xs hover:shadow-md hover:border-[#4361EE]/40 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-md shadow-[#25D366]/20 transition-transform group-hover:scale-105">
                 <Image src={whatsapp} alt={"Whatsapp"} className={"w-6 h-6"} />
                </div>

                <div className="mt-5">
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
                  WhatsApp
                </span>
                  <h4 className="text-base font-bold text-slate-800 tracking-tight mt-0.5 group-hover:text-[#4361EE] transition-colors">
                    +44 744 258 6325
                  </h4>
                </div>
              </div>

              <p className="text-xs text-emerald-600 font-medium bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-xl w-fit mt-5">
                Fastest &mdash; reply within 60 min
              </p>
            </a>

            {/* EMAIL */}
            <a
                href="mailto:info@cloudedge.in"
                className="group flex flex-col justify-between bg-white border border-[#DDDFF5] rounded-2xl p-6 transition-all duration-300 shadow-3xs hover:shadow-md hover:border-[#4361EE]/40 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFEEFC] flex items-center justify-center text-[#4361EE] shadow-sm transition-transform group-hover:scale-105">
                  <Image src={email} alt={"mail"} className={"w-6 h-6"} />
                </div>

                <div className="mt-5">
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
                  Email Address
                </span>
                  <h4 className="text-base font-bold text-slate-800 tracking-tight mt-0.5 group-hover:text-[#4361EE] transition-colors">
                    info@cloudedge.in
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl w-fit mt-5">
                Response within 2 working hours
              </p>
            </a>

            {/* PHONE */}
            <a
                href="tel:+447442586325"
                className="group flex flex-col justify-between bg-white border border-[#DDDFF5] rounded-2xl p-6 transition-all duration-300 shadow-3xs hover:shadow-md hover:border-[#4361EE]/40 transform hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EFEEFC] flex items-center justify-center text-[#4361EE] shadow-sm transition-transform group-hover:scale-105">
                  <Image src={phone} alt={"phone"} className={"w-6 h-6"} />
                </div>

                <div className="mt-5">
                <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400">
                  Phone &mdash; UK
                </span>
                  <h4 className="text-base font-bold text-slate-800 tracking-tight mt-0.5 group-hover:text-[#4361EE] transition-colors">
                    +44 744 258 6325
                  </h4>
                </div>
              </div>

              <p className="text-xs text-slate-500 font-medium bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl w-fit mt-5">
                Mon&ndash;Sat &bull; 9 AM &ndash; 7 PM BST
              </p>
            </a>

            {/* DEMO */}
            <a
                href="mailto:info@cloudedge.in?subject=Free Demo Class Request"
                className="group flex flex-col justify-between bg-white border border-[#DDDFF5] rounded-2xl p-6 transition-all duration-300 shadow-3xs hover:shadow-md hover:border-[#6557E3]/40 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-orange-400/10 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center text-white shadow-md shadow-orange-500/10 transition-transform group-hover:scale-105">
                  <Image src={ticket} alt={"ticket"} className={"w-6 h-6"} />
                </div>

                <div className="mt-5">
                <span className="text-[10px] tracking-wider uppercase font-bold text-orange-500">
                  Free Demo Class
                </span>
                  <h4 className="text-base font-bold text-slate-800 tracking-tight mt-0.5 group-hover:text-red-500 transition-colors">
                    Book a Session
                  </h4>
                </div>
              </div>

              <p className="text-xs text-orange-600 font-medium bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-xl w-fit mt-5">
                Attend live before you enrol
              </p>
            </a>

          </div>
        </div>
      </section>
  );
};

export default ConnectChannelsSection;