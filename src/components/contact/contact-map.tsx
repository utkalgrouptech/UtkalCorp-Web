"use client"

import { useState } from "react"

export function ContactMap() {
  const [activeTab, setActiveTab] = useState("headquarters")

  const mapUrls = {
    headquarters:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin",
    plant:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.14200802277!2d73.72287747484555!3d18.524564859944184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1682512614879!5m2!1sen!2sin",
    delhi:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004834228!2d77.06889969643787!3d28.527280258421567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1682512652879!5m2!1sen!2sin",
    bangalore:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089976856!2d77.49085075436377!3d12.953997349304733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682512688879!5m2!1sen!2sin",
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
            onClick={() => setActiveTab("plant")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "plant"
                ? "bg-yellow-500 text-black font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Pune Plant
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
          <button
            onClick={() => setActiveTab("bangalore")}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeTab === "bangalore"
                ? "bg-yellow-500 text-black font-bold"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Bangalore Office
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
