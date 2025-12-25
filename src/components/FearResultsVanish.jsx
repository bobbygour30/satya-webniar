import React from "react";
import { Search, Syringe, Heart } from "lucide-react";

export default function FearResultsVanish() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Fear #4: Results That Vanish After 6–12 Months
          </h2>

          <p className="mt-2 text-sm sm:text-base font-medium">
            It just takes 6 months to become{" "}
            <span className="text-red-600 font-semibold">
              &quot;GAJANI from SHAHRUKH KHAN&quot;
            </span>
          </p>

          <h3 className="mt-8 text-xl sm:text-2xl font-semibold text-black">
            The Satya Difference: We invest in superior surgical skill &amp;
            technique — not pill dependence.
          </h3>

          <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-3xl">
            You've seen the dramatic transformations online. Full, thick hair at
            six months. But check back a year later—it’s often gone. Why? Because
            those results were 80% medication and only 20% actual transplant.
            When the medicine stops working or causes intolerable side effects,
            the illusion collapses.
          </p>
        </div>

        {/* ================= FLOW SECTION ================= */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

            {/* CARD 1 */}
            <div className="relative bg-[#DFDFF4] rounded-2xl p-6 shadow-sm
              hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9E4A47] text-white">
                  <Search size={18} />
                </div>
                <h4 className="font-semibold text-lg">
                  80% Transplant-Based Results
                </h4>
              </div>
              <p className="text-base text-[#828D9C]">
                At Satya, we reverse the equation—80% relies on surgical skill,
                20% on medication support.
              </p>
            </div>

            {/* ARROW (DESKTOP ONLY) */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-1 bg-[#DFDFDD] relative">
                <div className="absolute right-0 -top-2 w-4 h-4 rotate-45 bg-[#DFDFDD]" />
              </div>
            </div>

            {/* CARD 2 */}
            <div className="relative bg-[#DFDFF4] rounded-2xl p-6 shadow-sm
              hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9E4A47] text-white">
                  <Syringe size={18} />
                </div>
                <h4 className="font-semibold text-lg">
                  20% Medication Support
                </h4>
              </div>
              <p className="text-base text-[#828D9C]">
                Minimal reliance means your results aren’t held hostage by
                continuing high-dose medications.
              </p>
            </div>

            {/* ARROW (DESKTOP ONLY) */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-1 bg-[#DFDFDD] relative">
                <div className="absolute right-0 -top-2 w-4 h-4 rotate-45 bg-[#DFDFDD]" />
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative bg-[#DFDFF4] rounded-2xl p-6 shadow-sm
              hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#9E4A47] text-white">
                  <Heart size={18} />
                </div>
                <h4 className="font-semibold text-lg">
                  Longest Lasting in Industry
                </h4>
              </div>
              <p className="text-base text-[#828D9C]">
                Our results endure because they’re built on genuine graft
                survival and skilled placement, not pharmaceutical masking.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
