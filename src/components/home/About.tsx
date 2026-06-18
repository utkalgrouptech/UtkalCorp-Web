"use client";

import { motion } from "framer-motion";
import Bnr2 from "@/asserts/home/minning.png";
import {
  ShieldCheck,
  Users,
  MapPinned,
  Settings,
} from "lucide-react";

export default function About() {
const features = [
  {
    icon: ShieldCheck,
    title: "Safety First", 
  },
  {
    icon: Users,
    title: "Skilled Workforce",
  },
  {
    icon: MapPinned,
    title: "Pan India Operations",
    
  },
  {
    icon: Settings,
    title: "Technology Driven",
  },
];

  return (
    <section className="bg-white overflow-hidden">
  <div className="grid lg:grid-cols-2 min-h-[480px]">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center"
        >
     <div className="max-w-[620px] px-10 lg:px-20 py-8">

            <p className="uppercase tracking-[4px] text-[#F4B400] text-sm font-semibold mb-5">
              ABOUT US
            </p>
<h2 className="text-[#071427] text-[42px] lg:text-[40px] font-bold leading-[1.1] mb-8">
  <div className="whitespace-nowrap">
    Building Industrial Strength.
  </div>
  <div className="whitespace-nowrap">
    Powering Progress.
  </div>
</h2>
            <p className="text-gray-600 leading-6 mb-5">
              Utkal Corporation Limited is a leading integrated
              service provider specializing in industrial
              operations, maintenance, logistics, mining support
              and port management services.
            </p>

            <p className="text-gray-600 leading-6 mb-12">
              With a strong commitment to safety, innovation and
              operational excellence, we partner with our clients
              to deliver sustainable value across diverse
              industries.
            </p>

      {/* FEATURES */}
<div className="grid grid-cols-2 md:grid-cols-4 mt-10">

  {features.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -4,
          transition: { duration: 0.2 },
        }}
        className="relative flex flex-col items-center text-center px-6"
      >
        {/* Animated Divider */}
        {index !== features.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "60px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px bg-[#e8e8e8]"
          />
        )}

        {/* Icon */}
        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{ duration: 0.2 }}
        >
          <Icon
            size={28}
            strokeWidth={1.6}
            className="text-[#D4A017] mb-3"
          />
        </motion.div>

        {/* Title */}
        <h4 className="text-[#071427] text-[14px] font-semibold leading-[18px]">
          {item.title}
        </h4>
      </motion.div>
    );
  })}

</div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
   <motion.div
  initial={{ opacity: 0, x: 60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative min-h-[350px] lg:min-h-[480px] overflow-hidden"
>
  {/* Image */}
  <img
    src={Bnr2.src}
    alt="Industrial Operations"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Slight dark overlay */}
  <div className="absolute inset-0 bg-black/10" />

  {/* Floating Light Overlay */}
  <motion.div
    animate={{
      x: ["-120%", "220%"],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute inset-y-0 w-[35%] bg-gradient-to-r from-transparent via-[#F4B400]/8 to-transparent rotate-12"
  />
</motion.div>
      </div>
    </section>
  );
}