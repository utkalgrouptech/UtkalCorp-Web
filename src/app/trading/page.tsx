import { BarChart3 } from "lucide-react"
import HeroSection from "@/components/business/HeroSection"
import AboutSection from "@/components/business/AboutSection" 
import HowItWorks from "@/components/business/HowItWorks"
import ImageCarousel from "@/components/business/ImageCarousel"
import WhyChooseUs from "@/components/business/WhyChooseUs"
import CTASection from "@/components/business/CTASection"
import type { Metadata } from "next"
import { image1, image2, image3, image4 } from "@/asserts/business"

export const metadata: Metadata = {
  title: "Global Scrap Trading Network | EcoMetal Solutions",
  description: "Worldwide trading of copper and aluminium scrap with trusted partners.",
}

export default function TradingPage() {
  return (
    <div className="space-y-24 overflow-hidden">
      <HeroSection
        title="Global Scrap Trading Network"
        subtitle="Connecting suppliers and buyers across the world with reliable trading solutions"
        icon={<BarChart3 className="size-12 text-sky-500" strokeWidth={1.5} />}
        imagePath={image1.src}
        color="sky"
      />
      <AboutSection
        title="About Our Trading Network"
        text="We facilitate global trade of copper and aluminium scrap through our extensive network of trusted partners. Our trading solutions ensure fair pricing, reliable logistics, and seamless transactions."
        imagePath={image3.src}
        stats={[
          { value: "35+", label: "Countries" },
          { value: "250+", label: "Trading Partners" },
          { value: "40K", label: "Tons Traded Yearly" },
        ]}
      />
      <HowItWorks
        title="Our Trading Process"
        steps={[
          { name: "Sourcing", description: "We identify quality materials from reliable sources" },
          { name: "Logistics", description: "Efficient transportation and handling solutions" },
          { name: "Trading", description: "Transparent and fair trading practices" },
          { name: "Delivery", description: "Timely and secure delivery to destination" },
        ]}
        color="sky"
      />
      <ImageCarousel
        images={[
          { src: image1.src, alt: "Global trading map" },
          { src: image2.src, alt: "Shipping containers" },
          { src: image3.src, alt: "Trading partners meeting" },
          { src: image4.src, alt: "Material inspection" },
        ]}
        title="Our Global Presence"
      />
      <WhyChooseUs
        title="Why Choose Our Trading Services"
        reasons={[
          { title: "Global Network", description: "Access to worldwide suppliers and buyers" },
          { title: "Reliable Logistics", description: "Efficient transportation and delivery systems" },
          { title: "Market Expertise", description: "Deep understanding of material markets" },
          { title: "Secure Transactions", description: "Safe and transparent trading processes" },
        ]}
        color="sky"
      />
      <CTASection
        title="Join Our Trading Network"
        text="Connect with global partners and optimize your trading potential with our expert solutions."
        buttonText="Become a Partner"
        color="sky"
      />
    </div>
  )
}
