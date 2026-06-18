"use client";
import Link from "next/link";
import Image from "next/image";

const text = "About Utkal Corporation Limited";
import {
  CalendarDays,
  TrendingUp,
  Users,
  Target,
  Award,
  Eye,
   
  FileCheck,
  Building2,
  BarChart3,
} from "lucide-react";

import {pic2,pic3,picture1,picture2,picture3,picture4,picture5} from "@/asserts/Product";
import { motion } from "framer-motion";
export default function ProgramPage() {
  const yearAnimation = {
  animate: {
    rotate: 360,
    scale: [1, 1.08, 1],
    boxShadow: [
      "0 0 0px #facc15",
      "0 0 25px #facc15",
      "0 0 0px #facc15",
    ],
  },

  transition: {
    rotate: {
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    },

    scale: {
      duration: 2.5,
      repeat: Infinity,
    },

    boxShadow: {
      duration: 2.5,
      repeat: Infinity,
    },
  },
};
const features = [
  {
    title: "Decade of Experience",
    description:
      "With over 10 years in the industry, we understand market dynamics and client needs.",
    icon: "🏆",
  },
  {
    title: "Quality Assurance",
    description:
      "All our products undergo rigorous quality checks to meet industry standards.",
    icon: "🛡️",
  },
  {
    title: "Extensive Network",
    description:
      "Strong relationships with suppliers and clients across the metal industry.",
    icon: "🌐",
  },
  {
    title: "Timely Delivery",
    description:
      "Efficient logistics ensuring on-time delivery to keep your projects on schedule.",
    icon: "🚚",
  },
  {
    title: "Competitive Pricing",
    description:
      "Best market rates without compromising on quality or service.",
    icon: "₹",
  },
  {
    title: "Customer Support",
    description:
      "Dedicated support team to address your queries and requirements promptly.",
    icon: "🎧",
  },
];

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System",
    icon: Award,
    bg: "bg-yellow-50",
    color: "text-yellow-500",
  },
  {
    name: "Trade License",
    description: "Authorized Metal Trading",
    icon: FileCheck,
    bg: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    name: "MSME Registered",
    description: "Micro, Small & Medium Enterprises",
    icon: Building2,
    bg: "bg-green-50",
    color: "text-green-500",
  },
  {
    name: "GST Registered",
    description: "Goods & Services Tax",
    icon: BarChart3,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
];
const teamData = [
  {
    title: "Leadership Team",
    image: picture1,
    icon: "👑",
    description:
      "Experienced professionals guiding our company vision and growth strategy.",
  },
  {
    title: "Sales Experts",
    image: picture2,
    icon: "🤝",
    description:
      "Dedicated professionals building strong client relationships.",
  },
  {
    title: "Logistics Team",
    image: picture3,
    icon: "🚛",
    description:
      "Efficient coordinators ensuring smooth operations and delivery.",
  },
  {
    title: "Quality Assurance",
    image: picture4,
    icon: "✅",
    description:
      "Maintaining the highest standards for all products.",
  },
];
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
     <section className="relative h-[400px] md:h-[500px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${picture5.src})`,
        }}
      />

    

    {/* Dark Overlay Only */}
<div className="absolute inset-0 bg-black/50" />

{/* Content */}
<div className="relative z-10 h-full flex items-center justify-center">
  <div className="text-center px-4 max-w-5xl">

    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight"
    >
      About Utkal Corporation Limited
    </motion.h1>

    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 80 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="h-1 bg-[#F4B400] mx-auto mt-5 rounded-full"
    />

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        duration: 0.7,
      }}
      className="mt-5 text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto"
    >
      Your trusted partner in industrial operations, logistics,
      infrastructure solutions and sustainable business growth.
    </motion.p>

  </div>
</div>
    </section>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
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
            <span className="text-gray-700 font-medium">About Us</span>
          </div>

{/*Our Story*/} 
<section className="py-20 pb-6 bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid lg:grid-cols-[480px_1fr] gap-12">

       
         {/* LEFT IMAGE NEW DESIGN */}
<div className="relative w-full h-[520px]">

  {/* Main Image */}
  <div className="overflow-hidden rounded-[40px] h-[400px] shadow-2xl">

    <Image
      src={pic2}
      alt="Metal"
      className="w-full h-full object-cover"
    />

  </div>


 


  {/* Bottom Left Curve */}
  <div className="
    absolute
    bottom-4
    left-10
   w-[230px]
    bg-[#041c42]
    rounded-r-[45px]
    rounded-tl-[20px]
    p-5
    text-white
    shadow-2xl
    z-20">

    <div className="space-y-5">

      {/* Established */}
      <div className="flex gap-3">
        <CalendarDays className="w-4 h-4 text-yellow-400 mt-1"/>

        <div>
          <p className="text-[10px] uppercase text-gray-300 tracking-wider">
            Established
          </p>

          <h3 className="text-3xl font-bold text-yellow-400">
            2012
          </h3>
        </div>
      </div>


      <div className="border-t border-gray-700"></div>


      {/* Expanded */}
      <div className="flex gap-3">

        <TrendingUp className="w-4 h-4 text-yellow-400 mt-1"/>

        <div>
          <p className="text-[10px] uppercase text-gray-300 tracking-wider">
            Expanded In
          </p>

          <h3 className="text-3xl font-bold text-yellow-400">
            2023
          </h3>

        </div>
      </div>


      <div className="border-t border-gray-600"></div>


      {/* Experience */}
      <div className="flex gap-3">

        <Users className="w-4 h-4 text-yellow-400 mt-1"/>

        <div>

          <p className="text-[10px] uppercase text-gray-300 tracking-wider">
            Experience
          </p>

          <h3 className="text-3xl font-bold text-yellow-400">
            10+
          </h3>

        </div>

      </div>

    </div>

  </div>

</div>


          {/* RIGHT CONTENT */}

          <div>


            {/* Heading */}

            <h2 className="
            text-[50px]
            font-black
            tracking-[-2px]
            leading-none
            mb-7">

              <span className="text-[#061d45]">
                Our
              </span>{" "}

              <span className="text-red-700">
                Story
              </span>

            </h2>


            {/* Highlight Box */}

            <div className="
            bg-[#f8f0da]
            border-l-4
            border-yellow-500
            rounded-2xl
            p-6
            mb-8">


              <div className="flex gap-5">

                <div className="
                w-14 h-14
                rounded-full
                bg-yellow-500
                flex items-center
                justify-center
                flex-shrink-0">

                  <Target
                  className="w-6 h-6"/>

                </div>


                <p className="
                text-[16px]
                leading-6
                text-gray-800">

                  Established in <b>2012</b>,
                  Utkal Corporation Limited has rapidly emerged
                  as a trusted name in metal trading and distribution.
                  In <b>2023</b>, we expanded our expertise to become
                  a comprehensive metal distribution solution provider.

                </p>


              </div>

            </div>
              {/* Timeline Section */}

            <div className="relative mb-12">

              {/* First Point */}
              <div className="flex gap-5 items-start">

                <div className="flex flex-col items-center">

                  <div
                    className="
                    w-12 h-12
                    rounded-full
                    bg-[#061d45]
                    text-yellow-400
                    flex items-center justify-center
                    shadow-lg">

                    <Users size={22} />

                  </div>


                  {/* Dotted Line */}

                  <div
                    className="
                    h-16
                    border-l-2
                    border-dashed
                    border-gray-400
                    mt-2">
                  </div>

                </div>


                <p
                  className="
                  text-[16px]
                  leading-6
                  text-gray-700
                  pb-10">

                  With a decade of industry experience, we have built strong
                  relationships with manufacturers, suppliers and clients
                  across the nation. Our expertise lies in sourcing,
                  quality assurance and efficient distribution of metal
                  products for various industries.

                </p>

              </div>


              {/* Second Point */}

              <div className="flex gap-5 items-start">
  <div className="flex flex-col items-center">
                <div
                  className="
                  w-12 h-12
                  rounded-full
                  bg-[#061d45]
                  text-yellow-400
                  flex items-center justify-center
                  shadow-lg">

                  <Award size={22} />

                </div>

</div>
                <p
                  className="
                  text-[16px]
                  leading-6
                  text-gray-700">

                  Our growth story reflects our commitment to quality,
                  reliability and customer satisfaction. From our humble
                  beginnings, we have evolved into a trusted metal
                  distribution network ensuring timely delivery and
                  competitive pricing.

                </p>

              </div>

            </div>



            {/* Vision & Mission Cards */}
<div className="grid md:grid-cols-2 gap-8">

  {/* Vision */}
  <div
    className="
    relative
    bg-white
    rounded-[30px]
    shadow-lg
    border-l-4 border-yellow-500
    h-[180px]
    px-8
    flex items-center">

    {/* Side Icon */}
    <div
      className="
      absolute
      -left-4
      top-6
      w-14 h-14
      rounded-r-[22px]
      bg-yellow-500
      flex items-center justify-center">

      <Eye size={26} className="text-[#041c42]" />
    </div>


    <div className="ml-8">

      <h3 className="text-[26px] font-bold">
        Our <span className="text-yellow-600">Vision</span>
      </h3>

      <div className="w-14 h-[3px] bg-yellow-500 my-2"></div>


      <p className="text-[14px] leading-6 text-gray-600 max-w-[330px]">
        To become India's most trusted and efficient metal
        distribution partner, setting new standards in supply
        chain excellence and customer service.
      </p>

    </div>

  </div>



  {/* Mission */}
  <div
    className="
    relative
    bg-white
    rounded-[30px]
    shadow-lg
    border-l-4 border-red-600
    h-[180px]
    px-8
    flex items-center">

    {/* Side Icon */}
    <div
      className="
      absolute
      -left-4
      top-6
      w-14 h-14
      rounded-r-[22px]
      bg-red-600
      flex items-center justify-center">

      <Target size={26} className="text-white" />
    </div>


    <div className="ml-8">

      <h3 className="text-[26px] font-bold">
        Our <span className="text-red-600">Mission</span>
      </h3>

      <div className="w-14 h-[3px] bg-red-600 my-2"></div>


      <p className="text-[14px] leading-6 text-gray-600 max-w-[330px]">
        To provide high-quality metal products through an
        efficient distribution network, building long-lasting
        relationships based on trust and reliability.
      </p>

    </div>

  </div>

</div>


          </div>

        </div>

      </div>

    </section>


          {/* Journey Timeline */}
        <section className="relative py-24 bg-[#f8f8f8] overflow-hidden">

  {/* Background Shapes */}
  <div className="absolute top-20 left-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#061d45]/10 rounded-full blur-3xl"></div>


  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-20">

      <span className="text-yellow-500 font-semibold tracking-[4px] uppercase">
        Company Growth
      </span>

      <h2 className="text-5xl font-black mt-4">

        <span className="text-[#061d45]">
          Our
        </span>{" "}

        <span className="text-red-700">
          Journey
        </span>

      </h2>

      <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
        A journey of innovation, trust and excellence in 
        metal trading & distribution.
      </p>

    </div>



    {/* Timeline */}
    <div className="grid md:grid-cols-4 gap-8">


      {/* 2012 */}
      <div className="flex flex-col items-center">

        <div className="
          bg-white
          rounded-[35px]
          p-7
          shadow-xl
          text-center
          hover:-translate-y-3
          transition duration-300">

          <h3 className="font-bold text-xl text-[#061d45]">
            Company Founded
          </h3>

          <p className="mt-3 text-gray-600 text-sm leading-6">
            Started as a trusted metal trading company
            with strong supplier relationships.
          </p>

        </div>


        <div className="h-12 w-[3px] bg-yellow-500"></div>


     <motion.div
  animate={yearAnimation.animate}
  transition={yearAnimation.transition}
  whileHover={{
    scale: 1.2,
    rotate: 720,
    transition: { duration: 0.6 }
  }}
  className="
  w-24 h-24 
  rounded-full
  bg-gradient-to-br
  from-yellow-400
  to-yellow-600
  text-white
  text-2xl
  font-black
  flex items-center
  justify-center
  shadow-2xl
  cursor-pointer"
>
  2012
</motion.div>

      </div>



      {/* 2015 */}
      <div className="flex flex-col items-center mt-24">


      <motion.div
  animate={yearAnimation.animate}
  transition={yearAnimation.transition}
  whileHover={{
    scale: 1.2,
    rotate: 720,
    transition: { duration: 0.6 }
  }}
  className="
  w-24 h-24 
  rounded-full
  bg-gradient-to-br
  from-yellow-400
  to-yellow-600
  text-white
  text-2xl
  font-black
  flex items-center
  justify-center
  shadow-2xl
  cursor-pointer"
>
  2015
</motion.div>

        <div className="h-12 w-[3px] bg-yellow-500"></div>


        <div className="
          bg-[#061d45]
          text-white
          rounded-[35px]
          p-7
          shadow-xl
          text-center
          hover:translate-y-3
          transition duration-300">

          <h3 className="font-bold text-xl">
            Business Expansion
          </h3>

          <p className="mt-3 text-gray-300 text-sm leading-6">
            Expanded our products and developed a 
            reliable client network.
          </p>

        </div>

      </div>



       {/* 2020 */}
      <div className="flex flex-col items-center">


        <div className="
          bg-white
          rounded-[35px]
          p-7
          shadow-xl
          text-center
          hover:-translate-y-3
          transition duration-300">

          <h3 className="font-bold text-xl text-[#061d45]">
            Supply Chain Growth
          </h3>

          <p className="mt-3 text-gray-600 text-sm leading-6">
            Enhanced logistics and improved nationwide 
            delivery capabilities.
          </p>

        </div>


        <div className="h-12 w-[3px] bg-yellow-500"></div>


        <motion.div
  animate={yearAnimation.animate}
  transition={yearAnimation.transition}
  whileHover={{
    scale: 1.2,
    rotate: 720,
    transition: { duration: 0.6 }
  }}
  className="
  w-24 h-24 
  rounded-full
  bg-gradient-to-br
  from-yellow-400
  to-yellow-600
  text-white
  text-2xl
  font-black
  flex items-center
  justify-center
  shadow-2xl
  cursor-pointer"
>
  2020
</motion.div>

      </div>



      {/* 2023 */}
      <div className="flex flex-col items-center mt-24">


     <motion.div
  animate={yearAnimation.animate}
  transition={yearAnimation.transition}
  whileHover={{
    scale: 1.2,
    rotate: 720,
    transition: { duration: 0.6 }
  }}
  className="
  w-24 h-24 
  rounded-full
  bg-gradient-to-br
  from-yellow-400
  to-yellow-600
  text-white
  text-2xl
  font-black
  flex items-center
  justify-center
  shadow-2xl
  cursor-pointer"
>
  2023
</motion.div>


        <div className="h-12 w-[3px] bg-yellow-500"></div>


        <div className="
          bg-red-700
          text-white
          rounded-[35px]
          p-7
          shadow-xl
          text-center
          hover:translate-y-3
          transition duration-300">

          <h3 className="font-bold text-xl">
            Complete Solutions
          </h3>

          <p className="mt-3 text-red-100 text-sm leading-6">
            Became a comprehensive metal distribution 
            solutions provider.
          </p>

        </div>


      </div>


    </div>

  </div>

</section>

          {/* Services Section */}
          {/* <section className="py-16 mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive metal trading and distribution solutions tailored to your needs
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Metal Trading",
                  description: "Comprehensive trading of ferrous and non-ferrous metals with competitive pricing and reliable sourcing.",
                  icon: "📊"
                },
                {
                  title: "Distribution Network",
                  description: "Efficient distribution system ensuring timely delivery to clients across various industries.",
                  icon: "🚚"
                },
                {
                  title: "Quality Assurance",
                  description: "Rigorous quality checks and certifications to ensure all products meet industry standards.",
                  icon: "✅"
                },
                {
                  title: "Supply Chain Solutions",
                  description: "End-to-end supply chain management for seamless metal procurement and delivery.",
                  icon: "🔗"
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored metal solutions based on specific client requirements and project needs.",
                  icon: "⚙️"
                },
                {
                  title: "Market Insights",
                  description: "Providing clients with valuable market trends and pricing intelligence for informed decisions.",
                  icon: "📈"
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-yellow-500 transform transition-transform hover:-translate-y-2">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section> */}

        <section className="py-14 bg-[#FAFBFD] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Top Section */}
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-10">

      {/* Left Content */}
      <div>
        <span className="text-[#F4B400] font-semibold uppercase tracking-[3px] text-sm">
          WHY CHOOSE US
        </span>

        <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[#081B3A]">
          Why Choose
          <br />
          Utkal Corporation?
        </h2>

        <div className="w-14 h-[3px] bg-[#F4B400] mt-6 mb-7"></div>

        <p className="max-w-[520px] text-[17px] leading-[2] text-[#667085]">
          We are committed to delivering excellence in metal distribution.
          Our experience, quality focus and customer-first approach make us
          a trusted partner for your success.
        </p>
      </div>

      {/* Right Image */}
      <div className="relative h-[320px] lg:h-[380px] overflow-hidden rounded-r-3xl">

        <img
          src={pic3.src}
          alt="Metal Warehouse"
          className="w-full h-full object-cover"
        />

        {/* White Fade Overlay */}
        <div className="absolute inset-y-0 left-0 w-52 bg-gradient-to-r from-[#FAFBFD] via-[#FAFBFD]/90 to-transparent"></div>

      </div>

    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-full bg-[#FFF8E8] flex items-center justify-center flex-shrink-0 text-2xl">
              {feature.icon}
            </div>

            <div>
              <h3 className="text-[24px] font-bold text-[#081B3A] mb-2">
                {feature.title}
              </h3>

              <p className="text-[15px] leading-7 text-[#667085]">
                {feature.description}
              </p>
            </div>

          </div>
        </div>
      ))}

    </div>

    {/* Stats Section */}
  <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-4">

  <div className="grid grid-cols-2 md:grid-cols-4">

    <div className="text-center py-3 px-2 md:border-r border-gray-200">
      <div className="text-3xl mb-1">👥</div>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-none">
        100+
      </h3>
      <p className="text-xs text-[#667085] mt-1">
        Clients Served
      </p>
    </div>

    <div className="text-center py-3 px-2 md:border-r border-gray-200">
      <div className="text-3xl mb-1">🤝</div>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-none">
        50+
      </h3>
      <p className="text-xs text-[#667085] mt-1">
        Supplier Partnerships
      </p>
    </div>

    <div className="text-center py-3 px-2 md:border-r border-gray-200">
      <div className="text-3xl mb-1">🏗️</div>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-none">
        1000+
      </h3>
      <p className="text-xs text-[#667085] mt-1">
        Tonnes Distributed
      </p>
    </div>

    <div className="text-center py-3 px-2">
      <div className="text-3xl mb-1">📅</div>
      <h3 className="text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-none">
        10+
      </h3>
      <p className="text-xs text-[#667085] mt-1">
        Years Experience
      </p>
    </div>

  </div>

</div>

  </div>
</section>

          {/* Certifications Section */}
       <section className="py-12 bg-[#FAFBFD]">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-8">

      <span className="text-[#F4B400] uppercase tracking-[3px] text-xs font-semibold">
        OUR CREDENTIALS
      </span>

      <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-tight">
        Certifications & Accreditations
      </h2>

      <div className="w-12 h-[3px] bg-[#F4B400] mx-auto mt-4 mb-5"></div>

      <p className="max-w-2xl mx-auto text-[15px] text-[#667085] leading-7">
        Our commitment to quality and compliance is validated through
        recognized certifications and industry accreditations.
      </p>

    </div>

    {/* Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

      {certifications.map((cert, index) => {
        const Icon = cert.icon;

        return (
          <div
            key={index}
            className="
              bg-white
              border border-gray-100
              rounded-2xl
              p-5
              text-center
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <div
              className={`
                w-16 h-16 mx-auto mb-4 rounded-full
                flex items-center justify-center
                ${cert.bg}
              `}
            >
              <Icon
                className={`w-8 h-8 ${cert.color}`}
                strokeWidth={2}
              />
            </div>

            <h3 className="text-lg font-bold text-[#081B3A] mb-2">
              {cert.name}
            </h3>

            <div className="w-10 h-[2px] bg-[#F4B400] mx-auto mb-3"></div>

            <p className="text-sm text-[#667085] leading-6">
              {cert.description}
            </p>
          </div>
        );
      })}

    </div>

  </div>
</section>

          {/* Team Section */}
         <section className="py-10 bg-[#FAFBFD] rounded-3xl mb-12">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-8">

      <span className="text-[#F4B400] uppercase tracking-[3px] text-xs font-semibold">
        OUR TEAM
      </span>

      <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold text-[#081B3A] leading-tight">
        The Strength Behind Our Success
      </h2>

      <div className="w-12 h-[3px] bg-[#F4B400] mx-auto mt-4"></div>

      <p className="mt-4 text-[15px] text-[#667085] max-w-2xl mx-auto leading-7">
        Our experienced professionals work with dedication and expertise
        to deliver the best value to our clients.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

      {teamData.map((item, index) => (

        <div
          key={index}
          className="
            bg-white
            rounded-2xl
            overflow-hidden
            border border-gray-100
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
          "
        >

          {/* Image */}
         <div className="relative h-52 overflow-hidden">

          <Image
  src={item.image}
  alt={item.title}
  fill
  className="object-cover transition duration-500 group-hover:scale-110"
/>

            {/* Floating Icon */}
            <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 z-20">

              <div
  className="
    w-14 h-14
    rounded-full
    bg-[#041C4A]
    border-4 border-white
    flex items-center justify-center
    text-2xl
    shadow-lg
  "
>
  {item.icon}
</div>

            </div>

          </div>

          {/* Content */}
          <div className="pt-8 pb-5 px-4 text-center">

            <h3 className="text-lg font-bold text-[#081B3A]">
              {item.title}
            </h3>

            <div className="w-8 h-[2px] bg-[#F4B400] mx-auto my-3"></div>

            <p className="text-[#667085] text-sm leading-6">
              {item.description}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
          {/* CTA Section */}
          {/* <section className="py-16">
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
           */}
        </div>
      </div>
    </main>
  );
}