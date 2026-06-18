"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Factory,
  Truck,
  Train,
  Recycle,
  Package,
  Ship,
  Plane,
  Wrench,
  Fuel,
  ArrowRight,
  Pickaxe,
} from "lucide-react";

import { img1,img2,img3,img4,img5,img6,img7,img8,img9,img10 } from "@/asserts/Product";
const services = [
  {
    id: "01",
    title: "Plant & Industrial Operations and Maintenance (O&M)",
    icon: Factory,
    image: img1,
    points: [
      "Preventive Maintenance",
      "Predictive Maintenance",
      "Shutdown Support",
      "24/7 Operations",
    ],
  },
  {
    id: "02",
    title: "Intra Plant Logistic",
    icon: Truck,
    image: img2,
    points: [
      "Material Transportation",
      "Inventory Management",
      "Workflow Optimization",
    ],
  },
  {
    id: "03",
    title: "Railway Logistic",
    icon: Train,
    image: img3,
    points: [
      "Rail Freight Services",
      "Wagon Management",
      "Scheduling & Coordination",
    ],
  },
  {
    id: "04",
    title: "Scrap Management",
    icon: Recycle,
    image: img4,
    points: [
      "Scrap Collection",
      "Sorting & Processing",
      "Recycling Solutions",
    ],
  },
  {
    id: "05",
    title: "Material Handling",
    icon: Package,
    image: img5,
      
    points: [
      "Equipment Supply",
      "Handling Systems",
      "Maintenance Services",
    ],
  },
  {
    id: "06",
    title: "Mining Excavation, Crushing & Screening",
    icon: Pickaxe,
    image: img6,
    points: [
      "Excavation Support",
      "Crushing Operations",
      "Screening Services",
    ],
  },
  {
    id: "07",
    title: "Port Operations & Vessel Support Services",
    icon: Ship,
    image:
      img7,
    points: [
      "Port Operations",
      "Ship Maintenance",
      "Logistics Coordination",
    ],
  },
  {
    id: "08",
    title: "Aerospace & Electrical Maintenance Services",
    icon: Plane,
    image:
      img8,
    points: [
      "Electrical Maintenance",
      "Overhaul Services",
      "Quality Assurance",
    ],
  },
  {
    id: "09",
    title: "Heavy Equipment Management",
    icon: Wrench,
    image:
      img9,
    points: [
      "Fleet Management",
      "Equipment Maintenance",
      "Lifecycle Support",
    ],
  },
  {
    id: "10",
    title: "Petrochemical Supply Chain Management",
    icon: Fuel,
    image:
      img10,
    points: [
      "Procurement",
      "Inventory Management",
      "Risk & Compliance",
    ],
  },
];
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="pb-20">
      {/* Heading */}
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mb-16"
>
        <span className="text-[#f4b400] uppercase tracking-[4px] font-semibold">
          What We Offer
        </span>

        <h2 className="text-4xl lg:text-5xl font-bold text-[#111827] mt-4">
          Comprehensive Services
          <br />
          For Every Industrial Need
        </h2>

        <div className="w-24 h-1 bg-[#f4b400] mx-auto mt-6 rounded-full" />
   </motion.div>
      {/* Services */}
      <div className="space-y-8">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
          <motion.div
  key={service.id}
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  whileHover={{
    y: -10,
  }}
  className={`grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 ${
    index % 2 !== 0
      ? "lg:[&>*:first-child]:order-2"
      : ""
  }`}
>
              {/* IMAGE */}
             <motion.div
  initial={{ scale: 1.15 }}
  whileInView={{ scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  className="relative h-[320px] lg:h-[420px] overflow-hidden"
>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* CONTENT */}
              <div className="relative p-8 lg:p-12 flex flex-col justify-center">
                {/* Number */}
                <span className="absolute top-6 right-6 text-[80px] lg:text-[110px] font-black text-gray-100 select-none">
                  {service.id}
                </span>

                {/* Icon */}
              <motion.div
  animate={{
    y: [0, -6, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="w-16 h-16 rounded-2xl border border-[#f4b400]/30 bg-[#f4b400]/10 flex items-center justify-center mb-6"
>
                  <Icon className="w-8 h-8 text-[#f4b400]" />
               </motion.div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-[#111827] mb-6 leading-tight max-w-xl">
                  {service.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3 mb-8">
                  {service.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#f4b400]" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="group flex items-center gap-2 font-semibold text-black hover:text-[#f4b400] transition">
                  Explore More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
              </div>
           </motion.div>
          );
        })}
      </div>

    
      {/* CTA */}
      <div className="mt-16 rounded-[32px] overflow-hidden relative bg-[#091c30]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c')] bg-cover bg-center opacity-20" />

        <div className="relative z-10 px-8 lg:px-16 py-14 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-3">
              Ready to Optimize Your Operations?
            </h3>

            <p className="text-gray-300">
              Let's build stronger, smarter and more sustainable
              industrial operations together.
            </p>
          </div>

          <button className="bg-[#f4b400] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            ENQUIRE NOW
          </button>
        </div>
      </div>
    </section>
  );
}