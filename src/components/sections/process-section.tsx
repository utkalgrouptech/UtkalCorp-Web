"use client"

import { useEffect } from "react"
import { Truck, Recycle, Factory, Package, CheckCircle, ArrowRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const processSteps = [
  {
    id: 1,
    title: "Collection",
    description: "We collect metal scrap from businesses, industries, and collection points.",
    icon: <Truck className="h-10 w-10 text-white" />,
  },
  {
    id: 2,
    title: "Sorting & Processing",
    description: "The collected scrap is sorted by type and processed through our advanced recycling systems.",
    icon: <Recycle className="h-10 w-10 text-white" />,
  },
  {
    id: 3,
    title: "Refining",
    description: "We refine the processed metals to meet specific quality standards and client requirements.",
    icon: <Factory className="h-10 w-10 text-white" />,
  },
  {
    id: 4,
    title: "Quality Control",
    description: "Rigorous quality checks ensure our recycled metals meet the highest industry standards.",
    icon: <CheckCircle className="h-10 w-10 text-white" />,
  },
  {
    id: 5,
    title: "Distribution",
    description: "The final products are packaged and distributed to our clients worldwide.",
    icon: <Package className="h-10 w-10 text-white" />,
  },
]

export default function ProcessSection() {
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
            Our <span className="text-primary">Recycling Process</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We follow a comprehensive process to ensure the highest quality recycled metals while maintaining
            environmental sustainability.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative z-10" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex flex-col items-center">
                  <div className="bg-primary rounded-full p-4 mb-4 relative">
                    {step.icon}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 right-0 -translate-y-1/2 translate-x-1/2 z-20">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
