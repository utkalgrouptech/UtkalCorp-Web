"use client";
import tata from "@/asserts/clients/Tata_Steel_Logo.svg.png";
import jsw from "@/asserts/clients/JSW_Group_logo.svg.png";
import vedanta from "@/asserts/clients/Vedanta.png";

import adani from "@/asserts/clients/Adani.png";
import jindal from "@/asserts/clients/Jindal.png";
const clients = [
  tata,
 
  jsw,
  vedanta,

  adani,
  jindal,
];

export default function TrustedClients() {
  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold tracking-[3px] text-gray-500 uppercase mb-6">
          Trusted By Leading Organizations
          
        </p>

        <div className="relative">
          <div className="flex marquee">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[220px] h-[100px] bg-white border border-gray-200 rounded-lg mx-3 flex items-center justify-center"
              >
              <img
  src={logo.src}
  alt="client"
  className="max-h-12 w-auto object-contain"
/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}