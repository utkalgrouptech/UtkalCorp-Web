"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function AboutContent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 1995, MetalCycle Pro began as a small family-owned metal recycling operation with a vision to
              transform the industry through sustainable practices and innovative technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Over the past 25+ years, we have grown into a global leader in metal recycling, specializing in copper,
              aluminum, and iron scrap. Our commitment to quality, environmental responsibility, and customer
              satisfaction has remained unwavering throughout our journey.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Today, we operate state-of-the-art recycling facilities across multiple countries, serving thousands of
              clients ranging from small businesses to large industrial corporations. Our team of experts continues to
              push the boundaries of whats possible in metal recycling, developing new processes and technologies that
              maximize resource recovery while minimizing environmental impact.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">25+ years</span> of industry experience
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Global presence</span> in 30+ countries
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">500K+ tons</span> recycled annually
                </p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">1000+ clients</span> worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Our facility"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image src="/images/about-2.jpg" alt="Our team" width={300} height={200} className="w-full h-auto" />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Recycling process"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/about-4.jpg"
                    alt="Our products"
                    width={300}
                    height={200}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
