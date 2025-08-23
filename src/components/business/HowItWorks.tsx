"use client"

import { motion } from "framer-motion"

type ColorType = "emerald" | "amber" | "sky"

const colorVariants = {
  emerald: "bg-emerald-500",
  amber: "bg-amber-500",
  sky: "bg-sky-500",
}

interface StepProps {
  name: string
  description: string
}

interface HowItWorksProps {
  title: string
  steps: StepProps[]
  color: ColorType
}

export default function HowItWorks({ title, steps, color }: HowItWorksProps) {
  return (
    <section className="container mx-auto px-6 py-12 bg-gray-50 rounded-3xl">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        {title}
      </motion.h3>

      <div className="relative">
        {/* Connecting line */}
        <div
          className={`absolute top-1/2 left-0 right-0 h-1 ${colorVariants[color]} transform -translate-y-1/2 hidden md:block`}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                <div
                  className={`${colorVariants[color]} text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold`}
                >
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.name}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
