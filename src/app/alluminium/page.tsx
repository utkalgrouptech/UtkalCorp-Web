import Link from "next/link";
import { CircleItem } from "@/components/services/circle-item";
import { Allbanner, Alluminum, plant } from "@/asserts/Product";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Allbanner.src})` }}></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Aluminium Recycling </h2>
          <p className="text-lg md:text-xl mb-6">
            Leading provider of Aluminium recycling solutions with state-of-the-art technology and sustainable practices.
          </p>
          <Link
            href="/contact"
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
  <h2 className="text-3xl font-bold mb-6 text-gray-900 text-left">
    About Our Aluminium Trading
  </h2>
  <p className="mb-4 text-gray-700 text-justify leading-relaxed">
    Our state-of-the-art copper recycling plant is equipped with the latest technology to process various types of Aluminium scrap efficiently and sustainably.
  </p>
  <p className="text-gray-700 text-justify leading-relaxed">
We have established ourselves as a trusted partner for businesses. Our team of experts ensures high-quality and safe recycling standards.
  </p>
</div>

          <div className="md:w-1/2">
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-md">
              <span className="w-full h-full text-gray-500 text-lg"><img src={"https://alumintrading.com/wp-content/uploads/2024/09/non-feurous.png"} alt="" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      {/* <SectionWrapper id="purchase" title="Product We Serve" subtitle="Types of cable we sale">
        {aluminumPurchaseItems .map((item, i) => (
          <CircleItem key={i} {...item} imageUrl={item.imageUrl.src} />
        ))}
      </SectionWrapper> */}

      {/* Sales Section - Updated to Image & Content Layout */}
      <section id="sales" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Sales</h2>
            <p className="text-gray-600">Products we offer</p>
          </div>
          <div className="space-y-8">
            {aluminumSalesItems.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={item.imageUrl.src}
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
const aluminumPurchaseItems = [
  { title: "Aluminum Scrap", subtitle: "(Used Beverage Cans)", imageUrl: Alluminum },

];
const aluminumSalesItems = [
  { title: "Aluminum Scrap", subtitle: "(Aluminium Scrap is a highly sought-after recyclable material known for its lightweight, corrosion-resistant properties and excellent conductivity. Sourced from a wide range of products including beverage cans, automotive parts, window frames, and industrial components, aluminium scrap is sorted and processed into clean, reusable material. It plays a crucial role in sustainable manufacturing as it retains its properties even after repeated recycling. With a high recovery rate and low energy requirements for reprocessing, aluminium scrap offers significant environmental and economic benefits, making it an essential raw material for the construction, automotive, aerospace, and packaging industries.)", imageUrl: Alluminum },

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
