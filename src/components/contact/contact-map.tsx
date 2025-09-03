"use client"

import { useState } from "react"

export function ContactMap() {
  const [activeTab, setActiveTab] = useState("headquarters")

  const mapUrls = {
    headquarters:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin",
    delhi:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.866918528092!2d77.16561737528451!3d28.513651425729932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1e6d1c6c5601%3A0x8888799beda9f79e!2sSector%20A%20Main%20Rd%2C%20Pocket%20B-C%2C%20Sector-A%2C%20Vasant%20Kunj%2C%20New%20Delhi%2C%20Delhi%20110070!5e0!3m2!1sen!2sin!4v1756119392545!5m2!1sen!2sin",
  }

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Find Us on the Map</h2>

      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          <button
            onClick={() => setActiveTab("headquarters")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "headquarters"
                ? "bg-yellow-500 text-black font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Odisha HQ
          </button>
          <button
            onClick={() => setActiveTab("delhi")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "delhi"
                ? "bg-yellow-500 text-black font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Delhi Office
          </button>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg h-[450px]">
        <iframe
          src={mapUrls[activeTab as keyof typeof mapUrls]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Jain Metal Group Location"
        ></iframe>
      </div>
    </section>
  )
}
