"use client";

import { useState } from "react";
import { ArrowRight, Upload } from "lucide-react";

export function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    experience: "",
    message: "",
    resume: null as File | null,
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

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
        

          <h2 className="text-4xl font-bold text-gray-900">
            Apply For A Career
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Share your details with us. Our HR team will review your
            application and get in touch with suitable opportunities.
          </p>

        </div>


        {/* Form Card */}
        <div className="
          bg-white
          rounded-3xl
          shadow-lg
          border border-gray-100
          p-8 md:p-10
        ">

          <form className="space-y-6">


            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name *
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="
                    w-full
                    bg-gray-50
                    border border-gray-200
                    rounded-xl
                    px-4 py-3
                    outline-none
                    focus:border-amber-500
                    focus:bg-white
                    transition
                  "
                />
              </div>


              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email Address *
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="
                    w-full
                    bg-gray-50
                    border border-gray-200
                    rounded-xl
                    px-4 py-3
                    outline-none
                    focus:border-amber-500
                    focus:bg-white
                    transition
                  "
                />
              </div>

            </div>


            {/* Phone & Position */}
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white transition"
                />
              </div>


              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Position Applying For *
                </label>

                <select
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white"
                >
                  <option value="">
                    Select Position
                  </option>

                  <option>
                    Mechanical Engineer
                  </option>

                  <option>
                    Electrical Engineer
                  </option>

                  <option>
                    Project Engineer
                  </option>

                  <option>
                    Site Supervisor
                  </option>

                  <option>
                    Safety Officer
                  </option>

                  <option>
                    Other
                  </option>

                </select>
              </div>

            </div>


            {/* Experience & Location */}
            <div className="grid md:grid-cols-2 gap-6">


              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Experience *
                </label>

                <input
                  type="text"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Example: 3 Years"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>


              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Current Location *
                </label>

                <input
                  type="text"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your city"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

            </div>


            {/* Resume Upload */}
            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Upload Resume *
              </label>

              <label className="
                flex
                items-center
                justify-center
                gap-3
                border-2
                border-dashed
                border-gray-300
                rounded-xl
                p-6
                cursor-pointer
                hover:border-amber-500
                transition
              ">

                <Upload className="text-amber-500 w-5 h-5"/>

                <span className="text-gray-600">
                  {formData.resume 
                    ? formData.resume.name 
                    : "Choose PDF or DOC file"}
                </span>


                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />

              </label>

            </div>


            {/* Message */}
            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Cover Letter / Message
              </label>

              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your skills and experience..."
                className="
                  w-full
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  resize-none
                  focus:border-amber-500
                  focus:bg-white
                "
              />

            </div>


            {/* Button */}
            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-amber-500
                to-orange-600
                hover:from-amber-600
                hover:to-orange-700
                text-white
                font-semibold
                py-4
                rounded-xl
                flex
                justify-center
                items-center
                gap-2
                transition
              "
            >
              Submit Application
              <ArrowRight size={18}/>
            </button>


          </form>

        </div>

      </div>

    </section>
  );
}