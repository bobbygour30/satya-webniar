import React from "react";

export default function AddressFears() {
  return (
    <section className="w-full bg-white py-20 lg:h-screen flex items-start lg:items-center relative">
      <div className="absolute left-0 top-0 h-full w-1 bg-[#9E4A47]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2B333C]">
              Let us Address
            </h2>
            <h3 className="mt-3 text-2xl font-semibold">
              Your Biggest Fears About Hair Transplants
            </h3>

            <p className="mt-6 text-base sm:text-lg text-[#828D9C] max-w-xl">
              We understand the anxiety. Hair transplant is a significant
              decision. Most clinics prioritize personal benefits over your
              wellbeing.
            </p>

            <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
              At Satya, we've built our entire practice around addressing these
              exact concerns with transparency, skill, and genuine care for
              your long-term health.
            </p>

            {/* CARDS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ["Will it Look Natural?", "Most hair transplants look unnatural and detectable."],
                ["Will it Last?", ">90% of hair transplants fail in less than one year, world-wide."],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#FFF8EF] to-white p-6 rounded-xl border border-[#DFDFDD] shadow-sm"
                >
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="mt-2 text-base text-[#828D9C]">{desc}</p>
                </div>
              ))}

              <div className="sm:col-span-2 bg-gradient-to-br from-[#FFF8EF] to-white p-6 rounded-xl border border-[#DFDFDD] shadow-sm">
                <h4 className="font-semibold text-lg">
                  Side Effects of Procedure &amp; Medicines??
                </h4>
                <p className="mt-2 text-base text-[#828D9C]">
                  Will the procedure of transplant or the medicines cause permanent side-effects?
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="w-full max-w-md  rounded-2xl overflow-hidden ">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/a008a8df85ca417b9648133297fe2ca0/original/Medicine-Gone-Result-gone.png"
                alt="Hair Restoration Journey"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
