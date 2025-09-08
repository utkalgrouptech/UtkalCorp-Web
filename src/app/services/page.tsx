import Link from "next/link";
import { CircleItem } from "@/components/services/circle-item";
import { Banner, plant, Productimg1, Productimg2, Productimg3, Productimg4 } from "@/asserts/Product";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Banner.src})` }}></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Copper Recycling Plant</h2>
          <p className="text-lg md:text-xl mb-6">
            Leading provider of copper recycling solutions with state-of-the-art technology and sustainable practices.
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
            <h2 className="text-3xl font-bold mb-4">About Our Copper Trading</h2>
            <p className="mb-4 text-gray-700">
              Our state-of-the-art copper recycling plant is equipped with the latest technology to process various types of copper scrap efficiently and sustainably.
            </p>
            <p className="text-gray-700">
              We have established ourselves as a trusted partner for businesses. Our team of experts ensures high-quality and safe recycling standards.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-md">
              <span className="w-full h-full text-gray-500 text-lg"><img src={"https://www.krugergmbhco.com/wp-content/uploads/2023/05/nonferroustile.jpg"} alt="" className="w-full h-full" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      {/* <SectionWrapper id="purchase" title="Product We Serve" subtitle="Types of cable we Sale">
        {purchaseItems.map((item, i) => (
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
            {salesItems.map((item, idx) => (
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
const salesItems = [
  { 
    title: "Copper Millberry​", 
    subtitle: "Copper Millberry Scrap is unalloyed, uncoated, and untinned copper wire and cable. It comes mainly from electrical wires that are clean and free from impurities. Millberry is one of the purest forms of copper scrap, often with a copper content of 99% or higher. Because of its high conductivity, it is widely used in electrical applications and recycling industries.", 
    imageUrl: Productimg4  
  },
  { 
    title: "Copper Birch Cliff", 
    subtitle: "Copper Birch Cliff Scrap consists of miscellaneous, unalloyed copper scrap materials. It usually contains around 96% copper content, with a minimum of 94% as determined by electrolytic assay. The scrap includes clean sheet copper, tubing, and various copper-based materials. It is an important raw material for smelting and refining industries.", 
    imageUrl: Productimg2 
  },
  { 
    title: "Copper Wire Scrap", 
    subtitle: "Copper Wire Scrap consists of clean, untinned, uncoated, and unalloyed copper wires and cables. The wires should not be smaller than No. 16 B & S gauge, and must be free from burnt or brittle materials. This type of scrap is often hydraulically briquetted for compact handling and transport. Its excellent conductivity makes it ideal for reuse in the electrical and electronics industries.", 
    imageUrl: Productimg1 
  },
  { 
    title: "Copper Punching Scrap", 
    subtitle: "Copper Punching Scrap is produced from the punching and cutting of copper sheets and copper plates. It is an electrolytic quality pure copper scrap, generally very clean and free from other metals. This type of scrap is commonly collected from manufacturing processes involving electrical parts, copper plates, and sheet metal works. Due to its high purity, it is a valuable raw material in copper recycling.", 
    imageUrl: Productimg3 
  },
];


// const salesItems = [
//   { title: "Copper Millberry Scrap", subtitle: "(Copper Milberry Scrap is one of the highest quality grades of copper scrap available in the market, known for its exceptional purity of 99.9% or higher. This uncoated, unalloyed copper wire is bright, clean, and free from impurities such as insulation, paint, or oxidation, making it ideal for recycling and industrial use. Due to its superior conductivity and purity, Copper Milberry Scrap is widely used in the electrical, electronics, and manufacturing industries. Its high resale value and eco-friendly recycling potential make it a preferred choice for companies seeking reliable and sustainable raw materials.)", imageUrl: Productimg4 },

// ];

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
