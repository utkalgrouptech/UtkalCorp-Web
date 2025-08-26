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