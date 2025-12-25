import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#FFF8EF] border-b border-[#DFDFDD]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-2">
            <img
              src="https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:2000/height:2000/https://cdn.gamma.app/3pjpymp9a7vlfhg/c472d799fd6e4d3dacf235cf60fceb3f/original/Logo-2-1.png" // replace with your logo path
              alt="Satya Hair Solutions"
              className="h-9 w-auto"
            />
           
          </div>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden md:flex">
            <button className="bg-[#9E4A47] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#B87C72] transition">
              Book Your Consultation
            </button>
          </div>

          {/* ================= MOBILE TOGGLE ================= */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-[#2B333C]"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-[#FFF8EF] border-t border-[#DFDFDD]">
          <div className="px-4 py-4 space-y-3">
            <button className="w-full bg-[#9E4A47] text-white py-2 rounded-md text-sm font-medium hover:bg-[#B87C72] transition">
              Book Your Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
