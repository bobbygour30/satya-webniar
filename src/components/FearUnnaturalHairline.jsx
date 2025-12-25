import React from "react";

export default function FearUnnaturalHairline() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-20 lg:h-screen flex items-start lg:items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Fear #1: Unnatural, Obvious Hairline
            </h2>

            <h4 className="mt-8 text-xl font-semibold">The Problem</h4>
            <p className="mt-3 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Nothing screams "hair transplant" louder than a perfectly straight,
              artificial-looking hairline.
            </p>

            <h4 className="mt-8 text-xl font-semibold">The Satya Solution</h4>
            <h3 className="text-2xl font-bold text-[#2B333C]">
              Mimic Nature™ Hairline
            </h3>

            <ul className="mt-6 space-y-4 text-base sm:text-lg max-w-xl">
              <li><strong>Patented technique</strong> — recreates natural growth patterns</li>
              <li><strong>Customised</strong> — unique to your face & age</li>
              <li><strong>Natural undetectable results</strong> — a hairline that looks naturally yours, never artificial</li>
              <li><strong>Donor Preservation</strong> — created artistically using minimum grafts</li>
              <li><strong>Age Appropriate</strong>  — Hairlines that match your stage of life, not a teenager's hairline on a 40-year-old face</li>
            </ul>
          </div>

          {/* VISUAL */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-full  rounded-xl overflow-hidden border border-[#DFDFDD] shadow-lg">
              <img
                src="https://cdn.gamma.app/3pjpymp9a7vlfhg/7704b65657794fa7ac4bbdd01bc74601/original/Untitled-design-3.png"
                alt="Hairline result"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-[#DFDFF4] rounded-xl px-6 py-4 text-center shadow-sm max-w-sm">
              <p className="text-lg font-medium text-[#2B333C]">
                Created Artistically with Science &amp; delivered with Love.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
