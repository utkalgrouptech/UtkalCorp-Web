"use client"

import { motion } from "framer-motion"

type ColorType = "emerald" | "amber" | "sky"

const colorVariants = {
  emerald: "from-emerald-600 to-emerald-400",
  amber: "from-amber-600 to-amber-400",
  sky: "from-sky-600 to-sky-400",
}

interface CTASectionProps {
  title: string
  text: string
  buttonText: string
  color: ColorType
}

export default function CTASection({ title, text, buttonText, color }: CTASectionProps) {
  return (
    <section className={`bg-gradient-to-r ${colorVariants[color]} rounded-3xl overflow-hidden relative`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            {text}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-900 font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
          </motion.button>
        </div>
      </div>
    </section>
  )
}
