"use client"
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Homeimg2, product2, product3, product4 } from '@/asserts/home';
import Link from 'next/link';

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const stats = [
    { number: '25+', label: 'Years Excellence', suffix: '' },
    { number: '17+', label: 'Global Countries', suffix: '' },
    { number: '500+', label: 'Clients Worldwide', suffix: '' },
    { number: '100K', label: 'Annual Processing', suffix: 'Tons' }
  ];

  const services = [
    {
      icon: '♻️',
      title: 'Metal Recycling',
      description: 'Sustainable recycling solutions for copper, aluminum, and ferrous metals with advanced processing technology.',
      image: 'https://cdn.prod.website-files.com/653ed7060b01292cd4518d0e/67d86292c694db5ac8885078_RS_ImageBank_Recycling_12-p-2000.jpg'
    },
    {
      icon: '🏭',
      title: 'Metal Processing',
      description: 'State-of-the-art refining and processing to deliver high-purity metal products meeting international standards.',
      image: 'https://www.mtcgroup.in/images/heavy-mealting-scrap.jpg'
    },
    {
      icon: '🌍',
      title: 'Global Trading',
      description: 'Comprehensive international trading network serving clients across 17+ countries with reliable supply chains.',
      image: 'https://img.freepik.com/free-photo/global-logistics-transportation-network_23-2152005448.jpg?semt=ais_hybrid&w=740&q=80'
    }
  ];

  const products = [
    { name: 'Copper Products', image: product2.src, category: 'Industrial Grade' },
    { name: 'Aluminum Products', image: product3.src, category: 'Various Alloys' },
    { name: 'Iron Products', image: product4.src, category: 'High Purity' }
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        >
          <source src="https://cdn.pixabay.com/video/2023/03/23/160456-806200017_large.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            <div data-aos="fade-down" data-aos-delay="200">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 tracking-tight">
                UTKAL
                <span className="block text-4xl md:text-5xl lg:text-6xl font-normal mt-2 text-amber-400">CORPORATION</span>
              </h1>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="400">
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light tracking-wide">
                Global Leaders in Sustainable Metal Solutions & Industrial Trading
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center">
                <span>Explore Our Capabilities</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              
              <button className="group border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105">
                <span>View Our Products</span>
              </button>
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

      {/* Modern Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50"></div>
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
                  <div className="text-5xl md:text-6xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-500">
                    {stat.number}
                  </div>
                  {stat.suffix && (
                    <span className="text-2xl text-amber-600 font-semibold">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                  {stat.label}
                </div>
                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-500 mx-auto mt-4 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Modern Design */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Advanced Metal Processing"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-8 rounded-2xl shadow-xl" data-aos="zoom-in" data-aos-delay="600">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ABOUT OUR LEGACY
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8 leading-tight">
                Pioneering Sustainable<br />
                <span className="font-semibold text-amber-600">Metal Solutions</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Utkal Corporation stands at the forefront of India's non-ferrous metals industry, 
                delivering exceptional quality and sustainable trading solutions for over two decades. 
                Our commitment to innovation and environmental responsibility drives our global success.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {['Quality Certified', 'Global Export', 'Advanced Logistics', 'Eco-Friendly'].map((item, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="bg-amber-500 p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-6 h-6 flex items-center justify-center text-white font-bold">✓</div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <button className="group bg-gray-800 hover:bg-amber-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-500 transform hover:scale-105 flex items-center">
                <span>Discover Our Story</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Comprehensive <span className="font-semibold text-amber-600">Metal Solutions</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-amber-500 text-white p-4 rounded-xl text-2xl">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  
                  <button className="group flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300">
                    <span>Learn More</span>
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

      {/* Products Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PRODUCTS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Premium <span className="font-semibold text-amber-400">Metal Products</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-amber-400/50 transition-all duration-500"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/products">
              <button className="group bg-transparent border-2 border-white hover:bg-white text-white hover:text-gray-900 font-semibold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 flex items-center mx-auto">
                <span>Explore All Products</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              GLOBAL REACH
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Worldwide <span className="font-semibold text-amber-600">Presence</span>
            </h2>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl overflow-hidden shadow-2xl" data-aos="zoom-in">
            <img 
              src="https://img.freepik.com/free-vector/world-map-blue-background_1017-3115.jpg?w=2000&t=st=1701234567~exp=1701235167~hmac=abc123"
              alt="Global Presence"
              className="w-full h-full object-cover opacity-40"
            />
            
            {/* Animated Markers */}
            {[
              { top: '30%', left: '45%', region: 'Europe' },
              { top: '40%', left: '75%', region: 'Asia' },
              { top: '60%', left: '25%', region: 'South America' },
              { top: '35%', left: '55%', region: 'Middle East' }
            ].map((marker, index) => (
              <div
                key={index}
                className={`absolute w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg animate-pulse`}
                style={{ top: marker.top, left: marker.left, animationDelay: `${index * 0.5}s` }}
              ></div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { region: 'Asia', countries: '6 Countries', color: 'text-blue-600' },
              { region: 'Europe', countries: '4 Countries', color: 'text-green-600' },
              { region: 'Middle East', countries: '4 Countries', color: 'text-amber-600' },
              { region: 'Africa', countries: '3 Countries', color: 'text-purple-600' }
            ].map((item, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.region}</div>
                <div className="text-gray-600 font-semibold">{item.countries}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Metal Supply Chain?
            </h2>
            <p className="text-amber-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join global industry leaders who trust Utkal Corporation for premium metal solutions and sustainable partnerships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105 shadow-2xl flex items-center">
                <span>Request Consultation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              
              <button className="group border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 rounded-full transition-all duration-500 transform hover:scale-105">
                <span>Contact Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}