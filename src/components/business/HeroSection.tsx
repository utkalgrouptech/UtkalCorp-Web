"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

type ColorType = "emerald" | "amber" | "sky"

const colorVariants = {
  emerald: "from-emerald-600 to-emerald-400",
  amber: "from-amber-600 to-amber-400",
  sky: "from-sky-600 to-sky-400",
}

interface HeroSectionProps {
  title: string
  subtitle: string
  icon: ReactNode
  imagePath: string
  color: ColorType
}

export default function HeroSection({ title, subtitle, icon, imagePath, color }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${colorVariants[color]} opacity-90 z-10`} />

      {/* Background image */}
      <div className="absolute inset-0">
        <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      <div className="relative z-20 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="bg-white rounded-full p-3 shadow-lg">{icon}</div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <button className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-white/10 rounded-tl-full z-10" />
      <div className="absolute top-20 right-20 w-20 h-20 bg-white/10 rounded-full z-10" />
    </div>
  )
}
