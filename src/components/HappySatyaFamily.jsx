import React from "react";
import {
  Video,
  ShieldCheck,
  Stethoscope,
  MapPin,
} from "lucide-react";

export default function HappySatyaFamily() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ================= LEFT: BIGGER IMAGE ================= */}
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Image */}
            <div className="
              w-full
              max-w-xl lg:max-w-2xl
              aspect-[3/5]
              rounded-2xl
              overflow-hidden
              border border-[#DFDFDD]
              shadow-xl
            ">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/fdef1f213451456eb9be3a81b74f2b2e/original/Untitled-580-x-1428-px-1.png"
                alt="Happy Satya Family"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mt-5 px-6 py-3 bg-[#2B333C] text-white rounded-xl shadow-lg text-sm tracking-wide">
              HAPPY SATYA FAMILY
            </div>
          </div>

          {/* ================= RIGHT: CONTENT ================= */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
              Be a Part of Happy <br />
              Satya Family
            </h2>

            <p className="mt-4 text-base sm:text-lg text-[#828D9C] max-w-xl">
              Hair can return to its natural looks — without damage, without
              fear, without dependence. You&apos;ve taken the first step. Now
              take the right step.
            </p>

            <p className="mt-4 text-base sm:text-lg font-medium text-[#2B333C]">
              &gt;15000 Patients across the globe have already transformed
              themselves. It is your turn now.
            </p>

            {/* ================= ACTION CARDS ================= */}
            <div className="mt-10 space-y-4">
              {[
                {
                  icon: <Video size={18} />,
                  title: "Join Life Transforming Webinar",
                  desc:
                    "Join Dr. Shail Gupta’s webinar and discover the truth about lasting results.",
                },
                {
                  icon: <ShieldCheck size={18} />,
                  title: "Honest Assessment",
                  desc:
                    "Get your personalized, transparent hair assessment with no pressure or upselling.",
                },
                {
                  icon: <Stethoscope size={18} />,
                  title: "Consultation",
                  desc:
                    "Book a consultation with our team of doctors & experienced compassionate experts.",
                },
                {
                  icon: <MapPin size={18} />,
                  title: "Your Journey",
                  desc:
                    "Start your journey toward beautiful hair with confidence & truth.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    flex gap-4 items-start p-5 rounded-xl
                    bg-[#DFDFF4] border border-[#DFDFDD]
                    hover:shadow-lg hover:-translate-y-1
                    transition-all duration-300
                  "
                >
                  <div className="
                    w-10 h-10 rounded-full
                    bg-[#9E4A47]/15 text-[#9E4A47]
                    flex items-center justify-center shrink-0
                  ">
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

            {/* ================= CTA BUTTONS ================= */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="
                px-6 py-3 rounded-lg
                bg-[#9E4A47] text-white font-medium
                hover:bg-[#B87C72]
                transition-all duration-300 shadow-md
              ">
                Schedule Your Consultation
              </button>

              <button className="
                px-6 py-3 rounded-lg
                border-2 border-[#9E4A47]
                text-[#9E4A47]
                hover:bg-[#FFF8EF]
                transition-all duration-300
              ">
                Download Free Guide
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
