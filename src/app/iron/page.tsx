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
            <h2 className="text-3xl font-bold mb-4">About Our Iron Trading </h2>
            <p className="mb-4 text-gray-700">
              Our state-of-the-art Iron recycling plant is equipped with the latest technology to process various
              types of Iron scrap efficiently and sustainably.
            </p>
            <p className="text-gray-700">
              We have established ourselves as a trusted partner for businesses. Our team of experts ensures high-quality and safe recycling standards.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center shadow-md" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlDTiqlECi0cyJ69gIFsOREUDU_Rxnttq7Q&s')" }}>
            
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
  { title: "Cast Iron Scrap", subtitle: "(Automotive & Machinery Parts)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSP_bsIFsin-W0Wd6dn7S_aNjCNY250T_9g&s" },
  { title: "Wrought Iron Scrap", subtitle: "(Structural Iron)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ0xj7AnvEn05OOSWXSmPY8kSXKwtmLgaUzg&s" },
  { title: "Heavy Melting Scrap (HMS)", subtitle: "(HMS 1 & HMS 2)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZbKF_ZtYAmsMLyFWNY9McUhQaPOPWbgxTA&s" },
  { title: "Shredded Iron Scrap", subtitle: "(Processed & Cleaned)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDu0W0Bj1Cm9YsuV5zFfS6Sv-o7IVCfj7hQ&s" },
  { title: "Sheet Iron Scrap", subtitle: "(Industrial Sheet Waste)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx5Y_pWNch8Yg8DHktpTkV0V75oxmw2DQ5tA&s" },
  { title: "Turnings & Borings", subtitle: "(Machining Waste)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxUoSG5TDqealsnPR1ShgeKlsQBrRM5Xfwqo6k27uq4htIIQ4Ig38RhQL7WjVXQhCt-p0&usqp=CAU" },
  { title: "Engine Block Scrap", subtitle: "(Automobile Iron)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjCmJGiCIiSdVZROezeXlKZT9N1BYfld6n3w&s", highlighted: true },
  { title: "Rail Scrap", subtitle: "(Old Railway Tracks)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCaOMgdkvcTAhGaqWzX07gPAC_aRDM0PfclEOSGo4WJqy2rsMZHwBDIwvhz4ZE1XQYQE&usqp=CAU" },
];
const ironSalesItems = [
  { title: "Iron Ingots", subtitle: "(For Industrial Use)", imageUrl: "data:image/jpeg;base64,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" },
  { title: "Iron Rods", subtitle: "(Construction Grade)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AFQnrKvuM9zeqEc81HWkybM7t9qToCY9BQ&s" },
  { title: "Iron Bars", subtitle: "(Flat & Round Bars)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsoZimMPqL3yuoU_gZtmbS31cj329urHF0Q&s" },
  { title: "Iron Sheets", subtitle: "(Hot & Cold Rolled)", imageUrl: "data:image/jpeg;base64,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Gudh3RNwgeQ/ddl2JodTSRi2ZGI+ZzUF+iIiiIiAiIgIiIC8LV6iDwBV+l9CwVLcMzA4KxRBD0Zo2OBmCJuEDko2mdDiYEg4X2IDrA5HeD0VqiDkNA9jBFLrpn6x47uWQHQKy7R9moqpli0Bw7rhl8FeoiPmelKGrcW00UBjY3ZDr3aBxd1KvKXsHA2Itu4SOFjIHEEk9RvXX2XqK+R6M7LtpKh8lU4FsW1GDlrPZ6ZLdFNUVs7tRYnxSEXa3gGt52X02toI5RhkYHDqF5Q6PihGGJjWjoEHzTtho+thpWxkNMQcS50YIJPN44hedlKAUtOapw9bKMMIO9rbbT+mXFfU5Iw4EEXBFiOY6rltJ9iWSkATSNYMgzFcAbyByHREcZRTyTPwwwOlaDtuvYHiQDbeqP7QNKSSzhr4nRNa0BjDwA5W3r7dorRkcEYjjaAB8yq/tP2birI8L27Yza+wuD+yEcJ2WoPRqIykesqMm9G8T8ViKiLWMifI1tyC653DryVnpbROkJZGsbHGxrWhgc3c0c2gjIro9AdkKeCOzo2vec3OcLkk796pHyT7SNMCaowsddjAGNscrDl5m5Vr9mNBhElQRkxuXmV0Hb77PWyjX0rQ147zBueB/qUSgmhp6ARawCRzrvaTm224OCDQ6LWyRxcZZLn8LTc/Wy+sxMDQANwFl897DwiaoMwBwRswtJG9xN3EdMgvooUUREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFArNDQSm8kTHHmWi6nog0U1KyMYWNDRyAW9EQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==" },
  { title: "Iron Castings", subtitle: "(Automotive & Industrial)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsxVgIIIsgpfWaYRPJRcmPG9m6W_4EwtfO-w&s" },
  { title: "Iron Plates", subtitle: "(Cut to Size)", imageUrl: "data:image/jpeg;base64,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" },
  { title: "Iron Nails", subtitle: "(Various Sizes)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMGv5stmY5LyWVVdjwBW7Qh7AaAsOZVmtTlw&s" },
  { title: "Iron Scrap", subtitle: "(Sorted & Graded)", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPHNEI5nswev3dlmFl__kYNEehTjXDufa4Q&s" },
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
