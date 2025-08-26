"use client"
import { AboutHero } from "@/components/program/about-hero"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center bg-gray-100 p-2 rounded-md mb-12">
            <Link href="/" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">About Us</span>
          </div>
          <ProgramPage />
          <JourneyTimeline />
          <OurServices />
          <WhyChooseUs />
          <Certifications />
          <TeamSection />
          <CTA />
        </div>
      </div>
    </main>
  )
}

export function ProgramPage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
        
        <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
          <p className="text-lg leading-relaxed text-gray-700">
            Established in 2012, Utkal Corporation Limited has rapidly emerged as a trusted name in the metal trading and distribution industry. Our journey began with a vision to revolutionize metal supply chains in India, and in 2023, we expanded our expertise to become a comprehensive metal distribution solution provider.
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          With a decade of industry experience, we have built strong relationships with manufacturers, suppliers, and clients across the nation. Our expertise lies in sourcing, quality assurance, and efficient distribution of a wide range of metal products to various industries including construction, manufacturing, automotive, and infrastructure development.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Our growth story is a testament to our commitment to quality, reliability, and customer satisfaction. From our humble beginnings as a metal trading company, we have evolved into a dynamic distribution network that ensures timely delivery and competitive pricing for all our clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become India's most trusted and efficient metal distribution partner, setting new standards in supply chain excellence and customer service in the metal industry.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To provide high-quality metal products through an efficient distribution network, building lasting relationships with clients based on trust, reliability, and exceptional service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function JourneyTimeline() {
  return (
    <section className="py-16 bg-gray-50 rounded-xl mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Journey</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From our foundation to becoming a trusted name in metal distribution
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 relative">
            {/* 2012 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800">2012</h3>
                <p className="text-gray-600">Founded as a metal trading company</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Established with a focus on building supplier relationships and understanding market dynamics in the metal industry.</p>
                </div>
              </div>
            </div>

            {/* 2015 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-2 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Expanded our product portfolio and established a reliable client base across multiple industries.</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0 order-1 md:order-2"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                <h3 className="text-xl font-bold text-gray-800">2015</h3>
                <p className="text-gray-600">Expanded product portfolio and client base</p>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800">2020</h3>
                <p className="text-gray-600">Enhanced logistics and supply chain capabilities</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Invested in advanced logistics solutions to ensure timely delivery and efficient distribution across regions.</p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-2 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Launched comprehensive metal distribution services with enhanced quality control measures and expanded reach.</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0 order-1 md:order-2"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                <h3 className="text-xl font-bold text-gray-800">2023</h3>
                <p className="text-gray-600">Entered metal distribution sector with expanded services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function OurServices() {
  const services = [
    {
      title: "Metal Trading",
      description: "Comprehensive trading of ferrous and non-ferrous metals with competitive pricing and reliable sourcing.",
      icon: "📊"
    },
    {
      title: "Distribution Network",
      description: "Efficient distribution system ensuring timely delivery to clients across various industries.",
      icon: "🚚"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality checks and certifications to ensure all products meet industry standards.",
      icon: "✅"
    },
    {
      title: "Supply Chain Solutions",
      description: "End-to-end supply chain management for seamless metal procurement and delivery.",
      icon: "🔗"
    },
    {
      title: "Custom Solutions",
      description: "Tailored metal solutions based on specific client requirements and project needs.",
      icon: "⚙️"
    },
    {
      title: "Market Insights",
      description: "Providing clients with valuable market trends and pricing intelligence for informed decisions.",
      icon: "📈"
    }
  ]

  return (
    <section className="py-16 mb-16">
      <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Comprehensive metal trading and distribution solutions tailored to your needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transform transition-transform hover:-translate-y-2">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  const features = [
    {
      title: "Decade of Experience",
      description: "With over 10 years in the industry, we understand market dynamics and client needs.",
      icon: "⏳"
    },
    {
      title: "Quality Assurance",
      description: "All our products undergo rigorous quality checks to meet industry standards.",
      icon: "🔍"
    },
    {
      title: "Extensive Network",
      description: "Strong relationships with suppliers and clients across the metal industry.",
      icon: "🌐"
    },
    {
      title: "Timely Delivery",
      description: "Efficient logistics ensuring on-time delivery to keep your projects on schedule.",
      icon: "⏱️"
    },
    {
      title: "Competitive Pricing",
      description: "Best market rates without compromising on quality or service.",
      icon: "💰"
    },
    {
      title: "Customer Support",
      description: "Dedicated support team to address your queries and requirements promptly.",
      icon: "👥"
    }
  ]

  return (
    <section className="py-16 bg-gray-50 rounded-xl mb-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose Utkal Corporation?</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          We stand out in the metal distribution industry for several reasons
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start">
              <span className="text-3xl mr-4 text-yellow-500">{feature.icon}</span>
              <div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-500 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Our Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-sm">Clients Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm">Supplier Partnerships</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-sm">Tonnes Distributed</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Certifications() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: "🏆",
    },
    {
      name: "Trade License",
      description: "Authorized Metal Trading",
      icon: "📝",
    },
    {
      name: "MSME Registered",
      description: "Micro, Small & Medium Enterprises",
      icon: "🏢",
    },
    {
      name: "GST Registered",
      description: "Goods and Services Tax",
      icon: "📊",
    },
  ]

  return (
    <section className="py-16 mb-16">
      <h2 className="text-3xl font-bold text-center mb-4">Certifications & Accreditations</h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Our commitment to quality and compliance is validated by these certifications
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{cert.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{cert.name}</h3>
            <p className="text-gray-600">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function TeamSection() {
  const team = [
    {
      name: "Leadership Team",
      role: "Strategic Direction",
      description: "Experienced professionals guiding our company vision and growth strategy.",
      icon: "👑"
    },
    {
      name: "Sales Experts",
      role: "Client Relations",
      description: "Dedicated professionals building and maintaining client relationships.",
      icon: "🤝"
    },
    {
      name: "Logistics Team",
      role: "Supply Chain Management",
      description: "Efficient coordinators ensuring smooth operations and timely deliveries.",
      icon: "🚛"
    },
    {
      name: "Quality Assurance",
      role: "Product Standards",
      description: "Quality controllers maintaining our high standards for all products.",
      icon: "✅"
    }
  ]

  return (
    <section className="py-16 bg-gray-50 rounded-xl mb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Meet the dedicated professionals behind Utkal Corporation's success
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">{member.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
              <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            Our team of experienced professionals brings together expertise in metal trading, logistics, quality control, and customer service to deliver exceptional value to our clients.
          </p>
        </div>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Utkal Corporation for Your Metal Needs
          </h2>
          <p className="text-white text-lg mb-8">
            Whether you need metal supplies for construction, manufacturing, or any other application, we provide reliable sourcing and timely distribution solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}