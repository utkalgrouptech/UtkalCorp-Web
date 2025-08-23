export function Milestones() {
    const milestones = [
      {
        year: "1953",
        title: "Foundation",
        description: "Established as Utkal Group Rolling Mills, a partnership firm focused on metal trading.",
      },
      {
        year: "1970s",
        title: "Expansion",
        description: "Expanded operations to include metal recycling, setting the foundation for future growth.",
      },
      {
        year: "1993",
        title: "Restructuring",
        description: "Partnership firm reconstituted to strengthen business operations and expand market reach.",
      },
      {
        year: "2000s",
        title: "Modernization",
        description: "Invested in state-of-the-art technology and infrastructure to enhance recycling capabilities.",
      },
      {
        year: "2010s",
        title: "Global Network",
        description: "Established an extensive global network for sourcing recyclable materials.",
      },
      {
        year: "2022",
        title: "Incorporation",
        description: "Converted into a private limited company under the Companies Act, 2013.",
      },
      {
        year: "2024",
        title: "Market Leader",
        description: "Recognized as India's largest non-ferrous metal recycling business by revenue.",
      },
    ]
  
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
  
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
  
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white z-10"></div>
  
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
  
                {/* Empty space for the other side */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  