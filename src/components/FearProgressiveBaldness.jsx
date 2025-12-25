import React from "react";
import {
  Apple,
  Moon,
  Smile,
  Droplet,
} from "lucide-react";

export default function FearProgressiveBaldness() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#FFF8EF] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT IMAGE ================= */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src="https://cdn.gamma.app/3pjpymp9a7vlfhg/760d54a30ac6422bae2272957c83df3a/original/ChatGPT-Image-Dec-23-2025-07_56_06-PM.png"
                alt="Holistic Hair Health"
                className="w-full max-w-sm lg:max-w-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Fear #5: Progressive Baldness Will Continue
            </h2>

            <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-[#2B333C]">
              Holistic Hair Protection Program
            </h3>

            <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Hair transplant addresses existing baldness, but what about future
              hair loss? Most clinics hand you prescriptions and wish you luck.
              At Satya, we take a holistic approach to halt and reverse the
              progression.
            </p>

            {/* ================= HOLISTIC POINTS ================= */}
            <div className="mt-10 space-y-6">

              {[
                {
                  icon: <Apple size={20} />,
                  title: "Nutritional Guidance",
                  desc:
                    "Foods that nourish your hair from within and support scalp health.",
                },
                {
                  icon: <Moon size={20} />,
                  title: "Sleep Regulation",
                  desc:
                    "Quality rest is essential for cellular repair and hair regeneration.",
                },
                {
                  icon: <Smile size={20} />,
                  title: "Stress Reduction",
                  desc:
                    "Mindfulness practices that lower inflammation and support healing.",
                },
                {
                  icon: <Droplet size={20} />,
                  title: "No Unnecessary Treatments",
                  desc:
                    "We do not recommend unnecessary or repeated sessions of PRP / GFC, which saves you time & money.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-5 rounded-xl
                    bg-white border border-[#DFDFDD]
                    shadow-sm hover:shadow-lg hover:-translate-y-1
                    transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9E4A47]/10 text-[#9E4A47] shrink-0">
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

        </div>
      </div>
    </section>
  );
}
