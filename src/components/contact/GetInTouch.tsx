"use client";  // Add this at the top of your file
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
 
export default function GetInTouch() {
    useEffect(()=>{
        AOS.init({duration:1200})
    },[]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  return (
    <section className="main-container text-white flex flex-col md:flex-row bg-bgColor p-6 gap-10">
      {/* Contact Info Section */}
      <div className="md:w-1/2" data-aos='fade-right'>
        <p className="capitalize text-5xl font-bold ">Contact Info</p>
        <p className="text-xl p-6 text-wrap">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident consectetur commodi.</p>
        <p className="pt-4"><CallIcon /> 1122334455</p>
        <p className="pt-4"><MailIcon /> odo@gmail.com</p>
        <p className="pt-4"><AccessTimeIcon /> December 25, 2024</p>
        <p className="p-4 text-2xl font-bold">Party Location</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0330690686887!2d85.8212497!3d20.298898299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0a39ec9%3A0xe46791b69959a045!2sGIET%20Bhubaneswar%20Ghangapatana%20City%20Office!5e0!3m2!1sen!2sin!4v1729222104558!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          className="border-0 w-full"
        ></iframe>
      </div>

      {/* Get In Touch Form Section */}
      <div className="md:w-1/2 flex flex-col" data-aos='fade-left'>
        <p className="flex items-start text-5xl font-bold mb-6">Get In Touch</p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-red-500 text-white p-8 rounded-lg shadow-md w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="relative">
              <label htmlFor="firstName" className="block text-sm font-bold mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm border border-white bg-transparent rounded-md outline-none focus:ring-2 focus:ring-white"
              />
              
            </div>

            {/* Last Name */}
            <div className="relative">
              <label htmlFor="lastName" className="block text-sm font-bold mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-sm border border-white bg-transparent rounded-md outline-none focus:ring-2 focus:ring-white"
              />
              
            </div>
          </div>

          {/* Email Address */}
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-sm border border-white bg-transparent rounded-md outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Message */}
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 px-4 py-2 text-sm border border-white bg-transparent rounded-md outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-white text-red-500 font-semibold rounded-md hover:bg-orange-600 hover:text-white  ease-in-out duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
