"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

type ColorType = "emerald" | "amber" | "sky"

const colorVariants = {
  emerald: "border-emerald-500 text-emerald-500",
  amber: "border-amber-500 text-amber-500",
  sky: "border-sky-500 text-sky-500",
}

interface ReasonProps {
  title: string
  description: string
}

interface WhyChooseUsProps {
  title: string
  reasons: ReasonProps[]
  color: ColorType
}

export default function WhyChooseUs({ title, reasons, color }: WhyChooseUsProps) {
  return (
    <section className="container mx-auto px-6 py-12">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        {title}
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-t-transparent hover:border-t-current transition-colors duration-300"
            style={{ borderTopColor: `var(--${color}-500)` }}
          >
            <div
              className={`w-12 h-12 rounded-full border-2 ${colorVariants[color]} flex items-center justify-center mb-4`}
            >
              <Check className="size-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
            <p className="text-gray-600">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
