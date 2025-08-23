"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <Image
              src="/images/about.jpg"
              alt="About MetalCycle Pro"
              width={600}
              height={450}
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/20 rounded-lg -z-10"></div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pioneering <span className="text-primary">Metal Recycling</span> Excellence Since 1995
            </h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              MetalCycle Pro is a leading provider of metal recycling solutions, specializing in copper, aluminum, and
              iron scrap. With over 25 years of experience, we have established ourselves as industry leaders committed to
              sustainability and quality.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Premium Quality:</span> Our rigorous quality control ensures the
                  highest grade recycled metals.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Sustainable Practices:</span> Environmentally responsible recycling
                  processes and zero-waste initiatives.
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Global Network:</span> Serving clients in over 30 countries with
                  efficient logistics and delivery.
                </p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary-dark group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
