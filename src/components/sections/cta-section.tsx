"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function CTA() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
    <section
      className="py-20 bg-primary text-white relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/cta-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-aos="fade-up">
            Ready to Start Recycling with Us?
          </h2>
          <p className="text-xl text-white/80 mb-8" data-aos="fade-up" data-aos-delay="100">
            Join our network of satisfied clients and contribute to a more sustainable future through efficient metal
            recycling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <Button size={"lg"} className="bg-white text-primary hover:bg-gray-100">
              Get a Quote
            </Button>
            <Button size={"lg"} variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
