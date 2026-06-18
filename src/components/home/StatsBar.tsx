"use client";

import CountUp from "react-countup";
import img from "@/asserts/home/backgroundimg.png";
const stats = [
  {
    number: 100,
    suffix: "+", 
    label: "Projects Executed",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Workforce Strength",
  },
  {
    number: 20,
    suffix: "+",
    label: "Industrial Clients",
  },
  {
    number: 15,
    suffix: "+",
    label: "Operational Locations",
  },
];

export default function StatsBar() {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Transparent Overlay */}
    <div className="absolute inset-0 bg-[#071427]/60 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`text-center px-6 py-4 ${
                index !== stats.length - 1
                  ? "lg:border-r border-white/10"
                  : ""
              }`}
            >
              <h3 className="text-[#F4B400] text-5xl font-bold mb-3">
                <CountUp
                  end={item.number}
                  duration={3}
                  suffix={item.suffix}
                />
              </h3>

              <p className="text-white/80 text-sm uppercase tracking-wider">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}