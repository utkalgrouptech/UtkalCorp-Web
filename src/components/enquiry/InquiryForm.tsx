"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <section className="pb-16">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">

          <p className="text-amber-500 uppercase tracking-[5px] mb-2">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Send Your Inquiry
          </h2>

          <p className="text-gray-500 mt-3">
            Fill out the form below and our team will contact you shortly.
          </p>

        </div>


        {/* Form Card */}
        <div className="
          bg-white 
          rounded-3xl 
          shadow-xl 
          border 
          border-gray-100 
          p-8 md:p-10
        ">

          <form className="space-y-6">

            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-5">


              <div className="relative">

                <User className="absolute left-4 top-4 text-amber-500 w-5 h-5" />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                  w-full 
                  pl-12 
                  pr-4 
                  py-4
                  rounded-xl 
                  border 
                  border-gray-200 
                  outline-none 
                  focus:border-amber-500
                  transition
                  "
                  
                />

              </div>


              <div className="relative">

                <Mail className="absolute left-4 top-4 text-amber-500 w-5 h-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                  w-full 
                  pl-12 
                  py-4 
                  rounded-xl 
                  border 
                  border-gray-200 
                  outline-none 
                  focus:border-amber-500
                  "
                />

              </div>


            </div>


            {/* Phone & Inquiry Type */}
            <div className="grid md:grid-cols-2 gap-5">


              <div className="relative">

                <Phone className="absolute left-4 top-4 text-amber-500 w-5 h-5"/>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="
                  w-full
                  pl-12
                  py-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  focus:border-amber-500
                  "
                />

              </div>


              <div className="relative">

                <ClipboardList 
                  className="absolute left-4 top-4 text-amber-500 w-5 h-5 z-10"
                />

                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  required
                  className="
                  w-full
                  pl-12
                  py-4
                  rounded-xl
                  border
                  border-gray-200
                  outline-none
                  focus:border-amber-500
                  appearance-none
                  bg-white
                  "
                >

                  <option value="">
                    Select Inquiry Type
                  </option>

                  <option value="General Inquiry">
                    General Inquiry
                  </option>

                  <option value="Business Partnership">
                    Business Partnership
                  </option>

                  <option value="Product Information">
                    Product Information
                  </option>

                  <option value="Career Opportunities">
                    Career Opportunities
                  </option>

                  <option value="Technical Support">
                    Technical Support
                  </option>

                  <option value="Other">
                    Other
                  </option>

                </select>

              </div>


            </div>


            {/* Message */}
            <div className="relative">

              <MessageSquare 
                className="absolute left-4 top-4 text-amber-500 w-5 h-5"
              />

              <textarea
                name="message"
                placeholder="Tell us about your requirement..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-xl
                border
                border-gray-200
                outline-none
                resize-none
                focus:border-amber-500
                "
              />

            </div>


            {/* Button */}
            <button
              className="
              w-full
              bg-gradient-to-r
              from-amber-500
              to-orange-600
              text-white
              py-4
              rounded-xl
              font-semibold
              flex
              justify-center
              items-center
              gap-2
              hover:scale-[1.01]
              transition
              "
            >
              Submit Inquiry
              <ArrowRight size={18}/>
            </button>


          </form>

        </div>

      </div>

    </section>
  );
}