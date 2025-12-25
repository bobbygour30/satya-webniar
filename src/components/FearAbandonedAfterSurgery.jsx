import React from "react";
import {
  CalendarDays,
  Stethoscope,
  HeartPulse,
  Headphones,
} from "lucide-react";

export default function FearAbandonedAfterSurgery() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-black">
            Fear #7: Abandoned After Surgery
          </h2>
          <p className="mt-3 text-lg font-medium text-[#2B333C]">
            Constant Mentoring &amp; Monitoring
          </p>
        </div>

        {/* COMPARISON */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="border border-[#DFDFDD] rounded-xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-lg mb-3">The Industry Standard</h3>
            <ul className="space-y-2 text-[#828D9C] list-disc list-inside">
              <li>Maximum-dose medications at discharge.</li>
              <li>No real follow-up or healing support.</li>
              <li>Patients manage anxiety and complications alone.</li>
            </ul>
          </div>

          <div className="border border-[#9E4A47] rounded-xl p-6 bg-[#FFF8EF] shadow-sm">
            <h3 className="font-semibold text-lg mb-3 text-[#9E4A47]">
              The Satya Promise
            </h3>
            <ul className="space-y-2 text-[#2B333C] list-disc list-inside">
              <li>Continuous mentoring throughout healing.</li>
              <li>Protocols adjusted as your body responds.</li>
              <li>Long-term growth, not short-term discharge.</li>
            </ul>
          </div>
        </div>

        {/* ================= CURVED ROAD ================= */}
        <div className="mt-24 relative">

          {/* SVG ROAD */}
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-40 hidden md:block"
            fill="none"
          >
            <path
              d="M0 100 C 200 20, 400 180, 600 100 C 800 20, 1000 180, 1200 100"
              stroke="#DFDFF4"
              strokeWidth="18"
              strokeLinecap="round"
            />
            <path
              d="M0 100 C 200 20, 400 180, 600 100 C 800 20, 1000 180, 1200 100"
              stroke="#9E4A47"
              strokeWidth="2"
              strokeDasharray="8 10"
            />
          </svg>

          {/* MILESTONES */}
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-8 mt-12 md:-mt-28">

            {[
              {
                icon: <CalendarDays />,
                title: "Day 1–7",
                desc: "Daily check-ins during the critical healing phase",
              },
              {
                icon: <Stethoscope />,
                title: "Week 2–4",
                desc: "Regular monitoring and protocol refinements",
              },
              {
                icon: <HeartPulse />,
                title: "Month 2–6",
                desc: "Growth tracking & lifestyle optimization",
              },
              {
                icon: <Headphones />,
                title: "Beyond",
                desc: "Lifetime access whenever guidance is needed",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center max-w-xs mx-auto
                ${i % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <div className="w-16 h-16 rounded-full bg-[#9E4A47] text-white
                  flex items-center justify-center shadow-xl mb-4">
                  {step.icon}
                </div>
                <h4 className="font-semibold text-lg">{step.title}</h4>
                <p className="mt-2 text-base text-[#828D9C]">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* CLOSING STATEMENT */}
        <div className="mt-28 max-w-5xl">
          <h3 className="text-3xl sm:text-4xl font-bold leading-tight">
            Reshaping your hair-line with precision of science,
            imagination of artistry, and assurance of love
          </h3>
        </div>

      </div>
    </section>
  );
}
