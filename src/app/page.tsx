'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { About, client1, client2, client3, Homeimg1, Homeimg2, Homeimg3, Homeimg4, Homeimg5, product1, product2, product3, product4, ServiceImage1, ServiceImage2, ServiceImage3, worldmap } from '@/asserts/home';
import { m2 } from '@/asserts/Product';


type LocationIconProps = {
  top: string;
  left: string;
};

const LocationIcon: React.FC<LocationIconProps> = ({ top, left }) => (
  <span
    style={{
      position: 'absolute',
      top,
      left,
      transform: 'translate(-50%, -100%)',
      zIndex: 20,
      pointerEvents: 'none',
    }}
    aria-label="Location"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" fill="#F59E42" opacity="0.8" />
      <circle cx="16" cy="16" r="7" fill="#fff" />
      <circle cx="16" cy="16" r="3" fill="#F59E42" />
    </svg>
  </span>
);

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section with Slider */}
      <section className="w-full h-screen bg-black text-white flex items-center justify-center">
  <Slider {...sliderSettings} className="w-full h-full">
    {/* Slide 1 */}
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <img src={Homeimg1.src} alt="Slide 1" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Welcome to Utkal Corporation</h1>
        <p className="text-xl md:text-2xl text-gray-300">Leading the industry with innovation and trust</p>
      </div>
    </div>

    {/* Slide 2 */}
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-900">
      <img src={Homeimg2.src} alt="Slide 2" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Innovative Metal Recycling</h1>
        <p className="text-xl md:text-2xl text-gray-300">Eco-friendly solutions tailored for the future</p>
      </div>
    </div>

    {/* Slide 3 */}
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-800">
      <img src={Homeimg3.src} alt="Slide 3" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Sustainable Practices</h1>
        <p className="text-xl md:text-2xl text-gray-300">Committed to a greener tomorrow</p>
      </div>
    </div>

    {/* Slide 4 */}
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-700">
      <img src={Homeimg4.src} alt="Slide 4" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Our Global Presence</h1>
        <p className="text-xl md:text-2xl text-gray-300">Delivering excellence worldwide</p>
      </div>
    </div>

    {/* Slide 5 */}
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-600">
      <img src={Homeimg5.src} alt="Slide 5" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Innovation at Core</h1>
        <p className="text-xl md:text-2xl text-gray-300">Pioneering the future of metal industry</p>
      </div>
    </div>
  </Slider>
</section>


      {/* About Section */}
<section className="py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Image Section */}
    <div
      className="rounded-3xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-105"
      data-aos="fade-right"
    >
      <img
        src={m2.src}
        alt="About Utkal Corporation"
        className="w-full h-80 object-cover rounded-3xl"
      />
    </div>

    {/* Content Section */}
    <div
      className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10"
      data-aos="fade-left"
    >
      <h2 className="text-4xl font-extrabold text-blue-900 mb-4 leading-snug">
        About <span className="text-blue-600">Utkal Corporation</span>
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed">
        Utkal Corporation is one of the largest non-ferrous metal recycling companies in India,
        with decades of expertise in delivering <span className="text-blue-600 font-medium">quality</span> and
        <span className="text-blue-600 font-medium"> sustainable solutions</span> for a better future.
      </p>
    </div>
  </div>
</section>

      {/* Services Section with Slider */}
<section className="py-16 px-4 bg-gray-100">
  <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
    <h2 className="text-3xl font-semibold mb-12">Our Services</h2>

    <Slider {...sliderSettings} className="relative">
      {[ServiceImage1, ServiceImage2, ServiceImage3].map((image, idx) => (
        <div key={idx} className="flex justify-center  items-center bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image Left */}
          <div className=" w-full">
            <img
              src={image.src}
              alt={`Service ${idx + 1}`}
              className="w-full h-full object-cover max-h-[400px]"
              loading="lazy"
            />
          </div>

          {/* Content Right */}
          <div className=" w-full p-8 flex flex-col justify-center">
            {idx === 0 && (
              <>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Scrap Processing and Recycling
                </h3>
                <p className="text-gray-600 leading-relaxed max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  Transforming Waste into Valuable Resources

                  Scrap processing and recycling are pivotal in the modern industrial landscape, serving as the cornerstone of sustainable manufacturing practices. This process involves the collection, sorting, and reprocessing of metal waste materials—such as old machinery, vehicles, and construction debris—into reusable raw materials. By diverting scrap from landfills, recycling conserves natural resources, reduces energy consumption, and minimizes greenhouse gas emissions.

                  The global scrap metal recycling market was valued at approximately USD 407.02 billion in 2023, with projections to reach USD 568.76 billion by 2032, growing at a CAGR of 3.8%. This growth is driven by the increasing demand for sustainable materials in industries such as construction, automotive, and electronics. Recycling one ton of steel can prevent the use of 2,500 pounds of iron ore and 1,400 pounds of coal, significantly reducing energy consumption and emissions.

                  Modern scrap processing facilities employ advanced technologies to enhance efficiency and material recovery. Automated sorting systems, magnetic separators, and shredders enable the precise extraction of valuable metals from mixed waste streams. Additionally, innovations in hydrometallurgical and pyrometallurgical processes allow for the recovery of metals from complex waste sources, further improving recycling rates.

                  Despite significant advancements, the scrap recycling industry faces challenges such as fluctuating commodity prices, inconsistent quality of incoming scrap, and the need for infrastructure development. Addressing these issues through policy reforms, investment in recycling infrastructure, and public awareness campaigns can unlock the full potential of scrap processing and recycling, contributing to a circular economy.
                </p>
              </>
            )}
            {idx === 1 && (
              <>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Custom Metal Refining
                </h3>
                <p className="text-gray-600 leading-relaxed max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  Tailored Solutions for Diverse Industries

                  Custom metal refining involves the precise processing of raw metals to meet specific industry standards and applications. This service is essential for sectors requiring high-performance materials, such as aerospace, automotive, and electronics. By adjusting chemical compositions and refining processes, manufacturers can produce metals with desired properties, including strength, corrosion resistance, and conductivity.

                  Common metal refining techniques include electrorefining, pyrometallurgical processes, and hydrometallurgical methods. Electrorefining uses electrical currents to purify metals, while pyrometallurgical processes involve high-temperature treatments to separate impurities. Hydrometallurgical methods utilize aqueous solutions to extract metals, offering advantages in terms of energy efficiency and selectivity.

                  In the automotive industry, custom metal refining ensures the production of lightweight yet durable components, contributing to fuel efficiency and safety. Aerospace manufacturers rely on refined metals for engine parts and structural components that must withstand extreme conditions. In electronics, refined metals are crucial for the production of semiconductors and connectors that enable high-speed data transmission.

                  The demand for sustainable practices in metal refining is increasing. Implementing energy-efficient technologies, recycling by-products, and reducing emissions are essential steps towards achieving environmental sustainability in metal refining.
                </p>
              </>
            )}
            {idx === 2 && (
              <>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  Environmental Sustainability Services
                </h3>
                <p className="text-gray-600 leading-relaxed max-h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                  Commitment to a Greener Future

                  Environmental sustainability services encompass a range of practices aimed at minimizing the ecological footprint of industrial operations. In the metal industry, this includes reducing energy consumption, minimizing waste, and lowering emissions throughout the production lifecycle. By adopting sustainable practices, companies can not only comply with environmental regulations but also achieve cost savings and enhance their corporate reputation.

                  Key strategies for promoting sustainability in metal manufacturing include:

                  - Energy Efficiency: Investing in energy-efficient equipment and processes to reduce energy consumption.
                  - Resource Efficiency: Optimizing the use of raw materials and minimizing waste generation.
                  - Pollution Control: Implementing technologies to reduce emissions and treat waste products.
                  - Water Conservation: Recycling water used in manufacturing processes to reduce consumption.
                  - Sustainable Sourcing: Obtaining raw materials from suppliers that adhere to environmental standards.

                  The global push towards sustainability has led to the development of standards and certifications for environmentally friendly metals. For example, the London Metal Exchange plans to introduce a green premium for metals mined sustainably, allowing traders to purchase green aluminium, copper, nickel, and zinc through Metalshub.

                  Despite the benefits, implementing sustainable practices in metal manufacturing presents challenges such as high initial investment costs and technological barriers. However, advancements in technology, government incentives, and increasing consumer demand for sustainable products are driving the adoption of environmental sustainability services in the metal industry.
                </p>
              </>
            )}
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>


      {/* Product Section */}
<section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
    <h2 className="text-4xl font-bold mb-16 text-gray-800">Our Products</h2>

    <div className="grid md:grid-cols-4 gap-10">
      {/* Copper */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <img
          src={product2.src}
          alt="Copper"
          className="w-full h-60 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 text-left">
          <h3 className="text-2xl font-bold text-white">Copper</h3>
          <p className="text-white text-sm mt-2 max-w-[90%]">
            With the annual recycling capacity scrap of copper, motor, cables etc.
          </p>
          <button className="text-white font-semibold mt-3 hover:underline">
            Explore +
          </button>
        </div>
      </div>

      {/* Lead */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <img
          src={product1.src}
          alt="Lead"
          className="w-full h-60 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 text-left">
          <h3 className="text-2xl font-bold text-white">Lead</h3>
          <p className="text-white text-sm mt-2 max-w-[90%]">
            With the annual recycling capacity scrap of lead, lead acid batteries etc.
          </p>
          <button className="text-white font-semibold mt-3 hover:underline">
            Explore +
          </button>
        </div>
      </div>

      {/* Aluminium */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <img
          src={product3.src}
          alt="Aluminum"
          className="w-full h-60 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 text-left">
          <h3 className="text-2xl font-bold text-white">Aluminium</h3>
          <p className="text-white text-sm mt-2 max-w-[90%]">
            With the annual recycling capacity scrap of Aluminium scrap.
          </p>
          <button className="text-white font-semibold mt-3 hover:underline">
            Explore +
          </button>
        </div>
      </div>

      {/* Zinc */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl transition-transform transform hover:scale-105">
        <img
          src={product4.src}
          alt="Zinc"
          className="w-full h-60 object-cover rounded-t-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl"></div>
        <div className="absolute bottom-6 left-6 text-left">
          <h3 className="text-2xl font-bold text-white">Iron</h3>
          <p className="text-white text-sm mt-2 max-w-[90%]">
            State of the art Iron refinery, we produce high-purity Iron of &gt;99.95%.
          </p>
          <button className="text-white font-semibold mt-3 hover:underline">
            Explore +
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



<section className="relative w-full py-24 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
  {/* Blurred World Map Background */}
  <div className="absolute inset-0 z-0 opacity-full">
    <img
      src={worldmap.src}
      alt="World Map"
      className="w-full h-full object-cover blur-[3px]"
    />
  </div>

  {/* Section Content */}
  <div className="relative z-10 container text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight tracking-tight">
      Expanding Across <span className="text-red-500">70+ Countries</span>
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
      Our presence is felt worldwide, connecting talent, innovation, and opportunity across continents.
    </p>

    {/* Interactive Map Icons */}
    <div className="relative w-full h-[500px] max-w-6xl mx-auto">
      {/* Sample Location Pins */}
      <LocationIcon top="15%" left="98%" />
      <LocationIcon top="38%" left="58%" />
      <LocationIcon top="50%" left="35%" />
      <LocationIcon top="65%" left="75%" />
      {/* Add more <LocationIcon /> as needed */}
    </div>

    {/* Scroll Down Bouncing Button */}
    <div className="mt-12 flex justify-center">
      <button className="animate-bounce bg-yellow-400 hover:bg-yellow-500 text-white p-4 rounded-full shadow-xl transition">
        <span className="text-2xl">↓</span>
      </button>
    </div>
  </div>
</section>

      {/* Clients Section with Slider */}
      <section className="py-20 px-4 bg-gray-100">
  <div className="max-w-9xl mx-auto text-center" data-aos="zoom-in">
    <h2 className="text-4xl font-bold text-gray-800 mb-16">What Our Clients Say</h2>

    {/* Review Slider */}
    <Slider {...sliderSettings2}>
      {/* Review 1 */}
      <div className="px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto text-center">
          <img
            src={client1.src}
            alt="Client 1"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">“Utkal Corporation went above and beyond. Our partnership over the years.”</p>
          <h4 className="text-lg font-semibold text-gray-800">Ramesh Kumar</h4>
        </div>
      </div>

      {/* Review 2 */}
      <div className="px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto text-center">
          <img
            src={client2.src}
            alt="Client 2"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">“Truly professional service and reliable communication throughout.”</p>
          <h4 className="text-lg font-semibold text-gray-800">Ananta Mehta</h4>
        </div>
      </div>

      {/* Review 3 */}
      <div className="px-6">
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto text-center">
          <img
            src={client3.src}
            alt="Client 3"
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">“They helped us scale smoothly. Trustworthy and top-quality output.”</p>
          <h4 className="text-lg font-semibold text-gray-800">Vikram Patel</h4>
        </div>
      </div>
    </Slider>
  </div>
</section>



      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-100">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side - Contact Details */}
    <div data-aos="fade-right">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>

      <div className="space-y-4 text-lg text-gray-600">
        <p><strong>Email:</strong> info@utkalcorporation.com</p>
        <p><strong>Phone:</strong> +91 9777098999</p><span className='ml-16'>+91 9777063999</span>
        <p><strong>Address:</strong> Bhubaneswar, Odisha, India</p>
      </div>

      {/* Map Below Contact Info */}
      <div className="mt-8 rounded-lg overflow-hidden shadow-lg" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <div className="bg-white p-8 rounded-xl shadow-2xl" data-aos="fade-left">
      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="your@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="py-8 px-4 bg-gray-800 text-white text-center" data-aos="fade-up">
        <p>&copy; 2025 Utkal Corporation Group. All rights reserved.</p>
      </footer>
    </div>
  );
}