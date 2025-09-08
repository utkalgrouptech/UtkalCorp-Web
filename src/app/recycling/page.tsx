import { RecycleIcon as Recycling } from "lucide-react"
import HeroSection from "@/components/business/HeroSection"
import AboutSection from "@/components/business/AboutSection"
import HowItWorks from "@/components/business/HowItWorks"
import ImageCarousel from "@/components/business/ImageCarousel"
import WhyChooseUs from "@/components/business/WhyChooseUs"
import CTASection from "@/components/business/CTASection"
import type { Metadata } from "next"
import { recycle1, recycle2, recycle3, recycle4, recyclea, recycleI } from "@/asserts/Product"

export const metadata: Metadata = {
  title: "Recycling Copper & Aluminium Scrap | EcoMetal Solutions",
  description: "Sustainable recycling solutions for copper and aluminium scrap materials.",
}

export default function RecyclingPage() {
  return (
    <div className="space-y-24 overflow-hidden">
      <HeroSection
        title="Recycling Copper & Aluminium Scrap"
        subtitle="Transforming waste into valuable resources through sustainable practices"
        icon={<Recycling className="size-12 text-emerald-500" strokeWidth={1.5} />}
        imagePath={recyclea.src}
        color="emerald"
      />
      <AboutSection
        title="About Our Recycling Process"
        text="We specialize in collecting, processing, and recycling copper and aluminium scrap to reduce environmental impact and conserve natural resources. Our advanced recycling technologies ensure maximum material recovery while minimizing waste."
        imagePath={recycleI.src}
        stats={[
          { value: "98%", label: "Recovery Rate" },
          { value: "15K", label: "Tons Recycled Yearly" },
          { value: "60%", label: "Energy Saved" },
        ]}
      />
      <HowItWorks
        title="Our Recycling Process"
        steps={[
          { name: "Collection", description: "We collect scrap from various sources" },
          { name: "Sorting", description: "Materials are carefully sorted by type" },
          { name: "Processing", description: "Scrap is processed to remove impurities" },
          { name: "Melting", description: "Materials are melted in energy-efficient furnaces" },
          { name: "Reuse", description: "Recycled materials enter the manufacturing cycle" },
        ]}
        color="emerald"
      />
      <ImageCarousel
        images={[
          { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_LkkxmWHXiahvJ3oagOb0Fs9s-ghozdrkuw&s", alt: "Copper recycling process" },
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG2BowgfgxR-0Ejw4eNG-jF_z6rJ72MysBA&s", alt: "Aluminium sorting facility" },
          { src: recycle3.src, alt: "Material recovery system" },
          { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb5njXx2LffC17uvFBRjUl6Q1VqBDzza1HEA&s", alt: "Finished recycled materials" },
        ]}
        title="Our Recycling Facilities"
      />
      <WhyChooseUs
        title="Why Choose Our Recycling Services"
        reasons={[
          { title: "Eco-Friendly Processes", description: "Our recycling methods minimize environmental impact" },
          { title: "Advanced Technology", description: "State-of-the-art equipment for maximum recovery" },
          { title: "Transparent Pricing", description: "Fair and competitive rates for all materials" },
          { title: "Certified Processes", description: "ISO certified recycling operations" },
        ]}
        color="emerald"
      />
      <CTASection
        title="Start Recycling With Us Today"
        text="Join our mission to create a more sustainable future through responsible recycling practices."
        buttonText="Get a Quote"
        color="emerald"
      />
    </div>
  )
}
