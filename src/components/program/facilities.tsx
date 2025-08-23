export function Facilities() {
    const facilities = [
      {
        name: "Recycling Plant - Mumbai",
        image: "/placeholder.svg?height=400&width=600",
        capacity: "50,000 MT/year",
        description:
          "Our flagship recycling facility equipped with state-of-the-art technology for processing various non-ferrous metals.",
      },
      {
        name: "Manufacturing Unit - Gujarat",
        image: "/placeholder.svg?height=400&width=600",
        capacity: "30,000 MT/year",
        description:
          "Advanced manufacturing unit specializing in the production of high-quality metal products for various industries.",
      },
      {
        name: "Processing Center - Delhi",
        image: "/placeholder.svg?height=400&width=600",
        capacity: "25,000 MT/year",
        description: "Modern processing center focused on sorting, grading, and preparing recyclable materials.",
      },
    ]
  
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Facilities</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our state-of-the-art facilities across India enable us to process and recycle metals efficiently while
          maintaining the highest quality standards.
        </p>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                  Capacity: {facility.capacity}
                </div>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  