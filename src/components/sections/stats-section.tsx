"use client"

import { useEffect } from "react"
import { Recycle, Users, Globe, Award } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const stats = [
  {
    id: 1,
    value: "25+",
    label: "Years Experience",
    icon: <Award className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    value: "500K+",
    label: "Tons Recycled Annually",
    icon: <Recycle className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    value: "1000+",
    label: "Satisfied Clients",
    icon: <Users className="h-10 w-10 text-primary" />,
  },
  {
    id: 4,
    value: "30+",
    label: "Countries Served",
    icon: <Globe className="h-10 w-10 text-primary" />,
  },
]

export default function StatsSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            Our Impact in Numbers
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We are proud of our achievements in the metal recycling industry and our contribution to a more sustainable
            future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
