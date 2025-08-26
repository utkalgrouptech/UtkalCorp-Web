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