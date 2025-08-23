"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const products = [
  {
    id: 1,
    name: "Copper Scrap",
    description: "High-quality recycled copper for electrical, plumbing, and manufacturing applications.",
    image: "/images/copper.jpg",
    category: "Copper",
  },
  {
    id: 2,
    name: "Aluminum Scrap",
    description: "Lightweight, durable recycled aluminum for construction, automotive, and packaging industries.",
    image: "/images/aluminum.jpg",
    category: "Aluminum",
  },
  {
    id: 3,
    name: "Iron Scrap",
    description: "Robust recycled iron for construction, manufacturing, and infrastructure projects.",
    image: "/images/iron.jpg",
    category: "Iron",
  },
]

export default function ProductsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Our Premium <span className="text-primary">Recycled Metals</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We specialize in processing and supplying high-quality copper, aluminum, and iron scrap that meets the most
            stringent industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-8px]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-dark" data-aos="fade-up">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
