"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface StatProps {
  value: string
  label: string
}

interface AboutSectionProps {
  title: string
  text: string
  imagePath: string
  stats: StatProps[]
}

export default function AboutSection({ title, text, imagePath, stats }: AboutSectionProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{text}</p>

          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-100 rounded-lg z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gray-100 rounded-lg z-0" />

          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <Image
              src={imagePath || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
