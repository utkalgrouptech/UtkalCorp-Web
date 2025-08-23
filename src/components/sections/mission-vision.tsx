"use client"

import { useEffect } from "react"
import { Target, Lightbulb, Heart } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function MissionVision() {
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
            Our Mission, Vision & <span className="text-primary">Values</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Guiding principles that drive our operations and shape our company culture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To transform metal waste into valuable resources through innovative recycling solutions that benefit our
              clients, communities, and the environment.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Maximize resource recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Minimize environmental impact</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Provide exceptional value to clients</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the global leader in metal recycling, setting industry standards for quality, innovation, and
              sustainability while contributing to a circular economy.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Lead industry innovation</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Expand global presence</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Promote circular economy principles</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Core principles that guide our decisions, actions, and relationships with stakeholders at every level of
              our organization.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Integrity & transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Environmental stewardship</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Innovation & continuous improvement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">Customer focus & excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
