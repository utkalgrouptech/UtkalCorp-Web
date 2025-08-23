import { Factory } from "lucide-react"
import HeroSection from "@/components/business/HeroSection"
import AboutSection from "@/components/business/AboutSection"
import HowItWorks from "@/components/business/HowItWorks"
import ImageCarousel from "@/components/business/ImageCarousel"
import WhyChooseUs from "@/components/business/WhyChooseUs"
import CTASection from "@/components/business/CTASection"
import type { Metadata } from "next"
import { m1, m2, m3, m4, m5 } from "@/asserts/Product"

export const metadata: Metadata = {
  title: "Manufacturing from Recycled Materials | EcoMetal Solutions",
  description: "High-quality manufacturing using recycled copper and aluminium materials.",
}

export default function ManufacturingPage() {
  return (
    <div className="space-y-24 overflow-hidden">
      <HeroSection
        title="Manufacturing from Recycled Materials"
        subtitle="Creating premium products with sustainable practices and recycled resources"
        icon={<Factory className="size-12 text-amber-500" strokeWidth={1.5} />}
        imagePath={m3.src}
        color="amber"
      />
      <AboutSection
        title="About Our Manufacturing"
        text="We transform recycled copper and aluminium into high-quality products that meet rigorous industry standards. Our manufacturing processes combine sustainability with excellence to deliver superior results."
        imagePath={m3.src}
        stats={[
          { value: "100%", label: "Recycled Materials" },
          { value: "12K", label: "Products Monthly" },
          { value: "45%", label: "Cost Reduction" },
        ]}
      />
      <HowItWorks
        title="Our Manufacturing Process"
        steps={[
          { name: "Smelting", description: "Recycled materials are melted at precise temperatures" },
          { name: "Forming", description: "Molten metal is shaped into desired forms" },
          { name: "Finishing", description: "Products undergo detailed finishing processes" },
          { name: "Quality Check", description: "Rigorous testing ensures product excellence" },
        ]}
        color="amber"
      />
      <ImageCarousel
        images={[
          { src: m1.src, alt: "Manufacturing facility" },
          { src: m4.src, alt: "Product forming process" },
          { src: m5.src, alt: "Quality control inspection" },
          { src: m2.src, alt: "Finished products" },
        ]}
        title="Our Manufacturing Excellence"
      />
      <WhyChooseUs
        title="Why Choose Our Manufacturing"
        reasons={[
          { title: "Sustainable Production", description: "Eco-friendly manufacturing with minimal waste" },
          { title: "Superior Quality", description: "Products that exceed industry standards" },
          { title: "Custom Solutions", description: "Tailored manufacturing to meet specific needs" },
          { title: "Competitive Pricing", description: "Excellent value without compromising quality" },
        ]}
        color="amber"
      />
      <CTASection
        title="Partner With Us For Your Manufacturing Needs"
        text="Experience the perfect blend of sustainability and quality in every product we create."
        buttonText="Request a Sample"
        color="amber"
      />
    </div>
  )
}
