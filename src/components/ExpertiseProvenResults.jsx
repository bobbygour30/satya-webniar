import React from "react";

export default function ExpertiseProvenResults() {
  return (
    <section className="w-full bg-[#FFF8EF] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#DFDFDD]">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/9f41de635e3f4860afda63c7086bfaf5/original/cotton-suitwear-1.jpg"
                alt="Satya Doctors"
                className="w-full max-w-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Unparalleled Expertise, <br />
              Proven Results
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#828D9C] max-w-xl">
              At Satya, you benefit from a legacy of hair restoration excellence.
            </p>

            <p className="mt-3 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Dr. Shail and Dr. Ruchi combine their vast experience and a
              patient-first approach to deliver lasting hair transplant results.
            </p>

            {/* ================= STATS ================= */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">

              <div>
                <p className="text-3xl font-bold text-[#4F46E5]">46+</p>
                <p className="mt-1 font-semibold text-[#2B333C]">
                  Years of Experience
                </p>
                <p className="mt-1 text-sm text-[#828D9C]">
                  Decades of dedicated practice and innovation in hair
                  transplantation.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#4F46E5]">265K+</p>
                <p className="mt-1 font-semibold text-[#2B333C]">
                  Worldwide Patients
                </p>
                <p className="mt-1 text-sm text-[#828D9C]">
                  Trusted by a quarter-million individuals across the globe.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#4F46E5]">15K+</p>
                <p className="mt-1 font-semibold text-[#2B333C]">
                  Hair Transplants
                </p>
                <p className="mt-1 text-sm text-[#828D9C]">
                  Successfully performed with precision, artistry, and care.
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-[#4F46E5]">2000+</p>
                <p className="mt-1 font-semibold text-[#2B333C]">
                  Repair Transplants
                </p>
                <p className="mt-1 text-sm text-[#828D9C]">
                  Successfully rescuing victims of bad hair transplants.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
