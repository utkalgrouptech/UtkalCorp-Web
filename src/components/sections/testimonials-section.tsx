"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Procurement Manager, ABC Manufacturing",
    image: "/images/testimonial-1.jpg",
    quote:
      "MetalCycle Pro has been our trusted partner for over 5 years. Their consistent quality and reliable service have made them an invaluable part of our supply chain.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director, XYZ Industries",
    image: "/images/testimonial-2.jpg",
    quote:
      "We've worked with several metal recycling companies, but none match the professionalism and efficiency of MetalCycle Pro. Their commitment to sustainability aligns perfectly with our corporate values.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CEO, Green Construction Co.",
    image: "/images/testimonial-3.jpg",
    quote:
      "The quality of recycled metals we receive from MetalCycle Pro is consistently excellent. Their competitive pricing and reliable delivery have made them our go-to supplier.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Do not just take our word for it. Heres what our valued clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-6 text-lg">`{testimonial.quote}`</p>
                        <div>
                          <h4 className="text-xl font-bold">{testimonial.name}</h4>
                          <p className="text-gray-500 dark:text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full text-gray-800 dark:text-white transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full text-gray-800 dark:text-white transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-primary" : "w-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
