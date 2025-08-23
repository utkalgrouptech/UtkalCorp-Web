import Link from "next/link";
import { CircleItem } from "@/components/services/circle-item";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}></div>
        <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
          <div>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 tracking-widest">SERVICES</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto">
              Get in touch with our team for inquiries, partnerships, or any information about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Copper Recycling Intro Section */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Iron Recycling </h2>
          <p className="text-lg md:text-xl mb-6">
            Leading provider of Iron recycling solutions with state-of-the-art technology and sustainable practices.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition shadow-md"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-4">
        <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Our Iron Recycling </h2>
            <p className="mb-4 text-gray-700">
              Our state-of-the-art Iron recycling plant is equipped with the latest technology to process various
              types of Iron scrap efficiently and sustainably.
            </p>
            <p className="text-gray-700">
              We have established ourselves as a trusted partner for businesses. Our team of experts ensures high-quality and safe recycling standards.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-gray-500 text-lg">Plant Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <SectionWrapper id="purchase" title="Purchase" subtitle="Types of cable we process">
        {ironPurchaseItems .map((item, i) => (
          <CircleItem key={i} {...item} />
        ))}
      </SectionWrapper>

      {/* Sales Section - Updated to Image & Content Layout */}
      <section id="sales" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Sales</h2>
            <p className="text-gray-600">Products we offer</p>
          </div>
          <div className="space-y-8">
            {ironSalesItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full md:w-48 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recycling Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <div className="w-14 h-14 bg-yellow-500 text-white text-xl font-bold rounded-full flex items-center justify-center mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Reusable Circle-style Section Wrapper
function SectionWrapper({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">{children}</div>
      </div>
    </section>
  );
}

// Mock Data Arrays
const ironPurchaseItems = [
  { title: "Cast Iron Scrap", subtitle: "(Automotive & Machinery Parts)", imageUrl: "/placeholder.svg" },
  { title: "Wrought Iron Scrap", subtitle: "(Structural Iron)", imageUrl: "/placeholder.svg" },
  { title: "Heavy Melting Scrap (HMS)", subtitle: "(HMS 1 & HMS 2)", imageUrl: "/placeholder.svg" },
  { title: "Shredded Iron Scrap", subtitle: "(Processed & Cleaned)", imageUrl: "/placeholder.svg" },
  { title: "Sheet Iron Scrap", subtitle: "(Industrial Sheet Waste)", imageUrl: "/placeholder.svg" },
  { title: "Turnings & Borings", subtitle: "(Machining Waste)", imageUrl: "/placeholder.svg" },
  { title: "Engine Block Scrap", subtitle: "(Automobile Iron)", imageUrl: "/placeholder.svg", highlighted: true },
  { title: "Rail Scrap", subtitle: "(Old Railway Tracks)", imageUrl: "/placeholder.svg" },
];
const ironSalesItems = [
  { title: "Iron Ingots", subtitle: "(For Industrial Use)", imageUrl: "/placeholder.svg" },
  { title: "Iron Rods", subtitle: "(Construction Grade)", imageUrl: "/placeholder.svg" },
  { title: "Iron Bars", subtitle: "(Flat & Round Bars)", imageUrl: "/placeholder.svg" },
  { title: "Iron Sheets", subtitle: "(Hot & Cold Rolled)", imageUrl: "/placeholder.svg" },
  { title: "Iron Castings", subtitle: "(Automotive & Industrial)", imageUrl: "/placeholder.svg" },
  { title: "Iron Plates", subtitle: "(Cut to Size)", imageUrl: "/placeholder.svg" },
  { title: "Iron Nails", subtitle: "(Various Sizes)", imageUrl: "/placeholder.svg" },
  { title: "Iron Scrap", subtitle: "(Sorted & Graded)", imageUrl: "/placeholder.svg" },
];

const processSteps = [
  {
    title: "Collection",
    description:
      "We collect copper scrap from industrial waste, construction sites, and electronic waste sources.",
  },
  {
    title: "Sorting",
    description:
      "Collected materials are sorted by type, quality, and composition for optimal recycling.",
  },
  {
    title: "Processing",
    description:
      "Advanced machinery refines the scrap to remove impurities, preparing it for reuse.",
  },
];
