export default function AboutContent() {
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