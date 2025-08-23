"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Shield, Award } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    logo: "/images/iso-9001.png",
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System",
    logo: "/images/iso-14001.png",
  },
  {
    name: "ISO 45001:2018",
    description: "Occupational Health and Safety",
    logo: "/images/iso-45001.png",
  },
  {
    name: "R2 (Responsible Recycling)",
    description: "Electronics Recycling Standard",
    logo: "/images/r2-certification.png",
  },
]

export default function CertificationsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Our <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We adhere to the highest industry standards and are certified by leading international organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-24 h-24">
                  <Image src={cert.logo || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-right">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-primary mr-4" />
              <h3 className="text-2xl font-bold">Quality Assurance</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our comprehensive quality management system ensures that all our recycled metals meet the highest
              standards of purity and consistency. We implement rigorous testing protocols at every stage of the
              recycling process.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Regular quality audits and inspections</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Advanced testing equipment and methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Continuous improvement of processes</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-left">
            <div className="flex items-center mb-6">
              <Award className="h-10 w-10 text-primary mr-4" />
              <h3 className="text-2xl font-bold">Industry Recognition</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our commitment to excellence has been recognized through various industry awards and accolades. We are
              proud to be acknowledged as leaders in sustainable metal recycling.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Environmental Stewardship Award (2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Innovation in Recycling Technology (2021)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Best Sustainable Business Practices (2020)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
