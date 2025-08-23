export function OfficeLocations() {
    const offices = [
      {
        title: "Corporate Headquarters",
        address: "The Lattice, 7th Floor, Block A, Koramangala Industrial Layout, Mumbai - 400072, India",
        phone: "+91 22 6123 4567",
        email: "info@jainmetalgroup.com",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Manufacturing Plant",
        address: "Plot No. 123, MIDC Industrial Area, Pune - 411057, India",
        phone: "+91 20 2613 4567",
        email: "plant@jainmetalgroup.com",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Regional Office - Delhi",
        address: "Tower B, 5th Floor, Cyber City, Gurugram - 122002, India",
        phone: "+91 124 4567 890",
        email: "delhi@jainmetalgroup.com",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Regional Office - Bangalore",
        address: "Prestige Tech Park, 3rd Floor, Marathahalli, Bangalore - 560037, India",
        phone: "+91 80 2345 6789",
        email: "bangalore@jainmetalgroup.com",
        image: "/placeholder.svg?height=300&width=400",
      },
    ]
  
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Our Locations</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          With multiple offices and manufacturing facilities across India, we are strategically positioned to serve our
          clients efficiently.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={office.image || "/placeholder.svg"} alt={office.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{office.title}</h3>
                <p className="text-gray-600 mb-4">{office.address}</p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-semibold">Phone:</span> {office.phone}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Email:</span> {office.email}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  