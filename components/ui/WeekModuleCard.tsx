"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown, CheckCircle2 } from "lucide-react";
import check from "@/public/icons/check-purple.svg"
import Image from "next/image";

interface WeekModuleCardProps {
  label: string;
  title: string;
  points: string[];
}

const WeekModuleCard: React.FC<WeekModuleCardProps> = ({
  label,
  title,
  points,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="bg-[#EEF2FF] text-[#6557E3] text-xs font-semibold px-3 py-1 rounded-md">
            {label}
          </span>

          <h4 className="text-[#1E293B] font-semibold text-xl">
            {title}
          </h4>
        </div>

        {open ? (
          <ChevronUp className="w-5 h-5 text-[#94A3B8]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#94A3B8]" />
        )}
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* <CheckCircle2 className="w-5 h-5 text-[#6557E3] shrink-0 mt-0.5" /> */}
              <Image src={check} alt="check" className=" w-4 h-4" />

              <p className="text-[#64748B] text-base">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeekModuleCard;