"use client";
import { useState } from "react";
import Image from "next/image";
import india from "@/public/icons/india.svg";
import uk from "@/public/icons/united-kingdom.svg";
import us from "@/public/icons/united-states.svg";
import canada from "@/public/icons/canada.svg";

const flags = { IN: india, UK: uk, US: us, CA: canada };
const flagLabels = { IN: "India", UK: "UK", US: "USA", CA: "Canada" };

export default function CourseEnrollmentCard({ course }: { course: any }) {
  const nextBatch = course.nextBatch;

  const pricing = (["IN", "UK", "US", "CA"] as const)
    .map((code) => ({ code, label: flagLabels[code], data: course.countryPricing?.[code] }))
    .filter((x) => x.data);

  const [selectedCode, setSelectedCode] = useState<string>(pricing[0]?.code ?? "IN");

  const selectedPrice = pricing.find((p) => p.code === selectedCode)?.data ?? pricing[0]?.data;

  const showEmi = selectedCode === "IN";
  const emiMonths = 6;
  const emiAmount = selectedPrice?.price
    ? Math.round(selectedPrice.price / emiMonths).toLocaleString("en-IN")
    : null;

  const classDays = nextBatch?.batch?.class_days?.join("/") ?? "";
  const timezone = nextBatch?.timezone ?? nextBatch?.batch?.timezone ?? "";
  const paymentModes = course.payment_modes ?? "UPI · NET · Card";
  const phone = course.contact_phone ?? "";

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white shadow-sm">
      {/* Header */}
      <div className="bg-[#0EA5E9] p-6 text-white">
        <div className="flex items-center gap-3">
          <Image
            src={course.icon_media_url}
            alt={course.name}
            width={48}
            height={48}
            className="rounded-xl bg-white/20 p-2"
          />
          <div>
            <h3 className="text-lg font-bold leading-tight">{course.name}</h3>
            <p className="text-sm opacity-85">{course.duration} Weeks Live Online</p>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Country switcher */}
        <div
          className="grid gap-2 mb-3"
          style={{ gridTemplateColumns: `repeat(${pricing.length}, 1fr)` }}
        >
          {pricing.map((item) => (
            <button
              key={item.code}
              onClick={() => setSelectedCode(item.code)}
              className={`flex items-center justify-center gap-1 rounded-lg py-2 text-xs font-medium transition-colors
                ${selectedCode === item.code
                  ? "bg-sky-100 text-sky-700 ring-1 ring-sky-300"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                }`}
            >
              <Image src={flags[item.code]} alt={item.label} className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </div>

        {/* EMI Badge */}
        {showEmi && (
          <div className="mb-3 rounded-lg border border-green-200 bg-green-50 py-2 text-center text-xs font-medium text-green-700">
            ✓ 0% EMI AVAILABLE · EASY INSTALLMENTS
          </div>
        )}

        {/* Price */}
        <div className="text-center mt-2">
          <div className="text-4xl font-bold text-slate-900">
            {selectedPrice?.currency}
            {selectedPrice?.price?.toLocaleString(selectedCode === "IN" ? "en-IN" : "en-US")}
          </div>
          {showEmi && emiAmount && (
            <p className="mt-1 text-sm text-slate-500">
              or{" "}
              <span className="font-semibold text-slate-800">
                {selectedPrice?.currency}{emiAmount} / month*
              </span>{" "}
              for {emiMonths} months
            </p>
          )}
          <p className="mt-1 text-xs text-slate-400">Course Fee</p>
        </div>

        {/* Details */}
        <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm">
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
        </div>

        {/* Buttons */}
        <div className="mt-5 space-y-3">
          <button className="w-full flex items-center justify-center gap-2 rounded-full bg-[#22C55E] py-4 font-semibold text-white">
            <WhatsAppIcon /> WhatsApp to Enroll
          </button>
          <button className="w-full flex items-center justify-center gap-2 rounded-full bg-[#6366F1] py-4 font-semibold text-white">
            ✉ Enroll by Email
          </button>
          <button className="w-full rounded-full border border-slate-200 py-4 font-semibold text-slate-700">
            🎥 Book a Free Demo Class
          </button>
        </div>

        {phone && (
          <p className="mt-3 text-center text-sm text-slate-500">
            Or call:{" "}
            <a href={`tel:${phone}`} className="font-medium text-[#0EA5E9]">{phone}</a>
          </p>
        )}

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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.117 1.528 5.845L.057 23.569a.75.75 0 0 0 .924.924l5.718-1.473A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.731 9.731 0 0 1-4.96-1.355l-.356-.213-3.693.951.969-3.597-.232-.369A9.75 9.75 0 1 1 12 21.75z" />
    </svg>
  );
}