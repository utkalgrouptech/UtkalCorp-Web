export function JourneyTimeline() {
  return (
    <section className="py-16 bg-gray-50 rounded-xl mb-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Journey</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          From our foundation to becoming a trusted name in metal distribution
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 relative">
            {/* 2012 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800">2012</h3>
                <p className="text-gray-600">Founded as a metal trading company</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Established with a focus on building supplier relationships and understanding market dynamics in the metal industry.</p>
                </div>
              </div>
            </div>

            {/* 2015 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-2 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Expanded our product portfolio and established a reliable client base across multiple industries.</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0 order-1 md:order-2"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                <h3 className="text-xl font-bold text-gray-800">2015</h3>
                <p className="text-gray-600">Expanded product portfolio and client base</p>
              </div>
            </div>

            {/* 2020 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-gray-800">2020</h3>
                <p className="text-gray-600">Enhanced logistics and supply chain capabilities</p>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Invested in advanced logistics solutions to ensure timely delivery and efficient distribution across regions.</p>
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0 order-2 md:order-1">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p>Launched comprehensive metal distribution services with enhanced quality control measures and expanded reach.</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full bg-yellow-500 border-4 border-white shadow-md z-10 mx-auto md:mx-0 order-1 md:order-2"></div>
              <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0 order-3">
                <h3 className="text-xl font-bold text-gray-800">2023</h3>
                <p className="text-gray-600">Entered metal distribution sector with expanded services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}