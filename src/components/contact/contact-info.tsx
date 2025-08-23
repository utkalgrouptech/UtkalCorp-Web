import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-600"
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
      </div>

      <h2 className="text-2xl font-bold text-center mb-2">Registered Office</h2>
      <h3 className="text-xl font-bold text-center text-yellow-600 mb-8">Utkal Corporation PVT LTD</h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Address</h4>
            <p className="text-gray-600">
            <p>Arya Surya Enclave, Plot No- K5/475,</p>
            <p>Khata No 95/937, Fourth Floor, Mouza-</p>
            <p>Subudhi Pur, Kalinga Vihar, Patrapada,</p>
            <p>Bhuabneswar, Dist- Khurda,</p>
            <p>Odisha, India-751019.</p>
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <Phone className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
            <p className="text-gray-600">+91 9777098999, +91 9777063999</p>
          </div>
        </div>

        <div className="flex items-start">
          <Mail className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Email</h4>
            <p className="text-gray-600">info@utkalcorporation.com</p>
            <p className="text-gray-600">santosh@utkalcorporation.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <Clock className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Working Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>

        <div className="flex items-start">
          <Globe className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-gray-800 mb-1">Website</h4>
            <p className="text-gray-600">www.UtkalCorporation.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
