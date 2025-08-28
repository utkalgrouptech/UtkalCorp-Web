import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with Utkal Corporation for Your Metal Needs
          </h2>
          <p className="text-white text-lg mb-8">
            Whether you need metal supplies for construction, manufacturing, or any other application, we provide reliable sourcing and timely distribution solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-yellow-600 font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
