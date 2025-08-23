"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const timelineEvents = [
  {
    year: "1995",
    title: "Company Founded",
    description: "MetalCycle Pro was established as a small family-owned metal recycling operation.",
  },
  {
    year: "2000",
    title: "First Major Facility",
    description: "Opened our first large-scale recycling facility with advanced processing technology.",
  },
  {
    year: "2005",
    title: "International Expansion",
    description: "Expanded operations to Europe and Asia, establishing a global presence.",
  },
  {
    year: "2010",
    title: "Innovation Milestone",
    description: "Developed proprietary metal separation technology, increasing recovery rates by 30%.",
  },
  {
    year: "2015",
    title: "Sustainability Initiative",
    description: "Launched comprehensive sustainability program, achieving carbon neutrality in all facilities.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Implemented AI-driven sorting systems and digital supply chain management.",
  },
  {
    year: "Present",
    title: "Industry Leadership",
    description: "Recognized as a global leader in metal recycling with operations in 30+ countries.",
  },
]

export default function HistoryTimeline() {
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
            Our <span className="text-primary">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Key milestones in our companys history that have shaped who we are today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary z-10"></div>

                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <span className="text-primary font-bold text-xl">{event.year}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                </div>

                {/* Empty Space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
