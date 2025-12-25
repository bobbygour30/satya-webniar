import React from "react";

export default function HeroIntro() {
  return (
    <section className="w-full min-h-screen lg:h-[70vh] bg-gradient-to-br from-[#FFF8EF] to-[#FCEBDE] relative overflow-hidden">
      
      {/* background accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#9E4A47]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0 flex items-start lg:items-center h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start lg:items-center w-full">

          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#DFDFDD]">
              <img
                src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1200/https://cdn.gamma.app/3pjpymp9a7vlfhg/0e065c798a674def95b3e14c747bf6fd/original/Untitled-design.png"
                alt="Hair Restoration Journey"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2B333C] leading-tight">
              Congratulations on Taking  
              <br className="hidden sm:block" />
              the First Step Toward a New You
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#828D9C] max-w-xl">
              You've made a brave decision to explore hair restoration. Before we
              talk about your desires for natural, lasting results, let's address
              what really keeps you up at night—your biggest fears about hair
              transplant surgery.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-7 py-3 rounded-lg bg-[#9E4A47] text-white font-medium shadow-md hover:bg-[#B87C72] transition">
                Book Your Consultation
              </button>
              <button className="px-7 py-3 rounded-lg border-2 border-[#9E4A47] text-[#9E4A47] hover:bg-[#FFF8EF] transition">
                Join Free Webinar
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
