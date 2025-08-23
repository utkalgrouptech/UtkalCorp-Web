export function Certifications() {
    const certifications = [
      {
        name: "ISO 9001:2015",
        description: "Quality Management System",
        icon: "🏆",
      },
      {
        name: "ISO 14001:2015",
        description: "Environmental Management System",
        icon: "🌿",
      },
      {
        name: "ISO 45001:2018",
        description: "Occupational Health and Safety Management",
        icon: "🛡️",
      },
      {
        name: "R2 (Responsible Recycling)",
        description: "Responsible Electronics Recycling",
        icon: "♻️",
      },
    ]
  
    return (
      <section className="py-16 bg-gray-50 rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-4">Certifications & Accreditations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our commitment to quality, safety, and environmental responsibility is validated by these prestigious
          certifications.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-4">{cert.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  