"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

// REGIONAL ICONS FOR QUICK REFERENCE
import IN from "@/public/icons/IN.svg";
import GB from "@/public/icons/GB.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import email from "@/public/images/email.svg"
import phone from "@/public/images/phone.svg"
import clock from "@/public/images/clock.svg"

const EnquiryFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    country: "India",
    experience: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    setIsSubmitted(true);
  };

  return (
      <section className="bg-[#EFEEFC] pb-24 relative overflow-hidden py-20">
        {/* Decorative background blur blobs synced with hero branding */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#4361EE]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#7C6DFB]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* LEFT PANEL: ENQUIRY FORM BLOCK (60% equivalent) */}
            <div className="lg:col-span-7 bg-white rounded-[24px] p-8 sm:p-12 border border-[#DDDFF5] shadow-xs flex flex-col justify-between">
              <div>
                {/* Status Badge matched to your hero aesthetics */}
                <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6557E3] animate-pulse" />
                  Enquiry Form
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-[#3275FC] to-[#7C6DFB] bg-clip-text text-transparent">
                  Message
                </span>
                </h2>

                <p className="text-[#4A5568] text-sm sm:text-base leading-relaxed mb-8 tracking-tight">
                  Tell us about your background and what you want to achieve. A Cloud Edge advisor will contact you within 2 hours with personalised course recommendations, current fees and available batch dates.
                </p>

                {/* Form Framework */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">First Name</label>
                      <input
                          type="text" id="firstName" value={formData.firstName} onChange={handleChange} required
                          placeholder="First name"
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Last Name</label>
                      <input
                          type="text" id="lastName" value={formData.lastName} onChange={handleChange} required
                          placeholder="Last name"
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                          type="email" id="email" value={formData.email} onChange={handleChange} required
                          placeholder="your@email.com"
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                      <input
                          type="tel" id="phone" value={formData.phone} onChange={handleChange}
                          placeholder="+44 or +91 number"
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="course" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Course Interest</label>
                      <select
                          id="course" value={formData.course} onChange={handleChange} required
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      >
                        <option value="">Select a course&hellip;</option>
                        <optgroup label="☁️ Salesforce">
                          <option value="Salesforce Administrator (ADM-201)">Salesforce Administrator (ADM-201)</option>
                          <option value="Salesforce Developer (PD1)">Salesforce Developer (PD1)</option>
                          <option value="Salesforce LWC Specialist">Salesforce LWC Specialist</option>
                          <option value="Salesforce Marketing Cloud">Salesforce Marketing Cloud</option>
                          <option value="Salesforce Integration">Salesforce Integration</option>
                        </optgroup>
                        <optgroup label="⚙️ SAP">
                          <option value="SAP S/4HANA Finance (FICO)">SAP S/4HANA Finance (FICO)</option>
                          <option value="SAP Materials Management (MM)">SAP Materials Management (MM)</option>
                          <option value="SAP Basis Administration">SAP Basis Administration</option>
                          <option value="SAP ABAP Programming">SAP ABAP Programming</option>
                          <option value="SAP SuccessFactors HCM">SAP SuccessFactors HCM</option>
                        </optgroup>
                        <option value="Not sure — I need guidance">Not sure &mdash; I need guidance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Country</label>
                      <select
                          id="country" value={formData.country} onChange={handleChange}
                          className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                      >
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="UAE / Gulf">UAE / Gulf</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Current Background</label>
                    <select
                        id="experience" value={formData.experience} onChange={handleChange} required
                        className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200"
                    >
                      <option value="">Select your experience level&hellip;</option>
                      <option value="Student / Fresh Graduate">Student / Fresh Graduate</option>
                      <option value="0-2 years work experience">0&ndash;2 years work experience</option>
                      <option value="2-5 years work experience">2&ndash;5 years work experience</option>
                      <option value="5-10 years work experience">5&ndash;10 years work experience</option>
                      <option value="10+ years work experience">10+ years work experience</option>
                      <option value="Already working in SAP / Salesforce">Already working in SAP / Salesforce</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                        id="message" value={formData.message} onChange={handleChange} rows={4}
                        placeholder="Tell us what you want to achieve, any specific questions you have, and the best time to call you..."
                        className="w-full bg-slate-50/50 border border-[#DDDFF5] rounded-xl px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-[#4361EE]    outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Action Button updated to match Hero Main CTA */}
                  <button
                      type="submit"
                      className="w-full bg-[#4361EE] hover:bg-[#3652D1] text-white font-semibold text-sm rounded-full py-4 px-6 shadow-md shadow-[#4361ee]/20 hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                  >
                    <span>Send Enquiry &mdash; We Reply Within 2 Hours</span>
                    <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

              {/* Interactive Success Status Toast */}
              {isSubmitted && (
                  <div className="mt-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-sm font-semibold flex items-center gap-2.5 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    Thank you! A course advisor will be in touch within 2 hours.
                  </div>
              )}
            </div>

            {/* RIGHT PANEL: CHANNELS & LOCAL OFFICE MAPS (40% equivalent) */}
            {/* Changed background from dark slate to soft white matching the cards layout */}
            <div className="lg:col-span-5 bg-white rounded-[24px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border border-[#DDDFF5] shadow-xs">

              {/* Soft Ambient Background Glow inside right panel */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#7C6DFB]/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-8 relative z-10">
                <div>
                  <div className="bg-[#E3E1FA] rounded-full px-4 py-1.5 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-2 mb-4">
                    Quick Contact
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 mb-2">
                    Chat on WhatsApp
                  </h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed tracking-tight">
                    The fastest way to reach our team. We typically reply within 60 minutes on weekdays and Saturday mornings.
                  </p>
                </div>

                {/* Dynamic WhatsApp Button using your application's explicit colors */}
                <a
                    href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm rounded-full px-5 py-4 w-full transition-all shadow-md shadow-emerald-700/10 hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Image src={whatsapp} alt={"whatsapp"} className={" w-5 h-5"} />
                  Open WhatsApp Chat
                </a>

                <div className="w-full h-px bg-[#E6E8FA]" />

                {/* Enhanced Media Reference Rows matching Hero Sub-features */}
                <div className="space-y-4 text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EFEEFC] flex items-center justify-center text-[#4361EE]">
                      <Image src={phone} alt={"phone"} className={" w-4 h-4"} />
                    </div>
                    <span className="text-slate-800 text-sm tracking-tight">+44 744 258 6325 (UK)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EFEEFC] flex items-center justify-center text-[#4361EE]">
                      <Image src={email} alt={"email"} className={" w-4 h-4"} />
                    </div>
                    <span className="truncate text-slate-800 text-sm tracking-tight">info@cloudedge.in</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EFEEFC] flex items-center justify-center text-[#4361EE] shrink-0">
                      <Image src={clock} alt={"clock"} className={" w-4 h-4"} />
                    </div>
                    <span className="leading-relaxed text-slate-600 text-xs pt-0.5">
                    <span className="text-slate-800 font-bold block mb-0.5">Operating Hours</span>
                    Mon&ndash;Sat &bull; 9 AM&ndash;7 PM BST / 9 AM&ndash;8 PM IST
                  </span>
                  </div>
                </div>

                <div className="w-full h-px bg-[#E6E8FA]" />
              </div>

              {/* Light Layout Offices Hub */}
              <div className="mt-8 lg:mt-0 relative z-10">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-4">Our Offices</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Office 1 */}
                  <div className="bg-[#EFEEFC]/40 border border-[#E6E8FA] p-4 rounded-2xl shadow-2xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-15">
                      <Image src={GB} alt="UK" className="w-4 h-4" />
                      <span>United Kingdom</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">
                      London, England<br />Mon&ndash;Sat 9 AM&ndash;7 PM BST
                    </p>
                  </div>

                  {/* Office 2 */}
                  <div className="bg-[#EFEEFC]/40 border border-[#E6E8FA] p-4 rounded-2xl shadow-2xs">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-15">
                      <Image src={IN} alt="India" className="w-4 h-4" />
                      <span>India Hub</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal font-medium">
                      Ahmedabad, Gujarat<br />Mon&ndash;Sat 9 AM&ndash;8 PM IST
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
  );
};

export default EnquiryFormSection;