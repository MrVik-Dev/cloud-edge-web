"use client";
import { useState } from "react";
import Image from "next/image";
import india from "@/public/icons/india.svg";
import uk from "@/public/icons/united-kingdom.svg";
import us from "@/public/icons/united-states.svg";
import canada from "@/public/icons/canada.svg";
import checkCircle from "@/public/icons/chck-circle-green.svg"
import clock from "@/public/icons/clock-icon.svg"
import calendar from "@/public/icons/calendar-gray.svg"
import payment from "@/public/icons/payment.svg"
import whatsappIcon from "@/public/icons/whatsapp-icon.svg"
import emailIcon from "@/public/icons/email-icon.svg"
import playIcon from "@/public/icons/play-icon.svg"
import moment from "moment";
import { getEmailLink, getWhatsAppLink } from "@/utils";

const flags = { IN: india, UK: uk, US: us, CA: canada };
const flagLabels = { IN: "India", UK: "UK", US: "USA", CA: "Canada" };

export default function CourseEnrollmentCard({ course }: { course: any }) {
  const nextBatch = course.nextBatch;

  const pricing = (["IN", "UK", "US", "CA"] as const)
    .map((code) => ({ code, label: flagLabels[code], data: course.countryPricing?.[code] }))
    .filter((x) => x.data);

  const [selectedCode, setSelectedCode] = useState<string>(pricing[0]?.code ?? "IN");

  const selectedPrice = pricing.find((p) => p.code === selectedCode)?.data ?? pricing[0]?.data;

  // const showEmi = selectedCode === "IN";
  const emiMonths = 6;
  const emiAmount = selectedPrice?.price
    ? Math.round(selectedPrice.price / emiMonths).toLocaleString("en-IN")
    : null;

  const classDays = nextBatch?.batch?.class_days?.join("/") ?? "";
  const timezone = nextBatch?.timezone ?? nextBatch?.batch?.timezone ?? "";
  const paymentModes = course.payment_modes ?? "UPI · NET · Card";
  const phone = course.contact_phone ?? "";
  const whatsappLink = getWhatsAppLink(`Hi Cloud Edge Solutions, I want to enroll in ${course.name}.`);
  const emailLink = getEmailLink(
    `Course Enquiry - ${course.name}`,
    `Hi Cloud Edge Solutions,\n\nI would like to enroll in ${course.name}.`
  );
  const demoLink = getEmailLink(
    `Free Demo Class Request - ${course.name}`,
    `Hi Cloud Edge Solutions,\n\nI would like to book a free demo class for ${course.name}.`
  );

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm">
      {/* Header */}
      <div className="bg-[#0EA5E9] p-6 text-white">
        <div className="flex flex-col items-start gap-3">
          <Image
            src={course.icon_media_url}
            alt={course.name}
            width={52}
            height={52}
          />
          <div>
            <h3 className="text-lg font-bold leading-tight">{course.name}</h3>
            <p className="text-sm text-[#DBEAFE]">{course.duration} Weeks Live Online</p>
          </div>
        </div>
      </div>

      <div className="py-6 px-10">
        {/* Country switcher */}
        <div
          className="grid gap-2 mb-3 p-1 bg-[#F1F5F9] rounded-xl"
          style={{ gridTemplateColumns: `repeat(${pricing.length}, 1fr)` }}
        >
          {pricing.map((item) => (
            <button
              key={item.code}
              onClick={() => setSelectedCode(item.code)}
              className={`flex items-center justify-center gap-1 rounded-lg py-2 text-xs font-medium transition-all
        ${selectedCode === item.code
                  ? "bg-white text-black shadow-sm"
                  : "bg-transparent text-[#64748B]"
                }
      `}
            >
              <Image
                src={flags[item.code]}
                alt={item.label}
                className="w-4 h-4"
              />
              {item.label}
            </button>
          ))}
        </div>

        {/* EMI Badge */}
        <div className="mb-3 rounded-3xl border border-[#D1FAE5] bg-[#ECFDF5] py-2 text-center text-xs font-bold text-[#047857] flex items-center justify-center gap-2">
          <Image src={checkCircle} alt="check cirlce" className=" w-4 h-4" /> 0% EMI AVAILABLE · EASY INSTALLMENTS
        </div>


        {/* Price */}
        <div className="text-center mt-2">
          <div className="text-4xl font-bold text-slate-900 mt-6" >
            {selectedPrice?.currency}
            {selectedPrice?.price?.toLocaleString(selectedCode === "IN" ? "en-IN" : "en-US")}
          </div>
          {emiAmount && (
            <p className="mt-3 text-sm text-slate-500">
              or{" "}
              <span className="font-semibold text-[#4F46E5]">
                {selectedPrice?.currency}{emiAmount} / month*
              </span>{" "}
              for {emiMonths} months
            </p>
          )}
        </div>

        {/* Details */}
        {/* <div className="mt-5 space-y-3 pt-4 text-sm">
          <Row label="⏱ Duration" value={`${course.duration} Weeks`} />
          <Row
            label="📅 Next Batch"
            value={
              nextBatch?.start_date
                ? new Date(nextBatch.start_date).toLocaleDateString("en-GB", {
                  day: "numeric", month: "short", year: "numeric",
                })
                : "-"
            }
          />
          {classDays && (
            <Row label="🗓 Schedule" value={`${classDays}${timezone ? ` · ${timezone}` : ""}`} />
          )}
          <Row label="💳 Payment" value={paymentModes} />
        </div> */}

        <div className="mt-5 space-y-3 pt-4 text-sm">

          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1">
              <Image src={clock} alt="clock" className=" w-4 h-4" />
              <div className="text-[#64748B] text-sm">Duration</div>
            </div>
            <div className=" text-[#1E293B] font-bold text-sm">
              {course.duration} weeks
            </div>
          </div>

          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1">
              <Image src={calendar} alt="calendar" className=" w-4 h-4" />
              <div className="text-[#64748B] text-sm">Next Batch</div>
            </div>
            <div className=" text-[#1E293B] font-bold text-sm">
              {nextBatch?.start_date
                ? moment(moment(nextBatch.start_date)).format("DD MMM YYYY")
                : "-"}
            </div>
          </div>

          <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1">
              <Image src={clock} alt="clock" className=" w-4 h-4" />
              <div className="text-[#64748B] text-sm">Schedule</div>
            </div>
            <div className="text-[#1E293B] font-bold text-sm">
              {classDays
                ?.split("/")
                .map((day: string) => day.trim().slice(0, 3))
                .join("/")}
            </div>
          </div>

                    <div className=" flex items-center justify-between">
            <div className=" flex items-center gap-1">
              <Image src={payment} alt="payment" className=" w-4 h-4" />
              <div className="text-[#64748B] text-sm">Payment</div>
            </div>
            <div className="text-[#1E293B] font-bold text-sm">
              UPI • NET • Card
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className=" space-y-3 mt-10">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#22C55E] py-4 font-semibold text-white"
          >
           <Image src={whatsappIcon} alt="whatsapp" className=" w-5 h-5" /> WhatsApp to Enroll
          </a>
          <a
            href={emailLink}
            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#6366F1] py-4 font-semibold text-white"
          >
            <Image src={emailIcon} alt="email" className=" w-5 h-5" /> Enroll by Email
          </a>
          <a
            href={demoLink}
            className="w-full rounded-full border border-slate-200 py-4 font-semibold text-slate-700 flex items-center justify-center gap-2"
          >
            <Image src={playIcon} alt="play" className=" w-5 h-5" /> 
            Book a Free Demo Class
          </a>
        </div>

          <p className="mt-5 text-center text-sm text-slate-500 font-semibold">
            Or call:{" "}
            <a href={`tel:+447442586325`} className=" text-[#0F172A] font-bold"> +44 744 258 6325</a>
          </p>


        {/* Features */}
        {course.features?.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
            {course.features.map((feature: string) => (
              <div key={feature} className="flex items-start gap-2">
                <span className="mt-0.5 text-green-500">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}
