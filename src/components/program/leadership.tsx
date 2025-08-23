export function Leadership() {
    const leaders = [
      {
        name: "Ankit Jain",
        position: "Managing Director",
        image: "/placeholder.svg?height=300&width=300",
        bio: "With over 25 years of experience in the metal recycling industry, Ankit has been instrumental in transforming Jain Metal Group into a market leader.",
      },
      {
        name: "Rajesh Kumar",
        position: "Chief Financial Officer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Rajesh brings 20 years of financial expertise, ensuring the company's fiscal health and driving strategic financial planning.",
      },
      {
        name: "Priya Sharma",
        position: "Chief Operating Officer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Priya oversees all operational aspects, implementing innovative processes that have significantly improved efficiency.",
      },
      {
        name: "Vikram Singh",
        position: "Chief Technology Officer",
        image: "/placeholder.svg?height=300&width=300",
        bio: "Vikram leads our technological initiatives, focusing on digital transformation and automation in recycling processes.",
      },
    ]
  
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Leadership Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our experienced leadership team brings decades of industry expertise, driving innovation and sustainable growth.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-64 overflow-hidden">
                <img src={leader.image || "/placeholder.svg"} alt={leader.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                <p className="text-yellow-600 font-medium mb-4">{leader.position}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  