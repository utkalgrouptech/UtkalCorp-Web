"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Recycle, Truck, Factory, FileCheck } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const services = [
  {
    id: 1,
    name: "Metal Collection",
    description:
      "We provide efficient collection services for all types of metal scrap from businesses and industrial sites.",
    icon: <Truck className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    name: "Processing & Recycling",
    description: "Our state-of-the-art facilities process metal scrap using environmentally friendly methods.",
    icon: <Recycle className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    name: "Metal Refining",
    description: "We refine scrap metals to meet specific industry standards and client requirements.",
    icon: <Factory className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    name: "Certification & Compliance",
    description:
      "We ensure all recycling processes comply with environmental regulations and provide necessary documentation.",
    icon: <FileCheck className="h-10 w-10 text-primary" />,
  },
]

export default function ServicesSection() {
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We offer comprehensive metal recycling services to help businesses manage their scrap efficiently and
            sustainably.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 text-primary group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-dark" data-aos="fade-up">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
