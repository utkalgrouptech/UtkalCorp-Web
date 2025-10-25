"use client"
import Link from "next/link";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const stats = [
    { number: "98%", label: "Purity Rate" },
    { number: "50K+", label: "Tons Traded" },
    { number: "40+", label: "Global Partners" },
    { number: "ISO", label: "Certified Quality" }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://globaltrading.com/images/parallax/molten-iron.jpg')" }}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-orange-400/20 rounded-full blur-lg animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6" data-aos="fade-down">
              <span className="inline-block bg-gray-600/20 text-gray-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-gray-400/30">
                IRON TRADING EXCELLENCE
              </span>
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight" data-aos="fade-up">
              IRON
            </h1>
            
            <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="200">
              Premium iron trading solutions with advanced processing technology and sustainable practices for global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="400">
              <Link
                href="/contact"
                className="group bg-gray-700 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <span>Start Partnership</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="#process"
                className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105"
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-orange-50/30"></div>
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
                  <div className="text-4xl md:text-5xl font-bold text-gray-700 group-hover:text-gray-800 transition-colors duration-500">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-600 font-medium tracking-wide text-sm">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-12 h-1 bg-gray-600 mx-auto mt-3 transition-all duration-500"></div>
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
                  src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcSX3C2OV0U8cTswrLRybjPRbDmpzWllmdw&s"}
                  alt="Iron Trading Operations"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gray-700 text-white p-6 rounded-2xl shadow-xl" data-aos="zoom-in" data-aos-delay="600">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm font-semibold">Years Experience</div>
                </div>
                
                {/* Floating Element */}
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg" data-aos="fade-right" data-aos-delay="800">
                  <div className="text-sm font-semibold">ISO Certified</div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ABOUT OUR IRON TRADING
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                Leading <span className="text-gray-700">Iron Trading</span> & Global Distribution
              </h2>
              
              <div className="space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our state-of-the-art iron processing facilities are equipped with cutting-edge technology to handle various types of iron products efficiently and sustainably.
                </p>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  We have established ourselves as a trusted global partner for businesses seeking high-quality iron materials. Our expert team ensures superior quality and reliable supply chain management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {['Advanced Processing', 'Global Network', 'Quality Assurance', 'Sustainable Sourcing'].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-gray-600 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-5 h-5 flex items-center justify-center text-white font-bold">✓</div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-500 transform hover:scale-105"
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
              Premium <span className="text-gray-700">Iron Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              High-quality iron materials for construction, manufacturing, and industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ironSalesItems.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.subtitle}</p>
                  
                  <button className="group w-full bg-gray-100 hover:bg-gray-700 text-gray-800 hover:text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
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
      <section id="process" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-gray-600/20 text-gray-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-gray-400/30">
              OUR PROCESS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Iron <span className="text-gray-300">Trading Process</span>
            </h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Efficient, reliable, and quality-focused trading methodology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-gray-400/50 transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-600 text-white text-xl font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {idx + 1}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 mt-4">{step.title}</h3>
                <p className="text-gray-200 leading-relaxed">{step.description}</p>
                
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-gray-400 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Process Visualization */}
          <div className="mt-16 relative" data-aos="fade-up">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              {[1, 2, 3].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step}
                  </div>
                  {idx < 2 && (
                    <div className="hidden md:block w-32 h-1 bg-gray-400 mt-8 relative">
                      <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
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
              Ready to Source Quality Iron?
            </h2>
            <p className="text-gray-600 text-xl mb-8 leading-relaxed">
              Partner with trusted global iron suppliers for reliable materials and sustainable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group bg-gray-700 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
              >
                <span>Get Quote Today</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              
              <Link
                href="/products"
                className="group border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-500 transform hover:scale-105"
              >
                <span>Browse Products</span>
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

const ironSalesItems = [
  { title: "Iron Plates", subtitle: "Iron Plates are durable flat sheets of iron, available in cut-to-size forms for various applications. They are widely used in construction, fabrication, heavy machinery, and structural works. These plates are known for their strength and ability to withstand high pressure and load. With proper finishing, they are also used in manufacturing of industrial equipment and tools.", imageUrl: "data:image/jpeg;base64,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" },
  { title: "Iron Nails", subtitle: "Iron Nails are manufactured in different sizes and are essential for carpentry, construction, and furniture making. They provide strong fastening solutions for wooden, metallic, and concrete structures. These nails are designed to resist bending and ensure durability in long-term use. They are available in bulk quantities, suitable for both industrial and domestic purposes.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGv5stmY5LyWVVdjwBW7Qh7AaAsOZVmtTlw&s" },
  { title: "Iron Scrap", subtitle: "Iron Scrap consists of recycled and reusable iron materials that are sorted and graded for quality. It is a valuable raw material for steel plants and foundries, reducing the need for mining natural resources. The scrap is available in bulk and processed for efficient melting and reuse. It plays a major role in sustainable manufacturing and the circular economy.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPHNEI5nswev3dlmFl__kYNEehTjXDufa4Q&s" },
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
