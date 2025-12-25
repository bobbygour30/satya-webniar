import React from "react";

export default function DesireShiftSatyaGuarantee() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/66009663678c4b74b08a467e27897fe8/original/move-removebg-preview.png"
                alt="Hairline Reflection"
                className="w-full max-w-sm object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              How Do You Want Your Hair <br />
              Transplant to Look?
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Shift from fear to desire. Choose empowerment over empty promises.
              Ask yourself what matters most for your skin&apos;s future.
            </p>

            {/* QUOTE BLOCKS */}
            <div className="mt-10 space-y-6">

              {[
                {
                  title: "An Ugly Hair-line or an Impeccable Masterpiece ?",
                  desc:
                    "Most clinics offer instant glow with long-term damage. At Satya, you get glow with health.",
                },
                {
                  title: "A Result that Lasts for an Year or a Lifetime?",
                  desc:
                    "Results built on science and artistry stay — not chemicals and shortcuts that fade fast.",
                },
                {
                  title:
                    "Loads of Medicines & Side Effects or Minimal Medicine & Peace?",
                  desc:
                    "Choose treatments that work gently, sustainably, and respectfully with your body.",
                },
                {
                  title:
                    "Repetitive Corrective Surgeries or One Time Fix?",
                  desc:
                    "One-time correct healing of your skin barrier ends the cycle of dependency.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative pl-6 pr-4 py-4 border-l-4 border-[#9E4A47]
                    bg-[#FFF8EF] rounded-lg"
                >
                  <p className="font-semibold text-lg text-[#2B333C]">
                    “{item.title}”
                  </p>
                  <p className="mt-2 text-base text-[#828D9C] max-w-xl">
                    {item.desc}
                  </p>

                  {/* quote marks */}
                  <span className="absolute -left-4 -top-4 text-4xl text-[#9E4A47]">
                    “
                  </span>
                  <span className="absolute -right-2 -bottom-4 text-4xl text-[#9E4A47]">
                    ”
                  </span>
                </div>
              ))}

            </div>

            <p className="mt-10 text-lg font-semibold text-[#2B333C]">
              If You Want the Truth — You Want Satya
            </p>
          </div>

        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="mt-28">
          <h3 className="text-3xl sm:text-4xl font-bold text-black mb-12">
            The Satya Guarantee + Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Empowered */}
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Empowered for Life
              </h4>
              <p className="text-base sm:text-lg text-[#828D9C] max-w-lg">
                Once you understand the science behind medicines &amp; number of
                grafts, no one will ever mislead you again.
              </p>
              <p className="mt-3 text-base sm:text-lg text-[#828D9C] max-w-lg">
                Holistic approach will ensure that you glow from within,
                not just outside.
              </p>
            </div>

            {/* Repair */}
            <div>
              <h4 className="text-xl font-semibold mb-3">
                Repair and Fresh Cases
              </h4>
              <p className="text-base sm:text-lg text-[#828D9C] max-w-lg">
                If you&apos;ve been harmed by bad hair transplant, we restore
                what others have compromised with science, artistry, and
                affection.
              </p>

              <div className="mt-6 bg-[#DFDFF4] border border-[#DFDFDD] rounded-xl p-5">
                <p className="text-base sm:text-lg text-[#2B333C] font-medium">
                  Long-Term Mentorship:
                </p>
                <p className="mt-2 text-base sm:text-lg text-[#828D9C]">
                  We track your progress, adjust your plan, and guide you
                  through every stage. At Satya, you are never left alone.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
