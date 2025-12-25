import React from "react";
import { Eye, Calculator, CheckCircle, Scale } from "lucide-react";

export default function FearGraftCountTransparency() {
  return (
    <section className="w-full bg-gradient-to-br from-[#F8FAFC] to-[#FFF8EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
            Fear #6: Getting Cheated on Graft Count
          </h2>

          <p className="mt-5 text-base sm:text-lg text-[#828D9C]">
            How can you verify the number of grafts transplanted when you can’t
            count them yourself? Most clinics exploit this, inflating promises
            and under-delivering. Even more shocking: not a single clinic
            worldwide adjusts graft numbers based on medication dosage, though
            this dramatically impacts how many you actually need.
          </p>
        </div>

        {/* ================= TRANSPARENCY BLOCK ================= */}
        <div className="mt-12 border-l-4 border-[#9E4A47] pl-6 max-w-4xl">
          <h3 className="text-xl sm:text-2xl font-semibold text-[#2B333C]">
            Radical Transparency at Satya
          </h3>
          <p className="mt-3 text-base sm:text-lg text-[#828D9C]">
            We show you before and after under the same light, explain every
            step, every choice, and every product. No gimmicks. No upselling.
            No miracle claims. Just truth.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-[#DFDFF4] rounded-2xl p-6 border border-[#DFDFDD]
            shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9E4A47]/15 text-[#9E4A47]
                flex items-center justify-center">
                <Eye size={18} />
              </div>
              <h4 className="font-semibold text-lg">
                We Set Realistic Expectations
              </h4>
            </div>
            <p className="text-base text-[#828D9C]">
              Imagine you plan your journey in the beginning based on true
              information. It can’t go wrong.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#DFDFF4] rounded-2xl p-6 border border-[#DFDFDD]
            shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9E4A47]/15 text-[#9E4A47]
                flex items-center justify-center">
                <Calculator size={18} />
              </div>
              <h4 className="font-semibold text-lg">
                Medication-Adjusted Planning
              </h4>
            </div>
            <p className="text-base text-[#828D9C]">
              We’re the only clinic calculating graft needs based on your
              medication—meaning you may need one-third the grafts with
              full medication.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#DFDFF4] rounded-2xl p-6 border border-[#DFDFDD]
            shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#9E4A47]/15 text-[#9E4A47]
                flex items-center justify-center">
                <CheckCircle size={18} />
              </div>
              <h4 className="font-semibold text-lg">
                Consistent Outcomes
              </h4>
            </div>
            <p className="text-base text-[#828D9C]">
              Our track record speaks for itself—no wild variations, no
              disappointed patients wondering where their grafts went.
            </p>
          </div>

        </div>

        {/* ================= FULL WIDTH CARD ================= */}
        <div className="mt-8">
          <div className="bg-[#DFDFF4] rounded-2xl p-6 border border-[#DFDFDD]
            shadow-sm hover:shadow-lg transition-all duration-300 max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#9E4A47]/15 text-[#9E4A47]
                flex items-center justify-center">
                <Scale size={18} />
              </div>
              <h4 className="font-semibold text-lg">
                Honest Assessment
              </h4>
            </div>
            <p className="text-base text-[#828D9C]">
              We never over-promise graft numbers because we don’t need to—our
              MHT technique accesses maximum grafts ethically.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
