"use client"
import Link from "next/link";
import { CircleItem } from "@/components/services/circle-item";
import { Allbanner, Alluminum, plant } from "@/asserts/Product";

export default function Home() {
  const aluminumSalesItems = [
    {
      title: "Aluminum Scrap",
      subtitle: "High-quality recycled aluminum materials",
      imageUrl: { src: "https://images.unsplash.com/photo-1583753075960-4b63c1c5c4f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    },
    {
      title: "Aluminum Alloys",
      subtitle: "Premium grade aluminum alloy products",
      imageUrl: { src: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    },
    {
      title: "Processed Aluminum",
      subtitle: "Ready-to-use aluminum materials",
      imageUrl: { src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
    }
  ];

  const processSteps = [
    {
      title: "Collection & Sorting",
      description: "Efficient collection and meticulous sorting of aluminum scrap materials for optimal recycling."
    },
    {
      title: "Processing & Refining",
      description: "Advanced processing techniques to transform scrap into high-quality aluminum products."
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality testing to ensure all aluminum meets international standards and specifications."
    }
  ];

  const stats = [
    { number: "25K+", label: "Tons Processed Annually" },
    { number: "98%", label: "Recycling Efficiency" },
    { number: "50+", label: "Global Partners" },
    { number: "ISO", label: "Quality Certified" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Allbanner.src})` }}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gray-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6" data-aos="fade-down">
              <span className="inline-block bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-blue-400/30">
                ALUMINUM RECYCLING EXCELLENCE
              </span>
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight" data-aos="fade-up">
              ALUMINUM
            </h1>
            
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
              Advanced aluminum recycling solutions with cutting-edge technology and sustainable practices for global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/contact"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <span>Start Partnership</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="#process"
                className="group border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105"
              >
                <span>Our Process</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative inline-block mb-4">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-500">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-600 font-medium tracking-wide text-sm">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-12 h-1 bg-blue-500 mx-auto mt-3 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img 
                  src={"https://alumintrading.com/wp-content/uploads/2024/09/non-feurous.png"}
                  alt="Aluminum Recycling Plant"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl" data-aos="zoom-in" data-aos-delay="600">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute -top-4 -left-4 bg-yellow-500 text-white p-4 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="800">
                  <div className="text-sm font-semibold">ISO Certified</div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ABOUT OUR ALUMINUM TRADING
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Leading <span className="text-blue-600">Aluminum Recycling</span> & Global Trading
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our state-of-the-art aluminum recycling facility is equipped with cutting-edge technology to process various types of aluminum scrap efficiently and sustainably.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  We have established ourselves as a trusted global partner for businesses seeking high-quality aluminum products. Our expert team ensures superior quality and environmentally responsible recycling standards.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['Advanced Technology', 'Global Export', 'Sustainable Practices', 'Quality Certified'].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-blue-500 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5 flex items-center justify-center text-white font-bold">✓</div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center bg-gray-800 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
                >
                  <span>Learn More About Us</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sales Section */}
      <section id="sales" className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PRODUCTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Premium <span className="text-blue-600">Aluminum Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              High-quality aluminum materials for diverse industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aluminumSalesItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.subtitle}</p>
                  
                  <button className="group w-full bg-gray-100 hover:bg-blue-600 text-gray-800 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section id="process" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-blue-400/30">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Aluminum <span className="text-blue-300">Recycling Process</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Efficient, sustainable, and technologically advanced recycling methodology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 text-white text-xl font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 mt-4">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
                
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-blue-400 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Process Visualization */}
          <div className="mt-16 relative" data-aos="fade-up">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {[1, 2, 3].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step}
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block w-32 h-1 bg-blue-400 mt-8 relative">
                      <div className="absolute inset-0 bg-blue-300 animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              Join global businesses that trust our aluminum recycling expertise and sustainable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <span>Get Started Today</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="/products"
                className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105"
              >
                <span>View All Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Circle-style Section Wrapper
function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{children}</div>
      </div>
    </section>
  );
}

// Mock Data Arrays
const aluminumPurchaseItems = [
  { title: "Aluminum Scrap", subtitle: "(Used Beverage Cans)", imageUrl: Alluminum },

];
const aluminumSalesItems = [
  { title: "Aluminum Scrap", subtitle: "(Aluminium Scrap is a highly sought-after recyclable material known for its lightweight, corrosion-resistant properties and excellent conductivity. Sourced from a wide range of products including beverage cans, automotive parts, window frames, and industrial components, aluminium scrap is sorted and processed into clean, reusable material. It plays a crucial role in sustainable manufacturing as it retains its properties even after repeated recycling. With a high recovery rate and low energy requirements for reprocessing, aluminium scrap offers significant environmental and economic benefits, making it an essential raw material for the construction, automotive, aerospace, and packaging industries.)", imageUrl: Alluminum },

];

const processSteps = [
  {
    title: "Collection",
    description:
      "We collect copper scrap from industrial waste, construction sites, and electronic waste sources.",
  },
  {
    title: "Sorting",
    description:
      "Collected materials are sorted by type, quality, and composition for optimal recycling.",
  },
  {
    title: "Processing",
    description:
      "Advanced machinery refines the scrap to remove impurities, preparing it for reuse.",
  },
];
