"use client";
import { pic4 } from "@/asserts/Product";
import { motion } from "framer-motion";
const text = "SERVICES";
export function ContactHero() {
    return (
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
  
        {/* Hero Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${pic4.src})` }}
          ></div>
        </div>
  
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
           {/* Letter Animation */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Paragraph Animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}
            className="text-xl text-white max-w-3xl mx-auto"
          >
            Discover our range of services and how we can help your business grow.
          </motion.p>

          </div>
        </div>
      </section>
    )
  }
  