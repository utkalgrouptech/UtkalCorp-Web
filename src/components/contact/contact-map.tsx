"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export function ContactMap() {
  const [activeTab, setActiveTab] = useState("headquarters");

  const mapUrls = {
    headquarters:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin",

    delhi:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.866918528092!2d77.16561737528451!3d28.513651425729932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e6d1c6c5601%3A0x8888799beda9f79e!2sSector%20A%20Main%20Rd%2C%20Pocket%20B-C%2C%20Sector-A%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070!5e0!3m2!1sen!2sin!4v1756119392545!5m2!1sen!2sin",
  };

  return (
    <section className="bg-gray-50 py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-amber-500 uppercase tracking-[5px] font-semibold mb-3">
          Our Locations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Visit Our Offices
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Find our registered and corporate offices across India 
          and connect with our professional team.
        </p>
      </div>


      {/* Location Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">

        <button
          onClick={() => setActiveTab("headquarters")}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            ${
              activeTab === "headquarters"
                ? "bg-amber-500 text-black shadow-lg shadow-amber-300"
                : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
            }
          `}
        >
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Odisha HQ
          </span>
        </button>


        <button
          onClick={() => setActiveTab("delhi")}
          className={`
            px-6 py-3 rounded-full font-medium transition-all duration-300
            ${
              activeTab === "delhi"
                ? "bg-amber-500 text-black shadow-lg shadow-amber-300"
                : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
            }
          `}
        >
          <span className="flex items-center gap-2">
            <MapPin size={18} />
            Delhi Office
          </span>
        </button>

      </div>


      {/* Map Card */}
      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-[32px] p-3 shadow-2xl border border-gray-100">

          {/* Location Label */}
          <div className="px-4 py-3 text-gray-700 font-medium flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            {activeTab === "headquarters"
              ? "Utkal Corporation - Bhubaneswar, Odisha"
              : "Utkal Corporation - New Delhi Office"}
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl h-[500px]">
            <iframe
              src={mapUrls[activeTab as keyof typeof mapUrls]}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Utkal Corporation Office Locations"
            />
          </div>

        </div>

      </div>

    </section>
  );
}