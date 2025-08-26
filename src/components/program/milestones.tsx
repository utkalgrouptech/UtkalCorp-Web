export default function WhyChooseUs() {
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