import React from "react";
import { ShieldCheck, Clock, Layers, PlusCircle } from "lucide-react";

export default function FearPermanentDonorDamage() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Fear #2: Permanent <br />
              Donor Area Damage
            </h2>

            <p className="mt-2 italic text-[#9E4A47] font-medium">
              Save your donor : Save your future
            </p>

            <p className="mt-6 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Over 99.9% of clinics rely solely on FUE (Follicular Unit
              Extraction), which can over-harvest your donor area, leaving
              visible scarring and limiting future options.
            </p>

            <p className="mt-3 text-base sm:text-lg text-[#828D9C] max-w-xl">
              What happens when you need more grafts later?
            </p>

            {/* ================= FEATURE CARDS ================= */}
            <div className="mt-10 space-y-5">

              {[
                {
                  icon: <ShieldCheck size={20} />,
                  title: "Donor Saved for Future",
                  desc:
                    "Strategic harvesting, conservative approach ensures you maintain natural density in the donor area with minimal visible impact.",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Minimum Downtime",
                  desc:
                    "You can return to life quickly with confidence and comfort.",
                },
                {
                  icon: <Layers size={20} />,
                  title: "MHT: Maximum Harvest Technique",
                  desc:
                    "Our proprietary combination of FUT and FUE techniques maximizes graft yield while preserving your donor reserves.",
                },
                {
                  icon: <PlusCircle size={20} />,
                  title: "Maximum Grafts Available",
                  desc:
                    "Access 30–40% more usable grafts compared to FUE-only approaches without compromising donor health.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-5 rounded-xl bg-gradient-to-br from-[#DFDFF4] to-white
                    border border-[#DFDFDD] shadow-sm
                    hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9E4A47] text-white shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-[#2B333C]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-base text-[#828D9C]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#9E4A47]/10 rounded-full blur-3xl" />
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/7c977165e73848f4b1785f977c3f3edb/original/Untitled-580-x-1428-px.png"
                alt="Donor Area"
                className="relative w-72 sm:w-80 rounded-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
