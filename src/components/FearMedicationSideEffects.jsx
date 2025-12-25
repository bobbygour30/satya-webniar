import React from "react";
import { AlertTriangle, Shield, Pill } from "lucide-react";

export default function FearMedicationSideEffects() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">

          {/* ================= LEFT VISUAL ================= */}
          <div className="relative ">
            <div className="absolute inset-0 bg-[#9E4A47]/10 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.gamma.app/3pjpymp9a7vlfhg/generated-images/F8hrzyjHKL6EZ5rBAmwNl.png"
                alt="Medication Side Effects"
                className="w-full h-full object-cover"
              />
              {/* overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-[#DFDFDD]">
                <p className="text-sm font-semibold text-[#2B333C] mb-2">
                  Side effects include:
                </p>
                <ul className="text-sm text-[#828D9C] space-y-1">
                  <li>• Erectile dysfunction</li>
                  <li>• Loss of libido</li>
                  <li>• Brain fog & cognitive issues</li>
                  <li>• Depression & mood disturbances</li>
                  <li>• In some cases, suicidal thoughts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Fear #3: Devastating <br />
              Medication Side Effects
            </h2>

            {/* ================= RISKS ================= */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-black flex items-center gap-2">
                <AlertTriangle size={20} className="text-[#9E4A47]" />
                What are the Risks?
              </h3>

              <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
                Most clinics follow a standard protocol using <strong>high doses</strong> of
                finasteride and minoxidil.
              </p>

              <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
                Reported side effects include erectile dysfunction, loss of libido,
                brain fog and cognitive issues, depression and mood disturbances,
                and in some cases, suicidal thoughts.
              </p>

              <ul className="mt-4 space-y-2 text-base sm:text-lg text-[#828D9C] max-w-xl">
                <li>• These side effects are <strong>not rare</strong></li>
                <li>• Symptoms can persist even after stopping the medication</li>
              </ul>
            </div>

            {/* ================= INDUSTRY STANDARD ================= */}
            <div className="mt-10 pt-6 border-t border-[#DFDFDD]">
              <h4 className="text-lg font-semibold text-black flex items-center gap-2">
                <Pill size={18} className="text-[#9E4A47]" />
                Industry Standard: Medicine-Heavy
              </h4>

              <p className="mt-3 text-base sm:text-lg text-[#828D9C] max-w-xl">
                Most clinics follow a standard protocol using high doses of
                finasteride and minoxidil, as medicines are
                <strong> &ldquo;FREE HAIR & FREE CREDIT&rdquo;</strong> for the clinics.
              </p>
            </div>

            {/* ================= SATYA APPROACH ================= */}
            <div className="mt-10 pt-6 border-t border-[#DFDFDD]">
              <h4 className="text-lg font-semibold text-black flex items-center gap-2">
                <Shield size={18} className="text-[#9E4A47]" />
                Satya’s Min Med Approach
              </h4>

              <ul className="mt-4 space-y-2 text-base sm:text-lg text-[#828D9C] max-w-xl">
                <li>• Your health prioritised over glorified results.</li>
                <li>• Minimal health risks.</li>
                <li>• Longer lasting results than industry standards.</li>
                <li>• You pay for the skills not for the pills.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
