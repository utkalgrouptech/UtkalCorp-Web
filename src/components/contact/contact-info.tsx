import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-400 mix-blend-overlay"></div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full translate-y-12 -translate-x-12"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full mb-4">
            <span className="text-amber-400 text-sm font-semibold tracking-wider">GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3">Corporate Headquarters</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Address Section */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-500">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-3 flex items-center">
                  Office Locations
                  <span className="ml-2 text-amber-400 text-sm bg-amber-400/10 px-2 py-1 rounded-full">2 Offices</span>
                </h4>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-amber-400 pl-4">
                    <h5 className="text-amber-300 font-semibold mb-2 text-sm">Registered Office</h5>
                    <div className="text-gray-300 space-y-1 text-sm leading-relaxed">
                      <p>Arya Surya Enclave, Plot No- K5/475,</p>
                      <p>Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur,</p>
                      <p>Kalinga Vihar, Patrapada, Bhubaneswar,</p>
                      <p>Dist- Khurda, Odisha, India-751019</p>
                    </div>
                  </div>
                  
                  <div className="border-l-2 border-blue-400 pl-4">
                    <h5 className="text-blue-300 font-semibold mb-2 text-sm">Corporate Office</h5>
                    <div className="text-gray-300 space-y-1 text-sm leading-relaxed">
                      <p>214, Second Floor, Sector A, Pocket C,</p>
                      <p>Vasant Kunj, New Delhi 110070</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-green-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-500">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-3">Phone Numbers</h4>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-mono mr-3">Primary</span>
                    +91 9777098999
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-mono mr-3">Secondary</span>
                    +91 9777063999
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-500">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-3">Email Addresses</h4>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center group/email cursor-pointer">
                    <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-mono mr-3">General</span>
                    info@utkalcorporation.com
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </p>
                  <p className="text-gray-300 flex items-center group/email cursor-pointer">
                    <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-mono mr-3">Management</span>
                    santosh@utkalcorporation.com
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover/email:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-500">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-3">Business Hours</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-amber-400 font-semibold text-sm mb-1">Weekdays</div>
                    <div className="text-gray-300 text-sm">Monday - Friday</div>
                    <div className="text-gray-300 text-sm font-mono">9:00 AM - 6:00 PM</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-blue-400 font-semibold text-sm mb-1">Saturday</div>
                    <div className="text-gray-300 text-sm">Weekend Service</div>
                    <div className="text-gray-300 text-sm font-mono">9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="mt-3 text-red-400 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  Sunday: Closed
                </div>
              </div>
            </div>
          </div>

          {/* Website */}
          <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg mr-4 group-hover:scale-110 transition-transform duration-500">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-lg mb-3">Digital Presence</h4>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl p-4">
                  <p className="text-cyan-300 font-mono text-lg text-center cursor-pointer group/website hover:text-cyan-200 transition-colors duration-300">
                    www.UtkalCorporation.com
                    <svg className="w-4 h-4 ml-2 inline-block group-hover/website:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Ready to discuss your metal trading requirements? 
            <span className="text-amber-400 font-semibold ml-2">Contact us today!</span>
          </p>
        </div>
      </div>
    </div>
  )
}