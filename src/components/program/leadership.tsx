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