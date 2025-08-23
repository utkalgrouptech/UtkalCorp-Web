import { Contact } from "@/asserts/Product";

export function ContactHero() {
    return (
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
  
        {/* Hero Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Contact.src})` }}
          ></div>
        </div>
  
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-4">CONTACT US</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Get in touch with our team for inquiries, partnerships, or any information about our services.
            </p>
          </div>
        </div>
      </section>
    )
  }
  