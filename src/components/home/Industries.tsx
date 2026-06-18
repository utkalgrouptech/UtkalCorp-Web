"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Bnr3 from "@/asserts/home/bckgrn.png";
import pic1 from "@/asserts/home/ming.png";
import pic2 from "@/asserts/home/metal.png";
import pic3 from "@/asserts/home/power.png";
import pic4 from "@/asserts/home/Petrochemical.png";
import pic5 from "@/asserts/home/infrasture.png";
import pic6 from "@/asserts/home/ship.png";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const industries = [
  {
    title: "Mining",
    image: pic1.src 
  },
  {
    title: "Steel & Metals",
    image: pic2.src,
  },
  {
    title: "Ports",
    image: pic6.src,
  },
  {
    title: "Power",
    image: pic3.src
  },
  {
    title: "Petrochemical",
    image: pic4.src
  },
  {
    title: "Infrastructure",
    image: pic5.src
  },
];

export default function Industries() {
 const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const interval = setInterval(() => {
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 10
      ) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 380,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section className="relative py-20 overflow-hidden">
    {/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${Bnr3.src})`,
  }}
/>

{/* Blur Layer */}
<div className="absolute inset-0  bg-[#071427]/70" />
     <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">

          <div>
            <p className="uppercase tracking-[3px] text-[#F4B400] text-sm font-semibold mb-2">
              Industries We Serve
            </p>

            <h2 className="text-white text-3xl lg:text-4xl font-bold">
              Powering Key Industries
            </h2>
          </div>

          <button className="hidden lg:flex items-center gap-2 text-white hover:text-[#F4B400] transition">
            View All Industries
            <ChevronRight size={18} />
          </button>

        </div>

        {/* Slider Area */}
        <div className="relative">

          {/* Left Arrow */}
          <button className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#071427]/80 backdrop-blur items-center justify-center text-white hover:bg-[#F4B400] hover:text-black transition">
            <ChevronLeft size={18} />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth lg:px-14 pb-2"
          >
            {industries.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative min-w-[320px] lg:min-w-[360px] h-[200px] lg:h-[230px] rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gold Hover Line */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#F4B400] transition-all duration-500 group-hover:w-full" />

                {/* Title */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-[#071427]/80 backdrop-blur items-center justify-center text-white hover:bg-[#F4B400] hover:text-black transition">
            <ChevronRight size={18} />
          </button>

        </div>
      </div>
    </section>
  );
}