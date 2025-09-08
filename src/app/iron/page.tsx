import Link from "next/link";
import { CircleItem } from "@/components/services/circle-item";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[550px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://globaltrading.com/images/parallax/molten-iron.jpg')" }}></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Iron Trading </h2>
          <p className="text-lg md:text-xl mb-6">
            Leading provider of Iron Trading solutions with state-of-the-art technology and sustainable practices.
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
            <h2 className="text-3xl font-bold mb-4">About Our Iron Trading </h2>
            <p className="mb-4 text-gray-700">
              Our state-of-the-art Iron recycling plant is equipped with the latest technology to process various types of Iron scrap efficiently and sustainably.
            </p>
            <p className="text-gray-700">
              We have established ourselves as a trusted partner for businesses. Our team of experts ensures high-quality and safe recycling standards.
            </p>
          </div>
          <div className="md:w-1/2">
          <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-md">
           <span className="w-full h-full text-gray-500 text-lg"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPcSX3C2OV0U8cTswrLRybjPRbDmpzWllmdw&s"} alt="" className="w-full h-full" /></span>

            </div>
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      {/* <SectionWrapper id="purchase" title="Metal We Provide" subtitle="Types of cable we process">
        {ironPurchaseItems .map((item, i) => (
          <CircleItem key={i} {...item} />
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
// const ironPurchaseItems = [
//   { title: "Cast Iron Scrap", subtitle: "(Automotive & Machinery Parts)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSP_bsIFsin-W0Wd6dn7S_aNjCNY250T_9g&s" },
//   { title: "Wrought Iron Scrap", subtitle: "(Structural Iron)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0xj7AnvEn05OOSWXSmPY8kSXKwtmLgaUzg&s" },
//   { title: "Heavy Melting Scrap (HMS)", subtitle: "(HMS 1 & HMS 2)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZbKF_ZtYAmsMLyFWNY9McUhQaPOPWbgxTA&s" },
//   { title: "Shredded Iron Scrap", subtitle: "(Processed & Cleaned)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDu0W0Bj1Cm9YsuV5zFfS6Sv-o7IVCfj7hQ&s" },
//   { title: "Sheet Iron Scrap", subtitle: "(Industrial Sheet Waste)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5Y_pWNch8Yg8DHktpTkV0V75oxmw2DQ5tA&s" },
//   { title: "Turnings & Borings", subtitle: "(Machining Waste)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUoSG5TDqealsnPR1ShgeKlsQBrRM5Xfwqo6k27uq4htIIQ4Ig38RhQL7WjVXQhCt-p0&usqp=CAU" },
//   { title: "Engine Block Scrap", subtitle: "(Automobile Iron)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCmJGiCIiSdVZROezeXlKZT9N1BYfld6n3w&s", highlighted: true },
//   { title: "Rail Scrap", subtitle: "(Old Railway Tracks)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCaOMgdkvcTAhGaqWzX07gPAC_aRDM0PfclEOSGo4WJqy2rsMZHwBDIwvhz4ZE1XQYQE&usqp=CAU" },
// ];
const ironSalesItems = [
  { title: "Iron Plates", subtitle: "Iron Plates are durable flat sheets of iron, available in cut-to-size forms for various applications. They are widely used in construction, fabrication, heavy machinery, and structural works. These plates are known for their strength and ability to withstand high pressure and load. With proper finishing, they are also used in manufacturing of industrial equipment and tools.", imageUrl: "data:image/jpeg;base64,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" },
  { title: "Iron Nails", subtitle: "Iron Nails are manufactured in different sizes and are essential for carpentry, construction, and furniture making. They provide strong fastening solutions for wooden, metallic, and concrete structures. These nails are designed to resist bending and ensure durability in long-term use. They are available in bulk quantities, suitable for both industrial and domestic purposes.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGv5stmY5LyWVVdjwBW7Qh7AaAsOZVmtTlw&s" },
  { title: "Iron Scrap", subtitle: "Iron Scrap consists of recycled and reusable iron materials that are sorted and graded for quality. It is a valuable raw material for steel plants and foundries, reducing the need for mining natural resources. The scrap is available in bulk and processed for efficient melting and reuse. It plays a major role in sustainable manufacturing and the circular economy.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPHNEI5nswev3dlmFl__kYNEehTjXDufa4Q&s" },
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
