import { aboutbanner } from "@/asserts/home";

export default function AboutHero() {
    return (
      <section className="w-full relative h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
  
        {/* Diagonal image strips */}
        <div className="w-full absolute inset-0 flex">
        <img src={aboutbanner.src} alt="" className="w-full" />
        </div>
  
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider">ABOUT US</h1>
        </div>
      </section>
    )
  }
  