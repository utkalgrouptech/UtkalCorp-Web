import { Phone, Mail, MapPin, Clock, Globe, Building, Users, Target } from "lucide-react"

export function ContactInfo() {
  const contactCards = [
    {
      icon: Building,
      title: "Corporate Offices",
      subtitle: "Our Headquarters & Locations",
      gradient: "from-amber-500 to-amber-600",
      borderColor: "hover:border-amber-400/50",
      badge: "2 Locations",
      content: (
        <div className="space-y-4">
          <div className="border-l-2 border-amber-400 pl-3">
            <h5 className="text-amber-300 font-semibold mb-2 text-sm">Registered Office</h5>
            <div className="text-gray-300 space-y-1 text-sm leading-relaxed">
              <p>Arya Surya Enclave, Plot No- K5/475,</p>
              <p>Khata No 95/937, Fourth Floor,</p>
              <p>Kalinga Vihar, Patrapada,</p>
              <p>Bhubaneswar, Odisha 751019</p>
            </div>
          </div>
          <div className="border-l-2 border-blue-400 pl-3">
            <h5 className="text-blue-300 font-semibold mb-2 text-sm">Corporate Office</h5>
            <div className="text-gray-300 space-y-1 text-sm leading-relaxed">
              <p>214, Second Floor, Sector A,</p>
              <p>Pocket C, Vasant Kunj,</p>
              <p>New Delhi 110070</p>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Phone,
      title: "Phone Contacts",
      subtitle: "Direct Communication Lines",
      gradient: "from-green-500 to-green-600",
      borderColor: "hover:border-green-400/50",
      badge: "24/7 Support",
      content: (
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <div>
              <div className="text-green-400 text-sm font-semibold">Primary</div>
              <div className="text-white font-mono text-lg">+91 9777098999</div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <div>
              <div className="text-green-400 text-sm font-semibold">Secondary</div>
              <div className="text-white font-mono text-lg">+91 9777063999</div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Email Addresses",
      subtitle: "Digital Communication",
      gradient: "from-purple-500 to-purple-600",
      borderColor: "hover:border-purple-400/50",
      badge: "Quick Response",
      content: (
        <div className="space-y-3">
          <div className="group/email p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors duration-300 cursor-pointer">
            <div className="text-purple-400 text-sm font-semibold mb-1">General Inquiries</div>
            <div className="text-white text-sm font-mono group-hover/email:text-purple-300 transition-colors duration-300">
              info@utkalcorporation.com
            </div>
          </div>
          <div className="group/email p-3 bg-white/5 rounded-lg border border-white/10 hover:border-purple-400/30 transition-colors duration-300 cursor-pointer">
            <div className="text-purple-400 text-sm font-semibold mb-1">Management</div>
            <div className="text-white text-sm font-mono group-hover/email:text-purple-300 transition-colors duration-300">
              santosh@utkalcorporation.com
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Clock,
      title: "Business Hours",
      subtitle: "When We're Available",
      gradient: "from-blue-500 to-blue-600",
      borderColor: "hover:border-blue-400/50",
      badge: "Flexible Timing",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div>
                <div className="text-blue-400 text-sm font-semibold">Mon - Fri</div>
                <div className="text-gray-300 text-sm">Weekdays</div>
              </div>
              <div className="text-white font-mono text-sm">9AM - 6PM</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
              <div>
                <div className="text-amber-400 text-sm font-semibold">Saturday</div>
                <div className="text-gray-300 text-sm">Weekend</div>
              </div>
              <div className="text-white font-mono text-sm">9AM - 6PM</div>
            </div>
            <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-400/20">
              <div>
                <div className="text-red-400 text-sm font-semibold">Sunday</div>
                <div className="text-gray-300 text-sm">Holiday</div>
              </div>
              <div className="text-red-400 font-mono text-sm">Closed</div>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Globe,
      title: "Online Presence",
      subtitle: "Digital Platforms",
      gradient: "from-cyan-500 to-cyan-600",
      borderColor: "hover:border-cyan-400/50",
      badge: "Always Online",
      content: (
        <div className="space-y-4">
          <div className="group/website p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl hover:border-cyan-400/40 transition-all duration-300 cursor-pointer">
            <div className="text-cyan-300 font-mono text-lg text-center group-hover/website:text-cyan-200 transition-colors duration-300">
              www.UtkalCorporation.com
            </div>
            <div className="text-cyan-400/80 text-sm text-center mt-2">Visit our website</div>
          </div>
          <div className="flex justify-center space-x-4">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors duration-300">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Users,
      title: "Quick Connect",
      subtitle: "Instant Support",
      gradient: "from-orange-500 to-orange-600",
      borderColor: "hover:border-orange-400/50",
      badge: "Priority Support",
      content: (
        <div className="space-y-4">
          <div className="text-center">
            <div className="text-orange-300 text-sm mb-3">Need immediate assistance?</div>
            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request Call Back
            </button>
          </div>
          <div className="text-center text-gray-400 text-sm">
            We'll contact you within 30 minutes during business hours
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl shadow-lg mb-4">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact <span className="text-amber-400">Utkal Corporation</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Get in touch with our expert team for all your metal trading requirements. 
          We're here to provide the best solutions for your business.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-blue-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Contact Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Card Header */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{card.title}</h3>
                      <p className="text-gray-400 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                  <span className={`bg-gradient-to-br ${card.gradient} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {card.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="mt-4">
                  {card.content}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 ${card.borderColor} opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-400/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Start Your Metal Trading Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact us today for competitive pricing, quality assurance, and reliable global supply chain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Instant Quote
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}