"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Homeimg2, product2, product3, product4 } from '@/asserts/home';
import Link from 'next/link';
import { Productimg4 } from '@/asserts/Product';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <Slider {...sliderSettings} className="w-full h-full">
          <div className="relative h-screen">
            <img 
              src={Homeimg2.src}
              alt="Modern metal recycling facility" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4" data-aos="fade-up">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Utkal Corporation</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                  Leading the way in sustainable metal recycling and Trading industrial solutions
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative h-screen">
            <img 
              src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Copper materials" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4" data-aos="fade-up" data-aos-delay="200">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Quality Metals</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                  Premium copper, aluminum, and Iron products for industrial applications
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  View Products
                </button>
              </div>
            </div>
          </div>
          
          <div className="relative h-screen">
            <img 
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Global business" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4" data-aos="fade-up" data-aos-delay="400">
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Global Reach</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                  Serving clients across 17+ countries with excellence and reliability
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Slider>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">25+</div>
              <div className="text-gray-700">Years Experience</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">17+</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-700">Clients Worldwide</div>
            </div>
            <div className="p-6" data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100K+</div>
              <div className="text-gray-700">Tons Processed Yearly</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <div className="relative">
                <img 
                  src="https://media.istockphoto.com/id/471968132/photo/closeup-of-copper-cable-being-rolled-up.jpg?s=612x612&w=0&k=20&c=7snK-x-Cnyx6PgPQyMJF9JvrldTWk_MtPj7Npvpt_qE=" 
                  alt="About Utkal Corporation" 
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-lg" data-aos="zoom-in" data-aos-delay="600">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">About Utkal Corporation</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Utkal Corporation is one of India's leading non-ferrous metal Trading companies, with over two decades of expertise in delivering quality and sustainable solutions. We specialize in the recycling and processing of copper, aluminum, Iron, and other metals to serve various industries worldwide.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our state-of-the-art facilities and commitment to environmental responsibility make us the preferred partner for businesses looking for reliable metal solutions with a reduced carbon footprint.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Quality Certified</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Global Export</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Fast Delivery</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Eco-Friendly</span>
                </div>
              </div>
              
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive metal recycling and processing services with a focus on quality, sustainability, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://cdn.prod.website-files.com/653ed7060b01292cd4518d0e/67d86292c694db5ac8885078_RS_ImageBank_Recycling_12-p-2000.jpg" 
                  alt="Metal Recycling" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Metal Recycling</h3>
                <p className="text-gray-600 mb-4">
                  Environmentally responsible recycling of copper, aluminum, Iron and other non-ferrous metals with advanced processing techniques.
                </p>
                <a href="#" className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://www.mtcgroup.in/images/heavy-mealting-scrap.jpg" 
                  alt="Metal Processing" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Metal Trading</h3>
                <p className="text-gray-600 mb-4">
                  Advanced refining and processing to produce high-purity metal products meeting international quality standards.
                </p>
                <a href="#" className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl" data-aos="fade-up" data-aos-delay="500">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://img.freepik.com/free-photo/global-logistics-transportation-network_23-2152005448.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Global Distribution" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Global Distribution</h3>
                <p className="text-gray-600 mb-4">
                  Efficient logistics and supply chain management to deliver products to clients across 17+ countries worldwide.
                </p>
                <a href="#" className="text-amber-600 font-semibold flex items-center hover:text-amber-700">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of high-quality metal products that cater to various industrial applications and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg" data-aos="flip-left" data-aos-delay="100">
              <img 
                src={product2.src}
                alt="Copper Products" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Copper Products</h3>
                  <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    High-quality copper scrap, cathodes, and processed materials
                  </p>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg" data-aos="flip-left" data-aos-delay="300">
              <img 
                src={product3.src}
                alt="Aluminum Products" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Aluminum Products</h3>
                  <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Various grades of aluminum scrap and processed aluminum materials
                  </p>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                    Explore
                  </button>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg" data-aos="flip-left" data-aos-delay="500">
              <img 
                src={product4.src} 
                alt="Zinc Products" 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Iron Products</h3>
                  <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    High-purity Iron materials for industrial applications
                  </p>
                  <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform translate-y-8 group-hover:translate-y-0">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/products">
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
               View All Products
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
            alt="World map pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Global Presence</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Serving clients across the globe with excellence and reliability for over two decades
            </p>
          </div>
          
          <div className="flex justify-center mb-16" data-aos="zoom-in">
            <div className="relative w-full max-w-4xl h-96 bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://img.freepik.com/free-vector/minimal-world-map-isolated-white-background-with-shadow_1017-42608.jpg" 
                alt="World map" 
                className="w-full h-full object-cover opacity-60"
              />
              
              {/* Animated location markers */}
              <div className="absolute top-1/4 left-1/3 animate-pulse">
                <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
              </div>
  <div className="absolute top-[40%] left-[18%] animate-pulse">
    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
  </div>

  {/* South America */}
  <div className="absolute top-[65%] left-[28%] animate-pulse" style={{ animationDelay: "0.7s" }}>
    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
  </div>

  {/* Europe */}
  <div className="absolute top-[32%] left-[50%] animate-pulse" style={{ animationDelay: "1.4s" }}>
    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
  </div>

  {/* Asia (East) */}
  <div className="absolute top-[45%] left-[75%] animate-pulse" style={{ animationDelay: "2.1s" }}>
    <div className="w-6 h-6 bg-amber-500 rounded-full border-4 border-white"></div>
  </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" data-aos="fade-up">
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">Asia</div>
              <div className="text-gray-300">6 Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">Europe</div>
              <div className="text-gray-300">2 Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">Middle East</div>
              <div className="text-gray-300">4 Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">Africa</div>
              <div className="text-gray-300">3 Country</div>
            </div>
          </div>
        </div>
      </section>
            {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients across the globe who have experienced our exceptional service and quality products.
            </p>
          </div>
          
          <Slider {...testimonialSettings}>
            <div className="px-4">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full" data-aos="flip-left" data-aos-delay="100">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Utkal Corporation has been our trusted partner for over 5 years. Their consistent quality and reliable delivery have helped our manufacturing process tremendously."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">Rajesh Sharma</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full" data-aos="flip-left" data-aos-delay="300">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "The quality of copper products from Utkal Corporation exceeds international standards. Their commitment to sustainability aligns with our company values."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">Sarah Johnson</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full" data-aos="flip-left" data-aos-delay="500">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 text-2xl">★★★★☆</div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "We've been importing aluminum from Utkal Corporation for three years now. Their logistics support and documentation are impeccable, making international trade seamless."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">David Müller</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-4">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full" data-aos="flip-left" data-aos-delay="700">
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 text-2xl">★★★★★</div>
                </div>
                <p className="text-gray-600 italic mb-6">
                  "Their technical support team helped us optimize our recycling process, resulting in 15% higher efficiency. A true partnership approach to business."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Client" 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-800">Michael Chen</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Commitment to Sustainability</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Utkal Corporation, we believe that responsible metal recycling is essential for a sustainable future. Our processes are designed to minimize environmental impact while maximizing resource recovery.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Energy Efficiency</h4>
                    <p className="text-gray-600">Our facilities use 30% less energy than industry averages through innovative technology</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Water Recycling</h4>
                    <p className="text-gray-600">Closed-loop water systems reduce consumption by over 80% compared to traditional methods</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Emissions Reduction</h4>
                    <p className="text-gray-600">Advanced filtration systems capture 99.7% of particulate matter from our processes</p>
                  </div>
                </div>
              </div>
              
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Our Sustainability Report
              </button>
            </div>
            
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">98%</div>
                  <div className="text-green-800">Recycling Efficiency</div>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">45%</div>
                  <div className="text-green-800">Carbon Footprint Reduction</div>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">12K+</div>
                  <div className="text-green-800">Tons CO₂ Saved Yearly</div>
                </div>
                <div className="bg-green-100 p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold text-green-700 mb-2">100%</div>
                  <div className="text-green-800">Compliance with Regulations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Partner With Us?</h2>
            <p className="text-amber-100 text-xl mb-10">
              Join hundreds of satisfied clients who have experienced the Utkal Corporation difference in quality, service, and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Request a Quote
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or services? Our team is ready to assist you with all your metal recycling needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 9777098999</p>
                      <p className="text-gray-600">+91 9777063999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@utkalcorporation.com</p>
                      <p className="text-gray-600">sales@utkalcorporation.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Address</h4>
                      <p className="text-gray-600">Bhubaneswar, Odisha, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}