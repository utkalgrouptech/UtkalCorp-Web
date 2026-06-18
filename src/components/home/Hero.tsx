"use client";

import Link from "next/link";
import Bnr1 from "@/asserts/home/BNR.png";
import {
  BriefcaseBusiness,
  Users,
  Factory,
  Clock3,
} from "lucide-react";
export default function Hero() {
  return (
    <section className="relative bg-[#071427]">

      {/* HERO IMAGE */}
      <div
        className="relative min-h-[820px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Bnr1.src})`,
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#071427]/60" />

        {/* CONTENT */}
       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-40 pb-44 animate-fadeUp">
          <div className="max-w-3xl">

            <p className="uppercase tracking-[4px] text-[#F4B400] text-sm font-semibold mb-8">
              Integrated. Reliable. Sustainable.
            </p>

            <h1 className="text-white font-extrabold leading-[1.05] text-4xl md:text-6xl">
              Integrated Industrial
              <br />
              Operations &
              <br />
              Logistics
              <span className="text-[#F4B400]"> Solutions</span>
            </h1>

            <p className="text-gray-300 mt-8 text-lg leading-8 max-w-2xl">
              Delivering excellence in Plant O&M, Logistics,
              Mining, Port Operations and Industrial Support
              Services across India.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/services"
               className="bg-[#F4B400] text-black font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(244,180,0,0.4)]"
              >
                EXPLORE SERVICES
              </Link>

              <Link
                href="/contact"
               className="border border-white text-white px-8 py-4 rounded-md transition-all duration-300 hover:bg-white hover:text-black"
              >
                CONTACT US
              </Link>

            </div>

          </div>

        </div>

  <div className="absolute bottom-[70px] right-[60px] z-30 hidden lg:block">
  <div className="flex gap-3">

   <div className="w-[140px] h-[140px]  backdrop-blur-md border border-white/10 rounded-lg flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:border-[#F4B400] hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)]" 
    style={{ animationDelay: "0.2s" }} >
      <BriefcaseBusiness size={28} className="text-[#F4B400] mb-3" />
      <h3 className="text-[#ffff] text-3xl font-bold">15+</h3>
      <p className="text-white/80 text-xs text-center mt-1">
        Years Experience
      </p>
    </div>

    <div className="w-[140px] h-[140px]  backdrop-blur-md border border-white/10 rounded-lg flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:border-[#F4B400] hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)]"  style={{ animationDelay: "0.4s" }}>
      <Users size={28} className="text-[#F4B400] mb-3" />
      <h3 className="text-[#ffff] text-3xl font-bold">5000+</h3>
      <p className="text-white/80 text-xs text-center mt-1">
        Workforce
      </p>
    </div>

    <div className="w-[140px] h-[140px]  backdrop-blur-md border border-white/10 rounded-lg flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:border-[#F4B400] hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)]" style={{ animationDelay: "0.6s" }}>
      <Factory size={28} className="text-[#F4B400] mb-3" />
      <h3 className="text-[#ffff] text-3xl font-bold">100+</h3>
      <p className="text-white/80 text-xs text-center mt-1">
        Projects Executed
      </p>
    </div>

    <div className="w-[140px] h-[140px]  backdrop-blur-md border border-white/10 rounded-lg flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-3 hover:border-[#F4B400] hover:shadow-[0_10px_30px_rgba(244,180,0,0.25)]" style={{ animationDelay: "0.8s" }}>
      <Clock3 size={28} className="text-[#F4B400] mb-3" />
      <h3 className="text-[#ffff] text-3xl font-bold">24/7</h3>
      <p className="text-white/80 text-xs text-center mt-1">
        Operations
      </p>
    </div>

  </div>
</div>

      </div>

    </section>
  );
}