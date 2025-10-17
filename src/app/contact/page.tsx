import Link from "next/link"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactInfo } from "@/components/contact/contact-info"
import { ContactForm } from "@/components/contact/contact-form" 
import { ContactMap } from "@/components/contact/contact-map"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      <ContactHero />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center bg-gray-100 p-2 rounded-md mb-12">
            <Link href="/" className="text-yellow-600 hover:text-yellow-700 transition-colors">
              Home
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mx-2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-700 font-medium">Contact Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 main-container">
            <ContactInfo />
            <ContactForm />
          </div>
          <ContactMap />
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  )
}
