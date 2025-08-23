"use client"

import { useEffect } from "react"
import Image from "next/image"
import AOS from "aos"
import "aos/dist/aos.css"

const partners = [
  { id: 1, name: "Partner 1", logo: "/images/partner-1.png" },
  { id: 2, name: "Partner 2", logo: "/images/partner-2.png" },
  { id: 3, name: "Partner 3", logo: "/images/partner-3.png" },
  { id: 4, name: "Partner 4", logo: "/images/partner-4.png" },
  { id: 5, name: "Partner 5", logo: "/images/partner-5.png" },
  { id: 6, name: "Partner 6", logo: "/images/partner-6.png" },
]

export default function PartnersSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Our Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We collaborate with leading companies and organizations across various industries.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm flex items-center justify-center h-24"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
