"use client";

import { useState } from "react";
import img1 from "@/asserts/home/pic1.png";
import img2 from "@/asserts/home/pic2.png";
import img3 from "@/asserts/home/pic3.png";
import img4 from "@/asserts/home/pic4.png";
import img5 from "@/asserts/home/pic5.png";
import img6 from "@/asserts/home/pic6.png";
import img7 from "@/asserts/home/pic7.png";
import img8 from "@/asserts/home/pic8.png";
import img9 from "@/asserts/home/pic9.png";

import {
  Factory,
  Pickaxe,
  Ship,
  Train,
  Package,
  Truck,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Plant O&M",
    icon: Factory,
    image: img1.src,
    description:
      "Comprehensive industrial operations and maintenance services ensuring maximum uptime and operational efficiency.",
    points: [
      "Operational Excellence",
      "Predictive Maintenance",
      "Shutdown Services",
      "Process Optimization",
    ],
  },

  {
    title: "Intra Plant Logistics",
    icon: Package,
    image: img2.src,
    description:
      "End-to-end material movement and logistics support within industrial facilities.",
    points: [
      "Material Movement",
      "Fleet Coordination",
      "Warehouse Support",
      "Cost Optimization",
    ],
  },

  {
    title: "Railway Logistics",
    icon: Train,
    image: img3.src,
    description:
      "Rail transportation management and logistics support for industrial supply chains.",
    points: [
      "Rake Handling",
      "Loading Operations",
      "Freight Support",
      "Yard Management",
    ],
  },

  {
    title: "Scrap Management",
    icon: Package,
    image: img4.src,
    description:
      "Efficient scrap collection, segregation, transportation and disposal solutions.",
    points: [
      "Scrap Collection",
      "Sorting & Segregation",
      "Transportation",
      "Inventory Control",
    ],
  },

  {
    title: "Material Handling",
    icon: Truck,
    image: img5.src,
    description:
      "Bulk material handling services for industrial plants and infrastructure projects.",
    points: [
      "Conveyor Systems",
      "Stockyard Operations",
      "Loading Support",
      "Warehouse Handling",
    ],
  },

  {
    title: "Mining Services",
    icon: Pickaxe,
    image: img6.src,
    description:
      "Mining excavation, crushing, screening and beneficiation support services.",
    points: [
      "Excavation",
      "Crushing",
      "Screening",
      "Beneficiation Support",
    ],
  },

  {
    title: "Port Operations",
    icon: Ship,
    image: img7.src,
    description:
      "Port operations, vessel support services and marine logistics management.",
    points: [
      "Cargo Handling",
      "Vessel Support",
      "Terminal Operations",
      "Marine Logistics",
    ],
  },

  {
    title: "Aerospace & Electrical",
    icon: Settings,
    image: img8.src,
    description:
      "Specialized aerospace, electrical and industrial maintenance services.",
    points: [
      "Electrical Systems",
      "Preventive Maintenance",
      "Inspection Services",
      "Technical Support",
    ],
  },

  {
    title: "Heavy Equipment",
    icon: Truck,
    image: img9.src,
    description:
      "Operation, maintenance and management of heavy industrial equipment.",
    points: [
      "Fleet Management",
      "Equipment Maintenance",
      "Deployment Support",
      "Performance Monitoring",
    ],
  },

  {
    title: "Petrochemical Supply Chain",
    icon: Settings,
    image: "/images/petrochemical.jpg",
    description:
      "Integrated supply chain management solutions for petrochemical industries.",
    points: [
      "Supply Planning",
      "Inventory Control",
      "Distribution",
      "Logistics Support",
    ],
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);

  const current = services[active];

  return (
    <section className="bg-white">
    <div className="grid lg:grid-cols-[300px_380px_1fr] min-h-[430px]">

  {/* LEFT PANEL */}
  <div className="bg-[#071427]/85 backdrop-blur-lg text-white p-7">

    <p className="text-[#F4B400] uppercase tracking-[3px] text-xs font-semibold mb-3">
      OUR SERVICES
    </p>

    <h2 className="text-[26px] lg:text-[25px] leading-[1.1] font-bold mb-8">
      <span className="whitespace-nowrap">
        End-to-End Industrial
      </span>
      <br />
      Solutions
    </h2>

    <div className="space-y-1">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-300
            ${
              active === index
                ? "border-l-2 border-[#F4B400] text-[#F4B400] bg-white/5"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Icon size={16} />

            <span className="text-[13px] font-medium">
              {service.title}
            </span>
          </button>
        );
      })}
    </div>
  </div>

  {/* CENTER CONTENT */}
  <div className="bg-white px-8 py-8 flex flex-col justify-center">

    <div className="w-16 h-16 rounded-xl bg-[#071427] flex items-center justify-center mb-6 shadow-lg">
      <current.icon
        size={28}
        className="text-[#F4B400]"
      />
    </div>

    <h3 className="text-[28px] lg:text-[32px] font-bold text-[#071427] mb-4">
      {current.title}
    </h3>

    <p className="text-gray-600 text-sm leading-6 mb-6">
      {current.description}
    </p>

    <ul className="space-y-3 mb-8">
      {current.points.map((item, i) => (
        <li
          key={i}
          className="flex items-center gap-3 text-sm text-gray-700"
        >
          <span className="w-2 h-2 rounded-full bg-[#F4B400]" />
          {item}
        </li>
      ))}
    </ul>

    <button className="bg-[#F4B400] hover:bg-[#e4a900] transition px-5 py-3 rounded-md w-fit flex items-center gap-2 text-sm font-semibold text-black">
      Learn More
      <ArrowRight size={14} />
    </button>

  </div>

  {/* RIGHT IMAGE */}
  <div className="relative overflow-hidden">

    <img
      src={current.image}
      alt={current.title}
      className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
    />

    {/* White Fade Effect */}
    <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white via-white/70 to-transparent" />

  </div>

</div>
    </section>
  );
}